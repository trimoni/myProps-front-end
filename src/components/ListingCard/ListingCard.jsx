import { Link } from "react-router-dom";
import './ListingCard.css'

const ListingCard = ({ listing }) => {
  console.log(listing, )
  return (
  <>
    <Link to={`/listing/${listing._id}/edit`} state={listing}>
      <article>
        <header>
          <span>
            <div>
              {listing.photos?.length ? 
              listing.photos.map((photo, idx) => {
                return <img
                  key={idx}
                  src={photo}
                  alt=''
                  height='200'
                  width='200'
                />
              })
              : <div>No Photos</div>
            }
            </div>
            <div>

              <h1>{listing.address}</h1>
              <h1>{listing.price}</h1>

            </div>
          </span>
        </header>
      </article>
    </Link>
    <Link
        to='/listings/:id/workRequests'
        state={listing}>Add Work request</Link>
        </>

  );
};

export default ListingCard;
