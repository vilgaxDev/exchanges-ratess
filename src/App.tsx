/**
 * App.tsx
 * Main react app component.
 */

// Node Modules
import {Provider} from 'react-redux';


// Components
import Exception from 'common/components/Exception';
import Input from './symbols/components/Input';

// Store
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Exception />
      <Input />
    </Provider>
  );
}
