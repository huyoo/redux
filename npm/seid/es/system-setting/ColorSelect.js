function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react';
import Select from 'antd/es/select';
import Popover from 'antd/es/popover';
import { SketchPicker } from 'react-color';
var Option = Select.Option;

var ColorSelect =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ColorSelect, _React$PureComponent);

  // 记录modal上选择的值
  function ColorSelect(props) {
    var _this;

    _classCallCheck(this, ColorSelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ColorSelect).call(this, props));
    /* 显示隐藏换肤功能面板 */

    _this.colorClick = function (v) {
      if (v) {
        _this.setState({
          visible: true
        });
      }
    };

    _this.handleInput = function (value) {
      // 清空输入框的值
      var onChange = _this.props.onChange;

      if (onChange && !value) {
        onChange(null);
      }
    };

    _this.colorPick = function (color) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          varKey = _this$props.varKey;

      if (onChange) {
        onChange(_defineProperty({}, varKey, color.hex));
      }
    };

    _this.state = {
      visible: false
    };
    return _this;
  }

  _createClass(ColorSelect, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          _this$props2$placehol = _this$props2.placeholder,
          placeholder = _this$props2$placehol === void 0 ? '请选择颜色' : _this$props2$placehol,
          value = _this$props2.value;
      var visible = this.state.visible;
      return React.createElement("div", {
        className: "pc-check-panel",
        id: "pc-check-panel"
      }, React.createElement(Popover, {
        content: React.createElement(SketchPicker, {
          color: value,
          onChangeComplete: this.colorPick
        }),
        placement: "bottom",
        visible: visible,
        getPopupContainer: function getPopupContainer(triggerNode) {
          return triggerNode.parentElement || document.body;
        },
        onVisibleChange: function onVisibleChange(v) {
          if (!v) {
            _this2.setState({
              visible: false
            });
          }
        }
      }, React.createElement(Select, {
        placeholder: placeholder,
        value: value,
        onChange: this.handleInput,
        allowClear: true,
        open: false,
        onDropdownVisibleChange: this.colorClick
      }, React.createElement(Option, {
        key: value,
        value: value
      }, React.createElement("div", {
        style: {
          lineHeight: '30px',
          height: '30px'
        }
      }, React.createElement("span", {
        className: "colorBlock",
        style: {
          backgroundColor: value
        }
      }), React.createElement("span", {
        style: {
          display: 'inline-block'
        }
      }, value))))));
    }
  }]);

  return ColorSelect;
}(React.PureComponent);

export default ColorSelect;
//# sourceMappingURL=ColorSelect.js.map
