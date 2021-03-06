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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Transition = require('../internal/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Node = require('react').babelPluginFlowReactPropTypes_proptype_Node || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_TransitionCallback = require('../internal/Transition').babelPluginFlowReactPropTypes_proptype_TransitionCallback || require('prop-types').any;

var reflow = function reflow(elem) {
  return elem.offsetHeight;
};

var styles = exports.styles = function styles(theme) {
  return {
    container: {
      height: 0,
      overflow: 'hidden',
      transition: theme.transitions.create('height')
    },
    entered: {
      height: 'auto',
      transitionDuration: '0ms'
    }
  };
};

var babelPluginFlowReactPropTypes_proptype_Props = {
  children: typeof babelPluginFlowReactPropTypes_proptype_Node === 'function' ? babelPluginFlowReactPropTypes_proptype_Node : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Node),
  classes: require('prop-types').object,
  in: require('prop-types').bool,
  onEnter: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onEntering: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onEntered: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExit: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExiting: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExited: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  theme: require('prop-types').object,
  transitionDuration: require('prop-types').oneOfType([require('prop-types').number, require('prop-types').string])
};

var Collapse = function (_React$Component) {
  (0, _inherits3.default)(Collapse, _React$Component);

  function Collapse() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Collapse);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Collapse.__proto__ || (0, _getPrototypeOf2.default)(Collapse)).call.apply(_ref, [this].concat(args))), _this), _this.wrapper = null, _this.handleEnter = function (element) {
      element.style.height = '0px';
      if (_this.props.onEnter) {
        _this.props.onEnter(element);
      }
    }, _this.handleEntering = function (element) {
      var _this$props = _this.props,
          transitionDuration = _this$props.transitionDuration,
          theme = _this$props.theme;

      var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;

      if (transitionDuration === 'auto') {
        var getAutoHeightDuration = theme.transitions.getAutoHeightDuration;

        element.style.transitionDuration = getAutoHeightDuration(wrapperHeight) + 'ms';
      } else if (typeof transitionDuration === 'number') {
        element.style.transitionDuration = transitionDuration + 'ms';
      } else {
        element.style.transitionDuration = transitionDuration;
      }

      element.style.height = wrapperHeight + 'px';

      if (_this.props.onEntering) {
        _this.props.onEntering(element);
      }
    }, _this.handleEntered = function (element) {
      element.style.transitionDuration = '0ms'; // safari fix
      element.style.height = 'auto';
      reflow(element);
      if (_this.props.onEntered) {
        _this.props.onEntered(element);
      }
    }, _this.handleExit = function (element) {
      var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;
      element.style.height = wrapperHeight + 'px';
      if (_this.props.onExit) {
        _this.props.onExit(element);
      }
    }, _this.handleExiting = function (element) {
      var _this$props2 = _this.props,
          transitionDuration = _this$props2.transitionDuration,
          theme = _this$props2.theme;

      var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;

      if (transitionDuration) {
        if (transitionDuration === 'auto') {
          var getAutoHeightDuration = theme.transitions.getAutoHeightDuration;

          element.style.transitionDuration = getAutoHeightDuration(wrapperHeight) + 'ms';
        } else if (typeof transitionDuration === 'number') {
          element.style.transitionDuration = transitionDuration + 'ms';
        } else {
          element.style.transitionDuration = transitionDuration;
        }
      }

      element.style.height = '0px';
      if (_this.props.onExiting) {
        _this.props.onExiting(element);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Collapse, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          onEnter = _props.onEnter,
          onEntering = _props.onEntering,
          onExit = _props.onExit,
          onExiting = _props.onExiting,
          transitionDuration = _props.transitionDuration,
          theme = _props.theme,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'classes', 'onEnter', 'onEntering', 'onExit', 'onExiting', 'transitionDuration', 'theme']);


      return _react2.default.createElement(
        _Transition2.default,
        (0, _extends3.default)({
          onEntering: this.handleEntering,
          onEnter: this.handleEnter,
          onEntered: this.handleEntered,
          enteredClassName: classes.entered,
          onExiting: this.handleExiting,
          onExit: this.handleExit
        }, other),
        _react2.default.createElement(
          'div',
          { className: classes.container },
          _react2.default.createElement(
            'div',
            {
              ref: function ref(node) {
                _this2.wrapper = node;
              }
            },
            children
          )
        )
      );
    }
  }]);
  return Collapse;
}(_react2.default.Component);

Collapse.defaultProps = {
  in: false,
  theme: {},
  transitionDuration: 300
};
Collapse.propTypes = process.env.NODE_ENV !== "production" ? (_ref2 = {
  classes: require('prop-types').object.isRequired,
  theme: require('prop-types').object.isRequired,
  transitionDuration: require('prop-types').number.isRequired,
  children: typeof babelPluginFlowReactPropTypes_proptype_Node === 'function' ? babelPluginFlowReactPropTypes_proptype_Node : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Node)
}, (0, _defineProperty3.default)(_ref2, 'classes', require('prop-types').object), (0, _defineProperty3.default)(_ref2, 'in', require('prop-types').bool), (0, _defineProperty3.default)(_ref2, 'onEnter', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref2, 'onEntering', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref2, 'onEntered', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref2, 'onExit', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref2, 'onExiting', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref2, 'onExited', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref2, 'theme', require('prop-types').object), (0, _defineProperty3.default)(_ref2, 'transitionDuration', require('prop-types').oneOfType([require('prop-types').number, require('prop-types').string])), _ref2) : {};
Collapse.propTypes = process.env.NODE_ENV !== "production" ? (_ref3 = {
  classes: require('prop-types').object.isRequired,
  theme: require('prop-types').object.isRequired,
  transitionDuration: require('prop-types').number.isRequired,
  children: typeof babelPluginFlowReactPropTypes_proptype_Node === 'function' ? babelPluginFlowReactPropTypes_proptype_Node : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Node)
}, (0, _defineProperty3.default)(_ref3, 'classes', require('prop-types').object), (0, _defineProperty3.default)(_ref3, 'in', require('prop-types').bool), (0, _defineProperty3.default)(_ref3, 'onEnter', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref3, 'onEntering', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref3, 'onEntered', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref3, 'onExit', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref3, 'onExiting', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref3, 'onExited', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref3, 'theme', require('prop-types').object), (0, _defineProperty3.default)(_ref3, 'transitionDuration', require('prop-types').oneOfType([require('prop-types').number, require('prop-types').string])), _ref3) : {};
exports.default = (0, _withStyles2.default)(styles, {
  withTheme: true,
  name: 'MuiCollapse'
})(Collapse);