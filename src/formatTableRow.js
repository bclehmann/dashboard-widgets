"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var formatTableRows = require("./formatTableRows.js");
var FormatTableRow = /** @class */ (function (_super) {
    __extends(FormatTableRow, _super);
    function FormatTableRow(props) {
        var _this = this;
        console.warn("dashboard-widgets.FormatTableRow is deprecated. Use FormatTableRows instead.");
        _this = _super.call(this, props) || this;
        return _this;
    }
    return FormatTableRow;
}(formatTableRows.default));
exports.default = FormatTableRow;
