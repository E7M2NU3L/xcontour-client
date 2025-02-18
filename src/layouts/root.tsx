import Footer from "@/components/footer/footer"
import Navbar from "@/components/navbar/navbar"
import { Banner } from "@/components/root/new_home/Banner"
import { Outlet } from "react-router-dom"

const Root = () => {
  return (
    <div>
        <Banner />
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Root