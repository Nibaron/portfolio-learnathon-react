import React from 'react';

import developerPic from '../../../assets/images/programmer_v_02.png';
import resumePdf from '../../../assets/files/NIBARON-RUET.pdf';

const Hero = () => {
    const goToContact = () => {
        window.location.href = './#contact';
    };


    return (
        <section id="profile" className="flex justify-center gap-5 h-80vh">
            <div className="flex h-400 w-400 mx-auto">
                <img src={developerPic} alt="profile" />
            </div>
            <div className="self-center text-center">
                <p className="font-semibold">Hello, I'm</p>
                <h1 className="text-3xl">Nibaron Kumar Das</h1>
                <p className="text-xl mb-4">Frontend Developer</p>
                <div className="flex justify-center gap-1">
                    <a
                        href={resumePdf}
                        className="btn btn-color-2"
                        download="Nibaron_Kumar_Das_Resume.pdf"
                    >
                        Download CV
                    </a>
                    <button className="btn btn-color-1" onClick={goToContact}>
                        Contact Info
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
