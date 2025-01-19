import { LayoutTemplate, Loader } from "lucide-react"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Button } from "../ui/button"
import { useForm } from "react-hook-form"
import { createTemplateTypes } from "@/types/templates"
import { zodResolver } from "@hookform/resolvers/zod"
import { CreateTemplateSchema } from "@/schemas/templates"
import { AppErr } from "@/utils/app-err"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "../ui/alert"
import { toast } from "@/hooks/use-toast"
import { useState } from "react"
import { useTemplatesHook } from "@/hooks/use-templates"

const SaveAsTemplates = ({contractContent} : {
    contractContent : string
}) => {
    const form = useForm<createTemplateTypes>({
        resolver : zodResolver(CreateTemplateSchema),
        defaultValues : {
            title : "",
            description : "",
            content : contractContent
        }
    });
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [loading, setIsLoading] = useState<boolean>(false);

    const {CreateTemplateMutation} = useTemplatesHook();

    const onSubmit = async (values : createTemplateTypes) => {
        try {
            setIsLoading(true);
            console.log(values);
            const response = await CreateTemplateMutation.mutateAsync(values);

            if (response?.data) {
                toast({
                    title : "Success",
                    description : "Template has been saved to your dashboard"
                });
            }
        } catch (error) {
            AppErr(error);
        } finally {
            form.setValue('title', '');
            form.setValue('description', '');
            setIsLoading(false);
            setIsOpen(false);
        }
    }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
            <Button variant={"outline"} size={"sm"}>
                <LayoutTemplate className="mr-1 h-4 w-4" />
                Save as Template
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Save as Template
                </DialogTitle>
                <DialogDescription>
                    This is a best way to make your contracts reusable and save your time
                </DialogDescription>
            </DialogHeader>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <FormField control={form.control} name="title" render={({field}) => (
                        <FormItem className="space-y-0">
                            <FormLabel>
                                Title
                            </FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Eg: Collaboration Project Contract" className="placeholder:text-sm" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    <FormField control={form.control} name="description" render={({field}) => (
                        <FormItem className="space-y-0">
                            <FormLabel>
                                Description
                            </FormLabel>
                            <FormControl>
                                <Textarea {...field} placeholder="type something descriptive about the template" className="placeholder:text-sm" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    <Alert>
                        <AlertTitle>
                            Custom Template
                        </AlertTitle>
                        <AlertDescription className="line-clamp-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </AlertDescription>
                    </Alert>

                    <DialogFooter className="flex flex-row w-full justify-end items-center gap-3">
                        <DialogClose asChild>
                            <Button variant={"outline"} size={"sm"}>Cancel</Button>
                        </DialogClose>
                        <Button type="submit" variant={"default"} size={"sm"} disabled={loading}>{
                            loading ? <>
                                <Loader className="h-4 w-4 animate-spin mr-1" />
                                Saving
                            </> : <>
                            Save</>}</Button>
                    </DialogFooter>
                </form>
            </Form>
        </DialogContent>
    </Dialog>
  )
}

export default SaveAsTemplates