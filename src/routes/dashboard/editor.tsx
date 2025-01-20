import { Button } from "@/components/ui/button"
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Dialog } from "@radix-ui/react-dialog"
import { Loader, Pen, Video } from "lucide-react"
import { Link } from "react-router-dom"
import ContractCard from "../../components/contracts/contract-card"
import {motion} from 'framer-motion';
import { useContract } from "@/hooks/use-contracts"
import { Contract } from "@/types/contracts"

const Editor = () => {
  const {isContractsFetching, contracts} = useContract();
  console.log(contracts);
  return (
    <div className="p-4">
      <motion.main
        initial={{
          y : -50,
          opacity : 0
        }}
        whileInView={{
          y : 0,
          opacity : 100
        }}
      className="min-h-[10vh] flex justify-between items-center flex-wrap gap-4">
        <section className="flex flex-col justify-start gap-1 leading-tight">
          <h1 className="text-3xl font-semibold text-foreground tracking-tight">
            Contracts <span className="text-primary">Editor</span>
          </h1>
          <p className="text-sm font-medium tracking-tight leading-tight">
            Create, Edit and manage your contracts with ease and boost your contract management with AI
          </p>
        </section>

        <main className="flex flex-row items-center gap-3">
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
          <Button variant={"default"} size={"sm"} asChild>
            <Link to={"/edit/new-document"}>
              <Pen className="mr-1 h-4 w-4" />
              Create
            </Link>
          </Button>
        </main>
      </motion.main>

      {isContractsFetching && (
        <div className="min-h-[50vh] w-full flex justify-center items-center">
          <main className="flex flex-row gap-2 items-center">
            <Loader className="mr-1 h-4 w-4 animate-spin" />
            Loading..
          </main>
        </div>
      )}

      <main className="my-4 grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {contracts?.data.map((content : Contract, index : number) => (
            <>
            <motion.div
            key={index}
              initial={{
                y : 50,
                opacity : 0,
              }}
              whileInView={{
                y : 0,
                opacity: 100,
                transition : {
                  delay : (index + 1) * 0.1
                }
              }}
            >
              <ContractCard content={content as Contract} />
            </motion.div>
            </>
          ))}
      </main>
    </div>
  )
}

export default Editor