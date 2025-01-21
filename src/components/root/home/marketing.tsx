import { Button } from "@/components/ui/button"
import { Box } from "lucide-react"

const Marketing = () => {
  return (
    <div className='flex min-h-[90vh] justify-around max-w-7xl items-center mx-auto md:flex-row flex-col px-[2rem] md:px-0 pb-[4rem] md:pb-0'>
         <section className='max-w-xl'>
            <h1 className='text-black text-lg pb-2'>
                simplify
            </h1>
            <h1 className='text-3xl md:text-5xl font-medium text-black mb-[2rem]'>
            Unlock the Power of Smart Contract Management
            </h1>
            <h1 className='font-light mb-[2.7rem] text-sm text-black'>
            Streamline your contract processes with our innovative features. From custom templates to comprehensive management tools, Xcontour is designed to meet your needs.
            </h1>

            <section className='flex flex-col gap-y-3'>
                <main className='flex gap-x-3 items-center'>
                    <Box className='text-2xl' />
                    <h1 className='font-medium text-lg text-black'>
                    Version Tracking
                    </h1>
                </main>
                <main className='flex gap-x-3 items-center'>
                    <Box className='text-2xl' />
                    <h1 className='font-medium text-lg text-black'>
                    Automated Compliance Testing
                    </h1>
                </main>
                <main className='flex gap-x-3 items-center'>
                    <Box className='text-2xl' />
                    <h1 className='font-medium text-lg text-black'>
                    Customizable Templates
                    </h1>
                </main>
            </section>

            <section className='my-[2rem] flex justify-start items-start gap-x-[1rem]'>
                <Button className='' variant={"default"} size={"sm"}>
                    Sign up
                </Button>
                <Button className='' variant={"link"} size={"sm"}>
                    Learn More {">"}
                </Button>
            </section>
        </section>
        <section>
            <img src={"/image (1).svg"} alt='' width={500} height={500} />
        </section>
    </div>
  )
}

export default Marketing