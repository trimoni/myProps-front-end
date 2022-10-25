import "./Listings.css"


const Listings = ({user , listing}) => {
  return ( 
    <div className="listing-container">
      <h1>Listings</h1>
      {listing.map(l => (
        <li>{l.address}</li>
      ))}
      {/* map through the listings to get the user's listings */}
      {/* if user have a listing, then display the listings */}
      {/* if user doesn't have a listing, then display "No listing" */}


    
    </div>
  );
}

export default Listings;