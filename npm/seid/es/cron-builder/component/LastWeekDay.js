import React from 'react';
import InputNumber from './InputNumber';

var LastWeekDay = function LastWeekDay(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      disabled = _ref.disabled;
  var splits = value.split('L');

  var notifyChange = function notifyChange(v) {
    var s = "".concat(v, "L");
    if (onChange) onChange(s);
  };

  return React.createElement(InputNumber, {
    disabled: disabled,
    min: 1,
    max: 7,
    value: parseInt(splits[0], 10),
    onChange: notifyChange
  });
};

export default LastWeekDay;
//# sourceMappingURL=LastWeekDay.js.map
