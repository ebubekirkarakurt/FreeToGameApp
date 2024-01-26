import { StyleSheet, Text, View } from 'react-native';
import { RootNavigator } from './src/navigation/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { store } from './src/redux/store/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
      <Provider store={store}>
        <NavigationContainer>
          <RootNavigator/>
        </NavigationContainer>
      </Provider>
  );
}
