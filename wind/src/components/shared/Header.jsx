import React, { Fragment } from 'react'
import { FiSearch, FiBell } from 'react-icons/fi'
import { BiMessageDots } from "react-icons/bi";
import { Menu, Popover, Transition } from '@headlessui/react'
import classNames from 'classnames';

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
        <div className='flex items-center gap-2 mr-2'>
          <Popover className="relative">
            {({ open }) => (
              <>
                  <Popover.Button
                    className={classNames(
                      open && 'bg-gray-100',
                      "p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100")}>
                      <BiMessageDots fontSize={24} />
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                          <div className='bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5'>
                            <strong className='text-gray-700 font-medium'>Messages</strong>
                            <div className='nt-2 py-1 text-sm'>This is massages panel.</div>
                          </div>
                        </Popover.Panel>
                      </Transition>
              </>
            )}
          </Popover>
          <Popover className="relative">
            {({ open }) => (
              <>
                  <Popover.Button
                    className={classNames(
                      open && 'bg-gray-100',
                      "p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100")}>
                      <FiBell fontSize={24} />
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                          <div className='bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5'>
                            <strong className='text-gray-700 font-medium'>Notification</strong>
                            <div className='nt-2 py-1 text-sm'>This is notifications panel.</div>
                          </div>
                        </Popover.Panel>
                      </Transition>
              </>
            )}
          </Popover>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <div>
                  <span>Jan Doe</span>
                </div>
              </Menu.Button>
            </div>
          </Menu>
        </div>
    </div>
  )
}
