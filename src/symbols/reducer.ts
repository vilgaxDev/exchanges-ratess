/**
 * reducer.ts
 * Reducer for managing symbols.
 */

const INITIAL_STATE = {
  all: {},
};

export default function reducer(state = INITIAL_STATE, {payload, type}) {
  switch (type) {
    case 'SET_SYMBOLS_ALL':
      return {
        ...state,
        all: payload.all,
      };

    default:
      return state;
  }
}
