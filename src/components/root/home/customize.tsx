import { Button } from "@/components/ui/button"
import {motion} from 'framer-motion';

const Customise = () => {
  return (
    <div className='min-h-screen py-12'>
      <main className='max-w-5xl mx-auto mt-[4rem] mb-[2.5rem] md:my-[2.5rem]'>
        <h1 className='text-5xl font-medium text-black text-start px-[2rem] md:text-start md:px-0'>
        Unlock the Power of Smart Contract Management
        </h1>
      </main>

      <section className='flex justify-center items-center gap-x-[8vh] flex-wrap gap-y-[2rem] md:gap-y-0 px-[1rem] md:px-0'>
        
        <motion.main initial={{y: -60, opacity : 0}} whileInView={{ y: 0, opacity: 100, transition : { duration : 0.7, delay : 0}}} whileHover={{ rotate : 2, transition : {duration : 0.3, scale : 1.1, ease : 'easeIn', stiffness : 20, damping : 2}}} className='min-h-[20vh] max-w-md py-4 px-3 border border-input rounded-2xl'>
          <main className='w-full h-[50%]'>
            <img src="/image (1).png" alt='placeholder' className='h-[300px] w-full shadow-md' />
          </main>
          <section className='flex flex-col justify-start items-start text-start'>
          <h1 className='font-medium text-2xl md:text-4xl text-black py-[1.5rem]'>
          Efficient Contracts Management Made Easy
            </h1>
            <h1 className='font-light text-sm mb-2'>
            Manage all your contracts in one centralized platform.
            </h1>

            <Button size={"sm"} variant={"default"}>
            Sign Up {">"}
            </Button>
          </section>
        </motion.main>
        <motion.main initial={{y: -60, opacity : 0}} whileInView={{ y: 0, opacity: 100, transition : { duration : 0.7, delay : 0.4}}} whileHover={{ rotate : 2, transition : {duration : 0.3, scale : 1.1, ease : 'easeIn', stiffness : 20, damping : 2}}} className='min-h-[20vh] py-4 px-3 max-w-md bg-slate-900 text-white scale-105 rounded-2xl shadow-xl shadow-primary/60'>
          <main className='w-full h-[40%]'>
            <img src="/product (1).png" alt='placeholder' className='h-[250px] w-full shadow-md object-cover scale-105' />
          </main>
          <section className='flex flex-col justify-start items-start text-start px-3 py-2'>
            <h1 className='font-medium text-2xl md:text-4xl text-white py-[1.5rem]'>
            Custom Templates for Every Project
            </h1>
            <h1 className='font-light text-white/80 text-sm mb-2'>
            Create tailored contracts that fit your unique requirements effortlessly.
            </h1>

            <Button variant={"default"} size={"sm"}>
              Learn More {">"}
            </Button>
          </section>
        </motion.main>
        <motion.main initial={{y: -60, opacity : 0}} whileInView={{ y: 0, opacity: 100, transition : { duration : 0.7, delay : 0.8}}} whileHover={{ rotate : 2, transition : {duration : 0.3, scale : 1.1, ease : 'easeIn', stiffness : 20, damping : 2}}} className='min-h-[20vh] max-w-md py-4 px-3 border border-input rounded-2xl'>
          <main className='w-full h-[50%]'>
            <img src="/image (2).png" alt='placeholder' className='h-[300px] w-full shadow-md' />
          </main>
          <section className='flex flex-col justify-start items-start text-start'>
          <h1 className='font-medium text-2xl md:text-4xl text-black py-[1.5rem]'>
          Stay Updated with Version Tracking
            </h1>
            <h1 className='font-light text-sm mb-2'>
            Keep track of changes and revisions seamlessly.
            </h1>

            <Button size={"sm"} variant={"default"}>
              Sign up {">"}
            </Button>
          </section>
        </motion.main>
      </section>
    </div>
  )
}

export default Customise