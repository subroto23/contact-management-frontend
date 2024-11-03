import Banner from "@/components/Pages/HomePage/Banner/Banner";
import CrudOperationUi from "@/components/Pages/HomePage/CrudUi/CrudOperationUi";
import EffectBanner from "@/components/Pages/HomePage/EffectBanner/EffectBanner";
import SubscribeNewsLetter from "@/components/Pages/HomePage/SubscribeNewsLetter/SubscribeNewsLetter";
import Footer from "@/components/Shared/Footer";

const HomePage = async () => {
  return (
    <>
      <Banner />
      <EffectBanner />
      <CrudOperationUi />
      <SubscribeNewsLetter />
      <Footer />
    </>
  );
};

export default HomePage;
