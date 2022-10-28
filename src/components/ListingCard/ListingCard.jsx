import { Link } from "react-router-dom";
import "./ListingCard.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const ListingCard = ({ listing }) => {
  return (
    <div className="card-container">
      <div>
        <Link to={`/listing/${listing._id}/edit`} state={listing}>
          <Card style={{ width: "18rem", background: "#03546d" }}>
            <Card.Img variant="top" src={listing.photo} />
            <Card.Body>
              <Card.Title 
                style={{fontSize: "25px", color:"white", fontWeight:"bold"}}
              >
                {listing.address}
              </Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item style={{fontWeight:"bold", fontSize: "17px", background: "#03546d", color: "white"}}>
                Bedrooms: {listing.bedroom} / Bathrooms: {listing.bathroom}
              </ListGroup.Item>
              <ListGroup.Item style={{fontWeight:"bold", background: "#03546d", color:"white"}}>Rent: ${listing.rent}</ListGroup.Item>
            </ListGroup>
            <Card.Body stylr={{color:"white", fontWeight: "bold"}}>
              <h9 style={{fontWeight: "bold", color: "white"}}>Tenants:</h9>
              {listing.tenants.length ?
                <>
                  {listing.tenants.map((tenant) =>
                    <li style={{fontWeight:"bold", fontSize: "15px", color:"white"}} key={tenant._id}>{tenant.name}</li>
                  )}
                </>
                :
                <>
                  <p style={{color:"white"}}>No tenants currently</p>
                </>
              }
            </Card.Body>
            <ListGroup>
            </ListGroup>
          </Card>
        </Link>
        <div className="add-work-r-Link">
        <Link to="/listings/:id/workRequests" state={listing}>
          Add Work request
        </Link>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
