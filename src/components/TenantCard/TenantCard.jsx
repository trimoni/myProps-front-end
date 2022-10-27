import { Link } from "react-router-dom";
import styles from './TenantCard.module.css'
import { Card } from "react-bootstrap"


const TenantCard = ({ tenant, handleDeleteTenant }) => {
  return (
    <div>
      <article className={styles.container}>
        <header>
          <span onClick={() => handleDeleteTenant(tenant._id)}>X</span>
        </header>
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
          {tenant.comments.map(comment =>
            <p key={comment.content}>
              {comment.content}
            </p>
          )}
        </Link>
      </article>

      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{tenant.name}</Card.Title><br />
        <Card.Subtitle className="mb-2 text-muted">
          <div>
            Lease: {tenant.lease}
          </div><br />
          <div>
            Job/Jobs: {tenant.jobs}
          </div><br />
          <div>
            Salary: ${tenant.salary} per year
          </div><br />
        </Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default TenantCard;