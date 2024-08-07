import React from 'react'
import { Dancing_Script } from 'next/font/google'

const dancing_font = Dancing_Script({ subsets: ["latin"] });

const Logo = ({ isIntro = false }) => {
    return (
        <div className={``}>
            {
                isIntro ?
                    <div className='text-center flex flex-col gap-2'>
                        <h2 className='lg:text-2xl font-medium text-[#121212]/80'>Welcome to</h2>
                        <h1 className={`${dancing_font.className} lg:text-4xl font-extrabold text-red-700`}>Scube RMS</h1>
                    </div>

                    : <h1 className={`lg:text-3xl font-extrabold text-red-700 ${dancing_font.className}`}>Scube RMS</h1>
            }



        </div>
    )
}

export default Logo