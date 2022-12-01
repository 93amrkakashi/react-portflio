import React from "react";
import Navbar from "../components/Navbar";
import "../style.scss";
import Footer from "../components/Footer";
// import { useEffect , useState } from "react";
import Repo from "../components/Repo";

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="main-title">
          <h2>MY PROJECTS</h2>
        </div>
      <div className="repos">
        <Repo />
      </div>
      <Footer />
    </>
  );
};

export default Projects;
