import { Link } from "react-router-dom"

const ListingCard = ({ listing }) => {
  return ( 
    <Link to={`/listing/${listing._id}`}>
      <article>
        <header>
          <span>
            <img src={listing.photo} alt="property" />
            <h1>{listing.address}</h1>
            <h1>{listing.price}</h1>
          </span>
        </header>
      </article>
      </Link>
  );
}

export default ListingCard;