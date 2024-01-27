import { RootNavigator } from './src/navigation/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './src/redux/store/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}
