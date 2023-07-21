import { BrowserRouter as RouterApp, Route, Switch } from 'react-router-dom';
import { Auth } from '../../resources/pages/Auth/Auth.page';
import { Management } from '../../resources/pages/Management/Management.page';
import PrivateRoute from './PrivateRoute';
import { Register } from '../../resources/pages/Register/Register.page';
import { useContext, useEffect } from 'react';
import { ContextState } from '../../app/context/DataProvider';
import { IStateDataProvider } from '../../app/context/Data.provider.types';

export function RouterBrowser() {
  const {userApi} = useContext(ContextState) as IStateDataProvider;

  useEffect(() => {
    console.log(userApi.userData);
  }, [userApi]);

  return (
    <>
      <RouterApp>
        <Switch>
          <Route
            exact
            path='/'
            component={Auth}
          />
          <Route
            exact
            path='/register'
            component={Register}
          />
          <PrivateRoute path='/home'>
            <Management />
          </PrivateRoute>
        </Switch>
      </RouterApp>
    </>
  );
}
