import React from "react";

import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { AppSidebar } from "@/components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <div className="container">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
