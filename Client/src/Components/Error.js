import React, { Component } from "react";

export class Error extends Component {
  constructor(props) {
    super(porps);
    this.state = {
      error: null,
      info: null,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ error: error, info: info });
  }
  render() {
    if (this.state.error) {
      return (
        <div>
          <h2>Something went wrong</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    else {
        return this.props.children
    }
  }
}

export default Error;
