import { ChartAreaIcon, Edit, FlagTriangleRight, LogOut } from "lucide-react"
import {Link} from 'react-router-dom'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ThemeSwitch } from "./theme-switch";
import ProfileCard from "./profile-card";
import LogoutDrawer from "./logout-drawer";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

// Menu items.
const items = [
  {
    title: "Edit",
    url: "/edit",
    icon: Edit,
  },
  {
    title: "Progress",
    url: "/progress",
    icon: FlagTriangleRight,
  },
];

const overview = [
    {
        title: "Overview",
        url: "/overview",
        icon: ChartAreaIcon,
    },
];

export function AppSidebar() {
  return (
    <Sidebar>
        <SidebarHeader>

        </SidebarHeader>
        <SidebarContent>
            <SidebarGroup>
            <SidebarGroupLabel>Insights</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                {overview.map((item) => (
                    <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                        <Link to={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                        </Link>
                    </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
                </SidebarMenu>
            </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                        <Link to={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                        </Link>
                    </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
                </SidebarMenu>
            </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="flex flex-row justify-end items-center gap-2">
            <ThemeSwitch />
            <ProfileCard />
            <LogoutDrawer>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant={"destructive"} size={"icon"}>
                                <LogOut />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            Logout
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </LogoutDrawer>
        </SidebarFooter>
    </Sidebar>
  )
}
