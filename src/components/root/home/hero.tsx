import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <main className=' bg-[radial-gradient(100%_100%_at_center,hsl(270,90%,60%,0.4)_5%,hsl(260,80%,50%,0.2)_10%,transparent_100%)]
    '>
      <section className="min-h-[90vh] px-4 max-w-7xl mx-auto ">
          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:px-0 max-w-2xl mx-auto py-12 text-center justify-center items-center"
          >
            <h4 className="text-4xl md:text-5xl lg:text-md font-semibold whitespace-normal text-wrap mb-4 text-center">
              Streamline Your <span className='text-primary'>Contracts</span> with Xcontour
            </h4>
            <h4 className="text-md md:text-xl lg:text-md font-normal text-center text-wrap mb-5">
              Xcontour revolutionizes contract management for freelancers with smart AI features. Experience seamless compliance, custom templates, and insightful tracking—all in one platform.
            </h4>
            <section className="flex items-center gap-x-3 justify-center md:justify-start">
              <Button className="" asChild size="sm">
                <Link to="/sign-up">Get Started</Link>
              </Button>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </section>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6}} className='pt-12 pb-4 '>
            <img src='/hero.png' className='h-full md:h-[90vh] max-w-7xl w-full object-cover rounded-2xl' />
          </motion.section>
      </section>
    </main>
  );
};

export default Hero;
