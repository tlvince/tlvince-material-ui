'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

exports.getScale = getScale;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withTheme = require('../styles/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _Transition = require('../internal/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Element = require('react').babelPluginFlowReactPropTypes_proptype_Element || require('prop-types').any;

// Only exported for tests.
var babelPluginFlowReactPropTypes_proptype_TransitionCallback = require('../internal/Transition').babelPluginFlowReactPropTypes_proptype_TransitionCallback || require('prop-types').any;

function getScale(value) {
  return 'scale(' + value + ', ' + Math.pow(value, 2) + ')';
}

var babelPluginFlowReactPropTypes_proptype_Props = {
  children: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
  onEnter: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onEntering: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onEntered: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExit: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExiting: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExited: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  rootRef: require('prop-types').func,
  theme: require('prop-types').object,
  transitionDuration: require('prop-types').oneOfType([require('prop-types').number, require('prop-types').oneOf(['auto'])])
};

/**
 * Grow transition used by popovers such as Menu.
 */
var Grow = function (_React$Component) {
  (0, _inherits3.default)(Grow, _React$Component);

  function Grow() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Grow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Grow.__proto__ || (0, _getPrototypeOf2.default)(Grow)).call.apply(_ref, [this].concat(args))), _this), _this.autoTransitionDuration = undefined, _this.handleEnter = function (element) {
      element.style.opacity = '0';
      element.style.transform = getScale(0.75);

      if (_this.props.onEnter) {
        _this.props.onEnter(element);
      }

      var transitionDuration = _this.props.transitionDuration;
      var transitions = _this.props.theme.transitions;


      if (transitionDuration === 'auto') {
        transitionDuration = transitions.getAutoHeightDuration(element.clientHeight);
        _this.autoTransitionDuration = transitionDuration;
      }

      element.style.transition = [transitions.create('opacity', {
        duration: transitionDuration
      }), transitions.create('transform', {
        duration: transitionDuration * 0.666
      })].join(',');
    }, _this.handleEntering = function (element) {
      element.style.opacity = '1';
      element.style.transform = getScale(1);

      if (_this.props.onEntering) {
        _this.props.onEntering(element);
      }
    }, _this.handleExit = function (element) {
      var transitionDuration = _this.props.transitionDuration;
      var transitions = _this.props.theme.transitions;


      if (transitionDuration === 'auto') {
        transitionDuration = transitions.getAutoHeightDuration(element.clientHeight);
        _this.autoTransitionDuration = transitionDuration;
      }

      element.style.transition = [transitions.create('opacity', {
        duration: transitionDuration
      }), transitions.create('transform', {
        duration: transitionDuration * 0.666,
        delay: transitionDuration * 0.333
      })].join(',');

      element.style.opacity = '0';
      element.style.transform = getScale(0.75);

      if (_this.props.onExit) {
        _this.props.onExit(element);
      }
    }, _this.handleRequestTimeout = function () {
      if (_this.props.transitionDuration === 'auto') {
        return (_this.autoTransitionDuration || 0) + 20;
      }
      return _this.props.transitionDuration + 20;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Grow, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          transitionDuration = _props.transitionDuration,
          onEnter = _props.onEnter,
          onEntering = _props.onEntering,
          onExit = _props.onExit,
          rootRef = _props.rootRef,
          theme = _props.theme,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'transitionDuration', 'onEnter', 'onEntering', 'onExit', 'rootRef', 'theme']);


      return _react2.default.createElement(
        _Transition2.default,
        (0, _extends3.default)({
          onEnter: this.handleEnter,
          onEntering: this.handleEntering,
          onExit: this.handleExit,
          onRequestTimeout: this.handleRequestTimeout,
          transitionAppear: true
        }, other, {
          ref: rootRef
        }),
        children
      );
    }
  }]);
  return Grow;
}(_react2.default.Component);

Grow.defaultProps = {
  theme: {},
  transitionDuration: 'auto'
};
Grow.propTypes = process.env.NODE_ENV !== "production" ? (_ref2 = {
  theme: require('prop-types').object.isRequired,
  transitionDuration: require('prop-types').oneOf(['auto']).isRequired,
  children: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
  onEnter: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onEntering: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onEntered: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExit: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExiting: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExited: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  rootRef: require('prop-types').func
}, (0, _defineProperty3.default)(_ref2, 'theme', require('prop-types').object), (0, _defineProperty3.default)(_ref2, 'transitionDuration', require('prop-types').oneOfType([require('prop-types').number, require('prop-types').oneOf(['auto'])])), _ref2) : {};
Grow.propTypes = process.env.NODE_ENV !== "production" ? (_ref3 = {
  theme: require('prop-types').object.isRequired,
  transitionDuration: require('prop-types').oneOf(['auto']).isRequired,
  children: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
  onEnter: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onEntering: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onEntered: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExit: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExiting: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExited: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  rootRef: require('prop-types').func
}, (0, _defineProperty3.default)(_ref3, 'theme', require('prop-types').object), (0, _defineProperty3.default)(_ref3, 'transitionDuration', require('prop-types').oneOfType([require('prop-types').number, require('prop-types').oneOf(['auto'])])), _ref3) : {};
exports.default = (0, _withTheme2.default)(Grow);