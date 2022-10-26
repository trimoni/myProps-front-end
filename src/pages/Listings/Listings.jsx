import ListingCard from "../../components/ListingCard/ListingCard";
import "./Listings.css"


const Listings = ({ listings }) => {
  return ( 
    <main className="listing-container">
    <div>
      <h1>Listings</h1>

      <div className="class-div">{listings.map((l) => (
        <ListingCard listing={l} key={l._id}/>
      ))}</div>

      {/* map through the listings to get the user's listings */}
      {/* if user have a listing, then display the listings */}
      {/* if user doesn't have a listing, then display "No listing" */}

  
    
    </div>
    </main>
  );
}

export default Listings;