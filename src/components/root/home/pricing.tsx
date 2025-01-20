import { Button } from "@/components/ui/button";
import { FileText, MagnetIcon } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen py-[2rem] flex flex-col max-w-7xl mx-auto">
      <main className="flex flex-col gap-y-[1rem] px-[1rem] md:px-0 pb-[3rem]">
        <h1 className="text-md font-light">Smart</h1>
        <h1 className="text-2xl md:text-5xl text-black">Pricing Options</h1>
        <h1 className="text-lg font-light">
          Choose the plan that streamlines your contract management and fits your budget.
        </h1>
      </main>

      <section className="flex justify-between px-4 pb-[4rem] md:pb-0 items-center flex-col md:flex-row">
        <section>
          <section className="flex justify-start gap-x-[1.7rem] items-start">
            <MagnetIcon className="text-2xl" />
            <section>
              <h1 className="text-xl font-bold text-black pb-4">AI-Powered Features</h1>
              <h1 className="pb-5 font-light text-lg text-black">
                Automate compliance testing and boost productivity with smart AI tools.
              </h1>
            </section>
          </section>
          <section className="flex justify-start gap-x-[1.7rem] items-start">
            <MagnetIcon className="text-2xl" />
            <section>
              <h1 className="text-xl font-bold text-black pb-4">Custom Templates</h1>
              <h1 className="pb-5 font-light text-lg text-black">
                Create and manage professional contracts tailored to your needs.
              </h1>
            </section>
          </section>
          <section className="flex justify-start gap-x-[1.7rem] items-start">
            <MagnetIcon className="text-2xl" />
            <section>
              <h1 className="text-xl font-bold text-black pb-4">Insights Dashboard</h1>
              <h1 className="pb-5 font-light text-lg text-black">
                Track performance, monitor updates, and access version history effortlessly.
              </h1>
            </section>
          </section>
        </section>

        <section className="border border-black py-[2rem] px-[1rem]">
          <section className="flex justify-between items-center mb-[2rem]">
            <section className="flex flex-col pr-[2rem]">
              <h1 className="text-lg md:text-lg font-medium text-black">Basic Plan</h1>
              <h1>Perfect for freelancers looking to streamline their contracts.</h1>
            </section>
            <section>
              <h1 className="text-2xl md:text-5xl text-black">$25/mo</h1>
            </section>
          </section>
          <div className="h-[0.2px] bg-black w-full px-[1.5rem]"></div>
          <section className="pt-[2rem]">
            <h1 className="pb-3 text-lg font-medium">Includes:</h1>

            <section className="flex justify-start items-start pb-[2rem] flex-wrap gap-y-3 md:gap-x-0">
              <main className="flex flex-col gap-y-3">
                <main className="flex justify-start items-start gap-x-4">
                  <FileText />
                  <h1>Automated Compliance Testing</h1>
                </main>
                <main className="flex justify-start items-start gap-x-4">
                  <FileText />
                  <h1>Custom Contract Templates</h1>
                </main>
                <main className="flex justify-start items-start gap-x-4">
                  <FileText />
                  <h1>Version Tracking</h1>
                </main>
                <main className="flex justify-start items-start gap-x-4">
                  <FileText />
                  <h1>Insights Dashboard</h1>
                </main>
                <main className="flex justify-start items-start gap-x-4">
                  <FileText />
                  <h1>Unlimited File Storage</h1>
                </main>
              </main>
            </section>
          </section>
          <div className="h-[0.2px] bg-black w-full px-[1.5rem] mb-[2rem]"></div>
          <Button className="w-full" variant={"default"} size={"sm"}>
            Get Started
          </Button>
        </section>
      </section>
    </div>
  );
};

export default Pricing;
