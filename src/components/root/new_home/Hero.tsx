import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Cursor from '@/assets/images/cursor.png';
import Message from '@/assets/images/message.png';

export const HeroSection = () => {
  return (
    <section className="bg-background text-foreground bg-[linear-gradient(to_bottom,transparent,transparent_34%,hsla(262.1,83.3%,57.8%,20%)_65%,#A46EDB_82%)] min-h-[90vh] relative overflow-clip py-[72px] sm:py-24 sm:top-[calc(100%-120px)]">

      <div className="container">
        <main className="flex items-center justify-center flex-col max-w-3xl mx-auto">
          <Link to={"/"} className="border py-1 px-2 rounded-lg border-foreground flex-row text-sm font-normal items-center gap-1 inline-flex">
            <span className="bg-[linear-gradient(to_right,#F87AFF,#F893D0,#FFDD99,#A46EDB)] bg-clip-text text-transparent [-webkit-background-clip:text]">Powered with Gemini -</span>
            <span className="hover:underline items-center flex flex-row">Learn More <TrendingUp className="h-4 w-4 ml-1" /></span>
          </Link>
          <div className="flex justify-center">
            <div className="inline-flex relative">
            <h1 className="font-semibold z-10 text-7xl tracking-tight text-center mt-8">Manage your contracts at Ease</h1>
            <img src={Cursor} alt="cursor" className="absolute h-[200px] w-[200px] z-0 -top-12 -left-24" />
            <img src={Message} alt="message" className="absolute h-[200px] w-[200px] -right-24 -bottom-12" />
            </div>
          </div>
          <p className="text-center leading-tight text-xl text-muted-foreground mt-8">Xcontour revolutionizes contract management for freelancers with smart AI features. Experience seamless compliance, custom templates, and insightful tracking—all in one platform.</p>

          <section className="flex items-center gap-x-3 justify-center md:justify-start mt-8">
            <Button className="" asChild size="sm">
              <Link to="/sign-up">Get Started</Link>
            </Button>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </section>
        </main>
      </div>
    </section>
  );
};
