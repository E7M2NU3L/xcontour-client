import { Link } from "react-router-dom";

export const Banner = () => {
  return (
    <main className="py-3 text-center bg-[linear-gradient(to_right,#FCD6FF,#29D8Ff,#FFFD80,#F89ABF,#FCD6FF)]">
        <section className="container">
         <p className="font-medium flex justify-center">
          <span className="md:block hidden">Redefine your contracts management experience - </span>
         <Link to={"/"} className="underline underline-offset-2 font-medium">Explore the Demo</Link>
         </p>
      </section>
    </main>
  );
};
