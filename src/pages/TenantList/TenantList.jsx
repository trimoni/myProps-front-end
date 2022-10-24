
const TenantList = (props) => {
  return (
    <>
      <h2>List of all Tenants</h2>
      {props.tenants.map(tenant =>
        <>
          <p key={tenant._id}>
            Address: {tenant.listing}
          </p>
          <p>
            Name: {tenant.name}
          </p>
        </>
      )}
    </>
  );
}

export default TenantList;