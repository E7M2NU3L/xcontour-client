import { z } from "zod";

export const CreateContractsSchema = z.object({
    title : z.string(),
    clientName : z.string(),
    contract : z.string(),
    participants : z.array(z.string())
});

export const UpdateContractSchema =  z.object({
    title : z.string(),
    clientName : z.string(),
    contract : z.string(),
});

export const UpdateContractApiSchema = z.object({
    id : z.string(),
    title : z.string(),
    clientName : z.string(),
    contract : z.string(),
});

export const updateStatusSchema = z.object({
    id : z.string(),
    status : z.enum(
            [
            'Draft',
            'Pending Approval',
            'Approved',
            'Active',
            'Amendment',  // Optional, if you want to track revisions separately
            'Completed',
            'Expired',
            'Terminated'  // Optional, for capturing premature termination
          ],
    )
})