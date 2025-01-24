import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import DashboardStatsGrid from '../DashboardStatsGrid'

export default function Layout() {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
        <Sidebar />
        <div className='flex-1'>
            <Header />
            <div className='p-4'>{<Outlet />}</div>
            <div className='p-6'>
            <DashboardStatsGrid />
            </div>
        </div>
    </div>
  )
}
