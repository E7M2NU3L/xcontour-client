import { z } from "zod";

export const CreateTemplateSchema = z.object({
    title : z.string(),
    description : z.string(),
    content : z.string()
});