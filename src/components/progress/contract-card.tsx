import { Download } from "lucide-react"
import PreviewContract from "../contracts/preview-contract"
import { htmlContractContent } from "../templates/template-cards"
import { Button } from "../ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"

const ContractCard = () => {
  return (
    <Card>
        <CardHeader className="relative">
            <CardTitle>
                Contract Sample Title
            </CardTitle>
            <CardDescription className="line-clamp-2">
                Contract Sample description about the contract, about the empire of khaleesi and targaryean and the three dragons
            </CardDescription>

            <div className="absolute top-2 right-3">
                <Badge>
                    Version 1
                </Badge>
            </div>
        </CardHeader>

        <CardFooter className="flex flex-row justify-end w-full items-center gap-3">
            <PreviewContract contractDetails={htmlContractContent} />
            <Button variant={"default"} size={"sm"}>
                <Download />
            </Button>
        </CardFooter>
    </Card>
  )
}

export default ContractCard