import { Link} from "react-router-dom";

const TenantCard = ({tenant}) => {
  return ( 
    <Link to={`/tenants/${tenant._id}/edit`} state={tenant}>
      
      <p>
        Name: {tenant.name}
      </p>
      <p>
        Lease: {tenant.lease}
      </p>
      <p>
        Job/Jobs: {tenant.jobs}
      </p>
      <p>
        Salary: ${tenant.salary} per year
      </p>
    </Link>
  );
}

export default TenantCard;