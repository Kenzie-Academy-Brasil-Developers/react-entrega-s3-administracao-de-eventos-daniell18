import { Route, Switch } from "react-router";
import Casamento from "../pages/Casamento";
import Confraternizacao from "../pages/Confraternização";
import Formatura from "../pages/Formatura";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/formatura">
          <Formatura />
        </Route>
        <Route exact path="/confraternizacao">
          <Confraternizacao />
        </Route>
        <Route exact path="/casamento">
          <Casamento />
        </Route>
      </Switch>
    </div>
  );
};
export default Routes;
