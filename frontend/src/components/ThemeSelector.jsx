import React from 'react'
import {PaletteIcon} from "lucide-react"
import {THEMES} from "../constants/index.js";
import { useThemeStore } from '../store/useThemeStore.js'

const ThemeSelector = () => {
 const {theme,setTheme}=useThemeStore();
 console.log(theme);
  return (
    <div className='dropdown dropdown-end'>
        {/* DROPDOWN TRIGER */}

        <button tabIndex={0} className='btn btn-ghost btn-circle'>
            <PaletteIcon className='size-5'/>

            </button>

            <div tabIndex={0}
            className='dropdown-content mt-2 p-1 shadow-2xl bg-base-200 backdrop-blur-lg
             rounded-2xl w-56 border border-base-content/10'
             
            >
                {THEMES.map((themeOption)=>(
                    <button key={themeOption.name} className={`
                    w-full px-1 py-2 rounded-xl flex gap-3 transition-colors ${theme=== themeOption.name ? "bg-primary/10 text-primary":"hover-bg-base-content/5"}

                    `}

                    onClick={()=>setTheme(themeOption.name)}
                    >

                        <PaletteIcon className='size-5'/>
                        <span className='text-sm font-sm'>{themeOption.label}</span>

                        {/*THEME PREVIEW COLORS*/}

                        <div className='ml-auto flex gap-1'>
                            {themeOption.colors.map((color ,i)=>(
                                <div key={i} className='size-4 rounded-2xl' style={{backgroundColor:color}}></div>
                            ))}
                        </div>

                    </button>
                ))}
            </div>
    </div>
  );
}

export default ThemeSelector