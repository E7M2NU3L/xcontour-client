import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <section className="min-h-[90vh] flex justify-center items-center px-4 text-wrap bg-gradient-to-r from-purple-500 via-violet-500 to-purple-600">
        <main className="flex group flex-col lg:flex-row justify-center mx-[2rem] text-center items-center relative p-4 max-w-[90rem] lg:min-w-[90rem] gap-y-[4rem] md:gap-y-0 border-0 md:border hover:border hover:border-dark-5 rounded-lg transition-all ease-in-out duration-300 bg-opacity-90 shadow-lg">
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col px-[2rem] md:px-0 max-w-xl p-4 lg:px-[2rem] group-hover:translate-y-4 text-center transition-transform duration-200 ease-in-out"
          >
            <div className="md:text-start text-center w-full items-center justify-center md:justify-start">
              <Badge className="text-sm font-light text-white max-w-[20vh] rounded-md bg-primary border text-center justify-center items-center border-input">
                smart contracts
              </Badge>
            </div>
            <h4 className="text-3xl md:text-5xl lg:text-md font-bold text-wrap lg:text-left mb-4 text-center text-white">
              Streamline Your Contracts with Xcontour
            </h4>
            <h4 className="text-md md:text-xl lg:text-md font-normal text-center text-wrap lg:text-left mb-5 text-white">
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
        </main>
      </section>
    </>
  );
};

export default Hero;
