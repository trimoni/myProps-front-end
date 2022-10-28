import { Link } from "react-router-dom";
import './WorkRequestList.css'
const WorkRequestList = (props) => {
  return (
    <>
      <h2>Work Requests</h2>
      {props.listings.map((listing) => (
        <div key={listing._id}>
          <h4>{listing.address}</h4>
          <div className='work-container'>
            {listing.workRequests.map((workRequest) => (
              <div key={workRequest._id} className='a-container'>
                <Link
                  to={`/listings/${listing._id}/workRequests/${workRequest._id}`}
                  state={{
                    listing: listing,
                    workRequest: workRequest,
                  }}
                >
                  <h5>{workRequest.category}</h5>
                  <li>{workRequest.details}</li>
                  <li>{workRequest.resolution}</li>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default WorkRequestList;
