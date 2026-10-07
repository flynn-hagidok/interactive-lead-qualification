// import { useState } from "react";

// const Qualification = () => {
//     // Which step is currently active?
//     const [currentStep, setCurrentStep] = useState(1);

//     // Store answers from step 1 - 4
//     const [answers, setAnswers] = useState({
//         service: "",
//         conditionalAnswer: "",
//         budget: "",
//         timeline: "",
//     });

//     // Store user's personal information
//     const [leadInfo, setLeadInfo] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         company: "",
//     });

//     // Store validation errors
//     const [errors, setErrors] = useState({});


//     // HANDLE OPTION SELECTION

//     const handleAnswer = (field, value) => {
//         setAnswers((previous) => ({
//             ...previous,
//             [field]: value,
//         }));

//         // Remove error when user selects an option
//         setErrors((previous) => ({
//             ...previous,
//             [field]: "",
//         }));
//     };


//     // HANDLE LEAD INPUT

//     const handleLeadInfo = (event) => {
//         const { name, value } = event.target;

//         setLeadInfo((previous) => ({
//             ...previous,
//             [name]: value,
//         }));

//         setErrors((previous) => ({
//             ...previous,
//             [name]: "",
//         }));
//     };


//     // STEP VALIDATION

//     const validateStep = () => {
//         const newErrors = {};

//         if (currentStep === 1 && !answers.service) {
//             newErrors.service = "Please select a service.";
//         }

//         if (currentStep === 2 && !answers.conditionalAnswer) {
//             newErrors.conditionalAnswer = "Please select an option.";
//         }

//         if (currentStep === 3 && !answers.budget) {
//             newErrors.budget = "Please select your budget.";
//         }

//         if (currentStep === 4 && !answers.timeline) {
//             newErrors.timeline = "Please select your timeline.";
//         }

//         if (currentStep === 5) {
//             if (!leadInfo.name.trim()) {
//                 newErrors.name = "Name is required.";
//             }

//             if (!leadInfo.email.trim()) {
//                 newErrors.email = "Email is required.";
//             }

//             if (!leadInfo.phone.trim()) {
//                 newErrors.phone = "Phone number is required.";
//             }
//         }

//         setErrors(newErrors);

//         return Object.keys(newErrors).length === 0;
//     };


//     // NEXT STEP

//     const handleNext = () => {
//         const isValid = validateStep();

//         if (!isValid) return;

//         if (currentStep < 5) {
//             setCurrentStep((previous) => previous + 1);
//         }
//     };

//     // PREVIOUS STEP

//     const handleBack = () => {
//         if (currentStep > 1) {
//             setCurrentStep((previous) => previous - 1);
//         }
//     };


//     // FINAL SUBMIT

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const isValid = validateStep();

//         if (!isValid) return;

//         console.log("Answers:", answers);
//         console.log("Lead Information:", leadInfo);

//         alert("Your recommendation request has been submitted!");
//     };


//     return (
//         <section className="min-h-screen px-4 py-12">

//             <div className="mx-auto max-w-3xl">

//                 {/* Header */}
//                 <div className="mb-8 text-center">
//                     <p className="text-sm font-semibold text-blue-600">
//                         Step {currentStep} of 5
//                     </p>

//                     <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
//                         <div
//                             className="h-full rounded-full bg-blue-600 transition-all duration-300"
//                             style={{
//                                 width: `${(currentStep / 5) * 100}%`,
//                             }}
//                         />
//                     </div>
//                 </div>


//                 {/* Form Card */}
//                 <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">

//                     {/* STEP 1 */}

//                     {currentStep === 1 && (
//                         <div>
//                             <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
//                                 What type of service do you need?
//                             </h1>

//                             <p className="mt-2 text-slate-500">
//                                 Select the service that best fits your requirements.
//                             </p>


//                             <div className="mt-8 grid gap-4 sm:grid-cols-2">

//                                 <OptionCard
//                                     title="Website Development"
//                                     icon="💻"
//                                     selected={answers.service === "website"}
//                                     onClick={() =>
//                                         handleAnswer("service", "website")
//                                     }
//                                 />

//                                 <OptionCard
//                                     title="Mobile App Development"
//                                     icon="📱"
//                                     selected={answers.service === "mobile-app"}
//                                     onClick={() =>
//                                         handleAnswer("service", "mobile-app")
//                                     }
//                                 />

//                                 <OptionCard
//                                     title="E-commerce Development"
//                                     icon="🛒"
//                                     selected={answers.service === "ecommerce"}
//                                     onClick={() =>
//                                         handleAnswer("service", "ecommerce")
//                                     }
//                                 />

//                                 <OptionCard
//                                     title="Digital Marketing"
//                                     icon="📣"
//                                     selected={answers.service === "marketing"}
//                                     onClick={() =>
//                                         handleAnswer("service", "marketing")
//                                     }
//                                 />

//                             </div>

//                             {errors.service && (
//                                 <p className="mt-3 text-sm text-red-600">
//                                     {errors.service}
//                                 </p>
//                             )}
//                         </div>
//                     )}


//                     {/* STEP 2 */}

//                     {currentStep === 2 && (
//                         <div>

//                             <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
//                                 {answers.service === "website" &&
//                                     "What type of website do you need?"}

//                                 {answers.service === "mobile-app" &&
//                                     "Which platform do you need?"}

//                                 {answers.service === "ecommerce" &&
//                                     "How many products do you have?"}

//                                 {answers.service === "marketing" &&
//                                     "What is your main marketing goal?"}
//                             </h1>

//                             <p className="mt-2 text-slate-500">
//                                 Choose the option that best describes your project.
//                             </p>


//                             <div className="mt-8 space-y-3">

//                                 {/* Website */}
//                                 {answers.service === "website" && (
//                                     <>
//                                         <RadioOption
//                                             label="Business Website"
//                                             value="business"
//                                             selected={answers.conditionalAnswer === "business"}
//                                             onClick={() =>
//                                                 handleAnswer(
//                                                     "conditionalAnswer",
//                                                     "business"
//                                                 )
//                                             }
//                                         />

//                                         <RadioOption
//                                             label="Portfolio Website"
//                                             value="portfolio"
//                                             selected={answers.conditionalAnswer === "portfolio"}
//                                             onClick={() =>
//                                                 handleAnswer(
//                                                     "conditionalAnswer",
//                                                     "portfolio"
//                                                 )
//                                             }
//                                         />

//                                         <RadioOption
//                                             label="Landing Page"
//                                             value="landing-page"
//                                             selected={answers.conditionalAnswer === "landing-page"}
//                                             onClick={() =>
//                                                 handleAnswer(
//                                                     "conditionalAnswer",
//                                                     "landing-page"
//                                                 )
//                                             }
//                                         />

//                                         <RadioOption
//                                             label="Web Application"
//                                             value="web-app"
//                                             selected={answers.conditionalAnswer === "web-app"}
//                                             onClick={() =>
//                                                 handleAnswer(
//                                                     "conditionalAnswer",
//                                                     "web-app"
//                                                 )
//                                             }
//                                         />
//                                     </>
//                                 )}


//                                 {/* Mobile App */}
//                                 {answers.service === "mobile-app" && (
//                                     <>
//                                         <RadioOption
//                                             label="Android"
//                                             value="android"
//                                             selected={answers.conditionalAnswer === "android"}
//                                             onClick={() =>
//                                                 handleAnswer(
//                                                     "conditionalAnswer",
//                                                     "android"
//                                                 )
//                                             }
//                                         />

//                                         <RadioOption
//                                             label="iOS"
//                                             value="ios"
//                                             selected={answers.conditionalAnswer === "ios"}
//                                             onClick={() =>
//                                                 handleAnswer(
//                                                     "conditionalAnswer",
//                                                     "ios"
//                                                 )
//                                             }
//                                         />

//                                         <RadioOption
//                                             label="Android & iOS"
//                                             value="both"
//                                             selected={answers.conditionalAnswer === "both"}
//                                             onClick={() =>
//                                                 handleAnswer(
//                                                     "conditionalAnswer",
//                                                     "both"
//                                                 )
//                                             }
//                                         />
//                                     </>
//                                 )}


//                                 {/* E-commerce */}
//                                 {answers.service === "ecommerce" && (
//                                     <>
//                                         <RadioOption
//                                             label="1 - 50 products"
//                                             value="1-50"
//                                             selected={answers.conditionalAnswer === "1-50"}
//                                             onClick={() =>
//                                                 handleAnswer(
//                                                     "conditionalAnswer",
//                                                     "1-50"
//                                                 )
//                                             }
//                                         />

//                                         <RadioOption
//                                             label="51 - 200 products"
//                                             value="51-200"
//                                             selected={answers.conditionalAnswer === "51-200"}
//                                             onClick={() =>
//                                                 handleAnswer(
//                                                     "conditionalAnswer",
//                                                     "51-200"
//                                                 )
//                                             }
//                                         />

//                                         <RadioOption
//                                             label="201 - 1000 products"
//                                             value="201-1000"
//                                             selected={answers.conditionalAnswer === "201-1000"}
//                                             onClick={() =>
//                                                 handleAnswer(
//                                                     "conditionalAnswer",
//                                                     "201-1000"
//                                                 )
//                                             }
//                                         />

//                                         <RadioOption
//                                             label="1000+ products"
//                                             value="1000+"
//                                             selected={answers.conditionalAnswer === "1000+"}
//                                             onClick={() =>
//                                                 handleAnswer(
//                                                     "conditionalAnswer",
//                                                     "1000+"
//                                                 )
//                                             }
//                                         />
//                                     </>
//                                 )}


//                                 {/* Marketing */}
//                                 {answers.service === "marketing" && (
//                                     <>
//                                         <RadioOption
//                                             label="Brand Awareness"
//                                             value="brand-awareness"
//                                             selected={answers.conditionalAnswer === "brand-awareness"}
//                                             onClick={() =>
//                                                 handleAnswer(
//                                                     "conditionalAnswer",
//                                                     "brand-awareness"
//                                                 )
//                                             }
//                                         />

//                                         <RadioOption
//                                             label="Generate More Leads"
//                                             value="leads"
//                                             selected={answers.conditionalAnswer === "leads"}
//                                             onClick={() =>
//                                                 handleAnswer(
//                                                     "conditionalAnswer",
//                                                     "leads"
//                                                 )
//                                             }
//                                         />

//                                         <RadioOption
//                                             label="Increase Sales"
//                                             value="sales"
//                                             selected={answers.conditionalAnswer === "sales"}
//                                             onClick={() =>
//                                                 handleAnswer(
//                                                     "conditionalAnswer",
//                                                     "sales"
//                                                 )
//                                             }
//                                         />

//                                         <RadioOption
//                                             label="Social Media Growth"
//                                             value="social-media"
//                                             selected={answers.conditionalAnswer === "social-media"}
//                                             onClick={() =>
//                                                 handleAnswer(
//                                                     "conditionalAnswer",
//                                                     "social-media"
//                                                 )
//                                             }
//                                         />
//                                     </>
//                                 )}

//                             </div>

//                             {errors.conditionalAnswer && (
//                                 <p className="mt-3 text-sm text-red-600">
//                                     {errors.conditionalAnswer}
//                                 </p>
//                             )}

//                         </div>
//                     )}

//                     {/* STEP 3 */}

//                     {currentStep === 3 && (
//                         <div>

//                             <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
//                                 What is your budget?
//                             </h1>

//                             <p className="mt-2 text-slate-500">
//                                 Choose the approximate budget for your project.
//                             </p>

//                             <div className="mt-8 space-y-3">

//                                 <RadioOption
//                                     label="$500 - $1,000"
//                                     value="500-1000"
//                                     selected={answers.budget === "500-1000"}
//                                     onClick={() =>
//                                         handleAnswer("budget", "500-1000")
//                                     }
//                                 />

//                                 <RadioOption
//                                     label="$1,000 - $3,000"
//                                     value="1000-3000"
//                                     selected={answers.budget === "1000-3000"}
//                                     onClick={() =>
//                                         handleAnswer("budget", "1000-3000")
//                                     }
//                                 />

//                                 <RadioOption
//                                     label="$3,000+"
//                                     value="3000+"
//                                     selected={answers.budget === "3000+"}
//                                     onClick={() =>
//                                         handleAnswer("budget", "3000+")
//                                     }
//                                 />

//                             </div>

//                             {errors.budget && (
//                                 <p className="mt-3 text-sm text-red-600">
//                                     {errors.budget}
//                                 </p>
//                             )}

//                         </div>
//                     )}

//                     {/* STEP 4 */}

//                     {currentStep === 4 && (
//                         <div>

//                             <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
//                                 When do you need it?
//                             </h1>

//                             <p className="mt-2 text-slate-500">
//                                 Select your preferred project timeline.
//                             </p>

//                             <div className="mt-8 space-y-3">

//                                 <RadioOption
//                                     label="ASAP - Less than 1 month"
//                                     value="asap"
//                                     selected={answers.timeline === "asap"}
//                                     onClick={() =>
//                                         handleAnswer("timeline", "asap")
//                                     }
//                                 />

//                                 <RadioOption
//                                     label="1 - 2 months"
//                                     value="1-2-months"
//                                     selected={answers.timeline === "1-2-months"}
//                                     onClick={() =>
//                                         handleAnswer("timeline", "1-2-months")
//                                     }
//                                 />

//                                 <RadioOption
//                                     label="3+ months"
//                                     value="3-months-plus"
//                                     selected={answers.timeline === "3-months-plus"}
//                                     onClick={() =>
//                                         handleAnswer(
//                                             "timeline",
//                                             "3-months-plus"
//                                         )
//                                     }
//                                 />

//                             </div>

//                             {errors.timeline && (
//                                 <p className="mt-3 text-sm text-red-600">
//                                     {errors.timeline}
//                                 </p>
//                             )}

//                         </div>
//                     )}

//                     {/* STEP 5 */}

//                     {currentStep === 5 && (
//                         <form onSubmit={handleSubmit}>

//                             <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
//                                 Let's get your information
//                             </h1>

//                             <p className="mt-2 text-slate-500">
//                                 Please provide your details so we can contact you.
//                             </p>


//                             <div className="mt-8 grid gap-5 sm:grid-cols-2">

//                                 {/* Name */}
//                                 <div>
//                                     <label className="mb-2 block text-sm font-medium text-slate-700">
//                                         Full Name
//                                     </label>

//                                     <input
//                                         type="text"
//                                         name="name"
//                                         value={leadInfo.name}
//                                         onChange={handleLeadInfo}
//                                         placeholder="Enter your full name"
//                                         className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
//                                     />

//                                     {errors.name && (
//                                         <p className="mt-1 text-sm text-red-600">
//                                             {errors.name}
//                                         </p>
//                                     )}
//                                 </div>


//                                 {/* Email */}
//                                 <div>
//                                     <label className="mb-2 block text-sm font-medium text-slate-700">
//                                         Email Address
//                                     </label>

//                                     <input
//                                         type="email"
//                                         name="email"
//                                         value={leadInfo.email}
//                                         onChange={handleLeadInfo}
//                                         placeholder="Enter your email"
//                                         className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
//                                     />

//                                     {errors.email && (
//                                         <p className="mt-1 text-sm text-red-600">
//                                             {errors.email}
//                                         </p>
//                                     )}
//                                 </div>


//                                 {/* Phone */}
//                                 <div>
//                                     <label className="mb-2 block text-sm font-medium text-slate-700">
//                                         Phone Number
//                                     </label>

//                                     <input
//                                         type="tel"
//                                         name="phone"
//                                         value={leadInfo.phone}
//                                         onChange={handleLeadInfo}
//                                         placeholder="Enter your phone number"
//                                         className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
//                                     />

//                                     {errors.phone && (
//                                         <p className="mt-1 text-sm text-red-600">
//                                             {errors.phone}
//                                         </p>
//                                     )}
//                                 </div>


//                                 {/* Company */}
//                                 <div>
//                                     <label className="mb-2 block text-sm font-medium text-slate-700">
//                                         Company Name
//                                     </label>

//                                     <input
//                                         type="text"
//                                         name="company"
//                                         value={leadInfo.company}
//                                         onChange={handleLeadInfo}
//                                         placeholder="Enter your company"
//                                         className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
//                                     />
//                                 </div>

//                             </div>

//                         </form>
//                     )}


//                     {/* NAVIGATION BUTTONS */}

//                     <div className="mt-10 flex items-center justify-between border-t border-slate-100 pt-6">

//                         <button
//                             type="button"
//                             onClick={handleBack}
//                             disabled={currentStep === 1}
//                             className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
//                         >
//                             ← Back
//                         </button>


//                         {currentStep < 5 ? (
//                             <button
//                                 type="button"
//                                 onClick={handleNext}
//                                 className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
//                             >
//                                 Next →
//                             </button>
//                         ) : (
//                             <button
//                                 type="submit"
//                                 onClick={handleSubmit}
//                                 className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
//                             >
//                                 Get My Recommendation →
//                             </button>
//                         )}

//                     </div>

//                 </div>

//             </div>

//         </section>
//     );
// };

// // REUSABLE OPTION CARD

// const OptionCard = ({ title, icon, selected, onClick }) => {
//     return (
//         <button
//             type="button"
//             onClick={onClick}
//             className={`rounded-xl border p-5 text-left transition ${selected
//                     ? "border-blue-600 bg-blue-50 ring-2 ring-blue-100"
//                     : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
//                 }`}
//         >
//             <div className="text-2xl">{icon}</div>

//             <p className="mt-3 font-semibold text-slate-800">
//                 {title}
//             </p>
//         </button>
//     );
// };

// // REUSABLE RADIO OPTION

// const RadioOption = ({ label, selected, onClick }) => {
//     return (
//         <button
//             type="button"
//             onClick={onClick}
//             className={`flex w-full items-center justify-between rounded-xl border px-5 py-4 text-left transition ${selected
//                     ? "border-blue-600 bg-blue-50"
//                     : "border-slate-200 hover:border-blue-300"
//                 }`}
//         >
//             <span className="font-medium text-slate-700">
//                 {label}
//             </span>

//             <span
//                 className={`flex h-5 w-5 items-center justify-center rounded-full border ${selected
//                         ? "border-blue-600"
//                         : "border-slate-300"
//                     }`}
//             >
//                 {selected && (
//                     <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
//                 )}
//             </span>
//         </button>
//     );
// };

// export default Qualification;


import { useState } from "react";
import ProgressBar from "../components/MultiStepForm/ProgressBar";
import OptionCard from "../components/MultiStepForm/OptionCard";
import RadioOption from "../components/MultiStepForm/RadioOption";
import LeadForm from "../components/MultiStepForm/LeadForm";

import {
    serviceOptions,
    conditionalOptions,
    budgetOptions,
    timelineOptions,
} from "../data/Questions";
import { useNavigate } from "react-router";


const Qualification = () => {

    const navigate = useNavigate();


    // STEP
    const [currentStep, setCurrentStep] = useState(1);


    // ANSWERS
    const [answers, setAnswers] = useState({
        service: "",
        conditionalAnswer: "",
        budget: "",
        timeline: "",
    });


    // LEAD INFORMATION
    const [leadInfo, setLeadInfo] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
    });


    // ERRORS
    const [errors, setErrors] = useState({});


    // HANDLE QUESTION ANSWER
    const handleAnswer = (field, value) => {

        setAnswers((previous) => ({
            ...previous,
            [field]: value,
        }));


        // If service changes,
        // remove previous conditional answer.
        if (field === "service") {
            setAnswers((previous) => ({
                ...previous,
                service: value,
                conditionalAnswer: "",
            }));
        }


        setErrors((previous) => ({
            ...previous,
            [field]: "",
        }));
    };


    // HANDLE LEAD INPUT
    const handleLeadInfo = (event) => {

        const { name, value } = event.target;

        setLeadInfo((previous) => ({
            ...previous,
            [name]: value,
        }));


        setErrors((previous) => ({
            ...previous,
            [name]: "",
        }));
    };


    // VALIDATION
    const validateStep = () => {

        const newErrors = {};


        // Step 1
        if (currentStep === 1 && !answers.service) {
            newErrors.service = "Please select a service.";
        }


        // Step 2
        if (
            currentStep === 2 &&
            !answers.conditionalAnswer
        ) {
            newErrors.conditionalAnswer =
                "Please select an option.";
        }


        // Step 3
        if (currentStep === 3 && !answers.budget) {
            newErrors.budget =
                "Please select your budget.";
        }


        // Step 4
        if (currentStep === 4 && !answers.timeline) {
            newErrors.timeline =
                "Please select your timeline.";
        }


        // Step 5
        if (currentStep === 5) {

            if (!leadInfo.name.trim()) {
                newErrors.name =
                    "Name is required.";
            }


            if (!leadInfo.email.trim()) {
                newErrors.email =
                    "Email is required.";
            } else if (
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                    leadInfo.email
                )
            ) {
                newErrors.email =
                    "Please enter a valid email.";
            }


            if (!leadInfo.phone.trim()) {
                newErrors.phone =
                    "Phone number is required.";
            }
        }


        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };


    // NEXT
    const handleNext = () => {

        const isValid = validateStep();

        if (!isValid) return;


        if (currentStep < 5) {
            setCurrentStep(
                (previous) => previous + 1
            );
        }
    };


    // BACK
    const handleBack = () => {

        if (currentStep > 1) {
            setCurrentStep(
                (previous) => previous - 1
            );
        }
    };


    // SUBMIT
    const handleSubmit = (event) => {

        event.preventDefault();


        const isValid = validateStep();

        if (!isValid) return;


        const leadData = {
            answers,
            leadInfo,
        };


        // Save temporarily in browser
        sessionStorage.setItem(
            "leadQualification",
            JSON.stringify(leadData)
        );


        // Go to result page
        navigate("/result", {
            state: leadData,
        });
    };


    return (
        <section className="min-h-screen px-4 py-12">

            <div className="mx-auto max-w-3xl">

                <ProgressBar
                    currentStep={currentStep}
                    totalSteps={5}
                />

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
                    {/* ================================= */}
                    {/* STEP 1 */}
                    {currentStep === 1 && (
                        <div>

                            <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
                                What type of service do you need?
                            </h1>

                            <p className="mt-2 text-slate-500">
                                Select the service that best fits your requirements.
                            </p>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">

                                {serviceOptions.map(
                                    (option) => (
                                        <OptionCard
                                            key={option.value}
                                            title={option.label}
                                            icon={option.icon}
                                            selected={
                                                answers.service ===
                                                option.value
                                            }
                                            onClick={() =>
                                                handleAnswer(
                                                    "service",
                                                    option.value
                                                )
                                            }
                                        />
                                    )
                                )}

                            </div>

                            {errors.service && (
                                <p className="mt-3 text-sm text-red-600">
                                    {errors.service}
                                </p>
                            )}

                        </div>
                    )}

                    {/* ================================= */}
                    {/* STEP 2 */}
                    {currentStep === 2 && (
                        <div>

                            <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">

                                {answers.service === "website" &&
                                    "What type of website do you need?"}

                                {answers.service === "mobile-app" &&
                                    "Which platform do you need?"}

                                {answers.service === "ecommerce" &&
                                    "How many products do you have?"}

                                {answers.service === "marketing" &&
                                    "What is your main marketing goal?"}

                            </h1>


                            <p className="mt-2 text-slate-500">
                                Choose the option that best describes your project.
                            </p>


                            <div className="mt-8 space-y-3">

                                {conditionalOptions[
                                    answers.service
                                ]?.map((option) => (

                                    <RadioOption
                                        key={option.value}
                                        label={option.label}
                                        selected={
                                            answers.conditionalAnswer ===
                                            option.value
                                        }
                                        onClick={() =>
                                            handleAnswer(
                                                "conditionalAnswer",
                                                option.value
                                            )
                                        }
                                    />

                                ))}

                            </div>


                            {errors.conditionalAnswer && (
                                <p className="mt-3 text-sm text-red-600">
                                    {errors.conditionalAnswer}
                                </p>
                            )}

                        </div>
                    )}


                    {/* ================================= */}
                    {/* STEP 3 */}

                    {currentStep === 3 && (
                        <div>

                            <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
                                What is your budget?
                            </h1>

                            <p className="mt-2 text-slate-500">
                                Choose the approximate budget for your project.
                            </p>


                            <div className="mt-8 space-y-3">

                                {budgetOptions.map(
                                    (option) => (

                                        <RadioOption
                                            key={option.value}
                                            label={option.label}
                                            selected={
                                                answers.budget ===
                                                option.value
                                            }
                                            onClick={() =>
                                                handleAnswer(
                                                    "budget",
                                                    option.value
                                                )
                                            }
                                        />

                                    )
                                )}

                            </div>


                            {errors.budget && (
                                <p className="mt-3 text-sm text-red-600">
                                    {errors.budget}
                                </p>
                            )}

                        </div>
                    )}


                    {/* ================================= */}
                    {/* STEP 4 */}

                    {currentStep === 4 && (
                        <div>

                            <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
                                When do you need it?
                            </h1>

                            <p className="mt-2 text-slate-500">
                                Select your preferred project timeline.
                            </p>


                            <div className="mt-8 space-y-3">

                                {timelineOptions.map(
                                    (option) => (

                                        <RadioOption
                                            key={option.value}
                                            label={option.label}
                                            selected={
                                                answers.timeline ===
                                                option.value
                                            }
                                            onClick={() =>
                                                handleAnswer(
                                                    "timeline",
                                                    option.value
                                                )
                                            }
                                        />

                                    )
                                )}

                            </div>


                            {errors.timeline && (
                                <p className="mt-3 text-sm text-red-600">
                                    {errors.timeline}
                                </p>
                            )}

                        </div>
                    )}


                    {/* ================================= */}
                    {/* STEP 5 */}

                    {currentStep === 5 && (
                        <LeadForm
                            leadInfo={leadInfo}
                            errors={errors}
                            onChange={handleLeadInfo}
                        />
                    )}


                    {/* ================================= */}
                    {/* NAVIGATION */}

                    <div className="mt-10 flex items-center justify-between border-t border-slate-100 pt-6">

                        <button
                            type="button"
                            onClick={handleBack}
                            disabled={currentStep === 1}
                            className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            ← Back
                        </button>


                        {currentStep < 5 ? (

                            <button
                                type="button"
                                onClick={handleNext}
                                className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                            >
                                Next →
                            </button>

                        ) : (

                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                            >
                                Get My Recommendation →
                            </button>

                        )}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Qualification;