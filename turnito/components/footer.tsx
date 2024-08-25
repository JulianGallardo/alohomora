import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AlohomoraLogo from "@/public/alohomora.png";
import { WhatsApp, Instagram } from './icons';



const Footer: React.FC<{}> = () => {
    return (
        <footer className="footer flex flex-col md:flex-row md:justify-around gap-5 px-10  py-5 bg-alohomoraOrange md:place-items-center">
            <nav className="footer">
                <Image src={AlohomoraLogo} alt="Alohomora Logo" width={150} height={150} />
                
            </nav>

            <nav>
                <div className="flex flex-col gap-4">
                    <h2 className='font-semibold text-black'>Redes Sociales</h2>
                    <div className="flex flex-row gap-4">
                        <Instagram width={40} height={40} />
                        <WhatsApp width={40} height={40} />
                    </div>
                    <h5 className='font-semibold text-black'>Bahía Blanca, Buenos Aires, Argentina</h5>



                </div>
            </nav>

        </footer>
    );
};

export default Footer;