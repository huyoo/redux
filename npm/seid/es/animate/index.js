function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import cssAnimate, { isCssAnimationSupported } from 'css-animation';
import cx from 'classnames';
import omit from 'omit.js';

var Animate =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Animate, _PureComponent);

  function Animate() {
    var _this;

    _classCallCheck(this, Animate);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Animate).apply(this, arguments));

    _this.animate = function (type, callback) {
      var node = ReactDOM.findDOMNode(_assertThisInitialized(_this));

      if (isCssAnimationSupported && type) {
        cssAnimate(node, type, callback);
      } else if (!isCssAnimationSupported) {
        console.warn('不支持css动画');
      }
    };

    return _this;
  }

  _createClass(Animate, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          type = _this$props.type,
          callback = _this$props.callback;
      this.animate(type, callback);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props2 = this.props,
          type = _this$props2.type,
          callback = _this$props2.callback;
      this.animate(type, callback);
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          className = _a.className,
          children = _a.children,
          delay = _a.delay,
          duration = _a.duration,
          style = _a.style,
          otherProps = __rest(_a, ["className", "children", "delay", "duration", "style"]);

      var cn = cx('animated', className);

      var _style = _extends({}, style || {});

      if (duration) {
        _style.animationDuration = "".concat(duration, "ms");
        _style.WebkitAnimationDuration = "".concat(duration, "ms");
      }

      if (delay) {
        _style.animationDelay = "".concat(delay, "ms");
        _style.WebkitAnimationDelay = "".concat(delay, "ms");
      }

      var divProps = omit(otherProps, ['type', 'callback', 'delay', 'duration']);
      return React.createElement("div", _extends({
        className: cn
      }, divProps, {
        style: _style
      }), children);
    }
  }]);

  return Animate;
}(PureComponent);

Animate.propTypes = {
  type: PropTypes.string,
  callback: PropTypes.func,
  duration: PropTypes.number,
  delay: PropTypes.number
};
export default Animate;
//# sourceMappingURL=index.js.map
