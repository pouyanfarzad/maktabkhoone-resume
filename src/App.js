import React, { Component } from "react";
import SnowStorm from "react-snowstorm";
import Intro from "./sections/Intro";
import About from "./sections/About";
import Skill from "./sections/Skill";
import "./App.css";
import "./my.css";

class baseComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white",
      intro: "#2525ca",
      about: "#b3b30f",
      skill: "gray",
      counter: 0
    };
  }

  changeTheme = () => {
    let fcolor = ["#80bfff", "#eb7ab1", "#163728", "#800600", "663000"];
    let background = ["#001f3f", "#85144b", "#3D9970", "#FF4136", "#FF851B"];
    if (this.state.counter > 4) {
      this.setState({
        counter: 0,
        color: fcolor[this.state.counter],
        intro: " #3c2f2f",
        about: " #3c2f2f",
        skill: " #3c2f2f"
      });
    } else
      this.setState({
        color: fcolor[this.state.counter],
        intro: background[this.state.counter],
        about: background[this.state.counter],
        skill: background[this.state.counter],
        counter: this.state.counter + 1
      });
  };

  render() {
    return (
      <div className="App">
        <div>
          <div class="navbar">
            <div class="box" onClick={this.changeTheme}>
              <img class="wizard" src="images/wizard2.png" />
              <div class="caption">try me</div>
            </div>
            <a class="right" href="#Skills">
              Skills
            </a>
            <a class="right" href="#About">
              About
            </a>
          </div>
        </div>

        <div className="navigation" />
        <SnowStorm
          animationInterval="50"
          usePositionFixed="true"
          useTwinkleEffect="true"
        />

        <Intro 
          color={this.state.color}
          background={this.state.intro}
          />
        <div id="About">
          <About
          color={this.state.color}
          background={this.state.about}      
          />
        </div>
        <div id="Skills">
          <Skill 
          color={this.state.color}
          background={this.state.skill}
          />
        </div>
      </div>
    );
  }
}

export default baseComponent;
