import Button from "../components/Button";

const Home = () => {
    return (
        <main className={`min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/images/home.png')] bg-no-repeat bg-cover opacity-90`}>
            <div className="w-full lg:w-4/5 space-y-5 mt-10">
                <h1 className="text-5xl font-bold text-white leading-tight">Empowering Health Choices for a Vibrant Life Your Trusted...</h1>
                <p className="text-justify">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets containing
                    Lorem Ipsum passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                <Button title="See Services" />
            </div>
        </main>
    );
};

export default Home;