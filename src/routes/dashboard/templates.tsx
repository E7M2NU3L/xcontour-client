import CustomTemplateCards from '@/components/templates/custom-template-cards';
import TemplateCards from '@/components/templates/template-cards';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useTemplatesHook } from '@/hooks/use-templates';
import { TemplateProps } from '@/types/templates';
import {motion} from 'framer-motion';
import { Search } from 'lucide-react';

const Templates = () => {
  const {userTemplates, publicTemplates} = useTemplatesHook();

  console.log(publicTemplates);
  console.log(userTemplates);
  return (
    <div className="p-4">
        <main className='min-h-[50vh] w-full'>
        <main className="flex flex-row flex-wrap justify-between min-h-[10vh] gap-4 items-center w-full">
            <motion.main 
              initial={{
                y : -50,
                opacity : 0
              }}
              animate={{
                y : 0,
                opacity : 100,
              }} className='flex flex-row items-center gap-2 h-full'>
              <Separator orientation='vertical' className='h-[8vh] w-1 bg-primary text-primary' />
              <main
                className="flex flex-col gap-1">
                <h1 className="text-3xl font-semibold text-wrap tracking-tight text-foreground">
                Your <span className="text-primary">Templates</span>
                </h1>
                <p className='text-sm font-medium text-foreground tracking-tight leading-tight'>
                  your saved templates, you can reuse, update and manage your templates
                </p>
            </main>
            </motion.main>

            <main className='flex flex-row items-center gap-1'>
                <Input placeholder='search templates' />
                <Button variant={"outline"}>
                <Search />
                </Button>
            </main>
        </main>

        <main className='my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {userTemplates?.data.map((content : TemplateProps, index : number) => (
            <motion.div
            key={index}
              initial={{
                y : 50,
                opacity : 0
              }}
              whileInView={{
                y : 0,
                opacity : 100,
                transition : {
                  delay : (index + 1) * 0.1
                }
              }}
              whileHover={{
                rotate: 1,
                scale: 1.05,
              }}
            >
              <CustomTemplateCards content={content} />
            </motion.div>
          ))}
        </main>
        </main>
              
        <Separator className='mb-2' />

        <main className='min-h-[50vh] w-full'>
        <main className="flex flex-row flex-wrap justify-between min-h-[10vh] gap-4 items-center w-full">
            <motion.main 
              initial={{
                y : -50,
                opacity : 0
              }}
              animate={{
                y : 0,
                opacity : 100,
              }} className='flex flex-row items-center gap-2 h-full'>
              <Separator orientation='vertical' className='h-[8vh] w-1 bg-primary text-primary' />
              <main
            className="flex flex-col gap-1">
                <h1 className="text-3xl font-semibold text-wrap tracking-tight text-foreground">
                Your <span className="text-primary">Templates</span>
                </h1>
                <p className='text-sm font-medium text-foreground tracking-tight leading-tight'>
                  your saved templates, you can reuse, update and manage your templates
                </p>
            </main>
            </motion.main>

            <main className='flex flex-row items-center gap-1'>
                <Input placeholder='search templates' />
                <Button variant={"outline"}>
                <Search />
                </Button>
            </main>
        </main>

        <main className='my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {publicTemplates?.publicTemp.map((content : TemplateProps, index : number) => (
            <motion.div
            key={index}
              initial={{
                y : 50,
                opacity : 0
              }}
              whileInView={{
                y : 0,
                opacity : 100,
                transition : {
                  delay : (index + 1) * 0.1
                }
              }}
              whileHover={{
                rotate: 1,
                scale: 1.05,
              }}
            >
              <TemplateCards content={content} />
            </motion.div>
          ))}
        </main>
        </main>
    </div>
  )
}

export default Templates