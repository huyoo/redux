import React from 'react';
import InputNumber from './InputNumber';
var inputNumberStyle = {
  margin: '0 5px'
};

var WeekDay = function WeekDay(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      locale = _ref.locale;
  var splits = value.split('#');
  var week = splits[0];
  var weekDay = splits[1];

  var notifyChange = function notifyChange(weekStr, weekDayStr) {
    var s = "".concat(weekStr, "#").concat(weekDayStr);
    if (onChange) onChange(s);
  };

  var handleWeekChange = function handleWeekChange(v) {
    notifyChange("".concat(v), weekDay);
  };

  var handleWeekDayChange = function handleWeekDayChange(v) {
    notifyChange(week, "".concat(v));
  };

  return React.createElement("span", null, locale.index, React.createElement(InputNumber, {
    disabled: disabled,
    min: 1,
    max: 4,
    style: inputNumberStyle,
    value: parseInt(week, 10),
    onChange: handleWeekChange
  }), locale.days, React.createElement(InputNumber, {
    disabled: disabled,
    min: 1,
    max: 7,
    style: inputNumberStyle,
    value: parseInt(weekDay, 10),
    onChange: handleWeekDayChange
  }));
};

export default WeekDay;
//# sourceMappingURL=WeekDay.js.map
