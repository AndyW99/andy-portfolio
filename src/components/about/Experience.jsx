import React from "react";

const experienceContent = [
  {
    year: "2023 - present",
    position: "3D Generalist",
    compnayName: "D2Fly",
    details: `I've been working at D2Fly since 2023, focusing on modeling, texturing, and rendering in a creative studio environment. I love turning ideas into visuals that feel alive, blending artistic intuition with technical skills. For me, it’s all about creating pieces that tell a story and leave an impression.`,
  },
  {
    year: "2021 - 2023",
    position: " 3D Artist",
    compnayName: "Polker",
    details: `During my time at Polker, I was responsible for modeling, UV mapping, and texturing a wide range of game assets. My work included outfits, poker tables, and various props needed for gameplay and promotional content, always tailored to fit the project’s visual direction.`,
  },
  {
    year: "2019 - 2021",
    position: "3D Modeler",
    compnayName: "Freelance",
    details: `I worked as a freelance 3D artist with a focus on hard surface modeling. I created a variety of assets—mainly props and machinery—where clean forms and precision were essential.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
