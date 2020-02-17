import React from 'react';
import PropTypes from 'prop-types';

const MyButton = ({
  imgUrl,
  alt,
  selected,
  selection,
  onClick,
}) => {
  const getSelectedClass = (current) => (current === selected ? 'selected' : '');

  return (
    <button
      className={getSelectedClass(selection)}
      type="button"
      onClick={onClick}
    >
      <img
        src={imgUrl}
        alt={alt}
      />
      <span>{selected}</span>
    </button>
  );
};

MyButton.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

MyButton.defaultProps = {
  onClick: () => {},
};

export default MyButton;
