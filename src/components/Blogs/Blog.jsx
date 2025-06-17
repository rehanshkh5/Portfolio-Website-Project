import "./Blog.css";
import Star from "../../assets/Star.png";
import BlogImg1 from "../../assets/Analysis Application.png";
import BlogImg2 from "../../assets/Fortknox Application.png";
import BlogImg3 from "../../assets/Zencode Application.png";
function Blog() {
  return (
    <>
      <div className="Blogs">
        <div className="BlogTitle">
          <span>
            <img src={Star} /> BLOGS
          </span>
          <a href="">view all</a>
        </div>
        <BlogPost
          Image={BlogImg1}
          Titls="How UX works in web"
          Dates="Nov 9, 2023"
          Blogtags={["UI", "UX"]}
        />
        <BlogPost
          Image={BlogImg2}
          Titls="Case study - Analysis Application."
          Dates="Aug 18, 2023"
          Blogtags={["DESIGN", "PRINT"]}
        />
        <BlogPost
          Image={BlogImg3}
          Titls="3 ways to develop your skill"
          Dates="Feb 16, 2023"
          Blogtags={["FIGMA", "WEB"]}
        />
      </div>
    </>
  );
}
function BlogPost({ Blogtags = [], Image, Dates, Titls }) {
  return (
    <>
      <div className="BlogContent">
        <div className="BlogImg">
          <img src={Image} alt="" />
        </div>
        <div className="SubContent">
          <p>{Dates}</p>
          <h1>{Titls}</h1>
          {Blogtags.length > 0 && (
            <div className="BlogTags" style={{ display: "flex" }}>
              {Blogtags.map((Tags, index) => (
                <span className="tagsStyle" key={index}>
                  {Tags}
                </span>
              ))}
            </div>
          )}
        </div>
        <button className="BlogBtn">Read</button>
      </div>
    </>
  );
}
export default Blog;
