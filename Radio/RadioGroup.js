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
// @inheritedComponent FormGroup

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _FormGroup = require('../Form/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _helpers = require('../utils/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Node = require('react').babelPluginFlowReactPropTypes_proptype_Node || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_ChildrenArray = require('react').babelPluginFlowReactPropTypes_proptype_ChildrenArray || require('prop-types').any;

var styles = exports.styles = {
  root: {
    flex: '1 1 auto',
    margin: 0,
    padding: 0
  }
};

var babelPluginFlowReactPropTypes_proptype_Props = {
  children: typeof $ReadOnlyArray === 'function' ? require('prop-types').instanceOf($ReadOnlyArray) : require('prop-types').any,
  classes: require('prop-types').object,
  className: require('prop-types').string,
  name: require('prop-types').string,
  onBlur: require('prop-types').func,
  onChange: require('prop-types').func,
  onKeyDown: require('prop-types').func,
  value: require('prop-types').string
};

var RadioGroup = function (_React$Component) {
  (0, _inherits3.default)(RadioGroup, _React$Component);

  function RadioGroup() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RadioGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RadioGroup.__proto__ || (0, _getPrototypeOf2.default)(RadioGroup)).call.apply(_ref, [this].concat(args))), _this), _this.radios = [], _this.focus = function () {
      if (!_this.radios || !_this.radios.length) {
        return;
      }

      var focusRadios = _this.radios.filter(function (n) {
        return !n.disabled;
      });

      if (!focusRadios.length) {
        return;
      }

      var selectedRadio = (0, _helpers.find)(focusRadios, function (n) {
        return n.checked;
      });

      if (selectedRadio) {
        selectedRadio.focus();
        return;
      }

      focusRadios[0].focus();
    }, _this.handleRadioChange = function (event, checked) {
      if (checked && _this.props.onChange) {
        _this.props.onChange(event, event.target.value);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RadioGroup, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          classNameProp = _props.className,
          name = _props.name,
          value = _props.value,
          onChange = _props.onChange,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'classes', 'className', 'name', 'value', 'onChange']);


      this.radios = [];

      return _react2.default.createElement(
        _FormGroup2.default,
        (0, _extends3.default)({
          className: (0, _classnames2.default)(classes.root, classNameProp),

          role: 'radiogroup'
        }, other),
        _react2.default.Children.map(children, function (child, index) {
          if (!_react2.default.isValidElement(child)) {
            return null;
          }

          return _react2.default.cloneElement(child, {
            key: index,
            name: name,
            inputRef: function inputRef(node) {
              _this2.radios.push(node);
            },
            checked: value === child.props.value,
            onChange: _this2.handleRadioChange
          });
        })
      );
    }
  }]);
  return RadioGroup;
}(_react2.default.Component);

RadioGroup.propTypes = process.env.NODE_ENV !== "production" ? (_ref2 = {
  classes: require('prop-types').object.isRequired,
  children: typeof $ReadOnlyArray === 'function' ? require('prop-types').instanceOf($ReadOnlyArray) : require('prop-types').any
}, (0, _defineProperty3.default)(_ref2, 'classes', require('prop-types').object), (0, _defineProperty3.default)(_ref2, 'className', require('prop-types').string), (0, _defineProperty3.default)(_ref2, 'name', require('prop-types').string), (0, _defineProperty3.default)(_ref2, 'onBlur', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'onChange', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'onKeyDown', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'value', require('prop-types').string), _ref2) : {};
RadioGroup.propTypes = process.env.NODE_ENV !== "production" ? (_ref3 = {
  classes: require('prop-types').object.isRequired,
  children: typeof $ReadOnlyArray === 'function' ? require('prop-types').instanceOf($ReadOnlyArray) : require('prop-types').any
}, (0, _defineProperty3.default)(_ref3, 'classes', require('prop-types').object), (0, _defineProperty3.default)(_ref3, 'className', require('prop-types').string), (0, _defineProperty3.default)(_ref3, 'name', require('prop-types').string), (0, _defineProperty3.default)(_ref3, 'onBlur', require('prop-types').func), (0, _defineProperty3.default)(_ref3, 'onChange', require('prop-types').func), (0, _defineProperty3.default)(_ref3, 'onKeyDown', require('prop-types').func), (0, _defineProperty3.default)(_ref3, 'value', require('prop-types').string), _ref3) : {};
exports.default = (0, _withStyles2.default)(styles, { name: 'MuiRadioGroup' })(RadioGroup);