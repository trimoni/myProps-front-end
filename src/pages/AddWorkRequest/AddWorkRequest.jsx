import { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './AddWorkRequest.module.css'
const AddWorkRequest = (props) => {
  const location = useLocation();
  const [form, setForm] = useState({
    category: '',
    details: '',
    resolution: 'Currently Working'
  })

  const handleChange = ({ target }) => {

    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAddWorkRequest(location.state._id, form);
  };

  return (
    <>
      <div className="container">
        <form className={styles.container} onSubmit={handleSubmit}>
          <h2>Add a work request</h2>
          <div>
            <label htmlFor="category-input">Category</label>
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

export default AddWorkRequest;
