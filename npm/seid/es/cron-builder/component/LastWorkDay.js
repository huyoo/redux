import React from 'react';
import InputNumber from './InputNumber';

var LastWorkDay = function LastWorkDay(_ref) {
  var onChange = _ref.onChange,
      value = _ref.value,
      disabled = _ref.disabled;

  var handleChange = function handleChange(v) {
    var s = "".concat(v, "W");
    if (onChange) onChange(s);
  };

  var splits = value.split('W');
  return React.createElement(InputNumber, {
    disabled: disabled,
    min: 1,
    max: 31,
    value: parseInt(splits[0], 10),
    onChange: handleChange
  });
};

export default LastWorkDay;
//# sourceMappingURL=LastWorkDay.js.map
