import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import SmallIcon from "./SmallIcon";
import { motion } from "framer-motion";

function Contact() {
  return (
    <>
      {/* Icons */}

      <div className="flex space-x-4 gap-4  text-2xl w-full items-center justify-center py-4">
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
    </>
  );
}

export default Contact;
