import { useParams, Navigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";
import datas from "../../datas/data.json";

const Store = () => {
  const { id } = useParams();
  const accomodation = datas.find((accomodation) => accomodation.id === id);

  if (!accomodation) {
    return <Navigate to="/error404"/>;
  }

  return (
    <>
      <Navbar />
      <Carousel images={accomodation.pictures}/>
      <Footer />
    </>
  );
};

export default Store;
