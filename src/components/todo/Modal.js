function Modal(props) {
  return (
    <div className="modal-body p-4 text-center">
      <h5 className="mb-0">Are you sure?</h5>
      <div className="modal-footer flex-column border-top-0" data-backdrop="true">
        <button type="button" className="btn btn-lg btn-primary w-50 mx-0 mb-2">
          Confirm
        </button>
        <button
          type="button"
          className="btn btn-lg btn-light w-10 mx-0"
          data-bs-dismiss="modal"
          onClick={props.onClick}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
