import { ProgressTracker } from "@/components/progress/progress-bar"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Skeleton } from "@/components/ui/skeleton"
import { useContract } from "@/hooks/use-contracts"
import { Contract, ContractsResponse } from "@/types/contracts"
import { zodResolver } from "@hookform/resolvers/zod"
import { Box, Video } from "lucide-react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { z } from "zod"

const contractSelectedSchema = z.object({
  _id : z.string()
});

type contractSelectedType = z.infer<typeof contractSelectedSchema>;

const Progress = () => {
  const {contractsStatusInfo, isContractsWithStatusFetching} = useContract();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const form = useForm<contractSelectedType>({
    mode : "onChange",
    resolver : zodResolver(contractSelectedSchema),
    defaultValues : {
      _id : ""
    }
  });

  const [parseData, setParseData] = useState<Contract | null>(null);
  const filterData = () => {
    if (selectedId !== null) {
      const contract : ContractsResponse = contractsStatusInfo;
      const filterbyid = contract.data.filter((con) => (
        con._id === selectedId
      ));

      console.log(filterbyid);
      setParseData(filterbyid[0]);
    }
  };

  useEffect(() => {
    if (selectedId) {
      filterData();
    }
  }, [selectedId]);

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

              <Select onValueChange={setSelectedId} defaultValue="">
                <SelectTrigger className="w-[180px] h-8">
                  <SelectValue placeholder="Choose a Contract" className="placeholder:text-sm text-sm" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Contracts</SelectLabel>
                    {contractsStatusInfo?.data.map((content : Contract, index : number) => (
                       <SelectItem key={index} value={content?._id}>{content?.title}</SelectItem>   
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </main>
        </main>

        {isContractsWithStatusFetching && (
          <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-ols-3 lg:grid-cols-4 gap-4">
            {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((content, index : number) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>
                    <Skeleton className="h-8 w-[10vh]" />
                  </CardTitle>
                  <CardDescription>
                    <Skeleton className="h-12 w-[20vh]" />
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex flex-row justify-end w-full items-center gap-3">
                  <Button size={"sm"} variant={"default"}>
                    <Box />
                  </Button>
                  <Button size={"sm"} variant={"outline"}>
                    <Box />
                  </Button>
                  <Button size={"sm"} variant={"destructive"}>
                    <Box />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </main>
        )}

        {(selectedId && parseData) && (
          <main>
            <ProgressTracker content={parseData} />
          </main>
        )}
    </div>
  )
}

export default Progress