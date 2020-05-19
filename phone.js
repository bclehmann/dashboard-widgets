"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = require("react");

require("./phone.css");

var Phone = function Phone(props) {
  if (!props.small) {
    return React.createElement("div", {
      style: {
        width: "100%"
      }
    }, React.createElement("div", {
      className: "phone-container"
    }, React.createElement("div", {
      className: "phone-top"
    }), React.createElement("div", {
      className: "speaker"
    }), React.createElement("div", {
      className: "screen-content"
    }, props.children), React.createElement("div", {
      className: "home-button"
    }), React.createElement("div", {
      className: "phone-bottom"
    })));
  } else {
    return React.createElement("div", {
      style: {
        width: "100%"
      }
    }, React.createElement("div", {
      className: "phone-container phone-container-small",
      style: {
        height: "500px",
        width: "300px"
      }
    }, React.createElement("div", {
      className: "screen-content",
      style: {
        height: "342px"
      }
    }, props.children)));
  }
};

exports["default"] = Phone;