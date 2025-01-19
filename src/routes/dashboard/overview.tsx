import { WeeklyContracts } from "@/components/overview/contracts-chart"
import { SummaryChart } from "@/components/overview/summary-chart"
import TitleCards from "@/components/overview/title-cards"
import { TraackingChart } from "@/components/overview/tracking-chart"
import { UseOverview } from "@/hooks/use-overview";
import { RootState } from "@/store/store";
import {motion} from 'framer-motion';
import { Loader, LoaderPinwheel } from "lucide-react";
import { useSelector } from "react-redux";

const Overview = () => {
  const {overviewStats, isFetchingOverviewStats} = UseOverview();
  const authInfo = useSelector((state : RootState) => state.auth);
  console.log(authInfo);
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
          Welcome Back <span className="text-primary inline-flex items-center gap-1 pl-2">{authInfo.userData ? authInfo?.userData?.firstname : <>
            <Loader className="h-4 w-4 animate-spin" /> Loading..
          </>}</span>
          </h1>
          <p className="text-sm font-medium tracking-tight leading-tight">
            Go through your dashboard insights to get in touch with your work and the reach.
          </p>
        </section>
      </motion.main>
      {isFetchingOverviewStats && (
        <main className="flex flex-col justify-center items-center w-full min-h-[80vh]">
          <LoaderPinwheel className="h-12 animate-spin w-12 text-primary" />
        </main>
      )}
      {overviewStats && (
        <main className="mt-6">
        <TitleCards />
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <motion.div
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
          <TraackingChart />
          </motion.div>
  
          <motion.div
            initial={{
              opacity: 0,
              y: -50
            }}
            animate={{
              opacity: 100,
              y: 0,
              transition : {
                delay : 0.1 * 2
              }
            }}
          >
            <SummaryChart />
          </motion.div>
          
          <motion.div
            initial={{
              opacity: 0,
              y: -50
            }}
            animate={{
              opacity: 100,
              y: 0,
              transition : {
                delay : 0.1 * 3
              }
            }}
          >
          <WeeklyContracts />
          </motion.div>
        </main>
        </main>
      )}
    </div>
  )
}

export default Overview