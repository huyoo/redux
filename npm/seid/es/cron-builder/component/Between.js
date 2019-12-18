function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Input from 'antd/es/input';
import InputNumber from './InputNumber';
var style = {
  width: 70,
  textAlign: 'center',
  paddingRight: '0px',
  paddingLeft: '0px'
};
var InputGroup = Input.Group;

var Between = function Between(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? 0 : _ref$min,
      max = _ref.max,
      disabled = _ref.disabled,
      locale = _ref.locale;
  var splits = value.split('-');
  var minValue = parseInt(splits[0], 0);
  var maxValue = parseInt(splits[1], 0);

  var notifyChange = function notifyChange(minV, maxV) {
    var s = "".concat(minV, "-").concat(maxV);

    if (onChange) {
      onChange(s);
    }
  };

  var handleMinChange = function handleMinChange(v) {
    notifyChange(v, maxValue);
  };

  var handleMaxChange = function handleMaxChange(v) {
    notifyChange(minValue, v);
  };

  return React.createElement(InputGroup, {
    compact: true,
    style: {
      display: 'inline-block',
      verticalAlign: 'middle',
      marginLeft: '5px'
    }
  }, React.createElement(InputNumber, {
    disabled: disabled,
    style: style,
    placeholder: locale.minimum,
    min: min,
    max: maxValue,
    value: minValue,
    onChange: handleMinChange,
    defaultValue: min
  }), React.createElement(Input, {
    style: {
      width: 30,
      borderLeft: 0,
      pointerEvents: 'none',
      backgroundColor: disabled ? '#e9e9e9' : '#fff'
    },
    placeholder: "~",
    disabled: true
  }), React.createElement(InputNumber, {
    disabled: disabled,
    style: _extends(_extends({}, style), {
      borderLeft: 0
    }),
    placeholder: locale.maximum,
    min: minValue,
    max: max,
    value: maxValue,
    onChange: handleMaxChange,
    defaultValue: max
  }));
};

export default Between;
//# sourceMappingURL=Between.js.map
