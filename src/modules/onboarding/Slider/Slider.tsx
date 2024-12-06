import { useState } from "react";
import Slide1 from "../Slides/Slide1";
import Slide2 from "../Slides/Slide2";
import Slide3 from "../Slides/Slide3";

const Slider = () => {
  const [page, setPage] = useState(0);

  return (
    <>
      {page === 0 && <Slide1 setPage={setPage} />}
      {page === 1 && <Slide2 setPage={setPage} />}
      {page === 2 && <Slide3 setPage={setPage} />}
    </>
  );
};

export default Slider;
