import React, { useState } from 'react'
import { HiMenuAlt3 } from "react-icons/hi"
import { RiProductHuntLine } from 'react-icons/ri'
import menu from "../data/sidebarUser"
import { useNavigate } from "react-router-dom"
import SidebarItem from './SidebarItem'

const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(true)
    const toggle = () => setIsOpen(!isOpen)
    const navigate = useNavigate()

    const goHome = () => {
        navigate("/")
    }
  return (
    <div>
      <div className='sidebar bg-gray-800 p-5' style={{width: isOpen ? "230px" : "60px"}}>
        <div className='top_section flex flex-row pb-10'>
            <div className='logo' style={{display: isOpen ? "block" : "none"}}>
                <p className='text-red-500 text-2xl' style={{cursor:"pointer"}} onClick={goHome}>Ndure</p>
            </div>
            <div className='bars text-red-500 cursor-pointer text-2xl' style={{marginLeft: isOpen ? "100px" : "0px"}}>
                <HiMenuAlt3 onClick={toggle} />
            </div>
        </div>
        {menu.map((item, index) => {
            return <SidebarItem key={index} item={item} isOpen={isOpen} />
        })}
      </div>
      <main style={{paddingLeft: isOpen ? "230px" : "60px", transition: "all .5s",}}>
        {children}
      </main>
    </div>
  )
}

export default Sidebar
