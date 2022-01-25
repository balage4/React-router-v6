import Home from "../../screens/Home";
import Registration from "../../screens/Registration";
import Login from "../../screens/Login";
import Dashboard from "../../screens/Dashboard";
import OwnRoutes from "./OwnRoutes";
import OwnRoute from "./OwnRoute";

const routes = [
  ['home', '/', <Home />, false],
  ['registration', '/registration', <Registration />, false],
  ['login', '/login', <Login />, false],
  ['dashboard', '/dashboard', <Dashboard />, true],
];

const routesInstance = new OwnRoutes();
for (let i = 0; i < routes.length; i++) {
  const route = new OwnRoute(routes[i][0], routes[i][1], routes[i][2], routes[i][3]);
  routesInstance.pushRoute(route);
}


export default routesInstance;