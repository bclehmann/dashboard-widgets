"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Phone = exports.Badge = exports.isDarkMode = exports.author = exports.Test = void 0;

var React = require("react");

var badge = require("./badge.js");

var phone = require("./phone.js");

var defaultMessage = "The default export of dashboard-widgets does nothing. Import the module you want explicitly, or use import * as dw";
exports["default"] = defaultMessage;

var Test =
/** @class */
function (_super) {
  __extends(Test, _super);

  function Test() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Test.prototype.render = function () {
    return React.createElement("h1", null, "dashboard-widgets says Hello World");
  };

  return Test;
}(React.Component);

exports.Test = Test;
exports.author = "Benjamin Lehmann";
exports.isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
exports.Badge = badge["default"];
exports.Phone = phone["default"];