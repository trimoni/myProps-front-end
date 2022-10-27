import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import '../EditListing/EditListing.css'

const EditListing = (props) => {
  const { state } = useLocation()
  const { listingId } = useParams()
  const [form, setForm] = useState(state);
  const [photoData, setPhotoData] = useState({})
  const [selectedTenant, setSelectedTenant] = useState(null)
  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const selectTenant = ({ target }) => {
    setSelectedTenant(target.value)
  }

  const handleAddTenantToListing = (e) => {
    e.preventDefault()
    console.log(listingId);
    props.addTenantToListing(listingId, selectedTenant)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateListing(form, photoData.photo)
  }

  const handleChangePhoto = evt => {
    setPhotoData({ photo: evt.target.files[0] })
  }

  return (
    <main className="container">
      <form onSubmit={handleSubmit} className='edit'>
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
            value={form.bedroom}
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
        <button type="submit">UPDATE</button>
      {state.tenants.length ?
        state.tenants.map(tenant => (
          <div key={tenant._id}>
            <li>{tenant?.name}</li>
            <button onClick={() => props.removeTenant(listingId, tenant._id)}>X</button>
          </div>
        ))
        :
        <>
          <h3>No tenants in the property</h3>
        </>
      }
      <select
        name="tenants"
        id="tenant-list"
        onChange={selectTenant}
      >
        <option>Select a Tenant</option>
        {props.tenants.map(tenant => (
          <option key={tenant._id} value={tenant._id}>{tenant.name}</option>
        ))}
      </select>
      <button onClick={handleAddTenantToListing}>Add Tenant</button>
      <button onClick={() => props.handleDeleteListing(state._id)}>DELETE</button>
      </form>
    </main>
  );
}


export default EditListing;