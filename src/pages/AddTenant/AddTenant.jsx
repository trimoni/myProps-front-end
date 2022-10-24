import NewTenant from "../NewTenant/NewTenant";

const AddTenant = (props) => {
  return (
    <>
    <NewTenant handleAddTenant={props.handleAddTenant}/>
    </>
  );
}

export default AddTenant;