import { Link } from "react-router-dom"

const ListingCard = ({ listing }) => {
  return ( 
    <Link to={`/listing/${listing._id}/edit`} state={listing}>
      <article>
        <header>
          <span>
            <div>
            <img src={listing.photo} alt="property" />
            </div>
            <div>
            <h1>{listing.address}</h1>
            </div>
            <div>
            <h1>{listing.price}</h1>
            </div>
          </span>
        </header>
      </article>
      </Link>
  );
}

export default ListingCard;