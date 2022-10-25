import { useState } from "react";
import { useLocation } from "react-router-dom";

const EditListing = (props) => {
  const { state } = useLocation()
  console.log('STATE', state)
  const [form, setForm] = useState(state);
  const [photoData, setPhotoData] = useState({})

  const handleChange = ({ target }) => {
    setForm({...form, [target.name]: target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateBlog(form, photoData.photo)
  }

  const handleChangePhoto = evt => {
    setPhotoData({ photo: evt.target.files[0] })
  }

  return (  
    <main>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="address">Address</label>
          <input
            required
            type="text"
            name="address"
            id="address"
            value={form.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="photo">Upload Pictures</label>
          <input 
          required
          type="file"
          id="photo"
          name="photo"
          onChange={handleChangePhoto}
          />
        </div>
        <div>
          <label htmlFor="rent">Monthly Rent:</label>
          <input
            required
            type="text"
            name="rent"
            id="rent"
            value={form.rent}
            placeholder="Rent"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="bedroom">Bedroom</label>
          <select
            required
            name="bedroom"
            id="bedroom"
            value={'form.bedroom'}
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
        </div>
        <div>
          <label htmlFor="bathroom">Bedroom</label>
          <select
            required
            name="bathroom"
            id="bathroom"
            value={form.bathroom}
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
        </div>
        <div>
          <label htmlFor="pets">Pets:</label>
          <input
            required
            type="text"
            name="pets"
            id="pets"
            value={form.pets}
            placeholder="Cat, Dog, etc..."
            onChange={handleChange}
          />
        </div>
        <label htmlFor="details">Details:</label>
        <div>
          <textarea
            required
            type="text"
            name="details"
            id="details"
            value={form.details}
            placeholder="Details"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Listing</button>
      </form>
    </main>
  );
}

export default EditListing;