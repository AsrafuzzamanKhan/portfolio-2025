import { serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Services = () => {
    return (
        <section
            id="services"
            className="w-full px-[10%] py-12 scroll-mt-20 bg-white"
        >
            <h4 className="text-center mb-2 text-lg font-Ovo text-gray-700">
                What I do
            </h4>

            <h2 className="text-center text-5xl sm:text-4xl md:text-5xl lg:text-[60px] font-Ovo">
                Services
            </h2>

            <p className="text-center max-w-2xl mx-auto mb-12 mt-5 text-gray-600 leading-7">
                I build responsive, high-performance, and user-focused web applications
                using modern full-stack technologies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {serviceData.map(({ icon, title, description }, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl border border-gray-200 p-4 h-full shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
                    >
                        <div className="flex items-start gap-4 mb-4">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-pink-50 shrink-0">
                                <Image className="w-6" src={icon} alt={title} />
                            </div>

                            <h3 className="text-xl font-semibold text-black leading-snug">
                                {title}
                            </h3>
                        </div>

                        <p className="text-gray-600 leading-7 text-sm md:text-base">
                            {description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;