import React from "react";
import Navbar from "../components/Navbar";
import "../style.scss";
import Footer from "../components/Footer";
import img from '../pics/02.png'






const Skills = () => {

  return (
    <>
      <Navbar />
      

      <section className="skills" id="skills">
        <div className="main-title">
          <h2>skills</h2>
        </div>
        <div className="section skill-sec">
          <div className="left-sec">
            <div className="pic">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="right-sec">
            <div className="skill">
              <div className="name">
                <i className="fa-brands fa-html5 html" />
                <h3>HTML5</h3>
              </div>
              <div className="progress">
                <span className="html2" style={{ width: '95%' }} data-width="95%" />
              </div>
            </div>
            <div className="skill">
              <div className="name">
                <i className="fa-brands fa-css3-alt css" />
                <h3>CSS3</h3>
              </div>
              <div className="progress">
                <span className="css2" style={{ width: "85%" }} data-width="85%" />
              </div>
            </div>
            <div className="skill">
              <div className="name">
                <i className="fa-brands fa-square-js js" />
                <h3>JAVA SCRIPT </h3>
              </div>
              <div className="progress">
                <span className="js2" style={{ width: "65%" }} data-width="65%" />
              </div>
            </div>
            <div className="skill">
              <div className="name">
                <i style={{ color: "#c66394" }} className="fa-brands fa-sass" />
                <h3>SASS</h3>
              </div>
              <div className="progress">
                <span style={{ width: "70%"}} className="sass" data-width="70%" />
              </div>
            </div>
            <div className="skill">
              <div className="name">
              <i style={{ color: "#d34446" }} class="fa-brands fa-gulp"></i>
                <h3>GULP js</h3>
              </div>
              <div className="progress">
                <span style={{ width: "87%"}} className="gulp" data-width="70%" />
              </div>
            </div>
            <div className="skill">
              <div className="name">
              <i style={{ color: "#5ed3f3" }} class="fa-brands fa-react"></i>
                <h3>REACT</h3>
              </div>
              <div className="progress">
                <span style={{ width: "50%"}} className="react" data-width="70%" />
              </div>
            </div>
          </div>
        </div>

        
   {/* {Window.onload = function () { spans.forEach((span) => {
    span.style.width = span.dataset.width;})}} */}


        <div className="section others">
          <div className="card1">
            <i className="fa-solid fa-comments" />
            <h4>Effective communication</h4>
            <p> always available 24 hours aday</p>
          </div>
          <div className="card1">
            <i className="fa-solid fa-lightbulb" />
            <h4>creativity</h4>
            <p> creative and have alot of ideas</p>
          </div>
          <div className="card1">
            <i className="fa-solid fa-stopwatch" />
            <h4>time mangment</h4>
            <p> know how to manage time well</p>
          </div>
          <div className="card1">
            <i className="fa-sharp fa-solid fa-user-secret" />
            <h4>privacy</h4>
            <p> your privacy really matters</p>
          </div>
          <div className="card1">
            <i className="fa-solid fa-laptop-code" />
            <h4>clean code</h4>
            <p>you will have a clean code </p>
          </div>
          <div className="card1">
            <i className="fa-solid fa-computer" />
            <h4>computer skills</h4>
            <p>I have very good computer skills </p>
          </div>
          <div className="card1">
            <i className="fa-solid fa-magnifying-glass" />
            <h4>searching</h4>
            <p> searching is devloper's best friend</p>
          </div>
          <div className="card1">
            <i className="fa-solid fa-pen-to-square" />
            <h4>organized</h4>
            <p>very organized in work &amp; effective</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Skills;
