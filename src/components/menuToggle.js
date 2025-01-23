"use client"; // Ensure client-side rendering for this component

import { useState } from "react";
import {  DisclosureButton } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const MenuToggle = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <DisclosureButton onClick={() => setMenuOpen(!menuOpen)} className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
        <span className="absolute -inset-0.5" />
        <span className="sr-only">Open main menu</span>       
        {
            menuOpen ? <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" /> : <XMarkIcon aria-hidden="true" className="block size-6 group-data-open:hidden" />
        }   
    </DisclosureButton>   
  );
};

export default MenuToggle;
