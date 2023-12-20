const ServicesCard = ({ icon, title }) => {
    return (
        <div className="group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
            <div className="bg-[#D5F2EC] rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ADE9DC]">
                {icon}
            </div>
            <h1 className="font-semibold text-lg">{title}</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>

            <h3 className="text-backgroundColor cursor-pointer hover:text-[#ADE9DC] transition duration-300 ease-in-out">
                Learn more...
            </h3>
        </div>
    );
};

export default ServicesCard;