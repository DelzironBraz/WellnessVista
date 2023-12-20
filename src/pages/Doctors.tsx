import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { DoctorsData } from "../utils/Doctors";
import { useRef } from "react";

const Doctors = () => {

    const slider = useRef(null);

    const settings = {
        arrows: false,
        accessibility: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
            <div className="flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
                <div>
                    <h1 className="text-4xl font-semibold text-center lg:text-start">Our Doctors</h1>
                    <p className="mt-2 text-center lg:text-start">
                        Meet our team of highly trained and experienced doctors.
                    </p>
                </div>
                <div className="flex gap-5 mt-4 lg:mt-0">
                    <button
                        className="bg-[#D5F2EC] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ADE9DC]"
                        onClick={() => slider.current.slickPrev()}
                    >
                        <FaArrowLeft size={25} />
                    </button>
                    <button
                        className="bg-[#D5F2EC] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ADE9DC]"
                        onClick={() => slider.current.slickNext()}
                    >
                        <FaArrowRight size={25} />
                    </button>
                </div>
            </div>

            <div className="mt-5">
                <Slider ref={slider} {...settings}>
                    {DoctorsData.map((doctor) => (
                        <div key={doctor.id} className="h-[350px] text-black rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer">
                            <div>
                                <img src={doctor.img} alt={doctor.name} className="h-56 rounded-t-xl w-full" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h1 className="font-semibold text-xl pt-4">{doctor.name}</h1>
                                <h3 className="pt-2">{doctor.specialties}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Doctors