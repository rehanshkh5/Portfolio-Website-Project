import "./HeroPage.css";
import WaveFun from "../../assets/wavefun.png";
import DoraDesign from "../../assets/doradesign.png";
import SilSila from "../../assets/SiLSILA.png";
import Image1 from "../../assets/img1.svg";
import Image2 from "../../assets/img2.svg";

function HeroPage() {
  return (
    <>
      <div className="Hero">
        <div className="mainContainer">
          <MainText />
          <TextImg />
        </div>
      </div>
    </>
  );
}

function MainText() {
  return (
    <>
      <div className="mainText">
        <h1>
          I AM
          <span style={{ verticalAlign: "middle" }}>
            <img src={Image1} alt="Freelancer" className="Img1" /> FREELANCE
            DESIGNER
            <span style={{ verticalAlign: "middle" }}>
              <img src={Image2} alt="Freelancer" className="Img2" /> FROM
              <br />
              San Francisco
            </span>
          </span>
        </h1>
      </div>
    </>
  );
}
function TextImg() {
  return (
    <>
      <div className="textImgContainer">
        <div className="Images">
          <img src={DoraDesign} alt="DoraDesign" />
          <img src={WaveFun} alt="WaveFun" />
          <img src={SilSila} alt="SilSila" />
        </div>
        <div className="para">
          <p>
            Welcome to my portfolio. Here, artistry meets functionality.
            <br /> Dive into a curated showcase of distinctive branding and
            <br />
            web designs, each crafted to captivate and inspire.
          </p>
        </div>
      </div>
    </>
  );
}

export default HeroPage;
