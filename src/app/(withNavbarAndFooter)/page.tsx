import Banner from "@/components/Pages/HomePage/Banner/Banner";
import ContactCard from "@/components/Pages/HomePage/ContactCard/ContactCard";
import EffectBanner from "@/components/Pages/HomePage/EffectBanner/EffectBanner";

const HomePage = async () => {
  return (
    <>
      <Banner />
      <EffectBanner />
      <ContactCard />
    </>
  );
};

export default HomePage;
