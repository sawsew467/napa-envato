import CallActionArea from "./components/CallActionArea/CallActionArea";
import ClientLogoArea from "./components/ClientLogoArea/ClientLogoArea";
import ExperienceArea from "./components/ExperienceArea/ExperienceArea";
import FeatureArea from "./components/FeatureArea/FeatureArea";
import Footer from "./components/Footer/Footer";
import FunFactArea from "./components/FunFactArea/FunFactArea";
import Header from "./components/Header/Header";
import MaketingArea from "./components/MaketingArea/MaketingArea";
import MarketingTestimonialArea from "./components/MarketingTestimonialArea/MarketingTestimonialArea";
import PriceArea from "./components/PriceArea/PriceArea";
import RateArea from "./components/RateArea/RateArea";
import SolutionArea from "./components/SolutionArea/SolutionArea";

function App() {
  return (
    <>
      <Header></Header>
      <MaketingArea></MaketingArea>
      <ClientLogoArea></ClientLogoArea>
      <SolutionArea></SolutionArea>
      <MarketingTestimonialArea></MarketingTestimonialArea>
      <RateArea></RateArea>
      <ExperienceArea></ExperienceArea>
      <FeatureArea></FeatureArea>
      {/* <PriceArea></PriceArea> */}
      <FunFactArea></FunFactArea>
      <CallActionArea></CallActionArea>
      <Footer></Footer>
    </>
  );
}

export default App;
