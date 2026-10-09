import { useLocation, useNavigate } from "react-router";
import { getRecommendation } from "../utils/recommendation";

const Recommendation = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const answers = location.state?.answers;
    console.log(answers);

    if (!answers) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-xl font-semibold">
                        No qualification data found.
                    </h2>

                    <button
                        onClick={() => navigate("/")}
                        className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg"
                    >
                        Start Again
                    </button>
                </div>
            </div>
        );
    }

    const recommendation = getRecommendation(answers);

    return (
        <section className="min-h-screen px-6 py-16">

            <div className="max-w-3xl mx-auto">

                <div className="text-center mb-10">
                    <p className="text-blue-600 font-medium">
                        Your Recommendation
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold mt-2">
                        {recommendation.title}
                    </h1>

                    <p className="text-slate-600 mt-4">
                        {recommendation.description}
                    </p>
                </div>

                <div className="border rounded-2xl p-6">

                    <h2 className="text-xl font-semibold mb-4">
                        What's included?
                    </h2>

                    <div className="space-y-3">
                        {recommendation.features.map((feature) => (
                            <div
                                key={feature}
                                className="flex items-center gap-3"
                            >
                                <span className="text-blue-600">✓</span>

                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="mt-8 text-center">

                    <button
                        onClick={() => navigate("/", {
                            state: {
                                answers,
                                recommendation
                            }
                        })}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg"
                    >
                        Get Started
                    </button>

                </div>

            </div>

        </section>
    );
};

export default Recommendation;