
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Profile = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_PROFILE",
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

  return (
    <div className="form_page">
      <h2>Profile</h2>

      <input
        type="text"
        name="fname"
        placeholder="First Name"
        value={profile.fname}
        onChange={handleChange}
      />

      <input
        type="text"
        name="lname"
        placeholder="Last Name"
        value={profile.lname}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={profile.phone}
        onChange={handleChange}
      />

      <input
        type="text"
        name="address"
        placeholder="Address"
        value={profile.address}
        onChange={handleChange}
      />

      <input
        type="text"
        name="url"
        placeholder="Profile Image URL"
        value={profile.url}
        onChange={handleChange}
      />
    </div>
  );
};

export default Profile;