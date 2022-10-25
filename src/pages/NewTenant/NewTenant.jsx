import { useState } from "react"
import styles from './NewTenant.module.css'

const NewTenant = (props) => {
  const [form, setForm] = useState({
    lease: '',
    name: '',
    job: '',
    salary: '',
    contact: '',
    current: false
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddTenant(form)
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="listing-input">Listing</label>
        <select
          required
          name="listing"
          id="listing-input"
          value={form.listing.address}
          onChange={handleChange}
        >
          <option value="">322 Fox Drive</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select> */}
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
          name="job"
          id="job-input"
          value={form.job}
          placeholder="Add job..."
          onChange={handleChange}
        />
        <label htmlFor="salary-input">Salary</label>
        <input
          required
          type="number"
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
        <label htmlFor="current-input">Current</label>
        <input
          required
          type="checkbox"
          name="current"
          id="current-input"
          value={form.current}
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default NewTenant