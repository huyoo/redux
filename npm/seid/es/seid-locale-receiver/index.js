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

import * as React from 'react';
import * as PropTypes from 'prop-types';
import defaultLocaleData from './default';
import seidLocaleData from './seidLocale';

var SeidLocaleReceiver =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SeidLocaleReceiver, _React$Component);

  function SeidLocaleReceiver() {
    _classCallCheck(this, SeidLocaleReceiver);

    return _possibleConstructorReturn(this, _getPrototypeOf(SeidLocaleReceiver).apply(this, arguments));
  }

  _createClass(SeidLocaleReceiver, [{
    key: "getLocale",
    value: function getLocale() {
      var _this$props = this.props,
          componentName = _this$props.componentName,
          defaultLocale = _this$props.defaultLocale;
      var locale = defaultLocale || defaultLocaleData[componentName || 'global'];
      var antLocale = this.context.antLocale;

      if (antLocale) {
        var _antLocale$locale = antLocale.locale,
            localeCode = _antLocale$locale === void 0 ? 'zh-cn' : _antLocale$locale;
        var localeFromContext = componentName && seidLocaleData ? seidLocaleData[localeCode][componentName] : {};
        return _extends(_extends({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
      }

      return _extends({}, typeof locale === 'function' ? locale() : locale);
    }
  }, {
    key: "getLocaleCode",
    value: function getLocaleCode() {
      var antLocale = this.context.antLocale;
      var localeCode = antLocale && antLocale.locale; // Had use LocaleProvide but didn't set locale

      if (antLocale && antLocale.exist && !localeCode) {
        return defaultLocaleData.locale;
      }

      return localeCode;
    } // changeLocaleCode = (/* localeCode: string */) => {
    // empty
    // };

  }, {
    key: "render",
    value: function render() {
      var localeCode = this.getLocaleCode(); // this.changeLocaleCode(localeCode);

      return this.props.children(this.getLocale(), localeCode, this.context.antLocale);
    }
  }]);

  return SeidLocaleReceiver;
}(React.Component);

export { SeidLocaleReceiver as default };
SeidLocaleReceiver.defaultProps = {
  componentName: 'global'
};
SeidLocaleReceiver.contextTypes = {
  antLocale: PropTypes.object
};
//# sourceMappingURL=index.js.map
