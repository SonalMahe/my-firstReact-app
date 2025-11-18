import Project from "../component/Project.jsx"
import { useState } from "react";

function Portfolio() {
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={() => setShow(!show)}>
                {show ? "Hide Details" : "Show Details"}</button>
            <h1>This is portfolio page</h1>


            {show && (<Project
                projectName="Duck-FormValidation"
                projectImg="../src/assets/image2.png"
                githubRepo="https://github.com/SonalMahe/DuckformA8"
                tech="HTML n CSS"
                shortDesc="I am learing how to create form validation by using input & label fields">
            </Project>)}

            {show && (<Project
                projectName="Productly FigmaFile"
                projectImg="../src/assets/image3.png"
                githubRepo="https://github.com/SonalMahe/ProductlyA7"
                tech="Grid,CSS and Flexbox"
                shortDesc="I am learing how to align,making grid and using of flexbox.">

            </Project>)}

            {show && (<Project
                projectName="Kindergatan project"
                projectImg="../src/assets/capture.JPG"
                githubRepo="https://github.com/SonalMahe/CssFrameworksA15"
                tech="Bootstrap, Animation ,CSS Frameworks"
                shortDesc="I am learing diff CSS frameworks by using Bootstrap"></Project>
            )}
        </>
    )
}

export default Portfolio;