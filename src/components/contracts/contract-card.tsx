import PreviewContract from "@/components/contracts/preview-contract"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Pen } from "lucide-react"
import DeleteContract from "./delete-contract"
import { Link } from "react-router-dom"
import { Contract } from "@/types/contracts"

const ContractCard = ({content} : {
    content : Contract
}) => {
  return (
    <Card>
        <CardHeader>
            <CardTitle>
                {content?.title}
            </CardTitle>
            <CardDescription className="items-center">
                Contract made for - <Button variant={"link"} size={"sm"}>{content?.clientName}</Button>
            </CardDescription>
        </CardHeader>

        <CardFooter className="flex justify-end items-center gap-3 w-full flex-row">
            <PreviewContract contractDetails={content?.versions[content.versions.length - 1].content} />
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link to={`/edit/update-document/${content?._id}`}>
                        <Button variant={"default"} size={"sm"}>
                            <Pen />
                        </Button>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        Edit contract
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <DeleteContract id={content?._id}/>
        </CardFooter>
    </Card>
  )
}

export default ContractCard