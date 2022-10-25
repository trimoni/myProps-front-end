import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import * as listingService from '../../services/listingService'

const ListingDetails = (props) => {
  const { id } = useParams()
  const [listing, setListing] = useState(null)

  useEffect(() => {
    const fetchListing = async () => {
      const data = await listingService.show(id)
      setListing(data)
    }
    fetchListing()
  }, [id])

  return (
    <main>
      <article>
        <header>
          <h3>{listing.address.toUpperCase()}</h3>
          <img src={listing.picture} alt="property"/>
        </header>
          <h2>{listing.rent} per month</h2>
          <h4>Bedroom:{listing.bedroom}</h4>
          <h4>Bathroom:{listing.bathroom}</h4>
          <h4>Pets:{listing.pets}</h4>
          <p>{listing.details}</p>
      </article>
    </main>
  );
}

export default ListingDetails;
