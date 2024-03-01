'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react';
import {AiFillBug } from 'react-icons/ai'
import classNames from 'classnames';
 
const NavBar = () => {
  const currrentpath =usePathname();
  const links=[
    {lable:'Dashboard', href:'/'},
    {lable:'Issues', href:'/issues'}
  ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center container '>
      <Link href="/" className=''>
        <AiFillBug/>
      </Link>
      <ul className='flex  space-x-6'>
        {
          links.map(links=>
          <Link key={links.href}
          href={links.href}
          className={classNames({
            ' dark:text-gray-500':currrentpath!==links.href,
            ' text-gray-900':currrentpath===links.href,
            'hover:text-zinc-800 transition-colors':true
          })}>
            {links.lable}
          </Link>)
        }
      </ul>
    </nav>
  )
}

export default NavBar
