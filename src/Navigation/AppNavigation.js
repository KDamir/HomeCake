import { StackNavigator, DrawerNavigator } from 'react-navigation';
import MainScreen from '../screens/MainScreen';
import SecondScreen from '../screens/SecondScreen';
import { Colors } from '../Themes';
import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const DrawerNav = DrawerNavigator({
  FirstScreen: {
    screen: MainScreen,
  },
  SecondScreen: {
    screen: SecondScreen,
  }
});

const PrimaryNav = StackNavigator({
  MainScreen: {
    screen: DrawerNav,
    navigationOptions: () => ({
      headerVisible: false,
    }),
  },
}, {
  // Default config for all screens
  headerMode: 'screen',
  navigationOptions: ({ navigation }) => ({
    title: navigation.state && navigation.state.params && navigation.state.params.title,
    headerTintColor: Colors.fire,
    headerStyle: styles.header,

  }),

});

export default PrimaryNav;
