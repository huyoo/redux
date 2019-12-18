var _REG;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
var EVERY = /^\*$/;
var ANY = /^\?$/;
var BETWEEN = /^\d+-\d+$/;
var FROM_EVERY = /^\d+\/\d+$/;
var CHECK_BOX = /^(C|((\d+,)*\d+))$/;
var LAST_WORK_DAY = /^\d+W$/;
var LAST_MONTH_DAY = /^L$/;
var LAST_WEEK_DAY = /^\d+L$/;
var WEEK_DAY = /^\d+#\d+$/;
var index = {
  EVERY: 'EVERY',
  ANY: 'ANY',
  BETWEEN: 'BETWEEN',
  FROM_EVERY: 'FROM_EVERY',
  CHECK_BOX: 'CHECK_BOX',
  LAST_WORK_DAY: 'LAST_WORK_DAY',
  LAST_MONTH_DAY: 'LAST_MONTH_DAY',
  LAST_WEEK_DAY: 'LAST_WEEK_DAY',
  WEEK_DAY: 'WEEK_DAY'
};
var REG = (_REG = {}, _defineProperty(_REG, index.EVERY, EVERY), _defineProperty(_REG, index.ANY, ANY), _defineProperty(_REG, index.BETWEEN, BETWEEN), _defineProperty(_REG, index.FROM_EVERY, FROM_EVERY), _defineProperty(_REG, index.CHECK_BOX, CHECK_BOX), _defineProperty(_REG, index.LAST_WORK_DAY, LAST_WORK_DAY), _defineProperty(_REG, index.LAST_MONTH_DAY, LAST_MONTH_DAY), _defineProperty(_REG, index.LAST_WEEK_DAY, LAST_WEEK_DAY), _defineProperty(_REG, index.WEEK_DAY, WEEK_DAY), _REG);
export var getCurrentRegIndex = function getCurrentRegIndex(cronText, currentIndex) {
  if (currentIndex && cronText && REG[currentIndex].test(cronText)) {
    return currentIndex;
  }

  if (cronText) {
    for (var _i = 0, _Object$keys = Object.keys(REG); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];
      var reg = REG[key];

      if (reg.test(cronText)) {
        return key;
      }
    }
  }

  return undefined;
};

var Reg =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Reg, _React$Component);

  function Reg(props) {
    var _this;

    _classCallCheck(this, Reg);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Reg).call(this, props));

    _this.updateCron = function (cronText, currentIndex, onChange) {
      if (cronText === undefined) {
        if (onChange) {
          onChange(currentIndex, cronText);
        }

        return;
      }

      if (currentIndex && REG[currentIndex].test(cronText)) {
        if (onChange) onChange(currentIndex, cronText);
        return;
      }

      for (var _i2 = 0, _Object$keys2 = Object.keys(REG); _i2 < _Object$keys2.length; _i2++) {
        var key = _Object$keys2[_i2];
        var reg = REG[key];

        if (reg.test(cronText)) {
          if (onChange) onChange(key, cronText);
          return;
        }
      }

      if (onChange) onChange(index.EVERY, '*');
    };

    var value = props.value;
    _this.value = value; // this.updateCron(value, currentIndex, onChange);

    return _this;
  }

  _createClass(Reg, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var value = nextProps.value,
          currentIndex = nextProps.currentIndex,
          onChange = nextProps.onChange;

      if (this.value !== value) {
        this.value = value;
        this.updateCron(value, currentIndex, onChange);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null);
    }
  }]);

  return Reg;
}(React.Component);

export default Reg;
export { index };
//# sourceMappingURL=reg.js.map
