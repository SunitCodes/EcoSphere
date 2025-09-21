import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = ({activeMenu}) => {
  return (
    <div>
      {/* Navbar */}
      <Navbar/>
        <div className="flex">
            <div className='max-[1080px]:hidden'>
                {/* Sidemenu */}
                <Sidebar activeMenu={activeMenu}/>
            </div>
            <div className="grow mx-5">
                    {/* {children} */}
                    <Outlet />
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout