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
 * @Date:   2019-07-02 16:11:15
 * @Last Modified by:   zp
 * @Last Modified time: 2019-09-11 17:46:19
 */
import React, { cloneElement } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'antd/es/modal';
import DragM from './DragM';

var deepTraversal = function deepTraversal(node, className) {
  var target = null;

  if (node !== null) {
    var children = node.children;

    for (var i = 0; i < children.length; i++) {
      var tempClassName = children[i].className;

      if (tempClassName && tempClassName.includes(className)) {
        target = children[i];
        break;
      }

      if (children[i].childElementCount) {
        return deepTraversal(children[i], className);
      }
    }
  }

  return target;
};

var DragWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DragWrapper, _React$Component);

  function DragWrapper() {
    var _this;

    _classCallCheck(this, DragWrapper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DragWrapper).apply(this, arguments));

    _this.getCurrentNode = function () {
      _this.curNode = ReactDOM.findDOMNode(_this.ref);
    };
    /** 根据类名获取祖先dom */


    _this.findDomByClassName = function (className) {
      // 向下
      if (_this.curNode && _this.curNode instanceof HTMLElement) {
        var target = deepTraversal(_this.curNode, className);

        if (target) {
          return target;
        }
      } // 向上


      if (_this.curNode && _this.curNode instanceof HTMLElement) {
        var node = _this.curNode ? _this.curNode.parentElement : _this.curNode;

        while (node) {
          var tempClassName = node.className;

          if (tempClassName && tempClassName.includes(className)) {
            return node;
          }

          node = node.parentElement;
        }
      }

      return null;
    };

    _this.updateTransform = function (transformStr) {
      if (_this.modalDom && _this.modalDom instanceof HTMLElement) {
        var style = _this.modalDom.style;
        style.transform = transformStr;
      }
    };

    return _this;
  }

  _createClass(DragWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getCurrentNode();
      this.modalDom = this.findDomByClassName('ant-modal-content');
      this.container = ReactDOM.findDOMNode(this.ref);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      if (children && children.type === Modal) {
        var visible = children.props.visible;

        if (visible) {
          setTimeout(function () {
            _this2.modalDom = _this2.findDomByClassName('ant-modal-content');

            var _ref = _this2.ref || {},
                _ref$position = _ref.position,
                position = _ref$position === void 0 ? {} : _ref$position;

            var dx = position.dx,
                dy = position.dy;

            if (dx && dy) {
              _this2.updateTransform("translate(".concat(dx, "px,").concat(dy, "px)"));
            }
          }, 0);
        }

        var node = cloneElement(React.Children.only(children), {
          getContainer: function getContainer() {
            return _this2.container;
          }
        });
        return React.createElement(DragM, {
          ref: function ref(inst) {
            _this2.ref = inst;
          },
          updateTransform: this.updateTransform
        }, React.createElement("div", null, node));
      }

      return React.createElement(DragM, {
        ref: function ref(inst) {
          _this2.ref = inst;
        },
        updateTransform: this.updateTransform
      }, React.createElement("div", null, children));
    }
  }]);

  return DragWrapper;
}(React.Component);

export { DragWrapper as default };
//# sourceMappingURL=DragWrapper.js.map
