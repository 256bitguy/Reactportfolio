import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
    AlignJustify,
  } from "lucide-react/dist/umd/lucide-react";
  import { Link } from 'react-router-dom';

export default function Options() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <AlignJustify size={65}/>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
        <MenuItem>
            <Link
              to='/'
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Home 
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to='/projects'
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Projects 
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
            to="/contact"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Contact
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
             to='/about'
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              About
            </Link>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
