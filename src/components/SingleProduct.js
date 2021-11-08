import React, { Component } from "react";
import { Container } from "react-bootstrap";

class SingleProduct extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>product # {this.props.match.params.id}</h1>
        </Container>
      </div>
    );
  }
}

export default SingleProduct;
