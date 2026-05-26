import { assets, workExperience } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Experience = () => {
    return (
        <section id='experience' className="w-full px-6 md:px-12 lg:px-[10%] py-16 md:py-20 scroll-mt-20 bg-white dark:bg-gray-950">

            <h4 className="text-center mb-2 text-lg font-Ovo dark:text-gray-300">
                Career
            </h4>
            <h2 className="text-center text-5xl sm:text-4xl md:text-5xl lg:text-[60px] font-Ovo mb-10 dark:text-white">
                Experience
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {workExperience.map(
                    ({ company, role, period, responsibilities }, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 md:p-7 hover:border-gray-300 dark:hover:border-gray-500 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{company}</p>
                                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white leading-snug">
                                        {role}
                                    </h3>
                                </div>

                                <span className="inline-flex w-fit items-center rounded-full border border-gray-200 dark:border-gray-600 px-4 py-1.5 text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800">
                                    {period}
                                </span>
                            </div>

                            <ul className="space-y-3">
                                {responsibilities.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 text-gray-700 dark:text-gray-300 leading-7"
                                    >
                                        <Image
                                            src={assets.right_arrow}
                                            alt="arrow"
                                            className="w-4 mt-1.5"
                                        />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                )}
            </div>
        </section>
    )
}

export default Experience
