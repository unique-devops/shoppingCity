import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {  BellIcon, MagnifyingGlassIcon, ShoppingCartIcon  } from '@heroicons/react/24/outline'
import MenuToggle from './menuToggle';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {    
  return classes.filter(Boolean).join(' ')
}

export default function Header() {    
  return (
    <Disclosure as="nav" className="bg-white-800">
      <div className="mx-auto max-w-12xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex bg-white-200 px-2 items-center justify-center sm:items-stretch sm:justify-start">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
           
          </div>   
          {/* search */}              
          <div className="flex w-1/2  items-center rounded-md border bg-white  outline-2 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                  {/* <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">$</div> */}
                  <MagnifyingGlassIcon className="h-6 w-8  text-gray-500" />
                  
                  <input
                      id="price"
                      name="price"
                      type="text"
                      placeholder="Search"
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />                   
          </div>
          <div className="flex px-2 flex items-center">
            {/* cart */}
            <button
              type="button"
              className="relative rounded-full p-1 text-gray-700 hover:text-blue-600 focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-blue-600 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <ShoppingCartIcon aria-hidden="true" className="size-6" />
            </button>
            {/* menu toggle */}
            <div className="inset-y-0 left-0 flex items-center md:hidden">           
              <MenuToggle/>
            </div> 
            {/* Profile dropdown */}
            <Menu as="div" className="hidden md:block relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>       
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
