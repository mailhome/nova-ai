import { cn } from "cn";
import Logo from "../logo/logo";
import { navbarLinks, navbarLinks2 } from "../data/navbar";



export const Navbar = (() => {
    return ( 
        <header className=" w-full bg-[#F8FAFC] shadow-md z-20 top-0 sticky ">
            <nav className="px-4 md:px-6 lg:px-10 xl:px-16 mx-auto">

                {/* Desktop Naviagtion */}
                <div className="hidden lg:flex justify-between items-center py-4">
                    <div className="flex items-center justify-start gap-x-10 xl:gap-x-20">
                        <Logo />
                        <div className="flex items-center gap-x-6 xl:gap-x-8 justify-start">
                            {navbarLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="font-medium text-neutral-600 xl:text-md hover:text-neutral-800 transition-colors duration-200"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-x-4 xl:gap-x-6">
                       {navbarLinks2.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={cn("font-medium text-neutral-600 xl:text-md hover:text-neutral-800 transition-colors duration-200", link.label === "Start for Free" ? "bg-[#36754D] hover:text-white hover:bg-[#2D5A3C] text-white px-4 py-2 rounded-md border border-transparent" : "")}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="lg:hidden py-4 flex items-center justify-between">
                    <Logo />
                    <a href="/contact" className="bg-s hover:text-white hover:bg-[#2D5A3C] text-white px-3 py-1.5 rounded-md border md:text-lg border-transparent transition-colors duration-200">
                        Start a demo
                    </a>
                </div>
            </nav>
        </header>
    );
});