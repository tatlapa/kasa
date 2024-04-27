import { useParams, Navigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import datas from "../../datas/data.json";

const Store = () => {
  const { id } = useParams();
  const accomodation = datas.find((accomodation) => accomodation.id === id);

  if (!accomodation) {
    return <Navigate to="/error404" replace/>;
  }

  return (
    <>
      <Navbar />
      <div className="store">
        <p>Store</p>
      </div>
      <Footer />
    </>
  );
};

export default Store;
