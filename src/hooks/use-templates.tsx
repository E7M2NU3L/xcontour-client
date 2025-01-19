import { createTemplate, DeleteTemplates, FetchAllPublicTemplates, FetchUserTemplates } from "@/api/templates";
import { createTemplateTypes } from "@/types/templates";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export const useTemplatesHook = () => {
    const queryclient = useQueryClient();

    const {data : publicTemplates, isPending : isFetchingPublicTemplates} = useQuery({
        queryFn : FetchAllPublicTemplates,
        queryKey : ['public-templates']
    });

    const {data : userTemplates, isPending : isFetchingUserTemplates} = useQuery({
        queryFn : FetchUserTemplates,
        queryKey : ['user-templates']
    });

    const CreateTemplateMutation = useMutation({
        mutationFn : (values : createTemplateTypes) => createTemplate(values),
        mutationKey : ['create-template'],
        onSuccess : () => {
            queryclient.invalidateQueries({
                queryKey : ['user-templates']
            })
        }
    });
    const DeleteTemplateMutation = useMutation({
        mutationFn : (id : string) => DeleteTemplates(id),
        mutationKey : ['delete-templates'],
        onSuccess : () => {
            queryclient.invalidateQueries({
                queryKey : ['user-templates']
            })
        }
    });
    
    return {
        publicTemplates,
        isFetchingPublicTemplates,
        userTemplates,
        isFetchingUserTemplates,
        CreateTemplateMutation,
        DeleteTemplateMutation
    }
}