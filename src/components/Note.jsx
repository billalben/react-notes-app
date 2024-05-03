import { useState } from "react";
import PropTypes from "prop-types";
import { MdDeleteForever } from "react-icons/md";
import ConfirmationModal from "./ConfirmationModal";

const Note = ({ id, text, date, handleDeleteNote }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    handleDeleteNote(id);
    setShowModal(false);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          onClick={handleDeleteClick}
          className="delete-icon"
          size="1.3em"
        />
      </div>
      {showModal && (
        <ConfirmationModal
          message="Are you sure you want to delete this note?"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
};

Note.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
};

export default Note;
