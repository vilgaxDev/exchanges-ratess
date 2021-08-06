/**
 * hooks.ts
 * Hooks for app context.
 */

// Node Modules
import {useCallback} from 'react';
import {useDispatch} from 'react-redux';

// Actions
import {pushAppException} from 'common/actions';

/**
 * @description Hook for handling and adding exceptions into app context.
 * @returns {function}
 */
export function useException() {
  // Hooks
  const dispatch = useDispatch();

  const handleException = useCallback((exception) => {
    dispatch(pushAppException(exception.message, null));
  }, [dispatch]);

  return handleException;
}
