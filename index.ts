import { registerRootComponent } from 'expo';

import App from './App';
import Login from './app/screens/Login';
import Plantilla from './app/screens/Plantilla';
import Calculadora from './app/components/Calculadora';
import CalculadoraPropinas from './app/components/CalculadoraPropinas';
import FakeStone from './app/screens/FakeStone';
import FakeStore2 from './app/screens/FakeStore2';
import HomeScreen from './app/screens/HomeScreen';



// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(HomeScreen);