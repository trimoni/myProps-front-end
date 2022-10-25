import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const TenantCard = (props) => {
  console.log(tenant._id)
  return ( 
    <Link to={`/tenants/${tenant._id}`}>
      <p>
        Address: {props.tenant.address}
      </p>
      <p>
        Name: {props.tenant.name}
      </p>
    </Link>
  );
}

export default TenantCard;