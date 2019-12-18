function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { Component } from 'react';
import Input from 'antd/es/input';
import Popover from 'antd/es/popover';
import cls from 'classnames';
import CronBuilder from '../cron-builder';

var CronInput =
/*#__PURE__*/
function (_Component) {
  _inherits(CronInput, _Component);

  function CronInput(props) {
    var _this;

    _classCallCheck(this, CronInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CronInput).call(this, props));

    _this.onChange = function (value) {
      _this.setState({
        value: value
      }, function () {
        var onChange = _this.props.onChange;

        if (onChange) {
          onChange(value);
        }
      });
    };

    _this.onInputChange = function () {
      _this.setState({
        value: undefined
      }, function () {
        var onChange = _this.props.onChange;

        if (onChange) {
          onChange();
        }
      });
    };

    var value = props.value,
        defaultValue = props.defaultValue;
    _this.state = {
      value: value || defaultValue
    };
    return _this;
  }

  _createClass(CronInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          style = _this$props.style,
          className = _this$props.className;
      var value = this.state.value;
      return React.createElement("div", {
        style: style,
        className: cls(className, 'seid-cron-input'),
        ref: function ref(_ref) {
          _this2.loader = _ref;
        }
      }, React.createElement(Popover, {
        trigger: "click",
        getPopupContainer: function getPopupContainer() {
          return _this2.loader ? _this2.loader : document.body;
        },
        content: React.createElement("div", {
          style: {
            width: '600px'
          }
        }, React.createElement(CronBuilder, {
          value: value,
          onChange: this.onChange
        }))
      }, React.createElement(Input, {
        value: value,
        allowClear: true,
        onChange: this.onInputChange
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if ('value' in nextProps && nextProps.value !== prevState.value) {
        return {
          value: nextProps.value
        };
      }

      return null;
    }
  }]);

  return CronInput;
}(Component);

export default CronInput;
//# sourceMappingURL=index.js.map
