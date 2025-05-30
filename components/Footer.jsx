import { HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#0d1321] text-white pt-14 px-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 pb-6">
                {/* Contact Section */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">Bhatnagar Opticals</h3>
                    <p className="mb-4">
                        Your trusted eye care partner in Banda, Uttar Pradesh.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">Contact Us</h3>
                    <div className="flex flex-col space-y-2">
                        <p className="inline-flex gap-3 items-center"><HiOutlineLocationMarker className="text-orange-500 text-xl" /><a href="https://maps.app.goo.gl/s3Tej2YEFjzSaYQP6">Banda, Uttar Pradesh</a></p>
                        <p className="inline-flex gap-3 items-center"><HiOutlinePhone className="text-orange-500 text-xl" /><a href="tel:+919919302774">+91 9919302774</a></p>
                    </div>
                </div>

                {/* WhatsApp & Social */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">Hours</h3>
                    <p>
                        Wednesday - Monday: 10 AM - 8:30 PM
                    </p>
                    <p>
                        Tuesday - Close
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-10 py-4 text-center text-sm text-gray-400">
                © 2025 Bhatnagar Opticals. All rights reserved.
            </div>

            <div className="fixed bottom-5 right-5 z-10">
                <Link href={"https://wa.me/+919919119899"} className="inline-flex gap-2 items-center bg-green-600 hover:bg-green-700 active:bg-green-700 active:scale-95 text-white rounded-full shadow-sm hover:shadow-md backdrop-blur-lg hover:green-blue-300 hover:-translate-y-0.5 transition-all delay-100 ease-in-out p-4"><FaWhatsapp className="text-2xl" /></Link>
            </div>
        </footer>
    );
}
