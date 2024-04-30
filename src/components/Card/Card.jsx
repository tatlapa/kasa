import "./Card.scss";
import { Link } from "react-router-dom";
import datas from "../../datas/data.json";

const Card = () => {
  return (
    <div className="cards-container">
      <div className="cards">
        {datas.map((data) => {
          return (
            <Link key={data.id} to={`/kasa/store/${data.id}`} className="card">
              <div className="card-gradient"></div>
              <img src={data.cover} className="card-cover"></img>
              <h2 className="card-title">{data.title}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
