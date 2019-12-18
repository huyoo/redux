import _regeneratorRuntime from "@babel/runtime/regenerator";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'antd/es/modal';
import BaseForm from '../base-form';

var FormModal =
/*#__PURE__*/
function (_Component) {
  _inherits(FormModal, _Component);

  function FormModal() {
    var _this;

    _classCallCheck(this, FormModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormModal).apply(this, arguments));

    _this.handleOk = function () {
      return __awaiter(_assertThisInitialized(_this), void 0, void 0,
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee() {
        var _this$props$modalProp, modalProps, onOk, _ref, err, values;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props$modalProp = this.props.modalProps, modalProps = _this$props$modalProp === void 0 ? {} : _this$props$modalProp;
                onOk = modalProps.onOk;
                _context.next = 4;
                return this.BaseForm.handleSubmit();

              case 4:
                _ref = _context.sent;
                err = _ref.err;
                values = _ref.values;

                if (onOk) {
                  onOk(err, values);
                }

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    };

    return _this;
  }

  _createClass(FormModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var onRef = this.props.onRef;

      if (onRef) {
        onRef(this);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$modalProp2 = _this$props.modalProps,
          modalProps = _this$props$modalProp2 === void 0 ? {} : _this$props$modalProp2,
          _this$props$formProps = _this$props.formProps,
          formProps = _this$props$formProps === void 0 ? {} : _this$props$formProps;
      return React.createElement(Modal, _extends({}, modalProps, {
        onOk: this.handleOk
      }), React.createElement(BaseForm, _extends({}, formProps, {
        columns: formProps.columns || 1,
        wrappedComponentRef: function wrappedComponentRef(inst) {
          _this2.BaseForm = inst;
        }
      })));
    }
  }]);

  return FormModal;
}(Component);

FormModal.propTypes = {
  /** modal props */
  modalProps: PropTypes.object,

  /** BaseForm props */
  formProps: PropTypes.object
};
FormModal.defaultProps = {
  modalProps: {},
  formProps: {}
};
export default FormModal;
//# sourceMappingURL=index.js.map
