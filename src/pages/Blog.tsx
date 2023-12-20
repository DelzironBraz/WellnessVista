import BlogCard from "../components/BlogCard";
import Button from "../components/Button";
import { PostsData } from "../utils/postsData";

const Blog = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 pt-24">
            <div className="flex flex-col items-center lg:flex-row justify-between gap-5">
                <div>
                    <h1 className="text-4xl font-semibold text-center lg:text-start">Latest Post</h1>
                    <p className="mt-2 text-center lg:text-start">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className="mt-4 lg:mt-0">
                    <Button title="Our Articles" />
                </div>
            </div>
            <div className="my-8">
                <div className="flex flex-wrap justify-center gap-5">
                    {PostsData.map((post) => (
                        <BlogCard key={post.id} img={post.img} headlines={post.headline} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;