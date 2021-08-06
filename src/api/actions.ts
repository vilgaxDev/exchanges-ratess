/**
 * actions.js
 * API redux actions generated from constants file.
 */

// Constants
import API from './constants.json';

// Utils
import {createActionKey}  from './utils';

/**
 * @description Action type to set specified API reducer to initial state.
 * @param {string} key
 */
const initialStateAction = (key: string) => ({
  type: `SET_${key}_INITIAL_STATE`,
});

/**
 * @description Action to set loading state for specified API reducer.
 * @param {key} key
 */
const setIsLoadingAction = (key: string) => (isLoading = false) => ({
  type: `SET_${key}_IS_LOADING`,
  payload: {
    isLoading,
  },
});

/**
 * @description Action to set error object for specified API reducer.
 * @param {string} key
 */
const setErrorAction = (key: string) => (error = {}) => ({
  type: `SET_${key}_ERROR`,
  payload: {
    error,
  },
});

/**
 * @description Action to set exception for specified API reducer.
 * @param {string} key
 */
const setExceptionAction = (key: string) => (exception) => ({
  type: `SET_${key}_EXCEPTION`,
  payload: {
    exception,
  },
});

/**
 * @description Action to set status code for specified API reducer.
 * @param {string} key
 */
const setStatusCodeAction = (key: string) => (statusCode = null) => ({
  type: `SET_${key}_STATUS_CODE`,
  payload: {
    statusCode,
  },
});

interface APIActions {
  [key: string]: () => {};
}

/**
 * @description Generates a set of actions that all API calls would utilize.
 */
const apiActions: APIActions = API.REDUX.reduce((acc, key) => {
  acc[`${key}_INITIAL_STATE_ACTION`] = initialStateAction(key);
  acc[`set${createActionKey(key)}IsLoading`] = setIsLoadingAction(key);
  acc[`set${createActionKey(key)}Error`] = setErrorAction(key);
  acc[`set${createActionKey(key)}Exception`] = setExceptionAction(key);
  acc[`set${createActionKey(key)}StatusCode`] = setStatusCodeAction(key);

  return acc;
}, {});

export default apiActions;
