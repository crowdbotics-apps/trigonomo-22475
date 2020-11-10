import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings170451Navigator from '../features/Settings170451/navigator';
import BlankScreen15170446Navigator from '../features/BlankScreen15170446/navigator';
import Settings170419Navigator from '../features/Settings170419/navigator';
import UserProfile170412Navigator from '../features/UserProfile170412/navigator';
import Settings170411Navigator from '../features/Settings170411/navigator';
import Settings170409Navigator from '../features/Settings170409/navigator';
import SignIn2170407Navigator from '../features/SignIn2170407/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings170451: { screen: Settings170451Navigator },
BlankScreen15170446: { screen: BlankScreen15170446Navigator },
Settings170419: { screen: Settings170419Navigator },
UserProfile170412: { screen: UserProfile170412Navigator },
Settings170411: { screen: Settings170411Navigator },
Settings170409: { screen: Settings170409Navigator },
SignIn2170407: { screen: SignIn2170407Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
