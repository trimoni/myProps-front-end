import TenantCard from "../../components/TenantCard/TenantCard";

const TenantList = ({ tenants, handleDeleteTenant }) => {
  return (
    <>
      <h2>List of all Tenants</h2>
      {tenants.map(tenant =>
          <TenantCard key={tenant._id} tenant={tenant} handleDeleteTenant={handleDeleteTenant}/>
      )}
    </>
  );
}

export default TenantList;