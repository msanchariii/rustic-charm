import { contacts } from "@/constants/data";
import { Info, Mail, MapPinIcon, PhoneCall, Plane } from "lucide-react";

function Contact() {
    return (
        <div
            className="w-full max-w-7xl mx-auto p-4 min-h-screen space-y-16  "
            id="contact"
        >
            <div className="space-y-4 p-2">
                <h1 className="text-4xl font-medium text-left">Contact Us</h1>
                <h2>
                    We are always here to help you. Feel free to contact us for
                    any queries.
                </h2>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between">
                <div className="w-full md:w-1/2 divide-y-2 p-2 md:order-2">
                    {/* address */}
                    <ContactItem title="Address" description={contacts.address}>
                        <MapPinIcon />
                    </ContactItem>
                    {/* how to reach */}
                    <ContactItem
                        title="How to Reach"
                        description={contacts.howToReach}
                    >
                        <Plane />
                    </ContactItem>
                    {/* phone number */}
                    <ContactItem
                        title="Phone"
                        description={`${contacts.phone[0]}, ${contacts.phone[1]}`}
                    >
                        <PhoneCall />
                    </ContactItem>
                    {/* email */}
                    <ContactItem title="Email" description={contacts.email}>
                        <Mail />
                    </ContactItem>
                    <div className="py-4 my-2 px-1 flex space-x-3">
                        <div className="p-2">
                            {/* <div className="h-[36px] aspect-square bg-purple-500 rounded-full"></div> */}
                            <Info height={28} width={28} />
                        </div>
                        {/* <div className="space-y-2"> */}
                        <h2 className="text-base md:text-lg py-3 font-medium text-slate-700">
                            Call us to book !
                        </h2>
                        {/* </div> */}
                    </div>
                </div>
                {/* <div className="overflow-hidden rounded-full bg-rose-400 h-[124px] w-[124px]"> */}
                <div className="p-2 w-full max-w-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.62775660904!2d88.35101707544067!3d26.947012976626695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e43b0026b2e2ff%3A0xb9f7ab67ff99e008!2sRustic%20charm%20homestay!5e0!3m2!1sen!2sin!4v1736330925688!5m2!1sen!2sin"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        className="w-full aspect-square p-1 m-2 rounded-2xl border shadow-lg "
                    ></iframe>
                </div>
                {/* </div> */}
            </div>
        </div>
    );
}

export default Contact;

function ContactItem({ title, description, children }) {
    return (
        <div className="py-4 my-2 px-1 items-center flex space-x-3">
            <div className="p-2">
                {children}
                {/* <div className="h-[36px] aspect-square bg-purple-500 rounded-full"></div> */}
            </div>
            <div className="space-y-2">
                <h2 className="text-base md:text-lg font-medium">{title}</h2>
                <p className="text-sm md:text-base font-light max-w-md">
                    {description}
                </p>
            </div>
        </div>
    );
}
