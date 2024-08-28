import React from "react";
import { Link } from "@inertiajs/react";

const MenuItem = ({ href, icon: Icon, children, activePath }) => {
    const isActive = activePath.startsWith(href);

    return (
        <Link
            href={href}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive ? "bg-muted text-primary" : "text-muted-foreground"
            }`}
        >
            <Icon className="h-4 w-4" />
            {children}
        </Link>
    );
};

export default MenuItem;
