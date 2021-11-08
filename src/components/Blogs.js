import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import queryString from "query-string";

export default class Blogs extends Component {
  parseQuery = () => {
    const result = queryString.parse(this.props.location.search);
    console.log(result);
  };
  render() {
    return (
      <div>
        <Container>
          <h1>Blogs</h1>
          <Button variant="info" onClick={this.parseQuery}>
            Info
          </Button>
        </Container>
      </div>
    );
  }
}
