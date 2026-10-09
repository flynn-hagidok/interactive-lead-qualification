import ProgressBar from "../components/Qualification/ProgressBar";
import StepHeader from "../components/Qualification/StepHeader";
import Questions from "../components/Qualification/Questions";
import Options from "../components/Qualification/Options";
import Button from "../components/Qualification/Button";
import { useState } from "react";

const Qualification = () => {

    //current state detact and change state
    const [currentStep, setCurrentStep] = useState(1);
    //next error handle
    const [error, setError] = useState("")

    //store options data
    const [answers, setAnswers] = useState({
        service: "",
        projectTpye: "",
        budget: "",
        timeline: "",
    })

    // handle next button
    const handleNext = () => {

        if (currentStep === 1 && !answers.service) {
            setError("Please select a service.")
            return;
        }
        if (currentStep === 2 && !answers.projectType) {
            setError("Please select a project type.")
            return;
        }
        if (currentStep === 3 && !answers.budget) {
            setError("Please select a budget.")
            return;
        }
        if (currentStep === 4 && !answers.timeline) {
            setError("Please select a timeline.")
            return;
        }

        setError("")

        if (currentStep < 5) {
            setCurrentStep(currentStep + 1)
            return;
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    };


    return (
        <section className="w-full">
            <div className="max-w-7xl mx-auto min-h-screen p-6">

                {/* step header and logo */}
                <StepHeader />

                {/* progress bar */}
                <ProgressBar
                    currentStep={currentStep}
                />

                {/* Questions */}
                <Questions
                    currentStep={currentStep}
                    answers={answers}
                    handleBack={handleBack}
                />

                {/* options */}
                <Options
                    currentStep={currentStep}
                    answers={answers}
                    setAnswers={setAnswers}
                    handleBack={handleBack}
                    error={error}
                />

                {/* buttons */}
                {
                    currentStep === 5 ?
                        ""
                        :
                        <>
                            <Button
                                currentStep={currentStep}
                                handleNext={handleNext}
                                handleBack={handleBack}
                            />
                        </>
                }
            </div>
        </section>
    )
}

export default Qualification;