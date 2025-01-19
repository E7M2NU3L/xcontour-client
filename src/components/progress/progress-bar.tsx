import { Separator } from "@radix-ui/react-separator";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { htmlContractContent } from "../templates/template-cards";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import PreviewContract from "../contracts/preview-contract";
import { Button } from "../ui/button";
import { Download } from "lucide-react";

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

export const ProgressTracker = () => {
  return (
    <div className="w-full mt-5">
      {stages.map((stage, index) => (
        <>
        <main key={index}>
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
              className={cn("h-[5vh] w-1", `stage-${stage.toLowerCase()}`)}
            />
            <main className="flex flex-col gap-1">
              <h1
                className={cn(
                  "text-xl font-semibold text-wrap tracking-tight",
                )}
              >
                {stage} <span className={cn("text-xl font-semibold text-wrap tracking-tight", `text-${stage.toLowerCase()}`)}>Contracts</span>
              </h1>
            </main>
          </motion.main>
          <main className="grid grid-cols-1 my-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[0, 1, 2].map((content, index) => (
              <motion.div
                className=""
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
                key={content}
              >
                <Card>
                  <CardHeader className="relative">
                    <CardTitle>Contract Sample Title</CardTitle>
                    <CardDescription className="line-clamp-2">
                      Contract Sample description about the contract, about the
                      empire of khaleesi and targaryean and the three dragons
                    </CardDescription>
                    <div className="absolute top-2 right-3">
                      <Badge
                        variant={"secondary"}
                        className={cn(`badge-${stage.toLowerCase()}`)}
                      >
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
              </motion.div>
            ))}
          </main>
        </main>

        <Separator className="my-3" />
        </>
      ))}
    </div>
  );
};
