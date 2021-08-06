/**
 * utils.test.ts
 * Test for common utility functions.
 */

// Node Modules
import fetchMock from 'fetch-mock';
import 'isomorphic-fetch';

// Config
import {HOST} from 'config';

// Constants
const HEADERS = {
  Accept: 'application/json',
  'content-type': 'application/json',
};

// Utils
import {handleFetchRequest} from 'common/utils';

describe('utils', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should send GET request properly', async () => {
    fetchMock.get(`${HOST}`, {
      body: JSON.stringify({}),
      headers: HEADERS,
    });

    const response = await handleFetchRequest('');

    expect(response).toBeInstanceOf(Response);

    const data = await response.json();

    expect(data).toEqual({});
  });

  it('should send DELETE request properly', async () => {
    fetchMock.delete(`${HOST}`, {
      body: JSON.stringify({}),
      headers: HEADERS,
    });

    const response = await handleFetchRequest('', 'DELETE');

    expect(response).toBeInstanceOf(Response);

    const data = await response.json();

    expect(data).toEqual({});
  });

  it('should send POST request properly', async () => {
    fetchMock.post(`${HOST}`, {
      body: JSON.stringify({}),
      headers: HEADERS,
    });

    const response = await handleFetchRequest('', 'POST');

    expect(response).toBeInstanceOf(Response);

    const data = await response.json();

    expect(data).toEqual({});
  });

  it('should send POST request with body properly', async () => {
    fetchMock.post(`${HOST}`, {
      body: JSON.stringify({}),
      headers: HEADERS,
    });

    const response = await handleFetchRequest('', 'POST', {
      email: 'testuser@test.com',
    });

    expect(response).toBeInstanceOf(Response);

    const data = await response.json();

    expect(data).toEqual({});
  });

  it('should catch exception', async () => {
    const expectedError = new Error();
    fetchMock.get(`${HOST}`, () => {
      throw expectedError;
    });

    const response = await handleFetchRequest('');

    expect(response).not.toBeInstanceOf(Response);
    expect(response).toBeInstanceOf(Error);
    expect(response).toEqual(expectedError);
  });
});
