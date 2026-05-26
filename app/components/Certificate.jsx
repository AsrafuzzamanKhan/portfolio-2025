import { certificateData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Certificates = () => {
    return (
        <section
            id="certificates"
            className="w-full px-[10%] py-12 scroll-mt-20 bg-white dark:bg-gray-950"
        >
            <div className="text-center mb-14">
                <h4 className="mb-2 text-lg font-Ovo text-gray-700 dark:text-gray-300">
                    Credentials
                </h4>

                <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-[60px] font-Ovo dark:text-white">
                    Certificates
                </h2>

                <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-400 leading-7">
                    Verified certifications in full-stack development, cloud fundamentals, and programming.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
                {certificateData.map((certificate, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden hover:shadow-lg transition duration-300 flex flex-col h-full"
                    >
                        <div className="relative w-full h-56 bg-gray-50 dark:bg-gray-800">
                            <Image
                                src={certificate.image}
                                alt={certificate.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-4 flex flex-col flex-1">
                            <h3 className="text-xl font-semibold text-black dark:text-white mb-3 leading-snug">
                                {certificate.title}
                            </h3>

                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                                <span className="font-medium">Issued by:</span>{" "}
                                {certificate.issuer}
                            </p>

                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                <span className="font-medium">Issued:</span> {certificate.date}
                            </p>

                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-6 mb-4">
                                {certificate.description}
                            </p>

                            <div className="mt-auto pt-2">
                                {certificate.link && (
                                    <a
                                        href={certificate.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        View certificate
                                        <span>↗</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certificates;
