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

var _ref3, _ref4;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Transition = require('../internal/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

var _withTheme = require('../styles/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _transitions = require('../styles/transitions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Element = require('react').babelPluginFlowReactPropTypes_proptype_Element || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_TransitionCallback = require('../internal/Transition').babelPluginFlowReactPropTypes_proptype_TransitionCallback || require('prop-types').any;

var GUTTER = 24;

// Translate the element so he can't be seen in the screen.
// Later, we gonna translate back the element to his original location
// with `translate3d(0, 0, 0)`.`
function getTranslateValue(props, element) {
  var direction = props.direction;

  var rect = element.getBoundingClientRect();

  if (direction === 'left') {
    return 'translate3d(calc(100vw - ' + rect.left + 'px), 0, 0)';
  } else if (direction === 'right') {
    return 'translate3d(' + (0 - (rect.left + rect.width + GUTTER)) + 'px, 0, 0)';
  } else if (direction === 'up') {
    return 'translate3d(0, calc(100vh - ' + rect.top + 'px), 0)';
  }

  // direction === 'down
  return 'translate3d(0, ' + (0 - (rect.top + rect.height)) + 'px, 0)';
}

var babelPluginFlowReactPropTypes_proptype_Props = {
  children: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
  direction: require('prop-types').oneOf(['left', 'right', 'up', 'down']),
  enterTransitionDuration: require('prop-types').number,
  in: require('prop-types').bool,
  leaveTransitionDuration: require('prop-types').number,
  onEnter: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onEntering: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onEntered: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExit: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExiting: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExited: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  theme: require('prop-types').object
};

var Slide = function (_React$Component) {
  (0, _inherits3.default)(Slide, _React$Component);

  function Slide() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Slide);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Slide.__proto__ || (0, _getPrototypeOf2.default)(Slide)).call.apply(_ref, [this].concat(args))), _this), _this.transition = null, _this.handleEnter = function (element) {
      // Reset the transformation when needed.
      // That's triggering a reflow.
      if (element.style.transform) {
        element.style.transform = 'translate3d(0, 0, 0)';
        element.style.webkitTransform = 'translate3d(0, 0, 0)';
      }
      var transform = getTranslateValue(_this.props, element);
      element.style.transform = transform;
      element.style.webkitTransform = transform;

      if (_this.props.onEnter) {
        _this.props.onEnter(element);
      }
    }, _this.handleEntering = function (element) {
      var transitions = _this.props.theme.transitions;

      element.style.transition = transitions.create('transform', {
        duration: _this.props.enterTransitionDuration,
        easing: transitions.easing.easeOut
      });
      element.style.webkitTransition = transitions.create('-webkit-transform', {
        duration: _this.props.enterTransitionDuration,
        easing: transitions.easing.easeOut
      });
      element.style.transform = 'translate3d(0, 0, 0)';
      element.style.webkitTransform = 'translate3d(0, 0, 0)';
      if (_this.props.onEntering) {
        _this.props.onEntering(element);
      }
    }, _this.handleExit = function (element) {
      var transitions = _this.props.theme.transitions;

      element.style.transition = transitions.create('transform', {
        duration: _this.props.leaveTransitionDuration,
        easing: transitions.easing.sharp
      });
      element.style.webkitTransition = transitions.create('-webkit-transform', {
        duration: _this.props.leaveTransitionDuration,
        easing: transitions.easing.sharp
      });
      var transform = getTranslateValue(_this.props, element);
      element.style.transform = transform;
      element.style.webkitTransform = transform;

      if (_this.props.onExit) {
        _this.props.onExit(element);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Slide, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.in) {
        // We need to set initial translate values of transition element
        // otherwise component will be shown when in=false.
        var element = (0, _reactDom.findDOMNode)(this.transition);
        if (element instanceof HTMLElement) {
          var transform = getTranslateValue(this.props, element);
          element.style.transform = transform;
          element.style.webkitTransform = transform;
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          onEnter = _props.onEnter,
          onEntering = _props.onEntering,
          onExit = _props.onExit,
          enterTransitionDuration = _props.enterTransitionDuration,
          leaveTransitionDuration = _props.leaveTransitionDuration,
          theme = _props.theme,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'onEnter', 'onEntering', 'onExit', 'enterTransitionDuration', 'leaveTransitionDuration', 'theme']);


      return _react2.default.createElement(
        _Transition2.default,
        (0, _extends3.default)({
          onEnter: this.handleEnter,
          onEntering: this.handleEntering,
          onExit: this.handleExit,
          timeout: Math.max(enterTransitionDuration, leaveTransitionDuration) + 10,
          transitionAppear: true
        }, other, {
          ref: function ref(_ref2) {
            _this2.transition = _ref2;
          }
        }),
        children
      );
    }
  }]);
  return Slide;
}(_react2.default.Component);

Slide.defaultProps = {
  direction: 'down',
  enterTransitionDuration: _transitions.duration.enteringScreen,
  leaveTransitionDuration: _transitions.duration.leavingScreen,
  theme: {}
};
Slide.propTypes = process.env.NODE_ENV !== "production" ? (_ref3 = {
  enterTransitionDuration: require('prop-types').number.isRequired,
  leaveTransitionDuration: require('prop-types').number.isRequired,
  theme: require('prop-types').object.isRequired,
  children: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
  direction: require('prop-types').oneOf(['left', 'right', 'up', 'down'])
}, (0, _defineProperty3.default)(_ref3, 'enterTransitionDuration', require('prop-types').number), (0, _defineProperty3.default)(_ref3, 'in', require('prop-types').bool), (0, _defineProperty3.default)(_ref3, 'leaveTransitionDuration', require('prop-types').number), (0, _defineProperty3.default)(_ref3, 'onEnter', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref3, 'onEntering', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref3, 'onEntered', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref3, 'onExit', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref3, 'onExiting', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref3, 'onExited', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref3, 'theme', require('prop-types').object), _ref3) : {};
Slide.propTypes = process.env.NODE_ENV !== "production" ? (_ref4 = {
  enterTransitionDuration: require('prop-types').number.isRequired,
  leaveTransitionDuration: require('prop-types').number.isRequired,
  theme: require('prop-types').object.isRequired,
  children: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
  direction: require('prop-types').oneOf(['left', 'right', 'up', 'down'])
}, (0, _defineProperty3.default)(_ref4, 'enterTransitionDuration', require('prop-types').number), (0, _defineProperty3.default)(_ref4, 'in', require('prop-types').bool), (0, _defineProperty3.default)(_ref4, 'leaveTransitionDuration', require('prop-types').number), (0, _defineProperty3.default)(_ref4, 'onEnter', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref4, 'onEntering', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref4, 'onEntered', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref4, 'onExit', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref4, 'onExiting', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref4, 'onExited', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref4, 'theme', require('prop-types').object), _ref4) : {};
exports.default = (0, _withTheme2.default)(Slide);