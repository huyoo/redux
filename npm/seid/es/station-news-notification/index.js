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

import React, { PureComponent } from 'react';
import SockJS from 'sockjs-client'; // @ts-ignore

import { Stomp } from 'stompjs/lib/stomp';
import Icon from 'antd/es/icon';
import notification from 'antd/es/notification';
import message from 'antd/es/message';
import Detail from '../station-news-list/detail';
import defaultLocale from './locale';
import SeidLocaleReceiver from '../seid-locale-receiver';
var stompClient = null;

var StationNewsNotification =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(StationNewsNotification, _PureComponent);

  function StationNewsNotification() {
    var _this;

    _classCallCheck(this, StationNewsNotification);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StationNewsNotification).apply(this, arguments));
    _this.state = {
      visible: false,
      data: {}
    };
    _this.userId = '';
    _this.groupId = '';
    _this.getCountUrl = '/mq-app/seo/socket/count'; // 关闭双通道(必须要关闭)

    _this.disconnect = function () {
      if (stompClient != null) {
        stompClient.disconnect(function () {});
      }
    }; // messageType-类型[0-系统 1-群组 2-个人 空-全部]


    _this.defaultIcon = function (type) {
      switch (type) {
        case '0':
          return React.createElement(Icon, {
            type: "setting",
            style: {
              color: '#faad14'
            }
          });

        case '1':
          return React.createElement(Icon, {
            type: "usergroup-add",
            style: {
              color: '#1890ff'
            }
          });

        case '2':
          return React.createElement(Icon, {
            type: "user",
            style: {
              color: '#52c41a'
            }
          });

        default:
          break;
      }
    };

    _this.openNotification = function (result) {
      var data = result.data;
      var notificationParmas = _this.props.notificationParmas;
      var iconTypeConfig = notificationParmas.iconTypeConfig,
          messageKey = notificationParmas.messageKey,
          descriptionKey = notificationParmas.descriptionKey,
          _notificationParmas$n = notificationParmas.needDetail,
          needDetail = _notificationParmas$n === void 0 ? true : _notificationParmas$n;
      if (!data.messageTitle) return;

      _this.setState({
        data: data
      });

      var socketParams = _this.props.socketParams;
      var callback = socketParams.callback;
      if (callback) callback(data);
      var content = descriptionKey ? data[descriptionKey] : React.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: data.messageContent
        }
      });
      notification.open(_extends({
        message: data[messageKey || 'messageTitle'],
        description: React.createElement("div", {
          className: "station-news-notification-content"
        }, content),
        onClick: function onClick() {
          if (needDetail) _this.setState({
            visible: true
          });
        },
        icon: iconTypeConfig ? iconTypeConfig(data.messageType) : _this.defaultIcon(data.messageType),
        style: {
          width: 520,
          marginLeft: 335 - 520
        }
      }, notificationParmas));
    };

    _this.onCancel = function () {
      _this.setState({
        visible: false
      });
    };

    _this.renderCom = function (locale) {
      var _this$state = _this.state,
          visible = _this$state.visible,
          data = _this$state.data;
      var notificationParmas = _this.props.notificationParmas;
      var getNewsDetailUrl = notificationParmas.getNewsDetailUrl,
          getNewsDetailUrlRequestMethod = notificationParmas.getNewsDetailUrlRequestMethod;
      var propsToDetail = {
        getNewsDetailUrl: getNewsDetailUrl,
        getNewsDetailUrlRequestMethod: getNewsDetailUrlRequestMethod,
        visible: visible,
        params: {
          userId: _this.userId,
          messageId: data.messageId
        },
        onCancel: _this.onCancel,
        modalProps: {
          width: 800
        }
      };
      return visible && React.createElement(Detail, _extends({
        locale: locale
      }, propsToDetail));
    };

    return _this;
  }

  _createClass(StationNewsNotification, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          socketParams = _this$props.socketParams,
          notificationParmas = _this$props.notificationParmas;

      var _ref = notificationParmas || {},
          customNotificationTemplate = _ref.customNotificationTemplate;

      var _ref2 = socketParams || {},
          userId = _ref2.userId,
          groupId = _ref2.groupId,
          socketUrl = _ref2.socketUrl,
          getCountUrl = _ref2.getCountUrl;

      this.userId = userId;
      this.groupId = groupId;
      this.getCountUrl = getCountUrl; // 建立连接对象（还未发起连接）

      var socket = new SockJS(socketUrl); // 获取 STOMP 子协议的客户端对象

      stompClient = Stomp.over(socket);
      var self = this; // 向服务器发起websocket连接并发送CONNECT帧

      stompClient.connect({}, function () {
        // 连接成功时（服务器响应 CONNECTED 帧）的回调方法
        // 监听个人消息消息
        stompClient.subscribe("/mq-user/".concat(userId, "/seo/inbox"), function (res) {
          var content = res.body ? JSON.parse(res.body) : {};

          if (customNotificationTemplate) {
            customNotificationTemplate(content);
          } else {
            self.openNotification(content);
          }
        }); // 监听系统消息

        stompClient.subscribe('/mq-topic/seo/message', function (res) {
          var content = res.body ? JSON.parse(res.body) : {};

          if (customNotificationTemplate) {
            customNotificationTemplate(content);
          } else {
            self.openNotification(content);
          }
        }); // 监听群组消息

        stompClient.subscribe("/mq-user/".concat(groupId, "/seo/inbox"), function (res) {
          var content = res.body ? JSON.parse(res.body) : {};

          if (customNotificationTemplate) {
            customNotificationTemplate(content);
          } else {
            self.openNotification(content);
          }
        });
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
      return React.createElement(SeidLocaleReceiver, {
        componentName: "StationNewsNotification",
        defaultLocale: defaultLocale
      }, this.renderCom);
    }
  }]);

  return StationNewsNotification;
}(PureComponent);

export default StationNewsNotification;
//# sourceMappingURL=index.js.map
