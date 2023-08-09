import "./ProjectDetails.css";

function ProjectDetails({ appData }) {
  const tryMyApp = () => {window.open(appData.simulationLink, "_blank");};
  return (
    <div className="project-details">
      <h1 className="primary-font-color">{appData.name}</h1>
      <div className="details-container">
        <div className="details-describtion">
          {appData.describtion.map((describtion, index) => {
            return <p key={index} className="primary-font-color">{describtion}</p>;
          })}
          <button
            className="btn-custom"
            onClick={tryMyApp}
          >{`Wypróbuj aplikację ${appData.name}`}</button>
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
