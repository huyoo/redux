function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * @Author: zp
 * @Date:   2019-05-20 13:39:04
 * @Last Modified by:   zp
 * @Last Modified time: 2019-07-02 11:20:11
 */
import React, { Component } from 'react';
import Breadcrumb from 'antd/es/breadcrumb';
import cls from 'classnames';
import { Scrollbars } from 'react-custom-scrollbars';
var Item = Breadcrumb.Item;

var ExtBreadcrumb =
/*#__PURE__*/
function (_Component) {
  _inherits(ExtBreadcrumb, _Component);

  function ExtBreadcrumb() {
    var _this;

    _classCallCheck(this, ExtBreadcrumb);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExtBreadcrumb).apply(this, arguments));

    _this.getBreadcrumbItems = function () {
      var pathData = _this.props.pathData;
      return pathData.map(function (item) {
        return React.createElement(Item, {
          key: item.key,
          href: item.path
        }, item.name);
      });
    };

    return _this;
  }

  _createClass(ExtBreadcrumb, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          style = _this$props.style,
          className = _this$props.className,
          children = _this$props.children,
          pathData = _this$props.pathData,
          rightExtra = _this$props.rightExtra,
          rightExtraClass = _this$props.rightExtraClass,
          extra = _this$props.extra,
          extraClassName = _this$props.extraClassName,
          extraStyle = _this$props.extraStyle,
          autoScroll = _this$props.autoScroll,
          hidden = _this$props.hidden;
      var hasHead = extra || pathData || rightExtra;
      return React.createElement("div", {
        className: cls('page-breadcrumb', {
          'no-breadcrumb': !pathData && !rightExtra
        }),
        hidden: hidden
      }, pathData || rightExtra ? React.createElement("div", {
        className: "breadcrumb-box"
      }, pathData && pathData.length ? React.createElement(Breadcrumb, null, this.getBreadcrumbItems()) : null, rightExtra ? React.createElement("div", {
        className: cls(rightExtraClass, 'bread-right-extra')
      }, rightExtra) : null) : null, extra ? React.createElement("div", {
        style: extraStyle,
        className: cls(extraClassName, 'bread-extra')
      }, extra) : null, React.createElement("div", {
        className: cls(className, 'page-box', {
          'page-box-head': hasHead,
          'page-box-no-head': !hasHead
        }),
        style: style
      }, autoScroll ? React.createElement(Scrollbars, {
        autoHide: true
      }, children) : children));
    }
  }]);

  return ExtBreadcrumb;
}(Component);

export { ExtBreadcrumb as default };
ExtBreadcrumb.defaultProps = {
  pathData: [],
  autoScroll: true,
  rightExtra: null,
  rightExtraClass: ''
};
//# sourceMappingURL=index.js.map
