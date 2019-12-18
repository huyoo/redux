function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/*
 * @Author: zp
 * @Date:   2019-05-20 16:08:02
 * @Last Modified by:   zp
 * @Last Modified time: 2019-07-02 11:02:33
 */


import React from 'react';
import Card from 'antd/es/card';
import LocaleReceiver from '../seid-locale-receiver';
import defaultLocale from './locale';

var DetailCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DetailCard, _React$Component);

  function DetailCard() {
    var _this;

    _classCallCheck(this, DetailCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DetailCard).apply(this, arguments));

    _this.renderComponent = function (locale) {
      var _a = _this.props,
          bodyStyle = _a.bodyStyle,
          _a$title = _a.title,
          title = _a$title === void 0 ? locale.title : _a$title,
          headStyle = _a.headStyle,
          style = _a.style,
          children = _a.children,
          restProps = __rest(_a, ["bodyStyle", "title", "headStyle", "style", "children"]);

      return React.createElement(Card, _extends({
        title: title ? React.createElement("div", {
          className: "card-title"
        }, title) : null,
        style: _extends({
          boxSizing: 'border-box',
          width: '100%'
        }, style),
        headStyle: _extends({
          boxSizing: 'border-box',
          border: 'none'
        }, headStyle),
        bodyStyle: _extends({
          boxSizing: 'border-box',
          padding: '0px 10px 10px'
        }, bodyStyle)
      }, restProps), React.Children.map(children, function (child) {
        return child;
      }));
    };

    return _this;
  }

  _createClass(DetailCard, [{
    key: "render",
    value: function render() {
      return React.createElement(LocaleReceiver, {
        componentName: "DetailCard",
        defaultLocale: defaultLocale
      }, this.renderComponent);
    }
  }]);

  return DetailCard;
}(React.Component);

export { DetailCard as default };
DetailCard.defaultProps = {
  headStyle: null,
  bodyStyle: null,
  style: null
};
//# sourceMappingURL=index.js.map
