import { Button } from "../ui/button"
import { Eye } from "lucide-react"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { ScrollArea } from "../ui/scroll-area"

const PreviewContract = ({contractDetails} : {
    contractDetails : string
}) => {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button size={"sm"} variant={"outline"}>
                <Eye />
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Preview of the Contract
                </DialogTitle>
                <DialogDescription>
                    There are much more features and functionality to be released on second versions.
                </DialogDescription>
            </DialogHeader>

            <ScrollArea className="h-[60vh] w-full">
            <section dangerouslySetInnerHTML={{
                __html: contractDetails
            }} />
            </ScrollArea>

            <DialogFooter className="flex flex-row justify-end items-center gap-3">
                <DialogClose asChild>
                    <Button variant={"outline"} size={"sm"}>
                        Close
                    </Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default PreviewContract