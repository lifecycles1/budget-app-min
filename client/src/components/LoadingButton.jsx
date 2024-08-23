// import PropTypes from "prop-types";

const LoadingButton = ({ type, loading, className, text, onClick }) => {
  return (
    <button type={type} disabled={loading} className={className} onClick={onClick}>
      {loading ? (
        <div className="flex items-center justify-center">
          <svg className="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      ) : (
        text
      )}
    </button>
  );
};

// LoadingButton.propTypes = {
//   type: PropTypes.string.isRequired,
//   loading: PropTypes.bool.isRequired,
//   className: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
//   onClick: PropTypes.func,
// };

export default LoadingButton;
