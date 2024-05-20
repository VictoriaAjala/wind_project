import React from 'react'
import {IoBagHandle} from 'react-icons/io5'

export default function DashboardStatsGrid() {
  return (
    <div className="flx gap-4 w-full">
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-500 font-light'>Total Sales</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold'>$34532.80</strong>
            <span>+324</span>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
      <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-500 font-light'>Total Sales</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold'>$34532.80</strong>
            <span>+324</span>
          </div>
        </div>
      </BoxWrapper>
      
      <BoxWrapper>
      <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-500 font-light'>Total Sales</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold'>$34532.80</strong>
            <span>+324</span>
          </div>
        </div>
      </BoxWrapper>
      
      <BoxWrapper>
      <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-500 font-light'>Total Sales</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold'>$34532.80</strong>
            <span>+324</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  )
}

function BoxWrapper({ children }) {
  return <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 fx items-center'>{children}</div>
}
