import React, { useState } from "react";
import Modal from "react-modal";
import heroImg from "../../assets/img/hero/Andy.jpg";
import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";
import cancelImg from "../../assets/img/cancel.svg";
import Index from "../../components/about/index";

const heroContent = {
  heroImage: heroImg,
  heroMobileImage: heroImgMobile,
  heroTitleName: "andrei predusel",
  heroDesignation: "3D Artist & Visual Creator",
  heroDescriptions: `Feel at ease and explore — my work is here to be discovered, just like a good story. Every project reflects a part of my journey as a 3D artist, shaped by curiosity and craft. I invite you to dive in and find inspiration, ideas, or even collaboration.`,
  heroBtn: "more about me",
};

const Hero = () => {

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + heroContent.heroImage
            })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img
              src={heroContent.heroMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />
            <h1 className="text-uppercase poppins-font">
              I'm {heroContent.heroTitleName}.
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
          </div>
        </div>
      </div>
      {/* End home-details-container */}
    </>
  );
};

export default Hero;
