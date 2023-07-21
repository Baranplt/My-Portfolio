import React from 'react'
import me from '../img/me.jpg'
import { NavLink } from 'react-router-dom'
function Header() {
    return (
        <div className='pt-5 lg:flex justify-between items-center'>
            <div className="user lg:w-4/12 flex justify-center lg:justify-start items-center mb-10 lg:mb-0">
                <div className="img w-28 h-28 rounded-full mr-5  p-1 border-text-color border-2">
                    <img className='w-full h-full max-w-full max-h-full rounded-full' src={me} alt="" />
                </div>
                <div className="name font-bold text-3xl text-text-color">
                    Baran
                    Polat
                </div>
            </div>
            <div className="bar w-4/12 text-xl text-text-color">
                <ul className='flex ml-10 lg:ml-0'>
                    <li className='mx-5 hover:text-slate-900'>
                        <NavLink to="/">
                            Hakkımda
                        </NavLink>
                    </li>
                    <li className='mx-5 hover:text-slate-900'>
                        <NavLink to={'/projects'} href="#">
                            Projelerim
                        </NavLink>
                    </li>
                    <li className='mx-5 hover:text-slate-900'>
                        <NavLink to={'/resume'} href="#">
                            Becerilerim
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header