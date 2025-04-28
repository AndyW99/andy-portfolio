import React, { useState } from "react";
import CloseImg from "../../../assets/img/cancel.svg";
import PortfolioData from "../portfolioData";

const Modal = ({ modalId, setGetModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const currentItem = PortfolioData.find((item) => item.id === modalId);
  const images = currentItem?.images || [];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="modal_portfolio">
      <div className="modal__outside" onClick={() => setGetModal(false)}></div>
      <div className="modal__content">
        <div data-aos="fade">
          <h2 className="heading mb-2">{currentItem?.title}</h2>
          <div className="modal__img custom-slider">
            <div className="slider-container">
              {images.length > 1 && (
                <button className="slider-button prev" onClick={prevSlide}>
                  &#8249;
                </button>
              )}
              <img
                src={images[currentSlide]}
                alt={`${currentItem?.title} - ${currentSlide + 1}`}
              />
              {images.length > 1 && (
                <button className="slider-button next" onClick={nextSlide}>
                  &#8250;
                </button>
              )}
            </div>
            {images.length > 1 && (
              <div className="slider-dots">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${currentSlide === index ? "active" : ""}`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            )}
          </div>
          <button className="close-modal" onClick={() => setGetModal(false)}>
            <img src={CloseImg} alt="close icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
