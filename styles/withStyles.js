'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sheetsManager = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _minSafeInteger = require('babel-runtime/core-js/number/min-safe-integer');

var _minSafeInteger2 = _interopRequireDefault(_minSafeInteger);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _hoistNonReactStatics = require('hoist-non-react-statics');

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _wrapDisplayName = require('recompose/wrapDisplayName');

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

var _createEagerFactory = require('recompose/createEagerFactory');

var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

var _getDisplayName = require('recompose/getDisplayName');

var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

var _contextTypes = require('react-jss/lib/contextTypes');

var _contextTypes2 = _interopRequireDefault(_contextTypes);

var _jss = require('react-jss/lib/jss');

var _jss2 = _interopRequireDefault(_jss);

var _ns = require('react-jss/lib/ns');

var ns = _interopRequireWildcard(_ns);

var _createMuiTheme = require('./createMuiTheme');

var _createMuiTheme2 = _interopRequireDefault(_createMuiTheme);

var _themeListener = require('./themeListener');

var _themeListener2 = _interopRequireDefault(_themeListener);

var _createGenerateClassName = require('./createGenerateClassName');

var _createGenerateClassName2 = _interopRequireDefault(_createGenerateClassName);

var _getStylesCreator = require('./getStylesCreator');

var _getStylesCreator2 = _interopRequireDefault(_getStylesCreator);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_ComponentType = require('prop-types').func; //  weak

// Use a singleton or the provided one by the context.
var generateClassName = (0, _createGenerateClassName2.default)();

// Global index counter to preserve source order.
// As we create the style sheet during componentWillMount lifecycle,
// children are handled after the parents, so the order of style elements would
// be parent->child. It is a problem though when a parent passes a className
// which needs to override any childs styles. StyleSheet of the child has a higher
// specificity, because of the source order.
// So our solution is to render sheets them in the reverse order child->sheet, so
// that parent has a higher specificity.
var indexCounter = _minSafeInteger2.default;

var sheetsManager = exports.sheetsManager = new _map2.default();

// We use the same empty object to ref count the styles that don't need a theme object.
var noopTheme = {};

// In order to have self-supporting components, we rely on default theme when not provided.
var defaultTheme = void 0;

function getDefaultTheme() {
  if (defaultTheme) {
    return defaultTheme;
  }

  defaultTheme = (0, _createMuiTheme2.default)();
  return defaultTheme;
}

// Link a style sheet with a component.
// It does not modify the component passed to it;
// instead, it returns a new, with a `classes` property.
function withStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  function enhance(BaseComponent) {
    var _options$withTheme = options.withTheme,
        withTheme = _options$withTheme === undefined ? false : _options$withTheme,
        name = options.name,
        styleSheetOptions = (0, _objectWithoutProperties3.default)(options, ['withTheme', 'name']);

    var factory = (0, _createEagerFactory2.default)(BaseComponent);
    var stylesCreator = (0, _getStylesCreator2.default)(stylesOrCreator);
    var listenToTheme = stylesCreator.themingEnabled || withTheme || typeof name === 'string';

    if (stylesCreator.options.index === undefined) {
      indexCounter += 1;
      stylesCreator.options.index = indexCounter;
    }

    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(indexCounter < 0, ['Material-UI: you might have a memory leak.', 'The indexCounter is not supposed to grow that much.'].join(' ')) : void 0;

    var Style = function (_React$Component) {
      (0, _inherits3.default)(Style, _React$Component);

      // Exposed for tests purposes
      function Style(props, context) {
        (0, _classCallCheck3.default)(this, Style);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Style.__proto__ || (0, _getPrototypeOf2.default)(Style)).call(this, props, context));

        _this.state = {};
        _this.unsubscribeId = null;
        _this.jss = null;
        _this.sheetsManager = null;
        _this.stylesCreatorSaved = null;
        _this.theme = null;
        _this.sheetOptions = null;
        _this.theme = null;

        _this.jss = _this.context[ns.jss] || _jss2.default;
        _this.sheetsManager = _this.context.sheetsManager || sheetsManager;
        // Attach the stylesCreator to the instance of the component as in the context
        // of react-hot-loader the hooks can be executed in a different closure context:
        // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
        _this.stylesCreatorSaved = stylesCreator;
        _this.sheetOptions = (0, _extends3.default)({
          generateClassName: generateClassName
        }, _this.context[ns.sheetOptions]);
        // We use || as it's lazy evaluated.
        _this.theme = listenToTheme ? _themeListener2.default.initial(context) || getDefaultTheme() : noopTheme;
        return _this;
      }

      // Exposed for test purposes.


      (0, _createClass3.default)(Style, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          this.attach(this.theme);
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          var _this2 = this;

          if (!listenToTheme) {
            return;
          }

          this.unsubscribeId = _themeListener2.default.subscribe(this.context, function (theme) {
            var oldTheme = _this2.theme;
            _this2.theme = theme;
            _this2.attach(_this2.theme);

            // Rerender the component so the underlying component gets the theme update.
            _this2.setState({}, function () {
              _this2.detach(oldTheme);
            });
          });
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.detach(this.theme);

          if (this.unsubscribeId !== null) {
            _themeListener2.default.unsubscribe(this.context, this.unsubscribeId);
          }
        }
      }, {
        key: 'attach',
        value: function attach(theme) {
          var stylesCreatorSaved = this.stylesCreatorSaved;
          var sheetManager = this.sheetsManager.get(stylesCreatorSaved);

          if (!sheetManager) {
            sheetManager = new _map2.default();
            this.sheetsManager.set(stylesCreatorSaved, sheetManager);
          }

          var sheetManagerTheme = sheetManager.get(theme);

          if (!sheetManagerTheme) {
            sheetManagerTheme = {
              refs: 0,
              sheet: null
            };
            sheetManager.set(theme, sheetManagerTheme);
          }

          if (sheetManagerTheme.refs === 0) {
            var styles = stylesCreatorSaved.create(theme, name);
            var _meta = void 0;

            if (process.env.NODE_ENV !== 'production') {
              _meta = name || (0, _getDisplayName2.default)(BaseComponent);
              // Sanitize the string as will be used in development to prefix the generated
              // class name.
              _meta = _meta.replace(new RegExp(/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g), '-');
            }

            var sheet = this.jss.createStyleSheet(styles, (0, _extends3.default)({
              meta: _meta,
              link: false
            }, this.sheetOptions, stylesCreatorSaved.options, {
              name: name
            }, styleSheetOptions));

            sheetManagerTheme.sheet = sheet;
            sheet.attach();

            var sheetsRegistry = this.context[ns.sheetsRegistry];
            if (sheetsRegistry) {
              sheetsRegistry.add(sheet);
            }
          }

          sheetManagerTheme.refs += 1;
        }
      }, {
        key: 'detach',
        value: function detach(theme) {
          var stylesCreatorSaved = this.stylesCreatorSaved;
          var sheetManager = this.sheetsManager.get(stylesCreatorSaved);
          var sheetManagerTheme = sheetManager.get(theme);

          sheetManagerTheme.refs -= 1;

          if (sheetManagerTheme.refs === 0) {
            sheetManager.delete(theme);
            this.jss.removeStyleSheet(sheetManagerTheme.sheet);
            var sheetsRegistry = this.context[ns.sheetsRegistry];
            if (sheetsRegistry) {
              sheetsRegistry.remove(sheetManagerTheme.sheet);
            }
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var _props = this.props,
              classesProp = _props.classes,
              innerRef = _props.innerRef,
              other = (0, _objectWithoutProperties3.default)(_props, ['classes', 'innerRef']);


          var classes = void 0;
          var sheetManager = this.sheetsManager.get(this.stylesCreatorSaved);
          var sheetsManagerTheme = sheetManager.get(this.theme);
          var renderedClasses = sheetsManagerTheme.sheet.classes;

          if (classesProp) {
            classes = (0, _extends3.default)({}, renderedClasses, (0, _keys2.default)(classesProp).reduce(function (accumulator, key) {
              process.env.NODE_ENV !== "production" ? (0, _warning2.default)(renderedClasses[key], ['Material-UI: the key `' + key + '` ' + ('provided to the classes property is not implemented in ' + (0, _getDisplayName2.default)(BaseComponent) + '.'), 'You can only overrides one of the following: ' + (0, _keys2.default)(renderedClasses).join(',')].join('\n')) : void 0;

              process.env.NODE_ENV !== "production" ? (0, _warning2.default)(!classesProp[key] || typeof classesProp[key] === 'string', ['Material-UI: the key `' + key + '` ' + ('provided to the classes property is not valid for ' + (0, _getDisplayName2.default)(BaseComponent) + '.'), 'You need to provide a non empty string instead of: ' + classesProp[key] + '.'].join('\n')) : void 0;

              if (classesProp[key]) {
                accumulator[key] = renderedClasses[key] + ' ' + classesProp[key];
              }

              return accumulator;
            }, {}));
          } else {
            classes = renderedClasses;
          }

          var more = {};

          // Provide the theme to the wrapped component.
          // So we don't have to use the `withTheme()` Higher-order component.
          if (withTheme) {
            more.theme = this.theme;
          }

          return factory((0, _extends3.default)({
            classes: classes,
            ref: innerRef
          }, more, other));
        }
      }]);
      return Style;
    }(_react2.default.Component);

    Style.Naked = BaseComponent;
    Style.propTypes = process.env.NODE_ENV !== "production" ? {
      classes: require('prop-types').object,
      innerRef: require('prop-types').func
    } : {};
    Style.propTypes = process.env.NODE_ENV !== "production" ? {
      classes: require('prop-types').object,
      innerRef: require('prop-types').func
    } : {};


    Style.contextTypes = (0, _extends3.default)({
      sheetsManager: _propTypes2.default.object
    }, _contextTypes2.default, listenToTheme ? _themeListener2.default.contextTypes : {});

    (0, _hoistNonReactStatics2.default)(Style, BaseComponent);

    // Higher specificity
    Style.options = options;

    if (process.env.NODE_ENV !== 'production') {
      Style.displayName = (0, _wrapDisplayName2.default)(BaseComponent, 'withStyles');
    }

    return Style;
  }

  return enhance;
}

exports.default = withStyles;