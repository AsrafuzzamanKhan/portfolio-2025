import { assets } from "@/assets/assets.js";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeMenu, setActiveMenu] = useState("top");
    const sideMenuRef = useRef();

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
        { id: "top", label: "Home" },
        { id: "about", label: "About me" },
        { id: "certificates", label: "Certificates" },
        { id: "services", label: "Services" },
        { id: "work", label: "My work" },
        { id: "experience", label: "Experience" },
    ];

    return (
        <>
            <div className="fixed top-0 right-0 -z-10 w-10/11 translate-y-[-80%]">
                <Image
                    src={assets.header_bg_color}
                    alt="background"
                    className="w-full"
                />
            </div>

            <nav
                className={`w-full fixed py-4 px-5 lg:px-8 xl:px-[8%] flex items-center justify-between z-50 ${isScrolled ? "bg-white shadow-lg backdrop-blur-lg" : ""
                    } transition-all duration-300`}
            >
                <a href="#top" onClick={() => setActiveMenu("top")}>
                    <Image
                        src={assets.logo}
                        className="w-28 cursor-pointer mr-14"
                        alt="logo"
                    />
                </a>

                <ul
                    className={`hidden lg:flex items-center gap-2 lg:gap-6 px-12 py-3 ${isScrolled ? "bg-transparent" : "rounded-full shadow-sm bg-opacity-50"
                        }`}
                >
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                onClick={() => setActiveMenu(link.id)}
                                className={`font-Ovo px-3 py-2 rounded-full transition duration-300 ${activeMenu === link.id
                                    ? "text-white bg-black"
                                    : "text-black hover:text-green-800"
                                    }`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-4">
                    <a
                        href="#contact"
                        onClick={() => setActiveMenu("contact")}
                        className={`hidden lg:flex items-center gap-3 px-10 border rounded-full py-2 ml-4 font-Ovo transition duration-300 ${activeMenu === "contact"
                            ? "bg-black text-white border-black"
                            : "border-gray-500 hover:bg-black hover:text-white hover:border-white"
                            }`}
                    >
                        Contact
                        <Image src={assets.arrow_icon} className="w-3" alt="arrow icon" />
                    </a>

                    <button onClick={openSideMenu}>
                        <Image
                            src={assets.menu_black}
                            alt="menu"
                            className="block lg:hidden w-6 ml-4"
                        />
                    </button>
                </div>

                {/* mobile menu */}
                <ul
                    ref={sideMenuRef}
                    className="fixed top-0 -right-64 bottom-0 w-64 h-screen bg-rose-50 lg:hidden flex flex-col items-center gap-4 py-20 px-10 rounded-lg shadow-lg z-50 transition duration-700"
                >
                    <div className="absolute top-5 right-5">
                        <Image
                            onClick={closeSideMenu}
                            src={assets.close_black}
                            className="w-5 cursor-pointer"
                            alt="close icon"
                        />
                    </div>

                    {navLinks.map((link) => (
                        <li key={link.id} className="lg:hidden">
                            <a
                                href={`#${link.id}`}
                                onClick={() => {
                                    setActiveMenu(link.id);
                                    closeSideMenu();
                                }}
                                className={`font-Ovo px-3 py-2 rounded-full transition ${activeMenu === link.id ? "bg-black text-white" : "text-black"
                                    }`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}

                    <li className="lg:hidden">
                        <a
                            href="#contact"
                            onClick={() => {
                                setActiveMenu("contact");
                                closeSideMenu();
                            }}
                            className={`font-Ovo px-3 py-2 rounded-full transition ${activeMenu === "contact" ? "bg-black text-white" : "text-black"
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