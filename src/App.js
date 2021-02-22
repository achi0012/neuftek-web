import Navbar from "./component/header/Navbar";
import Footer from "./component/footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "./component/helper/routes";
import Main from "./component/Main";

function App() {
  return (
    <Router>
      <div className="neuftek-web">
        <div className="neuftek-header">
          <Navbar />
        </div>
        {/* <Main/> */}
        <Switch>
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
        </Switch>
        <div className="neuftek-footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
