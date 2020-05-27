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

var React = require("react");

var FormatTableRow =
/** @class */
function (_super) {
  __extends(FormatTableRow, _super);

  function FormatTableRow(props) {
    return _super.call(this, props) || this;
  }

  FormatTableRow.prototype.render = function () {
    var _this = this;

    return this.props.data.map(function (row, i) {
      return React.createElement("tr", {
        key: i,
        className: _this.props.formatRuleRow(row)
      }, row.map(function (cell, j) {
        return React.createElement("td", {
          className: _this.props.formatRule(cell),
          key: j
        }, cell);
      }));
    });
  };

  return FormatTableRow;
}(React.Component);

exports["default"] = FormatTableRow;