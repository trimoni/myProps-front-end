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
    <h1>hello</h1>
  );
}

export default ListingDetails;