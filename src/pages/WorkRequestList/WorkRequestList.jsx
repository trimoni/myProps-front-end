
const WorkRequestList = (props) => {
  return (
    <>
      <h2>List of all work requests</h2>
      {props.listings.map(listing =>
        <div key={listing._id}>
          <p>listing:{listing.address}</p>
          {listing.workRequests.map(workRequest =>
            <div key={workRequest._id}>
              <p>Category: {workRequest.category}</p>
              <p>Details: {workRequest.details}</p>
              <p>Resolution: {workRequest.resolution}</p>
              <p>Urgency: {workRequest.urgency === false ? 'Not urgent' : 'Yes'}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default WorkRequestList;