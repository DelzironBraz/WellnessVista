import { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
        console.info(menu);
    }

    return (
        <header className="fixed w-full z-10 text-white">
            <div>
                <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                    <div className="flex flex-row items-center cursor-pointer">
                        <Link to="home" spy={true} smooth={true} duration={500}>
                            <h1 className="text-2xl font-semibold">WellnessVista</h1>
                        </Link>
                    </div>

                    <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
                        <Link to="home" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">Home</Link>
                        <Link to="about" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">About us</Link>
                        <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">Services</Link>
                        <Link to="doctors" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">Doctors</Link>
                        <Link to="blog" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">Blog</Link>
                    </nav>

                    <div className="hidden lg:flex">
                        <button className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-500 ease-in-out">
                            Contact Us
                        </button>
                    </div>

                    <div className="lg:hidden flex items-center">
                        {menu ? (
                            <AiOutlineClose size={28} onClick={handleChange} />
                        ) : (
                            <AiOutlineMenu size={28} onClick={handleChange} />
                        )}
                    </div>
                </div>

                <nav className={`${menu ? "translate-x-0" : "translate-x-full hidden"} lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl w-full text-center pt-8 pb-4 gap-8 h-fit transition-transform duration-300`}>
                    <Link to="home" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">Home</Link>
                    <Link to="about" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">About us</Link>
                    <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">Services</Link>
                    <Link to="doctors" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">Doctors</Link>
                    <Link to="blog" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">Blog</Link>
                    <div className="lg:hidden">
                        <button className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-500 ease-in-out">
                            Contact Us
                        </button>
                    </div>
                </nav>

            </div>
        </header>
    );
}

export default Navbar;