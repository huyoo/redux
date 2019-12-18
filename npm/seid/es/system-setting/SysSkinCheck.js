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
import Input from 'antd/es/input';
import Icon from 'antd/es/icon';
import { setThemes } from '../utils/themeUtils';
import CustomizeTheme from './CustomizeTheme';

var SysSkinCheck =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SysSkinCheck, _React$Component);

  function SysSkinCheck() {
    var _this;

    _classCallCheck(this, SysSkinCheck);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SysSkinCheck).apply(this, arguments));
    _this.state = {
      show: false,
      themes: [{
        key: 'red',
        name: '红',
        className: 'red',
        active: false,
        colorMap: {
          '@head-back_color': '#ee3828',
          '@sider-back_color': '#f9f9f9',
          '@sider-select_color': '#7a7a7a',
          '@select-color': '#ee3828',
          '@table_header_color': 'rgba(238,56,40,0.12)'
        }
      }, {
        key: 'blue',
        name: '蓝',
        className: 'blue',
        active: false,
        colorMap: {
          '@head-back_color': '#4bb4ff',
          '@sider-back_color': '#f9f9f9',
          '@sider-select_color': '#7a7a7a',
          '@select-color': '#4bb4ff',
          '@table_header_color': 'rgba(75,180,255,0.12)'
        }
      }, {
        key: 'cyan',
        name: '青',
        className: 'cyan',
        active: false,
        colorMap: {
          '@head-back_color': '#02bcab',
          '@sider-back_color': '#f9f9f9',
          '@sider-select_color': '#7a7a7a',
          '@select-color': '#02bcab',
          '@table_header_color': 'rgba(2,188,171,0.12)'
        }
      }, {
        key: 'coffee',
        name: '咖啡',
        className: 'coffee',
        active: false,
        colorMap: {
          '@head-back_color': '#ac9d86',
          '@sider-back_color': '#f9f9f9',
          '@sider-select_color': '#7a7a7a',
          '@select-color': '#ac9d86',
          '@table_header_color': 'rgba(172,157,134,0.12)'
        }
      }, {
        key: 'skyBlue',
        name: '蔚蓝',
        className: 'skyBlue',
        active: false,
        colorMap: {
          '@head-back_color': '#57c8da',
          '@sider-back_color': '#f9f9f9',
          '@sider-select_color': '#7a7a7a',
          '@select-color': '#57c8da',
          '@table_header_color': 'rgba(87,200,218,0.12)'
        }
      }, {
        key: 'blackish',
        name: '墨绿',
        className: 'blackish',
        active: false,
        colorMap: {
          '@head-back_color': '#90b48a',
          '@sider-back_color': '#f9f9f9',
          '@sider-select_color': '#7a7a7a',
          '@select-color': '#90b48a',
          '@table_header_color': 'rgba(144,180,138,0.12)'
        }
      }, {
        key: 'darkBlue',
        name: '深蓝',
        className: 'darkBlue',
        active: false,
        colorMap: {
          '@head-back_color': '#364760',
          '@sider-back_color': '#364760',
          '@sider-select_color': '#b0bcda',
          '@select-color': '#4498ff',
          '@table_header_color': 'rgba(39,174,255,0.12)'
        }
      }]
    };
    /* 显示隐藏换肤功能面板 */

    _this.colorClick = function () {
      var _this$props$value = _this.props.value,
          value = _this$props$value === void 0 ? '' : _this$props$value;
      var _this$state = _this.state,
          show = _this$state.show,
          _this$state$themes = _this$state.themes,
          themes = _this$state$themes === void 0 ? [] : _this$state$themes;

      if (!show) {
        themes.forEach(function (v) {
          v.active = v.className === value;
        });

        _this.setState({
          themes: themes,
          show: !show
        });
      } else {
        _this.setState({
          show: !show
        });
      }
    }; // 应用自定义主题


    _this.applyCustomizeTheme = function (item) {
      var onChange = _this.props.onChange; // 过滤为空的属性+table属性浅色替换

      for (var key in item) {
        if (!item[key]) {
          delete item[key];
        } else if (key === '@table_header_color') {
          if (!item[key].includes('rgba(')) {
            item[key] = item[key].replace('rgb(', 'rgba(').replace(')', ',0.12)');
          }
        }
      }

      setThemes(item, function () {
        // 自定义主题名称统一为：自定义
        if (onChange) {
          onChange(Object.keys(item).length > 0 ? JSON.stringify(item).replace('@head-back_color', '@header').replace('@sider-back_color', '@sider').replace('@sider-select_color', '@font').replace('@select-color', '@button').replace('@table_header_color', '@table') : null);
        }
      });
    };

    _this.setCustomizeTheme = function (item) {
      var onChange = _this.props.onChange; // 过滤为空的属性+table属性浅色替换

      for (var key in item) {
        if (!item[key]) {
          delete item[key];
        } else if (key === '@table_header_color') {
          if (!item[key].includes('rgba(')) {
            item[key] = item[key].replace('rgb(', 'rgba(').replace(')', ',0.12)');
          }
        }
      }

      if (onChange) {
        onChange(Object.keys(item).length > 0 ? JSON.stringify(item).replace('@head-back_color', '@header').replace('@sider-back_color', '@sider').replace('@sider-select_color', '@font').replace('@select-color', '@button').replace('@table_header_color', '@table') : null);
      }
    };

    return _this;
  }

  _createClass(SysSkinCheck, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          onChange = _this$props.onChange;
      var colorClick = this.colorClick;
      var _this$state2 = this.state,
          show = _this$state2.show,
          _this$state2$themes = _this$state2.themes,
          themes = _this$state2$themes === void 0 ? [] : _this$state2$themes;

      var colorOnChange = function colorOnChange(event) {
        // do somethings
        if (onChange) {
          onChange(event.target.value);
        }
      };
      /* 更改主题方法 */


      var checkTheme = function checkTheme(item) {
        if (onChange) {
          onChange(JSON.stringify(item.colorMap).replace('@head-back_color', '@header').replace('@sider-back_color', '@sider').replace('@sider-select_color', '@font').replace('@select-color', '@button').replace('@table_header_color', '@table'));
        }
      };

      return React.createElement("div", {
        className: "pc-check-panel"
      }, React.createElement(Input, {
        placeholder: "\u8BF7\u9009\u62E9",
        onClick: colorClick,
        value: value,
        onChange: colorOnChange,
        allowClear: true
      }), show ? React.createElement("div", {
        className: "pc-drop-menu"
      }, React.createElement("div", {
        className: "pc-drop-title"
      }, React.createElement("span", {
        onClick: colorClick,
        title: "\u5173\u95ED"
      }, React.createElement(Icon, {
        type: "close"
      })), "\u8BF7\u9009\u62E9\u4E3B\u9898"), React.createElement("div", {
        className: "pc-drop-content"
      }, React.createElement("h3", null, "\u5DF2\u6709\u4E3B\u9898"), React.createElement("ul", null, themes.map(function (v) {
        return React.createElement("li", {
          key: v.key,
          className: "pc-".concat(v.className).concat(v.active ? ' active' : '')
        }, React.createElement("span", {
          onClick: function onClick() {
            return checkTheme(v);
          }
        }, v.name));
      }))), React.createElement("div", {
        className: "pc-drop-content"
      }, React.createElement("h3", null, "\u81EA\u5B9A\u4E49\u4E3B\u9898"), React.createElement("div", {
        className: "pc-color-content"
      }, React.createElement(CustomizeTheme, {
        onApply: this.applyCustomizeTheme,
        value: value,
        onChange: this.setCustomizeTheme
      })))) : null);
    }
  }]);

  return SysSkinCheck;
}(React.Component);

export default SysSkinCheck;
//# sourceMappingURL=SysSkinCheck.js.map
