function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

import React from 'react';
import { storage, constants } from '../utils';

function AuthWidget(WrappedComponent) {
  var Widget =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Widget, _React$Component);

    function Widget(props) {
      var _this;

      _classCallCheck(this, Widget);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Widget).call(this, props));
      _this.state = {};
      return _this;
    }

    _createClass(Widget, [{
      key: "render",
      value: function render() {
        var _a = this.props,
            authCode = _a.authCode,
            authorities = _a.authorities,
            props = __rest(_a, ["authCode", "authorities"]);

        if (!authCode) {
          return React.createElement(WrappedComponent, props);
        }

        if (authorities) {
          if (authorities.includes(authCode)) {
            return React.createElement(WrappedComponent, props);
          }

          return null;
        }

        var authList = storage.sessionStorage.get(constants.CONST_GLOBAL.FEATURE_KEY);

        if (authList && authList.includes(authCode)) {
          return React.createElement(WrappedComponent, props);
        }

        return null;
      }
    }]);

    return Widget;
  }(React.Component);

  return Widget;
}

export default AuthWidget;
//# sourceMappingURL=index.js.map
