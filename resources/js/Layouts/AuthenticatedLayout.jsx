import * as React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { 
    SidebarProvider, 
    SidebarInset, 
    SidebarTrigger,
    SidebarSeparator
} from '@/Components/ui/sidebar';
import { AppSidebar } from '@/Components/AppSidebar';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="bg-gray-50/50">
                <header className="flex h-16 shrink-0 items-center gap-2 border-b border-sidebar-border bg-white px-4">
                    <SidebarTrigger className="-ml-1" />
                    <div className="h-4 w-[1px] bg-sidebar-border mx-2" />
                    <div className="flex-1">
                        {header ? (
                            header
                        ) : (
                            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                <span>Administration</span>
                                <span className="text-gray-300">/</span>
                                <span className="text-gray-900 font-bold">Dashboard</span>
                            </div>
                        )}
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
                    <div className="mx-auto max-w-7xl">
                        {children}
                    </div>
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}
