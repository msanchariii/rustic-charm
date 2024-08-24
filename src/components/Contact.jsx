function Contact() {
    return (
        <div className="w-full max-w-7xl mx-auto p-4 min-h-screen space-y-16">
            <h2 className="text-4xl font-bold text-center">Contact Us</h2>
            <div className="flex justify-center">
                <div className="w-1/2">Contact</div>
                <iframe
                    className="w-1/2 rounded-lg border shadow-lg "
                    height="500"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/?ie=UTF8&t=m&ll=13.2164639,74.995161&spn=0.003381,0.017231&z=16&output=embed"
                ></iframe>
            </div>
        </div>
    );
}

export default Contact;
