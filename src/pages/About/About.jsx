import "./About.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Dropdown from "../../components/Dropdown/Dropdown";

const About = () => {
  return (
    <>
      <Navbar />

      <Banner
        image="/kasa/src/assets/about.jpeg"
        title=""
        opacity={Number(0.6)}
      />
      <div className="about-dropdown">
        <div className="about-container-dropdown">
          <Dropdown
            className="about-content-dropdown"
            label="Fiabilité"
            content="Cognitis enim pilatorum caesorumque funeribus nemo deinde ad has stationes appulit navem, sed ut Scironis praerupta letalia declinantes."
          />
        </div>
        <div className="about-container-dropdown">
          <Dropdown
            className="about-content-dropdown"
            label="Respect"
            content="Cognitis enim pilatorum caesorumque funeribus nemo deinde ad has stationes appulit navem, sed ut Scironis praerupta letalia declinantes."
          />
        </div>
        <div className="about-container-dropdown">
          <Dropdown
            className="about-content-dropdown"
            label="Service"
            content="Cognitis enim pilatorum caesorumque funeribus nemo deinde ad has stationes appulit navem, sed ut Scironis praerupta letalia declinantes."
          />
        </div>
        <div className="about-container-dropdown">
          <Dropdown
            className="about-content-dropdown"
            label="Sécurité"
            content="Cognitis enim pilatorum caesorumque funeribus nemo deinde ad has stationes appulit navem, sed ut Scironis praerupta letalia declinantes."
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
