import "./Intro.css";
import { FaArrowRightLong } from "react-icons/fa6";

const Intro = () => {
  const image =
    "https://res.cloudinary.com/dcmgay3nl/image/upload/v1729039535/rokeit/digitalmarketing_1_jtgtzj.gif";
  return (
    <div className="intro_page_container">
      <div className="heading_section">
        <h1>
          Your Gateway <br />
          to Digital Transformation
        </h1>
        <h5>
          Rokeit combines creativity and data-driven insights to elevate your
          brand and drive measurable growth
        </h5>
        <button>
          <FaArrowRightLong /> Get start
        </button>
      </div>
      <img src={image} alt="" />
    </div>
  );
};

export default Intro;
