const RadioOption = ({
    label,
    selected,
    onClick,
}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`flex w-full items-center justify-between rounded-xl border px-5 py-4 text-left transition ${
                selected
                    ? "border-blue-600 bg-blue-50"
                    : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
            }`}
        >
            <span className="font-medium text-slate-700">
                {label}
            </span>

            <span
                className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                    selected
                        ? "border-blue-600"
                        : "border-slate-300"
                }`}
            >
                {selected && (
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                )}
            </span>
        </button>
    );
};

export default RadioOption;