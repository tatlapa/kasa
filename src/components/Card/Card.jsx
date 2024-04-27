import "./Card.scss";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <>
      <section className="cards-container">
        <div className="cards">
          <div className="card">
            <Link to="/store">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur est consectetur placeat atque assumenda sint cum unde.
              Fuga, similique placeat, repudiandae officia nihil distinctio
              commodi cupiditate quia voluptatem rem dolores.
            </Link>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            est consectetur placeat atque assumenda sint cum unde. Fuga,
            similique placeat, repudiandae officia nihil distinctio commodi
            cupiditate quia voluptatem rem dolores.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            est consectetur placeat atque assumenda sint cum unde. Fuga,
            similique placeat, repudiandae officia nihil distinctio commodi
            cupiditate quia voluptatem rem dolores.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            est consectetur placeat atque assumenda sint cum unde. Fuga,
            similique placeat, repudiandae officia nihil distinctio commodi
            cupiditate quia voluptatem rem dolores.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            est consectetur placeat atque assumenda sint cum unde. Fuga,
            similique placeat, repudiandae officia nihil distinctio commodi
            cupiditate quia voluptatem rem dolores.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            est consectetur placeat atque assumenda sint cum unde. Fuga,
            similique placeat, repudiandae officia nihil distinctio commodi
            cupiditate quia voluptatem rem dolores.
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
