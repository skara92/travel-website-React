import { useParams } from "react-router";
import { useContext, useEffect } from "react";
import DestinationsContext from "../context/DestinationsContext";
import { Helmet } from "react-helmet-async";
import { DETAILS, CITIES } from "../context/types/DestinationTypes";
import Header from "../components/Header";
import DestinationInfo from "../components/DestinationInfo";
import Cities from "../components/cities/Cities";
const Details = () => {
  const { destinationsData, dispatch } = useContext(DestinationsContext);
  const { details, filteredCities } = destinationsData;
  const { id } = useParams();
  useEffect(() => {
    dispatch({ type: DETAILS, payload: id });
    dispatch({ type: CITIES, payload: id });
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <Helmet>
        <title>{details.name}</title>
      </Helmet>
      <Header heading={details.name} image={details.bigImage}></Header>
      <DestinationInfo details={details} />
      <Cities cities={filteredCities} name={details.name} />
    </>
  );
};
export default Details;
