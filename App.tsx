import { StyleSheet, Text, View } from 'react-native';
import { RootNavigator } from './src/navigation/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeScreen from './src/screens/HomeScreen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';

export default function App() {
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Provider store={store}>
            <NavigationContainer>
              <RootNavigator />
            </NavigationContainer>
        </Provider>
      </GestureHandlerRootView>
  );
}
