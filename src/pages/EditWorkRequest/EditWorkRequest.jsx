import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from './EditWorkRequest.module.css';

const EditWorkRequest = (props) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    category: "",
    details: "",
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
      <div className={styles.container}>
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
          </div>
          <div id="text-area">
            <textarea
              type="text"
              name="details"
              value={form.details}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <label htmlFor="resolution-input">Resolution</label>
          </div>
          <div>
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
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditWorkRequest;
