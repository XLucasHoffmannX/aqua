import { BrowserRouter as RouterApp, Route, Switch } from "react-router-dom";
import { Auth } from "../../resources/pages/Auth/Auth.page";
import { Management } from "../../resources/pages/Management/Management.page";
import PrivateRoute from "./PrivateRoute";
//import { ContextState } from '../context/DataProvider';

export function RouterBrowser() {
  return (
    <>
      <RouterApp>
        <Switch>
          <Route exact path="/" component={Auth} />
          <PrivateRoute path="/home">
            <Management />
          </PrivateRoute>
        </Switch>
      </RouterApp>
    </>
  );
}
