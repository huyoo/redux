function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { Component } from 'react';
import Button from 'antd/es/button';
import Upload from 'antd/es/upload';
import message from 'antd/es/message';
import Select from 'antd/es/select';
import xlsx from 'xlsx';
import uniqueId from 'lodash/uniqueId';
import ExtTable from '../ext-table';
import { downloadFileByALink } from '../utils';
import ExtModal from '../ext-modal';
import { getString } from '../_util/utils';
import LocaleReceiver from '../seid-locale-receiver';
import defaultLocale from './locale';

var downloadFile = function downloadFile(download) {
  if (!download) {
    return;
  }

  if (download instanceof Function) {
    download();
    return;
  }

  var strList = download.split('/');
  downloadFileByALink(download, strList[strList.length - 1]);
};

var DataImport =
/*#__PURE__*/
function (_Component) {
  _inherits(DataImport, _Component);

  function DataImport(props) {
    var _this2;

    _classCallCheck(this, DataImport);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(DataImport).call(this, props));
    _this2.locale = {
      locale: 'zh-cn'
    };

    _this2.getColumns = function (locale) {
      var columns = _this2.props.columns;
      var initColumns = [{
        dataIndex: 'status',
        title: locale.status,
        render: function render(text, record) {
          if (record.validate) {
            return React.createElement("div", {
              style: {
                color: 'green'
              }
            }, text);
          }

          return React.createElement("div", {
            style: {
              color: 'red'
            }
          }, text);
        }
      }, {
        dataIndex: 'message',
        title: locale.message
      }];
      return initColumns.concat(columns);
    };

    _this2.handleChangeUploadVisible = function () {
      var uploadVisible = _this2.state.uploadVisible;

      _this2.setState({
        uploadVisible: !uploadVisible,
        fileList: []
      });
    };

    _this2.handleChangeDataVisible = function () {
      var dataShowVisible = _this2.state.dataShowVisible;

      if (dataShowVisible) {
        _this2.setState({
          dataShowVisible: false,
          fileList: [],
          tableData: [],
          validated: false
        });

        return;
      }

      _this2.setState({
        dataShowVisible: !dataShowVisible
      });
    };

    _this2.handleChange = function (fileObj) {
      var file = fileObj.file,
          fileList = fileObj.fileList;
      var remote = _this2.state.remote;
      var files;
      var onChange = _this2.props.onChange;

      if (!_this2.beforeUpload(file)) {
        return;
      }

      if (file.status === 'done') {
        // 上传成功后，隐藏上传按钮，如果是remote, 执行查询，展示数据。
        if (remote) {// empty TODO::上传至远程服务器
        } else {
          // 如果不是remote, 解析excle, 保存数据并展示，展示数据。
          var originFileObj = file.originFileObj;

          _this2.analyzeXlsFile(originFileObj);
        }
      }

      files = fileList.map(function (fileItem) {
        if (fileItem.status === 'done') {
          fileItem.uid = fileItem.response[0].id;
        }

        return fileItem;
      });

      if (file.status === 'error') {
        message.error('');
        files = fileList.filter(function (item) {
          return item.status !== 'error';
        });
      }

      if (onChange) {
        onChange(_extends(_extends({}, fileObj), {
          fileList: files
        }));
      }

      if (!('fileList' in _this2.props)) {
        _this2.setState({
          fileList: files
        });
      }
    };

    _this2.analyzeXlsFile = function (originFileObj) {
      var fileReader = new FileReader();

      var _this = _assertThisInitialized(_this2);

      if (originFileObj) {
        fileReader.readAsBinaryString(originFileObj);

        fileReader.onloadend = function onLoad() {
          var workbook = xlsx.read(this.result, {
            type: 'binary'
          });
          var Sheets = workbook.Sheets,
              SheetNames = workbook.SheetNames;

          if (SheetNames && SheetNames.length) {
            var sheet1 = Sheets[SheetNames[0]];
            var jsonObj = xlsx.utils.sheet_to_json(sheet1); // 删除第一行数据(固定为题头)

            jsonObj.splice(0, 1);
            jsonObj.forEach(function (item) {
              return item.key = uniqueId();
            });

            _this.setState({
              tableData: jsonObj,
              dataShowVisible: true,
              uploadVisible: false
            });
          }
        };
      }
    };

    _this2.downloadTemplate = function (value) {
      var _this2$props$template = _this2.props.templateFileList,
          templateFileList = _this2$props$template === void 0 ? [] : _this2$props$template;

      if (value) {
        var tItem = templateFileList.find(function (i) {
          return i.key === value || i.fileName === value;
        });

        _this2.setState({
          currentTemplate: tItem
        });

        if (tItem) {
          var download = tItem.download;
          downloadFile(download);
        }

        return;
      }

      var currentTemplate = _this2.state.currentTemplate;
      var item = currentTemplate || (templateFileList.length ? templateFileList[0] : {
        download: undefined
      });
      var downloadUrl = item.download;
      downloadFile(downloadUrl);
    };

    _this2.beforeUpload = function (file) {
      return file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.type === 'application/vnd.ms-excel' || file.name.endsWith('.xls') || file.name.endsWith('.xlsx');
    };

    _this2.freakCustomRequest = function (_ref) {
      var file = _ref.file,
          onSuccess = _ref.onSuccess,
          onProgress = _ref.onProgress;
      onProgress({
        percent: 100,
        status: 'uploading'
      }, file);
      new Promise(function (resolve) {
        resolve();
      }).then(function () {
        onSuccess([{
          success: true,
          id: '-1'
        }], file);
      });
    };

    _this2.validateData = function () {
      var tableData = _this2.state.tableData;
      var validateFunc = _this2.props.validateFunc;

      if (tableData && tableData.length && validateFunc) {
        var newData = validateFunc(tableData);

        if (newData && Array.isArray(newData) && tableData.length === newData.length) {
          var validated = newData.every(function (item) {
            return item.validate;
          });

          if (!validated) {
            newData = newData.sort(function (a, b) {
              if (a.validate && !b.validate) return 1;
              if (!a.validate && b.validate) return -1;
              return 0;
            });
          }

          _this2.setState({
            validated: validated,
            tableData: newData
          });
        } else {
          throw new Error(_this2.locale.error1);
        }
      }
    };

    _this2.importData = function () {
      var _this2$state = _this2.state,
          tableData = _this2$state.tableData,
          validated = _this2$state.validated;

      if (validated) {
        var importFunc = _this2.props.importFunc;

        if (importFunc) {
          importFunc(_toConsumableArray(tableData));
        }

        _this2.setState({
          dataShowVisible: false,
          tableData: []
        });
      } else {
        message.error(_this2.locale.error2);
      }
    };

    _this2.renderComponent = function (locale) {
      var _this2$props = _this2.props,
          templateFileList = _this2$props.templateFileList,
          action = _this2$props.action;
      _this2.locale = locale;
      var _this2$state2 = _this2.state,
          uploadVisible = _this2$state2.uploadVisible,
          _this2$state2$fileLis = _this2$state2.fileList,
          fileList = _this2$state2$fileLis === void 0 ? [] : _this2$state2$fileLis,
          tableData = _this2$state2.tableData,
          dataShowVisible = _this2$state2.dataShowVisible,
          validated = _this2$state2.validated,
          selectedTemplate = _this2$state2.selectedTemplate;

      var columns = _this2.getColumns(locale);

      var uploadProps = {
        className: 'list',
        accept: '.xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        onChange: _this2.handleChange,
        beforeUpload: _this2.beforeUpload,
        fileList: fileList,
        customRequest: action ? undefined : _this2.freakCustomRequest
      };
      return React.createElement(React.Fragment, null, React.createElement(Button, {
        type: "primary",
        onClick: _this2.handleChangeUploadVisible
      }, locale["import"]), React.createElement(ExtModal, {
        width: 720,
        title: locale.fileUpload,
        destroyOnClose: true,
        onCancel: _this2.handleChangeUploadVisible,
        visible: uploadVisible
      }, React.createElement("div", {
        className: "template-download"
      }, React.createElement("span", null, locale.templateDownload, ":"), React.createElement(Select, {
        value: selectedTemplate,
        dropdownMatchSelectWidth: false,
        className: "select",
        allowClear: false,
        onChange: function onChange(v) {
          return _this2.setState({
            selectedTemplate: v
          });
        }
      }, templateFileList.map(function (item) {
        return React.createElement(Select.Option, {
          key: item.key || item.fileName,
          value: item.key || item.fileName
        }, item.fileName);
      })), React.createElement(Button, {
        type: "primary",
        onClick: function onClick() {
          return _this2.downloadTemplate();
        }
      }, locale.download)), React.createElement(Upload, uploadProps, React.createElement("div", {
        className: "upload-tool-bar"
      }, !fileList.length && React.createElement(Button, {
        disabled: uploadProps.disabled,
        type: "primary",
        icon: "upload",
        style: {
          marginRight: 5
        }
      }, locale.upload)))), React.createElement(ExtModal, {
        width: "98%",
        visible: dataShowVisible,
        title: locale.validateData,
        okText: validated ? locale["import"] : locale.validate,
        cancelText: locale.cancel,
        onOk: validated ? _this2.importData : _this2.validateData,
        onCancel: _this2.handleChangeDataVisible
      }, React.createElement(ExtTable, {
        rowSelection: false,
        columns: columns,
        data: {
          list: tableData
        }
      })));
    };

    var action = props.action,
        customRequest = props.customRequest,
        templateFileList = props.templateFileList;
    var defaultTemplateFile = templateFileList && templateFileList.length ? templateFileList[0] : {
      key: undefined,
      fileName: undefined,
      download: ''
    };
    _this2.state = {
      tableData: [],
      uploadVisible: false,
      remote: !!(action || customRequest),
      selectedTemplate: getString(defaultTemplateFile.key || defaultTemplateFile.fileName)
    };
    return _this2;
  }

  _createClass(DataImport, [{
    key: "render",
    value: function render() {
      return React.createElement(LocaleReceiver, {
        componentName: "DataImport",
        defaultLocale: defaultLocale
      }, this.renderComponent);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if (nextProps.fileList) {
        return {
          fileList: nextProps.fileList
        };
      }

      return null;
    }
  }]);

  return DataImport;
}(Component);

DataImport.defaultProps = {
  templateFileList: [],
  columns: []
};
export default DataImport;
//# sourceMappingURL=index.js.map
