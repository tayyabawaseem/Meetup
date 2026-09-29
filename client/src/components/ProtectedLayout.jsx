import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const ProtectedLayout = () => {
  return (
    <div className="h-screen overflow-y-scroll bg-slate-59 text-slate-900 dark:bg-slate-900 flex flex-col font-sans bg-[url('/layout_bg.png')] bg-cover bg-no-repeat bg-center">


        <Navbar />
        <Outlet />
        <Footer />
    </div>

  )
}

export default ProtectedLayout