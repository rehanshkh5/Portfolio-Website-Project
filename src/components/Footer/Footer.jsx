import "./Footer.css";
import Star from "../../assets/Star.png";
function Footer() {
  return (
    <>
      <div className="Footers">
        <div className="newFooter">
          <div className="FooterTexts">
            <div className="ScrollWrapper">
              <div className="ScrollContent">
                <span className="scroolani">
                  <img src={Star} />
                  FIGMA
                </span>
                <span className="scroolani">
                  <img src={Star} />
                  DESIGNER
                </span>
                <span className="scroolani">
                  <img src={Star} />
                  DEVELOPER
                </span>
                {/* Repeat to make loop effect */}
                <span className="scroolani">
                  <img src={Star} />
                  FIGMA
                </span>
                <span className="scroolani">
                  <img src={Star} />
                  DESIGNER
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="footerLastT">
          <h1>LET'S TALK!</h1>
          <p>rehanurraihan@gmail.com</p>
        </div>
        <div className="footerLastFlex">
          <p>© Rehan Raihan - 2023</p>
          <ul className="ulFooterFlex">
            <li>Dribbble</li>
            <li>Behance</li>
            <li> Twitter </li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Footer;
