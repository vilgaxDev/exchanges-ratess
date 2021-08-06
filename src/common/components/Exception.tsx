/**
 * Exception.tsx
 * Notification component to display exceptions.
 */

// Node Modules
import {useDispatch, useSelector} from 'react-redux';

// Actions
import {removeAppException} from 'common/actions';

export default function Exception() {
  // Hooks
  const dispatch = useDispatch();
  const exceptions = useSelector(({common}) => common.exceptions);

  // JSX
  const exceptionItemsJSX = Object.entries(exceptions).map(
    ([key, exception]) => (
      <li key={key}>
        <p>{exception.message}</p>
        <button
          className="button"
          onClick={() => dispatch(removeAppException(key))}
        >
          Close
        </button>
      </li>
    ));

  return (
    <ul>
      {exceptionItemsJSX}
    </ul>
  );
}
