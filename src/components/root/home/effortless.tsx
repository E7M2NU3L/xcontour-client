import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Effortless = () => {
  return (
    <div className='min-h-[70vh] py-[3rem] max-w-7xl flex flex-col-reverse px-[1rem] md:px-0 md:flex-row justify-around items-start mx-auto'>
        <section className='max-w-xl'>
            <h1 className='font-bold text-lg tracking-tight md:text-xl text-foreground'>
            Xcontour simplifies contract management for freelancers, allowing you to focus on what you do best. With AI-driven features, you can ensure compliance and streamline your workflow effortlessly.
            </h1>

            <section className='flex justify-between items-center py-[1.5rem]'>
                <main className='flex flex-col gap-y-[1rem]'>
                    <h1 className='text-lg font-medium text-dark-5'>
                    Efficiency Boost
                    </h1>
                    <h1 className='font-light text-sm text-foreground'>
                    Automate repetitive tasks and save time with our intuitive platform.
                    </h1>
                </main>
                <main className='flex flex-col gap-y-[1rem]'>
                    <h1 className='text-lg font-medium text-dark-5'>
                    Custom Solutions
                    </h1>
                    <h1 className='font-light text-sm text-foreground'>
                    Create tailored contracts using our customizable templates designed for freelancers.
                    </h1>
                </main>
            </section>

            <section className='flex items-center gap-x-2'>
                <Button className='' variant={"outline"} size="sm">
                    Learn More
                </Button>
                <Button className='flex gap-x-1 items-center' size="sm" variant={"default"}>
                    Sign Up <ArrowRight />
                </Button>
            </section>
        </section>
        <section className='max-w-xl'>
            <Badge className='bg-destructive hover:bg-destructive/90 text-white font-bold'>
                Effortless
            </Badge>
            <h1 className='text-2xl md:text-5xl font-medium pt-[2rem] text-dark-5'>
            Unlock Your Freelancing Potential with Xcontour’s Smart Contract Management Solutions
            </h1>
        </section>
    </div>
  )
}

export default Effortless