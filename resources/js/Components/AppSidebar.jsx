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

// Menu items.
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
    url: "#",
    icon: Users,
    active: false,
  },
  {
    title: "Kegiatan",
    url: "#",
    icon: Calendar,
    active: false,
  },
  {
    title: "Artikel",
    url: "#",
    icon: FileText,
    active: false,
  },
  {
    title: "Pelatihan",
    url: "#",
    icon: GraduationCap,
    active: false,
  },
]

export function AppSidebar() {
  const { user } = usePage().props.auth;
  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border bg-sidebar overflow-hidden">
      <SidebarHeader className="h-16 flex items-center px-4">
        <Link href="/" className="flex items-center gap-2 overflow-hidden transition-all duration-300">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-edufa-yellow/10">
            <ApplicationLogo className="h-8 w-8" />
          </div>
          {state !== "collapsed" && (
            <div className="flex flex-col">
              <span className="text-sm font-black leading-none text-sidebar-foreground">
                EDU<span className="text-edufa-blue">fa</span>
              </span>
              <span className="text-[10px] text-muted-foreground font-medium">Administration</span>
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
                    className="hover:bg-sidebar-accent transition-colors"
                  >
                    <Link href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
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
                <SidebarMenuButton tooltip="Settings" className="hover:bg-sidebar-accent">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <Dropdown>
              <Dropdown.Trigger>
                <SidebarMenuButton size="lg" className="w-full data-[state=open]:bg-sidebar-accent">
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
                  <ChevronUp className="ml-auto h-4 w-4 text-muted-foreground" />
                </SidebarMenuButton>
              </Dropdown.Trigger>
              <Dropdown.Content align="top" side="right" className="w-56" width="48">
                <Dropdown.Link href={route('profile.edit')} className="flex items-center gap-2">
                   <User2 className="h-4 w-4" /> Profile
                </Dropdown.Link>
                <Dropdown.Link href={route('logout')} method="post" as="button" className="flex items-center gap-2 text-rose-600">
                   <LogOut className="h-4 w-4" /> Log Out
                </Dropdown.Link>
              </Dropdown.Content>
            </Dropdown>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
