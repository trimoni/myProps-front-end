import ListingCard from "../../components/ListingCard/ListingCard";
import "./Listings.css"


const Listings = ({ listings }) => {
  return ( 
    <div className="listing-container">
      <h1>Listings</h1>

      {listings.map((l) => (
        <ListingCard listing={l} key={l._id}/>
      ))}

      {/* map through the listings to get the user's listings */}
      {/* if user have a listing, then display the listings */}
      {/* if user doesn't have a listing, then display "No listing" */}


    
    </div>
  );
}

export default Listings;