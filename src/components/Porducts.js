import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Porducts extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>Products:</h1>
          <Link to="Porducts/1">
            <Button variant="info" className="mx-1">
              Product 1
            </Button>
          </Link>
          <Link to="Porducts/2">
            <Button variant="info" className="mx-1">
              Product 2
            </Button>
          </Link>
          <Link to="Porducts/3">
            <Button variant="info" className="mx-1">
              Product 3
            </Button>
          </Link>
          <Link to="Porducts/4">
            <Button variant="info" className="mx-1">
              Product 4
            </Button>
          </Link>
        </Container>
      </div>
    );
  }
}
