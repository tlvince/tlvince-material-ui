'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _ref2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Cancel = require('../svg-icons/Cancel');

var _Cancel2 = _interopRequireDefault(_Cancel);

var _colorManipulator = require('../styles/colorManipulator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Element = require('react').babelPluginFlowReactPropTypes_proptype_Element || require('prop-types').any;

var styles = exports.styles = function styles(theme) {
  var height = 32;
  var backgroundColor = (0, _colorManipulator.emphasize)(theme.palette.background.default, 0.12);
  var deleteIconColor = (0, _colorManipulator.fade)(theme.palette.text.primary, 0.26);
  return {
    root: {
      fontFamily: theme.typography.fontFamily,
      fontSize: 13,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: height,
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor: backgroundColor,
      borderRadius: height / 2,
      whiteSpace: 'nowrap',
      width: 'fit-content',
      transition: theme.transitions.create(),
      // label will inherit this from root, then `clickable` class overrides this for both
      cursor: 'default',
      outline: 'none', // No outline on focused element in Chrome (as triggered by tabIndex prop)
      border: 'none', // Remove `button` border
      padding: 0 // Remove `button` padding
    },
    clickable: {
      cursor: 'pointer',
      '&:hover, &:focus': {
        backgroundColor: (0, _colorManipulator.emphasize)(backgroundColor, 0.08)
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: (0, _colorManipulator.emphasize)(backgroundColor, 0.12)
      }
    },
    deletable: {
      '&:focus': {
        backgroundColor: (0, _colorManipulator.emphasize)(backgroundColor, 0.08)
      }
    },
    avatar: {
      marginRight: -4,
      width: 32,
      height: 32,
      fontSize: 16
    },
    avatarChildren: {
      width: 19,
      height: 19
    },
    label: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 12,
      paddingRight: 12,
      userSelect: 'none',
      whiteSpace: 'nowrap',
      cursor: 'inherit'
    },
    deleteIcon: {
      color: deleteIconColor,
      cursor: 'pointer',
      height: 'auto',
      margin: '0 4px 0 -8px',
      '&:hover': {
        color: (0, _colorManipulator.fade)(deleteIconColor, 0.4)
      }
    }
  };
};

var babelPluginFlowReactPropTypes_proptype_Props = {
  avatar: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
  classes: require('prop-types').object,
  className: require('prop-types').string,
  label: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
  onClick: require('prop-types').func,
  onKeyDown: require('prop-types').func,
  onRequestDelete: require('prop-types').func,
  tabIndex: require('prop-types').oneOfType([require('prop-types').number, require('prop-types').string])
};

/**
 * Chips represent complex entities in small blocks, such as a contact.
 */
var Chip = function (_React$Component) {
  (0, _inherits3.default)(Chip, _React$Component);

  function Chip() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Chip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Chip.__proto__ || (0, _getPrototypeOf2.default)(Chip)).call.apply(_ref, [this].concat(args))), _this), _this.chipRef = null, _this.handleDeleteIconClick = function (event) {
      // Stop the event from bubbling up to the `Chip`
      event.stopPropagation();
      var onRequestDelete = _this.props.onRequestDelete;

      if (onRequestDelete) {
        onRequestDelete(event);
      }
    }, _this.handleKeyDown = function (event) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          onRequestDelete = _this$props.onRequestDelete,
          onKeyDown = _this$props.onKeyDown;

      var key = (0, _keycode2.default)(event);

      if (onClick && (key === 'space' || key === 'enter')) {
        event.preventDefault();
        onClick(event);
      } else if (onRequestDelete && key === 'backspace') {
        event.preventDefault();
        onRequestDelete(event);
      } else if (key === 'esc') {
        event.preventDefault();
        if (_this.chipRef) {
          _this.chipRef.blur();
        }
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Chip, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          avatarProp = _props.avatar,
          classes = _props.classes,
          classNameProp = _props.className,
          label = _props.label,
          onClick = _props.onClick,
          onKeyDown = _props.onKeyDown,
          onRequestDelete = _props.onRequestDelete,
          tabIndexProp = _props.tabIndex,
          other = (0, _objectWithoutProperties3.default)(_props, ['avatar', 'classes', 'className', 'label', 'onClick', 'onKeyDown', 'onRequestDelete', 'tabIndex']);


      var className = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes.clickable, onClick), (0, _defineProperty3.default)({}, classes.deletable, onRequestDelete), classNameProp);

      var deleteIcon = null;
      if (onRequestDelete) {
        deleteIcon = _react2.default.createElement(_Cancel2.default, { className: classes.deleteIcon, onClick: this.handleDeleteIconClick });
      }

      var avatar = null;
      if (avatarProp && _react2.default.isValidElement(avatarProp)) {
        avatar = _react2.default.cloneElement(avatarProp, {
          className: (0, _classnames2.default)(classes.avatar, avatarProp.props.className),
          childrenClassName: (0, _classnames2.default)(classes.avatarChildren, avatarProp.props.childrenClassName)
        });
      }

      var tabIndex = tabIndexProp;

      if (!tabIndex) {
        tabIndex = onClick || onRequestDelete ? 0 : -1;
      }

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          role: 'button',
          className: className,
          tabIndex: tabIndex,
          onClick: onClick,
          onKeyDown: this.handleKeyDown,
          ref: function ref(node) {
            _this2.chipRef = node;
          }
        }, other),
        avatar,
        _react2.default.createElement(
          'span',
          { className: classes.label },
          label
        ),
        deleteIcon
      );
    }
  }]);
  return Chip;
}(_react2.default.Component);

Chip.propTypes = process.env.NODE_ENV !== "production" ? (_ref2 = {
  classes: require('prop-types').object.isRequired,
  avatar: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)
}, (0, _defineProperty3.default)(_ref2, 'classes', require('prop-types').object), (0, _defineProperty3.default)(_ref2, 'className', require('prop-types').string), (0, _defineProperty3.default)(_ref2, 'label', typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)), (0, _defineProperty3.default)(_ref2, 'onClick', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'onKeyDown', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'onRequestDelete', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'tabIndex', require('prop-types').oneOfType([require('prop-types').number, require('prop-types').string])), _ref2) : {};
exports.default = (0, _withStyles2.default)(styles, { name: 'MuiChip' })(Chip);