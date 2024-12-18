import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, mobile, message } = formData;

        // Validation
        if (!name || !email || !mobile || !message) {
            toast.error("Please fill in all fields before submitting the form!", {
                position: "top-center",
            });
            return;
        }

        if (!/^[6-9]\d{9}$/.test(mobile)) {
            toast.error("Please enter a valid 10-digit mobile number!", {
                position: "top-center",
            });
            return;
        }

        // Personalized success toast
        toast.success(`Thank you, ${name}! 😊 Our team will contact you soon.`, {
            position: "top-center",
        });

        // Clear form
        setFormData({
            name: "",
            email: "",
            mobile: "",
            message: "",
        });
    };

    return (
        <div>
            <section className="text-gray-700 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl md:text-5xl title-font font-bold text-[#5DB996]">
                            Contact Us
                        </h1>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <form className="flex flex-wrap -m-2" onSubmit={handleSubmit}>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label className="leading-7 text-sm text-gray-600">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        placeholder="Enter your name"
                                        onChange={handleChange}
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-[#5DB996] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label className="leading-7 text-sm text-gray-600">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        placeholder="Enter your email"
                                        onChange={handleChange}
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-[#5DB996] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label className="leading-7 text-sm text-gray-600">
                                        Mobile Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        value={formData.mobile}
                                        placeholder="Enter 10-digit mobile number"
                                        onChange={handleChange}
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-[#5DB996] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label className="leading-7 text-sm text-gray-600">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        placeholder="Enter your message"
                                        onChange={handleChange}
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-[#5DB996] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button
                                    type="submit"
                                    className="flex mx-auto border rounded-full bg-white font-semibold text-[#5DB996] py-2 px-8 focus:outline-none hover:bg-[#5DB996] hover:text-white hover:border-[#5DB996] text-lg"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* Toastify Container */}
            <ToastContainer />
        </div>
    );
}
