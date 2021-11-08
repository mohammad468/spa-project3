import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class SingleProduct extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>product # {this.props.match.params.id}</h1>
          <Link to="/Porducts" className="">
            <Button variant="warning">back to Product</Button>
          </Link>
        </Container>
      </div>
    );
  }
}

export default SingleProduct;
