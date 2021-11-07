import HomePage from "./components/HomePage";
import Porducts from "./components/Porducts";
import Blogs from "./components/Blogs";
import AboutUs from "./components/AboutUs";
import { Route } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

import "./App.scss";
import "./sass/app.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">HomePage</Nav.Link>
              <Nav.Link href="/Porducts">Porducts</Nav.Link>
              <Nav.Link href="/Blogs">Blogs</Nav.Link>
              <Nav.Link href="/AboutUs">AboutUs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
