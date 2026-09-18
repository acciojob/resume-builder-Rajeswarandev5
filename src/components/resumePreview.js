
import React from "react";
import { useSelector } from "react-redux";

const ResumePreview = () => {
  const resume = useSelector((state) => state);

  const {
    profile,
    education,
    skills,
    projects,
    social,
  } = resume;

  return (
    <div className="resume_preview">
      <h2>Resume Preview</h2>

      <h1>
        {profile.fname} {profile.lname}
      </h1>

      <p>{profile.phone}</p>
      <p>{profile.address}</p>

      {profile.url && (
        <img
          src={profile.url}
          alt="Profile"
          className="profile_image"
        />
      )}

      <hr />

      <h2>Education</h2>

      {education.map((item) => (
        <div key={item.id}>
          <h3>{item.courseName}</h3>
          <p>{item.college}</p>
          <p>{item.completionYear}</p>
          <p>{item.percentage}</p>
        </div>
      ))}

      <h2>Skills</h2>

      <ul>
        {skills.map((item) => (
          <li key={item.id}>{item.skill}</li>
        ))}
      </ul>

      <h2>Projects</h2>

      {projects.map((item) => (
        <div key={item.id}>
          <h3>{item.projectName}</h3>
          <p>{item.techStack}</p>
          <p>{item.description}</p>
        </div>
      ))}

      <h2>Social Media</h2>

      {social.map((item) => (
        <p key={item.id}>{item.Social}</p>
      ))}
    </div>
  );
};

export default ResumePreview;