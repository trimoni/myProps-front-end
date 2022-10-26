import { Link } from "react-router-dom";
import './ListingCard.css'

const ListingCard = ({ listing }) => {
  return (
    <Link to={`/listing/${listing._id}/edit`} state={listing}>
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
};

export default ListingCard;
