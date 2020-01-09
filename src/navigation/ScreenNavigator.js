import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {SignIn} from '../screens/signIn/SignIn';
import {SignUp} from '../screens/signup/SignUp';
const MainScreenNavigator = createStackNavigator(
  {
    SignIn,
    SignUp,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

export default createAppContainer(MainScreenNavigator);
