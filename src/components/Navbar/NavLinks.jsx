

const NavLinks = ({ label, onClick, active }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`relative px-3 py-2 text-sm font-semibold transition-colors duration-200 ${active
                ? "text-blue-600"
                : "text-slate-700 hover:text-blue-600"
                }`}>
            {label}
            <span
                className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-blue-600 transition-all duration-200 ${active ? "w-6" : "w-0"
                    }`}
            />
        </button>
    );
};

export default NavLinks;