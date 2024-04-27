import Banner from "../../components/Banner/Banner.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Card from "../../components/Card/Card.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner image="../src/assets/home.png" title="Chez vous, partout et ailleurs"/>
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
