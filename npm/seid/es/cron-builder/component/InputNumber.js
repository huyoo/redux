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
import Input from 'antd/es/input';
import isUndefined from 'lodash/isUndefined';

var isNotNone = function isNotNone(v) {
  return v !== null && v !== undefined;
};

var InputNumber =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputNumber, _React$Component);

  function InputNumber(props) {
    var _this;

    _classCallCheck(this, InputNumber);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputNumber).call(this, props));

    _this.getValue = function (value, min, max) {
      if (/^\d+$/.test(value)) {
        var v = parseInt(value, 0);
        if (v < min) v = min;
        if (v > max) v = max;
        return v;
      }

      return min;
    };

    _this.handleChange = function (_ref) {
      var value = _ref.target.value;

      _this.setState({
        value: value
      });
    };

    _this.handleBlur = function () {
      _this.notify();
    };

    _this.handleEnter = function () {
      _this.notify();
    };

    _this.notify = function () {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          min = _this$props.min,
          max = _this$props.max;
      var value = _this.state.value;

      if (onChange) {
        onChange(_this.getValue(value, min, max));
      }
    };

    var value = props.value,
        defaultValue = props.defaultValue;
    _this.state = {
      value: isUndefined(value) ? defaultValue : value
    };
    return _this;
  }

  _createClass(InputNumber, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var value = nextProps.value,
          min = nextProps.min,
          max = nextProps.max;
      var v = this.getValue(value, min, max);
      this.setState({
        value: v
      });
      if (isNotNone(v) && isNotNone(value) && v.toString() !== value.toString()) this.notify();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          placeholder = _this$props2.placeholder,
          style = _this$props2.style,
          disabled = _this$props2.disabled;
      var value = this.state.value;
      return React.createElement(Input, {
        disabled: disabled,
        style: _extends({
          width: '75px'
        }, style),
        placeholder: placeholder,
        onChange: this.handleChange,
        onPressEnter: this.handleEnter,
        onBlur: this.handleBlur,
        value: value
      });
    }
  }]);

  return InputNumber;
}(React.Component);

export default InputNumber;
//# sourceMappingURL=InputNumber.js.map
