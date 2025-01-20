import { Copy, Loader } from "lucide-react"
import { Button } from "../ui/button"
import { AppErr } from "@/utils/app-err"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { toast } from "@/hooks/use-toast"
import { useContract } from "@/hooks/use-contracts"
import { CreateContractTypes } from "@/types/contracts"

const SaveAsDraft = ({contractContent} : {
    contractContent : CreateContractTypes
}) => {
    const navigate = useNavigate();
    const {CreateContractMutation} = useContract();
    const [loading, setisLoading] = useState<boolean>(false);
    const handleSaveasDraft = async () => {
        try {
            setisLoading(true);
            console.log(contractContent);

            const response = await CreateContractMutation.mutateAsync({
                ...contractContent,
                status : 'Draft'
            });

            if (response?.message) {
                toast({
                    title : "Success",
                    description : "Contract is saved as draft"
                });
                navigate('/edit');
            }
        } catch (error) {
            AppErr(error);
        } finally {
            setisLoading(false);
        }
    }
  return (
    <Button variant={"outline"} onClick={handleSaveasDraft} size={"sm"}>
        {loading ? <>
            <Loader className="mr-1 h-4 w-4 animate-spin" />
            Saving as Draft
        </> : <>
        <Copy className="mr-1 h-4 w-4" />
        Save as Draft
        </>}
    </Button>
  )
}

export default SaveAsDraft