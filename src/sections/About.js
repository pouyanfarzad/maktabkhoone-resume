import React, { Component } from "react";
import Fullpage from "../sections/FullPage";
import data from "../data.json";

class About extends Component {
  render() {
    return (
      <div>
        <Fullpage className="second" id="About" background={this.props.background}>
          <h3 style={{ color: this.props.color }}>{data.sections[0].title}</h3>
          <div className="intro" style={{ color: this.props.color }}>{data.sections[0].items[0].content}</div>
        </Fullpage>
      </div>
    );
  }
}

export default About;
