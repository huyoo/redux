var _defaultRadioKeyValue;

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
import Radio from 'antd/es/radio';
import moment from 'moment';
import Between from './Between';
import { getCurrentRegIndex, index } from './reg';
import BaseEditor from './BaseEditor';
var RadioGroup = Radio.Group;
var MIN_YEAR = moment().year();
var MAX_YEAR = 2099;
var defaultRadioKeyValue = (_defaultRadioKeyValue = {}, _defineProperty(_defaultRadioKeyValue, index.EVERY, '*'), _defineProperty(_defaultRadioKeyValue, index.BETWEEN, "".concat(MIN_YEAR, "-").concat(MAX_YEAR)), _defaultRadioKeyValue);

var YearEditor =
/*#__PURE__*/
function (_BaseEditor) {
  _inherits(YearEditor, _BaseEditor);

  function YearEditor(props) {
    var _this;

    _classCallCheck(this, YearEditor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(YearEditor).call(this, props));
    _this.state = {
      value: defaultRadioKeyValue
    };
    return _this;
  }

  _createClass(YearEditor, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          radioStyle = _this$props.radioStyle,
          defaultValue = _this$props.value,
          locale = _this$props.locale;
      var radio = getCurrentRegIndex(defaultValue);
      return React.createElement(RadioGroup, {
        onChange: this.handleRadioChange,
        value: radio
      }, React.createElement(Radio, {
        style: radioStyle,
        value: index.EVERY
      }, locale.everyYear), React.createElement(Radio, {
        style: radioStyle,
        value: index.BETWEEN
      }, locale.period, React.createElement(Between, {
        locale: locale,
        disabled: radio !== index.BETWEEN,
        min: MIN_YEAR,
        max: MAX_YEAR,
        value: defaultRadioKeyValue[index.BETWEEN],
        onChange: function onChange(value) {
          return _this2.handleValueChange(index.BETWEEN, value);
        }
      })));
    }
  }]);

  return YearEditor;
}(BaseEditor);

export default YearEditor;
//# sourceMappingURL=YearEditor.js.map