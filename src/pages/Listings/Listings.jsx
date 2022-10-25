import "./Listings.css"


const Listings = (props) => {
  return ( 
    <div className="listing-container">
      <h1>Listings</h1>
  
      {props.listing.map(l => (
        <li>{l.address}</li>
      ))}
    
    </div>
  );
}

export default Listings;