import { Link } from "react-router-dom";
import "./ListingCard.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'

const ListingCard = ({ listing }) => {

  return (
      <Link to={`/listing/${listing._id}/edit`} state={listing}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={listing.photo} />
          <Card.Body>
            <Card.Title>{listing.address}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Bed: {listing.bedroom} / Bath: {listing.bathroom}</ListGroup.Item>
            <ListGroup.Item>Rent: ${listing.rent}</ListGroup.Item>
          </ListGroup>
          <Card.Text>
            {}
          </Card.Text>
          <Card.Body>
            <Link 
              to="/listings/:id/workRequests" 
              state={listing}>
              Add Work request
          </Link>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ListingCard;
