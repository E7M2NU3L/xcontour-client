import PreviewContract from "@/components/contracts/preview-contract"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Pen } from "lucide-react"
import DeleteContract from "./delete-contract"
import { Link } from "react-router-dom"

const ContractCard = () => {
  return (
    <Card>
        <CardHeader>
            <CardTitle>
                Sample Contract Title
            </CardTitle>
            <CardDescription className="items-center">
                Contract made for - <Button variant={"link"} size={"sm"}>John Doe</Button>
            </CardDescription>
        </CardHeader>

        <CardFooter className="flex justify-end items-center gap-3 w-full flex-row">
            <PreviewContract contractDetails="" />
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link to={"/edit/update-document/123"}>
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
            <DeleteContract />
        </CardFooter>
    </Card>
  )
}

export default ContractCard