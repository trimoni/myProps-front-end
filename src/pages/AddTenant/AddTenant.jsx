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
    <main>
      <form className={styles.container} onSubmit={handleSubmit}>
        <label htmlFor="lease-input">Lease</label>
        <input
          required
          type="text"
          name="lease"
          id="lease-input"
          value={form.lease}
          placeholder="Duration..."
          onChange={handleChange}
        />
        <label htmlFor="name-input">Name</label>
        <input
          required
          type="text"
          name="name"
          id="lease-input"
          value={form.name}
          placeholder="add name..."
          onChange={handleChange}
        />
        <label htmlFor="job-input">Job</label>
        <input
          required
          type="text"
          name="jobs"
          id="jobs-input"
          value={form.jobs}
          placeholder="Add job..."
          onChange={handleChange}
        />
        <label htmlFor="salary-input">Salary</label>
        <input
          required
          type="text"
          name="salary"
          id="salary-input"
          value={form.salary}
          placeholder="Add salary..."
          onChange={handleChange}
        />
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
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  );
};

export default AddTenant;
