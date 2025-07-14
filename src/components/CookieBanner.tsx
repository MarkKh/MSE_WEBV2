import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const COOKIE_KEY = "cookie_choice";

const CookieBanner: React.FC = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem(COOKIE_KEY)) {
            const t = setTimeout(() => setVisible(true), 600);
            return () => clearTimeout(t);
        }
    }, []);

    const acceptAll = () => {
        localStorage.setItem(COOKIE_KEY, "accepted");
        setVisible(false);
    };

    const decline = () => {
        localStorage.setItem(COOKIE_KEY, "declined");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div
            className="
        fixed inset-x-0 bottom-0 z-50
        flex flex-col md:flex-row md:items-center gap-3
        bg-gray-900/70 text-gray-100 px-4 sm:px-6 lg:px-8 py-4
        backdrop-blur-sm shadow-2xl
        transition duration-500 ease-out translate-y-0 animate-slide-up
      "
        >
            <p className="text-xs sm:text-sm leading-relaxed md:flex-1 text-center md:text-left">
                เว็บไซต์นี้ใช้คุกกี้เพื่อยกระดับประสบการณ์ของคุณ&nbsp;
                อ่านรายละเอียดได้ที่&nbsp;
                <Link
                    to="/privacy"
                    className="underline hover:text-gray-300"
                >
                    นโยบายความเป็นส่วนตัว
                </Link>
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-2 w-full md:w-auto">
                <button
                    onClick={decline}
                    className="
            w-full sm:w-auto
            px-4 py-2 rounded-md border border-gray-400 text-gray-200
            hover:bg-gray-700 transition-colors text-xs sm:text-sm
          "
                >
                    ปฏิเสธ
                </button>

                <button
                    onClick={acceptAll}
                    className="
            w-full sm:w-auto
            px-4 py-2 rounded-md bg-emerald-500 hover:bg-emerald-600
            text-black font-semibold text-xs sm:text-sm transition-colors
          "
                >
                    ยอมรับทั้งหมด
                </button>
            </div>
        </div>
    );
};

export default CookieBanner;
