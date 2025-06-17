import "./Expertise.css";
import Star from "../../assets/Star.png";
function Expertise() {
  return (
    <>
      <div className="Title">
        <span className="span">
          <img src={Star} /> Expertise
        </span>

        <div className="Skilles">
          <div className="MainComainterSkill">
            <Skill
              titles={"Branding"}
              para={
                <>
                  I create efficient, adaptable, and engaging websites. No
                  predefined <br /> patterns. No sluggish, complex code. Webflow
                  forms the foundation of my <br />
                  web development approach. I employ it to provide safe,
                  top-notch <br />
                  bespoke websites.
                </>
              }
            />
            <Skill
              titles={"UI Design"}
              para={
                <>
                  I create efficient, adaptable, and engaging websites. No
                  predefined <br /> patterns. No sluggish, complex code. Webflow
                  forms the foundation of my <br />
                  web development approach. I employ it to provide safe,
                  top-notch <br />
                  bespoke websites.
                </>
              }
            />
            <Skill
              titles={"UX Design"}
              para={
                <>
                  I create efficient, adaptable, and engaging websites. No
                  predefined <br /> patterns. No sluggish, complex code. Webflow
                  forms the foundation of my <br />
                  web development approach. I employ it to provide safe,
                  top-notch <br />
                  bespoke websites.
                </>
              }
            />
            <Skill
              titles={"Development"}
              para={
                <>
                  I create efficient, adaptable, and engaging websites. No
                  predefined <br /> patterns. No sluggish, complex code. Webflow
                  forms the foundation of my <br />
                  web development approach. I employ it to provide safe,
                  top-notch <br />
                  bespoke websites.
                </>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

function Skill({ titles, para }) {
  return (
    <>
      <div className="SkillName">
        <li>{titles}</li>
        <p>{para}</p>
      </div>
    </>
  );
}

export default Expertise;
