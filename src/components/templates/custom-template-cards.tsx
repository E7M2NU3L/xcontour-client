import { Link } from "react-router-dom"
import PreviewContract from "../contracts/preview-contract"
import { Button } from "../ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import DeleteTemplate from "./delete-template"
import { PenLine } from "lucide-react"
import { TemplateProps } from "@/types/templates"

const CustomTemplateCards = ({content} : {
    content : TemplateProps
}) => {
  return (
    <Card>
        <CardHeader>
            <CardTitle>
                {content.title}
            </CardTitle>
            <CardDescription className="line-clamp-2">
                {content.description}
            </CardDescription>
        </CardHeader>
        <CardFooter className="w-full flex flex-row items-center justify-end gap-3">
            <PreviewContract contractDetails={content.displayContent} />
            <DeleteTemplate />
            <Button size={"sm"} asChild>
                <Link to={`/templates/use-template/${content._id}`}>
                    <PenLine className="h-4 w-4 mr-1" />
                    use
                </Link>
            </Button>
        </CardFooter>
    </Card>
  )
}

export default CustomTemplateCards