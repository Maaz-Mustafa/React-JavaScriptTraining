const DeleteFromList = ({ handleDelete, openDelDiv }) => {
  return (
    <div className="Modal-content">
      Delete a Task
      <hr />
      Are you sure you want to delete this?
      <br />
      <div className="modal-style">
        <button className="btn-danger btn-padding" onClick={handleDelete}>
          Delete
        </button>
        <button className="btn-padding" onClick={openDelDiv}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteFromList;
