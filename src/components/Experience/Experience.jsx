import "./Experience.css";
import Star from "../../assets/Star.png";
function Experience() {
  return (
    <>
      <div className="MainExperience">
        <div className="ExperienceCon">
          <div className="ExperienceConTitle">
            {" "}
            <span>
              <img src={Star} /> Experience
            </span>
          </div>
          <ExperienceView
            Title="Lead Product Designer"
            comapnyName="Fortknox"
            CompanyYear="Mar 2022 - Oct 2023"
          />
          <ExperienceView
            Title="Intern Designer"
            comapnyName="OmniSafe"
            CompanyYear="Mar 2022 - Oct 2023"
          />
          <ExperienceView
            Title="UI Designer"
            comapnyName="Doradesign"
            CompanyYear="Mar 2022 - Oct 2023"
          />
          <ExperienceView
            Title="Frontend Developer"
            comapnyName="OpacityAuthor"
            CompanyYear="Mar 2022 - Oct 2023"
          />
        </div>
      </div>
    </>
  );
}
function ExperienceView({ Title, comapnyName, CompanyYear }) {
  return (
    <>
      <div className="ExperienceList">
        <div className="ExperienceContent">
          <h1>{Title}</h1>
          <div>
            <span className="comapnyName">{comapnyName} </span> <br />
            <span className="CompanyYear"> {CompanyYear}</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Experience;
