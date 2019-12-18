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
import lodashGet from 'lodash/get';
import Modal from 'antd/es/modal';
import Spin from 'antd/es/spin';
import Form from 'antd/es/form';
import Input from 'antd/es/input';
import Select from 'antd/es/select';
import Row from 'antd/es/row';
import Col from 'antd/es/col';
import message from 'antd/es/message';
import SelectTable from '../select-table';
import UploadFileList from '../upload-file-list';
import AuthorityDataTree from '../authority-data-tree';
import BraftEditors from '../rich-editor';
import { request } from '../utils';
var FormItem = Form.Item;
var Option = Select.Option;
var SPAN = 12;
var columns = [{
  code: 'name',
  name: '姓名',
  width: 100,
  sort: 1
}, {
  code: 'orgName',
  name: '组织名称',
  width: 250,
  sort: 1
}, {
  code: 'email',
  name: '电子邮箱',
  width: 200,
  sort: 1
}, {
  code: 'mobile',
  name: '联系方式',
  width: 150,
  sort: 1
}];

var StationNewsListManageEdit =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(StationNewsListManageEdit, _PureComponent);

  function StationNewsListManageEdit(props) {
    var _this;

    _classCallCheck(this, StationNewsListManageEdit);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StationNewsListManageEdit).call(this, props)); // 关闭modal

    _this.handleCancel = function () {
      var onCancel = _this.props.onCancel;
      if (onCancel) onCancel();
    }; // 获取消息详情


    _this.handleGetDetail = function () {
      var _this$props = _this.props,
          getNewsDetailUrl = _this$props.getNewsDetailUrl,
          params = _this$props.params,
          getNewsDetailUrlRequestMethod = _this$props.getNewsDetailUrlRequestMethod;
      var method = getNewsDetailUrlRequestMethod || 'get';

      _this.setState({
        loading: true
      });

      var promise = request({
        method: method,
        url: getNewsDetailUrl,
        params: params
      });
      promise.then(function (res) {
        var _res$data = res.data,
            data = _res$data === void 0 ? {} : _res$data;
        var showGroupId = data.messageType === '1';
        var showRecipientId = data.messageType === '2';

        _this.setState({
          data: data,
          loading: false,
          showGroupId: showGroupId,
          showRecipientId: showRecipientId
        });
      })["catch"](function (error) {
        _this.setState({
          loading: true
        });

        console.error('error', error);
      });
    };

    _this.handleMessageType = function (value) {
      var form = _this.props.form;
      setTimeout(function () {
        form.setFieldsValue({
          recipientId: undefined
        });
      }, 100);

      if (value === '1') {
        _this.setState({
          showGroupId: true,
          showRecipientId: false
        });
      } else if (value === '2') {
        _this.setState({
          showGroupId: false,
          showRecipientId: true
        });
      } else {
        _this.setState({
          showGroupId: false,
          showRecipientId: false
        });
      }
    };

    _this.handleOk = function () {
      var _this$props2 = _this.props,
          saveNewsUrl = _this$props2.saveNewsUrl,
          saveNewsRequestMethod = _this$props2.saveNewsRequestMethod,
          editNewsUrl = _this$props2.editNewsUrl,
          editNewsRequestMethod = _this$props2.editNewsRequestMethod,
          onCancel = _this$props2.onCancel;
      var sign = _this.props.sign;

      if (sign === 'create') {
        _this.handleAddAndEdit(saveNewsUrl, saveNewsRequestMethod);
      } else if (sign === 'edit') {
        _this.handleAddAndEdit(editNewsUrl, editNewsRequestMethod);
      } else if (onCancel) onCancel();
    };

    _this.handleAddAndEdit = function (port, method) {
      var _this$props3 = _this.props,
          form = _this$props3.form,
          onRefresh = _this$props3.onRefresh,
          userId = _this$props3.userId;
      var data = _this.state.data;
      form.validateFields(function (err, value) {
        if (!err) {
          var _value$recipientId = value.recipientId,
              recipientId = _value$recipientId === void 0 ? {} : _value$recipientId,
              messageAttachment = value.messageAttachment;

          _this.setState({
            loading: true
          });

          request({
            method: method,
            url: port,
            data: _extends(_extends({}, value), {
              // recipientId: '33b15633b6b349b19c3a42dbac54911b',
              recipient: [{
                recipientId: recipientId.id,
                recipientCode: recipientId.code,
                recipientNick: recipientId.name
              }],
              publisherId: userId,
              publisherCode: data.publisherCode,
              messageAttachment: messageAttachment && JSON.stringify(messageAttachment),
              messageLink: data.messageLink,
              messageId: data.messageId
            })
          }).then(function (res) {
            if (res.success) {
              _this.setState({
                loading: false
              });

              message.success(res.message);
              onRefresh();
            }
          })["catch"](function (error) {
            _this.setState({
              loading: false
            });

            console.error('error', error);
          });
        }
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
      data: props.data || {},
      loading: false,
      showGroupId: false,
      showRecipientId: false,
      disabled: false
    };
    return _this;
  }

  _createClass(StationNewsListManageEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var sign = this.props.sign;

      if (sign === 'look') {
        this.setState({
          disabled: true
        });
      }

      if (sign === 'look' || sign === 'edit') this.handleGetDetail();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          visible = _this$props4.visible,
          modalProps = _this$props4.modalProps,
          form = _this$props4.form,
          title = _this$props4.title,
          orgUrl = _this$props4.orgUrl,
          fileTypes = _this$props4.fileTypes,
          uploadDocumentsAPI = _this$props4.uploadDocumentsAPI,
          downloadDocumentAPI = _this$props4.downloadDocumentAPI,
          EDM_URL = _this$props4.EDM_URL,
          receiverUrl = _this$props4.receiverUrl,
          receiverUrlRequestMethod = _this$props4.receiverUrlRequestMethod,
          fileIdAttr = _this$props4.fileIdAttr,
          fileNameAttr = _this$props4.fileNameAttr;
      var getFieldDecorator = form.getFieldDecorator;
      var _this$state = this.state,
          loading = _this$state.loading,
          showGroupId = _this$state.showGroupId,
          showRecipientId = _this$state.showRecipientId,
          _this$state$data = _this$state.data,
          data = _this$state$data === void 0 ? {} : _this$state$data,
          disabled = _this$state.disabled;
      var messageAttachment = this.getMessageAttachment(data.messageAttachment);

      var formItemLayout = function formItemLayout() {
        var label = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
        var wrapper = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
        return {
          labelCol: {
            span: label
          },
          wrapperCol: {
            span: wrapper
          }
        };
      };

      return React.createElement(Modal, _extends({
        title: title,
        visible: visible,
        onCancel: this.handleCancel,
        onOk: this.handleOk,
        centered: true,
        destroyOnClose: true
      }, modalProps), React.createElement(Spin, {
        spinning: loading
      }, React.createElement(Form, {
        className: "station-news-manage-detail"
      }, React.createElement(Row, null, React.createElement(Col, {
        span: SPAN
      }, React.createElement(FormItem, _extends({
        label: "\u6D88\u606F\u6807\u9898"
      }, formItemLayout()), getFieldDecorator('messageTitle', {
        rules: [{
          required: true,
          message: '消息标题为必填项'
        }],
        initialValue: data.messageTitle
      })(React.createElement(Input, {
        disabled: disabled
      })))), React.createElement(Col, {
        span: SPAN
      }, React.createElement(FormItem, _extends({
        label: "\u53D1\u4EF6\u4EBA"
      }, formItemLayout()), getFieldDecorator('publisherNick', {
        rules: [{
          required: true,
          message: '发件人为必填项'
        }],
        initialValue: data.publisherNick
      })(React.createElement(Input, {
        disabled: disabled
      })))), React.createElement(Col, {
        span: SPAN
      }, React.createElement(FormItem, _extends({
        label: "\u6D88\u606F\u7C7B\u578B"
      }, formItemLayout()), getFieldDecorator('messageType', {
        rules: [{
          required: true,
          message: '消息类型为必填项'
        }],
        initialValue: data.messageType
      })(React.createElement(Select, {
        style: {
          width: '100%'
        },
        allowClear: true,
        onChange: this.handleMessageType,
        disabled: disabled
      }, React.createElement(Option, {
        value: "0"
      }, "\u7CFB\u7EDF\u6D88\u606F"), React.createElement(Option, {
        value: "1"
      }, "\u7FA4\u7EC4\u6D88\u606F"), React.createElement(Option, {
        value: "2"
      }, "\u4E2A\u4EBA\u6D88\u606F"))))), React.createElement(Col, {
        span: SPAN
      }, React.createElement(FormItem, _extends({
        label: "\u9644\u4EF6"
      }, formItemLayout()), getFieldDecorator('messageAttachment', {
        initialValue: messageAttachment && [{
          fileId: lodashGet(messageAttachment, "[0].".concat(fileIdAttr)),
          uid: lodashGet(messageAttachment, "[0].".concat(fileIdAttr)),
          name: lodashGet(messageAttachment, "[0].".concat(fileNameAttr)),
          response: [lodashGet(messageAttachment, "[0].".concat(fileIdAttr))]
        }],
        valuePropName: 'fileList'
      })(React.createElement(UploadFileList, {
        disable: disabled,
        fileTypes: fileTypes,
        uploadDocumentsAPI: uploadDocumentsAPI,
        downloadDocumentAPI: downloadDocumentAPI,
        EDM_URL: EDM_URL
      })))), showGroupId ? React.createElement(Col, {
        span: SPAN
      }, React.createElement(FormItem, _extends({
        label: "\u63A5\u6536\u7EC4"
      }, formItemLayout()), getFieldDecorator('recipientId', {
        rules: [{
          required: true,
          message: '接收组为必填项'
        }],
        initialValue: data.recipient && data.recipient[0] ? {
          id: data.recipient[0].recipientId,
          code: data.recipient[0].recipientCode,
          name: data.recipient[0].recipientNick
        } : undefined
      })(React.createElement(AuthorityDataTree, {
        orgUrl: orgUrl,
        disabled: disabled,
        orgParams: {}
      })))) : null, showRecipientId ? React.createElement(Col, {
        span: SPAN
      }, React.createElement(FormItem, _extends({
        label: "\u63A5\u6536\u4EBA"
      }, formItemLayout()), getFieldDecorator('recipientId', {
        rules: [{
          required: true,
          message: '接收人为必填项'
        }],
        initialValue: data.recipient && data.recipient[0] ? {
          id: data.recipient[0].recipientId,
          code: data.recipient[0].recipientCode,
          name: data.recipient[0].recipientNick
        } : undefined
      })(React.createElement(SelectTable, {
        rowKey: "id",
        dataSourceUrl: receiverUrl,
        columns: columns,
        disabled: disabled,
        requestMethod: receiverUrlRequestMethod
      })))) : null, React.createElement(Col, {
        span: 24
      }, React.createElement(FormItem, {
        label: "\u6D88\u606F\u5185\u5BB9",
        labelCol: {
          span: 3
        }
      }, getFieldDecorator('messageContent', {
        rules: [{
          required: true,
          message: '消息内容为必填项'
        }],
        initialValue: data.messageContent
      })(React.createElement(BraftEditors, {
        readOnly: disabled,
        controls: []
      }))))))));
    }
  }]);

  return StationNewsListManageEdit;
}(PureComponent);

StationNewsListManageEdit.defaultProps = {
  getNewsDetailUrlRequestMethod: 'get',
  fileTypes: ['jpg', 'png', 'jpeg', 'pdf'],
  fileIdAttr: 'fileId',
  fileNameAttr: 'name'
};
var create = Form.create; // @ts-ignore

export default create()(StationNewsListManageEdit);
//# sourceMappingURL=createAndEdit.js.map
