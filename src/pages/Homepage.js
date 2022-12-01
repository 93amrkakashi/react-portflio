import React from 'react';
import "../style.scss"
import img from  "../pics/01.png"
import Navbar from '../components/Navbar';
const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="home-sec">
        <div className="left">
          <h2>hello there ...!</h2>
          <h3>my name is <span className='name'>AMR ALI</span></h3>
          <h4>a front end devloper</h4>
          <h4>based in egypt</h4>
        </div>
        <div className="right">
          <img src={img} alt="" />
        </div>
      </div>
    </>
  );
}

export default Homepage;
