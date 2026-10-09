
const Questions = ({ currentStep, answers }) => {
    return (
        <section>
            {currentStep === 1 &&
                <div className="mb-8">
                    <h2 className="font-semibold text-xl mb-4">1. What type of service do you need?</h2>
                </div>
            }

            {currentStep === 2 &&
                <div className="mb-8">
                    {
                        answers.service === "Website" && (
                            <h2 className="font-semibold text-xl mb-4">2. What tpye of website are you planning?</h2>
                        )
                    }
                    {
                        answers.service === "Website Application" && (
                            <h2 className="font-semibold text-xl mb-4">2. What type of web application do you need?</h2>
                        )
                    }
                    {
                        answers.service === "Mobile Application" && (
                            <h2 className="font-semibold text-xl mb-4">2. What type of mobile application do you need?</h2>
                        )
                    }
                </div>
            }
            {currentStep === 3 &&
                <div className="mb-8">
                    {
                        answers.service === "Website" && (
                            <h2 className="font-semibold text-xl mb-4">3. What is your budget for this project?</h2>
                        )
                    }
                    {
                        answers.service === "Website Application" && (
                            <h2 className="font-semibold text-xl mb-4">3. What is your budget for this project?</h2>
                        )
                    }
                    {
                        answers.service === "Mobile Application" && (
                            <h2 className="font-semibold text-xl mb-4">3. What is your budget for this project?</h2>
                        )
                    }
                </div>
            }
            {currentStep === 4 &&
                <div className="mb-8">
                    {
                        answers.service === "Website" && (
                            <h2 className="font-semibold text-xl mb-4">4. What is your duration for this project?</h2>
                        )
                    }
                    {
                        answers.service === "Website Application" && (
                            <h2 className="font-semibold text-xl mb-4">4. What is your duration for this project?</h2>
                        )
                    }
                    {
                        answers.service === "Mobile Application" && (
                            <h2 className="font-semibold text-xl mb-4">4. What is your duration for this project?</h2>
                        )
                    }
                </div>
            }
        </section>
    )
};

export default Questions;