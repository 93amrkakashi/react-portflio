import React from "react";
import Navbar from "../components/Navbar";
import "../style.scss";
import Footer from "../components/Footer";
import "../App.css";



const About = () => {
  return (
    <>
      <Navbar />

      <section className="about" id="about">
        <div className="main-title">
          <h2>about me</h2>
        </div>
        <div className="content-sec">
          <div className=" section top">
            <h2>ok, where do we start?</h2>
            <p>Well... we can start with introducing myself</p>
            <h4>
              my name is <span>Amr Ali</span>, a front end devlober, based in
              egypt.
            </h4>
            <p />
            <p className="social-work">
              the part that might be funny, that in fact I have a bachelor's
              degree in social work! Social work is very good but I did not find
              my passion in it.
            </p>
            <p className="devlop">
              There where the development path began. I started my studies as a
              front-end developer through self-education, through online courses
              and bootcamps, in addition to reading in several documents.
            </p>
          </div>
          <div className="section bottom">
            <div className="card">
              <i className="fa-brands fa-html5 html" />
              <h2>HTML5</h2>
              <p>
                The first thing I started with was HTML. <br />
                it didn't take much time to learn the basics, but diving into
                the language more took some time.
              </p>
            </div>
            <div className="card">
              <i className="fa-brands fa-css3-alt css" />
              <h2>CSS3</h2>
              <p>
                Then, the CSS, it isn't really that hard. <br />
                but it's pretty big, in the end you find that what you can do
                with it is really great.
              </p>
            </div>
            <div className="card">
              <i className="fa-brands fa-square-js js" />
              <h2>JavaScript</h2>
              <p>
                Finally the JavaScript, It may be very difficult to learn.
                Variables, functions, loops and many other things that seem
                really hard , but in the end it's all worth it
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
