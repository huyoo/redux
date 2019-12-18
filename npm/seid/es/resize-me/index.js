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
import ResizeSensor from 'css-element-queries/src/ResizeSensor';
import $$ from 'cmn-utils';
import cls from 'classnames';
var debounce = $$.debounce,
    throttle = $$.throttle;
/**
 * 在一个类上增加这个装饰器，可以监听组件的大小变化，
 * 被包装的类在porps中将注入组件的width和height，并且
 * 在上级函组件中可以使用onResize函数
 * @param {*} config
 */

var defaultConfig = {
  refreshRate: 2,
  refreshMode: 'throttle'
};

var ResizeMe = function ResizeMe() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultConfig;
  var refreshFunc = config.refreshMode === 'throttle' ? throttle : debounce;
  return function (WrappedComponent) {
    return (
      /*#__PURE__*/
      function (_Component) {
        _inherits(Resize, _Component);

        function Resize(props) {
          var _this;

          _classCallCheck(this, Resize);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(Resize).call(this, props));

          _this.onResize = function () {
            var element = _this.element.parentNode;
            var onResizeMe = _this.props.onResizeMe;

            var _getComputedStyle = getComputedStyle(element),
                width = _getComputedStyle.width,
                height = _getComputedStyle.height,
                paddingLeft = _getComputedStyle.paddingLeft,
                paddingRight = _getComputedStyle.paddingRight,
                paddingTop = _getComputedStyle.paddingTop,
                paddingBottom = _getComputedStyle.paddingBottom;

            var size = {
              width: parseInt(width, 10) - parseInt(paddingLeft, 10) - parseInt(paddingRight, 10),
              height: parseInt(height, 10) - parseInt(paddingTop, 10) - parseInt(paddingBottom, 10)
            };

            _this.setState(size);

            if (onResizeMe) onResizeMe(size);
          };

          _this.onResizeStrategy = refreshFunc(_this.onResize, config.refreshRate);
          _this.state = {
            width: 0,
            height: 0,
            position: undefined
          };
          return _this;
        }

        _createClass(Resize, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            var element = this.element.parentNode;
            this.resizeSensor = new ResizeSensor(element, this.onResizeStrategy);
            this.onResizeStrategy();
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            var element = this.element.parentNode;
            this.resizeSensor.detach(element, this.onResizeStrategy);
          }
        }, {
          key: "render",
          value: function render() {
            var _this2 = this;

            var _a = this.props,
                _a$className = _a.className,
                className = _a$className === void 0 ? '' : _a$className,
                rest = __rest(_a, ["className"]);

            return React.createElement("div", {
              ref: function ref(node) {
                return _this2.element = node;
              },
              className: cls('seid-resize-me', className)
            }, React.createElement(WrappedComponent, _extends({}, rest, {
              size: _extends({}, this.state)
            })));
          }
        }]);

        return Resize;
      }(Component)
    );
  };
};

export default ResizeMe;
//# sourceMappingURL=index.js.map
