const OptionCard = ({
    title,
    icon,
    selected,
    onClick,
}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`rounded-xl border p-5 text-left transition ${
                selected
                    ? "border-blue-600 bg-blue-50 ring-2 ring-blue-100"
                    : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
            }`}
        >
            <div className="text-3xl">
                {icon}
            </div>

            <p className="mt-3 font-semibold text-slate-800">
                {title}
            </p>

            <div className="mt-3 flex justify-end">
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
            </div>
        </button>
    );
};

export default OptionCard;