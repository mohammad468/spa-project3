import HomePage from "./components/HomePage";
import Porducts from "./components/Porducts";
import Blogs from "./components/Blogs";
import AboutUs from "./components/AboutUs";
import MyNavbar from "./components/MyNavbar";
import { Route, Link } from "react-router-dom";
// import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

import "./App.scss";
import "./sass/app.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <MyNavbar />
      <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/Porducts" component={Porducts} />
        <Route path="/Blogs" component={Blogs} />
        <Route path="/AboutUs" component={AboutUs} />
      </div>
    </div>
  );
}

export default App;
