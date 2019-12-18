function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import cls from 'classnames';
import isEqual from 'react-fast-compare';
import PerfectScrollbar from 'perfect-scrollbar';
import Select from 'antd/es/select';
import Input from 'antd/es/input';
import Table from 'antd/es/table';
import LocaleReceiver from '../seid-locale-receiver';
import { formatMsg, objectAssignAppend, request, setCursorPosition } from '../utils';
import defaultLocale from './locale';
var Search = Input.Search;

var ComboGrid =
/*#__PURE__*/
function (_Component) {
  _inherits(ComboGrid, _Component);

  function ComboGrid(props) {
    var _this;

    _classCallCheck(this, ComboGrid);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ComboGrid).call(this, props));
    _this.loaded = false;
    _this.data = [];
    _this.quickSearchValue = "";

    _this.onResize = function () {
      if (_this.dataTable) {
        var height = _this.props.height;
        var tDom = ReactDOM.findDOMNode(_this.dataTable);

        if (tDom && tDom instanceof HTMLElement) {
          var antTableBody = tDom.querySelector('.ant-table-body');

          if (antTableBody && antTableBody instanceof HTMLElement) {
            antTableBody.style.maxHeight = "".concat(height, "px");

            if (_this.scrollBar) {
              _this.scrollBar.destroy();

              _this.scrollBar = null;
            }

            _this.scrollBar = new PerfectScrollbar(antTableBody);

            _this.scrollBar.update();
          }
        }
      }
    };

    _this.hideComboGrid = function (e) {
      if (_this.comboGrid && !_this.comboGrid.contains(e.target)) {
        _this.setState({
          showGrid: false
        });
      }
    };

    _this.showComboGrid = function (showGrid) {
      if (showGrid) {
        var store = _this.props.store;

        if (store) {
          _this.getData();
        }

        _this.setState({
          showGrid: showGrid
        }, function () {
          window.setTimeout(_this.onResize, 200);
        });
      }
    };

    _this.getReaderData = function (obj) {
      var reader = _this.props.reader;
      var data = [];

      if (reader.data) {
        data = _this.getReader(reader.data, obj) || [];
      }

      return data;
    };

    _this.getReader = function (readerField, obj) {
      var data = null;

      if (_typeof(obj) === 'object' && readerField) {
        var s = readerField.split('.');
        var d = obj[s[0]];

        for (var i = 1; i < s.length; i++) {
          d = d[s[i]];

          if (d instanceof Array && d.length > 0 && i < s.length - 1) {
            d = d[0];
          }
        }

        if (d) {
          data = d;
        }
      }

      return data;
    };

    _this.getData = function () {
      var _this$props = _this.props,
          cascadeParams = _this$props.cascadeParams,
          store = _this$props.store,
          remotePaging = _this$props.remotePaging,
          searchProperties = _this$props.searchProperties;
      var pagination = _this.state.pagination;

      var _ref = store || {},
          params = _ref.params;

      var superParams = _extends({}, params || {});

      if (remotePaging) {
        objectAssignAppend(superParams, {
          quickSearchValue: _this.quickSearchValue,
          quickSearchProperties: searchProperties,
          pageInfo: {
            page: pagination.current,
            rows: pagination.pageSize
          }
        });
      }

      if (cascadeParams) {
        _this.loaded = false;
        objectAssignAppend(superParams, cascadeParams);
      }

      if (!_this.loaded) {
        _this.loadData(superParams);
      }
    };

    _this.loadData = function (params) {
      var _this$props2 = _this.props,
          store = _this$props2.store,
          afterLoaded = _this$props2.afterLoaded,
          remotePaging = _this$props2.remotePaging,
          reader = _this$props2.reader;
      var pagination = _this.state.pagination;

      var _ref2 = store || {},
          url = _ref2.url,
          type = _ref2.type;

      var methodType = type || 'get';

      _this.setState({
        loading: true
      });

      if (url) {
        request({
          method: methodType,
          url: url,
          data: params
        }).then(function (res) {
          if (res.success) {
            var resultData = res.data || [];
            var ds = [];

            if (reader && reader.data) {
              ds = _this.getReaderData(resultData);
            } else if (resultData instanceof Array) {
              ds = resultData;
            } else if (resultData.rows instanceof Array) {
              ds = resultData.rows;
            }

            if (remotePaging) {
              _this.setState({
                gridData: ds,
                pagination: _extends(_extends({}, pagination), {
                  total: resultData.records
                })
              });
            } else {
              var current = pagination.current,
                  pageSize = pagination.pageSize;
              _this.data = ds;

              var gridData = _this.data.slice((current - 1) * pageSize, current * pageSize);

              _this.setState({
                gridData: gridData,
                pagination: _extends(_extends({}, pagination), {
                  total: ds.length
                })
              });
            }

            if (afterLoaded && afterLoaded instanceof Function) {
              afterLoaded(ds);
            }
          }
        })["finally"](function () {
          _this.loaded = true;

          _this.setState({
            loading: false
          }, _this.onResize);
        });
      }
    };

    _this.onPageChange = function (current, pageSize) {
      var pagination = _this.state.pagination;
      var remotePaging = _this.props.remotePaging;

      _this.setState({
        pagination: _extends(_extends({}, pagination), {
          current: current,
          pageSize: pageSize
        })
      }, function () {
        if (remotePaging) {
          _this.loaded = false;

          _this.getData();
        } else {
          var newData = _this.getLocalFilterData();

          var gridData = newData.slice((current - 1) * pageSize, current * pageSize);

          _this.setState({
            gridData: gridData
          });
        }
      });
    };

    _this.afterSelect = function (item, index) {
      var _this$props3 = _this.props,
          afterSelect = _this$props3.afterSelect,
          reader = _this$props3.reader,
          form = _this$props3.form,
          name = _this$props3.name,
          _this$props3$field = _this$props3.field,
          field = _this$props3$field === void 0 ? [] : _this$props3$field;

      _this.setState({
        showGrid: false,
        value: _this.getReader(reader.name, item)
      }, function () {
        var data = _defineProperty({}, name, _this.getReader(reader.name, item));

        var formData = form ? form.getFieldsValue() : {};

        if (reader && reader.field && field.length > 0 && field.length === reader.field.length) {
          field.forEach(function (f, idx) {
            data[f] = _this.getReader(reader.field ? reader.field[idx] : '', item);
          });
        }

        _extends(formData, data);

        if (form) {
          form.setFieldsValue(formData);
        }

        if (afterSelect) {
          afterSelect(item, index);
        }
      });
    };

    _this.onClearValue = function () {
      var _this$props4 = _this.props,
          afterClear = _this$props4.afterClear,
          form = _this$props4.form,
          name = _this$props4.name,
          reader = _this$props4.reader,
          _this$props4$field = _this$props4.field,
          field = _this$props4$field === void 0 ? [] : _this$props4$field;

      _this.setState({
        value: undefined
      }, function () {
        var data = _defineProperty({}, name, null);

        if (reader && reader.field && field.length === reader.field.length) {
          field.forEach(function (f) {
            data[f] = null;
          });
        }

        if (form) {
          form.setFieldsValue(data);
        }

        if (afterClear) {
          afterClear();
        }
      });
    };

    _this.getLocalFilterData = function () {
      var _this$props$searchPro = _this.props.searchProperties,
          searchProperties = _this$props$searchPro === void 0 ? [] : _this$props$searchPro;
      var newData = _this.data;
      var searchValue = _this.quickSearchValue;

      if (searchValue) {
        newData = newData.filter(function (item) {
          var fund = false;

          for (var i = 0; i < searchProperties.length; i += 1) {
            var fieldValue = _this.getReader(searchProperties[i], item);

            if (fieldValue) {
              fund = fieldValue.toLowerCase().indexOf(searchValue.trim().toLowerCase()) !== -1;

              if (fund) {
                break;
              }
            }
          }

          return fund;
        });
      }

      return newData;
    };

    _this.onSearchChange = function (e) {
      _this.quickSearchValue = e.target.value;
    };

    _this.focus = function () {
      if (_this.searchInput && _this.searchInput.input) {
        setCursorPosition(_this.searchInput.input.input, _this.quickSearchValue.length);
      }
    };

    _this.onSearch = function () {
      var pagination = _this.state.pagination;
      var remotePaging = _this.props.remotePaging;

      if (remotePaging) {
        _this.loaded = false;

        _this.setState({
          pagination: _extends(_extends({}, pagination), {
            current: 1
          })
        }, function () {
          _this.focus();

          _this.getData();
        });
      } else {
        var newData = _this.getLocalFilterData();

        _this.setState({
          pagination: _extends(_extends({}, pagination), {
            current: 1,
            total: newData.length
          })
        }, function () {
          var gridData = newData.slice(0, pagination.pageSize);

          _this.setState({
            gridData: gridData
          }, _this.focus);
        });
      }
    };

    _this.initComboGrid = function (ref) {
      if (ref) {
        var width = _this.props.width;
        _this.comboGrid = ref;

        if (width && width > 0) {
          ref.parentNode.style.width = "".concat(width, "px");
        }
      }
    };

    _this.onRowEventChange = function (record, idx) {
      return {
        onClick: function onClick() {
          return _this.afterSelect(record, idx);
        }
      };
    };

    _this.getRowKey = function (item) {
      var rowKey = _this.props.rowKey;
      var key;

      if (typeof rowKey === 'function') {
        key = rowKey(item);
      } else if (typeof rowKey === 'string') {
        key = item[rowKey];
      } else {
        key = item.key;
      }

      if (!key) {
        throw new Error('rowKey');
      }

      return key;
    };

    _this.showTotal = function (total, locale) {
      return formatMsg(locale.total, {
        total: total
      });
    };

    _this.getTableWidth = function () {
      var _this$props5 = _this.props,
          columns = _this$props5.columns,
          _this$props5$width = _this$props5.width,
          width = _this$props5$width === void 0 ? 0 : _this$props5$width;
      var w = 0;
      columns.forEach(function (col) {
        if (col.width && col.width > 0) {
          w += col.width || 0;
        }
      });

      if ((w === 0 || w < width) && _this.select && _this.dataTable) {
        w += width || _this.select.clientWidth || 0;
      }

      return w;
    };

    _this.renderComboGrid = function (locale) {
      var _this$state = _this.state,
          gridData = _this$state.gridData,
          loading = _this$state.loading,
          pagination = _this$state.pagination,
          value = _this$state.value,
          showGrid = _this$state.showGrid;
      var _this$props6 = _this.props,
          allowClear = _this$props6.allowClear,
          disabled = _this$props6.disabled,
          showSearch = _this$props6.showSearch,
          searchPlaceHolder = _this$props6.searchPlaceHolder,
          height = _this$props6.height,
          columns = _this$props6.columns,
          placeholder = _this$props6.placeholder,
          _this$props6$style = _this$props6.style,
          style = _this$props6$style === void 0 ? {} : _this$props6$style,
          className = _this$props6.className;
      var selectRestProps = {
        style: style,
        className: className
      };

      _extends(selectRestProps, {
        value: value
      });

      return React.createElement(Select, _extends({
        ref: function ref(ele) {
          return _this.select = ele;
        },
        placeholder: placeholder,
        onDropdownVisibleChange: _this.showComboGrid,
        open: showGrid,
        allowClear: allowClear,
        onChange: _this.onClearValue,
        disabled: disabled
      }, selectRestProps, {
        dropdownRender: function dropdownRender() {
          return React.createElement("div", {
            className: cls('seid-combo-grid'),
            ref: function ref(_ref3) {
              return _this.initComboGrid(_ref3);
            }
          }, showSearch ? React.createElement("div", {
            className: "action-bar"
          }, React.createElement(Search, {
            ref: function ref(node) {
              return _this.searchInput = node;
            },
            placeholder: searchPlaceHolder,
            onChange: _this.onSearchChange,
            onSearch: _this.onSearch,
            onPressEnter: _this.onSearch
          })) : null, React.createElement(Table, {
            style: {
              wordBreak: 'break-word'
            },
            loading: loading,
            rowKey: function rowKey(record) {
              return _this.getRowKey(record);
            },
            ref: function ref(node) {
              return _this.dataTable = node;
            },
            columns: columns,
            dataSource: gridData,
            scroll: {
              x: _this.getTableWidth(),
              y: height
            },
            size: "middle",
            onRow: function onRow(record, index) {
              return _this.onRowEventChange(record, index);
            },
            pagination: {
              current: pagination.current,
              pageSize: pagination.pageSize,
              total: pagination.total,
              size: 'small',
              onChange: _this.onPageChange,
              showTotal: function showTotal(total) {
                return _this.showTotal(total, locale);
              }
            }
          }));
        }
      }));
    };

    var defaultValue = props.defaultValue,
        value = props.value,
        _props$dataSource = props.dataSource,
        dataSource = _props$dataSource === void 0 ? [] : _props$dataSource;
    var defaultV = value || defaultValue || undefined;
    _this.loaded = false;
    _this.data = _toConsumableArray(dataSource);
    _this.state = {
      value: defaultV,
      loading: false,
      showGrid: false,
      gridData: dataSource,
      pagination: {
        current: 1,
        pageSize: 15,
        total: dataSource.length || 0
      }
    };
    return _this;
  }

  _createClass(ComboGrid, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.hideComboGrid, false);
      var store = this.props.store;

      if (store && store.autoLoad === true) {
        this.getData();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.hideComboGrid);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!isEqual(prevProps.cascadeParams, this.props.cascadeParams) || !isEqual(prevProps.value, this.props.value)) {
        var _this$props7 = this.props,
            defaultValue = _this$props7.defaultValue,
            value = _this$props7.value;
        var defaultV = value || defaultValue || undefined;
        this.setState({
          value: defaultV
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(LocaleReceiver, {
        defaultLocale: defaultLocale,
        componentName: "ComboGrid"
      }, this.renderComboGrid);
    }
  }]);

  return ComboGrid;
}(Component);

ComboGrid.defaultProps = {
  remotePaging: false,
  showPaging: true,
  disabled: false,
  showSearch: true,
  store: null,
  dataSource: [],
  columns: [],
  height: 250,
  allowClear: false,
  placeholder: '',
  searchPlaceHolder: '',
  searchProperties: ['code', 'name'],
  rowKey: 'id',
  name: '',
  field: []
};
ComboGrid.propTypes = {
  cascadeParams: PropTypes.object,
  disabled: PropTypes.bool,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  allowClear: PropTypes.bool,
  classNames: PropTypes.string,
  placeholder: PropTypes.string,
  store: PropTypes.shape({
    type: PropTypes.oneOf(['GET', 'POST']),
    url: PropTypes.string,
    params: PropTypes.object,
    autoLoad: PropTypes.bool
  }),
  reader: PropTypes.shape({
    data: PropTypes.string,
    name: PropTypes.string,
    field: PropTypes.array
  }).isRequired,
  remotePaging: PropTypes.bool,
  showPaging: PropTypes.bool,
  showSearch: PropTypes.bool,
  width: PropTypes.number,
  searchPlaceHolder: PropTypes.string,
  searchProperties: PropTypes.array,
  dataSource: PropTypes.array,
  afterLoaded: PropTypes.func,
  afterSelect: PropTypes.func,
  afterClear: PropTypes.func,
  rowKey: PropTypes.string,
  name: PropTypes.string.isRequired,
  field: PropTypes.array
};
export default ComboGrid;
//# sourceMappingURL=index.js.map
