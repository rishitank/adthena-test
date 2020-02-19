import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ThemeDropdown = ({ user, themeState: [theme, setTheme] }) => {
  const [items] = useState([
    {
      label: 'light mode',
      value: 'light'
    }, {
      label: 'dark mode',
      value: 'dark'
    }
  ]);

  return (
    <div className="dropdown-holder">
      <h4>select theme:</h4>
      <select
        disabled={user === null || !Object.keys(user).length}
        value={theme}
        className="dropdown"
        onChange={e => setTheme(e.currentTarget.value)}
      >
        {items.map(({ value, label }) => (
          <option
            key={value}
            value={value}
          >
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

ThemeDropdown.defaultProps = {
  user: null
};

ThemeDropdown.propTypes = {
  user: PropTypes.object,
  themeState: PropTypes.array.isRequired
};

export default ThemeDropdown;
