function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * @Author: zp
 * @Date:   2019-07-24 09:44:23
 * @Last Modified by:   zp
 * @Last Modified time: 2019-07-29 14:33:56
 */
import React, { Component } from 'react';
import Tabs from 'antd/es/tabs';
import SecondEditor from './component/SecondEditor';
import MinuteEditor from './component/MinuteEditor';
import HourEditor from './component/HourEditor';
import DayEditor from './component/DayEditor';
import MonthEditor from './component/MonthEditor';
import WeekEditor from './component/WeekEditor';
import YearEditor from './component/YearEditor';
import LocaleReceiver from '../seid-locale-receiver';
import defaultLocale from './locale';
var TabPane = Tabs.TabPane;
var radioStyle = {
  display: 'block',
  lineHeight: '30px',
  padding: '5px'
};
var containerStyle = {
  padding: '12px 12px'
};
/**
 * 任务调度编辑器
 */

var CronBuilder =
/*#__PURE__*/
function (_Component) {
  _inherits(CronBuilder, _Component);

  function CronBuilder(props) {
    var _this;

    _classCallCheck(this, CronBuilder);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CronBuilder).call(this, props));

    _this.updateCron = function (cronText) {
      var isSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      cronText = cronText && cronText.trim();

      if (cronText) {
        var cron = _this.state.cron;
        var cronArr = cronText.split(' ');

        for (var i = 0; i < cronArr.length; i += 1) {
          cron[i] = cronArr[i];
        }

        if (cron[3] === '?') {
          if (cron[5] === '?') cron[5] = '*';
        } else {
          cron[5] = '?';
        }

        if (isSet) {
          _this.cron = cron;
        } else {
          _this.cron = cron;

          _this.setState({
            cron: cron
          });
        }
      } else {
        _this.cron = [];

        _this.setState({
          cron: []
        });
      }
    };

    _this.cronChange = function (value, index) {
      var onChange = _this.props.onChange;
      var cron = _this.state.cron;

      if (!cron.length) {
        cron.push.apply(cron, ['*', '*', '*', '?', '*', '*', '*']);
      }

      cron[index] = value;

      if (index === 3) {
        if (value === '?') {
          if (cron[5] === '?') cron[5] = '*';
        } else {
          cron[5] = '?';
        }
      } else if (index === 5) {
        if (value === '?') {
          if (cron[3] === '?') cron[3] = '*';
        } else {
          cron[3] = '?';
        }
      }

      _this.setState({
        cron: cron
      });

      var cronText = cron.join(' ').trim();

      if (onChange) {
        onChange(cronText);
      }
    };

    _this.secondChange = function (value) {
      _this.cronChange(value, 0);
    };

    _this.minuteChange = function (value) {
      _this.cronChange(value, 1);
    };

    _this.hourChange = function (value) {
      _this.cronChange(value, 2);
    };

    _this.dayChange = function (value) {
      _this.cronChange(value, 3);
    };

    _this.monthChange = function (value) {
      _this.cronChange(value, 4);
    };

    _this.weekChange = function (value) {
      _this.cronChange(value, 5);
    };

    _this.yearChange = function (value) {
      _this.cronChange(value, 6);
    };

    _this.renderComponent = function (locale) {
      var _this$props = _this.props,
          _this$props$style = _this$props.style,
          style = _this$props$style === void 0 ? containerStyle : _this$props$style,
          className = _this$props.className;
      var cron = _this.state.cron;
      return React.createElement(Tabs, {
        className: className,
        defaultActiveKey: "second",
        style: style
      }, React.createElement(TabPane, {
        tab: locale.second,
        key: "second"
      }, React.createElement(SecondEditor, {
        locale: locale,
        onChange: _this.secondChange,
        value: cron[0],
        radioStyle: radioStyle
      })), React.createElement(TabPane, {
        tab: locale.minute,
        key: "minute"
      }, React.createElement(MinuteEditor, {
        locale: locale,
        onChange: _this.minuteChange,
        value: cron[1],
        radioStyle: radioStyle
      })), React.createElement(TabPane, {
        tab: locale.hour,
        key: "hour"
      }, React.createElement(HourEditor, {
        locale: locale,
        onChange: _this.hourChange,
        value: cron[2],
        radioStyle: radioStyle
      })), React.createElement(TabPane, {
        tab: locale.day,
        key: "day"
      }, React.createElement(DayEditor, {
        locale: locale,
        onChange: _this.dayChange,
        value: cron[3],
        radioStyle: radioStyle
      })), React.createElement(TabPane, {
        tab: locale.month,
        key: "month"
      }, React.createElement(MonthEditor, {
        locale: locale,
        onChange: _this.monthChange,
        value: cron[4],
        radioStyle: radioStyle
      })), React.createElement(TabPane, {
        tab: locale.week,
        key: "week"
      }, React.createElement(WeekEditor, {
        locale: locale,
        onChange: _this.weekChange,
        value: cron[5],
        radioStyle: radioStyle
      })), React.createElement(TabPane, {
        tab: locale.year,
        key: "year"
      }, React.createElement(YearEditor, {
        locale: locale,
        onChange: _this.yearChange,
        value: cron[6],
        radioStyle: radioStyle
      })));
    };

    var defaultValue = props.defaultValue;
    _this.state = {
      cron: defaultValue ? defaultValue.split(' ') : []
    };
    return _this;
  }

  _createClass(CronBuilder, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var defaultValue = this.props.defaultValue;
      this.updateCron(defaultValue, false);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var value = this.props.value;

      if (value !== nextProps.value) {
        this.updateCron(nextProps.value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(LocaleReceiver, {
        componentName: "CronBuilder",
        defaultLocale: defaultLocale
      }, this.renderComponent);
    }
  }]);

  return CronBuilder;
}(Component);

CronBuilder.defaultProps = {
  style: containerStyle
};
export default CronBuilder;
//# sourceMappingURL=index.js.map
