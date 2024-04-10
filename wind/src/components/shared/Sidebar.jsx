import React from 'react'
import Logo from './Neon Logo.png'
import { Link, useLocation } from 'react-router-dom'
import { Dashboard_sidebar_bottom_links, Dashboard_sidebar_links } from './navigation'

export default function Sidebar() {
  return (
    <div className='bg-blue-900 flex flex-col h-screen w-60 p-3 text-white'>
      <div className='flex items-center gap-2 px-1 py-4'>
        <img src={Logo} alt='Neon Logo' className='w-[80px] align-center' />
        <span className='text-lg font-bold'>Neon</span>
      </div>
      <div className='flex-1 flex flex-col gap-0.5'>
      </div>
    </div>
  )
}
