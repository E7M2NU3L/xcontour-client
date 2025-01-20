import { CreateContractsSchema, UpdateContractApiSchema, UpdateContractSchema, updateContractStatusSchema, updateStatusSchema } from "@/schemas/contracts";
import { z } from "zod";

export type CreateContractTypes = z.infer<typeof CreateContractsSchema>;
export type UpdateContractTypes = z.infer<typeof UpdateContractSchema>;
export type UpdateStatusTypes = z.infer<typeof updateStatusSchema>;
export type UpdateContractApiTypes = z.infer<typeof UpdateContractApiSchema>;

// TypeScript types

export interface User {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phoneNumber: string;
    profilePic: string;
    bio: string;
    role: string;
    isVerified: boolean;
    createdAt: string;
    updatedAt: string;
    token: string;
    _id: string;
  }
  
  export interface Participant extends Omit<User, 'password' | 'token'> {}
  
  export interface Version {
    changeSummary: string;
    content: string;
    createdAt: string;
    createdBy: string;
    status: string;
    versionNumber: number;
    _id: string;
  }
  
  export interface Contract {
    clientName: string;
    title: string;
    participants: Participant[];
    versions: Version[];
    createdAt: string;
    updatedAt: string;
    currentVersion: number;
    createdBy: User;
    _id: string;
  }
  
  export interface ParsedContract {
    _id : string;
    clientName: string;
    title: string;
    status : string;
    versionNumber: number; // from Version interface 
    changeSummary: string; // from Version interface 
    content: string; // from Version interface
    createdAt: string;  // from Version interface 
    createdBy: User;
    currentVersion: number;
  }

  export interface ParsedOutputList {
    contracts : ParsedContract[];
  }

  // Example of a response type for fetching contracts
  export interface ContractsResponse {
    message: string;
    status: string;
    data: Contract[];
  }

  export type updateContractstatusTypes = z.infer<typeof updateContractStatusSchema>;
  