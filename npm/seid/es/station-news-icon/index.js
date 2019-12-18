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

import React, { PureComponent } from 'react';
import Badge from 'antd/es/badge';
import Icon from 'antd/es/icon';
import omit from 'lodash/omit';
import SocketMessage from './socketMessage';
import { request } from '../utils';
var DEFAULT_TIME_INTERVAL = 60000; // 默认请求时间间隔1分钟

var StationNewsIcon =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(StationNewsIcon, _PureComponent);

  function StationNewsIcon() {
    var _this;

    _classCallCheck(this, StationNewsIcon);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StationNewsIcon).apply(this, arguments));
    _this.state = {
      count: 0,
      requestParams: {}
    }; // 获取未处理的站内消息数量

    _this.handleGet = function () {
      var _this$props = _this.props,
          targetUrl = _this$props.targetUrl,
          requestParams = _this$props.requestParams;

      if (requestParams && Object.keys(requestParams).length) {
        request({
          url: targetUrl,
          params: requestParams
        }).then(function (res) {
          var _res$data = res.data,
              data = _res$data === void 0 ? {} : _res$data;

          _this.setState({
            count: data.unreadQty,
            requestParams: _extends({}, requestParams)
          });
        })["catch"](function (error) {
          console.error('error', error);

          _this.setState({
            requestParams: _extends({}, requestParams)
          });
        });
      }
    };

    _this.redirectToPages = function () {
      // 打开未处理消息的新页签
      var openStationNewsList = _this.props.openStationNewsList;
      if (openStationNewsList) openStationNewsList();
    };

    return _this;
  }

  _createClass(StationNewsIcon, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var timeInterval = this.props.timeInterval;
      this.handleGet(); // @ts-ignore

      this.timer = setInterval(function () {
        _this2.handleGet();
      }, timeInterval);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.clearInterval(this.timer);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var requestParams = this.state.requestParams;
      var propsParams = nextProps.requestParams;

      if (JSON.stringify(requestParams) !== JSON.stringify(propsParams)) {
        this.handleGet();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          iconType = _a.iconType,
          iconStyle = _a.iconStyle,
          props = __rest(_a, ["iconType", "iconStyle"]);

      var count = this.state.count;
      return React.createElement("div", {
        onClick: this.redirectToPages
      }, React.createElement(Badge, _extends({
        count: count
      }, omit(props, ['targetUrl', 'requestParams', 'openStationNewsList', 'timeInterval'])), React.createElement(Icon, {
        type: iconType,
        style: _extends({
          fontSize: 32
        }, iconStyle)
      })));
    }
  }]);

  return StationNewsIcon;
}(PureComponent);

StationNewsIcon.defaultProps = {
  iconType: 'bell',
  timeInterval: DEFAULT_TIME_INTERVAL
};
StationNewsIcon.SocketMessage = SocketMessage;
export default StationNewsIcon;
//# sourceMappingURL=index.js.map
