import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./EditTenant.css"

const EditTenant = (props) => {
  const { state } = useLocation();
  const [form, setForm] = useState(state);

  const [commentForm, setCommentForm] = useState(state);

  console.log(state);
  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleUpdateTenant(form);
  };

  const handleCommentChange = ({ target }) => {
    setCommentForm({ ...commentForm, [target.name]: target.value });
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    props.addTenantComment(state._id, commentForm);
  };

  return (
    <main className="main-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <h1>{state.name}</h1>
          <div className="input-container">
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
          </div>
          <div className="input-container">
            <label htmlFor="lease-input">Lease</label>
            <input
              required
              type="text"
              name="lease"
              id="lease-input"
              value={form.lease}
              placeholder="Lease Duration..."
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="job-input">Job</label>
            <input
              required
              type="text"
              name="jobs"
              id="job-input"
              value={form.jobs}
              placeholder="Add job..."
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
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
          </div>
          <div className="input-container">
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
          <button type="submit">SUBMIT</button>
        </form>
      <form className="comment-container" onSubmit={handleSubmitComment}>
        <h3>Add a Comment for {state.name}!</h3>
        <textarea name="content" onChange={handleCommentChange}></textarea>
        <button type="submit">Add Comment</button>
      </form>
    </main>
  );
};

export default EditTenant;
