import { ProgressTracker } from "@/components/progress/progress-bar"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Video } from "lucide-react"
import { Link } from "react-router-dom"

const Progress = () => {
  return (
    <div className="p-4">
        <main className="flex flex-row flex-wrap justify-between items-center w-full">
            <main className="flex flex-col gap-1">
                <h1 className="text-3xl font-semibold text-wrap tracking-tight text-foreground">
                Track <span className="text-primary">Progress</span>
                </h1>
                <p className="text-sm font-medium text-foreground leading-tight text-wrap tracking-tight">
                  track your progress made with each contracts
                </p>
            </main>

            <main className="flex items-center gap-3 flex-row">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant={"outline"} size={"sm"}>
                    <Video />
                    How to use
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      How to use Contract Editor
                    </DialogTitle>
                    <DialogDescription>
                      Get to know the tool better and make it work 100x smoother in your day to day workflow.
                    </DialogDescription>
                  </DialogHeader>
                  <section className="relative h-[30vh] w-full">
                  <iframe src="https://www.youtube.com/embed/wDaltiUARU4?si=94_yM_ag_wgIm8Fb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="h-full w-full inset-0"></iframe>
                  </section>
                  <DialogFooter className="flex flex-row justify-end items-center gap-3">
                    <DialogClose asChild>
                      <Button variant={"ghost"} size={"sm"}>Close</Button>
                    </DialogClose>
                    <Button variant={"link"} size={"sm"} asChild>
                      <Link to={"/features"}>
                        know more
                      </Link>
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Select>
                <SelectTrigger className="w-[180px] h-8">
                  <SelectValue placeholder="Choose a Contract" className="placeholder:text-sm text-sm" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Contracts</SelectLabel>
                    {[0,1,2,3,4].map((content, index) => (
                       <SelectItem key={index} value={`content${content}`}>{`content${content}`}</SelectItem>   
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </main>
        </main>

        <main>
          <ProgressTracker />
        </main>
    </div>
  )
}

export default Progress