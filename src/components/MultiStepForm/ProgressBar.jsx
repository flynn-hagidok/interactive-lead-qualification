const ProgressBar = ({ currentStep, totalSteps }) => {

    const progress = (currentStep / totalSteps) * 100;

    return (
        <div className="mb-8">
            <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-semibold text-blue-600">
                    Step {currentStep} of {totalSteps}
                </p>

                <p className="text-sm text-slate-500">
                    {Math.round(progress)}%
                </p>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                <div
                    className="h-full rounded-full bg-blue-600 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
};

export default ProgressBar;