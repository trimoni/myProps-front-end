import { Link } from "react-router-dom";
import styles from "./TenantCard.module.css";

const TenantCard = ({ tenant, handleDeleteTenant }) => {
  return (
    <div>
      <article className={styles.container}>
        <header>
          <span onClick={() => handleDeleteTenant(tenant._id)}>X</span>
        </header>
        <Link to={`/tenants/${tenant._id}/edit`} state={tenant}>
          <p>Name: {tenant.name}</p>
          <p>Lease: {tenant.lease}</p>
          <p>Job/Jobs: {tenant.jobs}</p>
          <p>Salary: ${tenant.salary} per year</p>
          {tenant.comments.map((comment) => (
            <p key={comment.content}>{comment.content}</p>
          ))}
        </Link>
      </article>
    </div>
  );
};

export default TenantCard;
