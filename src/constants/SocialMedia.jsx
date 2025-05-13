import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const SocialMedia = () => {
  return (
    <div className='flex gap-3 '>
      <FaFacebook className='text-4xl hover:scale-125 text-red-500' />
      <FaSquareXTwitter className='text-4xl hover:scale-125 text-red-500 ' />
      <FaYoutube className='text-4xl hover:scale-125 text-red-500' />
      <AiFillInstagram className='text-4xl hover:scale-125 text-red-500 ' />
      <FaTelegram className='text-4xl hover:scale-125 text-red-500 ' />
      <IoLogoWhatsapp className='text-4xl hover:scale-125 text-red-500 ' />

    </div>
  )
}

export default SocialMedia
