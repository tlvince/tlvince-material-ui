'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _ref2, _ref3;
// @inheritedComponent Popover

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactDom = require('react-dom');

var _scrollbarSize = require('dom-helpers/util/scrollbarSize');

var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Popover = require('../Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _MenuList = require('./MenuList');

var _MenuList2 = _interopRequireDefault(_MenuList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Node = require('react').babelPluginFlowReactPropTypes_proptype_Node || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_TransitionCallback = require('../internal/Transition').babelPluginFlowReactPropTypes_proptype_TransitionCallback || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_Props = {
  anchorEl: require('prop-types').object,
  children: typeof babelPluginFlowReactPropTypes_proptype_Node === 'function' ? babelPluginFlowReactPropTypes_proptype_Node : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Node),
  classes: require('prop-types').object,
  className: require('prop-types').string,
  MenuListProps: require('prop-types').object,
  onEnter: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onEntering: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onEntered: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExit: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExiting: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExited: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onRequestClose: require('prop-types').func,
  open: require('prop-types').bool,
  transitionDuration: require('prop-types').oneOfType([require('prop-types').number, require('prop-types').oneOf(['auto'])])
};
var styles = exports.styles = {
  root: {
    // specZ: The maximum height of a simple menu should be one or more rows less than the view
    // height. This ensures a tappable area outside of the simple menu with which to dismiss
    // the menu.
    maxHeight: 'calc(100vh - 96px)',
    // Add iOS momentum scrolling.
    WebkitOverflowScrolling: 'touch',
    // So we see the menu when it's empty.
    // It's most likely on issue on userland.
    minWidth: 16,
    minHeight: 16
  }
};

var Menu = function (_React$Component) {
  (0, _inherits3.default)(Menu, _React$Component);

  function Menu() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).call.apply(_ref, [this].concat(args))), _this), _this.menuList = undefined, _this.focus = function () {
      if (_this.menuList && _this.menuList.selectedItem) {
        // $FlowFixMe
        (0, _reactDom.findDOMNode)(_this.menuList.selectedItem).focus();
        return;
      }

      var menuList = (0, _reactDom.findDOMNode)(_this.menuList);
      if (menuList && menuList.firstChild) {
        // $FlowFixMe
        menuList.firstChild.focus();
      }
    }, _this.handleEnter = function (element) {
      var menuList = (0, _reactDom.findDOMNode)(_this.menuList);

      // Focus so the scroll computation of the Popover works as expected.
      _this.focus();

      // Let's ignore that piece of logic if users are already overriding the width
      // of the menu.
      // $FlowFixMe
      if (menuList && element.clientHeight < menuList.clientHeight && !menuList.style.width) {
        var size = (0, _scrollbarSize2.default)() + 'px';
        // $FlowFixMe
        menuList.style.paddingRight = size;
        // $FlowFixMe
        menuList.style.width = 'calc(100% + ' + size + ')';
      }

      if (_this.props.onEnter) {
        _this.props.onEnter(element);
      }
    }, _this.handleListKeyDown = function (event, key) {
      if (key === 'tab') {
        event.preventDefault();

        if (_this.props.onRequestClose) {
          _this.props.onRequestClose(event);
        }
      }
    }, _this.getContentAnchorEl = function () {
      if (!_this.menuList || !_this.menuList.selectedItem) {
        // $FlowFixMe
        return (0, _reactDom.findDOMNode)(_this.menuList).firstChild;
      }

      return (0, _reactDom.findDOMNode)(_this.menuList.selectedItem);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Menu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.open) {
        this.focus();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.open && this.props.open) {
        // Needs to refocus as when a menu is rendered into another Modal,
        // the first modal might change the focus to prevent any leak.
        this.focus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          MenuListProps = _props.MenuListProps,
          onEnter = _props.onEnter,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'classes', 'className', 'MenuListProps', 'onEnter']);


      return _react2.default.createElement(
        _Popover2.default,
        (0, _extends3.default)({
          getContentAnchorEl: this.getContentAnchorEl,
          className: (0, _classnames2.default)(classes.root, className),
          onEnter: this.handleEnter
        }, other),
        _react2.default.createElement(
          _MenuList2.default,
          (0, _extends3.default)({
            role: 'menu',
            ref: function ref(node) {
              _this2.menuList = node;
            },
            onKeyDown: this.handleListKeyDown
          }, MenuListProps),
          children
        )
      );
    }
  }]);
  return Menu;
}(_react2.default.Component);

Menu.defaultProps = {
  open: false,
  transitionDuration: 'auto'
};
Menu.propTypes = process.env.NODE_ENV !== "production" ? (_ref2 = {
  classes: require('prop-types').object.isRequired,
  anchorEl: require('prop-types').object,
  children: typeof babelPluginFlowReactPropTypes_proptype_Node === 'function' ? babelPluginFlowReactPropTypes_proptype_Node : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Node)
}, (0, _defineProperty3.default)(_ref2, 'classes', require('prop-types').object), (0, _defineProperty3.default)(_ref2, 'className', require('prop-types').string), (0, _defineProperty3.default)(_ref2, 'MenuListProps', require('prop-types').object), (0, _defineProperty3.default)(_ref2, 'onEnter', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref2, 'onEntering', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref2, 'onEntered', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref2, 'onExit', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref2, 'onExiting', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref2, 'onExited', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref2, 'onRequestClose', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'open', require('prop-types').bool), (0, _defineProperty3.default)(_ref2, 'transitionDuration', require('prop-types').oneOfType([require('prop-types').number, require('prop-types').oneOf(['auto'])])), _ref2) : {};
Menu.propTypes = process.env.NODE_ENV !== "production" ? (_ref3 = {
  classes: require('prop-types').object.isRequired,
  anchorEl: require('prop-types').object,
  children: typeof babelPluginFlowReactPropTypes_proptype_Node === 'function' ? babelPluginFlowReactPropTypes_proptype_Node : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Node)
}, (0, _defineProperty3.default)(_ref3, 'classes', require('prop-types').object), (0, _defineProperty3.default)(_ref3, 'className', require('prop-types').string), (0, _defineProperty3.default)(_ref3, 'MenuListProps', require('prop-types').object), (0, _defineProperty3.default)(_ref3, 'onEnter', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref3, 'onEntering', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref3, 'onEntered', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref3, 'onExit', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref3, 'onExiting', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref3, 'onExited', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref3, 'onRequestClose', require('prop-types').func), (0, _defineProperty3.default)(_ref3, 'open', require('prop-types').bool), (0, _defineProperty3.default)(_ref3, 'transitionDuration', require('prop-types').oneOfType([require('prop-types').number, require('prop-types').oneOf(['auto'])])), _ref3) : {};
exports.default = (0, _withStyles2.default)(styles, { name: 'MuiMenu' })(Menu);