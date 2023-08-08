import "./MyProjects.css";
import Tile from "../tile/Tile";

function MyProject({ sectionTitle, itemList, pointer, className }) {
  return (
    <div className={className} id={pointer}>
      <h2 className="primary-font-color">{sectionTitle}</h2>
      <div className="grid-projects">
        {itemList.map((item, index) => {
          return (
            <Tile
              key={index}
              id={item.id}
              title={item.name}
              imgsrc={`pictures/${item.imageLink}`}
            />
          );
        })}
      </div>
    </div>
  );
}
export default MyProject;
