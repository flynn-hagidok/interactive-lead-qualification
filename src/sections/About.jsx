import aboutImg from "../assets/images.jpg"

const About = () => {
    return (
        <section id="about" className="bg-blue-100 min-h-screen py-40 md:py-80 lg:py-50 px-6">
            <div className="max-w-7xl mx-auto lg:flex gap-10">
                <div className="max-w-md">
                    <img src={aboutImg} alt="image" />
                </div>
                <div className="space-y-4 max-w-xl mt-8 lg:mt-0">
                    <p className="text-blue-400 font-semibold uppercase text-xl">About Us</p>
                    <h2 className="text-3xl lg:text-4xl font-bold">About Biswas IT Farm</h2>
                    <p className="text-blue-600 text-xl font-bold">Technology That Work For Your Business</p>
                    <p className="opacity-80">Biswas IT is a technology-focused company dedicated to helping business establish and grow their digital presence. We combine modern technology, creative thinking, and practical solutions to deliver reliable digital experience.</p>
                    <p className="opacity-80">Our goal is simple - to understand your business needs and turn your ideas into effective digital solutions.</p>
                </div>
            </div>
        </section>
    )
};

export default About;