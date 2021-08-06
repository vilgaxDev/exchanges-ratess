/**
 * reducer.test.ts
 * Test for api reducer functions.
 */

// Constants
import API from 'api/constants.json';

// Actions
import api from 'api/actions';

// Reducer
import reducer, {INITIAL_STATE} from 'api/reducer';

// Utils
import {createActionKey, createReducerKey} from 'api/utils';

describe('reducer', () => {

  // Creates api reducer initial state for keys stored within `constants.json`.
  const initialState = API.REDUX.reduce((acc, key) => {
    acc[createReducerKey(key)] = INITIAL_STATE;
    return acc;
  }, {});

  it('should return api reducer initial state', () => {
    // Checks that when an `undefined` is passed for state argument, it utilizes
    // initial state properly for each child api reducer..
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle actions correctly', () => {
    API.REDUX.forEach((key) => {
      // initial state action is reduced correctly.
      const INITIAL_STATE_ACTION = api[`${key}_INITIAL_STATE_ACTION`];
      expect(reducer(undefined, INITIAL_STATE_ACTION)).toEqual(initialState);

      // Loading
      const setIsLoadingAction = api[`set${createActionKey(key)}IsLoading`];

      // set loading action without argument is reduced correctly.
      expect(reducer(undefined, setIsLoadingAction())).toEqual({
        ...initialState,
        [createReducerKey(key)]: {
          ...INITIAL_STATE,
          isLoading: false,
        },
      });

      [true, false].forEach((isLoading) => {
        // set loading action with argument is reduced correctly.
        expect(reducer(undefined, setIsLoadingAction(isLoading))).toEqual({
          ...initialState,
          [createReducerKey(key)]: {
            ...INITIAL_STATE,
            isLoading,
          },
        });
      })

      // Error
      const setErrorAction = api[`set${createActionKey(key)}Error`];

      // set error action without argument is reduced correctly.
      expect(reducer(undefined, setErrorAction())).toEqual({
        ...initialState,
        [createReducerKey(key)]: {
          ...INITIAL_STATE,
          error: {},
        },
      });

      // set error action with argument `{}` is reduced correctly.
      expect(reducer(undefined, setErrorAction({}))).toEqual({
        ...initialState,
        [createReducerKey(key)]: {
          ...INITIAL_STATE,
          error: {},
        },
      });

      const error = {
        title: 'Title is too short',
        body: 'Body is too short',
      };
      // set error action with example error argument is reduced correctly.
      expect(reducer(undefined, setErrorAction(error))).toEqual({
        ...initialState,
        [createReducerKey(key)]: {
          ...INITIAL_STATE,
          error,
        },
      });

      // Exception
      // TODO: Update appropriately when exceptions are standardized.
      const setExceptionAction = api[`set${createActionKey(key)}Exception`];

      // set exception action without argument is reduced correctly.
      expect(reducer(undefined, setExceptionAction())).toEqual({
        ...initialState,
        [createReducerKey(key)]: {
          ...INITIAL_STATE,
          exception: undefined,
        },
      });

      // set exception action with argument `{}` is reduced correctly.
      expect(reducer(undefined, setExceptionAction({}))).toEqual({
        ...initialState,
        [createReducerKey(key)]: {
          ...INITIAL_STATE,
          exception: {},
        },
      });

      // Status Code
      const setStatusCodeAction = api[`set${createActionKey(key)}StatusCode`];

      // set status code action without argument is reduced correctly.
      expect(reducer(undefined, setStatusCodeAction())).toEqual({
        ...initialState,
        [createReducerKey(key)]: {
          ...INITIAL_STATE,
          statusCode: null,
        },
      });

      [200, 400, 401].forEach((statusCode) => {
        // set status code action with arguments is reduced correctly.
        expect(reducer(undefined, setStatusCodeAction(statusCode))).toEqual({
          ...initialState,
          [createReducerKey(key)]: {
            ...INITIAL_STATE,
            statusCode,
          },
        });
      });
    });
  });
});
