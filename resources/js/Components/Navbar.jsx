import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/Components/ui/input";
import UserMenu from "./UserMenu";

const Navbar = () => {
    return (
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <div className="w-full flex-1">
                {/* <form>
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search products..."
                            className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                        />
                    </div>
                </form> */}
            </div>
            <h1>helo</h1>
            <UserMenu />
        </header>
    );
};

export default Navbar;
