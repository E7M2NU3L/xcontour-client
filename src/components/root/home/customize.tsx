import { Button } from "@/components/ui/button"


const Customise = () => {
  return (
    <div className='min-h-screen'>
      <main className='max-w-5xl mx-auto mt-[4rem] mb-[2.5rem] md:my-[2.5rem]'>
        <h1 className='text-2xl md:text-5xl font-medium text-black text-start px-[2rem] md:text-start md:px-0'>
        Unlock the Power of Smart Contract Management
        </h1>
      </main>

      <section className='flex justify-center items-center gap-x-[8vh] flex-wrap gap-y-[2rem] md:gap-y-0 px-[1rem] md:px-0'>
        <main className='min-h-[20vh] max-w-md'>
          <main className='w-full h-[50%]'>
            <img src="/image-1.png" alt='placeholder' className='h-[300px] w-full shadow-md' />
          </main>
          <section className='flex flex-col justify-start items-start text-start'>
            <h1 className='font-medium text-2xl md:text-4xl text-black py-[1.5rem]'>
            Custom Templates for Every Project
            </h1>
            <h1 className='font-light text-sm mb-2'>
            Create tailored contracts that fit your unique requirements effortlessly.
            </h1>

            <Button variant={"default"} size={"sm"}>
              Learn More {">"}
            </Button>
          </section>
        </main>
        <main className='min-h-[20vh] max-w-md'>
          <main className='w-full h-[50%]'>
            <img src="/image-1.png" alt='placeholder' className='h-[300px] w-full shadow-md' />
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
        </main>
        <main className='min-h-[20vh] max-w-md'>
          <main className='w-full h-[50%]'>
            <img src="/image-1.png" alt='placeholder' className='h-[300px] w-full shadow-md' />
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
        </main>
      </section>
    </div>
  )
}

export default Customise