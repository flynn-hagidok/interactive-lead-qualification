
const ProgressBar = ({ currentStep }) => {

    const totalStep = 5;
    const progress = (currentStep / 5) * 100;

    return (
        <section>
            <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-slate-700">Step {currentStep} of {totalStep}</span>
                    <span className="text-sm text-slate-500">{progress}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden bg-slate-200">
                    <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
        </section>
    )
}

export default ProgressBar;