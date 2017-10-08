import { StackNavigator } from 'react-navigation';
import MainScreen from '../screens/MainScreen';
import { Colors } from '../Themes';
import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  MainScreen: {
    screen: MainScreen,
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
