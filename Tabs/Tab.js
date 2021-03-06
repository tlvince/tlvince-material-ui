'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _ref2, _ref3;
// @inheritedComponent ButtonBase

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _ButtonBase = require('../ButtonBase');

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

var _helpers = require('../utils/helpers');

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Element = require('react').babelPluginFlowReactPropTypes_proptype_Element || require('prop-types').any;

var styles = exports.styles = function styles(theme) {
  return {
    root: (0, _extends4.default)({}, theme.typography.button, (0, _defineProperty3.default)({
      maxWidth: 264,
      minWidth: 72,
      background: 'none',
      padding: 0,
      height: 48,
      flex: 'none',
      overflow: 'hidden'
    }, theme.breakpoints.up('md'), {
      minWidth: 160
    })),
    rootLabelIcon: {
      height: 72
    },
    rootAccent: {
      color: theme.palette.text.secondary
    },
    rootAccentSelected: {
      color: theme.palette.secondary.A200
    },
    rootAccentDisabled: {
      color: theme.palette.text.disabled
    },
    rootPrimary: {
      color: theme.palette.text.secondary
    },
    rootPrimarySelected: {
      color: theme.palette.primary[500]
    },
    rootPrimaryDisabled: {
      color: theme.palette.text.disabled
    },
    rootInherit: {
      color: 'inherit',
      opacity: 0.7
    },
    rootInheritSelected: {
      opacity: 1
    },
    rootInheritDisabled: {
      opacity: 0.4
    },
    fullWidth: {
      flexGrow: 1
    },
    wrapper: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      flexDirection: 'column'
    },
    labelContainer: (0, _defineProperty3.default)({
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 12,
      paddingRight: 12
    }, theme.breakpoints.up('md'), {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3
    }),
    label: (0, _defineProperty3.default)({
      fontSize: theme.typography.fontSize,
      whiteSpace: 'normal'
    }, theme.breakpoints.up('md'), {
      fontSize: theme.typography.fontSize - 1
    }),
    labelWrapped: (0, _defineProperty3.default)({}, theme.breakpoints.down('md'), {
      fontSize: theme.typography.fontSize - 2
    })
  };
};

var babelPluginFlowReactPropTypes_proptype_Props = {
  classes: require('prop-types').object,
  className: require('prop-types').string,
  disabled: require('prop-types').bool,
  fullWidth: require('prop-types').bool,
  icon: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
  label: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
  onChange: require('prop-types').func,
  onClick: require('prop-types').func,
  selected: require('prop-types').bool,
  style: require('prop-types').object,
  textColor: require('prop-types').oneOfType([require('prop-types').oneOf(['accent']), require('prop-types').oneOf(['primary']), require('prop-types').oneOf(['inherit']), require('prop-types').string]),
  value: require('prop-types').any
};

var Tab = function (_React$Component) {
  (0, _inherits3.default)(Tab, _React$Component);

  function Tab() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tab.__proto__ || (0, _getPrototypeOf2.default)(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      wrappedText: false
    }, _this.handleChange = function (event) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          value = _this$props.value,
          onClick = _this$props.onClick;


      if (onChange) {
        onChange(event, value);
      }

      if (onClick) {
        onClick(event);
      }
    }, _this.label = undefined, _this.checkTextWrap = function () {
      if (_this.label) {
        var _wrappedText = _this.label.getClientRects().length > 1;
        if (_this.state.wrappedText !== _wrappedText) {
          _this.setState({ wrappedText: _wrappedText });
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tab, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.checkTextWrap();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.wrappedText === prevState.wrappedText) {
        /**
         * At certain text and tab lengths, a larger font size may wrap to two lines while the smaller
         * font size still only requires one line.  This check will prevent an infinite render loop
         * fron occurring in that scenario.
         */
        this.checkTextWrap();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this,
          _classNames2;

      var _props = this.props,
          classes = _props.classes,
          classNameProp = _props.className,
          disabled = _props.disabled,
          fullWidth = _props.fullWidth,
          iconProp = _props.icon,
          labelProp = _props.label,
          onChange = _props.onChange,
          selected = _props.selected,
          styleProp = _props.style,
          textColor = _props.textColor,
          value = _props.value,
          other = (0, _objectWithoutProperties3.default)(_props, ['classes', 'className', 'disabled', 'fullWidth', 'icon', 'label', 'onChange', 'selected', 'style', 'textColor', 'value']);


      var icon = void 0;

      if (iconProp !== undefined) {
        icon = _react2.default.isValidElement(iconProp) ? iconProp : _react2.default.createElement(
          _Icon2.default,
          null,
          iconProp
        );
      }

      var label = void 0;

      if (labelProp !== undefined) {
        label = _react2.default.createElement(
          'div',
          { className: classes.labelContainer },
          _react2.default.createElement(
            'span',
            {
              className: (0, _classnames2.default)(classes.label, (0, _defineProperty3.default)({}, classes.labelWrapped, this.state.wrappedText)),
              ref: function ref(node) {
                _this2.label = node;
              }
            },
            labelProp
          )
        );
      }

      var className = (0, _classnames2.default)(classes.root, (_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, classes['root' + (0, _helpers.capitalizeFirstLetter)(textColor)], true), (0, _defineProperty3.default)(_classNames2, classes['root' + (0, _helpers.capitalizeFirstLetter)(textColor) + 'Disabled'], disabled), (0, _defineProperty3.default)(_classNames2, classes['root' + (0, _helpers.capitalizeFirstLetter)(textColor) + 'Selected'], selected), (0, _defineProperty3.default)(_classNames2, classes.rootLabelIcon, icon && label), (0, _defineProperty3.default)(_classNames2, classes.fullWidth, fullWidth), _classNames2), classNameProp);

      var style = {};

      if (textColor !== 'accent' && textColor !== 'inherit') {
        style.color = textColor;
      }

      style = (0, _keys2.default)(style).length > 0 ? (0, _extends4.default)({}, style, styleProp) : styleProp;

      return _react2.default.createElement(
        _ButtonBase2.default,
        (0, _extends4.default)({
          focusRipple: true,
          className: className,
          style: style,
          role: 'tab',
          'aria-selected': selected,
          disabled: disabled
        }, other, {
          onClick: this.handleChange
        }),
        _react2.default.createElement(
          'span',
          { className: classes.wrapper },
          icon,
          label
        )
      );
    }
  }]);
  return Tab;
}(_react2.default.Component);

Tab.defaultProps = {
  disabled: false
};
Tab.propTypes = process.env.NODE_ENV !== "production" ? (_ref2 = {
  classes: require('prop-types').object.isRequired
}, (0, _defineProperty3.default)(_ref2, 'classes', require('prop-types').object), (0, _defineProperty3.default)(_ref2, 'className', require('prop-types').string), (0, _defineProperty3.default)(_ref2, 'disabled', require('prop-types').bool), (0, _defineProperty3.default)(_ref2, 'fullWidth', require('prop-types').bool), (0, _defineProperty3.default)(_ref2, 'icon', typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)), (0, _defineProperty3.default)(_ref2, 'label', typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)), (0, _defineProperty3.default)(_ref2, 'onChange', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'onClick', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'selected', require('prop-types').bool), (0, _defineProperty3.default)(_ref2, 'style', require('prop-types').object), (0, _defineProperty3.default)(_ref2, 'textColor', require('prop-types').oneOfType([require('prop-types').oneOf(['accent']), require('prop-types').oneOf(['primary']), require('prop-types').oneOf(['inherit']), require('prop-types').string])), (0, _defineProperty3.default)(_ref2, 'value', require('prop-types').any), _ref2) : {};
Tab.propTypes = process.env.NODE_ENV !== "production" ? (_ref3 = {
  classes: require('prop-types').object.isRequired
}, (0, _defineProperty3.default)(_ref3, 'classes', require('prop-types').object), (0, _defineProperty3.default)(_ref3, 'className', require('prop-types').string), (0, _defineProperty3.default)(_ref3, 'disabled', require('prop-types').bool), (0, _defineProperty3.default)(_ref3, 'fullWidth', require('prop-types').bool), (0, _defineProperty3.default)(_ref3, 'icon', typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)), (0, _defineProperty3.default)(_ref3, 'label', typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)), (0, _defineProperty3.default)(_ref3, 'onChange', require('prop-types').func), (0, _defineProperty3.default)(_ref3, 'onClick', require('prop-types').func), (0, _defineProperty3.default)(_ref3, 'selected', require('prop-types').bool), (0, _defineProperty3.default)(_ref3, 'style', require('prop-types').object), (0, _defineProperty3.default)(_ref3, 'textColor', require('prop-types').oneOfType([require('prop-types').oneOf(['accent']), require('prop-types').oneOf(['primary']), require('prop-types').oneOf(['inherit']), require('prop-types').string])), (0, _defineProperty3.default)(_ref3, 'value', require('prop-types').any), _ref3) : {};
exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTab' })(Tab);