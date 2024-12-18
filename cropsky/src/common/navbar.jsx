import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="flex flex-wrap items-center justify-between px-6 md:px-14 bg-black shadow-md font-semibold">
                {/* Logo Section */}
                <NavLink to={"/"}>
                    <img src={assets.full_logo_withoutbg} alt="Logo" className="relative md:left-0 left-[45vw] h-12 md:h-16 scale-150 mx-auto" />
                </NavLink>

                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <img src={assets.menu} alt="Menu" className="absolute top-3 left-3 h-6 w-6 " />
                    </button>
                </div>

                {/* Navigation Links for Desktop */}
                <div className="hidden md:flex space-x-6 md:space-x-8 text-white font-bold text-base ">
                    <NavLink to="/" className={({ isActive }) =>
                        isActive ? "text-[#5DB996] border-b-2 border-[#5DB996]" : "hover:text-[#5DB996]"
                    }
                    >
                        Home
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) =>
                        isActive ? "text-[#5DB996] border-b-2 border-[#5DB996]" : "hover:text-[#5DB996]"
                    }
                    >
                        About Us
                    </NavLink>
                    <NavLink to="/team" className={({ isActive }) =>
                        isActive ? "text-[#5DB996] border-b-2 border-[#5DB996]" : "hover:text-[#5DB996]"
                    }
                    >
                        Team
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) =>
                        isActive ? "text-[#5DB996] border-b-2 border-[#5DB996]" : "hover:text-[#5DB996]"
                    }
                    >
                        Contact Us
                    </NavLink>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="absolute top-0 left-0 w-full shadow-md z-50 md:hidden">
                        <div className="bg-black flex justify-center">
                            <NavLink to={"/"} onClick={() => setIsMenuOpen(false)}>
                                <img src={assets.full_logo_withoutbg} alt="Logo" className="h-16 scale-150 md:h-16" />
                            </NavLink>
                        </div>
                        <div className="bg-black flex flex-col px-2 space-y-2">
                            <div className=" active:text-[#5DB996] flex items-center mb-2" onClick={() => setIsMenuOpen(false)}>
                                <img className="h-4 rotate-180 mr-2" src={assets.back} alt="Back" />
                                <p className="text-[#5DB996] cursor-pointer hover:underline">Back</p>
                            </div>
                            <NavLink to="/about" className="text-white hover:text-[#5DB996] py-2" onClick={() => setIsMenuOpen(false)}>
                                Home
                            </NavLink>
                            <NavLink to="/about" className="text-white hover:text-[#5DB996] py-2" onClick={() => setIsMenuOpen(false)}>
                                About Us
                            </NavLink>
                            <NavLink to="/contact" className="text-white hover:text-[#5DB996] py-2" onClick={() => setIsMenuOpen(false)}>
                                Team
                            </NavLink>
                            <NavLink to="/contact" className="text-white hover:text-[#5DB996] py-2" onClick={() => setIsMenuOpen(false)}>
                                Contact Us
                            </NavLink>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;
