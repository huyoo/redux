function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react';

var BaseEditor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BaseEditor, _React$Component);

  function BaseEditor(props) {
    var _this;

    _classCallCheck(this, BaseEditor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BaseEditor).call(this, props));

    _this.notifyChange = function (_, value) {
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(value);
      }
    };

    _this.handleRadioChange = function (_ref) {
      var radio = _ref.target.value;
      var value = _this.state.value; // this.setState({ radio });

      _this.notifyChange(radio, value[radio]);
    };

    _this.handleValueChange = function (radio, v) {
      var value = _this.state.value;
      value[radio] = v; // this.setState({ radio, value });

      _this.setState({
        value: value
      });

      _this.notifyChange(radio, v);
    };

    _this.state = {
      value: {}
    };
    return _this;
  }

  return BaseEditor;
}(React.Component);

export default BaseEditor;
//# sourceMappingURL=BaseEditor.js.map
