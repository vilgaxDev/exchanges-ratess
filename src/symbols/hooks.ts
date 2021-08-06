/**
 * hooks.ts
 * Hooks for symbols.
 */

// Node Modules
import {useCallback} from 'react';
import {useDispatch} from 'react-redux';

// Actions
import {setSymbolsAll} from './actions';

// Hooks
import {useAPIResponse} from 'api/hooks';

import {getSymbolsAll} from './routes';

export function useSymbolsAPI() {
  // Hooks
  const dispatch = useDispatch();
  const handleResponse = useAPIResponse('SYMBOLS');

  const get = useCallback(
    async () => handleResponse(
      () => getSymbolsAll(),
      (data) => dispatch(setSymbolsAll(data.symbols)),
    ),
    [dispatch, handleResponse],
  );

  return {get};
}
