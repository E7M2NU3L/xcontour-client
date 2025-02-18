import Contacts from "@/components/root/home/contactus"
import Cta from "@/components/root/home/cta"
import Customise from "@/components/root/home/customize"
import Marketing from "@/components/root/home/marketing"
import Pricing from "@/components/root/home/pricing"
import Testimonials from "@/components/root/home/testimonials"
import { FAQs } from "@/components/root/new_home/FAQs"
import { FeaturesCards } from "@/components/root/new_home/Features"
import { HeroSection } from "@/components/root/new_home/Hero"
import { LogoTicker } from "@/components/root/new_home/LogoTicker"
import { ProductShowcase } from "@/components/root/new_home/ProductShowcase"

const Home = () => {
  return (
    <div>
        <HeroSection />
        <LogoTicker />
        <FeaturesCards />
        <ProductShowcase />
        <Marketing />
        <Customise />
        <Pricing />
        <Contacts />
        <Testimonials />
        <FAQs />
        <Cta />
    </div>
  )
}

export default Home