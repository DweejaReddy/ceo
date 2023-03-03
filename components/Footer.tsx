import React from "react";
import ecell from "../public/assets/ecell-white-img.png";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { HiUser } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-20 text-gray-300" id="footer">
      <div>
        <Link href="https://www.ecellvnit.org/" target='_blank'>
          <Image className="w-[140px]" src={ecell} alt="" /></Link>
        <p className="py-4">
          Ecell VNIT is central India&apos;s largest non profit student run organization promoting entrepreneurship skills among students and building a startup ecosystem.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <Link href="https://m.facebook.com/vnitecell/" target='_blank' ><FaFacebookSquare size={28} /></Link>
          <Link href="https://www.instagram.com/ecellvnit/" target='_blank' ><FaInstagram size={28} /></Link>
          <Link href="https://www.youtube.com/channel/UC0KNOmODhqLcEpcfN9qEsIQ" target='_blank' ><FaYoutube size={28} /></Link>
          <Link href="https://www.linkedin.com/company/theentrepreneurshipcellvnit/mycompany/" target='_blank' ><FaLinkedin size={28} /></Link>
        </div>
      </div>
      <div className="">
        <div className="">
          <h2 className="text-xl font-bold py-4">
            IN CASE OF ANY QUERY CONTACT
          </h2>
          <div className="flex py-2 ">
            <HiUser size={28} />
            <span className="px-4 font-bold ">Deep Swarup & Aditya Khanna</span>
          </div>
          <div className="flex py-2 ">
            <BsTelephone size={28} />
            <span className="px-4 font-bold ">+91 6200728362, +91 9174885947</span>
          </div>
          <div className="flex py-2">
            <FiMail size={28} />
            <Link href="mailto:contact@ecellvnit.org" className="px-4 font-bold ">contact@ecellvnit.org</Link>
          </div>
        </div>
      </div>

      <div className="py-3">
        <p className="py-2">For Association Opportunities Contact:</p>
        <Link href="mailto:contact@ecellvnit.org" className="py-1 font-bold">contact@ecellvnit.org</Link>
        <p className="py-2">For Sponsorship Opportunities Contact:</p>
        <Link href="mailto:corporate@ecellvnit.org" className="py-1 font-bold">corporate@ecellvnit.org</Link>
        <p className="py-8">&copy;&nbsp;<Link href="https://www.ecellvnit.org/" target='_blank' className="text-[#ff5757]">Ecell VNIT</Link> All rights reserved.</p>

      </div>
    </div>
  );
};

export default Footer;