import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Andrei" },
  { meta: "last name", metaInfo: "Predusel" },
  { meta: "Age", metaInfo: "26 Years" },
  { meta: "Nationality", metaInfo: "Romanian" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Email", metaInfo: "andy1399andy@gmail.com" },
  { meta: "languages", metaInfo: "Romanian, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
