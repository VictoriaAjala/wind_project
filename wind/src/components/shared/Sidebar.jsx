import React from 'react'
import Logo from '../assets/Neon Logo.png'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { Dashboard_sidebar_bottom_links, Dashboard_sidebar_links } from '../../lib/navigation'

const linkClasses = 'flex items-center gap-2 px-8 py-4 hover:bg-blue-700 hover:no-underline active:bg-blue-700 rounded-lg text-lg'

export default function Sidebar() {
  return (
    <div className='bg-blue-950 flex flex-col h-screen w-60 p-3 text-white'>
      <div className='flex items-center gap-2 px-1 py-4'>
        <img src={Logo} alt='Neon Logo' className='w-[80px] align-center' />
        <span className='text-[25px] font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>Neon Pad</span>
      </div>
      <div className='flex-1 flex flex-col gap-0.5'>
        {Dashboard_sidebar_links.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className='flex flex-col py-8'>
        {Dashboard_sidebar_bottom_links.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
    </div>
  )
}

function SidebarLink({ item }) {
  const { pathname } = useLocation()

  return (
    <Link to={item.path} className={classNames(pathname === item.path ? 'bg-blue-800 text-white' : 'text-white', linkClasses)}>
      <span className='text-base'>{item.icon}</span>
      <span className='text-white'>{item.label}</span>
    </Link>
  )
}
