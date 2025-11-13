import "./Project.css"


function Projects(props) {
    return (
        <div className="Profile">
          <h2>Project Name: {props.projectName} </h2>
          <img className="img" src={props.projectImg}></img>
        <div className="repoLink">
            <h3>Github repo link: </h3>
              <a href= {props.githubRepo}></a>
        </div>
          <h3>Tech used: {props.tech} </h3>
          <p>Short description about project: {props.shortDesc}</p>
        </div>
    )
}
export default Projects;