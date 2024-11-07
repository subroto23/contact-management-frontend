import Banner from "@/components/Pages/HomePage/Banner/Banner";
import CrudOperationUi from "@/components/Pages/HomePage/CrudUi/CrudOperationUi";
import EffectBanner from "@/components/Pages/HomePage/EffectBanner/EffectBanner";
import HoverBasedEffectSection from "@/components/Pages/HomePage/HoverBasedEffect/HoverBasedEffect";
import SubscribeNewsLetter from "@/components/Pages/HomePage/SubscribeNewsLetter/SubscribeNewsLetter";
import NeonCard from "@/components/ui/NeonCard/NeonCard";

const HomePage = async () => {
  return (
    <>
      <Banner />
      <EffectBanner />
      <CrudOperationUi />
      <NeonCard />
      <HoverBasedEffectSection />
      <SubscribeNewsLetter />
    </>
  );
};

export default HomePage;
