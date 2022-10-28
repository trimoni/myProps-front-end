import { Link } from "react-router-dom";
import './WorkRequestList.css'
const WorkRequestList = (props) => {
  return (
    <>
      <h2>List of all work requests</h2>
      {props.listings.map((listing) => (
        <div key={listing._id} className='work-container'>
          <h4>listing:{listing.address}</h4>
          {listing.workRequests.map((workRequest) => (
            <div key={workRequest._id} className='a-container'>
              <Link
                to={`/listings/${listing._id}/workRequests/${workRequest._id}`}
                state={{
                  listing: listing,
                  workRequest: workRequest,
                }}
              >
                <p>Category: {workRequest.category}</p>
                <p>Details: {workRequest.details}</p>
                <p>Resolution: {workRequest.resolution}</p>
                <p>
                  Urgency:{" "}
                  {workRequest.urgency === false ? "Not urgent" : "Yes"}
                </p>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default WorkRequestList;
