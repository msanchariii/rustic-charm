import React from "react";

function About({ className = "", ...props }) {
    return (
        <div className={`min-h-screen ${className}`} id="about">
            About
        </div>
    );
}

export default About;
