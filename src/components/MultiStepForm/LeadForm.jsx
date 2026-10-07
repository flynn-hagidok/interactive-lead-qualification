const LeadForm = ({
    leadInfo,
    errors,
    onChange,
}) => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Let's get your information
            </h1>

            <p className="mt-2 text-slate-500">
                Please provide your details so we can send you
                your personalized recommendation.
            </p>


            <div className="mt-8 grid gap-5 sm:grid-cols-2">

                {/* Name */}
                <div>
                    <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-slate-700"
                    >
                        Full Name
                    </label>

                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={leadInfo.name}
                        onChange={onChange}
                        placeholder="Enter your full name"
                        className={`w-full rounded-lg border px-4 py-3 outline-none transition focus:ring-2 ${
                            errors.name
                                ? "border-red-500 focus:ring-red-100"
                                : "border-slate-300 focus:border-blue-500 focus:ring-blue-100"
                        }`}
                    />

                    {errors.name && (
                        <p className="mt-1 text-sm text-red-600">
                            {errors.name}
                        </p>
                    )}
                </div>


                {/* Email */}
                <div>
                    <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-slate-700"
                    >
                        Email Address
                    </label>

                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={leadInfo.email}
                        onChange={onChange}
                        placeholder="Enter your email"
                        className={`w-full rounded-lg border px-4 py-3 outline-none transition focus:ring-2 ${
                            errors.email
                                ? "border-red-500 focus:ring-red-100"
                                : "border-slate-300 focus:border-blue-500 focus:ring-blue-100"
                        }`}
                    />

                    {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                            {errors.email}
                        </p>
                    )}
                </div>


                {/* Phone */}
                <div>
                    <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-slate-700"
                    >
                        Phone Number
                    </label>

                    <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={leadInfo.phone}
                        onChange={onChange}
                        placeholder="Enter your phone number"
                        className={`w-full rounded-lg border px-4 py-3 outline-none transition focus:ring-2 ${
                            errors.phone
                                ? "border-red-500 focus:ring-red-100"
                                : "border-slate-300 focus:border-blue-500 focus:ring-blue-100"
                        }`}
                    />

                    {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">
                            {errors.phone}
                        </p>
                    )}
                </div>


                {/* Company */}
                <div>
                    <label
                        htmlFor="company"
                        className="mb-2 block text-sm font-medium text-slate-700"
                    >
                        Company Name
                    </label>

                    <input
                        id="company"
                        type="text"
                        name="company"
                        value={leadInfo.company}
                        onChange={onChange}
                        placeholder="Enter your company"
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                </div>

            </div>
        </div>
    );
};

export default LeadForm;