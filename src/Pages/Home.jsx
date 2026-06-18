import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchSection from "../components/SearchSection";
import Services from "../components/Services";
import Industries from "../components/Industries";
import FeaturedExperts from "../components/FeaturedExperts";
import HowItWorks from "../components/HowItWorks";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchSection />
      <Services />
      <Industries />
      <FeaturedExperts />
      <HowItWorks />
    </>
  );
}

export default Home;