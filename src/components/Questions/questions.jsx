import "./questions.css";
import { useState } from "react";
import Star from "../../assets/Star.png";
import { MdArrowDropDownCircle } from "react-icons/md";

function Questions() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqList = [
    "What is your design process?",
    "What tools and software do you use for UX design?",
    "How do you measure the success of your UX designs?",
  ];

  return (
    <>
      <div className="Questions">
        <div className="QuestionsTitle">
          <span>
            <img src={Star} /> Frequently Asked Questions
          </span>
        </div>
        {faqList.map((title, index) => (
          <FAQ
            key={index}
            title={title}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </>
  );
}
function FAQ({ title, index, activeIndex, setActiveIndex }) {
  const isOpen = index === activeIndex;

  const toggleAnswer = () => {
    setActiveIndex(isOpen ? -1 : index);
  };
  return (
    <>
      <div className="QuestionsMain">
        <div className="QuestionsContent" onClick={toggleAnswer}>
          <h1>{title}</h1>

          <MdArrowDropDownCircle
            color="#fff"
            stroke="red"
            style={{
              fontSize: "40px",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </div>
        {isOpen && (
          <p className="Answer">
            My design process typically involves four key phases: research,
            design, prototype, and test. In the research phase, I gather
            insights about <br /> the user and their needs. In the design phase,
            I create wireframes and visual designs that meet those needs. In the
            prototype phase, I <br /> create interactive models of the design
            for testing. In the test phase, I collect feedback from users to
            refine the design.
          </p>
        )}
      </div>
    </>
  );
}

export default Questions;
