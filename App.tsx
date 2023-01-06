
import React from 'react'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native'
import { AuthNavigation } from './src/navigation/AudthStack'
import { persistor, store } from './src/store/configureStore';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <AuthNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App