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

import React from 'react';
import PropTypes from 'prop-types';
import isEqual from 'react-fast-compare';
import cls from 'classnames';
import Select from 'antd/es/select';
import Input from 'antd/es/input';
import List from 'antd/es/list';
import Skeleton from 'antd/es/skeleton';
import Pagination from 'antd/es/pagination';
import ScrollBar from '../scroll-bar';
import { objectAssignAppend, request, setCursorPosition } from '../utils';
var Search = Input.Search;

var ComboList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ComboList, _React$Component);

  function ComboList(props) {
    var _this;

    _classCallCheck(this, ComboList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ComboList).call(this, props));
    _this.loaded = false;
    _this.data = [];
    _this.quickSearchValue = "";

    _this.hideComboList = function (e) {
      if (_this.comboList && !_this.comboList.contains(e.target)) {
        _this.setState({
          showList: false
        });
      }
    };

    _this.showComboList = function (showList) {
      if (showList) {
        var store = _this.props.store;

        if (store) {
          _this.getData();
        }

        _this.setState({
          showList: showList
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
          showPaging = _this$props.showPaging,
          remotePaging = _this$props.remotePaging,
          searchProperties = _this$props.searchProperties;
      var pagination = _this.state.pagination;

      var _ref = store || {},
          params = _ref.params;

      var superParams = _extends({}, params || {});

      if (showPaging && remotePaging) {
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
                listData: ds,
                pagination: _extends(_extends({}, pagination), {
                  total: resultData.records
                })
              });
            } else {
              var current = pagination.current,
                  pageSize = pagination.pageSize;
              _this.data = ds;

              var listData = _this.data.slice((current - 1) * pageSize, current * pageSize);

              _this.setState({
                listData: listData,
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
          });
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

          var listData = newData.slice((current - 1) * pageSize, current * pageSize);

          _this.setState({
            listData: listData
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
        showList: false,
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

        if (afterClear && afterClear instanceof Function) {
          afterClear();
        }
      });
    };

    _this.getLocalFilterData = function () {
      var _this$props5 = _this.props,
          reader = _this$props5.reader,
          name = _this$props5.name;
      var newData = _this.data;
      var searchValue = _this.quickSearchValue;

      if (searchValue) {
        var filterName = name;

        if (reader && reader.name) {
          filterName = reader.name;
        }

        newData = newData.filter(function (item) {
          var fieldValue = _this.getReader(filterName, item);

          if (fieldValue) {
            return fieldValue.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
          }

          return false;
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
          var listData = newData.slice(0, pagination.pageSize);

          _this.setState({
            listData: listData
          }, _this.focus);
        });
      }
    };

    _this.initComboList = function (ref) {
      if (ref) {
        var width = _this.props.width;
        _this.comboList = ref;

        if (width && width > 0) {
          ref.parentNode.style.width = "".concat(width, "px");
        }
      }
    };

    _this.getRowKey = function (item, index) {
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
        key = "list-item-".concat(index);
      }

      return key;
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
      showList: false,
      listData: dataSource,
      pagination: {
        current: 1,
        pageSize: 15,
        total: dataSource.length || 0
      }
    };
    return _this;
  }

  _createClass(ComboList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.hideComboList, false);
      var store = this.props.store;

      if (store && store.autoLoad === true) {
        this.getData();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.hideComboList);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!isEqual(prevProps.cascadeParams, this.props.cascadeParams) || !isEqual(prevProps.value, this.props.value)) {
        var _this$props6 = this.props,
            defaultValue = _this$props6.defaultValue,
            value = _this$props6.value;
        var defaultV = value || defaultValue || undefined;
        this.setState({
          value: defaultV
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          listData = _this$state.listData,
          loading = _this$state.loading,
          pagination = _this$state.pagination,
          value = _this$state.value,
          showList = _this$state.showList;
      var _this$props7 = this.props,
          listProps = _this$props7.listProps,
          reader = _this$props7.reader,
          showPaging = _this$props7.showPaging,
          allowClear = _this$props7.allowClear,
          disabled = _this$props7.disabled,
          showSearch = _this$props7.showSearch,
          searchPlaceHolder = _this$props7.searchPlaceHolder,
          placeholder = _this$props7.placeholder,
          _this$props7$style = _this$props7.style,
          style = _this$props7$style === void 0 ? {} : _this$props7$style,
          className = _this$props7.className;
      var selectRestProps = {
        style: style,
        className: className
      };

      _extends(selectRestProps, {
        value: value
      });

      return React.createElement(Select, _extends({
        ref: function ref(ele) {
          return _this2.select = ele;
        },
        onDropdownVisibleChange: this.showComboList,
        open: showList,
        allowClear: allowClear,
        placeholder: placeholder,
        onChange: this.onClearValue,
        disabled: disabled
      }, selectRestProps, {
        getPopupContainer: function getPopupContainer(triggerNode) {
          return triggerNode.parentNode;
        },
        dropdownRender: function dropdownRender() {
          return React.createElement("div", {
            className: cls('seid-combo-list'),
            ref: function ref(_ref3) {
              return _this2.initComboList(_ref3);
            }
          }, showSearch ? React.createElement("div", {
            className: "action-bar"
          }, React.createElement(Search, {
            ref: function ref(node) {
              return _this2.searchInput = node;
            },
            placeholder: searchPlaceHolder,
            onChange: _this2.onSearchChange,
            onSearch: _this2.onSearch,
            onPressEnter: _this2.onSearch
          })) : null, React.createElement("div", {
            className: "list-body"
          }, React.createElement(ScrollBar, null, React.createElement(List, _extends({
            itemLayout: "horizontal",
            dataSource: listData,
            loading: loading,
            renderItem: function renderItem(item, index) {
              return React.createElement(List.Item, {
                key: _this2.getRowKey(item, index),
                onClick: function onClick() {
                  return _this2.afterSelect(item, index);
                },
                className: cls(_defineProperty({}, cls('row-selected'), _this2.getReader(reader.name, item) === value))
              }, React.createElement(Skeleton, {
                loading: loading,
                active: true
              }, React.createElement(List.Item.Meta, {
                title: _this2.getReader(reader.name, item),
                description: reader.description ? _this2.getReader(reader.description, item) : ''
              })));
            }
          }, listProps)))), React.createElement("div", {
            className: "list-page-bar"
          }, showPaging ? React.createElement(Pagination, _extends({
            simple: true,
            onChange: _this2.onPageChange
          }, pagination)) : null));
        }
      }));
    }
  }]);

  return ComboList;
}(React.Component);

ComboList.defaultProps = {
  remotePaging: false,
  showPaging: true,
  disabled: false,
  showSearch: true,
  store: null,
  dataSource: [],
  listProps: {
    itemLayout: 'horizontal'
  },
  allowClear: false,
  placeholder: '',
  searchPlaceHolder: '',
  searchProperties: ['code', 'name'],
  rowKey: 'id',
  name: '',
  field: []
};
ComboList.propTypes = {
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
    field: PropTypes.array,
    description: PropTypes.string
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
  listProps: PropTypes.shape({
    itemLayout: PropTypes.oneOf(['vertical', 'horizontal']),
    renderItem: PropTypes.func
  }),
  rowKey: PropTypes.string,
  name: PropTypes.string.isRequired,
  field: PropTypes.array
};
export default ComboList;
//# sourceMappingURL=index.js.map
