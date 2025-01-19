import PreviewContract from "@/components/contracts/preview-contract"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { UpdateContractSchema } from "@/schemas/contracts"
import { UpdateContractTypes } from "@/types/contracts"
import { AppErr } from "@/utils/app-err"
import { zodResolver } from "@hookform/resolvers/zod"
import { Check } from "lucide-react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import TipTap from "../../components/contracts/tiptap"

const UpdateContract = () => {
    const form = useForm<UpdateContractTypes>({
        resolver : zodResolver(UpdateContractSchema),
        defaultValues : {
            title : "",
            clientName : "",
            contract : ""
        }
    });

    const navigate = useNavigate();
    const onSubmit = async (values : UpdateContractTypes) => {
        try {
            console.log(values);
            navigate("/edit");
        } catch (error) {
            AppErr(error);
        }
    };
  return (
    <div className="p-4">
      <main className="min-h-[10vh] w-full flex justify-between items-center flex-wrap gap-4">
        <section className="flex flex-col justify-start gap-1 leading-tight">
          <h1 className="text-3xl font-semibold text-foreground tracking-tight">
            Update <span className="text-primary">Contract</span>
          </h1>
          <p className="text-sm font-medium tracking-tight leading-tight text-wrap">
            Update the contracts wth ease and user interactive contract editor
          </p>
        </section>

        <main className="flex flex-row items-center gap-3 flex-wrap">
            <PreviewContract contractDetails="" />
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button size={"sm"} variant={"default"}>
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

                <FormField control={form.control} name="title" render={({field}) => (
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

            <FormField control={form.control} name="contract" render={({field}) => (
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

export default UpdateContract