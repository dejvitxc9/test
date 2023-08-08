import "./Tile.css"
import { Link } from "react-router-dom";

function Tile ({id, title, imgsrc}){
    console.log(id);
    return(
        <Link to={title} className="tile">
            <img className="project-picture" src={imgsrc} alt={title} />
            <h4 className="project-title primary-font-color">{title}</h4>
        </Link>
    )
}
export default Tile;