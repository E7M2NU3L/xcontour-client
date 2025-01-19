import { CreateTemplateSchema } from "@/schemas/templates";
import { z } from "zod";

export type createTemplateTypes = z.infer<typeof CreateTemplateSchema>