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

import React, { Component } from 'react';
import DatePicker from 'antd/es/date-picker';
import moment from 'moment';
import LocaleReceiver from '../seid-locale-receiver';
import defaultLocale from './locale';
/*
 * 时间范围选择器
 */

var ScopeDatePicker =
/*#__PURE__*/
function (_Component) {
  _inherits(ScopeDatePicker, _Component);

  function ScopeDatePicker(props) {
    var _this;

    _classCallCheck(this, ScopeDatePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScopeDatePicker).call(this, props));

    _this.disabledStartDate = function (startDate) {
      var _this$props = _this.props,
          limitEndDate = _this$props.limitEndDate,
          limitStartDate = _this$props.limitStartDate;
      var endDate = _this.state.endDate;

      if (limitStartDate) {
        if (!endDate) {
          if (limitEndDate) {
            return startDate.valueOf() < limitStartDate.valueOf() || startDate.valueOf() > limitEndDate.valueOf();
          }

          return startDate.valueOf() < limitStartDate.valueOf();
        }

        var date = endDate;

        if (limitEndDate && limitEndDate.valueOf() < date.valueOf()) {
          date = limitEndDate;
        }

        return startDate.valueOf() < limitStartDate.valueOf() || startDate.valueOf() > date.valueOf();
      }

      if (limitEndDate) {
        if (!endDate) {
          return startDate.valueOf() > limitEndDate.valueOf();
        }

        var _date = endDate;

        if (endDate.valueOf() > limitEndDate.valueOf()) {
          _date = limitEndDate;
        }

        return startDate.valueOf() > _date.valueOf();
      }

      if (!startDate || !endDate) {
        return false;
      }

      return startDate.valueOf() > endDate.valueOf();
    };

    _this.disabledEndDate = function (endDate) {
      var startDate = _this.state.startDate;
      var _this$props2 = _this.props,
          limitStartDate = _this$props2.limitStartDate,
          limitEndDate = _this$props2.limitEndDate;

      if (limitEndDate) {
        if (!startDate) {
          if (limitStartDate) {
            return endDate.valueOf() > limitEndDate.valueOf() || endDate.valueOf() < limitStartDate.valueOf();
          }

          return endDate.valueOf() > limitEndDate.valueOf();
        }

        var date = startDate;

        if (limitStartDate && limitStartDate.valueOf() > startDate.valueOf()) {
          date = limitStartDate;
        }

        return endDate.valueOf() > limitEndDate.valueOf() || endDate.valueOf() < date.valueOf();
      }

      if (limitStartDate) {
        if (!startDate) {
          return endDate.valueOf() < limitStartDate.valueOf();
        }

        var _date2 = startDate;

        if (limitStartDate.valueOf() < startDate.valueOf()) {
          _date2 = limitStartDate;
        }

        return endDate.valueOf() < _date2.valueOf();
      }

      if (!endDate || !startDate) {
        return false;
      }

      return endDate.valueOf() < startDate.valueOf();
    };

    _this.onChange = function (changedValue) {
      var onChange = _this.props.onChange;

      _this.setState(changedValue, function () {
        if (onChange) {
          var tempDateRange = _extends(_extends({}, _this.state), changedValue);

          var startDate = tempDateRange.startDate,
              endDate = tempDateRange.endDate;
          var startDateStr = startDate ? startDate.format('YYYY-MM-DD') : null;
          var endDateStr = endDate ? endDate.format('YYYY-MM-DD') : null;
          onChange([startDateStr, endDateStr]);
        }
      });
    };

    _this.onStartChange = function (startDate) {
      _this.onChange({
        startDate: startDate
      });
    };

    _this.onEndChange = function (endDate) {
      _this.onChange({
        endDate: endDate
      });
    };

    _this.renderPicker = function (locale) {
      var _this$state = _this.state,
          startDate = _this$state.startDate,
          endDate = _this$state.endDate;

      var _a = _this.props,
          _a$startDateHolder = _a.startDateHolder,
          startDateHolder = _a$startDateHolder === void 0 ? locale.startDate : _a$startDateHolder,
          _a$endDateHolder = _a.endDateHolder,
          endDateHolder = _a$endDateHolder === void 0 ? locale.endDate : _a$endDateHolder,
          splitStr = _a.splitStr,
          rest = __rest(_a, ["startDateHolder", "endDateHolder", "splitStr"]);

      return React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center'
        }
      }, React.createElement("div", {
        style: {
          flex: '1'
        }
      }, React.createElement(DatePicker, _extends({}, rest, {
        disabledDate: _this.disabledStartDate,
        placeholder: startDateHolder,
        value: startDate,
        style: {
          width: '100%'
        },
        onChange: _this.onStartChange
      }))), React.createElement("div", {
        style: {
          padding: '0 5px'
        }
      }, React.createElement("span", null, splitStr)), React.createElement("div", {
        style: {
          flex: '1'
        }
      }, React.createElement(DatePicker, _extends({}, rest, {
        disabledDate: _this.disabledEndDate,
        value: endDate,
        placeholder: endDateHolder,
        style: {
          width: '100%'
        },
        onChange: _this.onEndChange
      }))));
    };

    var value = props.value || [];
    _this.state = {
      startDate: value[0] ? moment(value[0]) : undefined,
      endDate: value[1] ? moment(value[1]) : undefined
    };
    return _this;
  }

  _createClass(ScopeDatePicker, [{
    key: "render",
    value: function render() {
      return React.createElement(LocaleReceiver, {
        defaultLocale: defaultLocale,
        componentName: "ScopeDatePicker"
      }, this.renderPicker);
    }
  }]);

  return ScopeDatePicker;
}(Component);

ScopeDatePicker.defaultProps = {
  // startDateHolder: '开始时间',
  // endDateHolder: '结束时间',
  splitStr: '~'
};
export default ScopeDatePicker;
//# sourceMappingURL=index.js.map
