import { useState } from "react";
import Header from "./components/Header/Header";
import HeroPage from "./components/HeroPage/HeroPage";
import Expertise from "./components/Expertise/Expertise";
import Works from "./components/Works/Works";
import Experience from "./components/Experience/Experience";
import Blog from "./components/Blogs/Blog";
import Testimonial from "./components/Testimonial/Testimonial";
import Questions from "./components/Questions/questions";
import Footer from "./components/Footer/Footer";
import "./index.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HeroPage />
      <Expertise />
      <Works />
      <Experience />
      <Blog />
      <Testimonial />
      <Questions />
      <Footer />
    </>
  );
}

export default App;
