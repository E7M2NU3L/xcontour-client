import { CreateContractsSchema, UpdateContractSchema, updateStatusSchema } from "@/schemas/contracts";
import { z } from "zod";

export type CreateContractTypes = z.infer<typeof CreateContractsSchema>;
export type UpdateContractTypes = z.infer<typeof UpdateContractSchema>;
export type UpdateStatusTypes = z.infer<typeof updateStatusSchema>;
export type UpdateContractApiTypes = z.infer<typeof UpdateContractSchema>;