import { Link } from "react-router-dom";
import './ListingCard.css'

const ListingCard = ({ listing, handleDeleteListing }) => {
  console.log(listing, )
  return (
    <Link to={`/listing/${listing._id}/edit`} state={listing}>
      <article>
        <header>
          <span>
            <div>
              <img
                src={
                  listing.photo
                    ? listing.photo
                    : null}
                alt=''
                height='300'
                width='300'
              />
            </div>
            <div>
              <h1>{listing.address}</h1>
            </div>
            <div>
              <h1>{listing.price}</h1>
            </div>
            <button onClick={() => handleDeleteListing(listing._id)}>Delete</button>
          </span>
        </header>
      </article>
    </Link>
  );
};

export default ListingCard;
