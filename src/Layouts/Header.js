import React, { useState, useRef, useCallback, useEffect } from "react";
import './../Assets/CSS/App.css';

// Mobile menu:
import { HiOutlineMenuAlt2 } from 'react-icons/hi';

// scroll to section
import { Link } from 'react-scroll'

export default function Header() {

    // Close menu when user click outside of menu
    const useAutoClose = ({ setOpenMenu, menu }) => {

        const handleClosure = useCallback(
            event => !menu.current.contains(event.target) && setOpenMenu(false),
            [setOpenMenu, menu]
        )

        useEffect(() => {
            window.addEventListener('click', handleClosure)
            window.addEventListener('focusin', handleClosure)

            return () => {
                window.removeEventListener('click', handleClosure)
                window.removeEventListener('focusin', handleClosure)
            }
        }, [handleClosure, menu])
    }

    
	// Mobile menu
	const [openMenu, setOpenMenu] = useState(false);
    const menu = useRef();

    useAutoClose({ setOpenMenu, menu })

    return (
        <div className="w-full">
            {/* header navbar */}
            <div className="flex justify-between items-center md:mt-4 px-5 h-24 text-xl uppercase text-white/90">

                {/* Logo */}
                <div className='font-extrabold leading-none text-base text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-yellow-500'>
                    <p>WIN<br/>Boosters</p>
                </div>

                {/* Buttons */}
                <div className='justify-self-center text-base text-center hidden md:flex gap-5 font-bold'>
                    
                    <button>
                        <Link className = "uppercase" to="aboutSection" spy = {true}>How it works</Link>
                    </button>

                    <button>
                        <Link className = "uppercase" to="activeOffers" spy={true}>Active Giveaways</Link>
                    </button>
                </div>

                {/* Lateral menu opener */}
                <div className="flex md:hidden">
                    
                    <button onClick = {event => {
                        event.stopPropagation()
                        setOpenMenu(openMenu => !openMenu)
                      }}
                    >
                        <HiOutlineMenuAlt2 />
                    </button>
                </div>

            </div>

            {/* Mobile menu show */}
            <div ref = {menu} id = "nav_panel" className={`${openMenu ? "right-0" : "-right-[33rem]"} block md:hidden absolute z-10 top-32 w-2/3 h-full bg-slate-700/40 backdrop-blur-lg text-white`}>

                <div className="text-xl flex flex-col gap-1 mt-5 uppercase font-semibold">
                    <Link to="aboutSection" spy = {true} className="px-10 py-3 bg-slate-900/30">
                        How it works
                    </Link>
                    <Link to="activeOffers" spy={true} className="px-10 py-3 bg-slate-900/30">
                        Active Giveaways
                    </Link>
                </div>
            </div>
        </div>
    );
}