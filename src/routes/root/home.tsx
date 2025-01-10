import Cta from "@/components/root/home/cta"
import Faq from "@/components/root/home/faq"
import Features from "@/components/root/home/features"
import Hero from "@/components/root/home/hero"
import More from "@/components/root/home/more"
import Preview from "@/components/root/home/preview"
import Testimonials from "@/components/root/home/testimonials"

const Home = () => {
  return (
    <div>
        <Hero />
        <Features />
        <Preview />
        <More />
        <Testimonials />
        <Faq />
        <Cta />
    </div>
  )
}

export default Home