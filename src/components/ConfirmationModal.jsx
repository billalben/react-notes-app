import PropTypes from "prop-types";
import { MdClose } from "react-icons/md";

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Confirm</h2>
          <MdClose
            className="close-icon"
            size={28}
            style={{ cursor: "pointer" }}
            onClick={onCancel}
          />
        </div>
        <p>{message}</p>
        <div className="modal-buttons">
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

ConfirmationModal.propTypes = {
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ConfirmationModal;
