import React from 'react'
import { Dancing_Script } from 'next/font/google'

const dancing_font = Dancing_Script({ subsets: ["latin"] });

const Logo = () => {
    return (
        <div className={`${dancing_font.className}`}>
            <h1 className='lg:text-3xl font-extrabold text-red-700'>Scube RMS</h1>
        </div>
    )
}

export default Logo