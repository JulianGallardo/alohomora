import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WhatsApp, { Instagram } from './icons';

const Contact = () => {
    return (
        <div>
            <h6 className="footer-title white">Contactanos</h6>
            <div className='white'>
                <h5>Brandsen 805</h5>
                <h5>Bahía Blanca, Buenos Aires, Argentina</h5>
                <h5>Teléfono: +54 9 291 4123456</h5>
            </div>

        </div>
    );
};

const Footer: React.FC<{}> = () => {
    return (
        <footer className="footer p-10 bg-orange-400 md:place-items-center">
            <nav className="">
                
            </nav>
            <nav>
                <Contact />
            </nav>
            <nav>
                <h6 className="footer-title ">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    <Instagram height={10}/>
                    

                </div>
            </nav>

        </footer>
    );
};

export default Footer;