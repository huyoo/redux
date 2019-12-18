function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Row from 'antd/es/row';
import Col from 'antd/es/col';
import Button from 'antd/es/button';
import Popover from 'antd/es/popover';
import debounce from 'lodash/debounce';
import cls from 'classnames';
import ExtIcon from '../ext-icon';
/**
 * 工具栏,监听宽度改变展示效果
 */

var ToolBar =
/*#__PURE__*/
function (_Component) {
  _inherits(ToolBar, _Component);

  function ToolBar(props) {
    var _this;

    _classCallCheck(this, ToolBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ToolBar).call(this, props));
    _this.leftWidth = 0;
    _this.rightWidth = 0;
    _this.state = {
      showLeft: true,
      showRight: true
    };

    _this.calcDom = function () {
      var newState = {};
      var _this$state = _this.state,
          showLeft = _this$state.showLeft,
          showRight = _this$state.showRight;

      var _assertThisInitialize = _assertThisInitialized(_this),
          leftNode = _assertThisInitialize.leftNode,
          rightNode = _assertThisInitialize.rightNode;

      var leftElement = ReactDOM.findDOMNode(_this.leftCol);

      if (leftElement && leftElement instanceof HTMLElement && leftNode) {
        if (showLeft && _this.leftWidth !== leftNode.offsetWidth) {
          _this.leftWidth = leftNode.offsetWidth;
          newState.showLeft = leftNode.offsetWidth <= leftElement.clientWidth;
        } else {
          newState.showLeft = _this.leftWidth <= leftElement.clientWidth;
        }
      }

      var rightElement = ReactDOM.findDOMNode(_this.rightCol);

      if (rightElement && rightElement instanceof HTMLElement && rightNode) {
        if (showRight && _this.rightWidth !== rightNode.offsetWidth) {
          _this.rightWidth = rightNode.offsetWidth;
          newState.showRight = rightNode.offsetWidth <= rightElement.clientWidth;
        } else {
          newState.showRight = _this.rightWidth <= rightElement.clientWidth;
        }
      }

      _this.setState(newState);
    };

    _this.getLayout = function () {
      var _this$props$layout = _this.props.layout,
          layout = _this$props$layout === void 0 ? {} : _this$props$layout;
      var _layout$leftSpan = layout.leftSpan,
          leftSpan = _layout$leftSpan === void 0 ? 12 : _layout$leftSpan,
          _layout$rightSpan = layout.rightSpan,
          rightSpan = _layout$rightSpan === void 0 ? 12 : _layout$rightSpan;
      return {
        leftSpan: leftSpan,
        rightSpan: rightSpan
      };
    };

    _this.getLeftComponent = function () {
      var left = _this.props.left;
      return React.createElement(React.Fragment, null, left);
    };

    _this.getRightComponent = function () {
      var right = _this.props.right;
      return React.createElement(React.Fragment, null, right);
    };

    _this.calcDom = debounce(_this.calcDom, 500);
    return _this;
  }

  _createClass(ToolBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.calcDom);
      this.calcDom();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.calcDom);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          rowStyle = _this$props.rowStyle,
          rowClassName = _this$props.rowClassName,
          rightClassName = _this$props.rightClassName,
          rightStyle = _this$props.rightStyle,
          leftClassName = _this$props.leftClassName,
          leftStyle = _this$props.leftStyle,
          left = _this$props.left,
          right = _this$props.right;
      var _this$state2 = this.state,
          showLeft = _this$state2.showLeft,
          showRight = _this$state2.showRight;

      var _this$getLayout = this.getLayout(),
          leftSpan = _this$getLayout.leftSpan,
          rightSpan = _this$getLayout.rightSpan;

      if (!left && !right) return null;
      return React.createElement(Row, {
        style: rowStyle,
        className: cls(rowClassName, 'seid-tool-bar'),
        type: "flex",
        justify: "space-between",
        align: "middle"
      }, React.createElement(Col, {
        ref: function ref(node) {
          _this2.leftCol = node;
        },
        className: leftClassName,
        style: leftStyle,
        span: leftSpan
      }, React.createElement("div", {
        style: {
          display: showLeft ? 'inline' : 'none',
          whiteSpace: 'nowrap'
        },
        ref: function ref(node) {
          _this2.leftNode = node;
        }
      }, this.getLeftComponent()), !showLeft && React.createElement(Popover, {
        placement: "bottomRight",
        content: this.getLeftComponent()
      }, React.createElement(Button, {
        style: {
          "float": 'left'
        }
      }, React.createElement(ExtIcon, {
        type: "vertical-left",
        antd: true
      })))), React.createElement(Col, {
        ref: function ref(node) {
          _this2.rightCol = node;
        },
        className: rightClassName,
        style: rightStyle,
        span: rightSpan
      }, React.createElement("div", {
        style: {
          display: showRight ? 'inline' : 'none',
          whiteSpace: 'nowrap'
        },
        ref: function ref(node) {
          _this2.rightNode = node;
        }
      }, this.getRightComponent()), !showRight && React.createElement(Popover, {
        placement: "bottomLeft",
        content: this.getRightComponent()
      }, React.createElement(Button, {
        style: {
          "float": 'right'
        }
      }, React.createElement(ExtIcon, {
        type: "vertical-right",
        antd: true
      })))));
    }
  }]);

  return ToolBar;
}(Component);

ToolBar.defaultProps = {
  layout: {
    leftSpan: 12,
    rightSpan: 12
  },
  left: null,
  right: null,
  rowStyle: {
    margin: '13px 0'
  }
};
export default ToolBar;
//# sourceMappingURL=index.js.map
