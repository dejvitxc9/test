import "./ProjectDetails.css";

function ProjectDetails({ appData }) {
  return (
    <div className="project-details">
      <h1 className="primary-font-color">{appData.name}</h1>
      <div className="details-container">
        <div className="details-describtion">
          {appData.describtion.map((describtion) => {return <p className="primary-font-color">{describtion}</p>})}
        </div>
        <div className="details-picture-container">
          <img
            src={`pictures/${appData.imageLink}`}
            alt="zdjęcie projektu"
            className="details-picture"
          />
        </div>
      </div>
    </div>
  );
}
export default ProjectDetails;
