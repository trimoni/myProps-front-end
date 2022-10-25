import ListingCard from "../../components/ListingCard/ListingCard";
import "./Listings.css"


const Listings = ({ listings }) => {

  return (
    <div className="listing-container">
      <h1>Listings</h1>

      {listings.map((l) =>
        <ListingCard listing={l} key={l._id} />
      )}

    </div>
  );
}

export default Listings;