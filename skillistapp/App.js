import {createStackNavigator} from 'react-navigation';

//Screens
import LoginScreen from './Screens/Login';
import DashboardScreen from './Screens/Dashboard';

const App = createStackNavigator({
  LoginScreen: {screen: LoginScreen},
  DashboardScreen: {screen: DashboardScreen}
});

export default App;