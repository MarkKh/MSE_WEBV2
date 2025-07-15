import React, { useState, useRef, useCallback } from 'react';
import heroVideo from '../assets/vdo/hero2.mp4';

const Hero = () => {
  const [revealed, setRevealed] = useState(false);   
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = useCallback(() => {
    if (!revealed) setRevealed(true);

    const v = videoRef.current;
    if (v) {
      v.currentTime = 0;
      v.play();
    }
  }, [revealed]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video background (ไม่ใส่ loop) */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        src={heroVideo}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
      />

      {/* Dark overlay: แสดงหลังวิดีโอจบครั้งแรก */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-1000 z-10 ${
          revealed ? 'opacity-60' : 'opacity-0'
        }`}
      />

      {/* Animated blobs */}
      {revealed && (
        <div className="absolute inset-0 overflow-hidden z-10">
          <div className="absolute -top-60 -right-60 w-[32rem] h-[32rem] bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse" />
          <div className="absolute -bottom-60 -left-60 w-[32rem] h-[32rem] bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse animation-delay-2000" />
        </div>
      )}

      {/* Content: fade‑in หลังจบรอบแรก */}
      <div
        className={`relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 transition-opacity duration-1000 ${
          revealed ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="text-left md:text-center text-white drop-shadow-xl">
          <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold mb-6 leading-tight text-balance">
            <span className="block p-4">ระบบสารสนเทศเพื่อการบริหารโรงพยาบาล</span>
            <span className="block bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              Hospital Information System (HIMS)
            </span>
          </h1>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-10 max-w-4xl mx-auto text-white text-left md:text-center">
            <div>
              <div className="text-4xl font-bold text-blue-300 mb-2">30+</div>
              <div className="text-white/90 text-sm sm:text-base">HIS Modules</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-300 mb-2">20+</div>
              <div className="text-white/90 text-sm sm:text-base">ERP Modules</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-300 mb-2">30+</div>
              <div className="text-white/90 text-sm sm:text-base">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
