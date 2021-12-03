import React, { Component } from "react";
// Using Context inside of a class need this as a named exprot
import { ThemeContext } from "./App";

class counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount,
    };
  }
  render() {
    return (
      // use the consumer portion of ThemeContext
      <ThemeContext.Consumer>
        {/* Theme context consumer needs this function inside it that gets the JSX we need to render  */}

        {(style) => (
          <div>
            {/* give button style */}
            <button style={style} onClick={() => this.changeCount(1)}>
              +
            </button>
            <span>{this.state.count}</span>
            <button style={style} onClick={() => this.changeCount(-1)}>
              -
            </button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
  changeCount(amount) {
    this.setState((prevState) => {
      return { count: prevState.count + amount };
    });
  }
}

export default counter;
