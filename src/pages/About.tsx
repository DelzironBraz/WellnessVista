import aboutImage from '../assets/images/about.jpg';

const About = () => {
    return (
        <section className='min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5'>
            <div className='w-full lg:w-3/4 space-y-4'>
                <h1 className='text-4xl font-semibold text-center lg:text-start text-backgroundColor'>About Us</h1>
                <p className='text-justify lg:text-justify'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book.
                </p>
                <p className='text-justify lg:text-justify'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book.
                </p>
                <p className='text-justify lg:text-justify'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book.
                </p>
            </div>
            <div className='w-full lg:w-3/4'>
                <img src={aboutImage} alt="about" className='rounded-lg' />
            </div>
        </section>
    );
};

export default About;