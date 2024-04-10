import React from 'react'
import { FiSearch } from 'react-icons/fi'

export default function Header() {
  return (
    <div className='bg-white h-16 px-4 flex justify-between items-center'>
        <div className='relative p-4'>
            <input
            type='text'
            placeholder='Search for anything here'
            className='text-base focus:outline-none active:outline-none h-10 w-[26rem] border-[1.5px] border-gray-400 pl-4 pr-11 shadow-sm rounded-lg' />
            <FiSearch fontSize={25} className='text-gray-400 absolute top-1/2 -translate-y-1/2 right-8' />
        </div>
    </div>
  )
}
