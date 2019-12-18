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

import React from 'react';
import Row from 'antd/es/row';
import Col from 'antd/es/col';
import Button from 'antd/es/button';
import Card from 'antd/es/card';
import ColorSelect from './ColorSelect';

var CustomizeTheme =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(CustomizeTheme, _React$PureComponent);

  function CustomizeTheme(props) {
    var _this;

    _classCallCheck(this, CustomizeTheme);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CustomizeTheme).call(this, props));

    _this.setThemeColor = function (obj) {
      var colorMap = _extends(_extends({}, _this.colorMap), obj);

      var onChange = _this.props.onChange;
      if (onChange) onChange(colorMap);
    };

    _this.submitTheme = function () {
      var onApply = _this.props.onApply;
      if (onApply) onApply(_this.colorMap);
    };

    _this.colorMap = {};
    return _this;
  }

  _createClass(CustomizeTheme, [{
    key: "render",
    value: function render() {
      var _this$props$value = this.props.value,
          value = _this$props$value === void 0 ? '{}' : _this$props$value;
      this.colorMap = value && value !== '' ? JSON.parse(value) || {} : {};
      return React.createElement(Card, {
        bordered: false,
        bodyStyle: {
          padding: '0px 10px 0px 10px'
        }
      }, React.createElement(Row, {
        className: "chooseColorItem",
        gutter: 24
      }, React.createElement(Col, {
        span: 6
      }, React.createElement("span", null, "\u5934\u90E8\u80CC\u666F\u8272\uFF1A")), React.createElement(Col, {
        span: 16
      }, React.createElement(ColorSelect, {
        varKey: "@head-back_color",
        value: this.colorMap['@header'],
        placeholder: "\u8BF7\u9009\u62E9\u5934\u90E8\u80CC\u666F\u8272",
        onChange: this.setThemeColor
      }))), React.createElement(Row, {
        className: "chooseColorItem",
        gutter: 24
      }, React.createElement(Col, {
        span: 6
      }, React.createElement("span", null, "\u5DE6\u4FA7\u80CC\u666F\u8272\uFF1A")), React.createElement(Col, {
        span: 16
      }, React.createElement(ColorSelect, {
        value: this.colorMap['@sider'],
        varKey: "@sider-back_color",
        placeholder: "\u8BF7\u9009\u62E9\u5DE6\u4FA7\u80CC\u666F\u8272",
        onChange: this.setThemeColor
      }))), React.createElement(Row, {
        className: "chooseColorItem",
        gutter: 24
      }, React.createElement(Col, {
        span: 6
      }, React.createElement("span", null, "\u5DE6\u4FA7\u5B57\u4F53\u8272\uFF1A")), React.createElement(Col, {
        span: 16
      }, React.createElement(ColorSelect, {
        value: this.colorMap['@font'],
        varKey: "@sider-select_color",
        placeholder: "\u8BF7\u9009\u62E9\u5DE6\u4FA7\u5B57\u4F53\u8272",
        onChange: this.setThemeColor
      }))), React.createElement(Row, {
        className: "chooseColorItem",
        gutter: 24
      }, React.createElement(Col, {
        span: 6
      }, React.createElement("span", null, "\u6309\u94AE\u80CC\u666F\u8272\uFF1A")), React.createElement(Col, {
        span: 16
      }, React.createElement(ColorSelect, {
        value: this.colorMap['@button'],
        varKey: "@select-color",
        placeholder: "\u8BF7\u9009\u62E9\u6309\u94AE\u80CC\u666F\u8272",
        onChange: this.setThemeColor
      }))), React.createElement(Row, {
        className: "chooseColorItem",
        gutter: 24
      }, React.createElement(Col, {
        span: 6
      }, React.createElement("span", null, "\u8868\u5934\u80CC\u666F\u8272\uFF1A")), React.createElement(Col, {
        span: 16
      }, React.createElement(ColorSelect, {
        value: this.colorMap['@table'],
        varKey: "@table_header_color",
        placeholder: "\u8BF7\u9009\u62E9\u8868\u5934\u80CC\u666F\u8272",
        onChange: this.setThemeColor
      }))), React.createElement(Row, null, React.createElement(Col, {
        span: 24,
        className: "submitArea"
      }, React.createElement(Button, {
        icon: "check",
        type: "primary",
        onClick: this.submitTheme
      }, "\u9884\u89C8"))));
    }
  }]);

  return CustomizeTheme;
}(React.PureComponent);

export default CustomizeTheme;
//# sourceMappingURL=CustomizeTheme.js.map
