import Banner from "../../components/Banner/Banner.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Card from "../../components/Card/Card.jsx";
import Footer from "../../components/Footer/Footer.jsx";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner image="/kasa/src/assets/home.png" title="Chez vous, partout et ailleurs" opacity={Number(0.6)}/>
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
