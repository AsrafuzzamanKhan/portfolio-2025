"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <div>
            <div className="text-center py-10">
                <Image src={assets.logo} alt="footer logo" className="w-36 mx-auto mb-2" />

                <div className="flex items-center justify-center gap-2 mb-4 w-max mx-auto">
                    <Image src={assets.mail_icon} alt="mail icon" className="w-6" />
                    <a
                        href="mailto:contact@asrafuzzamankhan.com"
                        className="hover:underline"
                    >
                        contact@asrafuzzamankhan.com
                    </a>
                </div>
            </div>

            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] pt-5 pb-10">
                <p className="text-sm">
                    © {new Date().getFullYear()} MD Asrafuzzaman Khan. All rights reserved.
                </p>

                <ul className="flex items-center justify-center gap-4 my-4">
                    <li className="hover:text-green-700 transition duration-300">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/AsrafuzzamanKhan"
                        >
                            GitHub
                        </a>
                    </li>

                    <li className="hover:text-green-700 transition duration-300">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/asrafuzzaman-khan"
                        >
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;