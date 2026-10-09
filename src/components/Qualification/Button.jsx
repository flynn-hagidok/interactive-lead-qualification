
const Button = ({ currentStep, handleNext, handleBack }) => {

    return (
        <section>
            <div className="mt-8 flex items-center justify-between">
                <button
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    className="border border-slate-200 px-6 py-2 rounded-lg text-slate-600 font-medium cursor-pointer"
                >
                    Back
                </button>

                <button
                    onClick={handleNext}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium cursor-pointer hover:bg-blue-700"
                >
                    Next
                </button>
            </div>
        </section>
    )
};

export default Button;