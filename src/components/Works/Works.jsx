import "./Works.css";
import Star from "../../assets/Star.png";
import HeroImg1 from "../../assets/Analysis Application.png";
import HeroImg2 from "../../assets/Fortknox Application.png";
import HeroImg3 from "../../assets/Zencode Application.png";

function Works() {
  return (
    <>
      <div className="works">
        <div className="WorkTitle">
          <span>
            <img src={Star} /> Works
          </span>
          <a href="">view all</a>
        </div>

        <BoxCard tags={["MOBILE", "UI/UX", "WEB"]} Images={HeroImg1} />
        <BoxCard
          Title="Fortknox Application
"
          tags={["MOBILE", "WEB"]}
          Images={HeroImg2}
        />
        <BoxCard
          Title="Zencode Application"
          tags={["APP", "WEB"]}
          Images={HeroImg3}
        />
      </div>
    </>
  );
}

function BoxCard({ tags = [], Images, Title }) {
  return (
    <>
      <div className="BoxContainer">
        <div className="circleBlur" />

        <div className="box">
          <div className="BoxImg">
            <img src={Images} alt="Analysis Application" />
          </div>
          <div className="BoxContent">
            <div className="MainBoxContant">
              <h1>{Title}</h1>
              <p>
                With user-centered approach, the goals was to create an
                intuitive interface for enhanced financial intelligence.
              </p>
              {tags.length > 0 && (
                <div className="tags">
                  {tags.map((tags, index) => (
                    <span key={index} className="tagsStyle">
                      {tags}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div>
              <BoxButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function BoxButton() {
  return (
    <>
      <button className="BoxBtn">View Case Study</button>
    </>
  );
}
export default Works;
