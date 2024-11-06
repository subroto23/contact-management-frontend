import Banner from "@/components/Pages/HomePage/Banner/Banner";
import CrudOperationUi from "@/components/Pages/HomePage/CrudUi/CrudOperationUi";
import EffectBanner from "@/components/Pages/HomePage/EffectBanner/EffectBanner";
import SubscribeNewsLetter from "@/components/Pages/HomePage/SubscribeNewsLetter/SubscribeNewsLetter";
import Footer from "@/components/Shared/Footer";
import NeonCard from "@/components/ui/NeonCard/NeonCard";

const HomePage = async () => {
  return (
    <>
      <Banner />
      <EffectBanner />
      <CrudOperationUi />
      <NeonCard />
      <SubscribeNewsLetter />
    </>
  );
};

export default HomePage;
