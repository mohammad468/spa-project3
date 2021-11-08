import HomePage from "./components/HomePage";
import Porducts from "./components/Porducts";
import Blogs from "./components/Blogs";
import AboutUs from "./components/AboutUs";
import MyNavbar from "./components/MyNavbar";
import { Route, Switch } from "react-router-dom";
import SingleProduct from "./components/SingleProduct";
// import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

import "./App.scss";
import "./sass/app.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <MyNavbar />
      <div>
        <Switch>
          <Route path="/Porducts/:id" component={SingleProduct} />
          <Route
            path="/Porducts"
            render={(props) => <Porducts name="mohammad" {...props} />}
          />
          <Route
            path="/Blogs"
            render={(props) => <Blogs name="mohammad" {...props} />}
          />
          <Route
            path="/AboutUs"
            render={(props) => <AboutUs name="mohammad" {...props} />}
          />
          <Route
            path="/"
            exact
            render={(props) => <HomePage name="mohammad" {...props} />}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
