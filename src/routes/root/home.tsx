import Contacts from "@/components/root/home/contactus"
import Cta from "@/components/root/home/cta"
import Customise from "@/components/root/home/customize"
import Effortless from "@/components/root/home/effortless"
import Features from "@/components/root/home/features"
import Hero from "@/components/root/home/hero"
import Marketing from "@/components/root/home/marketing"
import Pricing from "@/components/root/home/pricing"
import Testimonials from "@/components/root/home/testimonials"

const Home = () => {
  return (
    <div>
        <Hero />
        <Features />
        <Marketing />
        <Effortless />
        <Customise />
        <Pricing />
        <Contacts />
        <Testimonials />
        <Cta />
    </div>
  )
}

export default Home