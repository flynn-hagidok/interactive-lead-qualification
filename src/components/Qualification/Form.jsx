import { useNavigate } from "react-router";

const Form = ({ handleBack, answers }) => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {

        e.preventDefault();

        navigate("/recommendation",
            {
                state: {
                    answers
                }
            }
        )
    }


    return (
        <section>
            <form onSubmit={handleSubmit

            }
                className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <label className="font-semibold">Your Name</label>
                        <input type="text" placeholder="Your name" className="block mt-2 p-2 w-full border rounded-md" required />
                    </div>
                    <div>
                        <label className="font-semibold">Email Address</label>
                        <input type="email" placeholder="example@email.com" className="block mt-2 p-2 w-full border rounded-md" required />
                    </div>
                </div>
                <div>
                    <label className="font-semibold">Your Address</label>
                    <input type="text" placeholder="Enter your address" className="block p-2 mt-2 border w-full rounded-md" required />
                </div>
                <div>
                    <label className="font-semibold">Message</label>
                    <textarea placeholder="message"
                        className="p-2 border rounded-md block w-full h-30 mt-2" required
                    ></textarea>
                </div>
                <div className="flex items-center justify-between mt-10">
                    <button
                        onClick={handleBack}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium cursor-pointer hover:bg-blue-700"
                    >
                        Back
                    </button>
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium cursor-pointer hover:bg-blue-700"
                    >
                        Get Recommendation
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Form;