"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

require("./phone.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Phone = function Phone(props) {
  if (!props.small) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "phone-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "phone-top"
    }), /*#__PURE__*/React.createElement("div", {
      className: "speaker"
    }), /*#__PURE__*/React.createElement("div", {
      className: "screen-content"
    }, props.children), /*#__PURE__*/React.createElement("div", {
      className: "home-button"
    }), /*#__PURE__*/React.createElement("div", {
      className: "phone-bottom"
    })));
  } else {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "phone-container phone-container-small",
      style: {
        height: "500px",
        width: "300px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "screen-content",
      style: {
        height: "342px"
      }
    }, props.children)));
  }
};

var _default = Phone;
exports.default = _default;