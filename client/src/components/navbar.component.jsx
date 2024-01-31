import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../imgs/logo.png";

const Navbar = () => {
    const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);

    return (
        <>
            <nav className="navbar">
                <Link to="/" className="flex-none w-10">
                    <img src={logo} className="w-full" alt="Logo" />
                </Link>

                <div className={`absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto ${searchBoxVisibility ? "block" : "hidden"}`}>
                    <input
                        type="text"
                        placeholder="Search Topics..."
                        className="w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-dark-grey md:pl-12"
                    />

                    <i className="fi fi-rr-search absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-black"></i>
                </div>

                <div className="flex items-center gap-3 md:gap-6 ml-auto">
                    <button
                        className="md:hidden bg-black w-12 h-12 rounded-full flex items-center justify-center"
                        onClick={() => setSearchBoxVisibility((currentVal) => !currentVal)}
                    >
                        <i className="fi fi-rr-search text-2xl text-white"></i>
                    </button>

                    <Link to="/editor" className="hidden md:flex gap-2 link">
                        <i className="fi fi-ss-edit"></i>
                        <p>write</p>
                    </Link>

                    <Link className="btn-dark py-2" to="/signin">
                        Sign In
                    </Link>
                    <Link className="bg-black rounded-md whitespace-nowrap text-white px-6 py-2 text-xl capitalize hover:bg-opacity-80 md:flex items-center" to="/premium">
                        Unlock Premium
                        <i className="fi fi-rs-diamond ml-2"></i>
                    </Link>
                </div>
            </nav>

            <Outlet />
        </>
    );
};

export default Navbar;
