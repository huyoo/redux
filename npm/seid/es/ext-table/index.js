function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/* eslint-disable */


import React, { Component } from 'react';
import Table from 'antd/es/table';
import { Resizable } from 'react-resizable';
import isString from 'lodash/isString';
import isNumber from 'lodash/isNumber';
import isBoolean from 'lodash/isBoolean';
import debounce from 'lodash/debounce';
import get from 'lodash/get';
import cls from 'classnames';
import PerfectScrollbar from 'perfect-scrollbar';
import Icon from 'antd/es/icon';
import SeidLocaleReceiver from '../seid-locale-receiver';
import Tool from './Tool';
import ToolBar from '../tool-bar';
import { compare } from '../_util/utils';
import defaultLocale from './locale';
import { formatMsg } from '../utils';

function ResizeableTitle(props) {
  var _this = this;

  var columnTool = this.props.columnTool;
  var _this$state = this.state,
      _this$state$columns = _this$state.columns,
      columns = _this$state$columns === void 0 ? [] : _this$state$columns,
      _this$state$selectedC = _this$state.selectedCols,
      selectedCols = _this$state$selectedC === void 0 ? [] : _this$state$selectedC,
      _this$state$sortConfi = _this$state.sortConfigs,
      sortConfigs = _this$state$sortConfi === void 0 ? [] : _this$state$sortConfi;

  var onResize = props.onResize,
      width = props.width,
      children = props.children,
      dataIndex = props.dataIndex,
      restProps = __rest(props, ["onResize", "width", "children", "dataIndex"]);

  if (props.className === 'ant-table-selection-column' || !columnTool) {
    if (!width) {
      return React.createElement("th", restProps, children);
    }

    return React.createElement(Resizable, {
      width: width,
      height: 0,
      onResize: onResize,
      draggableOpts: {
        enableUserSelectHack: false
      }
    }, React.createElement("th", restProps, children));
  }

  if (!width) {
    var className = restProps.className;
    return React.createElement("th", _extends({}, restProps, {
      className: cls(className, 'header-cell-has-tool')
    }), children, React.createElement(Tool, {
      locale: this.locale,
      dataIndex: dataIndex,
      sortConfigs: sortConfigs,
      onChangeSort: function onChangeSort(sc) {
        return _this.setState({
          sortConfigs: sc
        });
      },
      onChangeCols: function onChangeCols(cols) {
        return _this.setState({
          selectedCols: cols
        });
      },
      columns: columns,
      selectedCols: selectedCols
    }, React.createElement(Icon, {
      type: "down",
      className: "seid-icon"
    })));
  }

  return React.createElement(Resizable, {
    width: width,
    height: 0,
    onResize: onResize,
    draggableOpts: {
      enableUserSelectHack: false
    }
  }, React.createElement("th", restProps, children, React.createElement(Tool, {
    locale: this.locale,
    dataIndex: dataIndex,
    sortConfigs: sortConfigs,
    onChangeSort: function onChangeSort(sc) {
      return _this.setState({
        sortConfigs: sc
      });
    },
    onChangeCols: function onChangeCols(cols) {
      return _this.setState({
        selectedCols: cols
      });
    },
    columns: columns,
    selectedCols: selectedCols
  }, React.createElement(Icon, {
    type: "down",
    className: "seid-icon"
  }))));
}

var getRowKey = function getRowKey(row, index, rowKey) {
  if (!rowKey) {
    throw new Error('请指定rowKey!');
  }

  if (isString(rowKey)) {
    return get(row, rowKey);
  }

  return rowKey(row, index);
};

var processColumns = function processColumns(wrapperWidth, nextProps, prevState) {
  var _nextProps$scroll = nextProps.scroll,
      scroll = _nextProps$scroll === void 0 ? {} : _nextProps$scroll,
      _nextProps$columns = nextProps.columns,
      columns = _nextProps$columns === void 0 ? [] : _nextProps$columns,
      rowSelection = nextProps.rowSelection,
      align = nextProps.align,
      ellipsis = nextProps.ellipsis;
  var calcWidth = prevState.calcWidth;
  var x = scroll.x;
  var width = wrapperWidth;

  if (isNumber(x) && x > width) {
    width = x;
  } else if (x && isString(x)) {
    var temp = parseFloat(x.replace('px', ''));

    if (isNumber(temp) && temp > width) {
      width = temp;
    }
  }

  var totalWidth = columns.map(function (c) {
    if (isString(c.width)) {
      return parseFloat(c.width.replace('px', ''));
    }

    return c.width;
  }).reduce(function (total, col) {
    return parseInt("".concat(total || 0), 10) + parseInt("".concat(col || 0), 10);
  }) || 0;
  var eachWidth = 0;

  if (rowSelection !== false) {
    width -= 60;
  }

  if (totalWidth < width) {
    var noWidthCols = columns.filter(function (col) {
      return !col.width;
    });
    eachWidth = parseInt("".concat((width - totalWidth) / noWidthCols.length), 10);
  }

  if (eachWidth < 100) {
    eachWidth = 100;
  }

  if (calcWidth === eachWidth) return null;
  var cols = columns.map(function (col) {
    return _extends(_extends({}, col), {
      align: col.align || align,
      ellipsis: col.ellipsis === undefined ? ellipsis : col.ellipsis,
      width: col.width || eachWidth,
      originalWidth: col.width || eachWidth
    });
  });
  return {
    columns: cols,
    calcWidth: eachWidth
  };
}; // 获取表格元素距window上边缘的距离


var getElementToPageTop = function getElementToPageTop(el) {
  if (el && el.offsetParent) {
    return getElementToPageTop(el.offsetParent) + el.offsetTop;
  }

  return el.offsetTop;
}; // 获取表格元素所有父节点下边距总和


var getElementBottom = function getElementBottom(el) {
  if (el && el.parentElement) {
    return getElementBottom(el.parentElement) + parseInt(getComputedStyle(el.parentElement).paddingBottom) + parseInt(getComputedStyle(el.parentElement).marginBottom);
  }

  return 0;
};

var ExtTable =
/*#__PURE__*/
function (_Component) {
  _inherits(ExtTable, _Component);

  function ExtTable(props) {
    var _this2;

    _classCallCheck(this, ExtTable);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ExtTable).call(this, props));
    _this2.components = {
      header: {
        cell: ResizeableTitle.bind(_assertThisInitialized(_this2))
      }
    };
    _this2.ps = null; // 更新表格包裹元素的高度

    _this2.updateSize = function () {
      if (_this2.container) {
        var offsetBottom = _this2.props.offsetBottom;
        var windowHeight = document.body.clientHeight;
        var top = getElementToPageTop(_this2.container);
        var bottom = getElementBottom(_this2.container);

        var _ref = _this2.toolBar ? _this2.toolBar.getBoundingClientRect() : {
          height: 0
        },
            toolBarHeight = _ref.height;

        var height = windowHeight - top - toolBarHeight - bottom - offsetBottom - 4;
        var tableHeight = height < 96 ? 96 : height;

        _this2.setState({
          tableWrapperHeight: tableHeight
        }, function () {
          if (_this2.container) {
            var tableContent = _this2.container.querySelector('.ant-table-body');

            if (tableContent) {
              if (_this2.ps) {
                _this2.ps.destroy();
              }

              _this2.ps = new PerfectScrollbar(tableContent);
              setTimeout(function () {
                if (_this2.ps) {
                  _this2.ps.update();
                }
              }, 0);
            }
          }
        });
      }
    };

    _this2.handleResize = function (index) {
      return function (_, _ref2) {
        var size = _ref2.size;
        var cols = _this2.state.columns;

        if (size.width > cols[index].originalWidth) {
          var nextColumns = _toConsumableArray(cols);

          nextColumns[index] = _extends(_extends({}, nextColumns[index]), {
            width: size.width > nextColumns[index].originalWidth ? size.width : nextColumns[index].originalWidth
          });

          _this2.setState({
            columns: nextColumns
          });
        }
      };
    };

    _this2.getToolBar = function () {
      var toolBar = _this2.props.toolBar;

      if (!toolBar) {
        return null;
      }

      return React.createElement("div", {
        style: {
          border: '1px solid transparent'
        },
        ref: function ref(_ref3) {
          _this2.toolBar = _ref3;
        }
      }, React.createElement(ToolBar, toolBar));
    };

    _this2.handleSelectChange = function (selectedRowKeys, selectedRows) {
      var rowSelection = _this2.props.rowSelection;

      if (rowSelection && !isBoolean(rowSelection) && rowSelection.onChange) {
        rowSelection.onChange(selectedRowKeys, selectedRows);
      }
    };

    _this2.handleSelectRows = function (record, selected, sRows, nativeEvent) {
      var _this2$props = _this2.props,
          rowSelection = _this2$props.rowSelection,
          rowKey = _this2$props.rowKey,
          onSelectRows = _this2$props.onSelectRows;

      if (rowSelection && !isBoolean(rowSelection) && rowSelection.onSelect) {
        rowSelection.onSelect(record, selected, sRows, nativeEvent);
      }

      var _this2$state = _this2.state,
          selectedRowKeys = _this2$state.selectedRowKeys,
          selectedRows = _this2$state.selectedRows;

      var rowKeys = _toConsumableArray(selectedRowKeys);

      var rows = _toConsumableArray(selectedRows);

      var changeKey = getRowKey(record, 0, rowKey);

      if (selected) {
        rowKeys.push(changeKey);
        rows.push(_extends({}, record));
      } else {
        rowKeys = selectedRowKeys.filter(function (key) {
          return key !== changeKey;
        });
        rows = selectedRows.filter(function (record) {
          return getRowKey(record, 1, rowKey) !== changeKey;
        });
      }

      _this2.setState({
        selectedRowKeys: rowKeys
      }, function () {
        if (onSelectRows) {
          onSelectRows(rowKeys, rows);
        }
      });
    };

    _this2.handleSelectAllRows = function (selected, sRows, changeRows) {
      var _this2$props2 = _this2.props,
          rowSelection = _this2$props2.rowSelection,
          rowKey = _this2$props2.rowKey,
          onSelectRows = _this2$props2.onSelectRows;

      if (rowSelection && !isBoolean(rowSelection) && rowSelection.onSelectAll) {
        rowSelection.onSelectAll(selected, sRows, changeRows);
      }

      var _this2$state2 = _this2.state,
          selectedRowKeys = _this2$state2.selectedRowKeys,
          selectedRows = _this2$state2.selectedRows;
      var rowKeys = [];
      var rows = [];
      var changeRowKeys = changeRows.map(function (row, index) {
        return getRowKey(row, index, rowKey);
      });

      if (selected) {
        rowKeys = selectedRowKeys.concat(changeRowKeys);
        rows = selectedRows.concat(changeRows);
      } else {
        selectedRowKeys.forEach(function (key, index) {
          if (!changeRowKeys.includes(key)) {
            rowKeys.push(key);
            rows.push(changeRows[index]);
          }
        });
      }

      _this2.setState({
        selectedRowKeys: rowKeys
      }, function () {
        if (onSelectRows) {
          onSelectRows(rowKeys, rows);
        }
      });
    };

    _this2.onTableRow = function (reord, index) {
      var _this2$props3 = _this2.props,
          onRow = _this2$props3.onRow,
          rowKey = _this2$props3.rowKey;
      var selectedRowKeys = _this2.state.selectedRowKeys;
      var key = getRowKey(reord, index, rowKey);
      var hasSelected = selectedRowKeys.includes(key);

      if (onRow) {
        var listeners = onRow(reord, index);
        var _onClick = listeners.onClick;
        return _extends(_extends({}, listeners || {}), {
          onClick: function onClick(arg) {
            if (_onClick) {
              _onClick(arg);
            }

            _this2.handleSelectRows(reord, !hasSelected, [reord], arg.nativeEvent);
          }
        });
      }

      return {
        onClick: function onClick(arg) {
          return _this2.handleSelectRows(reord, !hasSelected, [reord], arg.nativeEvent);
        }
      };
    };

    _this2.getColumns = function (cols, selectedCols, resizeColumns) {
      return cols.filter(function (c) {
        return selectedCols.includes(c.dataIndex || '');
      }).map(function (col, index) {
        if (resizeColumns) {
          return _extends(_extends({}, col), {
            ellipsis: true,
            onHeaderCell: function onHeaderCell(column) {
              return {
                width: column.width,
                onResize: _this2.handleResize(index),
                dataIndex: col.dataIndex
              };
            }
          });
        }

        return _extends(_extends({}, col), {
          ellipsis: true,
          onHeaderCell: function onHeaderCell() {
            return {
              dataIndex: col.dataIndex
            };
          }
        });
      });
    };

    _this2.getRowSelectProps = function (rowSelection, selectedRowKeys) {
      if (rowSelection === false) {
        return undefined;
      }

      return _extends(_extends({
        getCheckboxProps: function getCheckboxProps(record) {
          return {
            // @ts-ignore
            disabled: record.disabled
          };
        }
      }, isBoolean(rowSelection) ? {} : rowSelection), {
        onChange: _this2.handleSelectChange,
        onSelect: _this2.handleSelectRows,
        onSelectAll: _this2.handleSelectAllRows,
        selectedRowKeys: selectedRowKeys
      });
    };

    _this2.getPaginationProps = function (pagination) {
      return pagination === false ? false : _extends({
        size: 'middle',
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal: function showTotal(total) {
          return formatMsg(get(_this2.locale, 'total'), {
            total: total
          });
        }
      }, isBoolean(pagination) ? {} : pagination);
    };

    _this2.getDataList = function () {
      var sortConfigs = _this2.state.sortConfigs;
      var _this2$props$data = _this2.props.data,
          data = _this2$props$data === void 0 ? {
        list: []
      } : _this2$props$data;
      var _data$list = data.list,
          list = _data$list === void 0 ? [] : _data$list;
      var com;

      if (sortConfigs && sortConfigs.length) {
        sortConfigs.reverse().forEach(function (conf) {
          com = compare(conf.sortCol, conf.sort, com);
        }); // @ts-ignore

        if (com) {
          return _toConsumableArray(list).sort(com);
        }
      }

      return list;
    };

    _this2.handleExpandRow = function (expand, record) {
      var onExpand = _this2.props.onExpand;
      setTimeout(function () {
        if (_this2.ps) {
          _this2.ps.update();
        }
      }, 0);

      if (onExpand) {
        onExpand(expand, record);
      }
    };

    _this2.renderTable = function () {
      var _this2$state3 = _this2.state,
          cols = _this2$state3.columns,
          tableWrapperHeight = _this2$state3.tableWrapperHeight,
          _this2$state3$selecte = _this2$state3.selectedRowKeys,
          selectedRowKeys = _this2$state3$selecte === void 0 ? [] : _this2$state3$selecte,
          selectedCols = _this2$state3.selectedCols;

      if (!tableWrapperHeight) {
        return null;
      }

      var _this2$props4 = _this2.props,
          rowSelection = _this2$props4.rowSelection,
          _this2$props4$style = _this2$props4.style,
          style = _this2$props4$style === void 0 ? {} : _this2$props4$style,
          _this2$props4$data = _this2$props4.data,
          data = _this2$props4$data === void 0 ? {
        pagination: false
      } : _this2$props4$data,
          resizeColumns = _this2$props4.resizeColumns,
          className = _this2$props4.className;
      var pagination = data.pagination;

      var columns = _this2.getColumns(cols, selectedCols, resizeColumns);

      var rowSelectProps = _this2.getRowSelectProps(rowSelection, selectedRowKeys);

      var paginationProps = _this2.getPaginationProps(pagination);

      var dataList = _this2.getDataList(); // pagination height:38.4 header height:53.6


      var bodyHeight = parseInt("".concat(tableWrapperHeight.toString()).replace('px', ''), 10) - 92;
      var scrollY = paginationProps === false ? bodyHeight + 39 : bodyHeight;
      return React.createElement(Table, _extends({
        components: _this2.components
      }, _this2.props, {
        style: _extends(_extends({}, style), {
          height: tableWrapperHeight
        }),
        columns: columns,
        rowSelection: rowSelectProps,
        scroll: {
          x: true,
          y: scrollY
        },
        dataSource: dataList,
        pagination: paginationProps,
        onRow: _this2.onTableRow,
        className: cls(className, 'seid-table-content'),
        onExpand: _this2.handleExpandRow
      }));
    };

    _this2.renderCom = function (locale) {
      _this2.locale = locale;
      var _this2$props5 = _this2.props,
          containerClassName = _this2$props5.containerClassName,
          wrapperClassName = _this2$props5.wrapperClassName;
      return React.createElement("div", {
        ref: function ref(_ref5) {
          _this2.container = _ref5;
        },
        className: cls('seid-ext-table', containerClassName)
      }, _this2.getToolBar(), React.createElement("div", {
        className: wrapperClassName,
        ref: function ref(_ref4) {
          _this2.wrapper = _ref4;
        }
      }, _this2.renderTable()));
    };

    var _props$columns = props.columns,
        columns = _props$columns === void 0 ? [] : _props$columns;
    _this2.state = {
      columns: [],
      tableWrapperHeight: 0,
      calcWidth: 0,
      totalWidth: 0,
      selectedRows: [],
      selectedRowKeys: [],
      selectedCols: columns.map(function (c) {
        return c.dataIndex || '';
      })
    };
    _this2.updateSize = debounce(_this2.updateSize, 500);
    return _this2;
  }

  _createClass(ExtTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      var height = this.props.height; // 如果没有指定高度，更新表格包裹元素的高度

      if (!height) {
        this.updateSize();
        window.addEventListener('resize', this.updateSize);
      } else {
        this.setState({
          tableWrapperHeight: height
        }, function () {
          if (_this3.container) {
            var tableContent = _this3.container.querySelector('.ant-table-body');

            if (tableContent) {
              if (_this3.ps) {
                _this3.ps.destroy();
              }

              _this3.ps = new PerfectScrollbar(tableContent);

              if (_this3.ps) {
                _this3.ps.update();
              }
            }
          }
        });
      }

      if (this.wrapper) {
        this.setState({
          totalWidth: this.wrapper.clientWidth || this.wrapper.offsetWidth
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // 移除监听表格大小变化并重绘高度和宽度
      window.removeEventListener('resize', this.updateSize);

      if (this.ps) {
        this.ps.destroy();
        this.ps = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(SeidLocaleReceiver, {
        componentName: "ExtTable",
        defaultLocale: defaultLocale
      }, this.renderCom);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var _nextProps$columns2 = nextProps.columns,
          columns = _nextProps$columns2 === void 0 ? [] : _nextProps$columns2,
          _nextProps$selectedRo = nextProps.selectedRows,
          selectedRows = _nextProps$selectedRo === void 0 ? [] : _nextProps$selectedRo,
          rowKey = nextProps.rowKey;
      var totalWidth = prevState.totalWidth;
      var nextState;

      if ('selectedRows' in nextProps && selectedRows.length !== prevState.selectedRowKeys.length) {
        nextState = {
          selectedRows: selectedRows,
          selectedRowKeys: selectedRows.map(function (row, index) {
            return getRowKey(row, index, rowKey);
          })
        };
      }

      if (totalWidth && columns.length !== prevState.columns.length) {
        if (nextState) {
          return _extends(_extends({}, nextState), processColumns(totalWidth, nextProps, prevState) || {});
        }

        return processColumns(totalWidth, nextProps, prevState);
      }

      if (nextState) {
        return nextState;
      }

      return null;
    }
  }]);

  return ExtTable;
}(Component);

export { ExtTable as default };
ExtTable.defaultProps = {
  offsetBottom: 0,
  rowKey: 'key',
  ellipsis: true,
  columnTool: false
};
//# sourceMappingURL=index.js.map
