import ClientLogoArea from "./components/ClientLogoArea/ClientLogoArea";
import ExperienceArea from "./components/ExperienceArea/ExperienceArea";
import FeatureArea from "./components/FeatureArea/FeatureArea";
import Header from "./components/Header/Header";
import MaketingArea from "./components/MaketingArea/MaketingArea";
import MarketingTestimonialArea from "./components/MarketingTestimonialArea/MarketingTestimonialArea";
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
    </>
  );
}

export default App;
