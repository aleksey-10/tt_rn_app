/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { GalleryConnector } from './components/Gallery';
import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <GalleryConnector />
    </Provider>
  );
};

export default App;
