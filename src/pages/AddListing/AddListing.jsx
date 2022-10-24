import { useState, useEffect } from "react";

const AddListing = (props) => {
  const [formData, setFormData] = useState({
    address: '',
    bedroom: '',
    bathroom: '',
    rent: '',
    pets: '',
    details: '',
  })

  const handleChange = ({ target }) => {
    setFormData({...formData, [target.name]: target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddListing(formData)
  }


  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="address">Address</label>
        <input
          required
          type="text"
          name="address"
          id="address"
          value={formData.address}
          placeholder="Address"
          onChange={handleChange}
        />
        <label htmlFor="bedroom">Bedroom</label>
				<textarea
          required
          name="bedroom"
          id="text-input"
          value={formData.text}
          placeholder="Text"
          onChange={handleChange}
        />
        <label htmlFor="category-input">Category</label>
        <select
          required
          name="category"
          id="category-input"
          value={form.category}
          onChange={handleChange}
        >
          <option value="News">News</option>
          <option value="Games">Games</option>
          <option value="Music">Music</option>
          <option value="Movies">Movies</option>
          <option value="Sports">Sports</option>
          <option value="Television">Television</option>
        </select>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  );
}

export default AddListing;