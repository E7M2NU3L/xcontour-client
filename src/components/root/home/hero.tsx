import { Button } from '@/components/ui/button'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
        <section className='min-h-[90vh] flex justify-center items-center px-4 text-wrap'>
     <main className="flex group flex-col lg:flex-row justify-between mx-[2rem] items-center relative p-4 max-w-[90rem] lg:min-w-[90rem] gap-y-[4rem] md:gap-y-0 border-0 md:border hover:border hover:border-dark-5 rounded-lg transition-all ease-in-out duration-300">
        <motion.section
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="flex flex-col px-[2rem] md:px-0 max-w-xl p-4 lg:px-[2rem] group-hover:translate-y-4 transition-transform duration-200 ease-in-out"
        >
          <h1 className="text-sm font-light text-foreground max-w-[15vh] rounded-md bg-primary border border-input">
            smart contracts
          </h1>
          <h4 className="text-2xl md:text-5xl lg:text-md font-bold text-start text-wrap lg:text-left mb-4">
            Streamline Your Contracts with Xcontour
          </h4>
          <h4 className="text-md md:text-xl lg:text-md font-normal text-start text-wrap lg:text-left mb-5">
            Xcontour revolutionizes contract management for freelancers with smart AI features. Experience seamless compliance, custom templates, and insightful tracking—all in one platform.
          </h4>
         <section className='flex items-center gap-x-3 justify-center md:justify-start'>
         <Button className="" asChild size={"sm"}>
            <Link to={"/sign-up"}>
              Get Started
            </Link>
          </Button>
          <Button variant={"outline"} size={"sm"}>
            Learn More
          </Button>
         </section>
        </motion.section>

       <motion.section className='flex items-center group-hover:-translate-x-4 transition-transform duration-200 ease-in-out'>
       <motion.section 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
          className="relative mt-8 lg:mt-0"
        >
          <img src={"/image (1).svg"} alt="hero-resume" className="relative z-10 w-[50vh] scale-125 md:scale-100" />
          <img src={"/image (2).svg"} alt="person-in-desk" className="absolute -top-32 -left-36 shadow-sm rounded-full w-[60vh] scale-125 md:scale-100 z-10" />
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
          className="relative mt-8 lg:mt-0"
        >
          <img src={"/image (3).svg"} alt="hero-resume" className="relative z-10" width={300} height={400} />
        </motion.section>
       </motion.section>
      </main>
     </section>
    </>
  )
}

export default Hero