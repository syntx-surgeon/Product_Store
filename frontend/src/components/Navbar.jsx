import React,{useState,useEffect} from 'react'
import { Link, useResolvedPath} from 'react-router-dom'
import {ShoppingCartIcon,ShoppingBagIcon} from 'lucide-react'
import ThemeSelector from "../components/ThemeSelector.jsx"


const Navbar = () => {
  const {pathname}=useResolvedPath();
  const isHomePage=pathname==="/";


  return <div className='bg-base-100/80 backdrop-blur-lg border-b border-base-conten/10 sticky top-0 z-50'>
      
      <div className='max-w-7xl mx-auto'>
        <div className='flex navbar px-4 min-h-[4rem] justify-between'>
          {/*LOGO*/}

          <div className='flex-1 lg:flex-none'>
            <Link to="/" className='hover:opacity-80 transition-opacity'>
            <div className='flex items-center gap-2'>
              <ShoppingCartIcon className='size-9 text-primary'/>
              <span className='font-semibold font-mono tracking-widest text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'
              >
                ProductStore
              </span>
            </div>
            </Link>
          </div>

          {/* RIGHT SECTION */}

          <div className='flex items-center gap-4'>
            <ThemeSelector/>

            {isHomePage && (
              <div className='indicator'>
                <div className='p-2 rounded-2xl hover:bg-base-200 transition-colors'>
                  <ShoppingBagIcon className='size-5'/>
                  <span className='badge badge-sm badge-primary indicator-item'>0</span>
                </div>
              </div>
            )}

           </div>


        </div>
      </div>
    </div>;
}

export default Navbar;