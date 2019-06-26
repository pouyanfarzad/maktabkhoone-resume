import React, { Component } from "react";


const downIcon = (props) => {
    return(
        <div 
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "-34px",
          transform: "translateY(-45px)"
        }}
      >
        <div 
          style ={{
            maxWidth: "30px"
          }}
        >
          <img src={props.icon}></img>
        </div>
      </div>
    )
}

export default downIcon