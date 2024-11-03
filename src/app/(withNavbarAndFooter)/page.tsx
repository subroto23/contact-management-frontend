import Banner from "@/components/Pages/HomePage/Banner/Banner";
import CrudOperationUi from "@/components/Pages/HomePage/CrudUi/CrudOperationUi";
import EffectBanner from "@/components/Pages/HomePage/EffectBanner/EffectBanner";
import SubscribeNewsLetter from "@/components/Pages/HomePage/SubscribeNewsLetter/SubscribeNewsLetter";

const HomePage = async () => {
  return (
    <>
      <Banner />
      <EffectBanner />
      <CrudOperationUi />
      <SubscribeNewsLetter />
    </>
  );
};

export default HomePage;
