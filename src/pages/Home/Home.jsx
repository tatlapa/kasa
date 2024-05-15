import Banner from "../../components/Banner/Banner.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Card from "../../components/Card/Card.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import datas from "../../datas/data.json";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner
        image="/kasa/src/assets/home.png"
        title="Chez vous, partout et ailleurs"
        opacity={Number(0.6)}
      />
      <div className="cards-container">
        <div className="cards">
          {datas.map((accomodation) => (
            <Card
              key={accomodation.id}
              id={accomodation.id}
              cover={accomodation.cover}
              title={accomodation.title}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
