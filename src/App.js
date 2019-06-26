import React, { Component } from "react";
import "./App.css";
import "./my.css";
import Intro from "./sections/Intro";
import About from "./sections/About";
import Skill from "./sections/Skill";
import SnowStorm from "react-snowstorm";

class baseComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white",
      background_first: "#2525ca",
      background_second: "#ffff50",
      background_third: "gray",
      counter: 0
    };
  }

  changeTheme = () => {
    let fcolor = ["green", "#b3cde0", "#f4b6c2", "#e6e6ea"];
    let background = ["#461220", "#011f4b", "#251e3e", "#1e1f26"];
    if (this.state.counter > 3) {
      this.setState({
        counter: 0,
        color: fcolor[this.state.counter],
        background_first: " #3c2f2f",
        background_second: " #3c2f2f",
        background_third: " #3c2f2f"
      });
    } else
      this.setState({
        color: fcolor[this.state.counter],
        background_first: background[this.state.counter],
        background_second: background[this.state.counter],
        background_third: background[this.state.counter],
        counter: this.state.counter + 1
      });
  };

  render() {
    return (
      <div className="App">
        <div>
          <div class="navbar">
            <div class="box" onClick={this.changeTheme}>
              <img class="wizard" src="images/wizard.png" />
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
          background={this.state.background_first}
          />
        <div id="About">
          <About
          color={this.state.color}
          background={this.state.background_second}      
          />
        </div>
        <div id="Skills">
          <Skill 
          color={this.state.color}
          background={this.state.background_third}
          />
        </div>
      </div>
    );
  }
}

export default baseComponent;
