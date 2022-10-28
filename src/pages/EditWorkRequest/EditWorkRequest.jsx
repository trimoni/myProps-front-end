import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from './EditWorkRequest.module.css';

const EditWorkRequest = (props) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [form, setForm] = useState(state.workRequest);

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
      <div className="container">
        <form className={styles.container} onSubmit={handleSubmit}>
          <h2>Edit work request</h2>
          <div>
            <label htmlFor="category-input">Category</label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
            />
          </div>
          <div className="req-input">
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
            <button id="update-req" type='submit'>Update Request</button>
        </form>
      </div>
    </>
  );
};

export default EditWorkRequest;
