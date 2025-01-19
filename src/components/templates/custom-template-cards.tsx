import { Link } from "react-router-dom"
import PreviewContract from "../contracts/preview-contract"
import { Button } from "../ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import DeleteTemplate from "./delete-template"
import { htmlContractContent } from "./template-cards"
import { PenLine } from "lucide-react"

const CustomTemplateCards = () => {
  return (
    <Card>
        <CardHeader>
            <CardTitle>
                Template sample title
            </CardTitle>
            <CardDescription>
                Template Sample Description about the description, no fighting, n fucking fighting, i said no fighting
            </CardDescription>
        </CardHeader>
        <CardFooter className="w-full flex flex-row items-center justify-end gap-3">
            <PreviewContract contractDetails={htmlContractContent} />
            <DeleteTemplate />
            <Button size={"sm"} asChild>
                <Link to={"/templates/use-template/123"}>
                    <PenLine className="h-4 w-4 mr-1" />
                    use
                </Link>
            </Button>
        </CardFooter>
    </Card>
  )
}

export default CustomTemplateCards