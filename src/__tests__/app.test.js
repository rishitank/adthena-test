import React from 'react';
import { render } from "enzyme";
import App from '../app';

it('renders correctly', () => {
  const rendered = render(<App/>)
  expect(rendered).toMatchSnapshot();
})
