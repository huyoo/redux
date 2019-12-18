function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react';
import Upload from 'antd/es/upload';
import message from 'antd/es/message';
import { isNotEmpty } from '../_util/utils';

var substring = function substring(v) {
  if (v) {
    return v.substr(0, 80);
  }

  return v;
};

var SysLogoUpload =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SysLogoUpload, _React$Component);

  function SysLogoUpload(props) {
    var _this;

    _classCallCheck(this, SysLogoUpload);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SysLogoUpload).call(this, props));

    _this.beforeUpload = function (file) {
      var isLogin = _this.props.isSyslogin;
      var isLt2M = isLogin ? file.size / 1024 / 1024 < 2 : file.size / 1024 < 10;

      if (!isLt2M) {
        message.error("\u4E0A\u4F20\u56FE\u7247\u4E0D\u80FD\u5927\u4E8E".concat(isLogin ? ' 2MB.' : ' 10KB.'));
      } else {
        _this.getBase64(file, _this.handleDealResult);
      }

      return false;
    };

    _this.getBase64 = function (img, callback) {
      try {
        var reader = new FileReader();
        reader.addEventListener('load', function () {
          return callback("".concat(reader.result));
        });
        reader.readAsDataURL(img);
      } catch (e) {
        message.error('上传图片错误，不能转换为Base64！');
      }
    };

    _this.handleDealResult = function (imageUrl) {
      if (imageUrl) {
        if (!('value' in _this.props)) {
          _this.setState({
            value: imageUrl
          });
        }

        _this.triggerChange(imageUrl);
      }
    };

    _this.triggerChange = function (changedValue) {
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(changedValue);
      }
    };

    _this.state = {
      value: ''
    };
    return _this;
  }

  _createClass(SysLogoUpload, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextState) {
      return substring(this.state.value) !== substring(nextState.value);
    }
  }, {
    key: "render",
    value: function render() {
      var uploadButton = React.createElement("div", null, React.createElement("div", {
        className: "ant-upload-text"
      }, "\u4E0A\u4F20"));
      var value = this.state.value;
      var _this$props = this.props,
          altValue = _this$props.altValue,
          _this$props$isSyslogi = _this$props.isSyslogin,
          isSyslogin = _this$props$isSyslogi === void 0 ? false : _this$props$isSyslogi;
      var customerClass = 'avatar-uploader';

      if (isSyslogin) {
        customerClass = 'sysLogin';
      }

      return React.createElement(Upload, {
        accept: "image/*",
        name: "avatar",
        listType: "picture-card",
        className: customerClass,
        showUploadList: false,
        beforeUpload: this.beforeUpload
      }, isNotEmpty(value) ? React.createElement("img", {
        src: value || '',
        alt: altValue
      }) : uploadButton);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if ('value' in nextProps && substring(prevState.value) !== substring(nextProps.value)) {
        var newState = {
          value: nextProps.value || ''
        };
        return newState;
      }

      return null;
    }
  }]);

  return SysLogoUpload;
}(React.Component);

export default SysLogoUpload;
//# sourceMappingURL=SysLogoUpload.js.map
