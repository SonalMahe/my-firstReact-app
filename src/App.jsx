import Project from "../src/component/Project.jsx";
function App() {
    return (
        <>
            <Project
                projectName="Duck-FormValidation"
                projectImg="../src/assets/image2.png"
                githubRepo="https://github.com/SonalMahe/DuckformA8"
                tech="HTML n CSS" 
                shortDesc="I am learing how to create form validation by using input & label fields"></Project>
                 
                <Project
                projectName="Productly FigmaFile"
                projectImg="../src/assets/image3.png"
                githubRepo="https://github.com/SonalMahe/ProductlyA7"
                tech="Grid,CSS and Flexbox" 
                shortDesc="I am learing how to align,making grid and using of flexbox."></Project>
                
                <Project
                projectName="Kindergatan project"
                projectImg="../src/assets/capture.JPG"
                githubRepo="https://github.com/SonalMahe/CssFrameworksA15"
                tech="Bootstrap, Animation ,CSS Frameworks" 
                shortDesc="I am learing diff CSS frameworks by using Bootstrap"></Project>
             
        </>
    )
}
export default App
