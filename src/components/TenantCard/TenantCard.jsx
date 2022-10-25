import { Link } from "react-router-dom";

const TenantCard = ({tenant}) => {
  return ( 
    <Link to={`/tenants/${tenant._id}`}>
      <p>
        Address: {tenant.address}
      </p>
      <p>
        Name: {tenant.name}
      </p>
    </Link>
  );
}

export default TenantCard;