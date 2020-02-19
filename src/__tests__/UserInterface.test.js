import React from 'react';
import 'whatwg-fetch';
import { render, mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import UserInterface from '@components/tasktwo/UserInterface';


describe('UserInterface', () => {
  beforeAll(() => {
    global.fetch = fetch;
  });
  afterAll(() => {
    fetchMock.restore();
  });

  it('Renders correctly', () => {
    const rendered = render(<UserInterface />);
    expect(rendered).toMatchSnapshot();
  });

  it('must accept a username as input', async () => {
    const username = 'Bret';
    const wrapper = mount(<UserInterface term={username} />);
    expect(wrapper.find('input[type="text"]').instance().value).toEqual(username);

    expect(wrapper.find('.user').exists()).toBe(false);
  });
});
