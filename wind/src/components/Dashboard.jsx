import React from 'react'
import Layout from './shared/Layout'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
      <p>this is dashboard</p>
      <Link to="products" className='underline'>
        products
      </Link>
    </div>
  )
}