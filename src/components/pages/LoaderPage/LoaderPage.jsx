import PropTypes from 'prop-types';
import textCss from './decorationStyle.module.css';
const LoaderPage = loading => {
  return (
    <div>
      <span className={textCss.decoration}>{loading.message}</span>
      <button
        onClick={() => {
          alert(loading.downloadedForm);
        }}
      >
        Reload
      </button>
    </div>
  );
};
export default LoaderPage;
LoaderPage.propTypes = {
  message: PropTypes.string,
  downloadedForm: PropTypes.string,
};
