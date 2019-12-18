import _regeneratorRuntime from "@babel/runtime/regenerator";

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

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

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

import React from 'react';
import Button from 'antd/es/button';
import Upload from 'antd/es/upload';
import get from 'lodash/get';
import message from 'antd/es/message';
import cls from 'classnames';
import Icon from 'antd/es/icon';
import Tooltip from 'antd/es/tooltip';
import { request } from '../utils';
import FileListComponent from './FileListComponent';
import DownloadModal, { blobToFile } from './DownloadModal';
import ToolBar from '../tool-bar';
import defaultLocale from './locale';
import { isPhoto } from '../_util/utils';
import SeidLocaleReceiver from '../seid-locale-receiver'; // 文件上传接口回调

var thenProcess = function thenProcess(option, res) {
  var file = option.file,
      onSuccess = option.onSuccess,
      onError = option.onError;

  if (get(res, 'success')) {
    onSuccess(res.data, file);
  } else {
    message.error(get(res, 'message'));
    onError(get(res, 'message'));
  }
};

var Attachment =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Attachment, _React$Component);

  function Attachment() {
    var _this;

    _classCallCheck(this, Attachment);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Attachment).apply(this, arguments));
    _this.promiseList = [];
    _this.processedFileNumber = 0;
    _this.processArgs = [];
    _this.state = {
      downloadVisible: false,
      viewType: 'normal'
    };

    _this.beforeUpload = function (file, fileList) {
      var beforeUpload = _this.props.beforeUpload;
      _this.uploadFileListLength = fileList.length;

      if (beforeUpload) {
        return beforeUpload(file, fileList);
      }

      return true;
    };

    _this.handleUpload = function (option) {
      _this.processArgs.push(option);

      if (_this.processArgs.length === _this.uploadFileListLength) {
        _this.startUpload();
      }
    };

    _this.startUpload = function () {
      return __awaiter(_assertThisInitialized(_this), void 0, void 0,
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var _this$props, maxUploadNum, fileType, entityId, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, option, file, fileSize, _file$name, name, data, responses, _responses;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, maxUploadNum = _this$props.maxUploadNum, fileType = _this$props.fileType, entityId = _this$props.entityId;

                if (!maxUploadNum) {
                  _context.next = 53;
                  break;
                }

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 5;
                _iterator = this.processArgs[Symbol.iterator]();

              case 7:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 38;
                  break;
                }

                option = _step.value;
                file = option.file;
                fileSize = file.size && file.size > 1024 ? Math.round(file.size / 1024) : 1;
                _file$name = file.name, name = _file$name === void 0 ? '' : _file$name;
                data = new FormData();
                data.append('request', file);
                data.append('fileName', name);
                if (fileType) data.append('type', fileType);
                if (entityId) data.append('entityId', "".concat(entityId));
                data.append('fileSize', "".concat(fileSize));
                this.promiseList.push(this.processRequest(data, option));
                this.processedFileNumber += 1;

                if (!(this.processedFileNumber === this.uploadFileListLength)) {
                  _context.next = 29;
                  break;
                }

                _context.next = 23;
                return Promise.all(this.promiseList);

              case 23:
                responses = _context.sent;
                responses.forEach(function (res) {
                  var response = res.response,
                      rcOption = res.option;
                  thenProcess(rcOption, response);
                });
                this.promiseList = [];
                this.processedFileNumber = 0;
                this.processArgs = [];
                return _context.abrupt("return");

              case 29:
                if (!(this.promiseList.length === maxUploadNum)) {
                  _context.next = 35;
                  break;
                }

                _context.next = 32;
                return Promise.all(this.promiseList);

              case 32:
                _responses = _context.sent;

                _responses.forEach(function (res) {
                  var response = res.response,
                      rcOption = res.option;
                  thenProcess(rcOption, response);
                });

                this.promiseList = [];

              case 35:
                _iteratorNormalCompletion = true;
                _context.next = 7;
                break;

              case 38:
                _context.next = 44;
                break;

              case 40:
                _context.prev = 40;
                _context.t0 = _context["catch"](5);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 44:
                _context.prev = 44;
                _context.prev = 45;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 47:
                _context.prev = 47;

                if (!_didIteratorError) {
                  _context.next = 50;
                  break;
                }

                throw _iteratorError;

              case 50:
                return _context.finish(47);

              case 51:
                return _context.finish(44);

              case 52:
                return _context.abrupt("return");

              case 53:
                this.processArgs.forEach(function (option) {
                  var file = option.file,
                      onError = option.onError;
                  var fileSize = file.size && file.size > 1024 ? Math.round(file.size / 1024) : 1;
                  var _file$name2 = file.name,
                      name = _file$name2 === void 0 ? '' : _file$name2;
                  var data = new FormData();
                  data.append('request', file);
                  data.append('fileName', name);
                  if (fileType) data.append('type', fileType);
                  if (entityId) data.append('entityId', "".concat(entityId));
                  data.append('fileSize', "".concat(fileSize));

                  _this2.processRequest(data, option).then(function (res) {
                    var response = res.response,
                        rcOption = res.option;
                    thenProcess(rcOption, response);
                  })["catch"](function (error) {
                    onError(error);
                  });
                });
                this.processArgs = [];

              case 55:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 40, 44, 52], [45,, 47, 51]]);
      }));
    };

    _this.processRequest = function (data, option) {
      var uploadUrl = _this.props.uploadUrl;
      var onProgress = option.onProgress;
      return new Promise(function (resolve) {
        request({
          url: uploadUrl,
          method: 'post',
          data: data,
          onUploadProgress: function onUploadProgress(_ref) {
            var loaded = _ref.loaded,
                total = _ref.total;
            var percent = Number(Math.round(loaded / total * 100).toFixed(2));
            onProgress({
              percent: percent
            }, option.file);
          },
          headers: {
            neverCancel: true
          }
        }).then(function (res) {
          resolve({
            option: option,
            response: res
          });
        })["catch"](function (error) {
          return resolve({
            response: error,
            option: option
          });
        });
      });
    };

    _this.onChange = function (info) {
      var fileList = info.fileList,
          file = info.file;
      var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          getThumbUrl = _this$props2.getThumbUrl; // 获取缩略图地址

      if (file.status === 'done' && getThumbUrl && isPhoto(file.name)) {
        var url = getThumbUrl(file);
        fileList.forEach(function (item, index) {
          if (item.uid === file.uid) {
            fileList.splice(index, 1, _extends(_extends(_extends({}, item), file), {
              thumbUrl: url
            }));
          }
        });
      } // 过滤掉beforeUpload返回false时的文件list


      var filterList = fileList.filter(function (list) {
        return list.status;
      });

      _this.setState({
        fileList: filterList
      }, function () {
        if (onChange) {
          onChange(info);
        }
      });
    };

    _this.handlerViewType = function (viewType) {
      _this.setState({
        viewType: viewType
      });
    };

    _this.onChangeDownloadVisible = function () {
      var downloadVisible = _this.state.downloadVisible;

      _this.setState({
        downloadVisible: !downloadVisible
      });
    };

    _this.deleteFile = function (file) {
      if (_this.upload) {
        _this.upload.handleRemove(file);
      }
    };

    _this.downloadFile = function (file) {
      var downloadFile = _this.props.downloadFile;

      if (downloadFile) {
        if (Array.isArray(file)) {
          var _config = downloadFile(file);

          return request(_config);
        }

        var config = downloadFile(file);
        request(config).then(function (res) {
          blobToFile(res);
        })["catch"](function (error) {
          console.error(error);
        });
      }
    };

    _this.renderComponent = function (locale) {
      var _a = _this.props,
          downloadable = _a.downloadable,
          className = _a.className,
          style = _a.style,
          showUploadList = _a.showUploadList,
          onPreview = _a.onPreview,
          onShare = _a.onShare,
          showByFileType = _a.showByFileType,
          typeList = _a.typeList,
          getFileType = _a.getFileType,
          rest = __rest(_a, ["downloadable", "className", "style", "showUploadList", "onPreview", "onShare", "showByFileType", "typeList", "getFileType"]);

      var _this$state = _this.state,
          _this$state$fileList = _this$state.fileList,
          fileList = _this$state$fileList === void 0 ? [] : _this$state$fileList,
          viewType = _this$state.viewType,
          downloadVisible = _this$state.downloadVisible;

      var uploadProps = _extends({}, rest);

      return React.createElement("div", {
        className: cls(className, 'seid-upload'),
        style: style
      }, React.createElement(ToolBar, {
        rowClassName: "tool-bar",
        left: [React.createElement(Upload, _extends({
          ref: function ref(_ref2) {
            _this.upload = _ref2;
          },
          key: "upload"
        }, uploadProps, {
          beforeUpload: _this.beforeUpload,
          customRequest: function customRequest(options) {
            return __awaiter(_assertThisInitialized(_this), void 0, void 0,
            /*#__PURE__*/
            _regeneratorRuntime.mark(function _callee2() {
              return _regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      return _context2.abrupt("return", this.handleUpload(options));

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          },
          onChange: _this.onChange,
          fileList: fileList,
          showUploadList: false
        }), React.createElement(Button, {
          type: "primary",
          icon: "upload"
        }, get(locale, 'upload'))), downloadable ? React.createElement(Button, {
          className: "download-btn",
          onClick: _this.onChangeDownloadVisible,
          key: "download",
          icon: "download"
        }, get(locale, 'batchDownload')) : null],
        right: React.createElement("div", {
          className: "tool-box"
        }, React.createElement("span", {
          className: cls('tool-btn', {
            select: viewType === 'normal'
          }),
          onClick: function onClick() {
            return _this.handlerViewType('normal');
          }
        }, React.createElement(Tooltip, {
          title: get(locale, 'normal')
        }, React.createElement(Icon, {
          type: "bars",
          style: {
            fontSize: '18px'
          }
        }))), React.createElement("span", {
          className: cls('tool-btn', {
            select: viewType === 'simple'
          }),
          onClick: function onClick() {
            return _this.handlerViewType('simple');
          }
        }, React.createElement(Tooltip, {
          title: get(locale, 'simple')
        }, React.createElement(Icon, {
          type: "appstore",
          style: {
            fontSize: '18px'
          }
        }))))
      }), showUploadList ? React.createElement(FileListComponent, {
        showByFileType: showByFileType,
        typeList: typeList,
        getFileType: getFileType,
        downloadFile: _this.downloadFile,
        deleteFile: _this.deleteFile,
        onPreview: onPreview,
        onShare: onShare,
        mode: viewType,
        fileList: fileList
      }) : null, downloadVisible ? React.createElement(DownloadModal, {
        visible: downloadVisible,
        onClose: _this.onChangeDownloadVisible,
        locale: locale,
        fileList: fileList,
        downloadFiles: _this.downloadFile
      }) : null);
    };

    return _this;
  }

  _createClass(Attachment, [{
    key: "render",
    value: function render() {
      return React.createElement(SeidLocaleReceiver, {
        defaultLocale: defaultLocale,
        componentName: "Attachment"
      }, this.renderComponent);
    }
  }]);

  return Attachment;
}(React.Component);

Attachment.defaultProps = {
  showUploadList: true,
  showByFileType: false,
  getFileType: function getFileType(file) {
    return {
      code: get(file, 'response[0].documentTypeEnum'),
      name: get(file, 'response[0].documentTypeEnumRemark')
    };
  }
};

Attachment.getDerivedStateFromProps = function (nextProps, prevState) {
  var fileList = prevState.fileList;

  if ('fileList' in nextProps && nextProps.fileList && (!fileList || fileList.length !== nextProps.fileList.length)) {
    return {
      fileList: nextProps.fileList
    };
  }

  if ('defaultFileList' in nextProps && !fileList) {
    return {
      fileList: nextProps.defaultFileList
    };
  }

  return null;
};

export default Attachment;
//# sourceMappingURL=index.js.map
