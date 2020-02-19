import React from 'react';
import { render } from 'enzyme';
import App from '../app';

it('Renders correctly', () => {
  const rendered = render(<App />);
  expect(rendered).toMatchSnapshot();
});
