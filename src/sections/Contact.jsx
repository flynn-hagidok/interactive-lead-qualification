import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Contact = () => {
    return (
        <section id="contact" className="min-h-screen scroll-mt-20 py-30 md:py-80 lg:py-40 px-6">
            <div className="max-w-7xl mx-auto flex flex-wrap gap-10">
                <div className="space-y-4">
                    <p className="text-blue-500 uppercase font-semibold">Get in Touch</p>
                    <h2 className="font-bold text-3xl lg:text-4xl">Let&apos;s Talk About Your Project</h2>
                    <p className="opacity-80 md:w-1/2">Have an idea or a business challenge? Tell us what you need and let&apos;s find the right digital solution for you.</p>

                    <div className="flex flex-wrap gap-4 font-semibold">
                        <p className="flex items-center gap-2"><MdEmail /> Email: biswas@it.com</p>
                        <p className="flex items-center gap-2"><FaPhoneAlt /> Phone: +880 1782541901</p>
                    </div>
                </div>
                <div>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                            <div className="space-y-2">
                                <label htmlFor="name" className="block">Your Name</label>
                                <input type="text" name="name" id="name" className="border rounded-md px-4 py-2 w-full" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="block">Email Address</label>
                                <input type="email" name="email" id="email" className="border rounded-md px-4 py-2 w-full" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="subject" className="block">Subject</label>
                            <input type="text" name="subject" id="subject" className="border rounded-md px-4 py-2 w-full" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="block">Message</label>
                            <textarea name="message" id="message" cols={50} rows={3} className="border rounded-md px-4 py-2 w-full"></textarea>
                        </div>

                        <button type="submit" className="bg-blue-600 text-center w-full rounded-md py-2 text-white font-semibold">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default Contact;