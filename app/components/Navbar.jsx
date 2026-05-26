"use client";
import { assets } from "@/assets/assets.js";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeMenu, setActiveMenu] = useState("top");
    const sideMenuRef = useRef();
    const { toggleTheme, isDark } = useTheme();

    const openSideMenu = () => {
        sideMenuRef.current.style.transform = "translateX(-16rem)";
    };

    const closeSideMenu = () => {
        sideMenuRef.current.style.transform = "translateX(16rem)";
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { id: "home", label: "Home" },
        { id: "about", label: "About me" },
        { id: "certificates", label: "Certificates" },
        { id: "services", label: "Services" },
        { id: "work", label: "My work" },
        { id: "experience", label: "Experience" },
    ];

    return (
        <>
            {!isDark && (
                <div className="fixed top-0 right-0 -z-10 w-10/11 translate-y-[-80%]">
                    <Image src={assets.header_bg_color} alt="background" className="w-full" />
                </div>
            )}

            <nav
                className={`w-full fixed py-3 px-5 lg:px-8 xl:px-[6%] flex items-center justify-between z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-md"
                    : ""
                    }`}
            >
                {/* Logo — CSS-based switch so it works regardless of JS hydration */}
                <a href="#top" onClick={() => setActiveMenu("top")} className="shrink-0">
                    <Image src={assets.logo} alt="logo" className="w-24 cursor-pointer block dark:hidden" />
                    <Image src={assets.logo_dark} alt="logo" className="w-24 cursor-pointer hidden dark:block" />
                </a>

                {/* Desktop nav links */}
                <ul
                    className={`hidden lg:flex items-center gap-0.5 px-5 py-2 ${isScrolled ? "" : "rounded-full border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm shadow-sm"
                        }`}
                >
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                onClick={() => setActiveMenu(link.id)}
                                className={`font-Ovo whitespace-nowrap px-3 py-1.5 rounded-full text-lg
                                     transition duration-300 ${activeMenu === link.id
                                        ? "bg-black text-white dark:bg-white dark:text-black"
                                        : "text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white"
                                    }`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right side: theme toggle + contact + mobile menu */}
                <div className="flex items-center gap-3 shrink-0">
                    {/* Theme toggle */}
                    <button
                        onClick={toggleTheme}
                        className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 shrink-0"
                        aria-label="Toggle theme"
                    >
                        <Image
                            src={assets.moon_icon}
                            alt="light mode"
                            className="w-4 block dark:hidden"
                        />
                        <Image
                            src={assets.sun_icon}
                            alt="dark mode"
                            className="w-4 hidden dark:block"
                        />
                    </button>

                    {/* Contact button */}
                    <a
                        href="#contact"
                        onClick={() => setActiveMenu("contact")}
                        className={`hidden lg:flex items-center gap-2 whitespace-nowrap px-5 border rounded-full py-1.5 font-Ovo text-sm transition duration-300 ${activeMenu === "contact"
                            ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                            : "text-gray-800 dark:text-gray-200 border-gray-400 dark:border-gray-500 hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white"
                            }`}
                    >
                        Contact
                        <Image src={assets.arrow_icon} alt="arrow" className="w-3 block dark:hidden" />
                        <Image src={assets.arrow_icon_dark} alt="arrow" className="w-3 hidden dark:block" />
                    </a>

                    {/* Mobile menu button */}
                    <button onClick={openSideMenu} className="lg:hidden">
                        <Image src={assets.menu_black} alt="menu" className="w-6 block dark:hidden" />
                        <Image src={assets.menu_white} alt="menu" className="w-6 hidden dark:block" />
                    </button>
                </div>

                {/* Mobile side menu */}
                <ul
                    ref={sideMenuRef}
                    className="fixed top-0 -right-64 bottom-0 w-64 h-screen bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 lg:hidden flex flex-col items-center gap-4 py-20 px-10 shadow-2xl z-50 transition-transform duration-500"
                >
                    <div className="absolute top-5 right-5">
                        <Image
                            onClick={closeSideMenu}
                            src={assets.close_black}
                            className="w-5 cursor-pointer block dark:hidden"
                            alt="close"
                        />
                        <Image
                            onClick={closeSideMenu}
                            src={assets.close_white}
                            className="w-5 cursor-pointer hidden dark:block"
                            alt="close"
                        />
                    </div>

                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                onClick={() => { setActiveMenu(link.id); closeSideMenu(); }}
                                className={`font-Ovo whitespace-nowrap px-4 py-2 rounded-full transition ${activeMenu === link.id
                                    ? "bg-black text-white dark:bg-white dark:text-black"
                                    : "text-gray-700 dark:text-gray-200"
                                    }`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}

                    <li>
                        <a
                            href="#contact"
                            onClick={() => { setActiveMenu("contact"); closeSideMenu(); }}
                            className={`font-Ovo whitespace-nowrap px-4 py-2 rounded-full transition ${activeMenu === "contact"
                                ? "bg-black text-white dark:bg-white dark:text-black"
                                : "text-gray-700 dark:text-gray-200"
                                }`}
                        >
                            Contact me
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
