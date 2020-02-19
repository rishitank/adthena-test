import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFetch, baseUrl } from './DataFetcher';
import ThemeDropdown from './ThemeDropdown';
import TodoInterface from './TodoInterface';

const UserInterface = ({ term }) => {
  const [query, setQuery] = useState(term);
  const themeState = useState('light');
  const [{ data: [user], error, isLoading }, setUrl] = useFetch([]);

  return (
    <div className="user-interface">
      <h2>User Interface</h2>
      <form
        onSubmit={e => {
          setUrl(`${baseUrl}/users?username=${query}`);
          e.preventDefault(); // prevent page reload
        }}
      >
        <input
          type="text"
          placeholder="Enter username"
          value={query}
          onChange={e => setQuery(e.target.value)}
          disabled={isLoading}
          required
        />
        <button type="submit">Search</button>
        <ThemeDropdown
          user={user}
          themeState={themeState}
        />
      </form>
      {error && <div className="message error">Failed to find username...</div>}
      {isLoading ? (
        <div className="message">Loading...</div>
      ) : [
        user ? (
          <div
            key="user-details"
            className={`user-details ${themeState[0]}`}
          >
            <div className="user">
              <h3><u>User Details</u></h3>
              <div>
                <strong>username: </strong>
                {user.username}
              </div>
              <div>
                <strong>email: </strong>
                {user.email}
              </div>
              <div>
                <strong>website: </strong>
                {user.website}
              </div>
            </div>
            <TodoInterface userId={user.id} />
          </div>
        ) : error !== null && (
          <div
            key="error"
            className="message error"
          >
            User not found
          </div>
        )
      ]}
    </div>
  );
};

UserInterface.defaultProps = {
  term: ''
};

UserInterface.propTypes = {
  term: PropTypes.string
};

export default UserInterface;
