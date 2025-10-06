"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  BellIcon,
  DollarSign,
  HelpCircle,
  Moon,
  Settings,
  Sun,
  User,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";

export const HomeNavbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarWidth = collapsed ? "8%" : "25%";

  const { setTheme } = useTheme();
  // TODO: WRITE A CONDITION WHEN USER HAS A NOTIFICTION
  // const [hasNotification, setHasNotification] = useState([]);

  return (
    <nav
      className="bg-white fixed rounded-xl top-4 h-16 bg-surface transition flex items-center shadow-md pr-5 pl-2 z-50"
      style={{
        left: `calc(${sidebarWidth} - 3rem)`,
        width: `calc(100% - ${sidebarWidth})`,
      }}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex-shrink-0">
          <SidebarTrigger onClick={() => {setCollapsed(!collapsed)}} />
        </div>
        <div className="flex gap-2">
          <div>
            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link href="/notifications">
                <BellIcon className="h-5 w-5" />
                {/* TODO: WRITE A CONDITION OF HAVING NEW NOTIFICATION */}
                {false && (
                  <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-primary" />
                )}
                <span className="sr-only">Notifications</span>
              </Link>
            </Button>
          </div>

          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="outline-none" size="icon">
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="border-none" align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex justify-center items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full bg-gray-300 dark:bg-neutral-800"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage alt="User avatar" />
                    <AvatarFallback>US</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 border-none"
                align="end"
                forceMount
              >
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">User</p>
                  </div>
                </DropdownMenuLabel>
                <Separator />
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/profile" className="flex items-center space-x-2 text-gray-700 hover:cursor-pointer hover:text-blue-600 transition-colors">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/settings" className="flex items-center space-x-2 text-gray-700 hover:cursor-pointer hover:text-blue-600 transition-colors">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/pricing" className="flex items-center space-x-2 text-gray-700 hover:cursor-pointer hover:text-blue-600 transition-colors">
                      <DollarSign className="mr-2 h-4 w-4" />
                      <span>Pricing</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/faq" className="flex items-center space-x-2 text-gray-700 hover:cursor-pointer hover:text-blue-600 transition-colors">
                      <HelpCircle className="mr-2 h-4 w-4" />
                      <span>FAQ</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  {/* <SignOutButton>
                    <div className="flex space-x-1 items-center hover:text-blue-600 hover:cursor-pointer transition-colors">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </div>
                  </SignOutButton> */}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};
