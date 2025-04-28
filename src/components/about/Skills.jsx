import React from "react";

const skillsContent = [
  { skillClass: "p91", skillPercent: "91", skillName: "Modeling" },
  { skillClass: "p95", skillPercent: "95", skillName: "UV Mapping" },
  { skillClass: "p92", skillPercent: "92", skillName: "Texturing" },
  { skillClass: "p90", skillPercent: "90", skillName: "Rendering" },
  { skillClass: "p89", skillPercent: "89", skillName: "Lighting" },
  { skillClass: "p50", skillPercent: "50", skillName: "Animation" },
  { skillClass: "p82", skillPercent: "82", skillName: "Post-production" },
  { skillClass: "p85", skillPercent: "85", skillName: "Lookdev" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
