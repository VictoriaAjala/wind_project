import React, { Fragment } from 'react'
import { FiSearch, FiBell } from 'react-icons/fi'
import { BiMessageDots } from "react-icons/bi";
import { Menu, Popover, Transition } from '@headlessui/react'
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import Sidebar from './shared/Sidebar';
import Layout from './shared/Layout';

export default function Banner() {
  const navigate = useNavigate()

  return (
          <div className="">
          <Layout />
        </div>
  )
}