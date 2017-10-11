import { action, observable } from 'mobx';

import Navigation from '../Navigation/AppNavigation';

class NavigationStore {
  @observable.ref navigationState = {
    index: 0,
    routes: [{
      index: 0,
      routeName: 'MainScreen',
      routes: [{
        index: 0,
        key: 'DrawerClose',
        routeName: 'DrawerClose',
        routes: [
          { key: 'FirstScreen', routeName: 'FirstScreen' },
          { key: 'SecondScreen', routeName: 'SecondScreen' }
        ]
      }, {
        index: 1,
        key: 'DrawerOpen',
        routeName: 'DrawerOpen',
      }
      ],
    },
    ],
  }

  @action dispatch = (action, stackNavState = true) => {
    const previousNavState = stackNavState ? this.navigationState : null;
    return this.navigationState = Navigation
      .router
      .getStateForAction(action, previousNavState);
  }
}

export default navigationStore = new NavigationStore();
