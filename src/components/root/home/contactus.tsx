import { Badge } from '@/components/ui/badge'
import { LocateIcon, Mail, Phone } from 'lucide-react'

const Contacts = () => {
  return (
    <div className='min-h-[30vh] relative flex flex-col justify-center max-w-7xl mx-auto items-center py-12'>
        <section className='flex justify-between items-center w-full flex-col md:flex-row px-[1rem] md:px-0 gap-y-[2rem] md:gap-y-0'>
            <main className='max-w-xl pt-[3rem]'>
                <Badge>
                    Get in Touch
                </Badge>
                <h1 className='text-2xl md:text-5xl font-medium text-dark-5'>
                    Contact us
                </h1>
                <h1 className='font-light text-sm text-dark-5'>
                    For any support or queries, feel free to reach out to us
                </h1>
            </main>
            <main className='max-w-xl flex flex-col gap-y-4'>
                <section className='flex justify-start items-start gap-x-2'>
                    <Mail />
                    <section>
                        <h1 className='font-semibold text-xl text-dark-5'>
                            mail
                        </h1>
                        <h1 className='font-medium text-sm text-black'>
                            aemmanuel685210@gmail.com
                        </h1>
                    </section>
                </section>
                <section className='flex justify-start items-start gap-x-2'>
                    <Phone />
                    <section>
                        <h1 className='font-semibold text-xl text-dark-5'>
                            phone
                        </h1>
                        <h1 className='font-medium text-sm text-black' style={{
                            fontFamily: "serif"
                        }}>
                            +91 7397336625
                        </h1>
                    </section>
                </section>
                <section className='flex justify-start items-start gap-x-2'>
                    <LocateIcon />
                    <section>
                        <h1 className='font-semibold text-xl text-dark-5'>
                            location
                        </h1>
                        <h1 className='font-medium text-sm text-black'>
                            Chennai, Tamilnadu, India
                        </h1>
                    </section>
                </section>
            </main>
        </section>
    </div>
  )
}

export default Contacts