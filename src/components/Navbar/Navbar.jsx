import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import NavLinks from "./NavLinks";

const Navbar = () => {

    const [activeSection, setActiveSection] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        {
            label: "Home",
            id: "home"
        },
        {
            label: "About",
            id: "about"
        },
        {
            label: "Services",
            id: "services"
        },
        {
            label: "Contact",
            id: "contact"
        }
    ];

    useEffect(() => {
        const sections = navItems
            .map((item) => document.getElementById(item.id))
            .filter(Boolean);

        const observer = new IntersectionObserver((entries) => {
            const visibleSection = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) =>
                    b.intersectionRatio - a.intersectionRatio
                )[0];

            if (visibleSection) {
                setActiveSection(visibleSection.target.id);
            }
        },
            {
                root: null,
                rootMargin: "-20% 0px -60% 0px",
                threshold: [0.1, 0.25, 0.5, 0.75],
            }
        )
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const handleMenu = (id) => {
        const section = document.getElementById(id);

        if (!section) return;

        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        setIsMenuOpen(false);
    };

    return (
        <header className="w-full shadow-md fixed top-0 z-50 bg-white/80 backdrop-blur-md">
            <nav className="nav flex max-w-7xl mx-auto items-center justify-between py-4 px-6">
                <button type="button"
                    onClick={() => handleMenu("home")}
                    className="text-xl lg:text-4xl font-bold cursor-pointer">
                    Biswas IT Farm
                </button>
                {/* desktop */}
                <div className="hidden gap-4 lg:flex font-semibold">
                    {
                        navItems.map((item) =>
                            <NavLinks key={item.id}
                                label={item.label}
                                active={activeSection === item.id}
                                onClick={() => handleMenu(item.id)}
                            />
                        )
                    }
                </div>

                <button
                    onClick={() => handleMenu("contact")}
                    className="hidden lg:block px-4 py-2 bg-blue-500 text-white rounded-md font-semibold cursor-pointer">
                    Get Started
                </button>

                {/* mobile btn */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
                    <IoMenu size={20} />
                </button>
            </nav>

            {/* mobile navigation */}
            {
                isMenuOpen && (
                    <div className="gap-4 lg:hidden font-semibold flex flex-col p-4 border-t border-slate-200 items-start">
                        {
                            navItems.map((item) =>
                                <NavLinks key={item.id}
                                    label={item.label}
                                    active={activeSection === item.id}
                                    onClick={() => handleMenu(item.id)}
                                />
                            )
                        }
                    </div>
                )
            }
        </header>
    )
};

export default Navbar;