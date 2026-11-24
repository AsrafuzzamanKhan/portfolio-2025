import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div id="home" className='w-11/12 max-w-3xl min-h-screen text-center mx-auto flex flex-col items-center justify-center gap-4'>

            <div>
                <Image src={assets.profile_img1} alt="MD. Asrafuzzaman Khan" className='rounded-full w-[150px] h-[150px] object-cover' />
            </div>

            <p className='flex items-center gap-2 text-xl md:text-2xl font-Ovo mb-4'>
                Hi, I&apos;m MD. Asrafuzzaman Khan <Image src={assets.hand_icon} alt='' aria-hidden='true' className='w-6' />
            </p>

            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-Ovo'>
                Full Stack Developer in Adelaide
            </h1>

            <p className="max-w-2xl text-gray-700 dark:text-gray-300 text-base md:text-lg leading-8">
                Full-stack developer with 3+ years of experience building and maintaining
                web applications with TypeScript, React, Next.js, and Node.js.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-sm md:text-base text-gray-700 dark:text-gray-300 mt-1">
                <span className="px-4 py-1.5 rounded-full border border-gray-300 dark:border-gray-600">
                    3+ years experience
                </span>
                <span className="px-4 py-1.5 rounded-full border border-gray-300 dark:border-gray-600">
                    5 projects completed
                </span>
                <span className="px-4 py-1.5 rounded-full border border-gray-300 dark:border-gray-600">
                    Open to full-stack developer roles in Adelaide
                </span>
                <span className="px-4 py-1.5 rounded-full border border-gray-300 dark:border-gray-600">
                    Full working rights in Australia
                </span>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-3">
                <a
                    href="mailto:asrafuzzamankhan89@gmail.com"
                    className="px-6 py-3 text-sm md:text-lg md:px-10 rounded-full border border-black bg-black text-white dark:border-white flex items-center gap-2 hover:bg-gray-800 transition"
                >
                    Contact me
                    <Image src={assets.right_arrow_white} alt="" className="w-4" />
                </a>

                <a
                    href="#work"
                    className="px-6 py-3 text-sm md:text-lg md:px-10 rounded-full border border-gray-500 dark:border-gray-400 dark:text-white flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                    View my work
                </a>
            </div>
        </div>
    )
}

export default Hero
