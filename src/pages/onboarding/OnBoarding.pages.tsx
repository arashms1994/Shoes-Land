import { useCallback, useState } from "react";
import Loading from "../../modules/onboarding/Loading/Loading.modules";
import Slider from "../../modules/onboarding/Slider/Slider.modules";
import Welcome from "../../modules/onboarding/Welcome/Welcome.modules";

const OnBoarding = () => {
  const [page, setPage] = useState(0);

  return (
    <>
      {page === 0 && <Loading setPage={setPage} />}
      {page === 1 && <Welcome setPage={setPage} />}
      {page === 2 && <Slider setPage={setPage} />}
    </>
  );
};

export default OnBoarding
