import React, { useState } from 'react'
import Bshopper from '../img/BshopperPNG.PNG'
import camio from '../img/camio.PNG'
import task from '../img/task.PNG'
import pos from '../img/pos.PNG'
import gallery from '../img/gallery.PNG'
function Projects() {

    return (
        <div className='lg:pb-20 w-full h-screen'>
            <div className=' mt-14 '>
                <h1 class="text-6xl flex md:mx-[150px] mx-4 leading-[75px] font-semibold text-text-color">Projelerim.</h1>

            </div>
            <div className='flex overflow-x-auto  py-10 '>
                <div className="item group border  cursor-pointer mx-4">
                    <div className={` w-96 group-hover:hidden`}>
                        <img className='w-full h-full max-w-full max-h-full' src={Bshopper} alt="" />
                    </div>

                    <div className={`h-[188px] w-96 transition-all hidden  group-hover:flex flex-col justify-center items-center `}>
                        <p className='text-text-color text-center text-3xl md:text-xl '>
                            React.js ve TailwindCSS kullanarak geliştirdiğim B-Shopper sitesi
                        </p>
                        <a href='https://github.com/Baranplt/React-Shoping-Project-Responsive' target='_blank' className=' border text-white py-2 px-4 mt-5'>Projeye git</a >
                    </div>

                </div>
                <div className="item group border  cursor-pointer mx-4">
                    <div className={` w-96 group-hover:hidden`}>
                        <img className='w-full h-full max-w-full max-h-full' src={camio} alt="" />
                    </div>

                    <div className={`h-[188px] w-96 transition-all hidden  group-hover:flex flex-col justify-center items-center `}>
                        <p className='text-text-color text-center text-3xl md:text-xl '>
                            React.js ve TailwindCSS kullanarak geliştirdiğim Camio  sitesi
                        </p>
                        <a href='https://github.com/Baranplt/react-shopping-project' target='_blank' className=' border text-white py-2 px-4 mt-5'>Projeye git</a >
                    </div>

                </div>
                <div className="item group border  cursor-pointer mx-4">
                    <div className={` w-96 group-hover:hidden`}>
                        <img className='w-full h-full max-w-full max-h-full' src={task} alt="" />
                    </div>

                    <div className={`h-[188px] w-96 transition-all hidden  group-hover:flex flex-col justify-center items-center `}>
                        <p className='text-text-color text-center text-3xl md:text-xl '>
                            React.js ve TailwindCSS kullanarak geliştirdiğim Tasks uygulaması
                        </p>
                        <a href='https://github.com/Baranplt/React-Example---Task-crud-app' target='_blank' className=' border text-white py-2 px-4 mt-5'>Projeye git</a >
                    </div>

                </div>
                <div className="item group border  cursor-pointer mx-4">
                    <div className={` w-96 group-hover:hidden`}>
                        <img className='w-full h-full max-w-full max-h-full' src={pos} alt="" />
                    </div>

                    <div className={`h-[188px] w-96 transition-all hidden  group-hover:flex flex-col justify-center items-center `}>
                        <p className='text-text-color text-center text-3xl md:text-xl '>
                            React.js ve TailwindCSS kullanarak geliştirdiğim Barkod uygulaması
                        </p>
                        <a href='https://github.com/Baranplt/supermarket-barcod-system' target='_blank' className=' border text-white py-2 px-4 mt-5'>Projeye git</a >
                    </div>

                </div>
                <div className="item group border  cursor-pointer mx-4">
                    <div className={` w-96 group-hover:hidden`}>
                        <img className='w-full h-full max-w-full max-h-full' src={gallery} alt="" />
                    </div>

                    <div className={`h-[188px] w-96 transition-all hidden  group-hover:flex flex-col justify-center items-center `}>
                        <p className='text-text-color text-center text-3xl md:text-xl '>
                            React.js ve TailwindCSS kullanarak geliştirdiğim Galeri uygulaması
                        </p>
                        <a href='https://github.com/Baranplt/React-Api-Example---Gallery-app' target='_blank' className=' border text-white py-2 px-4 mt-5'>Projeye git</a >
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects