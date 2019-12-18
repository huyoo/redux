function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { Component } from 'react';
import Collapse from 'antd/es/collapse';
import CollapsePanel from 'antd/es/collapse/CollapsePanel';
import List from 'antd/es/list';
import FileItem from './FileItem';

var FileListComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(FileListComponent, _Component);

  _createClass(FileListComponent, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      var typeList = nextProps.typeList,
          fileList = nextProps.fileList,
          getFileType = nextProps.getFileType,
          showByFileType = nextProps.showByFileType;
      if (!showByFileType) return null;
      var noCategoryList = [];

      if (typeList) {
        var list = _toConsumableArray(typeList);

        fileList.forEach(function (file) {
          var fileType = getFileType(file);
          var typeItem = list.find(function (t) {
            return t.code === fileType.code;
          });

          if (typeItem) {
            if (!typeItem.fileList) {
              typeItem.fileList = [];
            }

            typeItem.fileList.push(file);
          } else {
            noCategoryList.push(file);
          }
        });
        return {
          categoryList: list,
          noCategoryList: noCategoryList
        };
      } // 计算最新的typeList


      var typeObj = {};
      fileList.forEach(function (file) {
        var typeItem = getFileType(file);

        if (!typeItem || !typeItem.code) {
          noCategoryList.push(file);
          return;
        }

        if (typeObj[typeItem.code]) {
          typeObj[typeItem.code].fileList.push(file);
        } else {
          typeObj[typeItem.code] = _extends(_extends({}, typeItem), {
            fileList: [file]
          });
        }
      });
      return {
        categoryList: Object.values(typeObj),
        noCategoryList: noCategoryList
      };
    }
  }]);

  function FileListComponent(props) {
    var _this;

    _classCallCheck(this, FileListComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FileListComponent).call(this, props));
    _this.state = {
      categoryList: [],
      noCategoryList: []
    };
    return _this;
  }

  _createClass(FileListComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          getItemDescription = _this$props.getItemDescription,
          getUploadTime = _this$props.getUploadTime,
          getUploadUser = _this$props.getUploadUser,
          _this$props$mode = _this$props.mode,
          mode = _this$props$mode === void 0 ? 'normal' : _this$props$mode,
          deleteFile = _this$props.deleteFile,
          downloadFile = _this$props.downloadFile,
          onPreview = _this$props.onPreview,
          onShare = _this$props.onShare,
          showByFileType = _this$props.showByFileType,
          fileList = _this$props.fileList;
      var _this$state = this.state,
          categoryList = _this$state.categoryList,
          noCategoryList = _this$state.noCategoryList;

      if (showByFileType) {
        return React.createElement("div", {
          className: "seid-upload-file-list"
        }, React.createElement(Collapse, {
          bordered: false
        }, categoryList.map(function (typeItem) {
          return React.createElement(CollapsePanel, {
            key: typeItem.code,
            header: typeItem.name
          }, React.createElement(List, {
            dataSource: typeItem.fileList,
            renderItem: function renderItem(item, index) {
              return React.createElement(FileItem, _extends({
                downloadFile: downloadFile,
                deleteFile: deleteFile,
                previewFile: onPreview,
                shareFile: onShare,
                mode: mode,
                getItemDescription: getItemDescription,
                getUploadTime: getUploadTime,
                getUploadUser: getUploadUser
              }, item, {
                index: index
              }));
            }
          }));
        })), noCategoryList && noCategoryList.length ? React.createElement(List, {
          dataSource: noCategoryList,
          renderItem: function renderItem(item, index) {
            return React.createElement(FileItem, _extends({
              downloadFile: downloadFile,
              deleteFile: deleteFile,
              previewFile: onPreview,
              shareFile: onShare,
              mode: mode,
              getItemDescription: getItemDescription,
              getUploadTime: getUploadTime,
              getUploadUser: getUploadUser
            }, item, {
              index: index
            }));
          }
        }) : null);
      }

      return React.createElement("div", {
        className: "seid-upload-file-list"
      }, React.createElement(List, {
        dataSource: fileList,
        renderItem: function renderItem(item, index) {
          return React.createElement(FileItem, _extends({
            downloadFile: downloadFile,
            deleteFile: deleteFile,
            previewFile: onPreview,
            shareFile: onShare,
            mode: mode,
            getItemDescription: getItemDescription,
            getUploadTime: getUploadTime,
            getUploadUser: getUploadUser
          }, item, {
            index: index
          }));
        }
      }));
    }
  }]);

  return FileListComponent;
}(Component);

export default FileListComponent;
//# sourceMappingURL=FileListComponent.js.map
