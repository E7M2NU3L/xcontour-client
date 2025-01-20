import { CreateContracts, DeleteContract, FetchContracts, FetchContractsByStatus, UpdateContract, UpdateStatus } from "@/api/contracts"
import { CreateContractApiSchema } from "@/schemas/contracts";
import { CreateContractTypes, UpdateContractApiTypes, updateContractstatusTypes, UpdateStatusTypes } from "@/types/contracts";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { z } from "zod";

export const useContract = () => {
    const queryclient = useQueryClient();

    const {data : contracts, isPending : isContractsFetching} = useQuery({
        queryFn : FetchContracts,
        queryKey : ['fetch-all-contracts']
    });

    const {data : contractsStatusInfo, isPending : isContractsWithStatusFetching} = useQuery({
        queryFn : FetchContractsByStatus,
        queryKey : ['fetch-status-contracts'],
    });

    const UpdateContractStatusMutation = useMutation({
        mutationFn : (values : updateContractstatusTypes) => UpdateStatus(values),
        mutationKey : ['update-status'],
        onSuccess : () => {
            queryclient.invalidateQueries({
                queryKey : ['fetch-status-contracts']
            })
        }
    });

    const DeleteContractMutation = useMutation({
        mutationFn : (id : string) => DeleteContract(id),
        mutationKey : ['delete-contracts'],
        onSuccess : () => {
            queryclient.invalidateQueries({
                queryKey : [
                    'fetch-all-contracts'
                ]
            })
        },
        onMutate : () => {
            console.log("deleting the contracts")
        }
    });

    const UpdateContractMutation = useMutation({
        mutationFn : (values : UpdateContractApiTypes) => UpdateContract(values),
        mutationKey : ['update-contracts'],
        onSuccess : () => {
            queryclient.invalidateQueries({
                queryKey : [
                    'fetch-all-contracts'
                ]
            })
        }
    });

    const CreateContractMutation = useMutation({
        mutationFn : (values : z.infer<typeof CreateContractApiSchema>) => CreateContracts(values),
        mutationKey : ['create-contracts'],
        onSuccess : () => {
            queryclient.invalidateQueries({
                queryKey : [
                    'fetch-all-contracts'
                ]
            })
        }
    });

    return {
        UpdateContractStatusMutation,
        UpdateContractMutation,
        DeleteContractMutation,
        CreateContractMutation,
        contracts,
        isContractsFetching,
        isContractsWithStatusFetching,
        contractsStatusInfo
    };
};