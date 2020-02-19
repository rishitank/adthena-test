import React from 'react';
import 'whatwg-fetch';
import { render, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import fetchMock from 'fetch-mock';
import TodoInterface from '@components/tasktwo/TodoInterface';
import { baseUrl } from '@components/tasktwo/DataFetcher';

describe('TodoInterface', () => {
  beforeAll(() => {
    global.fetch = fetch;
  });
  afterEach(() => {
    fetchMock.restore();
  });

  it('Renders correctly', () => {
    const rendered = render(<TodoInterface userId="1" />);
    expect(rendered).toMatchSnapshot();
  });

  it('Displays a list of Todos for a user', async () => {
    const userId = '1';
    fetchMock.once(`${baseUrl}/users/${userId}/todos`, { userId });
    let wrapper;

    await act(async () => {
      wrapper = mount(<TodoInterface userId={userId} />);
    });

    expect(wrapper.find('ul').exists()).toBe(false);

    return new Promise(resolve => setImmediate(resolve)).then(() => {
      wrapper.update();
      expect(fetchMock.calls().length).toBe(1);

      // TODO: Figure out why this doesn't work
      // expect(wrapper.find('ul').exists()).toBe(true);
    });
  });
});
