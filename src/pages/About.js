import { useState } from "react";
import { Helmet } from "react-helmet-async";
import PageContainer from "../components/pages-parts/PageContainer";
import AboutImage from "../components/pages-parts/AboutImage";
const About = () => {
  const [state] = useState({
    heading: "about us",
    pageHeading: "world's best travel agency company since 2005",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum inventore quae vitae. Ipsa natus iste vitae dolores pariatur earum quidem qui dignissimos! Enim minus quas, aperiam earum culpa ullam ad!  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum inventore quae vitae. Ipsa natus iste vitae dolores pariatur earum quidem qui dignissimos! Enim minus quas, aperiam earum culpa ullam ad!",
  });
  return (
    <>
      <Helmet>
        <title>About page</title>
        <meta name="description" content="travel friends about page" />
      </Helmet>
      <PageContainer data={state}> 
        <AboutImage />
      </PageContainer>
    </>
  );
};
export default About;
