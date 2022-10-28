import { useState } from "react";
import styles from "./AddTenant.module.css";

const AddTenant = (props) => {
  const [form, setForm] = useState({
    lease: '',
    name: '',
    jobs: '',
    salary: '',
    contact: '',
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddTenant(form);
  };

  return (
    <main className="container">
      <form className={styles.container} onSubmit={handleSubmit}>
      <h1>Add your Tenant</h1>
        <div>
          <label htmlFor="name-input">Name</label>
          <input
            required
            autoComplete="off"
            type="text"
            name="name"
            id="lease-input"
            value={form.name}
            placeholder="add name..."
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lease-input">Lease</label>
          <input
            required
            autoComplete="off"
            type="text"
            name="lease"
            id="lease-input"
            value={form.lease}
            placeholder="Duration..."
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="job-input">Job</label>
          <input
            required
            autoComplete="off"
            type="text"
            name="jobs"
            id="jobs-input"
            value={form.jobs}
            placeholder="Add job..."
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="salary-input">Salary</label>
          <input
            required
            autoComplete="off"
            type="text"
            name="salary"
            id="salary-input"
            value={form.salary}
            placeholder="Add salary..."
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="number-input">Contact</label>
          <input
            required
            type="number"
            name="contact"
            id="contact-input"
            value={form.contact}
            placeholder="Add contact..."
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Tenant</button>
      </form>
    </main>
  );
};

export default AddTenant;
