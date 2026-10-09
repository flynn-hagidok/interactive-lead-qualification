import { BsFillPeopleFill } from "react-icons/bs";
import { FaClipboardQuestion } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import Qualification from "./Qualification";

const data = [
    {
        id: "1",
        icon: <FaClipboardQuestion size={50} />,
        title: "Answer Questions",
        description: "Tell us about your business and requirement."
    },
    {
        id: "2",
        icon: <IoNotifications size={50} />,
        title: "Get Recommendation",
        description: "We analyte your needs and find the best solution."
    },
    {
        id: "3",
        icon: <BsFillPeopleFill size={50} />,
        title: "Connect With Us",
        description: "Get in touch with our team and move forward."
    },
]

const HowItWork = () => {
    return (
        <section className="min-h-screen scroll-mt-20 py-20 px-6 lg:py-50">
            <div className="max-w-7xl mx-auto space-y-6">
                <div className="text-center space-y-2">
                    <h2 className="text-xl lg:text-2xl font-bold">How It Works</h2>
                    <p className="opacity-80">Get your perfect solution in 3 easy steps</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {
                        data.map(item =>
                            <div key={item.id} className="text-center space-y-2">
                                <div className="flex justify-center">
                                    <span className="bg-blue-100 h-15 w-15 rounded-[50%] flex items-center justify-center p-4 text-blue-600">{item.icon}</span>
                                </div>
                                <p className="space-x-2">
                                    <span className="font-bold text-xl text-blue-600">{item.id}.</span>
                                    <span className="font-semibold">{item.title}</span>
                                </p>
                                <p className="opacity-80">{item.description}</p>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className="mt-20">
                <Qualification />
            </div>
        </section>
    );
};

export default HowItWork;