import Form from "./Form";

const Options = ({ currentStep, answers, setAnswers, error, handleBack }) => {

    const handleSelect = (key, value) => {
        setAnswers(prev => {

            const updatedAnswers = {
                ...prev,
                [key]: value
            }

            if (key === "service") {
                updatedAnswers.projectType = ""
                updatedAnswers.budget = "";
                updatedAnswers.timeline = "";
            }

            if (key === "projectType") {
                updatedAnswers.budget = "";
                updatedAnswers.timeline = "";
            }

            if (key === "budget") {
                updatedAnswers.timeline = "";
            }

            return updatedAnswers;
        })
    }

    console.log(answers);

    // console.log(answers);

    return (
        <section>
            {/* step 1 */}
            {
                currentStep === 1 && (
                    <div className="space-y-4">
                        <button
                            onClick={() => handleSelect("service", "Website")}
                            className={`w-full border-slate-200 border text-left p-4 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-500 
                        ${answers.service === "Website"
                                    ? "border-blue-500 bg-blue-200"
                                    : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"}`}
                        >
                            <span className="font-semibold text-slate-900">Website</span>
                        </button>

                        <button
                            onClick={() => handleSelect("service", "Website Application")}
                            className={`w-full border-slate-200 border text-left p-4 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-500 
                        ${answers.service === "Website Application"
                                    ? "border-blue-500 bg-blue-200"
                                    : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"}`}
                        >
                            <span className="font-semibold text-slate-900">Website Application</span>
                        </button>

                        <button
                            onClick={() => handleSelect("service", "Mobile Application")}
                            className={`w-full border-slate-200 border text-left p-4 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-500 
                        ${answers.service === "Mobile Application"
                                    ? "border-blue-500 bg-blue-200"
                                    : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"}`}
                        >
                            <span className="font-semibold text-slate-900">Mobile Application</span>
                        </button>
                    </div>
                )
            }

            {/* step 2 */}
            {
                currentStep === 2 && (
                    <div className="space-y-4">
                        {/* Website Condition*/}
                        {
                            answers.service === "Website" && (
                                <>
                                    <button
                                        onClick={() => handleSelect("projectType", "Business Website")}
                                        className={`w-full border-slate-200 border text-left p-4 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-500 
                        ${answers.projectType === "Business Website"
                                                ? "border-blue-500 bg-blue-200"
                                                : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"}`}
                                    >
                                        <span className="font-semibold text-slate-900">Business Website</span>
                                    </button>

                                    <button
                                        onClick={() => handleSelect("projectType", "E-commerce Website")}
                                        className={`w-full border-slate-200 border text-left p-4 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-500 
                        ${answers.projectType === "E-commerce Website"
                                                ? "border-blue-500 bg-blue-200"
                                                : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"}`}
                                    >
                                        <span className="font-semibold text-slate-900">E-commerce Website</span>
                                    </button>

                                    <button
                                        onClick={() => handleSelect("projectType", "Portfolio")}
                                        className={`w-full border-slate-200 border text-left p-4 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-500 
                        ${answers.projectType === "Portfolio"
                                                ? "border-blue-500 bg-blue-200"
                                                : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"}`}
                                    >
                                        <span className="font-semibold text-slate-900">Portfolio</span>
                                    </button>
                                </>
                            )
                        }

                        {/* Web application Condition */}
                        {
                            answers.service === "Website Application" && (
                                <>
                                    <button
                                        onClick={() => handleSelect("projectType", "SaaS Application")}
                                        className={`w-full border-slate-200 border text-left p-4 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-500 
                        ${answers.projectType === "SaaS Application"
                                                ? "border-blue-500 bg-blue-200"
                                                : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"}`}
                                    >
                                        <span className="font-semibold text-slate-900">SaaS Application</span>
                                    </button>
                                    <button
                                        onClick={() => handleSelect("projectType", "Dashboard")}
                                        className={`w-full border-slate-200 border text-left p-4 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-500 
                        ${answers.projectType === "Dashboard"
                                                ? "border-blue-500 bg-blue-200"
                                                : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"}`}
                                    >
                                        <span className="font-semibold text-slate-900">Dashboard</span>
                                    </button>
                                    <button
                                        onClick={() => handleSelect("projectType", "Storefront")}
                                        className={`w-full border-slate-200 border text-left p-4 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-500 
                        ${answers.projectType === "Storefront"
                                                ? "border-blue-500 bg-blue-200"
                                                : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"}`}
                                    >
                                        <span className="font-semibold text-slate-900">Storefront</span>
                                    </button>
                                </>
                            )
                        }

                        {/* Mobile Application */}
                        {
                            answers.service === "Mobile Application" && (
                                <>
                                    <button
                                        onClick={() => handleSelect("projectType", "Exercise App")}
                                        className={`w-full border-slate-200 border text-left p-4 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-500 
                        ${answers.projectType === "Exercise App"
                                                ? "border-blue-500 bg-blue-200"
                                                : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"}`}
                                    >
                                        <span className="font-semibold text-slate-900">Exercise App</span>
                                    </button>

                                    <button
                                        onClick={() => handleSelect("projectType", "Project App")}
                                        className={`w-full border-slate-200 border text-left p-4 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-500 
                        ${answers.projectType === "Project App"
                                                ? "border-blue-500 bg-blue-200"
                                                : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"}`}
                                    >
                                        <span className="font-semibold text-slate-900">Project App</span>
                                    </button>

                                    <button
                                        onClick={() => handleSelect("projectType", "Weather App")}
                                        className={`w-full border-slate-200 border text-left p-4 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-500 
                        ${answers.projectType === "Weather App"
                                                ? "border-blue-500 bg-blue-200"
                                                : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"}`}
                                    >
                                        <span className="font-semibold text-slate-900">Weather App</span>
                                    </button>
                                </>
                            )
                        }
                    </div>
                )
            }

            {/* step 3 */}
            {
                currentStep === 3 && (
                    <div className="space-y-4">
                        {/* Website Condition*/}
                        {
                            answers.service === "Website" && (
                                <>
                                    <button
                                        onClick={() => handleSelect("budget", "1$-10$")}
                                        className={`w-full border-slate-200 border text-left p-4 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-500 
                        ${answers.budget === "1$-10$"
                                                ? "border-blue-500 bg-blue-200"
                                                : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"}`}
                                    >
                                        <span className="font-semibold text-slate-900">1$-10$</span>
                                    </button>

                                    <button
                                        onClick={() => handleSelect("budget", "11$-50$")}
                                        className={`w-full border-slate-200 border text-left p-4 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-500 
                        ${answers.budget === "11$-50$"
                                                ? "border-blue-500 bg-blue-200"
                                                : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"}`}
                                    >
                                        <span className="font-semibold text-slate-900">11$-50$</span>
                                    </button>

                                    <button
                                        onClick={() => handleSelect("budget", "51$-100$")}
                                        className={`w-full border-slate-200 border text-left p-4 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-500 
                        ${answers.budget === "51$-100$"
                                                ? "border-blue-500 bg-blue-200"
                                                : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"}`}
                                    >
                                        <span className="font-semibold text-slate-900">51$-100$</span>
                                    </button>
                                </>
                            )
                        }

                        {/* Web application Condition */}
                        {
                            answers.service === "Website Application" && (
                                <>
                                    <button
                                        onClick={() => handleSelect("budget", "1$-10$")}
                                        className={`w-full border-slate-200 border text-left p-4 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-500 
                        ${answers.budget === "1$-10$"
                                                ? "border-blue-500 bg-blue-200"
                                                : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"}`}
                                    >
                                        <span className="font-semibold text-slate-900">1$-10$</span>
                                    </button>
                                    <button
                                        onClick={() => handleSelect("budget", "11$-50$")}
                                        className={`w-full border-slate-200 border text-left p-4 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-500 
                        ${answers.budget === "11$-50$"
                                                ? "border-blue-500 bg-blue-200"
                                                : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"}`}
                                    >
                                        <span className="font-semibold text-slate-900">11$-50$</span>
                                    </button>
                                    <button
                                        onClick={() => handleSelect("budget", "above 50$")}
                                        className={`w-full border-slate-200 border text-left p-4 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-500 
                        ${answers.budget === "above 50$"
                                                ? "border-blue-500 bg-blue-200"
                                                : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"}`}
                                    >
                                        <span className="font-semibold text-slate-900">above 50$</span>
                                    </button>
                                </>
                            )
                        }

                        {/* Mobile Application */}
                        {
                            answers.service === "Mobile Application" && (
                                <>
                                    <button
                                        onClick={() => handleSelect("budget", "10$-100$")}
                                        className={`w-full border-slate-200 border text-left p-4 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-500 
                        ${answers.budget === "10$-100$"
                                                ? "border-blue-500 bg-blue-200"
                                                : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"}`}
                                    >
                                        <span className="font-semibold text-slate-900">10$-100$</span>
                                    </button>

                                    <button
                                        onClick={() => handleSelect("budget", "above 100$")}
                                        className={`w-full border-slate-200 border text-left p-4 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-500 
                        ${answers.budget === "above 100$"
                                                ? "border-blue-500 bg-blue-200"
                                                : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"}`}
                                    >
                                        <span className="font-semibold text-slate-900">above 100$</span>
                                    </button>

                                    <button
                                        onClick={() => handleSelect("budget", "above 200$")}
                                        className={`w-full border-slate-200 border text-left p-4 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-500 
                        ${answers.budget === "above 200$"
                                                ? "border-blue-500 bg-blue-200"
                                                : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"}`}
                                    >
                                        <span className="font-semibold text-slate-900">above 200$</span>
                                    </button>
                                </>
                            )
                        }
                    </div>
                )
            }

            {/* step 4 */}
            {
                currentStep === 4 && (
                    <div className="space-y-4">
                        {/* Website Condition*/}
                        {
                            answers.service === "Website" && (
                                <>
                                    <button
                                        onClick={() => handleSelect("timeline", "1 month")}
                                        className={`w-full border-slate-200 border text-left p-4 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-500 
                        ${answers.timeline === "1 month"
                                                ? "border-blue-500 bg-blue-200"
                                                : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"}`}
                                    >
                                        <span className="font-semibold text-slate-900">1 month</span>
                                    </button>

                                    <button
                                        onClick={() => handleSelect("timeline", "1-2 month")}
                                        className={`w-full border-slate-200 border text-left p-4 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-500 
                        ${answers.timeline === "1-2 month"
                                                ? "border-blue-500 bg-blue-200"
                                                : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"}`}
                                    >
                                        <span className="font-semibold text-slate-900">1-2 month</span>
                                    </button>

                                    <button
                                        onClick={() => handleSelect("timeline", "4 month")}
                                        className={`w-full border-slate-200 border text-left p-4 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-500 
                        ${answers.timeline === "4 month"
                                                ? "border-blue-500 bg-blue-200"
                                                : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"}`}
                                    >
                                        <span className="font-semibold text-slate-900">4 month</span>
                                    </button>
                                </>
                            )
                        }

                        {/* Web application Condition */}
                        {
                            answers.service === "Website Application" && (
                                <>
                                    <button
                                        onClick={() => handleSelect("timeline", "1 month")}
                                        className={`w-full border-slate-200 border text-left p-4 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-500 
                        ${answers.timeline === "1 month"
                                                ? "border-blue-500 bg-blue-200"
                                                : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"}`}
                                    >
                                        <span className="font-semibold text-slate-900">1 month</span>
                                    </button>
                                    <button
                                        onClick={() => handleSelect("timeline", "6 month")}
                                        className={`w-full border-slate-200 border text-left p-4 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-500 
                        ${answers.timeline === "6 month"
                                                ? "border-blue-500 bg-blue-200"
                                                : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"}`}
                                    >
                                        <span className="font-semibold text-slate-900">6 month</span>
                                    </button>
                                    <button
                                        onClick={() => handleSelect("timeline", "1 year")}
                                        className={`w-full border-slate-200 border text-left p-4 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-500 
                        ${answers.timeline === "1 year"
                                                ? "border-blue-500 bg-blue-200"
                                                : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"}`}
                                    >
                                        <span className="font-semibold text-slate-900">1 year</span>
                                    </button>
                                </>
                            )
                        }


                        {/* Mobile Application */}
                        {
                            answers.service === "Mobile Application" && (
                                <>
                                    <button
                                        onClick={() => handleSelect("timeline", "2 month")}
                                        className={`w-full border-slate-200 border text-left p-4 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-500 
                        ${answers.timeline === "2 month"
                                                ? "border-blue-500 bg-blue-200"
                                                : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"}`}
                                    >
                                        <span className="font-semibold text-slate-900">2 month</span>
                                    </button>

                                    <button
                                        onClick={() => handleSelect("timeline", "3 month")}
                                        className={`w-full border-slate-200 border text-left p-4 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-500 
                        ${answers.timeline === "3 month"
                                                ? "border-blue-500 bg-blue-200"
                                                : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"}`}
                                    >
                                        <span className="font-semibold text-slate-900">3 month</span>
                                    </button>

                                    <button
                                        onClick={() => handleSelect("timeline", "4 month")}
                                        className={`w-full border-slate-200 border text-left p-4 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-500 
                        ${answers.timeline === "4 month"
                                                ? "border-blue-500 bg-blue-200"
                                                : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"}`}
                                    >
                                        <span className="font-semibold text-slate-900">4 month</span>
                                    </button>
                                </>
                            )
                        }
                    </div>
                )
            }

            {/* step 4 */}
            {
                currentStep === 5 && (
                    <Form
                        handleBack={handleBack}
                        answers={answers}
                    />
                )
            }

            {
                error && (
                    <p className="mt-4 font-semibold text-red-500 text-sm">{error}</p>
                )
            }
        </section>
    )
};

export default Options;