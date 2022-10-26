import { Link } from "react-router-dom";
import styles from './TenantCard.module.css'


const TenantCard = ({ tenant, handleDeleteTenant }) => {
  return ( 
    <>
    <button onClick={() => handleDeleteTenant(tenant._id)}>X</button>
    <Link to={`/tenants/${tenant._id}/edit`} state={tenant}>
      <article className={styles.container}>
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
      </article>
    </Link>
    </>
  );
}

export default TenantCard;