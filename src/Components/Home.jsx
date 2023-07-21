import React from 'react'
import png from '../img/pngwing.com (1).png'
function Home() {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-between   mt-20 lg:mt-0 '>
            <div className='lg:w-4/12  text-center'>
                <span className='text-4xl    font-semibold text-text-color'>
                    Merhaba, ben Baran
                </span>
                <p className='text-2xl leading-[52px] font-[400] mt-[16px] text-text-color'>
                    Jr.Frontend Developer'ım ve ReactJS ile projeler geliştiriyorum.
                </p>
            </div>
            <div className=' w-9/12 lg:w-4/12'>
                <img src={png} alt="" />

            </div>
        </div>
    )
}

export default Home