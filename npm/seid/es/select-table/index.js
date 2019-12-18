function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from 'react';
import { parse } from 'qs';
import uid from 'lodash/uniqueId';
import get from 'lodash/get';
import isUndefined from 'lodash/isUndefined';
import isEqual from 'lodash/isEqual';
import forEach from 'lodash/forEach';
import Popover from 'antd/es/popover';
import Select from 'antd/es/select';
import message from 'antd/es/message';
import InputSearch from 'antd/es/input/Search';
import cls from 'classnames';
import ExtTable from '../ext-table';
import ExtIcon from '../ext-icon';
import { request } from '../utils';
import SeidLocaleReceiver from '../seid-locale-receiver';
import defaultLocale from './locale';

var getObjByList = function getObjByList(obj) {
  var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return list.map(function (i) {
    return obj[i];
  });
};

var parseUrl = function parseUrl(str) {
  if (str.includes('?')) {
    var _str$split = str.split('?'),
        _str$split2 = _slicedToArray(_str$split, 2),
        url = _str$split2[0],
        paramStr = _str$split2[1];

    var params = parse(paramStr);
    return {
      params: params,
      url: url
    };
  }

  return {
    url: str,
    params: {}
  };
};

var SelectTable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectTable, _React$Component);

  function SelectTable(props) {
    var _this;

    _classCallCheck(this, SelectTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectTable).call(this, props)); // 初始化col

    _this.initColumns = function () {
      var _this$props = _this.props,
          columns = _this$props.columns,
          multi = _this$props.multi;
      var otherColumns = columns.filter(function (value) {
        return !value.hidden;
      }).sort(function (a, b) {
        return a.sort - b.sort;
      }).map(function (i) {
        return {
          dataIndex: i.code,
          title: i.name,
          align: 'center',
          render: i.render ? i.render : function (r) {
            return _this.setDefaultBox(r, i.width);
          }
        };
      });

      if (columns && columns.length) {
        _this.finalColumns = multi ? [{
          dataIndex: 'index',
          title: get(_this.locale, 'indexTitle'),
          align: 'center',
          width: 60,
          render: function render(_, __, index) {
            return React.createElement("div", {
              style: {
                width: 60
              }
            }, index + 1);
          }
        }] : [{
          dataIndex: 'index',
          title: get(_this.locale, 'indexTitle'),
          align: 'center',
          width: 60,
          render: function render(_, __, index) {
            return React.createElement("div", {
              style: {
                width: 60
              }
            }, index + 1);
          }
        }, {
          dataIndex: 'choose',
          title: get(_this.locale, 'selectTitle'),
          align: 'center',
          width: 60,
          render: function render(_, record) {
            return React.createElement("div", {
              title: get(_this.locale, 'selectTitle'),
              style: {
                cursor: 'pointer'
              },
              onClick: function onClick() {
                return _this.handleDoubleClickRow(record);
              }
            }, React.createElement(ExtIcon, {
              tooltip: {
                title: get(_this.locale, 'selectTitle')
              },
              type: "check",
              antd: true,
              style: {
                color: '#00F60A'
              }
            }));
          }
        }];
        _this.finalColumns = _this.finalColumns.concat(otherColumns);
      }
    };

    _this.setDefaultBox = function (text, width) {
      return React.createElement("div", {
        title: text,
        className: "seid-col-content",
        style: {
          width: width || '100%'
        }
      }, text);
    };

    _this.callback = function () {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var totalSize = arguments.length > 1 ? arguments[1] : undefined;
      var pageNum = arguments.length > 2 ? arguments[2] : undefined;
      var pageSize = arguments.length > 3 ? arguments[3] : undefined;
      var _this$props$values = _this.props.values,
          values = _this$props$values === void 0 ? [] : _this$props$values;

      _this.setState({
        loading: false,
        data: values.concat(data),
        totalSize: totalSize,
        currentPage: pageNum,
        pageSize: pageSize
      });
    };

    _this.handleSearch = function () {
      var searchContent = _this.state.searchContent;
      var _this$props$unionKey = _this.props.unionKey,
          unionKey = _this$props$unionKey === void 0 ? 'code' : _this$props$unionKey;
      var _this$props2 = _this.props,
          dataSourceUrl = _this$props2.dataSourceUrl,
          _this$props2$values = _this$props2.values,
          values = _this$props2$values === void 0 ? [] : _this$props2$values,
          _this$props2$columns = _this$props2.columns,
          columns = _this$props2$columns === void 0 ? [] : _this$props2$columns,
          _this$props2$searchCo = _this$props2.searchColumn,
          searchColumn = _this$props2$searchCo === void 0 ? unionKey : _this$props2$searchCo,
          _this$props2$requestM = _this$props2.requestMethod,
          requestMethod = _this$props2$requestM === void 0 ? 'get' : _this$props2$requestM;

      if (dataSourceUrl) {
        _this.setState({
          loading: true
        });

        var _parseUrl = parseUrl(dataSourceUrl),
            url = _parseUrl.url,
            params = _parseUrl.params;

        if (searchColumn) {
          var payload = _extends(_extends(_extends({}, params), _this.paramValue), {
            pageNum: 1,
            pageSize: 5
          });

          if (Array.isArray(searchColumn)) {
            searchColumn.forEach(function (key) {
              payload[key] = searchContent;
            });
          } else {
            payload[searchColumn] = searchContent;
          } // 请求数据


          _this.requestData(url, payload, requestMethod);
        }
      } else if (searchContent && searchContent !== '') {
        var vlist = columns.filter(function (i) {
          return !i.hidden;
        }).map(function (i) {
          return i.code;
        });

        _this.setState({
          data: values.filter(function (v) {
            return JSON.stringify(getObjByList(v, vlist)).includes(searchContent);
          })
        });
      } else {
        _this.setState({
          data: _toConsumableArray(values)
        });
      }
    };

    _this.handleTableChange = function (pagination) {
      var _this$props$unionKey2 = _this.props.unionKey,
          unionKey = _this$props$unionKey2 === void 0 ? 'code' : _this$props$unionKey2;
      var _this$props3 = _this.props,
          dataSourceUrl = _this$props3.dataSourceUrl,
          _this$props3$searchCo = _this$props3.searchColumn,
          searchColumn = _this$props3$searchCo === void 0 ? unionKey : _this$props3$searchCo,
          _this$props3$requestM = _this$props3.requestMethod,
          requestMethod = _this$props3$requestM === void 0 ? 'get' : _this$props3$requestM;
      var searchContent = _this.state.searchContent;
      var current = pagination.current,
          pageSize = pagination.pageSize;

      if (dataSourceUrl) {
        _this.setState({
          loading: true
        });

        var _parseUrl2 = parseUrl(dataSourceUrl),
            url = _parseUrl2.url,
            p = _parseUrl2.params;

        if (searchColumn && searchContent && searchContent !== '') {
          var payload = _extends(_extends(_extends({}, p), _this.paramValue), {
            pageNum: current,
            pageSize: pageSize
          });

          if (Array.isArray(searchColumn)) {
            searchColumn.forEach(function (key) {
              payload[key] = searchContent;
            });
          } else {
            payload[searchColumn] = searchContent;
          } // 请求数据


          _this.requestData(url, payload, requestMethod);
        } else {
          var _payload = _extends(_extends(_extends({}, p), _this.paramValue), {
            pageNum: current,
            pageSize: pageSize
          }); // 请求数据


          _this.requestData(url, _payload, requestMethod);
        }
      }
    }; // 单选模式下选择回调onSelect, onChange


    _this.handleDoubleClickRow = function (record) {
      var _this$props4 = _this.props,
          _this$props4$showKey = _this$props4.showKey,
          showKey = _this$props4$showKey === void 0 ? 'value' : _this$props4$showKey,
          returnKey = _this$props4.returnKey,
          onSelect = _this$props4.onSelect,
          onChange = _this$props4.onChange,
          _this$props4$map = _this$props4.map,
          map = _this$props4$map === void 0 ? [] : _this$props4$map,
          form = _this$props4.form,
          elementCode = _this$props4.elementCode;

      if (onSelect) {
        onSelect(record);
      }

      var payload = {};
      map.forEach(function (m) {
        payload[m.businessCode] = get(record, m.apiCode) || undefined;
      });

      if (elementCode) {
        payload[elementCode] = _extends({
          value: get(record, showKey)
        }, record);
      } else if (onChange && !elementCode) {
        if (returnKey) {
          onChange(_extends({
            value: get(record, returnKey)
          }, record));
        } else {
          onChange(_extends({
            value: get(record, showKey)
          }, record));
        }
      }

      if (form && Object.keys(payload).length) {
        form.setFieldsValue(payload);
      }

      _this.setState({
        inputContent: get(record, showKey),
        visible: false,
        searchContent: undefined
      });
    }; // 光标选中后的回调，执行第一次初始化查询


    _this.handleFocus = function () {
      var _this$props5 = _this.props,
          dataSourceUrl = _this$props5.dataSourceUrl,
          parameter = _this$props5.parameter,
          form = _this$props5.form,
          _this$props5$requestM = _this$props5.requestMethod,
          requestMethod = _this$props5$requestM === void 0 ? 'get' : _this$props5$requestM;
      var formValue = form ? form.getFieldsValue() : {};
      var flag = true;
      var paramValue = {};
      var validateKeys = []; // 匹配参数名

      forEach(parameter, function (v, k) {
        if (v && v.match && v.match(/\${.+}/)) {
          var key = v.replace('${', '').replace('}', '');
          var val = get(formValue, key);

          if (isUndefined(val) || val === null) {
            var uniqueKey = key.split('.')[0];
            validateKeys.push(uniqueKey);
            flag = false;
          } else {
            paramValue[k] = val;
          }
        } else {
          paramValue[k] = v;
        }
      });
      _this.paramValue = paramValue;

      if (!flag) {
        message.warning(get(_this.locale, 'preSegmentWarning'));

        if (form) {
          form.validateFieldsAndScroll(validateKeys, function () {});
        }

        return;
      }

      if (dataSourceUrl) {
        _this.setState({
          loading: true,
          searchContent: undefined
        });

        var _parseUrl3 = parseUrl(dataSourceUrl),
            url = _parseUrl3.url,
            params = _parseUrl3.params;

        var payload = _extends(_extends(_extends({}, params), paramValue), {
          pageNum: 1,
          pageSize: 5
        }); // 请求数据


        _this.requestData(url, payload, requestMethod);
      }
    };

    _this.handleChangeInputContent = function (v) {
      if (Array.isArray(v)) {
        if (!v.length) {
          var _this$props6 = _this.props,
              onSelect = _this$props6.onSelect,
              onChange = _this$props6.onChange;

          if (onSelect) {
            onSelect({});
          }

          if (onChange) {
            onChange(undefined);
          }
        }

        return;
      }

      if (isUndefined(v) || v === '') {
        // clear
        var _this$props7 = _this.props,
            _onSelect = _this$props7.onSelect,
            _onChange = _this$props7.onChange,
            _this$props7$map = _this$props7.map,
            map = _this$props7$map === void 0 ? [] : _this$props7$map,
            form = _this$props7.form,
            elementCode = _this$props7.elementCode;

        if (_onSelect) {
          _onSelect({});
        }

        if (_onChange && !elementCode) {
          _onChange(undefined);
        }

        var payload = {};
        map.forEach(function (m) {
          payload[m.businessCode] = undefined;
        });

        if (elementCode) {
          payload[elementCode] = undefined;
        }

        if (form && Object.keys(payload).length) {
          form.setFieldsValue(payload);
        }

        _this.setState({
          inputContent: undefined,
          visible: false,
          searchContent: undefined
        });
      }
    }; // 多选模式下选择回调onSelect, onChange


    _this.onSelectChange = function (record, selected) {
      var _this$props8 = _this.props,
          _this$props8$value = _this$props8.value,
          value = _this$props8$value === void 0 ? [] : _this$props8$value,
          onChange = _this$props8.onChange,
          onSelect = _this$props8.onSelect,
          rowKey = _this$props8.rowKey;

      if (Array.isArray(value)) {
        if (selected) {
          value.push(record);
        } else {
          value.forEach(function (v, index) {
            if (v[rowKey] === record[rowKey]) {
              value.splice(index, 1);
            }
          });
        }
      }

      if (onSelect) {
        onSelect(value);
      }

      if (onChange) {
        onChange(value);
      }
    };

    _this.onSelectAllChange = function (selected, _, changeRows) {
      var _this$props9 = _this.props,
          _this$props9$value = _this$props9.value,
          value = _this$props9$value === void 0 ? [] : _this$props9$value,
          onChange = _this$props9.onChange,
          onSelect = _this$props9.onSelect,
          rowKey = _this$props9.rowKey;
      var params = [];

      if (selected) {
        params = value.concat(changeRows);
      } else {
        value.forEach(function (v) {
          if (!changeRows.find(function (c) {
            return c[rowKey] === v[rowKey];
          })) {
            params.push(_extends({}, v));
          }
        });
      }

      if (onSelect) {
        onSelect(params);
      }

      if (onChange) {
        onChange(params);
      }
    };

    _this.getRowKey = function (r, rowkey) {
      if (rowkey && typeof rowkey === 'function') {
        return rowkey(r);
      }

      return rowkey;
    };

    _this.getTableRowKey = function (rowkey) {
      if (rowkey && typeof rowkey === 'string' && rowkey.indexOf('.') > -1) {
        return function (r) {
          return get(r, rowkey);
        };
      }

      return rowkey;
    }; // 请求数据


    _this.requestData = function (url, payload, requestMethod) {
      var returnPromise = request({
        method: requestMethod,
        url: url,
        params: payload
      });

      if (returnPromise) {
        returnPromise.then(function (res) {
          if (res.success && res.data && (res.data.content || res.data.companyCode)) {
            // 特殊情况组织树
            var obj = res.data.content;

            _this.callback(obj, res.data.totalElements, payload.pageNum, payload.pageSize);
          } else {
            message.error("".concat(get(_this.locale, 'requestError')).concat(res.message));
          }
        })["catch"](function (err) {
          message.error("".concat(get(_this.locale, 'requestError')).concat(err));

          _this.setState({
            loading: false
          });
        });
      }
    };

    _this.renderCom = function (locale) {
      _this.locale = locale;
      var _this$props10 = _this.props,
          rowKey = _this$props10.rowKey,
          returnKey = _this$props10.returnKey,
          value = _this$props10.value,
          _this$props10$values = _this$props10.values,
          values = _this$props10$values === void 0 ? [] : _this$props10$values,
          _this$props10$showKey = _this$props10.showKey,
          showKey = _this$props10$showKey === void 0 ? 'value' : _this$props10$showKey,
          multi = _this$props10.multi,
          content = _this$props10.content,
          style = _this$props10.style,
          className = _this$props10.className,
          disabled = _this$props10.disabled,
          onBlur = _this$props10.onBlur,
          autoFocus = _this$props10.autoFocus,
          width = _this$props10.width,
          placeholder = _this$props10.placeholder;
      var _this$state = _this.state,
          loading = _this$state.loading,
          currentPage = _this$state.currentPage,
          _this$state$pageSize = _this$state.pageSize,
          pageSize = _this$state$pageSize === void 0 ? 5 : _this$state$pageSize,
          _this$state$inputCont = _this$state.inputContent,
          inputContent = _this$state$inputCont === void 0 ? multi ? (value || []).map(function (v) {
        return get(v, showKey);
      }) : get(value, showKey) || value : _this$state$inputCont,
          _this$state$data = _this$state.data,
          data = _this$state$data === void 0 ? values : _this$state$data,
          searchContent = _this$state.searchContent,
          visible = _this$state.visible,
          totalSize = _this$state.totalSize;
      return React.createElement("div", {
        id: _this.elementId,
        style: _extends(_extends({}, style), {
          width: width
        }),
        className: cls('seid-scroll-select', className)
      }, React.createElement(Popover, {
        getPopupContainer: function getPopupContainer(trigger) {
          return document.getElementById(_this.elementId) || trigger;
        },
        placement: "bottom",
        trigger: "click",
        visible: visible && !disabled,
        onVisibleChange: function onVisibleChange(v) {
          if (v) {
            _this.handleFocus();
          }

          if (!v && onBlur) {
            onBlur();
          }

          _this.setState({
            visible: v
          });
        },
        content: React.createElement("div", {
          className: "seid-data-container"
        }, React.createElement(InputSearch, {
          value: searchContent,
          onPressEnter: _this.handleSearch,
          onSearch: _this.handleSearch,
          className: "input",
          onChange: function onChange(e) {
            return _this.setState({
              searchContent: e.target.value
            });
          }
        }), React.createElement(ExtTable, {
          rowSelection: multi,
          scroll: {
            x: 400,
            y: 260
          },
          bordered: true,
          size: "small",
          loading: loading,
          rowKey: _this.getTableRowKey(rowKey || returnKey || showKey),
          onChange: _this.handleTableChange,
          data: {
            list: data,
            pagination: {
              current: currentPage,
              pageSize: pageSize,
              total: totalSize
            }
          },
          columns: _this.finalColumns,
          selectedRows: multi ? value || [] : [],
          onRow: function onRow(record) {
            if (multi) {
              return {};
            }

            return {
              onDoubleClick: function onDoubleClick() {
                return _this.handleDoubleClickRow(record);
              }
            };
          }
        }))
      }, content || React.createElement(Select, {
        mode: multi ? 'multiple' : undefined,
        autoFocus: autoFocus,
        open: false,
        showArrow: false,
        allowClear: true,
        disabled: disabled,
        placeholder: placeholder,
        value: inputContent,
        onChange: _this.handleChangeInputContent,
        onDropdownVisibleChange: function onDropdownVisibleChange(v) {
          if (v) {
            _this.handleFocus();
          }

          if (!v && onBlur) {
            onBlur();
          }

          _this.setState({
            visible: v
          });
        }
      }, Array.isArray(data) && data.map(function (v) {
        return React.createElement(Select.Option, {
          key: _this.getRowKey(v, rowKey),
          value: _this.getRowKey(v, rowKey),
          title: _this.getRowKey(v, rowKey)
        }, _this.getRowKey(v, rowKey));
      }))));
    };

    _this.state = {
      visible: false,
      loading: false
    }; // 关联字段值

    _this.paramValue = {};
    _this.finalColumns = [];
    _this.elementId = "".concat(uid(), "-scrollWraper");
    return _this;
  }

  _createClass(SelectTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initColumns();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var inputContent = this.state.inputContent;
      var value = this.props.value;

      if (inputContent && isUndefined(nextState.inputContent) || value && isUndefined(nextProps.value)) {
        this.handleChangeInputContent(undefined);
      }

      return true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(nextProps) {
      var columns = this.props.columns;

      if (columns && columns.length && !isEqual(nextProps.columns, columns)) {
        this.initColumns();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(SeidLocaleReceiver, {
        defaultLocale: defaultLocale,
        componentName: "SelectTable"
      }, this.renderCom);
    }
  }]);

  return SelectTable;
}(React.Component);

SelectTable.defaultProps = {
  multi: false,
  showKey: 'name',
  rowKey: 'key'
};

SelectTable.getDerivedStateFromProps = function (props, state) {
  var inputContent = state.inputContent;
  var value = props.value,
      showKey = props.showKey,
      multi = props.multi;

  if (inputContent && !props.value) {
    return {
      inputContent: undefined
    };
  }

  if (!multi && inputContent !== (get(value, showKey) || value)) {
    return {
      inputContent: get(value, showKey) || value
    };
  }

  if (multi && Array.isArray(value)) {
    var valueList = (value || []).map(function (v) {
      return get(v, showKey);
    });

    if (inputContent && inputContent.length !== valueList.length) {
      return {
        inputContent: valueList
      };
    }
  }

  return null;
};

export default SelectTable;
//# sourceMappingURL=index.js.map
