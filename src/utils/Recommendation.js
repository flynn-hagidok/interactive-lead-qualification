export const getRecommendation = (answers) => {

    if (
        answers.service === "Website" &&
        answers.projectType === "E-commerce Website"
    ) {
        return {
            title: "E-commerce Website",
            description:
                "A scalable e-commerce website designed to help you sell products online.",
            features: [
                "Product Management",
                "Shopping Cart",
                "Secure Checkout",
                "Order Management"
            ]
        };
    }

    if (
        answers.service === "Website" &&
        answers.projectType === "Business Website"
    ) {
        return {
            title: "Business Website",
            description:
                "A professional website to showcase your business and attract customers.",
            features: [
                "Responsive Design",
                "Business Information",
                "Contact Form",
                "SEO Friendly Structure"
            ]
        };
    }

    if (
        answers.service === "Website" &&
        answers.projectType === "Portfolio"
    ) {
        return {
            title: "Portfolio",
            description:
                "A custom portfolio to manage and visualize your business data.",
            features: [
                "Data Visualization",
                "User Management",
                "Analytics",
                "Responsive Interface"
            ]
        };
    }


    //web application
    if (
        answers.service === "Web Application",
        answers.projectType === "Saas Application"
    ) {
        return {
            title: "Saas Application",
            description:
                "A modern web application tailored to your business needs.",
            features: [
                "Mobile Friendly UI",
                "User Authentication",
                "API Integration",
                "Scalable Architecture"
            ]
        };
    }
    if (
        answers.service === "Web Application",
        answers.projectType === "Dashboard"
    ) {
        return {
            title: "Dashboard",
            description:
                "A modern web application tailored to your business needs.",
            features: [
                "Mobile Friendly UI",
                "User Authentication",
                "API Integration",
                "Scalable Architecture"
            ]
        };
    }
    if (
        answers.service === "Web Application",
        answers.projectType === "Exercise App"
    ) {
        return {
            title: "Exercise App",
            description:
                "A modern web application tailored to your business needs.",
            features: [
                "Mobile Friendly UI",
                "User Authentication",
                "API Integration",
                "Scalable Architecture"
            ]
        };
    }

    //mobile application
    if (
        answers.service === "Web Application",
        answers.projectType === "Project App"
    ) {
        return {
            title: "Project App",
            description:
                "A modern web application tailored to your business needs.",
            features: [
                "Mobile Friendly UI",
                "User Authentication",
                "API Integration",
                "Scalable Architecture"
            ]
        };
    }

    if (
        answers.service === "Mobiles Application",
        answers.projectType === "Weather App"
    ) {
        return {
            title: "Weather App",
            description:
                "A modern web application tailored to your business needs.",
            features: [
                "Mobile Friendly UI",
                "User Authentication",
                "API Integration",
                "Scalable Architecture"
            ]
        };
    }

    if (
        answers.service === "Web Application",
        answers.projectType === "Storefront"
    ) {
        return {
            title: "Storefront",
            description:
                "A modern web application tailored to your business needs.",
            features: [
                "Mobile Friendly UI",
                "User Authentication",
                "API Integration",
                "Scalable Architecture"
            ]
        };
    }
};