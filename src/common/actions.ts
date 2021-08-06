/**
 * actions.ts
 * Actions for common actions.
 */

export const pushAppException = (message, timeoutID) => ({
  type: 'PUSH_EXCEPTION',
  payload: {
    message,
    timeoutID,
  },
});

export const removeAppException = (key) => ({
  type: 'REMOVE_EXCEPTION',
  payload: {
    key,
  },
});
