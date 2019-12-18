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
import ToolBar from '../tool-bar';

var DetailPane =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DetailPane, _React$Component);

  function DetailPane() {
    var _this;

    _classCallCheck(this, DetailPane);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DetailPane).apply(this, arguments));
    _this.state = {};

    _this.getBaseToolBarProps = function () {
      var _this$props = _this.props,
          title = _this$props.title,
          extra = _this$props.extra;
      var style = {
        boxSizing: 'border-box',
        paddingLeft: '6px',
        borderLeft: '3px solid #1890ff',
        fontSize: '14px',
        fontWeight: 500,
        color: 'rgba(0, 0, 0, 0.85)'
      };
      return {
        wrapperStyle: {
          margin: '10px 0',
          height: 30
        },
        left: React.createElement("div", {
          style: style
        }, title),
        right: extra
      };
    };

    return _this;
  }

  _createClass(DetailPane, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          style = _this$props2.style;

      var _style = _extends(_extends({
        height: '100%'
      }, style), {
        position: 'relative',
        padding: '0 10px',
        overflow: 'hidden'
      });

      return React.createElement("div", {
        style: _style
      }, React.createElement(ToolBar, this.getBaseToolBarProps()), React.createElement("div", {
        style: {
          position: 'absolute',
          left: 10,
          right: 10,
          bottom: 0,
          top: 40
        }
      }, children));
    }
  }]);

  return DetailPane;
}(React.Component);

DetailPane.defaultProps = {
  title: '',
  extra: null
};
export default DetailPane;
//# sourceMappingURL=index.js.map
