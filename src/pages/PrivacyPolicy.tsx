import Header2 from "../components/Header2";
import Footer from "../components/Footer";

const PrivacyPolicy = () => (
    <div className="flex flex-col min-h-screen">
        <Header2 />

        <main className="flex-grow">
            <section
                id="header"
                className="relative w-full overflow-hidden bg-gradient-to-br bg-[#111827] p-8 sm:p-12 pt-24 sm:pt-32"
            >
                <div className="py-20 text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold mb-6 leading-tight text-balance">
                        COOKIE POLICY PDPA
                    </h1>

                    <p className="leading-relaxed mb-2">นโยบายความเป็นส่วนตัว</p>
                </div>
            </section>

            <div className="text-gray-600 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <section id="about">
                    <h2 className="text-2xl font-semibold">
                        นโยบายคุกกี้คืออะไร (What is a Cookie Policy)?
                    </h2>

                    <p className="mt-6 text-md leading-relaxed">
                        นโยบายคุกกี้เป็นเอกสารที่อธิบายว่าเว็บไซต์ใช้คุกกี้และเทคโนโลยีที่คล้ายคลึงกันอย่างไร เพื่อรวบรวมและใช้ข้อมูลเกี่ยวกับผู้เยี่ยมชมเว็บไซต์ นโยบายนี้มีความสำคัญภายใต้กฎหมายคุ้มครองข้อมูลส่วนบุคคล (PDPA) เนื่องจากคุกกี้สามารถเก็บรวบรวมข้อมูลส่วนบุคคลของผู้ใช้งาน
                    </p>

                    <p className="mt-6 text-xl font-bold">
                        ทำไมต้องมีนโยบายคุกกี้?
                    </p>

                    <div className="mt-6 text-md">
                        <ul className="list-disc list-inside">
                            <li>
                                <b>PDPA Compliance:</b> พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA) กำหนดให้องค์กรต้องแจ้งให้ผู้ใช้งานทราบเกี่ยวกับการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคล ซึ่งรวมถึงการใช้คุกกี้
                            </li>
                            <li>
                                <b>Transparency:</b> สร้างความโปร่งใสเกี่ยวกับวิธีการที่เว็บไซต์ใช้คุกกี้ในการเก็บข้อมูล
                            </li>

                            <li>
                                <b>User Consent:</b> ช่วยให้ผู้ใช้งานสามารถตัดสินใจว่าจะอนุญาตให้เว็บไซต์ใช้คุกกี้หรือไม่
                            </li>
                            <li>
                                <b>Building Trust:</b> สร้างความเชื่อมั่นให้กับผู้ใช้งานว่าเว็บไซต์ให้ความสำคัญกับความเป็นส่วนตัวและปฏิบัติตามกฎหมาย
                            </li>

                        </ul>
                    </div>

                    <div className="mt-10 text-3xl w-full bg-[#fff9f3] p-2 rounded text-blue-800 font-bold">
                        เนื้อหาสำคัญที่ควรมีในนโยบายคุกกี้ (Key Elements of a Cookie Policy)
                    </div>

                    <p className="mt-6 text-md">
                        นโยบายคุกกี้ที่ดีควรมีข้อมูลดังต่อไปนี้:
                    </p>

                    <div className="mt-6 text-md">
                        <ul className="list-disc list-inside">
                            <li>
                                <b>ประเภทของคุกกี้ที่ใช้ (Types of Cookies Used):</b> อธิบายประเภทของคุกกี้ที่เว็บไซต์ใช้ เช่น คุกกี้ที่จำเป็น (Necessary Cookies), คุกกี้เพื่อประสิทธิภาพ (Performance Cookies), คุกกี้เพื่อการทำงาน (Functionality Cookies), และคุกกี้เพื่อการโฆษณา (Advertising Cookies).
                            </li>
                            <li>
                                <b>วัตถุประสงค์ในการใช้คุกกี้ (Purpose of Using Cookies): </b> อธิบายว่าทำไมเว็บไซต์ถึงใช้คุกกี้แต่ละประเภท เช่น เพื่อจดจำการตั้งค่าของผู้ใช้งาน, เพื่อวิเคราะห์การใช้งานเว็บไซต์, หรือเพื่อแสดงโฆษณาที่เกี่ยวข้อง.
                            </li>
                            <li>
                                <b>ระยะเวลาในการเก็บคุกกี้ (Cookie Duration):</b> ระบุว่าคุกกี้แต่ละประเภทจะถูกเก็บไว้ในอุปกรณ์ของผู้ใช้งานนานเท่าใด เช่น คุกกี้แบบ Session (Session Cookies) ที่จะหมดอายุเมื่อปิดเบราว์เซอร์ หรือคุกกี้แบบถาวร (Persistent Cookies) ที่จะถูกเก็บไว้เป็นระยะเวลานานกว่า.
                            </li>
                            <li>
                                <b>วิธีการจัดการคุกกี้ (How to Manage Cookies):</b> อธิบายวิธีการที่ผู้ใช้งานสามารถควบคุมหรือปิดการใช้งานคุกกี้ได้ เช่น ผ่านการตั้งค่าเบราว์เซอร์ หรือผ่านเครื่องมือจัดการคุกกี้ที่เว็บไซต์จัดให้.
                            </li>
                            <li>
                                <b>ข้อมูลติดต่อ (Contact Information):</b>  ระบุข้อมูลติดต่อขององค์กรเพื่อให้ผู้ใช้งานสามารถสอบถามข้อมูลเพิ่มเติมเกี่ยวกับนโยบายคุกกี้หรือความเป็นส่วนตัวได้
                            </li>

                        </ul>
                    </div>

                    <div className="mt-10 text-3xl w-full bg-[#fff9f3] p-2 rounded text-blue-800 font-bold">
                        ตัวอย่างประเภทของคุกกี้ (Examples of Cookie Types)
                    </div>


                    <div className="mt-10 grid grid-cols-2 gap-y-6 gap-x-8">
                        {/* Row 1 */}
                        <div>
                            <p className="font-bold">คุกกี้ที่จำเป็น (Necessary Cookies)</p>
                        </div>
                        <div>
                            <p>คุกกี้เหล่านี้มีความจำเป็นต่อการทำงานพื้นฐานของเว็บไซต์ ช่วยให้ผู้ใช้งานสามารถเข้าถึงส่วนต่างๆ ของเว็บไซต์และใช้คุณสมบัติต่างๆ ได้อย่างปลอดภัย</p>
                        </div>

                        {/* Row 2 */}
                        <div>
                            <p className="font-bold">คุกกี้เพื่อประสิทธิภาพ (Performance Cookies)</p>
                        </div>
                        <div>
                            <p>คุกกี้เหล่านี้ช่วยให้เว็บไซต์เข้าใจว่าผู้ใช้งานมีปฏิสัมพันธ์กับเว็บไซต์อย่างไร โดยการเก็บรวบรวมข้อมูล เช่น หน้าที่ผู้ใช้งานเข้าชมบ่อยที่สุด หรือข้อผิดพลาดที่เกิดขึ้น</p>
                        </div>

                        {/* Row 3 */}
                        <div>
                            <p className="font-bold">คุกกี้เพื่อการทำงาน (Functionality Cookies)</p>
                        </div>
                        <div>
                            <p>คุกกี้เหล่านี้ช่วยให้เว็บไซต์จดจำการตั้งค่าของผู้ใช้งาน เช่น ภาษาที่เลือก หรือภูมิภาค เพื่อมอบประสบการณ์การใช้งานที่เป็นส่วนตัวมากขึ้น</p>
                        </div>

                        {/* Row 4 */}
                        <div>
                            <p className="font-bold">คุกกี้เพื่อการโฆษณา (Advertising Cookies)</p>
                        </div>
                        <div>
                            <p>คุกกี้เหล่านี้ใช้เพื่อแสดงโฆษณาที่เกี่ยวข้องกับความสนใจของผู้ใช้งาน โดยอาจมีการแบ่งปันข้อมูลกับบุคคลที่สามเพื่อวัตถุประสงค์ทางการตลาด</p>
                        </div>
                    </div>
                </section>

            </div>
        </main>

        <Footer />
    </div>
);

export default PrivacyPolicy;
