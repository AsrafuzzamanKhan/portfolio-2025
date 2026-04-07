import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div id="home" className='w-11/12 max-w-3xl min-h-screen text-center mx-auto flex flex-col items-center justify-center gap-4'>

            <div>
                <Image src={assets.profile_img1} alt="MD. Asrafuzzaman Khan" className=' rounded-full w-[150px] h-[150px] object-cover' />

            </div>
            <h3 className=' flex items-center gap-2 text-xl md:text-2xl font-Ovo  mb-4'>
                Hi! I&apos;m MD. Asrafuzzaman Khan <Image src={assets.hand_icon} alt='wave' className='w-6' />
            </h3>
            <h1 className=' text-3xl  sm:text-4xl md:text-5xl lg:text-[60px] font-Ovo'>
                Full stack web developer
            </h1>
            <p className="max-w-2xl text-gray-700 text-base md:text-lg leading-8">
                Full-stack developer with 3+ years of experience building fast,
                responsive, and SEO-friendly web applications. Skilled in React.js,
                Next.js, Node.js, and MongoDB, with a strong focus on clean code,
                performance, and user experience.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm md:text-base text-gray-700 mt-1">
                <span className="px-4 py-1.5 rounded-full border border-gray-300">
                    3+ years experience
                </span>
                <span className="px-4 py-1.5 rounded-full border border-gray-300">
                    5+ projects completed
                </span>
                <span className="px-4 py-1.5 rounded-full border border-gray-300">
                    Open to graduate roles
                </span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-3">
                <a
                    href="#contact"
                    className="px-6 py-3 text-sm md:text-lg md:px-10 rounded-full border border-white bg-black text-white flex items-center gap-2 hover:bg-gray-800 transition"
                >
                    Contact me
                    <Image
                        src={assets.right_arrow_white}
                        alt="contact"
                        className="w-4"
                    />
                </a>

                <a
                    href="/resume.pdf"
                    download
                    className="px-6 py-3 text-sm md:text-lg md:px-10 rounded-full border border-gray-500 flex items-center gap-2 hover:bg-gray-100 transition"
                >
                    Download resume
                    <Image src={assets.download_icon} alt="download" className="w-4" />
                </a>
            </div>
        </div>
    )
}

export default Hero
