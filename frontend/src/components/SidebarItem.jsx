import React, { useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const activeLink = ({isActive}) => (isActive ? "active" : "link")
const activeSublink = ({isActive}) => (isActive ? "active" : "link")


const SidebarItem = ({ item, isOpen }) => {
    const [expandMenu, setExpandMenu] = useState(false)
    if (item.childrens) {
        return (<div className={expandMenu ?
        "sidebar-item s-parent open" : 
        "sidebar-item s-parent"}>

            <div className='sidebar-title py-2 text-xl'>
                <span className='text-white flex items-center cursor-pointer' onClick={() => setExpandMenu(!expandMenu)}>
                    {item.icon && <div className='icon'>{item.icon}</div>}
                    {isOpen && <div>{item.title}</div>}
                <MdKeyboardArrowRight size={25} className="arrow-icon"  />

                </span>

            </div>

            <div className={`${expandMenu ? 'transition delay-300' : 'hidden'} bg-gray-700 rounded px-3`}>
                {item.childrens.map((child, index) => {
                    return (
                        <div key={index} className='s-child'>
                            <NavLink to={child.path} className={activeSublink}>
                                <div className='sidebaritem py-2 text-xl text-gray-400 hover:text-gray-300 '>
                                    <div className='sidebar-title'>
                                        <span>
                                            {child.icon && <div className='icon'>{child.icon}</div>}
                                            {isOpen && <div>{child.title}</div>}
                                        </span>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    )
                })}
            </div>
        </div>)
    }
    else {
        return (
            <NavLink to={item.path} className={activeLink}>
                <div className='sidebar-item py-2 text-xl text-gray-400 hover:text-red-300'>
                    <div className='sidebar-title'>
                        <span>
                            {item.icon && <div className='icon'>{item.icon}</div>}
                            {isOpen && <div>{item.title}</div>}
                        </span>
                    </div>
                </div>
            </NavLink>
        )
    }
  
}

export default SidebarItem
