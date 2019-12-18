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
import Descriptions from 'antd/es/descriptions';
import Modal from 'antd/es/modal';
import Spin from 'antd/es/spin';
import Icon from 'antd/es/icon';
import { handleMessageType } from './index';
import BraftEditors from '../rich-editor';
import { request } from '../utils';

var StationNewsListDetail =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(StationNewsListDetail, _PureComponent);

  function StationNewsListDetail(props) {
    var _this;

    _classCallCheck(this, StationNewsListDetail);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StationNewsListDetail).call(this, props)); // 关闭modal

    _this.handleCancel = function () {
      var onCancel = _this.props.onCancel;
      if (onCancel) onCancel();
    }; // 获取消息详情


    _this.handleGetDetail = function () {
      var _this$props = _this.props,
          getNewsDetailUrl = _this$props.getNewsDetailUrl,
          params = _this$props.params,
          getNewsDetailUrlRequestMethod = _this$props.getNewsDetailUrlRequestMethod;

      _this.setState({
        loading: true
      });

      var promise = request({
        method: getNewsDetailUrlRequestMethod,
        url: getNewsDetailUrl,
        params: params
      });
      promise.then(function (res) {
        var _res$data = res.data,
            data = _res$data === void 0 ? {} : _res$data;

        _this.setState({
          data: data,
          loading: false
        });
      })["catch"](function (error) {
        _this.setState({
          loading: true
        });

        console.error('error', error);
      });
    };

    _this.getMessageAttachment = function (data) {
      try {
        if (data) return JSON.parse(data);
      } catch (e) {
        Modal.info({
          title: '提醒',
          content: React.createElement("div", null, "\u4E0A\u4F20\u7684\u9644\u4EF6\u683C\u5F0F\u4E0D\u7B26\u5408\u8981\u6C42"),
          onOk: function onOk() {
            Modal.destroyAll();
          }
        });
      }
    };

    _this.state = {
      data: {},
      loading: false
    };
    return _this;
  }

  _createClass(StationNewsListDetail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // 如果已有消息体的数据，则不用再通过接口去获取消息数据
      var propsData = this.props.propsData;

      if (propsData && Object.keys(propsData).length) {
        this.setState({
          data: propsData
        });
        return;
      }

      this.handleGetDetail();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          visible = _this$props2.visible,
          _this$props2$footer = _this$props2.footer,
          footer = _this$props2$footer === void 0 ? null : _this$props2$footer,
          modalProps = _this$props2.modalProps,
          detailContent = _this$props2.detailContent,
          locale = _this$props2.locale;
      var _this$state = this.state,
          data = _this$state.data,
          loading = _this$state.loading;
      var messageAttachment = this.getMessageAttachment(data.messageAttachment);
      return React.createElement(Modal, _extends({
        title: "\u6D88\u606F\u8BE6\u60C5",
        visible: visible,
        onCancel: this.handleCancel,
        footer: footer,
        centered: true,
        destroyOnClose: true
      }, modalProps), React.createElement(Spin, {
        spinning: loading
      }, detailContent || React.createElement("div", {
        className: "detailWrapper"
      }, React.createElement(Descriptions, {
        column: 2
      }, React.createElement(Descriptions.Item, {
        span: 2,
        label: "\u6D88\u606F\u6807\u9898"
      }, data.messageTitle), React.createElement(Descriptions.Item, {
        span: 2,
        label: "\u6D88\u606F\u7C7B\u578B"
      }, handleMessageType(data.messageType, locale)), React.createElement(Descriptions.Item, {
        className: "braft-wrapper",
        span: 2,
        label: "\u6D88\u606F\u5185\u5BB9"
      }, data.messageContent !== undefined && React.createElement(BraftEditors.View, {
        content: data.messageContent
      })), React.createElement(Descriptions.Item, {
        span: 2,
        label: "\u53D1\u9001\u4EBA"
      }, data.publisherNick), React.createElement(Descriptions.Item, {
        span: 2,
        label: "\u53D1\u9001\u65F6\u95F4"
      }, data.publishDate), data.messageAttachment && React.createElement(Descriptions.Item, {
        span: 2,
        label: "\u6D88\u606F\u9644\u4EF6"
      }, React.createElement("a", {
        href: messageAttachment ? messageAttachment[0].url : undefined,
        target: "_blank",
        rel: "noopener noreferrer"
      }, React.createElement(Icon, {
        type: "link",
        className: "iconMR"
      }), "\u9644\u4EF6"))))));
    }
  }]);

  return StationNewsListDetail;
}(PureComponent);

export default StationNewsListDetail;
//# sourceMappingURL=detail.js.map
