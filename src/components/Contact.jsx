import { contacts } from "@/constants/data";

function Contact() {
    return (
        <div className="w-full max-w-7xl mx-auto p-4 min-h-screen space-y-16">
            <div className="space-y-4 p-2">
                <h1 className="text-4xl font-medium text-left">Contact Us</h1>
                <h2>
                    We are always here to help you. Feel free to contact us for
                    any queries.
                </h2>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between">
                <div className="w-1/2 divide-y-2 p-2 md:order-2">
                    {/* address */}
                    <ContactItem
                        title="Address"
                        description={contacts.address}
                    />
                    {/* how to reach */}
                    <ContactItem
                        title="How to Reach"
                        description={contacts.howToReach}
                    />
                    {/* phone number */}
                    <ContactItem
                        title="Phone"
                        description={`${contacts.phone[0]}, ${contacts.phone[1]}`}
                    />
                    {/* email */}
                    <ContactItem title="Email" description={contacts.email} />
                    <div className="py-4 my-2 px-1 flex space-x-3">
                        <div className="p-2 h-full">
                            <div className="h-[36px] aspect-square bg-purple-500 rounded-full"></div>
                        </div>
                        {/* <div className="space-y-2"> */}
                        <h2 className="text-lg py-3 font-medium text-slate-700">
                            Call us to book !
                        </h2>
                        {/* </div> */}
                    </div>
                </div>
                {/* <div className="overflow-hidden rounded-full bg-rose-400 h-[124px] w-[124px]"> */}
                <div className="p-2">
                    <iframe
                        className="w-full aspect-square p-1 m-2 rounded-2xl border shadow-lg "
                        height="500"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://maps.google.com/?ie=UTF8&t=m&ll=13.2164639,74.995161&spn=0.003381,0.017231&z=16&output=embed"
                    ></iframe>
                </div>
                {/* </div> */}
            </div>
        </div>
    );
}

export default Contact;

function ContactItem({ title, description }) {
    return (
        <div className="py-4 my-2 px-1 items-center flex space-x-3">
            <div className="p-2">
                <div className="h-[36px] aspect-square bg-purple-500 rounded-full"></div>
            </div>
            <div className="space-y-2">
                <h2 className="text-lg font-medium">{title}</h2>
                <p className="text-base font-light max-w-md">{description}</p>
            </div>
        </div>
    );
}
