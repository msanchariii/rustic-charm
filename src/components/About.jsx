import Image from "next/image";
import React from "react";

function About({ className = "", ...props }) {
    return (
        <div className={`min-h-screen w-full p-4 ${className}`} id="about">
            <div className="w-full max-w-7xl mx-auto bg-sky-400/10 rounded-2xl min-h-screen p-12 space-y-16">
                <div className="w-full max-w-7xl mx-auto p-2">
                    <h2 className="text-3xl text-left p-2">About Us</h2>
                    <p className="p-2 italic text-2xl md:text-5xl max-w-5xl text-slate-600 font-extralight">
                        We are a team of professionals who are passionate about
                        providing the best services to our clients.
                    </p>
                </div>
                {/* 3 images */}
                <div className="w-full grid gird-cols-1 md:grid-cols-3 gap-8">
                    <div className="relative h-80 w-full">
                        <Image
                            src="/rustic-charm/assets/image24.jpg"
                            fill={true}
                            alt={"img1"}
                            className="rounded-2xl object-cover"
                        />
                    </div>
                    <div className="relative h-80 w-full">
                        <Image
                            src="/rustic-charm/assets/image16.jpg"
                            fill={true}
                            alt={"img1"}
                            className="rounded-2xl object-cover"
                        />
                    </div>
                    <div className="relative h-80 w-full">
                        <Image
                            src="/rustic-charm/assets/image19.jpg"
                            fill={true}
                            alt={"img1"}
                            className="rounded-2xl object-cover "
                        />
                    </div>
                </div>
                <article>
                    <p className="text-slate-600 font-light text-lg italic">
                        <span className="text-transparent">About</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facere sint maiores exercitationem, reiciendis obcaecati
                        expedita consectetur aliquam omnis ab laudantium et?
                        Voluptatum dolores sunt aut rem qui commodi repellendus
                        dolorum inventore ab itaque aperiam, numquam excepturi a
                        laboriosam perferendis quos delectus vitae corporis
                        impedit sit, deserunt et? Totam quibusdam aliquid odit
                        tempore corporis dolore alias minus facere, aut est
                        porro qui omnis dolor, possimus fugit tenetur!
                        Excepturi, tenetur! Excepturi eius corporis odio porro
                        quam? Qui repudiandae quasi repellat maiores corrupti
                        quam porro nobis dignissimos, numquam nemo illo deleniti
                        sed ex pariatur illum praesentium animi similique
                        molestiae.
                    </p>
                </article>
            </div>
        </div>
    );
}

export default About;
