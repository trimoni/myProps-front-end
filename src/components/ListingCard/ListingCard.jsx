import { Link } from "react-router-dom";
import "./ListingCard.css";
import CarouselStyle from "../../Carousel/CarouselStyle";
import { Carousel } from "react-bootstrap";

const ListingCard = ({ listing }) => {
  console.log(listing);
  return (
    <>
      {/* <Link to={`/listing/${listing._id}/edit`} state={listing}> */}
      <article>
        <header>
          <span>
            {listing.photos?.length ? (
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-bs-ride="true"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  {listing.photos.map((photo, idx) => {
                    return <CarouselStyle photo={photo} key={idx} />;
                  })}
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            ) : (
              <div>No Photos</div>
            )}
            <div>
              <h1>{listing.address}</h1>
              <h1>{listing.rent}</h1>
            </div>
          </span>
        </header>
      </article>
      {/* </Link> */}
      <Link to="/listings/:id/workRequests" state={listing}>
        Add Work request
      </Link>
    </>
  );
};

export default ListingCard;
