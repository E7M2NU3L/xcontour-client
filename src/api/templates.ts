import { createTemplateTypes } from "@/types/templates";
import { AppErr } from "@/utils/app-err";
import axios from "axios";

export async function createTemplate(values : createTemplateTypes) {
    try {
        const endpoint = import.meta.env.VITE_PUBLIC_API_ENDPOINT + "/";
        const response = await axios.post(endpoint, values, {
            withCredentials : true
        });

        console.log(response.data);
        if (!response.data) {
            throw new Error("Failed to get the response from the server!")
        }
        return response.data;
    } catch (error) {
        AppErr(error);
    }
};

export async function FetchAllPublicTemplates() {
    try {
        const endpoint = import.meta.env.VITE_PUBLIC_API_ENDPOINT + "/";
        const response = await axios.get(endpoint, {
            withCredentials : true
        });

        console.log(response.data);
        if (!response.data) {
            throw new Error("Failed to get the response from the server!")
        }
        return response.data;
    } catch (error) {
        AppErr(error);
    }
};

export async function DeleteTemplates(id : string) {
    try {
        const endpoint = import.meta.env.VITE_PUBLIC_API_ENDPOINT + `/${id}`;
        const response = await axios.delete(endpoint, {
            withCredentials : true
        });

        console.log(response.data);
        if (!response.data) {
            throw new Error("Failed to get the response from the server!")
        }
        return response.data;
    } catch (error) {
        AppErr(error);
    }
};

export async function FetchSingleTemplate(id : string) {
    try {
        const endpoint = import.meta.env.VITE_PUBLIC_API_ENDPOINT + `/${id}`;
        const response = await axios.get(endpoint, {
            withCredentials : true
        });

        console.log(response.data);
        if (!response.data) {
            throw new Error("Failed to get the response from the server!")
        }
        return response.data;
    } catch (error) {
        AppErr(error);
    }
}

export async function FetchUserTemplates() {
    try {
        const endpoint = import.meta.env.VITE_PUBLIC_API_ENDPOINT + "/";
        const response = await axios.post(endpoint, {
            withCredentials : true
        });

        console.log(response.data);
        if (!response.data) {
            throw new Error("Failed to get the response from the server!")
        }
        return response.data;
    } catch (error) {
        AppErr(error);
    }
}