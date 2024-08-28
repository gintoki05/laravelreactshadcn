import React from "react";
import { Link } from "@inertiajs/react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./ui/button";

const MenuItemClose = ({ href, icon: Icon, children, activePath }) => {
    const isActive = activePath.startsWith(href);

    return (
        <div className="mb-2">
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link href={href}>
                        <Button
                            variant="ghost"
                            size="icon"
                            className={`w-full justify-start rounded-lg bg-muted px-2 ${
                                isActive
                                    ? "bg-primary text-primary"
                                    : "bg-muted"
                            }`}
                        >
                            <Icon className="h-5 w-5" />
                        </Button>
                    </Link>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                    {children}
                </TooltipContent>
            </Tooltip>
        </div>
    );
};

export default MenuItemClose;
