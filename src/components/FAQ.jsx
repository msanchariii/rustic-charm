import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/Accordion";
import { faq } from "@/constants/data";

function FAQ() {
    return (
        <div id="faq" className="  ">
            <div className="w-full bg-sky-50/40 py-12 space-y-6">
                <div className="w-full max-w-7xl mx-auto p-2">
                    <h2 className="text-3xl text-left p-2">FAQs</h2>
                    <p className="p-2 italic text-5xl max-w-5xl text-slate-600 font-extralight">
                        Frequently asked questions about our services and
                        amenities.
                    </p>
                </div>
                <div>
                    {faq.map((item, index) => (
                        <div
                            key={index}
                            className="w-full mx-auto max-w-7xl flex flex-col md:flex-row p-2 gap-12 md:justify-between"
                        >
                            <div className="min-w-52 p-2">
                                <p className="py-4 text-xl font-medium text-slate-700">
                                    {item.subject}
                                </p>
                            </div>
                            <div className="flex-grow p-3">
                                {item.faqs.map(
                                    ({ question, answer }, faqIndex) => {
                                        return (
                                            <Question
                                                question={question}
                                                answer={answer}
                                                key={`${index}-${faqIndex}`}
                                            />
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FAQ;

const Question = ({ question, answer }) => {
    return (
        <Accordion type="single" collapsible className="max-w-3xl ml-auto">
            <AccordionItem value="item-1">
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};
