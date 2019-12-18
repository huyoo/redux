function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { PureComponent } from 'react';
import Item from 'antd/es/list/Item';
import Avatar from 'antd/es/avatar';
import omit from 'lodash/omit';
import isString from 'lodash/isString';
import get from 'lodash/get';
import moment from 'moment';
import Progress from 'antd/es/progress';
import Tooltip from 'antd/es/tooltip';
import ExtIcon from '../ext-icon';
export function getAvatar(file, size) {
  var name = file.name,
      fileName = file.fileName,
      thumbUrl = file.thumbUrl;
  var nameStr = name || fileName;

  if (thumbUrl) {
    return React.createElement(Avatar, {
      shape: "square",
      size: size,
      src: thumbUrl
    });
  }

  var fileType = nameStr && nameStr.split('.').pop();

  switch (fileType) {
    case 'xls':
    case 'xlsx':
      return React.createElement(Avatar, {
        shape: "square",
        size: size
      }, React.createElement(ExtIcon, {
        style: {
          fontSize: size
        },
        type: "excel"
      }));

    case 'doc':
    case 'docx':
      return React.createElement(Avatar, {
        shape: "square",
        size: size
      }, React.createElement(ExtIcon, {
        style: {
          fontSize: size
        },
        type: "word"
      }));

    case 'ppt':
    case 'pptx':
      return React.createElement(Avatar, {
        shape: "square",
        size: size
      }, React.createElement(ExtIcon, {
        style: {
          fontSize: size
        },
        type: "ppt"
      }));

    case 'pdf':
      return React.createElement(Avatar, {
        shape: "square",
        size: size
      }, React.createElement(ExtIcon, {
        style: {
          fontSize: size
        },
        type: "pdf"
      }));

    default:
      return React.createElement(Avatar, {
        shape: "square",
        size: size
      }, React.createElement(ExtIcon, {
        style: {
          fontSize: size
        },
        type: "file"
      }));
  }
}
var optionalProps = ['index', 'getItemDescription'];

var FileItem =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(FileItem, _PureComponent);

  function FileItem() {
    var _this;

    _classCallCheck(this, FileItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FileItem).apply(this, arguments));

    _this.getStatus = function () {
      var status = _this.props.status;

      switch (status) {
        case 'uploading':
          return 'active';

        case 'error':
          return 'exception';

        case 'success':
          return 'success';

        case 'done':
          return 'success';

        case 'removed':
          return 'success';

        default:
          return undefined;
      }
    };

    _this.downloadFile = function () {
      var file = omit(_this.props, optionalProps);
      var downloadFile = _this.props.downloadFile;

      if (downloadFile) {
        downloadFile(file);
      }
    };

    _this.deleteFile = function () {
      var file = omit(_this.props, optionalProps);
      var deleteFile = _this.props.deleteFile;

      if (deleteFile) {
        deleteFile(file);
      }
    };

    _this.previewFile = function () {
      var file = omit(_this.props, optionalProps);
      var previewFile = _this.props.previewFile;

      if (previewFile) {
        previewFile(file);
      }
    };

    _this.shareFile = function () {
      var file = omit(_this.props, optionalProps);
      var shareFile = _this.props.shareFile;

      if (shareFile) {
        shareFile(file);
      }
    };

    _this.getProcess = function () {
      var _this$props = _this.props,
          mode = _this$props.mode,
          shareFile = _this$props.shareFile,
          deleteFile = _this$props.deleteFile,
          downloadFile = _this$props.downloadFile,
          previewFile = _this$props.previewFile;
      return React.createElement("div", {
        style: mode === 'simple' ? {
          "float": 'right',
          position: 'relative',
          top: '4px'
        } : undefined,
        className: "listContentItem"
      }, React.createElement("div", {
        className: "processLine"
      }, downloadFile && React.createElement(Tooltip, {
        title: "\u4E0B\u8F7D"
      }, React.createElement(ExtIcon, {
        onClick: _this.downloadFile,
        antd: true,
        className: "animation",
        type: "cloud-download"
      })), deleteFile && React.createElement(Tooltip, {
        title: "\u5220\u9664"
      }, React.createElement(ExtIcon, {
        onClick: _this.deleteFile,
        antd: true,
        className: "animation",
        type: "close"
      })), previewFile && React.createElement(Tooltip, {
        title: "\u9884\u89C8"
      }, React.createElement(ExtIcon, {
        onClick: _this.previewFile,
        antd: true,
        className: "animation",
        type: "eye"
      })), shareFile && React.createElement(Tooltip, {
        title: "\u5206\u4EAB"
      }, React.createElement(ExtIcon, {
        onClick: _this.shareFile,
        antd: true,
        className: "animation",
        type: "share-alt"
      }))));
    };

    return _this;
  }

  _createClass(FileItem, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          uid = _this$props2.uid,
          name = _this$props2.name,
          index = _this$props2.index,
          getItemDescription = _this$props2.getItemDescription,
          percent = _this$props2.percent,
          getUploadTime = _this$props2.getUploadTime,
          getUploadUser = _this$props2.getUploadUser,
          mode = _this$props2.mode,
          status = _this$props2.status,
          error = _this$props2.error;
      var normal = mode === 'normal';
      var desc = null;
      var uploadUser = null;
      var uploadTime = null;

      if (getItemDescription && normal) {
        if (isString(getItemDescription)) {
          desc = get(this.props, getItemDescription);
        } else {
          // @ts-ignore
          var fileItem = omit(this.props, optionalProps);
          desc = getItemDescription(fileItem, index);
        }
      }

      if (getUploadTime) {
        if (isString(getUploadTime)) {
          uploadTime = get(this.props, getUploadTime);

          if (isString(uploadTime)) {
            uploadTime = moment(uploadTime).format('YYYY-MM-DD HH:mm:ss');
          }
        } else {
          // @ts-ignore
          var _fileItem = omit(this.props, optionalProps);

          uploadTime = getUploadTime(_fileItem, index);

          if (isString(uploadTime)) {
            uploadTime = moment(uploadTime).format('YYYY-MM-DD HH:mm:ss');
          }
        }
      }

      if (getUploadUser) {
        if (isString(getUploadUser)) {
          uploadUser = get(this.props, getUploadUser);
        } else {
          // @ts-ignore
          var _fileItem2 = omit(this.props, optionalProps);

          uploadUser = getUploadUser(_fileItem2, index);
        }
      }

      var avatar = normal ? getAvatar(this.props, 48) : null;

      if (status === 'error') {
        return React.createElement(Item, {
          key: uid
        }, React.createElement(Item.Meta, {
          avatar: avatar,
          title: name,
          description: desc
        }), React.createElement("div", {
          className: "listContent"
        }, this.getProcess(), React.createElement("div", {
          className: "listContentItem"
        }, normal && React.createElement("span", null, "\u4E0A\u4F20\u7528\u6237"), React.createElement("p", null, uploadUser)), React.createElement("div", {
          className: "listContentItem"
        }, normal && React.createElement("span", null, "\u4E0A\u4F20\u65F6\u95F4"), React.createElement("p", null, uploadTime)), React.createElement("div", {
          className: "listContentItem"
        }, React.createElement(Tooltip, {
          title: error
        }, React.createElement(Progress, {
          style: {
            width: '180px'
          },
          status: this.getStatus(),
          percent: percent
        })))));
      }

      return React.createElement(Item, {
        key: uid
      }, React.createElement(Item.Meta, {
        avatar: avatar,
        title: name,
        description: desc
      }), React.createElement("div", {
        className: "listContent"
      }, this.getProcess(), React.createElement("div", {
        className: "listContentItem"
      }, normal && React.createElement("span", null, "\u4E0A\u4F20\u7528\u6237"), React.createElement("p", null, uploadUser)), React.createElement("div", {
        className: "listContentItem"
      }, normal && React.createElement("span", null, "\u4E0A\u4F20\u65F6\u95F4"), React.createElement("p", null, uploadTime)), React.createElement("div", {
        className: "listContentItem"
      }, React.createElement(Progress, {
        style: {
          width: '180px'
        },
        status: this.getStatus(),
        percent: percent
      }))));
    }
  }]);

  return FileItem;
}(PureComponent);

FileItem.defaultProps = {
  getUploadUser: 'response[0].uploadUserName',
  getItemDescription: 'response[0].documentTypeEnumRemark',
  getUploadTime: 'response[0].uploadedTime'
};
export default FileItem;
//# sourceMappingURL=FileItem.js.map
