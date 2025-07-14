import React from 'react';
import { Users, Target, Award, Lightbulb } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Team Members', value: '25+', icon: <Users className="w-6 h-6" /> },
    { label: 'Integrated System', value: 'Fully', icon: <Target className="w-6 h-6" /> },
  ];


  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Modular Software
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a team of passionate technologists dedicated to transforming businesses through innovative digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Our Success Story
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Modular Software Expertise Co., Ltd. (MSE) is a software house specializing in the development of hospital information systems. Our flagship product, MSE Proteus HIS, is a comprehensive Hospital Information Management System (HIMS) designed and developed by a team of experts with over 30 years of experience in both healthcare and IT systems. The system is tailored to meet the complex needs of modern hospitals, ensuring efficiency, reliability, and seamless integration across all departments.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-blue-600 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};

export default About;