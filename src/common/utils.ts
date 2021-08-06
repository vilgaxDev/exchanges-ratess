/**
 * utils.ts
 * Utility functions commonly used within app.
 */

// Config
import {HOST} from 'config';

export const handleFetchRequest = async (
  endpoint: string,
  method: string = 'GET',
  request = null,
  ) => {
    const options = {
      method,
    };

    if (request) {
      // Adds request payload to options as body if provided (i.e. post).
      options.body = JSON.stringify(request);
    }

    try {
      return await fetch(`${HOST}${endpoint}`, options);
    } catch (e) {
      return e;
    }
  };
