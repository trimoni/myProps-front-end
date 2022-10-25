import TenantCard from "../../components/TenantCard/TenantCard";


const TenantList = (props) => {
  return (
    <>
      <h2>List of all Tenants</h2>
      {props.tenants.map(tenant =>
          <TenantCard key={tenant._id} tenant={tenant}/>
      )}
    </>
  );
}

export default TenantList;