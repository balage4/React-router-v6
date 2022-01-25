import { BrowserRouter as Router, Routes } from 'react-router-dom';
import routesInstance from './common/Routes/routes';

function App() {
  const routes = routesInstance.getRoutes();

  return (
    <div className="app">
      <Router>
        <Routes>{routes.map((route) => route)}</Routes>
      </Router>
    </div>
  );
}

export default App;
