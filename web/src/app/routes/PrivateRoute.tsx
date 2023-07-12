import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

export default function PrivateRoute({ children, ...rest }: any) {
  const getItem = localStorage.getItem("primaryLogin") === "true";
  const cookie = Cookies.get("access-token");

  console.log(getItem, cookie);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        cookie && getItem ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
