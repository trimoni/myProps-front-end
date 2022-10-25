
const TenantCard = (props) => {
  return ( 
    <>
      <p>
        Address: {props.tenant.address}
      </p>
      <p>
        Name: {props.tenant.name}
      </p>
    </>
  );
}

export default TenantCard;