import CallActionArea from "./components/CallActionArea";
import ClientLogoArea from "./components/ClientLogoArea";
import ExperienceArea from "./components/ExperienceArea";
import FeatureArea from "./components/FeatureArea";
import Footer from "./components/Footer";
import FunFactArea from "./components/FunFactArea";
import Header from "./components/Header";
import MaketingArea from "./components/MaketingArea";
import MarketingTestimonialArea from "./components/MarketingTestimonialArea";
import PriceArea from "./components/PriceArea/PriceArea";
import RateArea from "./components/RateArea";
import SolutionArea from "./components/SolutionArea";

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
      <PriceArea></PriceArea>
      <FunFactArea></FunFactArea>
      <CallActionArea></CallActionArea>
      <Footer></Footer>
    </>
  );
}

export default App;
