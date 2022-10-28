import TenantCard from "../../components/TenantCard/TenantCard";
import "./TenantList.css";

const TenantList = ({ tenants, handleDeleteTenant }) => {
  return (
    <>
      <h2>List of all Tenants</h2>
      <main className="tenant-container">
        {tenants.map((tenant) => (
          <div id="tenant-card" key={tenant._id}>
            <TenantCard
              key={tenant._id}
              tenant={tenant}
              handleDeleteTenant={handleDeleteTenant}
            />
          </div>
        ))}
      </main>
    </>
  );
};

export default TenantList;
