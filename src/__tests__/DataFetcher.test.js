import 'whatwg-fetch';
import { renderHook } from '@testing-library/react-hooks';
import fetchMock from 'fetch-mock';
import { act } from 'react-test-renderer';
import { useFetch, baseUrl } from '@components/tasktwo/DataFetcher';

describe('useFetchApi', () => {
  beforeAll(() => {
    global.fetch = fetch;
  });
  afterEach(() => {
    fetchMock.restore();
  });

  it('Data fetching should be done with a re-usable data fetching hook', async () => {
    const { result } = renderHook(() => useFetch());
    const url = `${baseUrl}/users?username=Bret`;

    fetchMock.mock(url, {
      returnedData: [{ username: 'Bret' }]
    });
    const fetchData = async () => {
      await act(async () => {
        const [, setUrl] = result.current;
        setUrl(url);
      });
    };

    // Fetch called multiple times with the same url
    await fetchData();
    await fetchData();

    expect(fetchMock.calls().length).toBe(1);
  });

  it('should return data with a successful request', async () => {
    const { result } = renderHook(() => useFetch());
    const url = `${baseUrl}/users?username=Antonette`;

    fetchMock.mock(url, {
      returnedData: [{ username: 'Antonette' }]
    });
    await act(async () => {
      const [, setUrl] = result.current;
      setUrl(url);
    });

    expect(fetchMock.calls().length).toBe(1);

    const [{ data }] = result.current;
    expect(data).toStrictEqual({
      returnedData: [{ username: 'Antonette' }]
    });
  });

  it('handle the case where an error occurs', async () => {
    const { result } = renderHook(() => useFetch());
    const url = `${baseUrl}/xyz`;

    fetchMock.mock(url, 500);

    await act(async () => {
      const [, setUrl] = result.current;
      setUrl(url);
    });

    expect(fetchMock.calls().length).toBe(1);

    const [{ data, error }] = result.current;
    expect(data).toBe(undefined);
    expect(error).toBe(true);
  });
});
