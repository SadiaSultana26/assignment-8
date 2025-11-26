import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <div className="bg-black pt-6 px-4 overflow-x-hidden">
            <div className="w-full max-w-[1440px] grid grid-flow-col mx-auto  md:grid-cols-5 gap-4 text-white">
                
                
                <div>
                    <h1 className=" font-bold text-[24px] mb-2">Hero.IO</h1>
                    
                </div>

            
                <div>
                    <h1 className="font-bold text-[24px] mb-2">Social Links</h1>
                    <div className="grid grid-flow-col gap-4"></div>
                    <a><FontAwesomeIcon icon={faXTwitter} className="mr-2 " /> </a>
                    <a><FontAwesomeIcon icon={faLinkedin} className="mr-2" /> </a>
                    <a><FontAwesomeIcon icon={faFacebook} className="mr-2 " /> </a>
                    
                </div>
            </div>

            
            <h1 className="text-center py-3 text-[#FAFAFA] text-sm border-t border-gray-700 mt-6">
                © 2025 CS — Ticket System. All rights reserved.
            </h1>
        </div>
    );
};

export default Footer;


 