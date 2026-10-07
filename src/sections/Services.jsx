import { FaCode, FaPalette, FaSearch } from "react-icons/fa";
import { LuChartNoAxesCombined } from "react-icons/lu";

const services = [
    {
        title: "Web Development",
        description: "Modern, responsive, and high-performance websites built to support your business goals.",
        icon: <FaCode size={50} />
    },
    {
        title: "Digital Marketing",
        description: "Strategic digital marketing solutions that help your brand reach the right audience and grow online.",
        icon: <LuChartNoAxesCombined size={50} />
    },
    {
        title: "UI/UX Design",
        description: "Clean and intuitive interfaces designed to provide a smooth and engaging user experience.",
        icon: <FaPalette size={50} />
    }
]

const Services = () => {
    return (
        <section id="services" className="min-h-screen py-20 md:py-80 lg:py-50 px-6 bg-blue-100">
            <div className="max-w-7xl mx-auto space-y-2">
                <p className="upparcase text-blue-500 font-semibold">Our Services</p>
                <h2 className="text-3xl lg:text-4xl font-bold">Solutions Designed to Move Your Business Forward</h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
                    {
                        services.map(data =>
                            <div className="border space-y-4 p-6 rounded-md border-blue-300">
                                <p className="text-blue-600">{data.icon}</p>
                                <h2 className="text-2xl font-bold">{data.title}</h2>
                                <p>{data.description}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
};

export default Services;