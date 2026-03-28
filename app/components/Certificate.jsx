import { certificateData } from "@/assets/assets";
import Image from "next/image";
import React from "react";


const Certificates = () => {
    return (
        <section id="certificates" className='w-full px-[10%] py-10 scroll-mt-20 bg-white '>
            <div className="text-center mb-14">
                <h4 className='text-center mb-2 text-lg font-Ovo'>My learning journey</h4>
                <h2 className='text-center text-5xl sm:text-4xl md:text-5xl lg:text-[60px] font-Ovo'>
                    Certificates
                </h2>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
                {certificateData.map((certificate, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg transition duration-300"
                    >
                        <Image
                            src={certificate.image}
                            alt={certificate.title}
                            className="w-full object-cover"
                        />

                        <div className="p-3">
                            <h3 className="text-xl font-semibold text-black mb-2">
                                {certificate.title}
                            </h3>

                            <p className="text-sm text-gray-500 mb-1">
                                <span className="font-medium">Issuer:</span> {certificate.issuer}
                            </p>

                            <p className="text-sm text-gray-500 mb-4">
                                <span className="font-medium">Date:</span> {certificate.date}
                            </p>

                            <p className="text-gray-600 text-sm leading-6 mb-6">
                                {certificate.description}
                            </p>


                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certificates;