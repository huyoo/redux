function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { PureComponent } from 'react';
import Checkbox from 'antd/es/checkbox';
import Button from 'antd/es/button';
import List from 'antd/es/list';
import message from 'antd/es/message';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import moment from 'moment';
import ExtModal from '../ext-modal';
import { getAvatar } from './FileItem';
export var blobToFile = function blobToFile(res, filename) {
  var data = res.data,
      headers = res.headers;
  var name = filename || decodeURI(headers['content-disposition'].split('=')[1]);
  var eLink = document.createElement('a');
  eLink.download = name;
  eLink.style.display = 'none';
  eLink.href = URL.createObjectURL(data);
  document.body.appendChild(eLink);
  eLink.click();
  URL.revokeObjectURL(eLink.href); // 释放URL 对象

  document.body.removeChild(eLink);
};

var DownloadModal =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DownloadModal, _PureComponent);

  function DownloadModal() {
    var _this;

    _classCallCheck(this, DownloadModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DownloadModal).apply(this, arguments));
    _this.state = {
      checkAll: false,
      batchVisible: false,
      downloading: false
    };

    _this.checkAll = function (e) {
      if (e.target.checked) {
        var _this$props$fileList = _this.props.fileList,
            fileList = _this$props$fileList === void 0 ? [] : _this$props$fileList;
        var batchDownloadList = fileList.map(function (file) {
          return get(file, 'response[0].id');
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

    _this.batchDownloadClose = function () {
      _this.setState({
        batchVisible: false,
        batchDownloadList: [],
        checkAll: false,
        downloading: false
      }, function () {
        var onClose = _this.props.onClose;

        if (onClose) {
          onClose();
        }
      });
    };

    _this.handlerBatchDownload = function () {
      var batchDownloadList = _this.state.batchDownloadList;
      var _this$props = _this.props,
          downloadFiles = _this$props.downloadFiles,
          fileList = _this$props.fileList;

      if (!batchDownloadList || isEmpty(batchDownloadList)) {
        message.error(get(_this.locale, 'selectFileWarning'));
        return;
      }

      var _this$props$batchDown = _this.props.batchDownloadFileName,
          batchDownloadFileName = _this$props$batchDown === void 0 ? moment().format('YYYYMMDD') : _this$props$batchDown;

      _this.setState({
        downloading: true
      });

      setTimeout(function () {
        if (downloadFiles) {
          var files = batchDownloadList.map(function (fileId) {
            return fileList.find(function (file) {
              return get(file, 'response[0].id') === fileId;
            });
          }); // @ts-ignore

          var request = downloadFiles(files.filter(function (file) {
            return !!file;
          }));

          if (request) {
            request.then(function (res) {
              blobToFile(res, batchDownloadFileName);

              _this.setState({
                downloading: false,
                batchVisible: false
              });
            })["catch"](function () {
              _this.setState({
                downloading: false
              });
            });
          }
        }
      }, 0);
    };

    _this.handleChooseImgCheck = function (fileId) {
      var _this$props$fileList2 = _this.props.fileList,
          fileList = _this$props$fileList2 === void 0 ? [] : _this$props$fileList2;
      var _this$state$batchDown = _this.state.batchDownloadList,
          batchDownloadList = _this$state$batchDown === void 0 ? [] : _this$state$batchDown;

      if (batchDownloadList.indexOf(fileId) > -1) {
        _this.setState({
          batchDownloadList: _toConsumableArray(batchDownloadList.filter(function (id) {
            return id !== fileId;
          })),
          checkAll: false
        });

        return;
      }

      _this.setState({
        batchDownloadList: [].concat(_toConsumableArray(batchDownloadList), [fileId]),
        checkAll: batchDownloadList.length === fileList.length - 1
      });
    };

    return _this;
  }

  _createClass(DownloadModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          locale = _this$props2.locale,
          _this$props2$fileList = _this$props2.fileList,
          fileList = _this$props2$fileList === void 0 ? [] : _this$props2$fileList;
      this.locale = locale;
      var _this$state = this.state,
          checkAll = _this$state.checkAll,
          batchVisible = _this$state.batchVisible,
          downloading = _this$state.downloading,
          _this$state$batchDown2 = _this$state.batchDownloadList,
          batchDownloadList = _this$state$batchDown2 === void 0 ? [] : _this$state$batchDown2;
      return React.createElement(ExtModal, {
        className: "download-modal",
        title: [locale.batchDownload, React.createElement(Checkbox, {
          key: "checkAll",
          checked: checkAll,
          style: {
            marginLeft: '8px'
          },
          value: true,
          onClick: this.checkAll
        }, get(locale, 'checkAll'))],
        destroyOnClose: true,
        visible: batchVisible,
        footer: [React.createElement(Button, {
          key: "back",
          onClick: this.batchDownloadClose
        }, locale.close), React.createElement(Button, {
          key: "batchDownload",
          type: "primary",
          icon: "download",
          loading: downloading,
          onClick: this.handlerBatchDownload
        }, locale.batchDownload)],
        afterClose: this.batchDownloadClose,
        onCancel: this.batchDownloadClose
      }, React.createElement(List, {
        itemLayout: "horizontal",
        dataSource: fileList,
        renderItem: function renderItem(item) {
          return React.createElement("div", {
            onClick: function onClick() {
              return _this2.handleChooseImgCheck(get(item, 'response[0].id'));
            }
          }, React.createElement(List.Item, null, React.createElement(List.Item.Meta, {
            avatar: getAvatar(item, 32),
            title: item.name
          }), React.createElement(Checkbox, {
            checked: batchDownloadList.includes(get(item, 'response[0].id'))
          })));
        }
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var visible = nextProps.visible;
      var batchVisible = prevState.batchVisible;

      if ('visible' in nextProps && visible !== batchVisible) {
        return {
          batchVisible: visible
        };
      }

      return null;
    }
  }]);

  return DownloadModal;
}(PureComponent);

export default DownloadModal;
//# sourceMappingURL=DownloadModal.js.map
