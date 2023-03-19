import React from "react"

import HeroImage from './../Assets/Images/hero.png';

// scroll to section
import { Link } from 'react-scroll'

export default function HeroSection() {
    return (
        <div className="flex flex-col lg:flex-row" >

            {/* left hero text */}
            <div className="w-full text-center select-none
            lg:text-left lg:w-1/2 text-white flex flex-col justify-center">

                <p className="hero_text font-sans
                    
                    font-bold text-transparent  bg-clip-text 

                    bg-gradient-to-r from-orange-400 to-rose-400
                    uppercase

                    text-6xl lg:text-7xl
                    lg:normal-case
                    lg:drop-shadow-none
                    lg:bg-gradient-to-br lg:from-pink-500 lg:to-yellow-500">

                    <span className="font-extrabold">Five minutes</span> of your time for a valuable prize!
                </p>

                {/* Button */}
                <div className="mt-20 lg:mt-14">
                    <button className="text-white text-2xl font-bold py-2 px-7 rounded-full hover:drop-shadow relative
                    bg-gradient-to-br from-pink-500 to-yellow-500
                    hover:from-pink-500/90 hover:to-yellow-500/90">


                        <Link to="activeOffers" spy = {true}>

                            {/* Button with ping element */}
                            <span className="flex gap-3 items-center">
                                <span className="relative flex h-5 w-5">
                                    <span className="animate-ping absolute h-full w-full rounded-full bg-sky-100"></span>
                                    <span className="mx-auto my-auto rounded-full h-3 w-3 bg-white"></span>
                                </span>
                                Watch Active Offers
                            </span>

                        </Link>
                    </button>
                </div>
            </div>

            {/* right hero image */}
            <div className="w-full mt-28

                lg:mt-0 lg:w-1/2 lg:flex drop-shadow-lg select-none">

                    <img src= {HeroImage} alt="" loading="lazy" />

            </div>
        </div>
    );
}