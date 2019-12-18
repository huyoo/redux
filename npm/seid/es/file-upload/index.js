function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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
/* eslint-disable */


import Button from 'antd/es/button';
import Icon from 'antd/es/icon';
import message from 'antd/es/message';
import Modal from 'antd/es/modal';
import Upload from 'antd/es/upload';
import List from 'antd/es/list';
import Avatar from 'antd/es/avatar';
import Checkbox from 'antd/es/checkbox';
import cls from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import moment from 'moment';
import { isEmpty } from 'lodash'; // import RcViewer from '../invoice-upload/RcViewer';

import LocaleReceiver from '../seid-locale-receiver';
import { isPhoto, setStringFormat } from '../_util/utils';
/**
 * @return {boolean}
 */

export function T() {
  return true;
}

var FileUpload =
/*#__PURE__*/
function (_Component) {
  _inherits(FileUpload, _Component);

  function FileUpload(props) {
    var _this;

    _classCallCheck(this, FileUpload);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FileUpload).call(this, props));

    _this.initDefaultPhoto = function () {
      var fileList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var result = [];
      var _this$props = _this.props,
          domain = _this$props.domain,
          contextUrl = _this$props.contextUrl;

      for (var i = 0; i < fileList.length; i += 1) {
        var file = fileList[i];

        if (isPhoto(file.fileName || file.name)) {
          result.push({
            original: "".concat(domain, "/").concat(contextUrl, "/download?docId=").concat(file.id),
            id: file.id,
            name: file.fileName || file.name
          });
        }
      }

      return result;
    };

    _this.handlerViewType = function (vt, e) {
      e.stopPropagation();

      _this.setState({
        viewType: vt
      });
    };

    _this.handlerPreviewCancel = function () {
      _this.setState({
        previewVisible: false
      });
    };

    _this.handlerPreview = function (file) {
      var downloadUrl = _this.props.downloadUrl;

      if (file.id || file.response && file.response instanceof Array && file.response.length === 1) {
        // const { photosFile } = this.state;
        // const preUrl = `${previewUrl}/${file.id || file.response[0].id}?rand=${Date.now()}`;
        var downUrl = "".concat(downloadUrl).concat(file.id || file.response[0].id);
        var fileName = file.id ? file.name : file.response[0].fileName; // const startIndex = photosFile.findIndex((photo: any) => photo.id === file.response[0].id);

        _this.setState({
          downloadFileName: fileName,
          // previewUrl: preUrl,
          downloadUrl: downUrl,
          previewVisible: true
        });
      }
    };

    _this.handlerDownload = function () {
      _this.setState({
        downloading: true
      });

      var _this$state = _this.state,
          downloadUrl = _this$state.downloadUrl,
          downloadFileName = _this$state.downloadFileName;
      setTimeout(function () {
        var a = document.createElement('a');
        a.style.display = 'none';
        document.body.appendChild(a);
        a.href = downloadUrl;
        a.download = downloadFileName;
        a.click();

        _this.setState({
          downloading: false
        }, function () {
          if (a.parentNode) a.parentNode.removeChild(a);
        });
      }, 3000);
    };

    _this.chooseFileDownload = function () {
      _this.setState({
        batchVisible: true,
        batchDownloadList: []
      });
    };

    _this.batchDownloadClose = function () {
      _this.setState({
        batchVisible: false,
        batchDownloadList: [],
        checkAll: false,
        downloading: false
      });
    };

    _this.handleChooseImgCheck = function (id) {
      var _this$state$batchDown = _this.state.batchDownloadList,
          batchDownloadList = _this$state$batchDown === void 0 ? [] : _this$state$batchDown;
      var fileList = _this.props.fileList;

      if (batchDownloadList.includes(id)) {
        batchDownloadList = batchDownloadList.filter(function (item) {
          return item !== id;
        });
      } else {
        batchDownloadList.push(id);
      }

      if (fileList.length === batchDownloadList.length) {
        _this.setState({
          batchDownloadList: batchDownloadList,
          checkAll: true
        });
      } else {
        _this.setState({
          batchDownloadList: batchDownloadList,
          checkAll: false
        });
      }
    };

    _this.checkAll = function (e) {
      if (e.target.checked) {
        var _this$props$fileList = _this.props.fileList,
            fileList = _this$props$fileList === void 0 ? [] : _this$props$fileList;
        var batchDownloadList = fileList.map(function (file) {
          return file.response[0].id;
        });

        _this.setState({
          batchDownloadList: batchDownloadList,
          checkAll: true
        });
      } else {
        _this.setState({
          batchDownloadList: [],
          checkAll: false
        });
      }
    };

    _this.handlerBatchDownload = function () {
      var batchDownloadList = _this.state.batchDownloadList;

      if (isEmpty(batchDownloadList)) {
        message.error('请选择要下载的文件');
        return;
      }

      var _this$props2 = _this.props,
          batchDownloadFileName = _this$props2.batchDownloadFileName,
          batchDownloadUrl = _this$props2.batchDownloadUrl;

      _this.setState({
        downloading: true
      });

      setTimeout(function () {
        var a = document.createElement('a');
        a.style.display = 'none';
        document.body.appendChild(a);
        a.href = "".concat(batchDownloadUrl, "?fileName=").concat(batchDownloadFileName, "&docIds=").concat(batchDownloadList.toString());
        a.download = batchDownloadFileName;
        a.click();

        _this.setState({
          downloading: false,
          batchVisible: false
        }, function () {
          if (a.parentNode) a.parentNode.removeChild(a);
        });
      }, 3000);
    };

    _this.handleChange = function (fileObj) {
      var file = fileObj.file;
      var fileList = fileObj.fileList;
      var _this$props3 = _this.props,
          domain = _this$props3.domain,
          onChange = _this$props3.onChange;

      var _assertThisInitialize = _assertThisInitialized(_this),
          locale = _assertThisInitialize.locale;

      var photosFile = [];
      fileList.map(function (fileItem) {
        if (fileItem.status === 'done') {
          if (isPhoto(fileItem.name)) {
            photosFile.push({
              original: "".concat(domain, "/edm-service/download?docId=").concat(fileItem.response[0].id),
              id: fileItem.response[0].id,
              name: fileItem.name
            });
          }
        }

        return null;
      });

      if (file.status === 'error') {
        message.error(setStringFormat(locale.errMsg, [file.name, file.response.message]));
        fileList = fileList.filter(function (item) {
          return item.status !== 'error';
        });
      }

      if (onChange) {
        onChange(fileObj);
      }

      _this.setState({
        photosFile: photosFile
      });
    };

    _this.renderCmp = function (contextLocale) {
      var _this$state2 = _this.state,
          viewType = _this$state2.viewType,
          previewVisible = _this$state2.previewVisible,
          downloading = _this$state2.downloading,
          batchVisible = _this$state2.batchVisible,
          batchDownloadList = _this$state2.batchDownloadList,
          checkAll = _this$state2.checkAll;

      var _a = _this.props,
          customLocale = _a.locale,
          rest = __rest(_a, ["locale"]);

      _this.locale = _extends(_extends({}, contextLocale), customLocale);

      var uploadProps = _extends({
        action: 'http://dsei.changhong.com:80/edm-service/upload',
        listType: 'picture',
        defaultFileList: [],
        className: viewType,
        onChange: _this.handleChange,
        onRemove: function onRemove() {},
        onPreview: function onPreview(file) {
          _this.handlerPreview(file);
        }
      }, rest);

      return React.createElement(React.Fragment, null, React.createElement("div", {
        className: cls('sei-upload')
      }, React.createElement("div", {
        className: cls('tool-box')
      }, React.createElement("span", {
        className: cls('tool-btn', {
          select: viewType === 'list'
        }),
        onClick: function onClick(e) {
          return _this.handlerViewType('list', e);
        }
      }, React.createElement(Icon, {
        type: "bars",
        style: {
          fontSize: '18px'
        }
      })), React.createElement("span", {
        className: cls('tool-btn', {
          select: viewType === 'card'
        }),
        onClick: function onClick(e) {
          return _this.handlerViewType('card', e);
        }
      }, React.createElement(Icon, {
        type: "appstore",
        style: {
          fontSize: '18px'
        }
      }))), React.createElement("div", {
        className: cls('download-box')
      }, !uploadProps.disabled ? React.createElement(Button, {
        onClick: _this.chooseFileDownload,
        icon: "download"
      }, _this.locale.batchDownload) : null), React.createElement("div", {
        className: cls('upload-box', {
          disabled: uploadProps.disabled
        })
      }, React.createElement(Upload, _extends({}, uploadProps, {
        ref: function ref(inst) {
          _this.upload = inst;
        }
      }), React.createElement("div", {
        className: cls('upload-tool-bar')
      }, !uploadProps.disabled ? React.createElement(Button, {
        type: "primary",
        icon: "upload",
        style: {
          marginRight: 5
        }
      }, _this.locale.upload) : null)), React.createElement(Modal, {
        title: _this.locale.filePreview,
        wrapClassName: cls('preview-box'),
        mask: false,
        destroyOnClose: true,
        visible: previewVisible,
        footer: [React.createElement(Button, {
          key: "back",
          onClick: _this.handlerPreviewCancel
        }, _this.locale.close), React.createElement(Button, {
          key: "submit",
          type: "primary",
          icon: "download",
          loading: downloading,
          onClick: _this.handlerDownload
        }, _this.locale.download)],
        onCancel: _this.handlerPreviewCancel
      }), React.createElement(Modal, {
        title: [_this.locale.batchDownload, React.createElement(Checkbox, {
          key: "checkAll",
          checked: checkAll,
          style: {
            marginLeft: '8px'
          },
          value: true,
          onClick: _this.checkAll
        }, "\u5168\u9009")],
        destroyOnClose: true,
        visible: batchVisible,
        footer: [React.createElement(Button, {
          key: "back",
          onClick: _this.batchDownloadClose
        }, _this.locale.close), React.createElement(Button, {
          key: "batchDownload",
          type: "primary",
          icon: "download",
          loading: downloading,
          onClick: _this.handlerBatchDownload
        }, _this.locale.batchDownload)],
        afterClose: _this.batchDownloadClose,
        onCancel: _this.batchDownloadClose
      }, React.createElement(List, {
        itemLayout: "horizontal",
        dataSource: rest.fileList,
        renderItem: function renderItem(item) {
          return React.createElement("div", {
            onClick: function onClick() {
              return _this.handleChooseImgCheck(item.response[0].id);
            }
          }, React.createElement(List.Item, null, React.createElement(List.Item.Meta, {
            avatar: React.createElement(Avatar, {
              src: item.thumbUrl
            }),
            title: item.name
          }), React.createElement(Checkbox, {
            checked: batchDownloadList.includes(item.response[0].id)
          })));
        }
      })))));
    };

    _this.state = {
      viewType: props.viewType,
      downloadUrl: '',
      downloadFileName: '',
      downloading: false,
      previewVisible: false,
      batchVisible: false,
      batchDownloadList: [],
      // previewUrl: '',
      photosFile: _this.initDefaultPhoto(props.fileList)
    };
    return _this;
  }

  _createClass(FileUpload, [{
    key: "render",
    value: function render() {
      return React.createElement(LocaleReceiver, {
        componentName: "FileUpload",
        defaultLocale: {}
      }, this.renderCmp);
    }
  }]);

  return FileUpload;
}(Component);

export { FileUpload as default };
FileUpload.displayName = 'FileUpload';
FileUpload.propTypes = {
  /** 附件列表显示方式 */
  viewType: PropTypes.oneOf(['list', 'card']),

  /** 设置上传的请求头部，IE10 以上有效 */
  headers: PropTypes.object,

  /** 上传接口地址 */
  action: PropTypes.string.isRequired,

  /** 预览接口地址 */
  previewUrl: PropTypes.string.isRequired,

  /** 下载接口地址 */
  downloadUrl: PropTypes.string.isRequired,

  /** 批量下载接口地址 */
  batchDownloadUrl: PropTypes.string.isRequired,

  /** 是否只读 */
  disabled: PropTypes.bool,

  /** 多文件上传 */
  multiple: PropTypes.bool,

  /** 支持上传文件夹 */
  directory: PropTypes.bool,

  /** 默认已经上传的文件列表 */
  defaultFileList: PropTypes.array,

  /** 发到后台的文件参数名 */
  name: PropTypes.string,

  /** 上传文件改变时的状态 上传中、完成、失败都会调用这个函数。 参照antd */
  onChange: PropTypes.func,

  /** 点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除。参照antd */
  onRemove: PropTypes.func,

  /** 上传相关接口域名 */
  domain: PropTypes.string,

  /** 上下文地址 */
  contextUrl: PropTypes.string,

  /** 批量下载文件名 */
  batchDownloadFileName: PropTypes.string
};
FileUpload.defaultProps = {
  viewType: 'list',
  headers: null,
  disabled: false,
  multiple: false,
  directory: false,
  defaultFileList: [],
  name: 'file',
  onChange: null,
  onRemove: T,
  domain: '',
  contextUrl: 'edm-service',
  batchDownloadFileName: "".concat(moment().format('YYYYMMDD'), "\u6279\u91CF\u4E0B\u8F7D\u6587\u4EF6")
};
//# sourceMappingURL=index.js.map
