import PreviewContract from "@/components/contracts/preview-contract"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { UpdateContractApiSchema, UpdateContractSchema } from "@/schemas/contracts"
import { Contract, UpdateContractTypes } from "@/types/contracts"
import { AppErr } from "@/utils/app-err"
import { zodResolver } from "@hookform/resolvers/zod"
import { Check, LoaderPinwheel } from "lucide-react"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import TipTap from "../../components/contracts/tiptap"
import { useEffect, useState } from "react"
import { FetchSingleContract } from "@/api/contracts"
import { useContract } from "@/hooks/use-contracts"
import { toast } from "@/hooks/use-toast"

const UpdateContract = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [contractData, setContractData] = useState<Contract | null>(null);

    const { id } = useParams();
    const {UpdateContractMutation} = useContract();

    const form = useForm<UpdateContractTypes>({
        mode : "onChange",
        resolver: zodResolver(UpdateContractSchema),
        defaultValues: {
            title: "",
            clientName: "",
            content: ""
        }
    });

    // Fetch contract details
    useEffect(() => {
        const fetchContract = async (id: string) => {
            try {
                setLoading(true);
                const response = await FetchSingleContract(id);
                setContractData(response?.data);
            } catch (error) {
                AppErr(error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchContract(id);
        }
    }, [id]);

    // Populate form values once contractData is loaded
    useEffect(() => {
        if (contractData) {
            form.setValue("title", contractData.title || "");
            form.setValue("clientName", contractData.clientName || "");
            form.setValue(
                "content",
                contractData?.versions?.[contractData?.versions?.length - 1]?.content || ""
            );
        }
    }, [contractData, form]);

    const navigate = useNavigate();
    const onSubmit = async (values: UpdateContractTypes) => {
        try {
            const payload = {
                id,
                ...values
            };
            const parsedPayload = await UpdateContractApiSchema.safeParseAsync(payload);
            console.log(parsedPayload);

            if (parsedPayload.error) {
                throw new Error(parsedPayload.error.message);
            }
            const response = await UpdateContractMutation.mutateAsync(parsedPayload.data);

            if (response.message) {
                toast({
                    title : "Success",
                    description : response?.message
                });

                navigate("/edit");
            }
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
                        Update the contracts with ease and an interactive editor.
                    </p>
                </section>

                <main className="flex flex-row items-center gap-3 flex-wrap">
                    <PreviewContract contractDetails="" />
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button size={"sm"} onClick={() => form.handleSubmit(onSubmit)()} variant={"default"}>
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

            {loading && (
                <main className="flex flex-col justify-center items-center h-[70vh] w-full">
                    <LoaderPinwheel className="h-10 w-10 animate-spin" />
                </main>
            )}

            {!loading && contractData && (
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex flex-col gap-4 my-6"
                    >
                        <main className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Contract Name</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder="Eg: Collaboration Project Contract" />
                                        </FormControl>
                                        <FormMessage />
                                        <FormDescription>
                                            Give a proper name for the contract.
                                        </FormDescription>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="clientName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Client for Contract</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder="Eg: John Doe" />
                                        </FormControl>
                                        <FormMessage />
                                        <FormDescription>
                                            Enter the client's name. More options for client info will be available in future updates.
                                        </FormDescription>
                                    </FormItem>
                                )}
                            />
                        </main>

                        <FormField
                            control={form.control}
                            name="content"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Contract - Edit</FormLabel>
                                    <FormControl>
                                        <TipTap
                                            contract={field.value}
                                            onChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                    <FormDescription>
                                        Use the text editor to create or edit the contract. AI features will be added in the next update.
                                    </FormDescription>
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>
            )}
        </div>
    );
};

export default UpdateContract;
