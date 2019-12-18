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

import React from 'react';
import Button from 'antd/es/button';
import Upload from 'antd/es/upload';
import Progress from 'antd/es/progress';
import message from 'antd/es/message';
import Row from 'antd/es/row';
import get from 'lodash/get';
import ExtIcon from '../ext-icon';
import { request } from '../utils'; // emd支持的预览类型

var previewList = ['pdf', 'png', 'jpg', 'gif', 'jpeg', 'doc', 'docx'];

var UploadFileList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UploadFileList, _React$Component);

  function UploadFileList(props) {
    var _this;

    _classCallCheck(this, UploadFileList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UploadFileList).call(this, props));

    _this.formatFiles = function (fileList) {
      if (fileList && Array.isArray(fileList)) {
        var list = [];
        var _this$props = _this.props,
            urlKey = _this$props.urlKey,
            thumbKey = _this$props.thumbKey,
            downloadDocumentAPI = _this$props.downloadDocumentAPI,
            EDM_URL = _this$props.EDM_URL;
        fileList.forEach(function (file) {
          if (file.fileId) {
            file[urlKey] = "".concat(downloadDocumentAPI, "?id=").concat(file.fileId);
            file[thumbKey] = "".concat(EDM_URL, "/").concat(file.fileId);
          }

          list.push(file);
        });
        return list;
      }

      return [];
    };

    _this.showPreview = function (visible, file) {
      var thumbKey = _this.props.thumbKey;
      return file[thumbKey] && visible ? React.createElement("a", {
        href: file[thumbKey],
        rel: "noopener noreferrer",
        title: "\u9884\u89C8\u6587\u4EF6",
        target: "_blank"
      }, React.createElement(ExtIcon, {
        antd: true,
        type: "eye",
        theme: "outlined"
      })) : null;
    };

    _this.showDownload = function (visible, file) {
      var urlKey = _this.props.urlKey;
      return file[urlKey] && visible ? React.createElement("a", {
        href: file[urlKey],
        rel: "noopener noreferrer",
        title: "\u4E0B\u8F7D\u6587\u4EF6",
        target: "_blank"
      }, React.createElement(ExtIcon, {
        antd: true,
        type: "cloud-download",
        theme: "outlined"
      })) : null;
    }; // 删除文件


    _this.handleRemove = function (file) {
      var _this$props2 = _this.props,
          beforeDel = _this$props2.beforeDel,
          onChange = _this$props2.onChange;
      var _this$state$fileList = _this.state.fileList,
          fileList = _this$state$fileList === void 0 ? [] : _this$state$fileList; // 判断是否能够删除

      if (beforeDel && !beforeDel(file)) return;
      var list = fileList.filter(function (item) {
        return file.uid !== item.uid;
      });
      if (onChange) onChange(list);

      _this.setState({
        fileList: list
      });
    };

    _this.showDel = function (visible, item) {
      var disable = _this.props.disable;
      return !disable && visible ? React.createElement("a", {
        onClick: function onClick() {
          return _this.handleRemove(item);
        },
        title: "\u5220\u9664\u6587\u4EF6"
      }, React.createElement(ExtIcon, {
        type: "close",
        antd: true,
        theme: "outlined"
      })) : null;
    };

    _this.getIcon = function (file) {
      var fileType = file.name ? file.name.split('.').slice(-1)[0] : '';
      var thumbKey = _this.props.thumbKey; // 统一转化为小写

      fileType = fileType ? fileType.toLowerCase() : '';

      if (fileType === 'doc' || fileType === 'docx') {
        return React.createElement(ExtIcon, {
          style: {
            fontSize: '86px'
          },
          type: "word"
        });
      }

      if (fileType === 'xls' || fileType === 'xlsx') {
        return React.createElement(ExtIcon, {
          style: {
            fontSize: '86px'
          },
          type: "excel"
        });
      }

      if (fileType === 'pdf') {
        return React.createElement(ExtIcon, {
          style: {
            fontSize: '86px'
          },
          type: "pdf"
        });
      }

      if (fileType === 'zip' || fileType === 'rar' || fileType === '7z') {
        return React.createElement(ExtIcon, {
          style: {
            fontSize: '86px'
          },
          type: "zip"
        });
      }

      if (fileType === 'png' || fileType === 'jpg' || fileType === 'gif' || fileType === 'jpeg') {
        // 显示预览图片地址
        return React.createElement("img", {
          src: file[thumbKey],
          alt: file.name
        });
      }

      return React.createElement(ExtIcon, {
        style: {
          fontSize: '86px'
        },
        type: "icon-file"
      });
    };

    _this.handlePreview = function (file, status) {
      if (!status) return false;
      var fileType = file.name ? file.name.split('.').slice(-1)[0] : ''; // 统一转化为小写

      fileType = fileType ? fileType.toLowerCase() : '';
      return status && previewList.indexOf(fileType) > -1;
    };

    _this.fileItem = function (file) {
      var _this$props3 = _this.props,
          del = _this$props3.del,
          preview = _this$props3.preview,
          download = _this$props3.download;

      var canPreview = _this.handlePreview(file, preview);

      if (file.error) {
        return React.createElement("div", {
          className: "seid-upload-loading"
        }, React.createElement("div", {
          className: "seid-upload-loading"
        }, "\u4E0A\u4F20\u5931\u8D25"), _this.showDel(del, file));
      }

      if (file.status === 'uploading') {
        return React.createElement("div", {
          className: "seid-upload-loading"
        }, React.createElement("div", {
          className: "seid-upload-loading"
        }, "\u6B63\u5728\u4E0A\u4F20..."), React.createElement(Progress, {
          percent: file.percent
        }));
      }

      return React.createElement("div", {
        className: "seid-upload-item"
      }, React.createElement("div", {
        className: "seid-item-info"
      }, React.createElement("span", null, _this.getIcon(file))), React.createElement("div", {
        title: file.name,
        className: "seid-item-title"
      }, file.name), React.createElement("span", {
        className: "seid-item-action"
      }, _this.showPreview(canPreview, file), _this.showDownload(download, file), _this.showDel(del, file)));
    };

    _this.uploadCard = function (fileList) {
      return fileList.map(function (item) {
        return React.createElement("div", {
          key: item.uid,
          className: "seid-upload-card"
        }, _this.fileItem(item));
      });
    }; // 限制文件类型， 文件大小


    _this.handleBeforeFile = function (file) {
      var _this$props4 = _this.props,
          fileTypes = _this$props4.fileTypes,
          fileSize = _this$props4.fileSize,
          beforeUpload = _this$props4.beforeUpload; // 自定义额外的过滤内容

      if (beforeUpload && !beforeUpload(file)) return false;
      var suffixs = file.name ? file.name.split('.').slice(-1)[0] : ''; // 统一转化为小写

      suffixs = suffixs ? suffixs.toLowerCase() : '';

      if (fileTypes.indexOf(suffixs) < 0) {
        message.error("\u652F\u6301\u4E0A\u4F20\u7684\u7C7B\u578B\u4E3A\uFF1A".concat(fileTypes.toString()));
        return false;
      }

      if (file.size > fileSize * 1024 * 1024) {
        message.error("\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u4E0D\u5141\u8BB8\u8D85\u8FC7".concat(fileSize, "M\uFF01"));
        return false;
      }

      return true;
    };

    _this.handleChange = function (info) {
      var _this$props5 = _this.props,
          urlKey = _this$props5.urlKey,
          thumbKey = _this$props5.thumbKey,
          onChange = _this$props5.onChange,
          downloadDocumentAPI = _this$props5.downloadDocumentAPI,
          EDM_URL = _this$props5.EDM_URL;
      var fileList = info.fileList; // 2. Read from response and show file link

      fileList = fileList.map(function (file) {
        if (file.response) {
          var response = file.response;
          var archiveId = get(response, '[0].id'); // Component will show file.url as link

          file[urlKey] = "".concat(downloadDocumentAPI, "?id=").concat(archiveId);
          file[thumbKey] = "".concat(EDM_URL, "/").concat(archiveId);
          file.fileId = archiveId;
        }

        return file;
      }); // 3. Filter successfully uploaded files according to response from server

      fileList = fileList.filter(function (f) {
        return f.status && true;
      });
      if (onChange) onChange(fileList);

      _this.setState({
        fileList: fileList
      });
    };

    _this.handleUpload = function (option) {
      var file = option.file,
          onSuccess = option.onSuccess,
          onProgress = option.onProgress,
          onError = option.onError;
      var fileSize = file.size && file.size > 1024 ? Math.round(file.size / 1024) : 1;
      var _this$props6 = _this.props,
          fileType = _this$props6.fileType,
          entityId = _this$props6.entityId,
          _this$props6$url = _this$props6.url,
          url = _this$props6$url === void 0 ? null : _this$props6$url,
          uploadDocumentsAPI = _this$props6.uploadDocumentsAPI;
      var _file$name = file.name,
          name = _file$name === void 0 ? '' : _file$name;
      var data = new FormData();
      data.append('request', file);
      data.append('fileName', name);
      data.append('type', fileType);
      data.append('entityId', "".concat(entityId));
      data.append('fileSize', "".concat(fileSize));
      request({
        method: 'post',
        url: url || uploadDocumentsAPI,
        data: data,
        onUploadProgress: function onUploadProgress(_ref) {
          var loaded = _ref.loaded,
              total = _ref.total;
          var percent = Number(Math.round(loaded / total * 100).toFixed(2));
          onProgress({
            percent: percent,
            status: 'uploading'
          }, option.file);
        }
      }).then(function (res) {
        if (get(res, 'success')) {
          onSuccess(res.data, file);
        } else {
          message.error(get(res, 'data.message'));
          onError(get(res, 'data.message'), null);
        }
      })["catch"](function (e) {
        onError(e, null);
      });
    };

    _this.state = {
      fileList: _this.formatFiles(props.fileList)
    };
    return _this;
  } // eslint-disabled-lint no-deprecated


  _createClass(UploadFileList, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        fileList: this.formatFiles(nextProps.fileList)
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // 销毁后清空fileList
      this.setState({
        fileList: []
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props7 = this.props,
          fileNum = _this$props7.fileNum,
          disable = _this$props7.disable,
          btnText = _this$props7.btnText,
          uploadDocumentsAPI = _this$props7.uploadDocumentsAPI;
      var props = {
        name: 'file',
        action: uploadDocumentsAPI,
        showUploadList: false,
        onChange: this.handleChange,
        beforeUpload: this.handleBeforeFile,
        customRequest: this.handleUpload
      };
      var fileList = this.state.fileList;
      var editable = !disable && fileNum && fileNum > fileList.length;
      return React.createElement(React.Fragment, null, React.createElement(Upload, _extends({}, props, {
        fileList: fileList
      }), React.createElement(Button, {
        disabled: !editable
      }, React.createElement(ExtIcon, {
        type: "cloud-upload",
        antd: true
      }), btnText)), React.createElement(Row, null, this.uploadCard(fileList)));
    }
  }]);

  return UploadFileList;
}(React.Component);

UploadFileList.defaultProps = {
  del: true,
  preview: true,
  download: true,
  urlKey: 'url',
  thumbKey: 'thumbUrl',
  fileTypes: [],
  fileNum: 1,
  fileSize: 10,
  fileType: 1,
  disable: false,
  btnText: '上传文件',
  downloadDocumentAPI: '/uploadFile/download',
  EDM_URL: '/edm-service/preview',
  uploadDocumentsAPI: '/uploadFile/uploadDocuments'
};
export default UploadFileList;
//# sourceMappingURL=index.js.map
