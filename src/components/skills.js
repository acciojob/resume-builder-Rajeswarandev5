
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Skills = () => {
  const skills = useSelector((state) => state.skills);
  const dispatch = useDispatch();

  const [skill, setSkill] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = () => {
    if (!skill.trim()) return;

    if (editId !== null) {
      dispatch({
        type: "UPDATE_SKILL",
        payload: {
          id: editId,
          skill,
        },
      });

      setEditId(null);
    } else {
      dispatch({
        type: "ADD_SKILL",
        payload: {
          id: Date.now(),
          skill,
        },
      });
    }

    setSkill("");
  };

  const handleEdit = (item) => {
    setSkill(item.skill);
    setEditId(item.id);
  };

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_SKILL",
      payload: id,
    });
  };

  return (
    <div className="form_page">
      <h2>Skills</h2>

      <input
        type="text"
        name="skill"
        placeholder="Enter Skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />

      <button id="add_skill" onClick={handleSubmit}>
        {editId !== null ? "Update Skill" : "Add Skill"}
      </button>

      <div className="entries">
        {skills.map((item) => (
          <div className="entry" key={item.id}>
            <p>{item.skill}</p>

            <button onClick={() => handleEdit(item)}>
              Edit
            </button>

            <button
              id="delete_skill"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;