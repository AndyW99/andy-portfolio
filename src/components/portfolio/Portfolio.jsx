import React, { useState } from "react";
import { Tabs, TabPanel } from "react-tabs";
import PortfolioData from "./portfolioData";
import Modal from "./modal/Modal";

const Portfolio = () => {
  const [getModal, setGetModal] = useState(false);
  const [modalId, setModalId] = useState(1);

  const handleModal = (id) => {
    setGetModal(true);
    setModalId(id);
  };

  return (
    <>
      <div className="portfolio-main">
        <Tabs>
          <div className="container">
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.map((item) => {
                  const { id, title, images, delayAnimation } = item;
                  // Use the first image from the array, or fallback to the legacy image property
                  const thumbnailImage = Array.isArray(images)
                    ? images[0]
                    : item.image;

                  return (
                    <div
                      key={id}
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className="tab-content"
                        onClick={() => handleModal(id)}
                      >
                        <img src={thumbnailImage} alt={title} />
                        <h3>
                          <span className="conent-title">{title}</span>
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
      {getModal && <Modal modalId={modalId} setGetModal={setGetModal} />}{" "}
    </>
  );
};

export default Portfolio;
