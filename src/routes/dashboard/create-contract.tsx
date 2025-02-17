import PreviewContract from "@/components/contracts/preview-contract"
import SaveAsDraft from "@/components/contracts/save-as-draft"
import SaveAsTemplates from "@/components/contracts/save-as-templates"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useAuth } from "@/hooks/use-auth"
import { CreateContractApiSchema, CreateContractsSchema } from "@/schemas/contracts"
import { CreateContractTypes } from "@/types/contracts"
import { AppErr } from "@/utils/app-err"
import { zodResolver } from "@hookform/resolvers/zod"
import { Check } from "lucide-react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import TipTap from "../../components/contracts/tiptap"
import { useContract } from "@/hooks/use-contracts"
import { toast } from "@/hooks/use-toast"

const CreateContract = () => {
    const {userInfo} = useAuth();
    const form = useForm<CreateContractTypes>({
        mode : 'onChange',
        resolver : zodResolver(CreateContractsSchema),
        defaultValues : {
            title : "",
            clientName : "",
            participants : [userInfo?.data.user._id],
            content : ""
        }
    });

    const navigate = useNavigate();
    const {CreateContractMutation} = useContract();
    const onSubmit = async (values : CreateContractTypes) => {
        try {
            console.log(values);
            const payload = {
                status : 'Pending Approval',
                ...values
            };
            const parsedPayload = await CreateContractApiSchema.safeParseAsync(payload);

            if (parsedPayload.error) {
                throw new Error(parsedPayload.error.message);
            }

            const response = await CreateContractMutation.mutateAsync(parsedPayload.data);

            if (response) {
                toast({
                    title : "Success",
                    description : "Contract has been created : mode - Pending",
                    variant : "default"
                });
                navigate("/edit");
            }
        } catch (error) {
            AppErr(error);
        }
    };

    const content = {
        title : form.getValues('title'),
        content : form.getValues('content'),
        participants : [userInfo?.data.user._id],
        clientName : form.getValues('clientName')
    };

  return (
    <div className="p-4">
      <main className="min-h-[10vh] w-full flex justify-between items-center flex-wrap gap-4">
        <section className="flex flex-col justify-start gap-1 leading-tight">
          <h1 className="text-3xl font-semibold text-foreground tracking-tight">
            Create <span className="text-primary">New Contract</span>
          </h1>
          <p className="text-sm font-medium tracking-tight leading-tight text-wrap">
            Create the contracts wth ease and user interactive contract editor
          </p>
        </section>

        <main className="flex flex-row items-center gap-3 flex-wrap">
            <SaveAsTemplates contractContent={form.getValues('content')} />
            <SaveAsDraft contractContent={content} />
            <PreviewContract contractDetails={form.getValues('content')} />
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button size={"sm"} variant={"default"} onClick={() => form.handleSubmit(onSubmit)()}>
                            <Check />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        Save Contract
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </main>
        </main>

        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 my-6">
            <main className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormField control={form.control} name="title" render={({field}) => (
                    <FormItem>
                        <FormLabel>
                            Contract Name
                        </FormLabel>
                        <FormControl>
                            <Input {...field} name="Eg: collaboration project contract" />
                        </FormControl>
                        <FormMessage />
                        <FormDescription>
                            Give a proper name for the contract
                        </FormDescription>
                    </FormItem>
                )} />

                <FormField control={form.control} name="clientName" render={({field}) => (
                    <FormItem>
                        <FormLabel>
                            Client for contract
                        </FormLabel>
                        <FormControl>
                            <Input {...field} name="Eg: John Doe" />
                        </FormControl>
                        <FormMessage />
                        <FormDescription>
                            Enter client name, if you want to add more info on client, it is on next update
                        </FormDescription>
                    </FormItem>
                )} />
            </main>

            <FormField control={form.control} name="content" render={({field}) => (
                    <FormItem>
                        <FormLabel>
                            Contract - Edit
                        </FormLabel>
                        <FormControl>
                            <TipTap contract={field.value} onChange={field.onChange} />
                        </FormControl>
                        <FormMessage />
                        <FormDescription>
                            Utilize the text editor to create the editor, AI features or on next update.
                        </FormDescription>
                    </FormItem>
                )} />
        </form>
        </Form>
    </div>
  )
}

export default CreateContract