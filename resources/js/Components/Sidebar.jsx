import React, { useState } from "react";
import {
    AlignJustify,
    AppWindow,
    Code2,
    Globe,
    Home,
    Package2,
    SquareTerminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, usePage } from "@inertiajs/react";
import MenuItem from "./MenuItem";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useSidebar } from "@/Context/SidebarContext";
import MenuItemClose from "./MenuItemClose";
import { ScrollArea } from "./ui/scroll-area";

const Sidebar = () => {
    const { url } = usePage();
    const { isOpen, setIsOpen } = useSidebar();

    return (
        <div
            className={`transition-all duration-300 ease-in-out ${
                isOpen ? "w-64" : "w-16"
            } border-r bg-muted/40`}
        >
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px]">
                    <Link
                        href="/"
                        className="flex items-center gap-2 font-semibold"
                    >
                        <Package2 className="h-6 w-6" />
                        {isOpen && <span>Acme Inc</span>}
                    </Link>
                    {/* Button Sidebar */}
                    {/* <Button
                        variant="outline"
                        size="icon"
                        className="ml-auto h-8 w-8"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <AlignJustify />
                        <span className="sr-only">Toggle sidebar</span>
                    </Button> */}
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        {isOpen ? (
                            <>
                                <MenuItem
                                    href="/dashboard"
                                    icon={Home}
                                    activePath={url}
                                >
                                    Dashboard
                                </MenuItem>
                                {/* Master */}
                                <h3 className="my-2 text-base font-bold">
                                    Master
                                </h3>
                                {/* <ScrollArea className="h-36">
                                    <MenuItem
                                        href="/provinsi"
                                        icon={Globe}
                                        activePath={url}
                                    >
                                        Provinsi
                                    </MenuItem>
                                </ScrollArea> */}
                                {/* End Master */}
                                {/* Referensi */}
                                <h3 className="my-2 text-base font-bold">
                                    Referensi
                                </h3>
                                <ScrollArea className="h-36">
                                    <MenuItem
                                        href="/provinsi"
                                        icon={Globe}
                                        activePath={url}
                                    >
                                        Provinsi
                                    </MenuItem>
                                </ScrollArea>
                                {/* End Referensi */}
                                <h3 className="my-2 text-base font-bold">
                                    Kunjungan
                                </h3>
                            </>
                        ) : (
                            <TooltipProvider>
                                <MenuItemClose
                                    icon={Home}
                                    href={"/dashboard"}
                                    activePath={url}
                                />
                                <MenuItemClose
                                    icon={AppWindow}
                                    href={"/blank"}
                                    activePath={url}
                                />
                            </TooltipProvider>
                        )}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
