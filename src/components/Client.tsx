import React from 'react';
import { Users, Target, Award, Lightbulb } from 'lucide-react';
import img1 from '../assets/clientimg/1.png'
import img2 from '../assets/clientimg/2.png'
import img3 from '../assets/clientimg/3.png'
import img4 from '../assets/clientimg/4.png'
import img5 from '../assets/clientimg/5.png'
import img6 from '../assets/clientimg/6.png'
import img7 from '../assets/clientimg/7.png'
import img8 from '../assets/clientimg/8.png'
import img9 from '../assets/clientimg/9.png'
import img10 from '../assets/clientimg/10.png'
import img11 from '../assets/clientimg/11.png'
import img12 from '../assets/clientimg/12.png'
import img13 from '../assets/clientimg/13.png'
import img14 from '../assets/clientimg/14.png'
import img15 from '../assets/clientimg/15.png'
import img16 from '../assets/clientimg/16.png'
import img17 from '../assets/clientimg/17.png'
import img18 from '../assets/clientimg/18.png'
import img19 from '../assets/clientimg/19.png'
import img20 from '../assets/clientimg/20.png'
import img21 from '../assets/clientimg/21.png'
import img22 from '../assets/clientimg/22.png'
import img23 from '../assets/clientimg/23.png'
import img24 from '../assets/clientimg/24.png'

const clients = [
    { src: img1, alt: 'EGAT' },
    { src: img2, alt: 'BCK' },
    { src: img3, alt: 'Kasemrad' },
    { src: img4, alt: 'Kasemrad' },
    { src: img5, alt: 'KOON' },
    { src: img6, alt: 'Aeonmed' },
    { src: img7, alt: 'Thonburiburana' },
    { src: img8, alt: 'Thonburi' },
    { src: img9, alt: 'THB' },
    { src: img10, alt: 'Thonburi2' },
    { src: img11, alt: 'HANN' },
    { src: img12, alt: 'RUAMPAT' },
    { src: img13, alt: 'RUAMPATCLINIC' },
    { src: img14, alt: 'Pattara' },
    { src: img15, alt: 'pattayainter' },
    { src: img16, alt: 'Muk' },
    { src: img17, alt: 'UTH' },
    { src: img18, alt: 'Rajyindee' },
    { src: img19, alt: 'THAKSIN' },
    { src: img20, alt: 'Theptarin' },
    { src: img21, alt: 'PattayaCity' },
    { src: img22, alt: 'PAT' },
    { src: img23, alt: 'Phuket' },
    { src: img24, alt: 'VGH' },
];

const Client = () => {

    return (
        <section id="client" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Clients
                    </h2>
                </div>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="flex gap-8 animate-scroll whitespace-nowrap">
                    {[...clients, ...clients].map((client, index) => (
                        <img
                            key={index}
                            src={client.src}
                            alt={client.alt}
                            className="h-32 shrink-0 object-contain
                                        transition-transform duration-300 ease-in-out
                                        hover:scale-125 hover:z-10"   /* ← ครอปใหญ่ขึ้น 1.25 เท่า */
                        />
                    ))}
                </div>

                <style>{`
                    @keyframes scroll {
                    0%   { transform: translateX(0);   }
                    100% { transform: translateX(-100%); }
                    }
                    .animate-scroll {
                    animation: scroll 30s linear infinite;
                    }
                `}</style>
            </div>



        </section>
    );
};

export default Client;