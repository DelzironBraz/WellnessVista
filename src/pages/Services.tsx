import Button from "../components/Button";
import ServicesCard from "../components/ServicesCard";
import { RiMicroscopeLine } from 'react-icons/ri';
import { MdHealthAndSafety } from 'react-icons/md';
import { FaHeartbeat } from 'react-icons/fa';

const Services = () => {
    const microscopeIcon = <RiMicroscopeLine size={35} className="text-backgroundColor" />;
    const healthSafetyIcon = <MdHealthAndSafety size={35} className="text-backgroundColor" />;
    const heartbeatIcon = <FaHeartbeat size={35} className="text-backgroundColor" />;

    const ServiceData = [
        {
            id: 1,
            icon: microscopeIcon,
            title: 'Laboratory Test',
        },
        {
            id: 2,
            icon: healthSafetyIcon,
            title: 'Health Check',
        },
        {
            id: 3,
            icon: heartbeatIcon,
            title: 'Heart Health',
        },
    ];

    return (
        <section className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
            <div className="flex flex-col items-center lg:flex-row justify-between">
                <div>
                    <h1 className="text-4xl font-semibold text-center lg:text-start">Our Services</h1>
                    <p className="mt-2 text-center lg:text-start">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className="mt-4 lg:mt-0">
                    <Button title="See Services" />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 pt-14">
                {ServiceData.map((item) => (
                    <ServicesCard icon={item.icon} title={item.title} key={item.id} />
                ))}
            </div>
        </section>
    );
};

export default Services;