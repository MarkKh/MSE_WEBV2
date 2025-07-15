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
import img25 from '../assets/clientimg/25.png'

const clients = [
    { src: img1, alt: "ฝ่ายแพทย์และอนามัยการไฟฟ้าฝ่ายผลิต", shot: 'EGAT' },
    { src: img2, alt: "โรงพยาบาลสวนเบญจกิติ", shot: 'BCK' },
    { src: img3, alt: "โรงพยาบาลเกษมราษฎร์ เวียงจันทน์", shot: 'Kasemrad' },
    { src: img4, alt: "Clinic Chada IVF", shot: 'Chada' },
    { src: img5, alt: "โรงพยาบาลคูณ", shot: 'KOON' },
    { src: img6, alt: "หน่วยไตเทียมอีออนเมด", shot: 'Aeonmed' },
    { src: img7, alt: "โรงพยาบาลธนบุรีบูรณา", shot: 'Thonburiburana' },
    { src: img8, alt: "โรงพยาบาลธนบุรีบำรุงเมือง", shot: 'Thonburi' },
    { src: img9, alt: "โรงพยาบาลธนบุรี", shot: 'THB' },
    { src: img10, alt: "โรงพยาบาลธนบุรี 2", shot: 'Thonburi2' },
    { src: img11, alt: "Dr. Hann Hospital", shot: 'HANN' },
    { src: img12, alt: "โรงพยาบาลรวมแพทย์", shot: 'RUAMPAT' },
    { src: img13, alt: "โรงพยาบาลรวมแพทย์ฉะเชิงเทรา", shot: 'RUAMPATCLINIC' },
    { src: img14, alt: "โรงพยาบาลภัทร-ธนบุรี", shot: 'Pattara' },
    { src: img15, alt: "โรงพยาบาลพัทยาอินเตอร์", shot: 'pattayainter' },
    { src: img16, alt: "โรงพยาบาลมุกดาหารอินเตอร์เนชั่นแนล", shot: 'Muk' },
    { src: img17, alt: "โรงพยาบาลอุบลรักษ์ ธนบุรี", shot: 'UTH' },
    { src: img18, alt: "โรงพยาบาลธนบุรี ราษฎร์ยินดี", shot: 'Rajyindee' },
    { src: img19, alt: "โรงพยาบาลทักษิณ", shot: 'THAKSIN' },
    { src: img20, alt: "โรงพยาบาลทักษิณ", shot: 'Theptarin' },
    { src: img21, alt: "โรงพยาบาลเมืองพัทยา", shot: 'PattayaCity' },
    { src: img22, alt: "สำนักแพทย์และอนามัยการท่าเรือแห่งประเทศไทย", shot: 'PAT' },
    { src: img23, alt: "โรงพยาบาลกรุงเทพภูเก็ต", shot: 'Phuket' },
    { src: img24, alt: "โรงพยาบาลทหารผ่านศึก", shot: 'VGH' },
    { src: img25, alt: "ArYu International HospitalYangon, Myanmar" , shot:'ArYu' },
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
                <div className="flex gap-8 animate-scroll">
                    {[...clients, ...clients].map((client, index) => (
                        <div
                            key={index}
                            className="inline-flex flex-col items-center w-40 shrink-0 transition-transform duration-300 ease-in-out"
                        >
                            <img
                                src={client.src}
                                alt={client.alt}
                                className="h-32 object-contain"
                            />

                            <span className="mt-2 w-38 text-sm text-gray-500 text-center break-all leading-tight">
                                {client.alt}
                            </span>
                        </div>
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