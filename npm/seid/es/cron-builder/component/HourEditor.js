var _defaultRadioKeyValue;

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

import React from 'react';
import Radio from 'antd/es/radio';
import Between from './Between';
import CheckBoxEditor from './CheckBoxEditor';
import FromEvery from './FromEvery';
import { getCurrentRegIndex, index } from './reg';
import BaseEditor from './BaseEditor';
var RadioGroup = Radio.Group;
var defaultRadioKeyValue = (_defaultRadioKeyValue = {}, _defineProperty(_defaultRadioKeyValue, index.EVERY, '*'), _defineProperty(_defaultRadioKeyValue, index.BETWEEN, '0-23'), _defineProperty(_defaultRadioKeyValue, index.FROM_EVERY, '0/1'), _defineProperty(_defaultRadioKeyValue, index.CHECK_BOX, 'C'), _defaultRadioKeyValue);

var HourEditor =
/*#__PURE__*/
function (_BaseEditor) {
  _inherits(HourEditor, _BaseEditor);

  function HourEditor(props) {
    var _this;

    _classCallCheck(this, HourEditor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HourEditor).call(this, props));
    _this.state = {
      value: defaultRadioKeyValue
    };
    return _this;
  }

  _createClass(HourEditor, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _a = this.props,
          radioStyle = _a.radioStyle,
          defaultValue = _a.value,
          locale = _a.locale,
          config = __rest(_a, ["radioStyle", "value", "locale"]);

      var radio = getCurrentRegIndex(defaultValue);
      return React.createElement(RadioGroup, {
        onChange: this.handleRadioChange,
        value: radio
      }, React.createElement(Radio, {
        style: radioStyle,
        value: index.EVERY
      }, locale.everyHour), React.createElement(Radio, {
        style: radioStyle,
        value: index.BETWEEN
      }, "".concat(locale.period, " "), React.createElement(Between, _extends({
        locale: locale,
        disabled: radio !== index.BETWEEN,
        max: 23,
        value: defaultRadioKeyValue[index.BETWEEN]
      }, config, {
        onChange: function onChange(value) {
          return _this2.handleValueChange(index.BETWEEN, value);
        }
      }))), React.createElement(Radio, {
        style: radioStyle,
        value: index.FROM_EVERY
      }, React.createElement(FromEvery, _extends({
        disabled: radio !== index.FROM_EVERY,
        front: locale.from,
        middle: locale.startFromHour,
        back: locale.howOftenHour,
        fromMax: 23,
        everyMax: 23,
        value: defaultRadioKeyValue[index.FROM_EVERY]
      }, config, {
        onChange: function onChange(value) {
          return _this2.handleValueChange(index.FROM_EVERY, value);
        }
      }))), React.createElement(Radio, {
        style: radioStyle,
        value: index.CHECK_BOX
      }, locale.definition, React.createElement(CheckBoxEditor, _extends({
        disabled: radio !== index.CHECK_BOX,
        max: 23,
        value: defaultRadioKeyValue[index.CHECK_BOX]
      }, config, {
        onChange: function onChange(value) {
          return _this2.handleValueChange(index.CHECK_BOX, value);
        }
      }))));
    }
  }]);

  return HourEditor;
}(BaseEditor);

export default HourEditor;
//# sourceMappingURL=HourEditor.js.map
