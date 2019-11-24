import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ListComponent from './src/screens/ListComponent';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorsScreen from './src/screens/ColorsScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components:ComponentScreen,
    List:ListComponent,
    ImageComponent:ImageScreen,
    Counter:CounterScreen,
    Colors:ColorsScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Uxbert Employees'
    }
  }
);

export default createAppContainer(navigator);
