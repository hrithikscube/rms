import React, { Fragment } from 'react';

import { Dancing_Script } from 'next/font/google'

const dancing_font = Dancing_Script({ subsets: ["latin"] });

const Logo = ({ isIntro = false }) => {
    return (
        <div className={``}>
            <h1 className={`text-3xl font-extrabold text-white ${dancing_font.className}`}>Scube RMS</h1>
        </div>
    )
}

export default Logo