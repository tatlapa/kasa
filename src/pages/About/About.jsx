import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <Banner image="../src/assets/about.jpeg" title="" opacity={Number(0.6)}/>
        <Footer />
      </div>
    </>
  );
};

export default About;
