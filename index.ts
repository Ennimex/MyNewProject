import { registerRootComponent } from 'expo';

import App from './App';
import Login from './app/screens/Login';
import Plantilla from './app/screens/Plantilla';
import Calculadora from './app/components/Calculadora';
import CalculadoraPropinas from './app/components/CalculadoraPropinas';
import FakeStone from './app/screens/FakeStone';
import FakeStone2 from './app/screens/FakeStone2';



// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(FakeStone);