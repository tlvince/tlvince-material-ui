'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _ref3, _ref4;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactEventListener = require('react-event-listener');

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _reactScrollbarSize = require('react-scrollbar-size');

var _reactScrollbarSize2 = _interopRequireDefault(_reactScrollbarSize);

var _scroll = require('scroll');

var _scroll2 = _interopRequireDefault(_scroll);

var _pick = require('lodash/pick');

var _pick2 = _interopRequireDefault(_pick);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _withWidth = require('../utils/withWidth');

var _withWidth2 = _interopRequireDefault(_withWidth);

var _TabIndicator = require('./TabIndicator');

var _TabIndicator2 = _interopRequireDefault(_TabIndicator);

var _TabScrollButton = require('./TabScrollButton');

var _TabScrollButton2 = _interopRequireDefault(_TabScrollButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Node = require('react').babelPluginFlowReactPropTypes_proptype_Node || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_ChildrenArray = require('react').babelPluginFlowReactPropTypes_proptype_ChildrenArray || require('prop-types').any;

var styles = exports.styles = {
  root: {
    overflow: 'hidden'
  },
  flexContainer: {
    display: 'flex'
  },
  scrollingContainer: {
    display: 'inline-block',
    flex: '1 1 auto',
    whiteSpace: 'nowrap'
  },
  fixed: {
    overflowX: 'hidden',
    width: '100%'
  },
  scrollable: {
    overflowX: 'scroll'
  },
  centered: {
    justifyContent: 'center'
  }
};

var babelPluginFlowReactPropTypes_proptype_Props = {
  buttonClassName: require('prop-types').string,
  centered: require('prop-types').bool,
  children: typeof $ReadOnlyArray === 'function' ? require('prop-types').instanceOf($ReadOnlyArray) : require('prop-types').any,
  classes: require('prop-types').object,
  className: require('prop-types').string,
  fullWidth: require('prop-types').bool,
  indicatorClassName: require('prop-types').string,
  indicatorColor: require('prop-types').oneOfType([require('prop-types').oneOf(['accent']), require('prop-types').oneOf(['primary']), require('prop-types').string]),
  onChange: require('prop-types').func.isRequired,
  scrollable: require('prop-types').bool,
  scrollButtons: require('prop-types').oneOf(['auto', 'on', 'off']),
  textColor: require('prop-types').oneOf(['accent', 'primary', 'inherit']),
  value: require('prop-types').any.isRequired,
  width: require('prop-types').string
};

/**
 * Notice that this Component is incompatible with server side rendering.
 */
var Tabs = function (_React$Component) {
  (0, _inherits3.default)(Tabs, _React$Component);

  function Tabs() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tabs.__proto__ || (0, _getPrototypeOf2.default)(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      indicatorStyle: {},
      scrollerStyle: {
        marginBottom: 0
      },
      showLeftScroll: false,
      showRightScroll: false
    }, _this.tabs = undefined, _this.valueToIndex = {}, _this.handleResize = (0, _debounce2.default)(function () {
      _this.updateIndicatorState(_this.props);
      _this.updateScrollButtonState();
    }, 166), _this.handleLeftScrollClick = function () {
      if (_this.tabs) {
        _this.moveTabsScroll(-_this.tabs.clientWidth);
      }
    }, _this.handleRightScrollClick = function () {
      if (_this.tabs) {
        _this.moveTabsScroll(_this.tabs.clientWidth);
      }
    }, _this.handleScrollbarSizeChange = function (_ref2) {
      var scrollbarHeight = _ref2.scrollbarHeight;

      _this.setState({
        scrollerStyle: {
          marginBottom: -scrollbarHeight
        }
      });
    }, _this.handleTabsScroll = (0, _debounce2.default)(function () {
      _this.updateScrollButtonState();
    }, 166), _this.getConditionalElements = function () {
      var _this$props = _this.props,
          buttonClassName = _this$props.buttonClassName,
          scrollable = _this$props.scrollable,
          scrollButtons = _this$props.scrollButtons,
          width = _this$props.width;

      var conditionalElements = {};
      conditionalElements.scrollbarSizeListener = scrollable ? _react2.default.createElement(_reactScrollbarSize2.default, {
        onLoad: _this.handleScrollbarSizeChange,
        onChange: _this.handleScrollbarSizeChange
      }) : null;

      var showScrollButtons = scrollable && ((0, _withWidth.isWidthUp)('md', width) && scrollButtons === 'auto' || scrollButtons === 'on');

      conditionalElements.scrollButtonLeft = showScrollButtons ? _react2.default.createElement(_TabScrollButton2.default, {
        direction: 'left',
        onClick: _this.handleLeftScrollClick,
        visible: _this.state.showLeftScroll,
        className: buttonClassName
      }) : null;

      conditionalElements.scrollButtonRight = showScrollButtons ? _react2.default.createElement(_TabScrollButton2.default, {
        className: buttonClassName,
        direction: 'right',
        onClick: _this.handleRightScrollClick,
        visible: _this.state.showRightScroll
      }) : null;

      return conditionalElements;
    }, _this.getTabsMeta = function (value) {
      var tabsMeta = void 0;
      if (_this.tabs) {
        // create a new object with ClientRect class props + scrollLeft
        tabsMeta = (0, _extends3.default)({
          scrollLeft: _this.tabs.scrollLeft
        }, (0, _pick2.default)(_this.tabs.getBoundingClientRect(), ['left', 'width', 'right', 'top', 'bottom', 'height']));
      }

      var tabMeta = void 0;
      if (_this.tabs && value !== false) {
        var tab = _this.tabs.children[0].children[_this.valueToIndex[value]];
        process.env.NODE_ENV !== "production" ? (0, _warning2.default)(tab, 'Material-UI: the value provided `' + value + '` is invalid') : void 0;
        tabMeta = tab ? tab.getBoundingClientRect() : null;
      }
      return { tabsMeta: tabsMeta, tabMeta: tabMeta };
    }, _this.moveTabsScroll = function (delta) {
      if (_this.tabs) {
        var nextScrollLeft = _this.tabs.scrollLeft + delta;
        _scroll2.default.left(_this.tabs, nextScrollLeft);
      }
    }, _this.scrollSelectedIntoView = function () {
      var _this$getTabsMeta = _this.getTabsMeta(_this.props.value),
          tabsMeta = _this$getTabsMeta.tabsMeta,
          tabMeta = _this$getTabsMeta.tabMeta;

      if (!tabMeta || !tabsMeta) {
        return;
      }

      if (tabMeta.left < tabsMeta.left) {
        // left side of button is out of view
        var nextScrollLeft = tabsMeta.scrollLeft + (tabMeta.left - tabsMeta.left);
        _scroll2.default.left(_this.tabs, nextScrollLeft);
      } else if (tabMeta.right > tabsMeta.right) {
        // right side of button is out of view
        var _nextScrollLeft = tabsMeta.scrollLeft + (tabMeta.right - tabsMeta.right);
        _scroll2.default.left(_this.tabs, _nextScrollLeft);
      }
    }, _this.updateScrollButtonState = function () {
      var _this$props2 = _this.props,
          scrollable = _this$props2.scrollable,
          scrollButtons = _this$props2.scrollButtons;


      if (_this.tabs && scrollable && scrollButtons !== 'off') {
        var _this$tabs = _this.tabs,
            _scrollLeft = _this$tabs.scrollLeft,
            scrollWidth = _this$tabs.scrollWidth,
            clientWidth = _this$tabs.clientWidth;

        var _showLeftScroll = _scrollLeft > 0;
        var _showRightScroll = scrollWidth > clientWidth + _scrollLeft;

        if (_showLeftScroll !== _this.state.showLeftScroll || _showRightScroll !== _this.state.showRightScroll) {
          _this.setState({ showLeftScroll: _showLeftScroll, showRightScroll: _showRightScroll });
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tabs, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateIndicatorState(this.props);
      this.updateScrollButtonState();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        this.updateIndicatorState(nextProps);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      this.updateScrollButtonState();
      if (this.props.width !== prevProps.width || this.state.indicatorStyle !== prevState.indicatorStyle) {
        this.scrollSelectedIntoView();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.handleResize.cancel();
      this.handleTabsScroll.cancel();
    }
  }, {
    key: 'updateIndicatorState',
    value: function updateIndicatorState(props) {
      var _getTabsMeta = this.getTabsMeta(props.value),
          tabsMeta = _getTabsMeta.tabsMeta,
          tabMeta = _getTabsMeta.tabMeta;

      var indicatorStyle = {
        left: tabMeta && tabsMeta ? tabMeta.left + (tabsMeta.scrollLeft - tabsMeta.left) : 0,
        // May be wrong until the font is loaded.
        width: tabMeta ? tabMeta.width : 0
      };

      if (indicatorStyle.left !== this.state.indicatorStyle.left || indicatorStyle.width !== this.state.indicatorStyle.width) {
        this.setState({ indicatorStyle: indicatorStyle });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames,
          _this2 = this;

      var _props = this.props,
          buttonClassName = _props.buttonClassName,
          centered = _props.centered,
          classes = _props.classes,
          childrenProp = _props.children,
          classNameProp = _props.className,
          fullWidth = _props.fullWidth,
          indicatorClassName = _props.indicatorClassName,
          indicatorColor = _props.indicatorColor,
          onChange = _props.onChange,
          scrollable = _props.scrollable,
          scrollButtons = _props.scrollButtons,
          textColor = _props.textColor,
          value = _props.value,
          width = _props.width,
          other = (0, _objectWithoutProperties3.default)(_props, ['buttonClassName', 'centered', 'classes', 'children', 'className', 'fullWidth', 'indicatorClassName', 'indicatorColor', 'onChange', 'scrollable', 'scrollButtons', 'textColor', 'value', 'width']);


      var className = (0, _classnames2.default)(classes.root, classNameProp);
      var scrollerClassName = (0, _classnames2.default)(classes.scrollingContainer, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.fixed, !scrollable), (0, _defineProperty3.default)(_classNames, classes.scrollable, scrollable), _classNames));
      var tabItemContainerClassName = (0, _classnames2.default)(classes.flexContainer, (0, _defineProperty3.default)({}, classes.centered, centered && !scrollable));

      this.valueToIndex = {};
      var childIndex = 0;
      var children = _react2.default.Children.map(childrenProp, function (child) {
        if (!_react2.default.isValidElement(child)) {
          return null;
        }

        var childValue = child.props.value || childIndex;
        _this2.valueToIndex[childValue] = childIndex;

        childIndex += 1;
        return _react2.default.cloneElement(child, {
          fullWidth: fullWidth,
          selected: childValue === value,
          onChange: onChange,
          textColor: textColor,
          value: childValue
        });
      });

      var conditionalElements = this.getConditionalElements();

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: className }, other),
        _react2.default.createElement(_reactEventListener2.default, { target: 'window', onResize: this.handleResize }),
        conditionalElements.scrollbarSizeListener,
        _react2.default.createElement(
          'div',
          { className: classes.flexContainer },
          conditionalElements.scrollButtonLeft,
          _react2.default.createElement(
            'div',
            {
              className: scrollerClassName,
              style: this.state.scrollerStyle,
              ref: function ref(node) {
                _this2.tabs = node;
              },
              role: 'tablist',
              onScroll: this.handleTabsScroll
            },
            _react2.default.createElement(
              'div',
              { className: tabItemContainerClassName },
              children
            ),
            _react2.default.createElement(_TabIndicator2.default, {
              style: this.state.indicatorStyle,
              className: indicatorClassName,
              color: indicatorColor
            })
          ),
          conditionalElements.scrollButtonRight
        )
      );
    }
  }]);
  return Tabs;
}(_react2.default.Component);

Tabs.defaultProps = {
  centered: false,
  fullWidth: false,
  indicatorColor: 'accent',
  scrollable: false,
  scrollButtons: 'auto',
  textColor: 'inherit'
};
Tabs.propTypes = process.env.NODE_ENV !== "production" ? (_ref3 = {
  classes: require('prop-types').object.isRequired,
  buttonClassName: require('prop-types').string,
  centered: require('prop-types').bool,
  children: typeof $ReadOnlyArray === 'function' ? require('prop-types').instanceOf($ReadOnlyArray) : require('prop-types').any
}, (0, _defineProperty3.default)(_ref3, 'classes', require('prop-types').object), (0, _defineProperty3.default)(_ref3, 'className', require('prop-types').string), (0, _defineProperty3.default)(_ref3, 'fullWidth', require('prop-types').bool), (0, _defineProperty3.default)(_ref3, 'indicatorClassName', require('prop-types').string), (0, _defineProperty3.default)(_ref3, 'indicatorColor', require('prop-types').oneOfType([require('prop-types').oneOf(['accent']), require('prop-types').oneOf(['primary']), require('prop-types').string])), (0, _defineProperty3.default)(_ref3, 'onChange', require('prop-types').func.isRequired), (0, _defineProperty3.default)(_ref3, 'scrollable', require('prop-types').bool), (0, _defineProperty3.default)(_ref3, 'scrollButtons', require('prop-types').oneOf(['auto', 'on', 'off'])), (0, _defineProperty3.default)(_ref3, 'textColor', require('prop-types').oneOf(['accent', 'primary', 'inherit'])), (0, _defineProperty3.default)(_ref3, 'value', require('prop-types').any.isRequired), (0, _defineProperty3.default)(_ref3, 'width', require('prop-types').string), _ref3) : {};
Tabs.propTypes = process.env.NODE_ENV !== "production" ? (_ref4 = {
  classes: require('prop-types').object.isRequired,
  buttonClassName: require('prop-types').string,
  centered: require('prop-types').bool,
  children: typeof $ReadOnlyArray === 'function' ? require('prop-types').instanceOf($ReadOnlyArray) : require('prop-types').any
}, (0, _defineProperty3.default)(_ref4, 'classes', require('prop-types').object), (0, _defineProperty3.default)(_ref4, 'className', require('prop-types').string), (0, _defineProperty3.default)(_ref4, 'fullWidth', require('prop-types').bool), (0, _defineProperty3.default)(_ref4, 'indicatorClassName', require('prop-types').string), (0, _defineProperty3.default)(_ref4, 'indicatorColor', require('prop-types').oneOfType([require('prop-types').oneOf(['accent']), require('prop-types').oneOf(['primary']), require('prop-types').string])), (0, _defineProperty3.default)(_ref4, 'onChange', require('prop-types').func.isRequired), (0, _defineProperty3.default)(_ref4, 'scrollable', require('prop-types').bool), (0, _defineProperty3.default)(_ref4, 'scrollButtons', require('prop-types').oneOf(['auto', 'on', 'off'])), (0, _defineProperty3.default)(_ref4, 'textColor', require('prop-types').oneOf(['accent', 'primary', 'inherit'])), (0, _defineProperty3.default)(_ref4, 'value', require('prop-types').any.isRequired), (0, _defineProperty3.default)(_ref4, 'width', require('prop-types').string), _ref4) : {};
exports.default = (0, _compose2.default)((0, _withStyles2.default)(styles, { name: 'MuiTabs' }), (0, _withWidth2.default)())(Tabs);