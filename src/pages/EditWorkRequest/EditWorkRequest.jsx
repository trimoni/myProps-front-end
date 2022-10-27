import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const EditWorkRequest = (props) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    category: "",
    details: "",
    urgency: false,
    resolution: "Currently Working",
  });

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    props.handleUpdateWorkRequest(
      state.listing._id,
      state.workRequest._id,
      form
    );
    navigate("/workRequests");
  };

  return (
    <>
      <h2>Edit Work request</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="category-input">Category</label>
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
        />
        <label htmlFor="details-input">Details</label>
        <textarea
          type="text"
          name="details"
          value={form.details}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="resolution-input">Resolution</label>
        <select
          name="resolution"
          value={form.resolution}
          multiple={false}
          onChange={handleChange}
        >
          <option value="Currently Working">Currently Working</option>
          <option value="Completed">Completed</option>
          <option value="Now Started">Now Started</option>
        </select>
        <label htmlFor="urgency-input">
          Urgent
          <input type="checkbox" name="urgency" value={form.urgency} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default EditWorkRequest;
