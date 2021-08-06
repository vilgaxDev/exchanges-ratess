/**
 * reducer.ts
 * Reducer for common actions within app (i.e. exceptions).
 */

// Types
type InitialState = {
  exceptionsCount: number;
  exceptions: object;
}

// Constants
const INITIAL_STATE = {
  exceptionsCount: 0,
  exceptions: {},
};

export default function reducer(state: InitialState = INITIAL_STATE, {payload, type}) {
  switch (type) {
    case 'PUSH_EXCEPTION':
      return {
        ...state,
        exceptions: {
          ...state.exceptions,
          [state.exceptionsCount]: {
            message: payload.message,
            timeoutID: payload.timeoutID,
          },
        },
        exceptionsCount: state.exceptionsCount + 1,
      };
    case 'REMOVE_EXCEPTION': {
      const nextState = Object.keys(state.exceptions).reduce((acc, key) => {
        if (key !== payload.key) {
          acc[key] = state.exceptions[key];
        } else {
          clearTimeout(state.exceptions[key].timeoutID);
        }
        return acc;
      }, {});

      return {
        ...state,
        exceptions: nextState,
      };
    }

    default:
      return state;
  }
}
