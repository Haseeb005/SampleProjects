import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {SignIn} from '../screens/signIn/SignIn';
const MainScreenNavigator = createStackNavigator({
  SignIn,
});

export default createAppContainer(MainScreenNavigator);
