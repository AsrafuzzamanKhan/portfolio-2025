import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
    return (
        <div
            id="about"
            className="w-full px-[10%] py-8 scroll-mt-20 bg-white dark:bg-gray-950"
        >
            <p className="text-center mb-2 text-lg font-Ovo dark:text-gray-300">
                Introduction
            </p>

            <h2 className="text-center text-4xl md:text-5xl lg:text-[56px] font-Ovo mb-5 dark:text-white">
                About me
            </h2>

            <div className="flex flex-col md:flex-row w-full gap-8 items-center justify-between my-10">
                <div className="w-60 sm:w-72 rounded-3xl overflow-hidden max-w-none">
                    <Image
                        src={assets.profile_img}
                        alt="MD. Asrafuzzaman Khan"
                        className="rounded-3xl w-full"
                    />
                </div>

                <div className="flex-1">
                    <p className="mb-6 text-gray-700 dark:text-gray-300 leading-8">
                        I&apos;m a full-stack developer with over 3 years of experience building
                        and maintaining web applications with TypeScript, JavaScript, React,
                        Next.js, and Node.js. I work directly with clients, turn their needs into
                        working systems, and support them after launch. I&apos;ve built secure REST
                        APIs and connected payment systems like Stripe, using encryption, JWT,
                        and role-based access control. Most recently I built and launched the
                        online ordering and booking site for Mum&apos;s Kitchen in Tranmere, which
                        has taken 150+ online orders since launch.
                    </p>

                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
                        I hold a Master of ICT from the University of the Sunshine Coast
                        (Adelaide) and have full working rights in Australia. Actively seeking
                        full-stack developer opportunities in Adelaide.
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-3 lg:gap-6">
                        {infoList.map(({ icon, iconDark, title, description, description2 }, index) => (
                            <li
                                key={index}
                                className="border border-gray-200 dark:border-gray-700 p-6 md:p-4 rounded-2xl hover:bg-[#fcf4ff] dark:hover:bg-gray-800 hover:-translate-y-1 duration-300 hover:shadow-lg dark:bg-gray-900 overflow-hidden"
                            >
                                <Image
                                    src={icon}
                                    alt={title}
                                    className="w-7 md:w-5 lg:w-6 mt-3 block dark:hidden"
                                />
                                <Image
                                    src={iconDark}
                                    alt={title}
                                    className="w-7 md:w-5 lg:w-6 mt-3 hidden dark:block"
                                />
                                <h3 className="my-4 md:my-2 lg:my-4 font-semibold text-black dark:text-white">
                                    {title}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2 leading-6">
                                    {description}
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 text-sm leading-6">
                                    {description2}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <h3 className="my-6 text-gray-700 dark:text-gray-300 font-medium">
                        Tools & technologies
                    </h3>

                    <ul className="flex items-center gap-3 sm:gap-4 flex-wrap">
                        {toolsData.map(({ icon, name }, index) => (
                            <li
                                key={index}
                                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-gray-600 rounded-lg hover:-translate-y-1 duration-300 hover:bg-[#fcf4ff] dark:hover:bg-gray-800 hover:shadow-lg dark:bg-gray-900"
                            >
                                <Image src={icon} alt={name} title={name} className="w-5 sm:w-7" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
