import { Link} from "react-router-dom";

const TenantCard = ({ tenant, handleDeleteTenant }) => {
  return ( 
    <>
      <button onClick={() => handleDeleteTenant(tenant._id)}>X</button>
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
    </>
  );
}

export default TenantCard;