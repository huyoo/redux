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
import message from 'antd/es/message';
import omit from 'lodash/omit';
import SockJS from 'sockjs-client'; // @ts-ignore

import { Stomp } from 'stompjs/lib/stomp';
var stompClient = null;

var SocketMessage =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(SocketMessage, _PureComponent);

  function SocketMessage() {
    var _this;

    _classCallCheck(this, SocketMessage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SocketMessage).apply(this, arguments));
    _this.state = {
      count: 0
    }; // 发送消息

    _this.initCount = function () {
      var requestParams = _this.props.requestParams;
      var userId = requestParams.userId,
          groupId = requestParams.groupId;

      if (requestParams && Object.keys(requestParams).length) {
        var messageJson = JSON.stringify({
          userId: userId,
          groupId: groupId
        });
        stompClient.send('/mq-app/seo/socket/count', {}, messageJson);
      }
    };

    _this.calcCount = function (result) {
      var _ref = result || {},
          data = _ref.data;

      var callback = _this.props.callback;
      var count = _this.state.count;
      var currentCount;

      if (data) {
        currentCount = data;

        _this.setState({
          count: data.unreadQty
        });
      } else {
        currentCount = result;

        _this.setState({
          count: count + result.unreadQty > 0 ? count + result.unreadQty : 0
        });

        currentCount = data.unreadQty;
      }

      if (callback) callback(currentCount); // 监听到消息的回调函数
    };

    _this.messageJudgment = function (result) {
      var _ref2 = result || {},
          data = _ref2.data;

      if (data) _this.initCount();
    }; // 关闭双通道(必须要关闭)


    _this.disconnect = function () {
      if (stompClient != null) {
        stompClient.disconnect(function () {// console.info('关闭成功');
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

  _createClass(SocketMessage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          socketUrl = _this$props.socketUrl,
          requestParams = _this$props.requestParams;
      var userId = requestParams.userId,
          groupId = requestParams.groupId; // 建立连接对象（还未发起连接）

      var socket = new SockJS(socketUrl); // 获取 STOMP 子协议的客户端对象

      stompClient = Stomp.over(socket);
      var self = this; // 向服务器发起websocket连接并发送CONNECT帧

      stompClient.connect({}, function () {
        /**
         * 订阅自己的消息条数对象，若返回的是response.body.data对象，则直接将条数赋值给state，若得到的是response.body,
         * 则将state与未读条数相加得出的最终未读条数，若读一条，则未读条数为-1（未读数量不能为负数）
         * {"deleteQty":0,"readQty":0,"unreadQty":0,"globalQty":0}
         */
        stompClient.subscribe("/mq-user/".concat(userId, "/seo/count"), function (res) {
          self.calcCount(res.body ? JSON.parse(res.body) : {});
        }); // 订阅自己的未读个人消息，用于实时接收并提示自己收到的个人消息，返回的是消息体本身(个人消息的发送、编辑会被订阅)

        stompClient.subscribe("/mq-user/".concat(userId, "/seo/inbox"), function (res) {
          self.messageJudgment(res.body ? JSON.parse(res.body) : {});
        });
        /**
         * 订阅未读的系统消息，用于实时接收并提示收到的系统消息（系统消息的发送与编辑），返回的是消息体本身，若返回消息体，则
         * 需去获取总的未读消息条数
         */

        stompClient.subscribe('/mq-topic/seo/message', function (res) {
          self.messageJudgment(res.body ? JSON.parse(res.body) : {});
        }); // 订阅自己所在的组的未读消息（消息的读取），返回消息数量

        stompClient.subscribe("/mq-user/".concat(groupId, "/seo/count"), function (res) {
          self.calcCount(res.body ? JSON.parse(res.body) : {});
        }); // 订阅自己所在的组的未读消息，用于实时接收并提示自己所在的组收到的消息（消息的发布与编辑），返回消息体，
        // 若要获取到最新未读条数，需重去获取消息的未读条数

        stompClient.subscribe("/mq-user/".concat(groupId, "/seo/inbox"), function (res) {
          self.messageJudgment(res.body ? JSON.parse(res.body) : {});
        }); // 初始化未读条数

        _this2.initCount();
      }, function (error) {
        console.error('error', error); // 连接失败时（服务器响应 ERROR 帧）的回调方法

        message.error('连接失败');
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.disconnect();
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
      }, omit(props, ['targetUrl', 'socketUrl', 'callback', 'requestParams', 'openStationNewsList', 'timeInterval'])), React.createElement(Icon, {
        type: iconType,
        style: _extends({
          fontSize: 32
        }, iconStyle)
      })));
    }
  }]);

  return SocketMessage;
}(PureComponent);

SocketMessage.defaultProps = {
  iconType: 'bell'
};
export default SocketMessage;
//# sourceMappingURL=socketMessage.js.map
