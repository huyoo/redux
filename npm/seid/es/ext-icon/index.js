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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import omit from 'omit.js';
import AntdIcon from 'antd/es/icon';
import ToolTip from 'antd/es/tooltip';
import icons from './iconfont'; // eslint-disable-next-line react/prefer-stateless-function

var ExtIcon =
/*#__PURE__*/
function (_Component) {
  _inherits(ExtIcon, _Component);

  function ExtIcon(props) {
    var _this;

    _classCallCheck(this, ExtIcon);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExtIcon).call(this, props));

    _this.renderIcon = function () {
      var _a = _this.props,
          font = _a.font,
          antd = _a.antd,
          type = _a.type,
          spin = _a.spin,
          prefixCls = _a.prefixCls,
          disabled = _a.disabled,
          className = _a.className,
          restProps = __rest(_a, ["font", "antd", "type", "spin", "prefixCls", "disabled", "className"]);

      var cn = {
        click: Boolean(restProps.onClick),
        disabled: disabled
      };

      if (disabled) {
        restProps.onClick = function () {};
      }

      var iconType = type && "".concat(type.startsWith('#') ? type.replace(/#/, '') : type);
      var iconProps = omit(restProps, ['tooltip']);
      return antd ? React.createElement(AntdIcon, _extends({
        type: type,
        className: cls(className, cn),
        spin: spin
      }, iconProps)) : React.createElement("i", _extends({
        className: cls(prefixCls, {
          spin: spin
        }, cn, className)
      }, iconProps), React.createElement("svg", {
        className: "svg-icon",
        "aria-hidden": "true"
      }, React.createElement("use", {
        xlinkHref: "#".concat(font, "-").concat(iconType)
      })));
    };

    icons.initIcon();
    return _this;
  }

  _createClass(ExtIcon, [{
    key: "render",
    value: function render() {
      var tooltip = this.props.tooltip;

      if (tooltip) {
        return React.createElement(ToolTip, tooltip, this.renderIcon());
      }

      return this.renderIcon();
    }
  }]);

  return ExtIcon;
}(Component);

ExtIcon.propTypes = {
  prefixCls: PropTypes.string,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  font: PropTypes.string,
  antd: PropTypes.bool,
  spin: PropTypes.bool,
  disabled: PropTypes.bool
};
ExtIcon.defaultProps = {
  prefixCls: 'seid-icon',
  className: '',
  font: 'seid-font',
  antd: false,
  spin: false,
  disabled: false
};
export default ExtIcon;
//# sourceMappingURL=index.js.map
