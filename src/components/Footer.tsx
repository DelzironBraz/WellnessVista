import { Link } from "react-scroll";

const Footer = () => {
    return (
        <footer className="bg-backgroundColor text-white rounded-lg rounded-t-3xl mt-8 md:mt-0">
            <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
                <div className="w-full md:w-1/4">
                    <h1 className="font-semibold text-xl pb-4">WellnessVista.</h1>
                    <p className="text-sm text-justify">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a
                        type specimen book.
                    </p>
                </div>
                <div>
                    <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">About Us</h1>
                    <nav className="flex flex-col gap-2">
                        <Link to="home" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">Home</Link>
                        <Link to="about" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">About us</Link>
                        <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">Services</Link>
                        <Link to="doctors" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">Doctors</Link>
                        <Link to="blog" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">Blog</Link>
                    </nav>
                </div>

                <div>
                    <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Services</h1>
                    <nav className="flex flex-col gap-2">
                        <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">Lab Test</Link>
                        <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">Health Check</Link>
                        <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">Heart Health</Link>
                    </nav>
                </div>

                <div className="w-full md:w-1/4">
                    <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
                    <nav className="flex flex-col gap-2">
                        <Link to="/" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">123 Fictitious St, Faketown, Fakeland, 12345, Fictional Country</Link>
                        <Link to="/" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">wellnessvista@example.com</Link>
                        <Link to="/" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">+000 000-000</Link>
                    </nav>
                </div>
            </div>
            <div className="text-center py-4">
                <p>@Copyright a project clone of <span className="text-hoverColor">champion programmers</span> | All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;