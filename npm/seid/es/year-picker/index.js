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

import * as React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'antd/es/date-picker';
import cls from 'classnames';
import moment from 'moment';

var YearPicker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(YearPicker, _React$Component);

  function YearPicker(props) {
    var _this;

    _classCallCheck(this, YearPicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(YearPicker).call(this, props));

    _this.validValue = function (v) {
      if (v && v.toString().length === 4 && !isNaN(Number(v))) {
        return moment(v.toString());
      }

      return undefined;
    };

    _this.triggerChange = function (yearValue) {
      var onChange = _this.props.onChange;

      if (onChange) {
        var yv;

        if (yearValue) {
          yv = parseInt(yearValue.toString(), 10);

          if (isNaN(yv)) {
            yv = undefined;
          }
        }

        onChange(yv);
      }
    };

    _this.changeRender = function (v) {
      var format = _this.props.format;

      _this.setState({
        open: false,
        value: v
      }, function () {
        return _this.triggerChange(moment(v).format(format));
      });
    };

    _this.clearValue = function () {
      _this.setState({
        value: undefined
      }, function () {
        _this.triggerChange(undefined);
      });
    };

    _this.setOpenState = function () {
      var open = _this.state.open;

      _this.setState({
        open: !open
      });
    };

    var defaultValue = props.defaultValue,
        value = props.value;
    var defaultV = value || defaultValue;
    _this.state = {
      value: _this.validValue(defaultV),
      open: false
    };
    return _this;
  }

  _createClass(YearPicker, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          open = _this$state.open,
          value = _this$state.value;
      var _this$props = this.props,
          style = _this$props.style,
          allowClear = _this$props.allowClear,
          placeholder = _this$props.placeholder,
          className = _this$props.className,
          format = _this$props.format,
          disabled = _this$props.disabled;
      return React.createElement(DatePicker, {
        disabled: disabled,
        mode: "year",
        format: format,
        allowClear: allowClear,
        placeholder: placeholder,
        value: value,
        onPanelChange: this.changeRender,
        onOpenChange: this.setOpenState,
        onChange: this.clearValue,
        open: open,
        style: _extends({}, style),
        className: cls('seid-year-picker', className)
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if (nextProps.value) {
        return nextProps.value;
      }

      return null;
    }
  }]);

  return YearPicker;
}(React.Component);

YearPicker.defaultProps = {
  disabled: false,
  allowClear: false,
  placeholder: '',
  format: 'YYYY'
};
YearPicker.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  allowClear: PropTypes.bool,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};
export default YearPicker;
//# sourceMappingURL=index.js.map
