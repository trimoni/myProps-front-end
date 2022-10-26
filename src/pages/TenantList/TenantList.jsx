import TenantCard from "../../components/TenantCard/TenantCard";
import styles from './TenantList.css'

const TenantList = ({ tenants, handleDeleteTenant }) => {
  return (
    <>
      <h2>List of all Tenants</h2>
      <main className={styles.container}>
        {tenants.map(tenant =>
            <TenantCard key={tenant._id} tenant={tenant} handleDeleteTenant={handleDeleteTenant}/>
        )}
      </main>
    </>
  );
}

export default TenantList;