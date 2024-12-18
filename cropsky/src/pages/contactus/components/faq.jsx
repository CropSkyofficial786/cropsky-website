import { useState } from "react";

const FAQAccordion = () => {
    // Sample FAQ Data (Dynamic)
    const faqs = [
        {
            question: "What services does CropSky offer?",
            answer: "We provide advanced drone solutions for both agriculture and defence, including precision farming, crop health monitoring, fertiliser spraying, border surveillance, communication relays, and anti-drone systems.",
        },
        {
            question: "How do your drones help farmers?",
            answer: "Our drones enable farmers to monitor crop health, optimise irrigation, assess damage, and spray fertilisers with precision, improving crop yields and reducing resource waste.",
        },
        {
            question: " What makes CropSky's drones unique?",
            answer: "Our drones are equipped with cutting-edge technology, including AI-powered analytics and high-precision sensors, designed to tackle real-world challenges in agriculture and defence.",
        },
        {
            question: "What is the SSV grant, and how did CropSky benefit from it?",
            answer: "The SSV grant is a funding initiative that awarded CropSky ₹1.8 lakh, allowing us to accelerate our development and bring our drone solutions to the market faster.",
        },
        {
            question: "How can I get in touch with CropSky?",
            answer: "You can reach us through the contact form on our website, or email us directly at cropsky.official@gmail.com.",
        },
        {
            question: "Where is CropSky located?",
            answer: "Currently CropSky is based at VIT Vellore, where we continue to innovate and develop our drone technology solutions.",
        },
        {
            question: "What’s next for CropSky?",
            answer: "We plan to expand our services, improve our drone technology, and work on further enhancing both agricultural and defence sectors through innovative solutions.",
        },
        {
            question: "How can I join the CropSky team?",
            answer: "We’re always looking for passionate individuals to join our team. Check our careers page for open positions and internship opportunities!",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index); // Toggle active state
    };

    return (
        <div className=" mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold text-center mb-8 text-[#5DB996]">Frequently Asked Questions</h1>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border rounded-md overflow-hidden shadow-sm">
                        <div
                            className={`flex justify-between items-center p-4 cursor-pointer bg-gray-100 hover:bg-gray-200 transition duration-200 ${activeIndex === index ? 'bg-gray-200' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                            <svg
                                className={`h-6 w-6 transition-transform duration-200 ${activeIndex === index ? 'transform rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                        <div className={`max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-screen p-4 bg-white' : ''}`}>
                            <p className="text-gray-700">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQAccordion;
