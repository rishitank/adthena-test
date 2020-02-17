import React from 'react';

const TaskTwo = () => (
  <div className="task">
    <h1>Task Two</h1>
    <div className="content">
      <h4>Complete the following task:</h4>
      <p>
          The task is to create components to fetch public API data, combine it, apply
          filtering and visualise that data.
      </p>
      <p>Include unit tests. Jest is already configured for you in the skeleton project.</p>
      Expected:
      <ol type="1">
        <li>
          Use data from the following API endpoints:
          <ol type="a">
            <li>https://jsonplaceholder.typicode.com/users</li>
            <li>https://jsonplaceholder.typicode.com/todos</li>
          </ol>
        </li>
        <li>
          Data fetching should be done with a re-usable data fetching hook.
        </li>
        <li>
          The user interface must accept a username as input.
        </li>
        <li>
          The user interface must handle the case where an error occurs and the case where the
          requested user is not found.
        </li>
        <li>
          Display the username, email and website of the user.
        </li>
        <li>
          Display a list of Todos for user.
        </li>
        <li>
          Visualise the Todos in such a way that it is easy to distinguish between the
          complete and incomplete Todos.
        </li>
        <li>
          Give the user the option of a dark theme for the Todos user interface.
        </li>
      </ol>
      <strong>Feel free to use this component for your implementation.</strong>
    </div>
  </div>
);

export default TaskTwo;
