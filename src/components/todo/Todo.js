import { useState } from "react";
import Modal from "./Modal";

function Todo(props) {
  const [modelIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModelHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card mb-4 rounded-3 shadow-sm">
      <div className="card-header py-3 text-blue bg-light">
        <h4 className="my-0 fw-normal">{props.text}</h4>
      </div>
      <div className="card-body">
        <button
          type="button"
          className="w-100 btn btn-lg btn-danger"
          onClick={deleteHandler}
        >
          Delete
        </button>
        {modelIsOpen && <Modal onClick={closeModelHandler} />}
      </div>
    </div>
  );
}

export default Todo;
