const getRecommendation = (answers) => {

    // E-commerce
    if (answers.service === "ecommerce") {
        return {
            title: "E-commerce Development",
            description:
                "A scalable e-commerce solution designed to help you manage products, customers, payments, and online sales.",
            features: [
                "Custom e-commerce website",
                "Secure payment integration",
                "Mobile responsive design",
                "Product management",
            ],
        };
    }


    // Mobile App
    if (answers.service === "mobile-app") {
        return {
            title: "Mobile App Development",
            description:
                "A modern mobile application built around your business requirements and target platform.",
            features: [
                "Modern mobile UI",
                "Platform-specific development",
                "Responsive user experience",
                "Scalable architecture",
            ],
        };
    }


    // Digital Marketing
    if (answers.service === "marketing") {
        return {
            title: "Digital Marketing",
            description:
                "A focused digital marketing strategy designed to increase your online visibility, leads, and conversions.",
            features: [
                "Social media strategy",
                "Lead generation",
                "Campaign optimization",
                "Performance tracking",
            ],
        };
    }


    // Website
    if (answers.service === "website") {

        if (answers.conditionalAnswer === "web-app") {
            return {
                title: "Custom Web Application",
                description:
                    "A scalable web application designed around your business workflow and user requirements.",
                features: [
                    "Custom functionality",
                    "Scalable architecture",
                    "Responsive interface",
                    "Business-focused workflow",
                ],
            };
        }

        if (answers.conditionalAnswer === "landing-page") {
            return {
                title: "Landing Page Development",
                description:
                    "A conversion-focused landing page designed to present your product or service clearly.",
                features: [
                    "Conversion-focused design",
                    "Responsive layout",
                    "Fast performance",
                    "Clear call-to-action",
                ],
            };
        }

        return {
            title: "Business Website Development",
            description:
                "A professional business website designed to establish your online presence and communicate your services effectively.",
            features: [
                "Professional UI design",
                "Responsive layout",
                "SEO-friendly structure",
                "Fast performance",
            ],
        };
    }


    return {
        title: "Website Development",
        description:
            "A professional website solution tailored to your business needs.",
        features: [
            "Responsive design",
            "Modern UI",
            "Fast performance",
            "Scalable structure",
        ],
    };
};

export default getRecommendation;