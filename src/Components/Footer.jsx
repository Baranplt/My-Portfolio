import React from 'react'
import { BsTwitter, BsGithub } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { MdBento } from 'react-icons/md'
import { BiLogoInstagramAlt } from 'react-icons/bi'
function Footer() {
    return (
        <div className='flex flex-col  lg:flex-row text-xl   lg:mt-[13px] lg:pb-2 mb-10 lg:justify-between lg:items-start items-center'>
            <div className="social flex text-text-color  mb-10 ">
                <a href="https://twitter.com/llMahfuz" rel="noopener" target='_blank' className="twitter mr-5 hover:text-slate-900 transition-all duration-500 cursor-pointer">
                    <BsTwitter size={30} />
                </a>
                <a href="https://www.instagram.com/baran_.polat/" rel="noopener" target='_blank' className="instagram mr-5 hover:text-slate-900 transition-all duration-500 cursor-pointer">
                    <BiLogoInstagramAlt size={30} />
                </a>
                <a href="https://www.linkedin.com/in/baran-polat-17806420b/" rel="noopener" target='_blank' className="link mr-5 hover:text-slate-900 transition-all duration-500 cursor-pointer">
                    <AiFillLinkedin size={30} />
                </a>
                <a href="https://github.com/Baranplt" target='_blank' rel="noopener" className="Git mr-5 hover:text-slate-900 transition-all duration-500 cursor-pointer">
                    <BsGithub size={30} />
                </a>
                <a href="https://bento.me/baran-polat" target='_blank' rel="noopener" className="twitter mr-5 hover:text-slate-900 transition-all duration-500 cursor-pointer">
                    <MdBento size={30} />
                </a>

            </div>
            <div className="mail text-text-color hover:text-slate-900 transition-all duration-500 mb-10">
                <a href="mailto:baranpolat@hotmail.com.tr" rel="noopener">baranpolat@hotmail.com.tr</a>
            </div>
        </div>
    )
}

export default Footer