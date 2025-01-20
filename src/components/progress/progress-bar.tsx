import { Separator } from "@radix-ui/react-separator";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import PreviewContract from "../contracts/preview-contract";
import { Button } from "../ui/button";
import { Download, Play } from "lucide-react";
import { Contract, ParsedContract } from "@/types/contracts";
import { AppErr } from "@/utils/app-err";
import { useEffect, useState } from "react";
import { useContract } from "@/hooks/use-contracts";
import { updateContractStatusSchema } from "@/schemas/contracts";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

const stages = [
  'Draft',
  'Pending',
  'Approved',
  'Active',
  'Amendment',
  'Completed',
  'Expired',
  'Terminated'
];

export const ProgressTracker = ({content} : {
  content : Contract
}) => {
  const [parsedoutput, setParsedOutput] = useState<ParsedContract[] | null>(null);
  function getNextStage(currentStage: string): string {
    const currentIndex = stages.indexOf(currentStage);
  
    if (currentIndex === -1) {
      // If the currentStage is not found in the array, return null
      return stages[stages.length - 1];
    }
  
    // Return the next element if it exists, otherwise return null
    return stages[currentIndex + 1] || stages[currentIndex];
  }
  const parseContent = () => {
    try {
      // Assuming `content` is a single Contract object returned from the API response
      const contentToBeParsed: Contract = content; 
  
      // If you want to process this single contract as a list:
      const parsedContracts: ParsedContract[] = [
        {
          _id : contentToBeParsed._id,
          clientName: contentToBeParsed.clientName,
          title: contentToBeParsed.title,
          status : contentToBeParsed.versions[contentToBeParsed.currentVersion - 1].status,
          versionNumber: contentToBeParsed.versions[contentToBeParsed.currentVersion - 1].versionNumber,
          changeSummary: contentToBeParsed.versions[contentToBeParsed.currentVersion - 1].changeSummary,
          content: contentToBeParsed.versions[contentToBeParsed.currentVersion - 1].content,
          createdAt: contentToBeParsed.versions[contentToBeParsed.currentVersion - 1].createdAt,
          createdBy: contentToBeParsed.createdBy,
          currentVersion: contentToBeParsed.currentVersion
        }
      ];
  
      // If the expected output is a list of contracts, you can return an object as below:
      const parsedOutput: ParsedContract[] = parsedContracts
  
      console.log("Parsed Output: ", parsedOutput);
      setParsedOutput(parsedOutput);
  
    } catch (error) {
      AppErr(error); // Handle the error if something goes wrong
    }
  };

  const {UpdateContractStatusMutation} = useContract();
  
  useEffect(() => {
    parseContent();
  }, []);
  
  const OnUpdate = async (values : z.infer<typeof updateContractStatusSchema>) => {
    try {
      const parsedValues = await updateContractStatusSchema.safeParseAsync(values);
      if (parsedValues.error) {
        AppErr(parsedValues.error.message);
        return null;
      }

      const response = await UpdateContractStatusMutation.mutateAsync(parsedValues.data);

      if (response?.message) {
        toast({
          title : "Success",
          description : response?.message
        })
      }
    } catch (error) {
      AppErr(error);
    }
  }
  
  return (
    <div className="w-full mt-5 min-h-[30vh]">
        <>
        <main>
          <motion.main
            initial={{
              y: -50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            className="flex flex-row items-center gap-2 h-full"
          >
            <Separator
              orientation="vertical"
              className={cn("h-[5vh] w-1", `bg-primary`)}
            />
            <main className="flex flex-col gap-1">
              <h1
                className={cn(
                  "text-xl font-semibold text-wrap tracking-tight",
                )}
              >
                Version Tracking - <span className={cn("text-xl font-semibold text-wrap tracking-tight", `text-primary`)}>Contracts</span>
              </h1>
            </main>
          </motion.main>
          <main className="grid grid-cols-1 my-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {parsedoutput && parsedoutput?.map((content : ParsedContract, index) => (
              <motion.div
                className="flex flex-row gap-4 items-center"
                initial={{
                  y: 50,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.1 * (index + 1),
                  },
                }}
                whileHover={{
                  scale: 1.02,
                  rotate: 2,
                }}
                key={index}
              >
                <Card>
                  <CardHeader className="relative">
                    <CardTitle>{content.title}</CardTitle>
                    <CardDescription>
                      contract designed for - {content.clientName}
                    </CardDescription>
                    <div className="absolute top-2 right-3">
                      <Badge
                        variant={"secondary"}
                      >
                        {content.versionNumber}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <Badge>
                      {content.status}
                    </Badge>
                    <CardDescription>
                      {content.changeSummary} - made by {content.createdBy.firstname}
                    </CardDescription>
                  </CardContent>

                  <CardFooter className="flex flex-row justify-between w-full items-center">
                    <p className="text-xs font-medium text-foreground">Created at {content.createdAt}</p>
                    <main className="flex flex-row items-center gap-3">
                    <PreviewContract contractDetails={content.content} />
                    <Button variant={"default"} size={"sm"}>
                      <Download />
                    </Button>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant={"outline"} size={"sm"} onClick={() => {
                              OnUpdate({
                                id: content._id,
                                status : getNextStage(content.status),
                                versionNumber: content.versionNumber
                              })
                            }}><Play /></Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          Move next Stage
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    </main>
                  </CardFooter>
                </Card>

                <Separator className="h-[20vh] bg-primary w-2" orientation="vertical" />
              </motion.div>
            ))}
          </main>
        </main>
        </>
    </div>
  );
};
