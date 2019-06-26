import React, { Component } from "react";
import Fullpage from "../sections/FullPage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import "./FullPage.css";
import DownIcon from "../components/downIcon";
import { Link, Element } from "react-scroll";

class Intro extends Component {
  render() {
    return (
      <div>
        <Fullpage className="first" background={this.props.background}>
          <div className="fullpage first">
            <img className="profile" src="images/me.jpg" />

            <h1 className="title" style={{ color: this.props.color }}>
              {data.title}
            </h1>
            <div>
              <h2 style={{ color: this.props.color }}>{data.subtitle}</h2>
            </div>
            <div className="socialIcon">
              {Object.keys(data.links).map(el => {
                return <SocialIcon url={data.links[el]} />;
              })}
            </div>
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="about"
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
        <Element name="about" className="element" />
      </div>
    );
  }
}
export default Intro;
