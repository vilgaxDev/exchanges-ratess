/**
 * actions.test.ts
 * Tests for api actions.
 */

// Node Modules
import configureMockStore from 'redux-mock-store';

// Actions
import api from 'api/actions';

// Constants
import API from 'api/constants.json';

// Reducer
import {INITIAL_STATE} from 'api/reducer';

// Store
const mockStore = configureMockStore();

// Utils
import {createActionKey, createReducerKey} from 'api/utils';

describe('actions', () => {

  // Creates api reducer initial state for keys within `constants.json`.
  const initialState = API.REDUX.reduce((acc, key) => {
    acc[createReducerKey(key)] = INITIAL_STATE;
    return acc;
  }, {});

  it('should create correct action objects', () => {
    // Sanity check that the API values provided by `app/api/constants.json` are
    // creating the correct action functions and objects attached under `api`.
    API.REDUX.forEach((key) => {
      // initial state action object is created properly.
      expect(api[`${key}_INITIAL_STATE_ACTION`]).toEqual({
        type: `SET_${key}_INITIAL_STATE`,
      });

      // set loading action function without arg creates expected object.
      expect(api[`set${createActionKey(key)}IsLoading`]()).toEqual({
        type: `SET_${key}_IS_LOADING`,
        payload: {
          isLoading: false,
        }
      });

      // set error action function without arg creates expected object.
      expect(api[`set${createActionKey(key)}Error`]()).toEqual({
        type: `SET_${key}_ERROR`,
        payload: {
          error: {},
        }
      });

      // set exception action function without arg creates expected object.
      expect(api[`set${createActionKey(key)}Exception`]()).toEqual({
        type: `SET_${key}_EXCEPTION`,
        payload: {
          exception: undefined,
        }
      });

      // set status code action function without arg creates expected object.
      expect(api[`set${createActionKey(key)}StatusCode`]()).toEqual({
        type: `SET_${key}_STATUS_CODE`,
        payload: {
          statusCode: null
        }
      });
    });
  });

  it('should record actions properly', () => {

    const store = mockStore(initialState);
    const expectedActions = [];

    API.REDUX.forEach((key) => {
      // Initial state action object.
      const expectedInitialStateAction = {
        type: `SET_${key}_INITIAL_STATE`,
      };

      // Adds expected action to the list of actions.
      expectedActions.push(expectedInitialStateAction);

      // Dispatches INITIAL_STATE_ACTION.
      store.dispatch(api[`${key}_INITIAL_STATE_ACTION`]);
      expect(store.getActions()).toEqual(expectedActions);

      // Loading
      [false, true].forEach((isLoading) => {
        // isLoading action object.
        const expectedIsLoadingAction = {
          type: `SET_${key}_IS_LOADING`,
          payload: {
            isLoading,
          },
        };

        // Adds expected action to the list of actions.
        expectedActions.push(expectedIsLoadingAction);

        // Dispatches setIsLoading action.
        store.dispatch(api[`set${createActionKey(key)}IsLoading`](isLoading));
        expect(store.getActions()).toEqual(expectedActions);
      });

      // Error
      [{}, {body: 'Too short'}, {title: 'Too long'}].forEach((error) => {
        // error action object.
        const errorAction = {
          type: `SET_${key}_ERROR`,
          payload: {
            error,
          },
        };

        // Adds expected action to the list of actions.
        expectedActions.push(errorAction);

        // Dispatches setError action.
        store.dispatch(api[`set${createActionKey(key)}Error`](error));
        expect(store.getActions()).toEqual(expectedActions);
      });

      // Exception
      // TODO: Revisit when exceptions are standardized
      [undefined].forEach((exception) => {
        // exception action object.
        const exceptionAction = {
          type: `SET_${key}_EXCEPTION`,
          payload: {
            exception,
          },
        };

        // Adds expected action to the list of actions.
        expectedActions.push(exceptionAction);

        // Dispatches setException action.
        store.dispatch(api[`set${createActionKey(key)}Exception`](exception));
        expect(store.getActions()).toEqual(expectedActions);
      });

      // Status Code
      [200, 400, 401].forEach((statusCode) => {
        // status code action object.
        const statusCodeAction = {
          type: `SET_${key}_STATUS_CODE`,
          payload: {
            statusCode,
          },
        };

        // Adds status code action to the list of actions.
        expectedActions.push(statusCodeAction);

        // Dispatches setException action.
        store.dispatch(api[`set${createActionKey(key)}StatusCode`](statusCode));
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
