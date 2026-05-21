import * as React from "react"
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
  SidebarTrigger,
  useSidebar
} from "@/Components/ui/sidebar"

import { 
  LayoutDashboard, 
  MapPin, 
  Users, 
  Calendar, 
  FileText, 
  GraduationCap, 
  Settings, 
  LogOut,
  ChevronUp,
  User2 
} from "lucide-react"

import { Link, usePage } from "@inertiajs/react"
import ApplicationLogo from "@/Components/ApplicationLogo"
import Dropdown from "@/Components/Dropdown"
import { cn } from "@/lib/utils"

export function AppSidebar() {
  const { user } = usePage().props.auth;
  const { state } = useSidebar();

  
  const items = [
    {
      title: "Dashboard",
      url: route('dashboard'),
      icon: LayoutDashboard,
      active: route().current('dashboard'),
    },
    {
      title: "Cabang",
      url: route('admin.branches.index'),
      icon: MapPin,
      active: route().current('admin.branches.*'),
    },
    {
      title: "Terapis",
      url: route('admin.team-members.index'),
      icon: Users,
      active: route().current('admin.team-members.*'),
    },
    {
      title: "Kegiatan",
      url: route('admin.activities.index'),
      icon: Calendar,
      active: route().current('admin.activities.*'),
    },
    {
      title: "Artikel",
      url: route('admin.articles.index'),
      icon: FileText,
      active: route().current('admin.articles.*'),
    },
    {
      title: "Layanan",
      url: route('admin.services.index'),
      icon: GraduationCap,
      active: route().current('admin.services.*'),
    },
  ]

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border bg-sidebar overflow-hidden">
      <SidebarHeader className="h-16 flex items-center px-4">
        <Link href="/" className="flex items-center gap-2 overflow-hidden transition-all duration-300">
          {state !== "collapsed" && (
            <div className="flex flex-col">
              <span className="text-sm font-black leading-none text-sidebar-foreground">
                EDU<span className="text-edufa-blue">FA</span>
              </span>
              <span className="text-[10px] text-muted-foreground font-medium">CENTRE ADMIN</span>
            </div>
          )}
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={item.active}
                    tooltip={item.title}
                    className={cn(
                      "transition-all duration-200 rounded-xl px-4 py-2.5 h-11",
                      item.active 
                        ? "!bg-edufa-yellow text-gray-900 font-bold shadow-md shadow-edufa-yellow/20" 
                        : "hover:bg-sidebar-accent text-muted-foreground hover:text-sidebar-foreground"
                    )}
                  >
                    <Link href={item.url} className="flex items-center gap-3">
                      <item.icon className={cn("h-5 w-5", item.active ? "text-gray-900" : "text-muted-foreground/60")} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupLabel className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">System</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="w-full">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-edufa-blue/10 text-edufa-blue">
                <User2 className="h-4 w-4" />
              </div>
              <div className="flex flex-1 flex-col items-start overflow-hidden text-left">
                <span className="truncate text-sm font-semibold text-sidebar-foreground">
                  {user.name}
                </span>
                <span className="truncate text-[10px] text-muted-foreground">
                  {user.email}
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem className="mt-2">
            <SidebarMenuButton asChild tooltip="Log Out" className="text-rose-600 hover:bg-rose-50 hover:text-rose-700">
              <Link href={route('logout')} method="post" as="button" className="flex items-center w-full gap-3">
                <LogOut className="h-4 w-4" />
                <span>Log Out</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
