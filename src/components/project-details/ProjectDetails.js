import "./ProjectDetails.css";
import { FaGithubSquare } from "react-icons/fa";

function ProjectDetails({ appData }) {
  const tryMyApp = () => {
    window.open(appData.simulationLink, "_blank");
  };
  const gitHubApp = () => {
    window.open(appData.gitHubLink, "_blank");
  };
  return (
    <div className="project-details">
      <h1 className="primary-font-color">{appData.name}</h1>
      <div className="details-container">
        <div className="details-description">
          {appData.description.map((description, index) => {
            return (
              <p key={index} className="primary-font-color">
                {description}
              </p>
            );
          })}
          {appData.simulationLink ? (
            <button
              className="btn-custom primary-font-color"
              onClick={tryMyApp}
            >{`Wypróbuj aplikację ${appData.name}`}</button>
          ) : (
            <></>
          )}
          <br />
          {appData.gitHubLink ? (
            <button
              className="btn-custom primary-font-color"
              onClick={gitHubApp}
            >
              <FaGithubSquare size={30} />
              {`Repozytorium ${appData.name} w serwisie GitHub`}
            </button>
          ) : (
            <></>
          )}
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
