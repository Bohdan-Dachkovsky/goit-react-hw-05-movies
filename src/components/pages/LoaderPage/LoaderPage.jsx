import PropTypes from 'prop-types';
import textCss from './decorationStyle.module.css';
const LoaderPage = ({ message, downloadedForm }) => {
  return (
    <div>
      <span className={textCss.decoration}>{message}</span>
      <button
        onClick={() => {
          downloadedForm();
        }}
      >
        Reload
      </button>
    </div>
  );
};
export default LoaderPage;
LoaderPage.propTypes = {
  message: PropTypes.string.isRequired,
  downloadedForm: PropTypes.func.isRequired,
};
