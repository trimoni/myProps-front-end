import { useState } from "react";
import styles from './AddListing.module.css'

const AddListing = (props) => {
  const [formData, setFormData] = useState({
    address: '',
    rent: '',
    bedroom: '',
    bathroom: '',
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
        <label htmlFor="rent">Monthly Rent:</label>
        <input
          required
          type="text"
          name="rent"
          id="rent"
          value={formData.rent}
          placeholder="Rent"
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
          name="bathroom"
          id="bathroom"
          value={formData.bathroom}
          placeholder="Num"
          onChange={handleChange}
        >
          <option value="1">1</option>
          <option value="1.5">1.5</option>
          <option value="2">2</option>
          <option value="2.5">2.5</option>
          <option value="3">3</option>
          <option value="3+">3+</option>
        </select>
        <label htmlFor="pets">Pets:</label>
        <input
          required
          type="text"
          name="pets"
          id="pets"
          value={formData.pets}
          placeholder="Cat, Dog, etc..."
          onChange={handleChange}
        />
        <label htmlFor="details">Details:</label>
        <input
          required
          type="text"
          name="details"
          id="details"
          value={formData.details}
          placeholder="Details"
          onChange={handleChange}
        />
        <button type="submit">Add Listing</button>
      </form>
    </main>
  );
}

export default AddListing;