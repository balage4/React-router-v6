import { Route } from "react-router-dom";
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

export default class OwnRotues {
  routes = [];
  pushRoute(route) {
    this.routes.push(route);
  }
  getRoutes() {
    const out = [];
    for (let i = 0; i < this.routes.length; i++) {
      if (!this.routes[i].isProtected) {
        out.push(
          <Route
            key={`route_${i}`}
            path={this.routes[i].pathName}
            element={this.routes[i].element} />
        )
      } else {
        out.push(
          <Route
            key={`route_${i}`}
            element={<ProtectedRoute />}>
            <Route
              path={this.routes[i].pathName}
              element={this.routes[i].element}></Route>
          </Route>
        )
      }
    }
    return out;
  }
}
