import { Link } from "react-router-dom";
import "./ListingCard.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const ListingCard = ({ listing }) => {
  return (
    <div className="card-container">
      <div>
        <Link to={`/listing/${listing._id}/edit`} state={listing}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={listing.photo} />
            <Card.Body>
              <Card.Title 
                style={{fontSize: "25px", color:"black", fontWeight:"bold"}}
              >
                {listing.address}
              </Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item style={{fontWeight:"bold", fontSize: "17px"}}>
                Bedrooms: {listing.bedroom} / Bathrooms: {listing.bathroom}
              </ListGroup.Item>
              <ListGroup.Item>Rent: ${listing.rent}</ListGroup.Item>
            </ListGroup>
            <Card.Text>
              Tenants:
              {listing.tenants.length ?
                <>
                  {listing.tenants.map((tenant) =>
                    <li key={tenant._id}>{tenant.name}</li>
                  )}
                </>
                :
                <>
                  <li>No tenants currently</li>
                </>
              }
            </Card.Text>
            <ListGroup>
            </ListGroup>
          </Card>
        </Link>
        <Link to="/listings/:id/workRequests" state={listing}>
          Add Work request
        </Link>
      </div>
    </div>
  );
};

export default ListingCard;
