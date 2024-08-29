import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import { useSidebar } from "@/Context/SidebarContext";
import { usePage } from "@inertiajs/react";

export default function Authenticated({ children }) {
    const { isOpen } = useSidebar();
    const { auth } = usePage().props;

    return (
        <div
            className={`grid min-h-screen w-full ${
                isOpen ? "md:grid-cols-[250px_1fr]" : "md:grid-cols-[64px_1fr]"
            }`}
        >
            <Sidebar />
            <div className="flex flex-col">
                <Navbar user={auth.user} />
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
