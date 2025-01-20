import PreviewContract from "@/components/contracts/preview-contract";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { CreateContractApiSchema, UpdateContractSchema } from "@/schemas/contracts";
import { UpdateContractTypes } from "@/types/contracts";
import { AppErr } from "@/utils/app-err";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, LoaderPinwheel } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import TipTap from "../../components/contracts/tiptap";
import { FetchSingleTemplate } from "@/api/templates";
import { useEffect, useState } from "react";
import { Agreement } from "@/types/templates";
import { useAuth } from "@/hooks/use-auth";
import { useContract } from "@/hooks/use-contracts";
import { toast } from "@/hooks/use-toast";

const UseTemplate = () => {
  const { id } = useParams();
  const { userInfo, isLoading: authLoading } = useAuth();

  const [templateData, setTemplateData] = useState<Agreement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const { CreateContractMutation } = useContract();

  const form = useForm<UpdateContractTypes>({
    mode : "onChange",
    resolver: zodResolver(UpdateContractSchema),
    defaultValues: {
      title: "",
      clientName: "",
      content: "",
    },
  });

  const fetchSingleContract = async () => {
    try {
      setLoading(true);
      if (id) {
        const response = await FetchSingleTemplate(id);
        setTemplateData(response.data);
      }
    } catch (error) {
      AppErr(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchSingleContract();
    }
  }, [id]);

  useEffect(() => {
    if (templateData) {
      form.setValue("content", templateData.content || "");
      form.setValue("title", templateData.title || "");
    }
  }, [templateData, form]);

  const onSubmit = async (values: UpdateContractTypes) => {
    try {
      if (!authLoading) {
        const payload = {
            participants: [userInfo?.data.user._id] as string[],
            title : values.title,
            clientName : values.clientName,
            content : values.content,
            status : "Pending"
        };
        const parsedPayload = await CreateContractApiSchema.safeParseAsync(payload);
        if (parsedPayload.error) {
            throw new Error(parsedPayload.error.message);
        }
        const response = await CreateContractMutation.mutateAsync(parsedPayload.data);
        
        if (response?.message) {
          toast({
            title: "Success",
            description: "Contract has been saved with this template.",
            variant: "default",
          });
          navigate("/edit");
        }
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
            Use <span className="text-primary">Template</span>
          </h1>
          <p className="text-sm font-medium tracking-tight leading-tight text-wrap">
            Update contracts with ease using our interactive editor.
          </p>
        </section>

        <main className="flex flex-row items-center gap-3 flex-wrap">
          {templateData && <PreviewContract contractDetails={templateData.content} />}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size={"sm"}
                  variant={"default"}
                  onClick={() => form.handleSubmit(onSubmit)()}
                >
                  <Check />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Save Contract</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </main>
      </main>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 my-6">
          <main className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contract Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Eg: Collaboration Project Contract" {...field} />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>Provide a proper name for the contract.</FormDescription>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="clientName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Client Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Eg: John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    Enter the client's name. Additional details can be added later.
                  </FormDescription>
                </FormItem>
              )}
            />
          </main>

          {loading ? (
            <div className="flex justify-center items-center w-full h-[40vh]">
              <LoaderPinwheel className="h-10 w-10 animate-spin" />
            </div>
          ) : (
            templateData && (
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contract - Edit</FormLabel>
                    <FormControl>
                      <TipTap contract={field.value} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                    <FormDescription>
                      Use the text editor to modify the contract.
                    </FormDescription>
                  </FormItem>
                )}
              />
            )
          )}
        </form>
      </Form>
    </div>
  );
};

export default UseTemplate;
