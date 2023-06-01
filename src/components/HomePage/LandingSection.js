import { React } from "react";

function LandingSection () {
    return (
        <div className="container-flex align-items-center text-center">
            <img className="rounded mx-auto d-block" src="main-title.png" alt="Mybrary Books" />
            <blockquote className="blockquote">
               <p>A random literary quote will be here</p>
            </blockquote>
        </div>
    );
}

export default LandingSection;