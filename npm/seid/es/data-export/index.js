import _regeneratorRuntime from "@babel/runtime/regenerator";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
import xlsx from 'xlsx';
import omit from 'lodash/omit';
import pick from 'lodash/pick';
import moment from 'moment';
import { downloadFileByALink, request } from '../utils'; // 请求数据

var requestData = function requestData(requestParams) {
  return __awaiter(void 0, void 0, void 0,
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee() {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", request(_extends({}, requestParams)));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
};

var string2Blob = function string2Blob(content) {
  return new Blob([content], {
    type: 'application/octet-stream'
  });
};

var downloadFile = function downloadFile(url, saveName) {
  if (_typeof(url) === 'object' && url instanceof Blob) {
    url = URL.createObjectURL(url); // 创建blob地址
  }

  downloadFileByALink(url, saveName);
}; // 生成文件


var generateFile = function generateFile(exportType, data) {
  var sheetName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Sheet1';
  var filename = arguments.length > 3 ? arguments[3] : undefined;
  var filenameFormat = arguments.length > 4 ? arguments[4] : undefined;

  if (exportType === 'xlsx') {
    var sheet = xlsx.utils.json_to_sheet(data);
    var workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, sheet, sheetName);
    xlsx.writeFile(workbook, "".concat(filename ? "".concat(filename, ".") : '').concat(moment().format(filenameFormat), ".xlsx"));
  } else {
    var _sheet = xlsx.utils.json_to_sheet(data);

    var content = xlsx.utils.sheet_to_csv(_sheet);
    var blob = string2Blob(content);
    downloadFile(blob, "".concat(filename ? "".concat(filename, ".") : '').concat(moment().format(filenameFormat), ".txt"));
  }
};

var DataExport = function DataExport(props) {
  return __awaiter(void 0, void 0, void 0,
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee2() {
    var requestParams, data, filename, sheetName, explainResponse, _props$exportType, exportType, _props$filenameFormat, filenameFormat, exportData;

    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            requestParams = props.requestParams, data = props.data, filename = props.filename, sheetName = props.sheetName, explainResponse = props.explainResponse, _props$exportType = props.exportType, exportType = _props$exportType === void 0 ? 'xlsx' : _props$exportType, _props$filenameFormat = props.filenameFormat, filenameFormat = _props$filenameFormat === void 0 ? 'YYYYMMDDHHmmss' : _props$filenameFormat;
            exportData = data;

            if (!requestParams) {
              _context2.next = 7;
              break;
            }

            _context2.next = 5;
            return requestData(requestParams);

          case 5:
            exportData = _context2.sent;

            if (explainResponse) {
              exportData = explainResponse(exportData);
            }

          case 7:
            generateFile(exportType, exportData, sheetName, filename, filenameFormat);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
};

export var ExportButton = function ExportButton(_a) {
  var props = __rest(_a, []);

  var names = ['requestParams', 'data', 'filename', 'sheetName', 'explainResponse', 'exportType', 'filenameFormat'];
  var buttonProps = omit(props, names);
  var exportProps = pick(props, names);
  return React.createElement(Button, _extends({}, buttonProps, {
    onClick: function onClick() {
      return DataExport(exportProps);
    }
  }));
};
DataExport.Button = ExportButton;
export default DataExport;
//# sourceMappingURL=index.js.map
