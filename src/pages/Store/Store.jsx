import { useParams, Navigate } from "react-router-dom";
import datas from "../../datas/data.json";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";
import Details from "../../components/Details/Details";

const Store = () => {
  const { id } = useParams();
  const accomodation = datas.find((accomodation) => accomodation.id === id);

  if (!accomodation) {
    return <Navigate to="/error404" />;
  }

  return (
    <>
      <Navbar />
      <Carousel images={accomodation.pictures} />
      <Details
        title={accomodation.title}
        location={accomodation.location}
        name={accomodation.host.name}
        picture={accomodation.host.picture}
        rating={Number(accomodation.rating)}
        description={accomodation.description}
        equipments={accomodation.equipments}
      />
      <Footer />
    </>
  );
};

export default Store;