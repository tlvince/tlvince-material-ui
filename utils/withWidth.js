'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isWidthDown = exports.isWidthUp = undefined;

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEventListener = require('react-event-listener');

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _createEagerFactory = require('recompose/createEagerFactory');

var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

var _wrapDisplayName = require('recompose/wrapDisplayName');

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

var _withTheme = require('../styles/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _createBreakpoints = require('../styles/createBreakpoints');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_ComponentType = require('prop-types').func; //  weak

/**
 * By default, returns true if screen width is the same or greater than the given breakpoint.
 *
 * @param screenWidth
 * @param breakpoint
 * @param inclusive - defaults to true
 */
var babelPluginFlowReactPropTypes_proptype_Breakpoint = require('../styles/createBreakpoints').babelPluginFlowReactPropTypes_proptype_Breakpoint || require('prop-types').any;

var isWidthUp = exports.isWidthUp = function isWidthUp(breakpoint, screenWidth) {
  var inclusive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (inclusive) {
    return _createBreakpoints.keys.indexOf(breakpoint) <= _createBreakpoints.keys.indexOf(screenWidth);
  }
  return _createBreakpoints.keys.indexOf(breakpoint) < _createBreakpoints.keys.indexOf(screenWidth);
};

/**
 * By default, returns true if screen width is the same or less than the given breakpoint.
 *
 * @param screenWidth
 * @param breakpoint
 * @param inclusive - defaults to true
 */
var isWidthDown = exports.isWidthDown = function isWidthDown(breakpoint, screenWidth) {
  var inclusive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (inclusive) {
    return _createBreakpoints.keys.indexOf(screenWidth) <= _createBreakpoints.keys.indexOf(breakpoint);
  }
  return _createBreakpoints.keys.indexOf(screenWidth) < _createBreakpoints.keys.indexOf(breakpoint);
};

function withWidth() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$resizeInterv = options.resizeInterval,
      resizeInterval = _options$resizeInterv === undefined ? 166 : _options$resizeInterv;


  function enhance(BaseComponent) {
    var _ref2, _ref3;

    var factory = (0, _createEagerFactory2.default)(BaseComponent);

    var Width = function (_React$Component) {
      (0, _inherits3.default)(Width, _React$Component);

      function Width() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Width);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Width.__proto__ || (0, _getPrototypeOf2.default)(Width)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
          width: undefined
        }, _this.handleResize = (0, _debounce2.default)(function () {
          _this.updateWidth(window.innerWidth);
        }, resizeInterval), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
      }

      (0, _createClass3.default)(Width, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.updateWidth(window.innerWidth);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.handleResize.cancel();
        }
      }, {
        key: 'updateWidth',
        value: function updateWidth(innerWidth) {
          var breakpoints = this.props.theme.breakpoints;
          var width = null;

          /**
           * Start with the slowest value as low end devices often have a small screen.
           *
           * innerWidth |0      xs      sm      md      lg      xl
           *            |-------|-------|-------|-------|-------|------>
           * width      |  xs   |  xs   |  sm   |  md   |  lg   |  xl
           */
          var index = 1;
          while (width === null && index < breakpoints.keys.length) {
            var currentWidth = breakpoints.keys[index];

            // @media are inclusive, so reproduce the behavior here.
            if (innerWidth < breakpoints.getWidth(currentWidth)) {
              width = breakpoints.keys[index - 1];
              break;
            }

            index += 1;
          }

          width = width || 'xl';

          if (width !== this.state.width) {
            this.setState({
              width: width
            });
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var _props = this.props,
              initialWidth = _props.initialWidth,
              theme = _props.theme,
              width = _props.width,
              other = (0, _objectWithoutProperties3.default)(_props, ['initialWidth', 'theme', 'width']);

          var props = (0, _extends3.default)({
            width: width || this.state.width || initialWidth
          }, other);

          /**
           * When rendering the component on the server,
           * we have no idea about the client browser screen width.
           * In order to prevent blinks and help the reconciliation of the React tree
           * we are not rendering the child component.
           *
           * An alternative is to use the `initialWidth` property.
           */
          if (props.width === undefined) {
            return null;
          }

          return _react2.default.createElement(
            _reactEventListener2.default,
            { target: 'window', onResize: this.handleResize },
            factory(props)
          );
        }
      }]);
      return Width;
    }(_react2.default.Component);

    Width.propTypes = process.env.NODE_ENV !== "production" ? (_ref2 = {
      theme: require('prop-types').object.isRequired,
      initialWidth: typeof babelPluginFlowReactPropTypes_proptype_Breakpoint === 'function' ? babelPluginFlowReactPropTypes_proptype_Breakpoint : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Breakpoint)
    }, (0, _defineProperty3.default)(_ref2, 'theme', require('prop-types').object), (0, _defineProperty3.default)(_ref2, 'width', typeof babelPluginFlowReactPropTypes_proptype_Breakpoint === 'function' ? babelPluginFlowReactPropTypes_proptype_Breakpoint : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Breakpoint)), _ref2) : {};
    Width.propTypes = process.env.NODE_ENV !== "production" ? (_ref3 = {
      theme: require('prop-types').object.isRequired,
      initialWidth: typeof babelPluginFlowReactPropTypes_proptype_Breakpoint === 'function' ? babelPluginFlowReactPropTypes_proptype_Breakpoint : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Breakpoint)
    }, (0, _defineProperty3.default)(_ref3, 'theme', require('prop-types').object), (0, _defineProperty3.default)(_ref3, 'width', typeof babelPluginFlowReactPropTypes_proptype_Breakpoint === 'function' ? babelPluginFlowReactPropTypes_proptype_Breakpoint : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Breakpoint)), _ref3) : {};


    if (process.env.NODE_ENV !== 'production') {
      Width.displayName = (0, _wrapDisplayName2.default)(BaseComponent, 'withWidth');
    }

    return (0, _withTheme2.default)(Width);
  }

  enhance.propTypes = process.env.NODE_ENV !== "production" ? babelPluginFlowReactPropTypes_proptype_ComponentType === require('prop-types').any ? {} : babelPluginFlowReactPropTypes_proptype_ComponentType : {};
  return enhance;
}

exports.default = withWidth;