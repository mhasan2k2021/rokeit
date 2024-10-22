import "./Company.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 20000, easing: (t) => t };

const Company = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    size: 800,
    drag: false,
    created(s) {
      s.moveToIdx(1, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
  });
  const logo = (
    <>
      <img
        src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1729569392/rokeit/other-logos/instagram_jrrpnn.png"
        alt="instagram"
      />
      <img
        src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1729569391/rokeit/other-logos/social_rkjaoo.png"
        alt="google"
      />
      <img
        src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1729569391/rokeit/other-logos/paypal_piqifc.png"
        alt="paypal"
      />
      <img
        src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1729569390/rokeit/other-logos/css-3_dqj8af.png"
        alt="css"
      />
      <img
        src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1729569391/rokeit/other-logos/stripe_qvbqzs.png"
        alt="stripe"
      />
      <img
        src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1729569390/rokeit/other-logos/games_flt4wo.png"
        alt="instagram"
      />
      <img
        src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1729569392/rokeit/other-logos/instagram_jrrpnn.png"
        alt="olympic"
      />
      <img
        src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1729569391/rokeit/other-logos/shopping_1_olacbl.png"
        alt="amazon"
      />
      <img
        src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1729569391/rokeit/other-logos/ebay_if15ir.png"
        alt="ebay"
      />
      <img
        src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1729569390/rokeit/other-logos/netflix_fky7mz.png"
        alt="netflix"
      />
      <img
        src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1729569390/rokeit/other-logos/samsung_ujrxnd.png"
        alt="samsung"
      />
    </>
  );
  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">{logo}</div>
      <div className="keen-slider__slide number-slide2">{logo}</div>
    </div>
  );
};

export default Company;
