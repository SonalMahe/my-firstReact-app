import "./Project.css"


function Projects(props) {
    return (
        <div className="Profile">
          <h1>Project Name: {props.projectName} </h1>
          <img className="img" src={props.projectImg}></img>
          <h3>Github repo link: {props.githubRepo} </h3>
          <h3>Tech used: {props.tech} </h3>
          <p>Short description about project : {props.shortDesc}</p>
        </div>
    )
}
export default Projects;