import { useRef } from "react";
import { useCabins } from "../features/cabins/useCabins";
import Spinner from "../ui/Spinner";
import HomeAbout from "./HomepageUi/HomeAbout";
import HomeCabin from "./HomepageUi/HomeCabin";
import HomeCabins from "./HomepageUi/HomeCabins";
import HomeExp from "./HomepageUi/HomeExp";
import HomeFeatures from "./HomepageUi/HomeFeatures";
import HomeFooter from "./HomepageUi/HomeFooter";
import HomeHeader from "./HomepageUi/HomeHeader";
import HomeNavigation from "./HomepageUi/HomeNavigation";
import "../../css/style.css";

function Homepage() {
  const { isLoading, cabins } = useCabins();

  return (
    <>
      <HomeNavigation />
      <HomeHeader />
      <HomeAbout />
      <HomeFeatures />
      <HomeCabins>
        {!isLoading &&
          cabins.map((cabin) => <HomeCabin key={cabin.id} cabin={cabin} />)}
      </HomeCabins>
      <HomeExp />
      <HomeFooter />
    </>
  );
}

export default Homepage;
