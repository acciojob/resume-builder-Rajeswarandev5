
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Education = () => {
  const education = useSelector(
    (state) => state.education
  );

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    courseName: "",
    completionYear: "",
    college: "",
    percentage: "",
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
      !form.courseName ||
      !form.completionYear ||
      !form.college ||
      !form.percentage
    ) {
      return;
    }

    if (editId !== null) {
      dispatch({
        type: "UPDATE_EDUCATION",
        payload: {
          ...form,
          id: editId,
        },
      });

      setEditId(null);
    } else {
      dispatch({
        type: "ADD_EDUCATION",
        payload: {
          ...form,
          id: Date.now(),
        },
      });
    }

    setForm({
      courseName: "",
      completionYear: "",
      college: "",
      percentage: "",
    });
  };

  const handleEdit = (item) => {
    setForm(item);
    setEditId(item.id);
  };

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_EDUCATION",
      payload: id,
    });
  };

  return (
    <div className="form_page">
      <h2>Education</h2>

      <input
        type="text"
        name="courseName"
        placeholder="Course Name"
        value={form.courseName}
        onChange={handleChange}
      />

      <input
        type="text"
        name="completionYear"
        placeholder="Completion Year"
        value={form.completionYear}
        onChange={handleChange}
      />

      <input
        type="text"
        name="college"
        placeholder="College"
        value={form.college}
        onChange={handleChange}
      />

      <input
        type="text"
        name="percentage"
        placeholder="Percentage"
        value={form.percentage}
        onChange={handleChange}
      />

      <button
        id="add_education"
        onClick={handleSubmit}
      >
        {editId !== null
          ? "Update Education"
          : "Add Education"}
      </button>

      <div className="entries">
        {education.map((item) => (
          <div className="entry" key={item.id}>
            <p>
              <strong>{item.courseName}</strong>
            </p>
            <p>{item.college}</p>
            <p>{item.completionYear}</p>
            <p>{item.percentage}</p>

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

export default Education;