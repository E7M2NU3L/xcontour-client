import { ChartColumnDecreasing, ChartColumnIncreasing } from "lucide-react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import {motion} from 'framer-motion';

const TitleCards = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      <motion.section
        initial={{
          opacity: 0,
          x: -50
        }}
        animate={{
          opacity: 100,
          x: 0,
          transition : {
            delay : 0.1 * 1
          }
        }}
      >
      <Card>
        <main className="flex justify-between items-center w-full pr-4">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold text-foreground tracking-tight">
            12
          </CardTitle>
          <CardDescription>
            Total contracts
          </CardDescription>
        </CardHeader>

        <main className="bg-green-600/20 p-4 rounded-full">
          <ChartColumnIncreasing />
        </main>
        </main>
        <CardFooter className="justify-end flex flex-row items-center w-full">
          <p className="text-xs font-medium tracking-tight truncate leading-tight text-wrap">
            total contracts made from the  login of the user account
          </p>
        </CardFooter>
      </Card>
      </motion.section>

      <motion.section
        initial={{
          opacity: 0,
          y: -50
        }}
        animate={{
          opacity: 100,
          y: 0,
          transition : {
            delay : 0.1 * 1
          }
        }}
      >
      <Card>
        <main className="flex justify-between items-center w-full pr-4">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold text-foreground tracking-tight">
              80
            </CardTitle>
            <CardDescription>
              Active Contracts
            </CardDescription>
          </CardHeader>

          <main className="bg-yellow-600/20 p-4 rounded-full">
            <ChartColumnIncreasing /> {/* You can replace this with a bar chart or pie chart for better representation */}
          </main>
        </main>
        <CardFooter className="justify-end flex flex-row items-center w-full">
          <p className="text-xs font-medium tracking-tight truncate leading-tight text-wrap">
            Total number of active contracts that are currently in progress.
          </p>
        </CardFooter>
      </Card>
      </motion.section>

      <motion.section
        initial={{
          opacity: 0,
          y: -50
        }}
        animate={{
          opacity: 100,
          y: 0,
          transition : {
            delay : 0.1 * 1
          }
        }}
      >
      <Card>
        <main className="flex justify-between items-center w-full pr-4">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold text-foreground tracking-tight">
              2
            </CardTitle>
            <CardDescription>
              Active Contracts
            </CardDescription>
          </CardHeader>

          <main className="bg-red-600/20 p-4 rounded-full">
            <ChartColumnDecreasing /> {/* You can replace this with a bar chart or pie chart for better representation */}
          </main>
        </main>
        <CardFooter className="justify-end flex flex-row items-center w-full">
          <p className="text-xs font-medium tracking-tight truncate leading-tight text-wrap">
            Total number of active contracts that are currently in progress.
          </p>
        </CardFooter>
      </Card>
      </motion.section>

      <motion.section
        initial={{
          opacity: 0,
          x: 50
        }}
        animate={{
          opacity: 100,
          x: 0,
          transition : {
            delay : 0.1 * 1
          }
        }}
      >
      <Card>
        <main className="flex justify-between items-center w-full pr-4">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold text-foreground tracking-tight">
              15
            </CardTitle>
            <CardDescription>
              Templates Used
            </CardDescription>
          </CardHeader>

          <main className="bg-blue-600/20 p-4 rounded-full">
            <ChartColumnIncreasing /> {/* Optional: You can add a chart, e.g., line chart for template usage trend */}
          </main>
        </main>
        <CardFooter className="justify-end flex flex-row items-center w-full">
          <p className="text-xs font-medium tracking-tight truncate leading-tight text-wrap">
            Templates that have been used to generate contracts.
          </p>
        </CardFooter>
      </Card>
      </motion.section>
    </div>
  )
}

export default TitleCards