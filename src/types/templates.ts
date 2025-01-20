import { CreateTemplateSchema } from "@/schemas/templates";
import { z } from "zod";

export type createTemplateTypes = z.infer<typeof CreateTemplateSchema>

export interface TemplateProps {
    _id: string;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    description: string;
    displayContent: string;
    public: boolean;
    title: string;
    content: string;
    __v: number;
  }

  export interface Agreement {
    title: string; // Title of the agreement
    content: string; // HTML or string content of the agreement
    public: boolean; // Indicates whether the agreement is public or not
    displayContent: string; // Processed or rendered content for display
    createdAt: Date; // Date when the agreement was created
    updatedAt: Date; // Date when the agreement was last updated
    description?: string | null; // Optional description of the agreement
    createdBy?: string; // ID of the creator (Mongoose ObjectId or string)
    _id: string; // Unique identifier for the agreement
    __v?: number; // Mongoose version key (optional)
  }