import { CreateContractTypes, UpdateContractApiTypes, UpdateStatusTypes } from "@/types/contracts";
import { AppErr } from "@/utils/app-err";
import axios from "axios";

export async function CreateContracts(values : CreateContractTypes) {
    try {   
        const endpoint = import.meta.env.VITE_PUBLIC_API_ENDPOINT! + "/";
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
        const endpoint = import.meta.env.VITE_PUBLIC_API_ENDPOINT! + "/";
        const response = await axios.put(endpoint, values, {
            withCredentials : true
        });

        console.log(response.data);
        return response.data;
    } catch (error) {
        AppErr(error);
    }
};

export async function FetchContracts() {
    try {
        const endpoint = import.meta.env.VITE_PUBLIC_API_ENDPOINT! + "/";
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
        const endpoint = import.meta.env.VITE_PUBLIC_API_ENDPOINT! + `/${id}`;
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
        const endpoint = import.meta.env.VITE_PUBLIC_API_ENDPOINT! + `/${id}`;
        const response = await axios.post(endpoint, {
            withCredentials : true
        });

        console.log(response.data);
        return response.data;
    } catch (error) {
        AppErr(error);
    }
};

export async function UpdateStatus(values : UpdateStatusTypes) {
    try {
        const endpoint = import.meta.env.VITE_PUBLIC_API_ENDPOINT! + `/${values.id}`;
        const response = await axios.put(endpoint, {
            status : values.status
        }, {
            withCredentials : true
        });

        console.log(response.data);
        return response.data;
    } catch (error) {
        AppErr(error);
    }
};

export async function FetchContractsByStatus() {
    try {
        const endpoint = import.meta.env.VITE_PUBLIC_API_ENDPOINT! + "/";
        const response = await axios.get(endpoint, {
            withCredentials : true
        });

        console.log(response.data);
        return response.data;
    } catch (error) {
        AppErr(error);
    }
}