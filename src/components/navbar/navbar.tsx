import { Link } from "react-router-dom"
import { Button } from "../ui/button"

const Navbar = () => {
  return (
    <div className="min-h-[10vh] flex flex-row justify-between px-4 items-center">
        <Link to={"/"} className="flex flex-row items-center gap-2">
          <img src="/logo.png" className="w-12 h-12 object-contain" alt="logo" />
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">XCon<span className="text-primary">tour</span></h1>
        </Link>

        <main className="flex flex-row gap-4 items-center">
          <Button asChild variant={"outline"} size={"sm"}>
            <Link to={"/login"}>
              Login
            </Link>
          </Button>
          <Button asChild variant={"default"} size={"sm"}>
            <Link to={"/register"}>
              Get Started
            </Link>
          </Button>
        </main>
    </div>
  )
}

export default Navbar