import Banner from "@/components/Pages/HomePage/Banner/Banner";
import CrudOperationUi from "@/components/Pages/HomePage/CrudUi/CrudOperationUi";
import EffectBanner from "@/components/Pages/HomePage/EffectBanner/EffectBanner";

const HomePage = async () => {
  return (
    <>
      <Banner />
      <EffectBanner />
      <CrudOperationUi />
    </>
  );
};

export default HomePage;
