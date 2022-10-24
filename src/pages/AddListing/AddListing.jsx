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
				<select
          required
          name="bedroom"
          id="bedroom"
          value={formData.bedroom}
          placeholder="Num"
          onChange={handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="6+">6+</option>
        </select>
        <label htmlFor="bathroom">Bedroom</label>
				<select
          required
          name="bedroom"
          id="bedroom"
          value={formData.bedroom}
          placeholder="Num"
          onChange={handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="6+">6+</option>
        </select>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  );
}

export default AddListing;