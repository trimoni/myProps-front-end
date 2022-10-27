import { Link } from "react-router-dom";
import styles from './TenantCard.module.css'
import { Card } from "react-bootstrap"


const TenantCard = ({ tenant, handleDeleteTenant }) => {
  return (
    <article>
      <Card className={styles.container} style={{ width: '18rem' }}>
        <header>
          <span onClick={() => handleDeleteTenant(tenant._id)}>X</span>
        </header>
        <Link to={`/tenants/${tenant._id}/edit`} state={tenant}>
        <Card.Body>
          <Card.Title style={{width: '15rem'}}>{tenant.name}</Card.Title><br />
          <Card.Subtitle className="mb-2 text-muted">
            <div style={{width: '15rem'}}>Lease: {tenant.lease}</div><br />
            <div style={{width: '15rem'}}>Job/Jobs: {tenant.jobs}</div><br />
            <div style={{width: '15rem'}}>Salary: ${tenant.salary} per year</div><br />
          </Card.Subtitle>
          <Card.Text style={{width: '15rem'}}>
            {tenant.comments.map(comment =>
              <li key={comment.content}>
                {comment.content}
              </li>
            )}
          </Card.Text>
        </Card.Body>
        </Link>
      </Card>
    </article>
  );
}

export default TenantCard;