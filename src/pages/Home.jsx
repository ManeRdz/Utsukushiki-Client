import "../styles/home.css";
import bfridaypromoimg from "../assets/bfridaypromoimg.jpeg";
import thirdAnniversary from "../assets/thirdAnniversary.jpg";
import AllCategories from "../Components/Home/AllCategories";
import WelcomeSection from "../Components/Home/WelcomeSection";
import AdBanner from "../Components/AdBanner";
import DesignAdvice from "../Components/Home/DesignAdvice";
import Extras from "../Components/Home/Extras";

const Home = () => {
  return (
    <>
      <WelcomeSection />
      <AdBanner
        title="Black Friday is just around the corner!"
        subtitle="Are you ready for it?"
        paragraph="Discover what Utsukushiki is preparing for you with a discount of up to 50%!"
        paragraph2="Don't miss it!"
        src={bfridaypromoimg}
      />
      <AllCategories />
      <AdBanner
        title="Are you ready for september!?"
        subtitle="In september we celebrate our 3rd anniversary!!!"
        paragraph="And to show our appreciation we brought you all the store with a 25% of discount!!!"
        paragraph2="Don't waste this opportunity and take a look to our products!"
        src={thirdAnniversary}
      />
      <DesignAdvice />
      <Extras />
    </>
  );
};

export default Home;
