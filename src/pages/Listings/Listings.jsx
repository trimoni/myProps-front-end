import ListingCard from "../../components/ListingCard/ListingCard";
import "./Listings.css"


const Listings = ({ listings }) => {
  return (
    <main className="listing-container">
      <div>
        <h1>Listings</h1>

        <div className="class-div">{listings.map((l) => (
          <ListingCard listing={l} key={l._id} />
        ))}</div>
    </main>
  );
}


export default Listings;