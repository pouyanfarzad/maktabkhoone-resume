import React, { Component } from "react";
import Fullpage from "../components/FullPage";
import data from "../data.json";

class Skill extends Component {
  render() {
    return (
      <Fullpage className="third" background={this.props.background}>
        <h3 style={{ color: this.props.color }}>{data.sections[1].title}</h3>
        <div className="cards-wrapper">
          {data.sections[1].items.map(skill => {
            return (
              <div className="card">
                <div className="image-wrapper">
                  <img src={skill.content.image} />
                </div>
                <div className="skill-title-wrapper">{skill.content.title}</div>
              </div>
            );
          })}
        </div>
        </Fullpage>
    );
  }
}
export default Skill;
