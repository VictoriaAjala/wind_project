import React from 'react'
import Layout from './shared/Layout'
import { Link } from 'react-router-dom'
import DashboardStatsGrid from './DashboardStatsGrid'

export default function Dashboard() {
  return (
      <div className='flex gap-4'>
        <DashboardStatsGrid />
      </div>
  )
}