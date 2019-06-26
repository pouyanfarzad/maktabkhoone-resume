import React, { Component } from "react";
import { Link, Element } from "react-scroll";
import Fullpage from "../components/FullPage";
import data from "../data.json";
import DownIcon from "../components/downIcon";

class About extends Component {
  render() {
    return (
      <div>
        <Fullpage className="second" id="About" background={this.props.background}>
          <h3 style={{ color: this.props.color }}>{data.sections[0].title}</h3>
          <div className="intro" style={{ color: this.props.color }}>{data.sections[0].items[0].content}</div>
        </Fullpage>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onSetActive={this.handleSetActive}
          delay={0}
        >
          <DownIcon
            icon={data.icons.down}
          />
        </Link>
        <Element name="skills" className="element" />

      </div>
    );
  }
}

export default About;
