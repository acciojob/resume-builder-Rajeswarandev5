
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const SocialMedia = () => {
  const social = useSelector((state) => state.social);
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = () => {
    if (!value.trim()) return;

    if (editId !== null) {
      dispatch({
        type: "UPDATE_SOCIAL",
        payload: {
          id: editId,
          Social: value,
        },
      });

      setEditId(null);
    } else {
      dispatch({
        type: "ADD_SOCIAL",
        payload: {
          id: Date.now(),
          Social: value,
        },
      });
    }

    setValue("");
  };

  const handleEdit = (item) => {
    setValue(item.Social);
    setEditId(item.id);
  };

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_SOCIAL",
      payload: id,
    });
  };

  return (
    <div className="form_page">
      <h2>Social Media</h2>

      <input
        type="text"
        name="Social"
        placeholder="Social Media URL"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button id="add_social" onClick={handleSubmit}>
        {editId !== null
          ? "Update Social Media"
          : "Add Social Media"}
      </button>

      <div className="entries">
        {social.map((item) => (
          <div className="entry" key={item.id}>
            <p>{item.Social}</p>

            <button onClick={() => handleEdit(item)}>
              Edit
            </button>

            <button
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

export default SocialMedia;