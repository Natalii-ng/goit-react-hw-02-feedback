import PropTypes from 'prop-types';

export const NoFeedback = ({ message }) => {
  return <span>{message}</span>;
};

NoFeedback.propTypes = {
  message: PropTypes.string.isRequired,
};
