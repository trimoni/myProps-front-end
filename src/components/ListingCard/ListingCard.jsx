import { Link } from "react-router-dom";
import "./ListingCard.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const ListingCard = ({ listing }) => {
  return (
    <div className="card-container">
      <Link to={`/listing/${listing._id}/edit`} state={listing}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={listing.photo} />
          <Card.Body>
            <Card.Title>{listing.address}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              Bed: {listing.bedroom} / Bath: {listing.bathroom}
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
  );
};

export default ListingCard;
