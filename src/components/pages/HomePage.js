import BannerSection from "../organisms/BannerSection";
import FeatureCategoriesSection from "../organisms/FeatureCategoriesSection";
import OneColumnLayout from "../templates/OneColumnLayout";

function HomePage() {
  return (
    <OneColumnLayout>
      <BannerSection />
      <FeatureCategoriesSection />
    </OneColumnLayout>
  );
}

export default HomePage;
