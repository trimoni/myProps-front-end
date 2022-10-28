import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './EditWorkRequest.css'
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
      <h2>Edit work request</h2>
      <div className="workRequest-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="category-input">Category</label>
          </div>
          <div>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
            />
          </div>
          <div>

            <label htmlFor="details-input">Details</label>
            <textarea
              type="text"
              name="details"
              value={form.details}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>

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
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
};

export default EditWorkRequest;
