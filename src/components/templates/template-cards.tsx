import { Link } from "react-router-dom"
import PreviewContract from "../contracts/preview-contract"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { PenLine } from "lucide-react"
import { TemplateProps } from "@/types/templates"

export const htmlContractContent = 
    `<section class="bg-gray-100 font-sans">
        <div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 class="text-xl font-bold text-gray-800 mb-4">Freelancer Contract</h1>
            <p class="text-gray-600 text-xs mb-6">
                This contract is made between <span class="font-semibold">[Freelancer Name]</span> and 
                <span class="font-semibold">[Client Name]</span>, effective as of 
                <span class="font-semibold">[Date]</span>.
            </p>
            
            <div class="space-y-6 text-xs">
                <div class="section">
                    <h2 class="text-sm font-semibold text-gray-700 mb-2">1. Scope of Work</h2>
                    <p class="text-gray-600">
                        The freelancer agrees to provide the following services:
                        <ul class="list-disc pl-6">
                            <li>[Service 1]</li>
                            <li>[Service 2]</li>
                            <li>[Service 3]</li>
                        </ul>
                    </p>
                </div>

                <div class="section text-xs">
                    <h2 class="text-sm font-semibold text-gray-700 mb-2">2. Payment Terms</h2>
                    <p class="text-gray-600">
                        The client agrees to pay the freelancer <span class="font-semibold">$[Amount]</span> for the completed work.
                        Payments will be made on the following schedule:
                        <ul class="list-disc pl-6">
                            <li>Deposit: <span class="font-semibold">$[Deposit Amount]</span></li>
                            <li>Final Payment: <span class="font-semibold">$[Remaining Amount]</span> upon project completion.</li>
                        </ul>
                    </p>
                </div>

                <div class="section text-xs">
                    <h2 class="text-sm font-semibold text-gray-700 mb-2">3. Deadlines</h2>
                    <p class="text-gray-600">
                        The project will be completed by <span class="font-semibold">[Completion Date]</span>. Any delays must be communicated in advance.
                    </p>
                </div>

                <div class="section text-xs">
                    <h2 class="text-sm font-semibold text-gray-700 mb-2">4. Confidentiality</h2>
                    <p class="text-gray-600">
                        Both parties agree to keep all project details and deliverables confidential unless otherwise agreed in writing.
                    </p>
                </div>

                <div class="section text-xs">
                    <h2 class="text-sm font-semibold text-gray-700 mb-2">5. Termination</h2>
                    <p class="text-gray-600">
                        Either party may terminate this agreement with a written notice of <span class="font-semibold">[Notice Period]</span>. Payments for completed work will remain due.
                    </p>
                </div>
            </div>

            <p class="text-gray-600 mt-6">
                Signed by: <br>
                Freelancer: ________________________ Date: __________ <br>
                Client: ____________________________ Date: __________
            </p>
        </div>
    </section>`

const TemplateCards = ({content} : {
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

        <CardContent className="overflow-hidden h-[20vh] border border-input bg-gradient-to-tr from-slate-100 py-2 to-slate-200">
            <div dangerouslySetInnerHTML={{
                __html :content.displayContent
            }} />
        </CardContent>
        <CardFooter className="w-full flex flex-row items-center gap-3 justify-end mt-4">
            <PreviewContract contractDetails={content.content} />
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

export default TemplateCards