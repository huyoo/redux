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
import message from 'antd/es/message';
import SeidLocaleReceiver from '../seid-locale-receiver';
import defaultLocale from './locale';
import { request } from '../utils';

var blobToFile = function blobToFile(res) {
  var data = res.data,
      headers = res.headers;
  var filename = headers['content-disposition'];
  var eLink = document.createElement('a');
  eLink.download = decodeURI(filename.split('=')[1]);
  eLink.style.display = 'none';
  eLink.href = URL.createObjectURL(data);
  document.body.appendChild(eLink);
  eLink.click();
  URL.revokeObjectURL(eLink.href); // 释放URL 对象

  document.body.removeChild(eLink);
};

var DownloadFileButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DownloadFileButton, _React$Component);

  function DownloadFileButton() {
    var _this;

    _classCallCheck(this, DownloadFileButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DownloadFileButton).apply(this, arguments));
    _this.state = {};

    _this.complete = function () {
      _this.setState({
        loading: false
      });
    };

    _this.handleClick = function () {
      _this.setState({
        loading: true
      }, function () {
        var _this$props = _this.props,
            getData = _this$props.getData,
            requestMethod = _this$props.requestMethod,
            requestConfig = _this$props.requestConfig;

        if (getData) {
          getData(function (res) {
            if (res.status === 200) {
              blobToFile(res);
            } else {
              message.error(_this.locale.downloadFailed);
            }

            _this.complete();
          });
        } else if (requestConfig) {
          request(_extends(_extends({}, requestConfig), {
            headers: _extends(_extends({}, requestConfig.headers), {
              Accept: 'application/octet-stream;charset=utf-8'
            }),
            method: requestMethod,
            responseType: 'blob'
          })).then(function (res) {
            blobToFile(res);

            _this.complete();
          })["catch"](function () {
            _this.complete();
          });
        } else {
          message.error(_this.locale.error);
        }
      });
    };

    _this.renderComponent = function (locale) {
      var _this$props2 = _this.props,
          style = _this$props2.style,
          _this$props2$buttonTe = _this$props2.buttonText,
          buttonText = _this$props2$buttonTe === void 0 ? locale.exportExcel : _this$props2$buttonTe;
      var loading = _this.state.loading;
      _this.locale = locale;
      return React.createElement(Button, {
        loading: loading,
        style: style || {
          marginLeft: 8
        },
        icon: "export",
        type: "primary",
        onClick: _this.handleClick
      }, buttonText);
    };

    return _this;
  }

  _createClass(DownloadFileButton, [{
    key: "render",
    value: function render() {
      return React.createElement(SeidLocaleReceiver, {
        componentName: "DownloadFileButton",
        defaultLocale: defaultLocale
      }, this.renderComponent);
    }
  }]);

  return DownloadFileButton;
}(React.Component);

DownloadFileButton.defaultProps = {
  requestMethod: 'get'
};
export default DownloadFileButton;
//# sourceMappingURL=index.js.map
