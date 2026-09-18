
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Projects = () => {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    projectName: "",
    techStack: "",
    description: "",
  });

  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (
      !form.projectName ||
      !form.techStack ||
      !form.description
    ) {
      return;
    }

    if (editId !== null) {
      dispatch({
        type: "UPDATE_PROJECT",
        payload: {
          ...form,
          id: editId,
        },
      });

      setEditId(null);
    } else {
      dispatch({
        type: "ADD_PROJECT",
        payload: {
          ...form,
          id: Date.now(),
        },
      });
    }

    setForm({
      projectName: "",
      techStack: "",
      description: "",
    });
  };

  const handleEdit = (item) => {
    setForm(item);
    setEditId(item.id);
  };

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_PROJECT",
      payload: id,
    });
  };

  return (
    <div className="form_page">
      <h2>Projects</h2>

      <input
        type="text"
        name="projectName"
        placeholder="Project Name"
        value={form.projectName}
        onChange={handleChange}
      />

      <input
        type="text"
        name="techStack"
        placeholder="Tech Stack"
        value={form.techStack}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Project Description"
        value={form.description}
        onChange={handleChange}
      />

      <button id="add_project" onClick={handleSubmit}>
        {editId !== null
          ? "Update Project"
          : "Add Project"}
      </button>

      <div className="entries">
        {projects.map((item) => (
          <div className="entry" key={item.id}>
            <h3>{item.projectName}</h3>
            <p>{item.techStack}</p>
            <p>{item.description}</p>

            <button onClick={() => handleEdit(item)}>
              Edit
            </button>

            <button
              id="delete"
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

export default Projects;