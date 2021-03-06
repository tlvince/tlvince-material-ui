'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _properties = require('dom-helpers/transition/properties');

var _properties2 = _interopRequireDefault(_properties);

var _on = require('dom-helpers/events/on');

var _on2 = _interopRequireDefault(_on);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Element = require('react').babelPluginFlowReactPropTypes_proptype_Element || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_SyntheticUIEventHandler = require('./dom').babelPluginFlowReactPropTypes_proptype_SyntheticUIEventHandler || require('prop-types').any;

var transitionEndEvent = _properties2.default.end;

var UNMOUNTED = exports.UNMOUNTED = 0;
var EXITED = exports.EXITED = 1;
var ENTERING = exports.ENTERING = 2;
var ENTERED = exports.ENTERED = 3;
var EXITING = exports.EXITING = 4;

/**
 * A helper function that calls back when any pending animations have started This is needed as the
 * callback hooks might be setting some style properties that needs a frame to take effect.
 */
function requestAnimationStart(callback) {
  // Feature detect rAF, fallback to setTimeout
  if (window.requestAnimationFrame) {
    // Chrome and Safari have a bug where calling rAF once returns the current
    // frame instead of the next frame, so we need to call a double rAF here.
    // See https://crbug.com/675795 for more.
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(callback);
    });
  } else {
    setTimeout(callback, 0);
  }
}

var babelPluginFlowReactPropTypes_proptype_TransitionCallback = require('prop-types').func;

var babelPluginFlowReactPropTypes_proptype_TransitionRequestTimeout = require('prop-types').func;

var babelPluginFlowReactPropTypes_proptype_Props = {
  children: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
  className: require('prop-types').string,
  enteredClassName: require('prop-types').string,
  enteringClassName: require('prop-types').string,
  exitedClassName: require('prop-types').string,
  exitingClassName: require('prop-types').string,
  in: require('prop-types').bool,
  onEnter: require('prop-types').func,
  onEntering: require('prop-types').func,
  onEntered: require('prop-types').func,
  onExit: require('prop-types').func,
  onExiting: require('prop-types').func,
  onExited: require('prop-types').func,
  onRequestTimeout: require('prop-types').func,
  timeout: require('prop-types').number,
  transitionAppear: require('prop-types').bool,
  unmountOnExit: require('prop-types').bool
};

/**
 * @ignore - internal component.
 *
 * Drawn from https://raw.githubusercontent.com/react-bootstrap/react-overlays/master/src/Transition.js
 *
 * The Transition component lets you define and run CSS transitions with a simple declarative api.
 * It works similarly to React's own CSSTransitionGroup
 * but is specifically optimized for transitioning a single child "in" or "out".
 *
 * You don't even need to use class based CSS transitions if you don't want to (but it is easiest).
 * The extensive set of lifecyle callbacks means you have control over
 * the transitioning now at each step of the way.
 */
var Transition = function (_React$Component) {
  (0, _inherits3.default)(Transition, _React$Component);

  function Transition() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Transition);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Transition.__proto__ || (0, _getPrototypeOf2.default)(Transition)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      status: UNMOUNTED
    }, _this.nextCallback = null, _this.needsUpdate = false, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Transition, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var status = void 0;

      if (this.props.in) {
        // Start enter transition in componentDidMount.
        status = this.props.transitionAppear ? EXITED : ENTERED;
      } else {
        status = this.props.unmountOnExit ? UNMOUNTED : EXITED;
      }

      this.setState({ status: status });
      this.nextCallback = null;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.transitionAppear && this.props.in) {
        this.performEnter(this.props);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.in && this.props.unmountOnExit) {
        if (this.state.status === UNMOUNTED) {
          // Start enter transition in componentDidUpdate.
          this.setState({ status: EXITED });
        }
      } else {
        this.needsUpdate = true;
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.props.in && this.state.status === EXITED && this.state.status === nextState.status) {
        return false;
      }

      return true;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var status = this.state.status;

      if (this.props.unmountOnExit && status === EXITED) {
        // EXITED is always a transitional state to either ENTERING or UNMOUNTED
        // when using unmountOnExit.
        if (this.props.in) {
          this.performEnter(this.props);
        } else {
          this.setState({ status: UNMOUNTED }); // eslint-disable-line react/no-did-update-set-state
        }

        return;
      }

      // guard ensures we are only responding to prop changes
      if (this.needsUpdate) {
        this.needsUpdate = false;

        if (this.props.in) {
          if (status === EXITING) {
            this.performEnter(this.props);
          } else if (status === EXITED) {
            this.performEnter(this.props);
          }
          // Otherwise we're already entering or entered.
        } else if (status === ENTERING || status === ENTERED) {
          this.performExit(this.props);
        }
        // Otherwise we're already exited or exiting.
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.cancelNextCallback();
    }
  }, {
    key: 'performEnter',
    value: function performEnter(props) {
      this.cancelNextCallback();
      var node = _reactDom2.default.findDOMNode(this);
      if (node instanceof HTMLElement) {
        if (props.onEnter) {
          props.onEnter(node);
        }
        this.performEntering(node);
      }
    }
  }, {
    key: 'performEntering',
    value: function performEntering(element) {
      var _this2 = this;

      this.safeSetState({ status: ENTERING }, function () {
        if (_this2.props.onEntering) {
          _this2.props.onEntering(element);
        }

        _this2.onTransitionEnd(element, function () {
          _this2.safeSetState({ status: ENTERED }, function () {
            if (_this2.props.onEntered) {
              _this2.props.onEntered(element);
            }
          });
        });
      });
    }
  }, {
    key: 'performExit',
    value: function performExit(props) {
      var _this3 = this;

      this.cancelNextCallback();
      var node = _reactDom2.default.findDOMNode(this);
      if (node instanceof HTMLElement) {
        // Not this.props, because we might be about to receive new props.
        if (props.onExit) {
          props.onExit(node);
        }

        this.safeSetState({ status: EXITING }, function () {
          if (_this3.props.onExiting) {
            _this3.props.onExiting(node);
          }

          _this3.onTransitionEnd(node, function () {
            _this3.safeSetState({ status: EXITED }, function () {
              if (_this3.props.onExited) {
                _this3.props.onExited(node);
              }
            });
          });
        });
      }
    }
  }, {
    key: 'cancelNextCallback',
    value: function cancelNextCallback() {
      if (this.nextCallback !== null) {
        this.nextCallback.cancel();
        this.nextCallback = null;
      }
    }
  }, {
    key: 'safeSetState',
    value: function safeSetState(nextState, callback) {
      // This shouldn't be necessary, but there are weird race conditions with
      // setState callbacks and unmounting in testing, so always make sure that
      // we can cancel any pending setState callbacks after we unmount.
      this.setState(nextState, this.setNextCallback(callback));
    }
  }, {
    key: 'setNextCallback',
    value: function setNextCallback(callback) {
      var _this4 = this;

      var active = true;

      // FIXME: These next two blocks are a real enigma for flow typing outside of weak mode.
      // FIXME: I suggest we refactor - rosskevin
      this.nextCallback = function (event) {
        requestAnimationStart(function () {
          if (active) {
            active = false;
            _this4.nextCallback = null;

            callback(event);
          }
        });
      };

      this.nextCallback.cancel = function () {
        active = false;
      };

      return this.nextCallback;
    }
  }, {
    key: 'onTransitionEnd',
    value: function onTransitionEnd(element, handler) {
      var _this5 = this;

      this.setNextCallback(handler);

      if (element) {
        (0, _on2.default)(element, transitionEndEvent, function (event) {
          if (event.target === element && _this5.nextCallback) {
            _this5.nextCallback();
          }
        });
        setTimeout(this.nextCallback, this.getTimeout(element));
      } else {
        setTimeout(this.nextCallback, 0);
      }
    }
  }, {
    key: 'getTimeout',
    value: function getTimeout(element) {
      var timeout = void 0;

      if (this.props.onRequestTimeout && element instanceof HTMLElement) {
        timeout = this.props.onRequestTimeout(element);
      }

      if (typeof timeout !== 'number') {
        timeout = this.props.timeout;
      }

      return timeout;
    }
  }, {
    key: 'render',
    value: function render() {
      var status = this.state.status;

      if (status === UNMOUNTED) {
        return null;
      }

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          inProp = _props.in,
          enteredClassName = _props.enteredClassName,
          enteringClassName = _props.enteringClassName,
          exitedClassName = _props.exitedClassName,
          exitingClassName = _props.exitingClassName,
          onEnter = _props.onEnter,
          onEntering = _props.onEntering,
          onEntered = _props.onEntered,
          onExit = _props.onExit,
          onExiting = _props.onExiting,
          onExited = _props.onExited,
          onRequestTimeout = _props.onRequestTimeout,
          timeout = _props.timeout,
          transitionAppear = _props.transitionAppear,
          unmountOnExit = _props.unmountOnExit,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'in', 'enteredClassName', 'enteringClassName', 'exitedClassName', 'exitingClassName', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited', 'onRequestTimeout', 'timeout', 'transitionAppear', 'unmountOnExit']);


      var transitionClassName = void 0;
      if (status === EXITED) {
        transitionClassName = this.props.exitedClassName;
      } else if (status === ENTERING) {
        transitionClassName = this.props.enteringClassName;
      } else if (status === ENTERED) {
        transitionClassName = this.props.enteredClassName;
      } else if (status === EXITING) {
        transitionClassName = this.props.exitingClassName;
      }

      var child = _react2.default.Children.only(children);
      return _react2.default.cloneElement(child, (0, _extends3.default)({
        className: (0, _classnames2.default)(child.props.className, className, transitionClassName)
      }, other));
    }
  }]);
  return Transition;
}(_react2.default.Component);

Transition.defaultProps = {
  in: false,
  unmountOnExit: false,
  transitionAppear: false,
  timeout: 5000
};
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  children: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
  className: require('prop-types').string,
  enteredClassName: require('prop-types').string,
  enteringClassName: require('prop-types').string,
  exitedClassName: require('prop-types').string,
  exitingClassName: require('prop-types').string,
  in: require('prop-types').bool,
  onEnter: require('prop-types').func,
  onEntering: require('prop-types').func,
  onEntered: require('prop-types').func,
  onExit: require('prop-types').func,
  onExiting: require('prop-types').func,
  onExited: require('prop-types').func,
  onRequestTimeout: require('prop-types').func,
  timeout: require('prop-types').number,
  transitionAppear: require('prop-types').bool,
  unmountOnExit: require('prop-types').bool
} : {};
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  children: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
  className: require('prop-types').string,
  enteredClassName: require('prop-types').string,
  enteringClassName: require('prop-types').string,
  exitedClassName: require('prop-types').string,
  exitingClassName: require('prop-types').string,
  in: require('prop-types').bool,
  onEnter: require('prop-types').func,
  onEntering: require('prop-types').func,
  onEntered: require('prop-types').func,
  onExit: require('prop-types').func,
  onExiting: require('prop-types').func,
  onExited: require('prop-types').func,
  onRequestTimeout: require('prop-types').func,
  timeout: require('prop-types').number,
  transitionAppear: require('prop-types').bool,
  unmountOnExit: require('prop-types').bool
} : {};
exports.default = Transition;