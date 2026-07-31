import { Link } from "react-router-dom";
import "./SummaryCard.css";

function SummaryCard({ title, count, listRoute, newRoute, type }) {
    return (
        <div className="summary-card">
            <h2>{title}</h2>
            <p>
                Cantidad registrada: <strong>{count}</strong>
            </p>
            <div className="buttons">
                <Link to={listRoute} className="btn">
                    Ver Lista
                </Link>
                <Link to={newRoute} className="btn">
                    {type === "product" 
                        ? "Agregar producto" 
                        : "Agregar categoría"}
                </Link>
            </div>
        </div>
    );
}

export default SummaryCard;