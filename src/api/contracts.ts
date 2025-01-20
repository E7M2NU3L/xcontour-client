import { CreateContractApiSchema } from "@/schemas/contracts";
import { UpdateContractApiTypes, updateContractstatusTypes, UpdateStatusTypes } from "@/types/contracts";
import { AppErr } from "@/utils/app-err";
import axios from "axios";
import { z } from "zod";

export async function CreateContracts(values : z.infer<typeof CreateContractApiSchema>) {
    try {   
        const endpoint = import.meta.env.VITE_PUBLIC_API_ENDPOINT! + "/api/v1/contracts/create";
        const response = await axios.post(endpoint, values, {
            withCredentials : true
        });

        console.log(response.data);
        return response.data;
    } catch (error) {
        AppErr(error);
    }
};

export async function UpdateContract(values : UpdateContractApiTypes) {
    try {
        const endpoint = import.meta.env.VITE_PUBLIC_API_ENDPOINT! + `/api/v1/contracts/all/${values.id}`;
        const response = await axios.put(endpoint, values, {
            withCredentials : true
        });

        console.log(response.data);
        return response.data;
    } catch (error) {
        AppErr(error);
    }
};

export async function UpdateStatus(values : updateContractstatusTypes) {
    try {
        const endpoint = import.meta.env.VITE_PUBLIC_API_ENDPOINT! + "/all/status/"+values.id;
        const response = await axios.put(endpoint, {
            status : values.status,
            versionNumber : values.versionNumber
        } ,{
            withCredentials : true
        });

        console.log(response.data);
        return response.data;
    } catch (error) {
        AppErr(error);
    }
}

export async function FetchContracts() {
    try {
        const endpoint = import.meta.env.VITE_PUBLIC_API_ENDPOINT! + "/api/v1/contracts/all";
        const response = await axios.get(endpoint, {
            withCredentials : true
        });

        console.log(response.data);
        return response.data;
    } catch (error) {
        AppErr(error);
    }
};

export async function FetchSingleContract(id : string) {
    try {
        const endpoint = import.meta.env.VITE_PUBLIC_API_ENDPOINT! + `/api/v1/contracts/all/${id}`;
        const response = await axios.get(endpoint, {
            withCredentials : true
        });

        console.log(response.data);
        return response.data;
    } catch (error) {
        AppErr(error);
    }
};

export async function DeleteContract(id : string) {
    try {
        const endpoint = import.meta.env.VITE_PUBLIC_API_ENDPOINT! + `/api/v1/contracts/all/${id}`;
        const response = await axios.delete(endpoint, {
            withCredentials : true
        });

        console.log("Delete Response: ",response.data);
        return response.data;
    } catch (error) {
        AppErr(error);
    }
};

export async function FetchContractsByStatus() {
    try {
        const endpoint = import.meta.env.VITE_PUBLIC_API_ENDPOINT! + "/api/v1/contracts/all";
        const response = await axios.get(endpoint, {
            withCredentials : true
        });

        console.log(response.data);
        return response.data;
    } catch (error) {
        AppErr(error);
    }
}