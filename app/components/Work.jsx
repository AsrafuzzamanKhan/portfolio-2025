import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Work = () => {
    return (
        <section
            id="work"
            className="w-full px-[10%] py-12 scroll-mt-20 bg-white dark:bg-gray-950"
        >
            <h4 className="text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-gray-300">
                Portfolio
            </h4>

            <h2 className="text-center text-5xl sm:text-4xl md:text-5xl lg:text-[60px] font-Ovo dark:text-white">
                Selected Work
            </h2>

            <p className="text-center max-w-2xl mx-auto mb-12 mt-5 text-gray-600 dark:text-gray-400 leading-7">
                Selected full-stack projects showcasing scalable architecture, responsive
                design, and real-world problem solving.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workData.map(({ title, description, bgImage, link, tech }, index) => (
                    <a
                        href={link}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                    >
                        <div
                            className="relative h-[280px] rounded-2xl overflow-hidden cursor-pointer group border border-gray-200 dark:border-gray-700 bg-white shadow-sm hover:shadow-lg transition duration-300"
                            style={{
                                backgroundImage: `url(${bgImage})`,
                                backgroundSize: "cover",
                                backgroundPosition: "top center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

                            <div className="absolute w-[88%] bg-white dark:bg-gray-900 rounded-xl bottom-5 left-1/2 -translate-x-1/2 py-4 px-4 flex items-center justify-between shadow-lg group-hover:bottom-7 transition-all duration-300">
                                <div className="pr-3">
                                    <h3 className="font-semibold text-lg text-black dark:text-white">{title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>

                                    {tech && (
                                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                                            {tech.join(" • ")}
                                        </p>
                                    )}
                                </div>

                                <div className="flex items-center justify-center w-10 h-10 border dark:border-gray-600 rounded-full shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#fff] group-hover:bg-lime-300 transition duration-300 shrink-0">
                                    <Image
                                        src={assets.send_icon}
                                        alt="Open project"
                                        className="w-5"
                                    />
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Work;
