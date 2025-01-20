import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

const CTA = () => {
  return (
        <div className='flex min-h-[30vh] justify-start max-w-7xl items-start flex-col mx-auto px-[2rem] md:px-0 pb-[2rem] md:py-0'>
        <h1 className='text-5xl font-medium text-foregound pb-4'>
            Manage your Contracts Effectively
        </h1>
        <h1 className='text-sm font-light text-foreground'>
        Experience the power of Xcontour's AI-driven contract management software. Sign up now for a free trial and streamline your freelance contracts effortlessly.
        </h1>

        <section className='pt-[1.7rem] gap-x-4 flex justify-around items-start'>
            <Button className='' variant={"default"} size={"sm"}>
                Sign up
            </Button>
            <Button className='flex items-center gap-x-3' size={"sm"} variant={"outline"}>
                Learn More <ArrowLeft />
            </Button>
        </section>
    </div>
  )
}

export default CTA