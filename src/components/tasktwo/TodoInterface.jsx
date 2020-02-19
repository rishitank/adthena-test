import React from 'react';
import PropTypes from 'prop-types';
import { useFetch, baseUrl } from './DataFetcher';

const TodoInterface = ({ userId }) => {
  const [{ data, error, isLoading }] = useFetch([], `${baseUrl}/users/${userId}/todos`, false);

  return (
    <div className="todos">
      <h3><u>Todos</u></h3>
      {error && <div className="message error">Failed to find Todos...</div>}
      {isLoading ? (
        <div className="message">Loading...</div>
      ) : [
        data.length ? (
          <ul>
            {
              data.map(item => (
                <li
                  key={item.id}
                  className={`item ${item.completed ? 'completed' : 'pending'}`}
                >
                  <div>
                    {item.title}
                    {item.completed && (<span>&#10004;</span>)}
                  </div>
                </li>
              ))
            }
          </ul>
        ) : error !== null && (
          <div
            key="error"
            className="message error"
          >
            Todos not found
          </div>
        )
      ]}
    </div>
  );
};

TodoInterface.propTypes = {
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default TodoInterface;
