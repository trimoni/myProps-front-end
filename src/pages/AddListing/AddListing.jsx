import { useState } from "react";
import styles from "./AddListing.module.css"
import { Link } from "react-router-dom";

const AddListing = (props) => {
  const [form, setForm] = useState({
    address: "",
    photo: "",
    rent: "",
    bedroom: "1",
    bathroom: "1",
    pets: "",
    details: "",
  });

  const [photoData, setPhotoData] = useState({});

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddListing(form, photoData.photo);
  };

  const handleChangePhoto = (evt) => {
    console.log(evt.target.files, "HERE I AM");
    setPhotoData({ photo: evt.target.files[0] });
  };

  return (
    <main className="container">
      <form className={styles.container} onSubmit={handleSubmit}>
        <h1>Add your Listing <Link to="/listings">Return</Link></h1>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor="address">Address</label>
          <input
            required
            autoComplete="off"
            type="text"
            name="address"
            id="address"
            value={form.address}
            placeholder="Address"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor="photo">Upload Picture</label>
          <input
            multiple
            type="file"
            id="photo"
            name="photo"
            onChange={handleChangePhoto}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="rent">Monthly Rent:</label>
          <input
            required
            autoComplete="off"
            type="text"
            name="rent"
            id="rent"
            value={form.rent}
            placeholder="Rent"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label  htmlFor="bedroom">Bedroom</label>
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
        <div className={styles.inputContainer}>
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
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor="pets">Pets:</label>
          <input
            required
            autoComplete="off"
            type="text"
            name="pets"
            id="pets"
            value={form.pets}
            placeholder="Cat, Dog, etc..."
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
        <label className={styles.label} htmlFor="details">Details:</label>
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
};

export default AddListing;
