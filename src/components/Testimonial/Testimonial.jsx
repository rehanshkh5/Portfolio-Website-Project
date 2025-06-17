import "./Testimonial.css";
import { useState } from "react";
import Star from "../../assets/Star.png";
import Profile from "..//../assets/Profile.png";
import Profile1 from "..//../assets/Profile2.jpeg";
import Profile2 from "..//../assets/profile3.jpeg";

import QoutesImage from "..//../assets/quote.png";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
const testimonials = [
  {
    name: "Floyd Miles",
    company: "eBay",
    image: Profile,
    review: (
      <>
        Synergy's resume builder is fantastic. It helped <br />
        me create a professional resume that stood
        <br /> out to employers. Synergy's resume builder is
        <br /> fantastic. It helped me create a professional <br />
        resume that stood out to employers.,
      </>
    ),
  },
  {
    name: "Jenny Wilson",
    company: "Google",
    image: Profile1,
    review: (
      <>
        Synergy's resume builder is fantastic. It helped <br />
        me create a professional resume that stood
        <br /> out to employers. Synergy's resume builder is
        <br /> fantastic. It helped me create a professional <br />
        resume that stood out to employers.,
      </>
    ),
  },
  {
    name: "John Doe",
    company: "Amazon",
    image: Profile2,
    review: (
      <>
        Synergy's resume builder is fantastic. It helped <br />
        me create a professional resume that stood
        <br /> out to employers. Synergy's resume builder is
        <br /> fantastic. It helped me create a professional <br />
        resume that stood out to employers.,
      </>
    ),
  },
];

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((Prev) =>
      Prev === 0 ? testimonials.length - 1 : Prev - 1
    );
  };
  const handleNext = () => {
    setCurrentIndex((Prev) =>
      Prev === testimonials.length - 1 ? 0 : Prev + 1
    );
  };

  const current = testimonials[currentIndex];
  return (
    <>
      <div className="Testimonial">
        <div className="TestimonialTitle">
          <span>
            <img src={Star} /> What They Say
          </span>
        </div>
        <div className="TestimonialBox fade-in" key={currentIndex}>
          <div className="profileImg">
            <img src={current.image} alt={current.name} />
            <span className="reviewName">
              {current.name} <br />
              <span className="reviewWorking">{current.company}</span>
            </span>
          </div>
          <div className="reviewText">
            <p>{current.review}</p>
          </div>
        </div>
      </div>

      <img src={QoutesImage} alt="Qoutes" className="QoutesImg" />
      <div className="iconsDiv">
        <button className="RectIcon" onClick={handlePrev}>
          <FaArrowLeft style={{ color: "#000", fontSize: "20px" }} />
        </button>
        <button
          className="RectIcon"
          onClick={handleNext}
          style={{ color: "#000", fontSize: "20px" }}
        >
          <FaArrowRight />
        </button>
      </div>
    </>
  );
}
export default Testimonial;
