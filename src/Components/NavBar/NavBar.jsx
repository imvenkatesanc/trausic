/*import React from 'react'

const NavBar = () => {
  return (
    <div className='navBar flex justify-between items-center p-[3rem]'>
        <div className="logoDiv">
            <h1 className="logo text-[25px] text-blueColor">
                <strong>Trausic </strong>Jobs</h1>
        </div>
        <div className="menu flex gap-8">
        <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Jobs</li>
        <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Companies</li>
        <li className='menuList text-[#6f6f6f] hover:text-blueColor'>About</li>
        <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Contact</li>
        <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Blog</li>
        <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Login</li>
        <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Register</li>
        </div>
    </div>
  )
}

export default NavBar


*/
import React, { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.css'


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='navBar flex justify-between items-center p-[3rem]'>
        <div className="logoDiv">
            <h1 className="logo text-[25px] text-blueColor">
                <strong>Trausic </strong>Jobs</h1>
        </div>
        <div className="menuIcon flex items-center" onClick={() => setIsOpen(!isOpen)}>
            <i className={`fas fa-bars text-blueColor cursor-pointer ${isOpen ? 'open' : ''}`} />
        </div>
            <ul className={`menu flex gap-8 ${isOpen ? '' : 'hidden'}`}>
                <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Jobs</li>
                <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Companies</li>
                <li className='menuList text-[#6f6f6f] hover:text-blueColor'>About</li>
                <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Contact</li>
                <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Blog</li>
                <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Login</li>
                <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Register</li>
            </ul>
    </div>
  )
}

export default NavBar