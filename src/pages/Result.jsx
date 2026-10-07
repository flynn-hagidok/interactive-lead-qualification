import { useEffect, useState } from "react";
import getRecommendation from "../utils/Recommendation";
import { Link, useLocation } from "react-router";


const Result = () => {

    const location = useLocation();

    const [leadData, setLeadData] = useState(
        location.state || null
    );


    useEffect(() => {
        if (!location.state) {

            const savedData =
                sessionStorage.getItem(
                    "leadQualification"
                );

            if (savedData) {

                setLeadData(
                    JSON.parse(savedData)
                );
            }
        }

    }, [location.state]);


    if (!leadData) {
        return (
            <section className="flex min-h-screen items-center justify-center bg-slate-50 px-4">

                <div className="text-center">

                    <h1 className="text-2xl font-bold text-slate-900">
                        No recommendation found
                    </h1>

                    <p className="mt-2 text-slate-500">
                        Please complete the qualification form first.
                    </p>

                    <Link
                        to="/qualify"
                        className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
                    >
                        Start Qualification
                    </Link>

                </div>

            </section>
        );
    }


    const recommendation =
        getRecommendation(leadData.answers);


    return (
        <section className="min-h-screen bg-slate-50 px-4 py-16">

            <div className="mx-auto max-w-3xl">

                {/* Recommendation Card */}

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">

                    {/* Badge */}

                    <div className="text-center">

                        <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
                            ✨ Your Recommended Service
                        </span>


                        <h1 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
                            {recommendation.title}
                        </h1>


                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-500">
                            {recommendation.description}
                        </p>

                    </div>


                    {/* Feature List */}

                    <div className="mt-10">

                        <h2 className="text-lg font-bold text-slate-900">
                            Why this is a good fit
                        </h2>


                        <div className="mt-5 space-y-3">

                            {recommendation.features.map(
                                (feature) => (

                                    <div
                                        key={feature}
                                        className="flex items-center gap-3 rounded-lg bg-slate-50 p-4"
                                    >
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-sm text-green-600">
                                            ✓
                                        </span>

                                        <span className="text-slate-700">
                                            {feature}
                                        </span>
                                    </div>

                                )
                            )}

                        </div>

                    </div>


                    {/* User Greeting */}

                    <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-5">

                        <p className="text-sm leading-6 text-slate-600">

                            Thanks{" "}

                            <span className="font-semibold text-slate-900">
                                {leadData.leadInfo.name}
                            </span>

                            ! Based on the information you provided,
                            we believe this service is a strong match
                            for your requirements.

                        </p>

                    </div>


                    {/* CTA */}

                    <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">

                        <Link
                            to="/contact"
                            className="rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
                        >
                            Talk to an Expert →
                        </Link>


                        <Link
                            to="/"
                            className="rounded-lg border border-slate-300 px-6 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-50"
                        >
                            Back to Home
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Result;