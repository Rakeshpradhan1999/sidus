import Header from "./Components/header";
import HeroSection from "./sections/HeroSection";
import BuyBlock from "./sections/BuyBlock";
import Harvest from "./sections/Harvest";
import Foreword from "./sections/Foreword";
import Faq from "./sections/Faq";
import Footer from "./Components/footer";
const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <BuyBlock />
        <Harvest />
        <Foreword />
        <Faq />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
