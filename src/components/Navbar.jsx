import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import kreem from "../assets/kreem.jpeg"
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
function Navbar() {
  return (
    <motion.nav
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="mb-20  flex items-center justify-between py-10"
    >
      <div id="home" className="flex  flex-shrink-0 items-center">
        <img
          src={kreem}
          className="h-15 w-15 mx-2 filter brightness-70 border-none rounded-full  transform transition-transform duration-500 hover:rotate-360"
          alt="Logo"
        />
      </div>

      {/* Icons */}
      <div className="flex space-x-4 gap-4  text-2xl">
        <a
          href="https://api.whatsapp.com/send?phone=972556657503&text= שלום כרים
"
          target="_blank"
        >
          <FaWhatsapp className="text-green-400 cursor-pointer hover:-translate-y-1 transition-transform duration-300" />
        </a>

        <a
          href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHiiUgXpKuRfAAAAZY--ZBoPaXs2Ua4MIKPIb6skBEkpHT2ENmG0PP9UUAyG5XjjrY_pHxb_m0d6LjCZsL5WSU74zMEvx0Mk0TgFyaCfGGGqVqB51B0xznappaCwlszgZdLZUk=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fkareem-zeedan-81baab273%2F"
          target="_blank"
        >
          <FaLinkedin className="text-blue-400 cursor-pointer hover:-translate-y-1 transition-transform duration-300" />
        </a>
        <a href="https://github.com/SharkZeedan" target="_blank">
          <FaGithub className="cursor-pointer hover:translate-y-1 transition-transform duration-300" />
        </a>
        <a
          href="https://www.instagram.com/kareem_zeedan?igsh=OHQwY3VmYnZhd2Y5&utm_source=qr"
          target="_blank"
        >
          <FaInstagram className="text-orange-600 cursor-pointer hover:-translate-y-1 transition-transform duration-300" />
        </a>
       
      </div>
    </motion.nav>
  );
}

export default Navbar;
