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

import React from 'react';
import Input from 'antd/es/input';
import LocaleReceiver from '../seid-locale-receiver';
import { rounding } from '../_util/utils';
import defaultLocale from './locale';

var AmountInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AmountInput, _React$Component);

  function AmountInput(props) {
    var _this;

    _classCallCheck(this, AmountInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AmountInput).call(this, props));

    _this.handleNumberChange = function (e) {
      var num = e.target.value;

      if (!('value' in _this.props)) {
        _this.setState({
          number: num
        });
      }

      _this.triggerChange({
        number: num
      });
    };

    _this.handlePressEnter = function (e) {
      var onPressEnter = _this.props.onPressEnter;

      if (onPressEnter) {
        onPressEnter(e.target.value);
      }
    };

    _this.handleToDecimal = function (e) {
      var precision = _this.props.precision;
      var num = rounding(e.target.value, precision);

      if (!('value' in _this.props)) {
        _this.setState({
          number: num
        });
      }

      var onBlur = _this.props.onBlur;

      if (onBlur) {
        // @ts-ignore
        onBlur(num);
      }

      _this.triggerChange({
        number: num
      });
    };

    _this.triggerChange = function (changedValue) {
      // Should provide an event to pass value to Form.
      var onChange = _this.props.onChange;

      if (onChange) {
        // @ts-ignore
        onChange(_extends(_extends({}, _this.state), changedValue));
      }
    };

    _this.renderInput = function (locale) {
      var _a = _this.props,
          size = _a.size,
          disabled = _a.disabled,
          _a$addonAfter = _a.addonAfter,
          addonAfter = _a$addonAfter === void 0 ? locale.yuan : _a$addonAfter,
          style = _a.style,
          rest = __rest(_a, ["size", "disabled", "addonAfter", "style"]);

      var num = _this.state.number;
      return React.createElement(Input, _extends({}, rest, {
        type: "text",
        size: size,
        value: num,
        onChange: _this.handleNumberChange,
        onBlur: _this.handleToDecimal,
        onPressEnter: _this.handlePressEnter,
        style: _extends({
          width: '100%'
        }, style),
        disabled: disabled,
        addonAfter: addonAfter
      }));
    };

    var value = props.value || {
      number: undefined
    };
    _this.state = {
      number: value.number
    };
    return _this;
  }

  _createClass(AmountInput, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      // Should be a controlled component.
      if ('value' in nextProps) {
        var value = nextProps.value || {
          number: undefined
        };
        this.setState(value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(LocaleReceiver, {
        componentName: "AmountInput",
        defaultLocale: defaultLocale
      }, this.renderInput);
    }
  }]);

  return AmountInput;
}(React.Component);

export { AmountInput as default };
//# sourceMappingURL=index.js.map
