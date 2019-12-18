import React from 'react';
import Checkbox from 'antd/es/checkbox';
import Row from 'antd/es/row';
import Col from 'antd/es/col';

var CheckBoxEditor = function CheckBoxEditor(_ref) {
  var onChange = _ref.onChange,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? 0 : _ref$min,
      max = _ref.max,
      value = _ref.value,
      disabled = _ref.disabled;
  var checked = [];

  var checkBoxs = function checkBoxs(minValue, maxValue) {
    var items = [];

    for (var i = minValue; i <= maxValue; i += 1) {
      items.push(React.createElement(Col, {
        span: 2,
        key: i
      }, React.createElement(Checkbox, {
        value: i
      }, i)));
    }

    return items;
  };

  var handleChange = function handleChange(values) {
    if (values.length === 0 && onChange) onChange('*');else if (onChange) onChange(values.sort(function (a, b) {
      return a - b;
    }).join(','));
  };

  if (value === 'C') {// empty
  } else if (value) {
    checked = value.split(',').map(function (i) {
      return parseInt(i, 0);
    }).filter(function (v) {
      return v >= min && v <= max;
    }).sort(function (a, b) {
      return a - b;
    });
    var s = checked.join(',');

    if (s !== value && onChange) {
      onChange(s);
    }
  }

  return React.createElement(Checkbox.Group, {
    disabled: disabled,
    onChange: handleChange,
    value: checked
  }, React.createElement(Row, null, checkBoxs(min, max)));
};

export default CheckBoxEditor;
//# sourceMappingURL=CheckBoxEditor.js.map
