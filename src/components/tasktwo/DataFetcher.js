import {
  useEffect,
  useState,
  useReducer,
  useRef
} from 'react';

const baseUrl = 'https://jsonplaceholder.typicode.com';

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: false,
        data: action.payload
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default:
      throw new Error();
  }
};

const useFetch = (initialData, initialUrl = '', first = true) => {
  const firstUpdate = useRef(first);
  const [url, setUrl] = useState(initialUrl);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    error: null,
    data: initialData
  });

  useEffect(() => {
    let cancelFetch = false;

    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const res = await fetch(url);
        const json = await res.json();

        if (!cancelFetch) {
          dispatch({ type: 'FETCH_SUCCESS', payload: json });
        }
      } catch (e) {
        if (!cancelFetch) {
          dispatch({ type: 'FETCH_ERROR' });
        }
      }
    };

    if (!firstUpdate.current) {
      fetchData();
    }

    firstUpdate.current = false;

    return () => {
      cancelFetch = true;
    };
  }, [url]);

  return [state, setUrl];
};

export { useFetch, baseUrl };
