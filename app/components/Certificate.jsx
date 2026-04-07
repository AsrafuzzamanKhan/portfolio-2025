import { certificateData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Certificates = () => {
    return (
        <section
            id="certificates"
            className="w-full px-[10%] py-12 scroll-mt-20 bg-white"
        >
            <div className="text-center mb-14">
                <h4 className="mb-2 text-lg font-Ovo text-gray-700">
                    My learning journey
                </h4>

                <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-[60px] font-Ovo">
                    Certificates
                </h2>

                <p className="max-w-2xl mx-auto mt-4 text-gray-600 leading-7">
                    A selection of certifications that reflect my learning progress in
                    full-stack development, cloud fundamentals, and programming.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
                {certificateData.map((certificate, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg transition duration-300 flex flex-col h-full"
                    >
                        <div className="relative w-full h-56 bg-gray-50">
                            <Image
                                src={certificate.image}
                                alt={certificate.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-4 flex flex-col flex-1">
                            <h3 className="text-xl font-semibold text-black mb-3 leading-snug">
                                {certificate.title}
                            </h3>

                            <p className="text-sm text-gray-500 mb-1">
                                <span className="font-medium">Issued by:</span>{" "}
                                {certificate.issuer}
                            </p>

                            <p className="text-sm text-gray-500 mb-4">
                                <span className="font-medium">Issued:</span> {certificate.date}
                            </p>

                            <p className="text-gray-600 text-sm leading-6 mb-4">
                                {certificate.description}
                            </p>

                            <div className="mt-auto pt-2">
                                {certificate.link && (
                                    <a
                                        href={certificate.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline"
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