import acmeLogo from "@/assets/images/acme.png";
import quantumLogo from "@/assets/images/quantum.png";
import echoLogo from "@/assets/images/echo.png";
import celestialLogo from "@/assets/images/celestial.png";
import pulseLogo from "@/assets/images/pulse.png";
import apexLogo from "@/assets/images/apex.png";
import {motion} from 'framer-motion';

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <section className="py-12">
      <div className="container">
        <h1 className="text-xl text-muted-foreground font-medium text-center">Trusted by the world&apos;s most innovative teams.</h1>

        <div className="flex overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute before:z-10 after:z-10 after:absolute before:h-full after:h-full before:w-20 after:w-20 relative before:bg-[linear-gradient(to_right,#FFF,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#FFF,rgb(0,0,0,0))] dark:after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))] dark:before:bg-[linear-gradient(to_left,rgb(0,0,0,0,#000))] after:right-0 before:left-0 before:top-0 after:top-0 max-w-7xl mx-auto">
          <motion.div initial={{
            translateX : 0
          }} 
          animate={{
            translateX : "-50%"
          }}
          transition={{
            duration : 10,
            repeat : Infinity,
            repeatType : 'loop',
            ease : "linear",
          }}
          className="flex flex-none gap-16 pr-16">
            {images.map((content, index) => (
              <motion.img src={content.src} alt={content.alt} className="flex-none h-[32px]" key={index} />
            ))}
            {images.map((content, index) => (
              <motion.img src={content.src} alt={content.alt} className="flex-none h-[32px]" key={index} />
            ))}
          </motion.div>
         </div>
      </div>
    </section>
  );
};
