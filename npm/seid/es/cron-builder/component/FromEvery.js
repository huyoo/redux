function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import InputNumber from './InputNumber';
var inputNumberStyle = {
  margin: '0 5px'
};

var FromEvery = function FromEvery(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      front = _ref.front,
      middle = _ref.middle,
      back = _ref.back,
      _ref$fromMin = _ref.fromMin,
      fromMin = _ref$fromMin === void 0 ? 0 : _ref$fromMin,
      _ref$fromMax = _ref.fromMax,
      fromMax = _ref$fromMax === void 0 ? 59 : _ref$fromMax,
      _ref$everyMin = _ref.everyMin,
      everyMin = _ref$everyMin === void 0 ? 1 : _ref$everyMin,
      _ref$everyMax = _ref.everyMax,
      everyMax = _ref$everyMax === void 0 ? 59 : _ref$everyMax,
      disabled = _ref.disabled;
  var splits = (value || '').split('/');
  var from = parseInt(splits[0], 10);
  var every = parseInt(splits[1], 10);

  var notifyChange = function notifyChange(fromStr, everyStr) {
    var s = "".concat(fromStr, "/").concat(everyStr);
    if (onChange) onChange(s);
  };

  var handleFromChange = function handleFromChange(v) {
    notifyChange("".concat(v), "".concat(every));
  };

  var handleEveryChange = function handleEveryChange(v) {
    notifyChange("".concat(from), "".concat(v));
  };

  return React.createElement("span", null, front, React.createElement(InputNumber, {
    disabled: disabled,
    min: fromMin,
    max: fromMax,
    value: from,
    style: _extends({}, inputNumberStyle),
    onChange: handleFromChange
  }), middle, React.createElement(InputNumber, {
    disabled: disabled,
    min: everyMin,
    max: everyMax,
    value: every,
    style: _extends({}, inputNumberStyle),
    onChange: handleEveryChange
  }), back);
};

export default FromEvery;
//# sourceMappingURL=FromEvery.js.map
