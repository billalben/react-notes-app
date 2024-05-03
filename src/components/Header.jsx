import PropTypes from "prop-types";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        className="save"
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => {
            localStorage.setItem("dark-mode", !previousDarkMode);
            return !previousDarkMode;
          })
        }
      >
        Toggle Mode
      </button>
    </div>
  );
};

Header.propTypes = {
  handleToggleDarkMode: PropTypes.func.isRequired,
};

export default Header;
