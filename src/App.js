import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./component/helper/routes";

function App() {
  return (
    <Router basename='/' >
      <div className="neuftek-web">
        <div className="neuftek-header">
          <Navbar />
        </div>
        <Routes>
          {routes.map((route, i) => {
            return (
              <Route
                key={i}
                path={route.path}
                exact={route.exact}
                render={(props) => (
                  // pass the sub-routes down to keep nesting
                  <route.component {...props} routes={route.routes} />
                )}
              />
            );
          })}
        </Routes>
        <div className="neuftek-footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
