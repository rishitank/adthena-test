import React, { useState } from 'react';
import MyButton from '@components/taskone/MyButton';
import LogSelectionButton from '@components/taskone/LogSelectionButton';

const TaskOne = () => {
  const [selected, setSelected] = useState('');

  return (
    <div className="task">
      <h1>Task One</h1>
      <div className="buttons">
        <MyButton
          imgUrl="whale.jpg"
          alt="whale"
          selected="Whale"
          selection={selected}
          onClick={() => setSelected('Whale')}
        />
        <MyButton
          imgUrl="cow.jpg"
          alt="cow"
          selected="Cow"
          selection={selected}
          onClick={() => setSelected('Cow')}
        />
        <MyButton
          imgUrl="hippo.jpg"
          alt="hippo"
          selected="Hippo"
          selection={selected}
          onClick={() => setSelected('Hippo')}
        />
      </div>
      <div className="buttons">
        <LogSelectionButton selected={selected} />
      </div>
      <div className="content">
        <h4>Complete the following task:</h4>
        <p>
            This task is to solve a bug. There is a bug in the LogSelectionButton React Class
          Component that is preventing the behaviour described below from working correctly.
          Fix the bug.
        </p>
        Expected:
        <ol type="1">
          <li>
            LogSelectionButton must remain a Class Component.
          </li>
          <li>
            {
              `When you click on an animal tile (Whale, Cow or Hippo) e.g. Hippo then click the 
            "Log my click to console" button then a corresponding message e.g. “You clicked: Hippo” 
            is logged to the Javascript console after 5 seconds.`
            }
          </li>
          <li>
            {
              `When you click all three animal tiles, within 5 seconds, with a click of the 
          "Log my click to console" button between each animal tile click, a corresponding message 
          is logged to the Javascript console for each animal tile.`
            }
          </li>
        </ol>
      </div>
    </div>
  );
};

export default TaskOne;
