import { CirclePower, RefreshCcwDot, ShieldCheck, User } from "lucide-react"
import { Button } from "../ui/button"
import { Dialog, DialogDescription, DialogTitle, DialogHeader, DialogContent, DialogTrigger, DialogFooter } from "../ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import { Link } from "react-router-dom"

const ProfileCard = () => {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant={"default"} size={"icon"}>
                            <User />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        User profile
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Profile
                </DialogTitle>
                <DialogDescription>
                    View your user profile, keep your account secure by verifying your account
                </DialogDescription>
                
                <section className="my-6">

                </section>

                <DialogFooter className="flex flex-row justify-end items-center gap-3">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link to={"/delete-user"}>
                                    <Button variant={"outline"} size={"sm"}>
                                        <CirclePower className="h-4 w-4" />
                                    </Button>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                Delete Account
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link to={"/verify-user"}>
                                    <Button variant={"outline"} size={"sm"}>
                                        <ShieldCheck className="mr-2 h-4 w-4" />
                                        MFA
                                    </Button>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                Verify User
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link to={"/send-otp"}>
                                    <Button variant={"outline"} size={"sm"}>
                                        <RefreshCcwDot className="mr-2 h-4 w-4" />
                                        Reset Password
                                    </Button>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                Reset your password
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </DialogFooter>
            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}

export default ProfileCard