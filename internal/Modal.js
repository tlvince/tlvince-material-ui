'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _ref2, _ref3;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _inDOM = require('dom-helpers/util/inDOM');

var _inDOM2 = _interopRequireDefault(_inDOM);

var _contains = require('dom-helpers/query/contains');

var _contains2 = _interopRequireDefault(_contains);

var _activeElement = require('dom-helpers/activeElement');

var _activeElement2 = _interopRequireDefault(_activeElement);

var _ownerDocument = require('dom-helpers/ownerDocument');

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

var _addEventListener = require('../utils/addEventListener');

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _helpers = require('../utils/helpers');

var _Fade = require('../transitions/Fade');

var _Fade2 = _interopRequireDefault(_Fade);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _modalManager = require('./modalManager');

var _modalManager2 = _interopRequireDefault(_modalManager);

var _Backdrop = require('./Backdrop');

var _Backdrop2 = _interopRequireDefault(_Backdrop);

var _Portal = require('./Portal');

var _Portal2 = _interopRequireDefault(_Portal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Element = require('react').babelPluginFlowReactPropTypes_proptype_Element || require('prop-types').any;

// Modals don't open on the server so this won't break concurrency.
// Could also put this on context.
var babelPluginFlowReactPropTypes_proptype_TransitionCallback = require('./Transition').babelPluginFlowReactPropTypes_proptype_TransitionCallback || require('prop-types').any;

var modalManager = (0, _modalManager2.default)();

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      width: '100%',
      height: '100%',
      position: 'fixed',
      zIndex: theme.zIndex.dialog,
      top: 0,
      left: 0
    },
    hidden: {
      visibility: 'hidden'
    }
  };
};

var babelPluginFlowReactPropTypes_proptype_Props = {
  backdropClassName: require('prop-types').string,
  backdropComponent: require('prop-types').func,
  backdropInvisible: require('prop-types').bool,
  backdropTransitionDuration: require('prop-types').number,
  children: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
  classes: require('prop-types').object,
  className: require('prop-types').string,
  keepMounted: require('prop-types').bool,
  disableBackdrop: require('prop-types').bool,
  ignoreBackdropClick: require('prop-types').bool,
  ignoreEscapeKeyUp: require('prop-types').bool,
  modalManager: require('prop-types').object,
  onBackdropClick: require('prop-types').func,
  onEnter: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onEntering: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onEntered: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onEscapeKeyUp: require('prop-types').func,
  onExit: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExiting: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExited: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onRequestClose: require('prop-types').func,
  show: require('prop-types').bool
};

/**
 * @ignore - internal component.
 */
var Modal = function (_React$Component) {
  (0, _inherits3.default)(Modal, _React$Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Modal, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (!this.props.show) {
        this.setState({ exited: true });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.mounted = true;
      if (this.props.show) {
        this.handleShow();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.show && this.state.exited) {
        this.setState({ exited: false });
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      if (!this.props.show && nextProps.show) {
        this.checkForFocus();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.show && this.props.show) {
        this.handleShow();
      }
      // We are waiting for the onExited callback to call handleHide.
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.show || !this.state.exited) {
        this.handleHide();
      }
      this.mounted = false;
    }
  }, {
    key: 'checkForFocus',
    value: function checkForFocus() {
      if (_inDOM2.default) {
        this.lastFocus = (0, _activeElement2.default)();
      }
    }
  }, {
    key: 'restoreLastFocus',
    value: function restoreLastFocus() {
      if (this.lastFocus && this.lastFocus.focus) {
        this.lastFocus.focus();
        this.lastFocus = undefined;
      }
    }
  }, {
    key: 'handleShow',
    value: function handleShow() {
      var doc = (0, _ownerDocument2.default)(_reactDom2.default.findDOMNode(this));
      this.props.modalManager.add(this);
      this.onDocumentKeyUpListener = (0, _addEventListener2.default)(doc, 'keyup', this.handleDocumentKeyUp);
      this.onFocusListener = (0, _addEventListener2.default)(doc, 'focus', this.handleFocusListener, true);
      this.focus();
    }
  }, {
    key: 'focus',
    value: function focus() {
      var currentFocus = (0, _activeElement2.default)((0, _ownerDocument2.default)(_reactDom2.default.findDOMNode(this)));
      var modalContent = this.modal && this.modal.lastChild;
      var focusInModal = currentFocus && (0, _contains2.default)(modalContent, currentFocus);

      if (modalContent && !focusInModal) {
        if (!modalContent.hasAttribute('tabIndex')) {
          modalContent.setAttribute('tabIndex', -1);
          process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: the modal content node does not accept focus. ' + 'For the benefit of assistive technologies, ' + 'the tabIndex of the node is being set to "-1".') : void 0;
        }

        modalContent.focus();
      }
    }
  }, {
    key: 'handleHide',
    value: function handleHide() {
      this.props.modalManager.remove(this);
      if (this.onDocumentKeyUpListener) this.onDocumentKeyUpListener.remove();
      if (this.onFocusListener) this.onFocusListener.remove();
      this.restoreLastFocus();
    }
  }, {
    key: 'renderBackdrop',
    value: function renderBackdrop() {
      var other = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _props = this.props,
          BackdropComponent = _props.backdropComponent,
          backdropClassName = _props.backdropClassName,
          backdropTransitionDuration = _props.backdropTransitionDuration,
          backdropInvisible = _props.backdropInvisible,
          show = _props.show;


      return _react2.default.createElement(
        _Fade2.default,
        (0, _extends3.default)({
          'in': show,
          transitionAppear: true,
          enterTransitionDuration: backdropTransitionDuration,
          leaveTransitionDuration: backdropTransitionDuration,
          timeout: backdropTransitionDuration + 20
        }, other),
        _react2.default.createElement(BackdropComponent, {
          invisible: backdropInvisible,
          className: backdropClassName,
          onClick: this.handleBackdropClick
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          disableBackdrop = _props2.disableBackdrop,
          backdropComponent = _props2.backdropComponent,
          backdropClassName = _props2.backdropClassName,
          backdropTransitionDuration = _props2.backdropTransitionDuration,
          backdropInvisible = _props2.backdropInvisible,
          ignoreBackdropClick = _props2.ignoreBackdropClick,
          ignoreEscapeKeyUp = _props2.ignoreEscapeKeyUp,
          children = _props2.children,
          classes = _props2.classes,
          className = _props2.className,
          keepMounted = _props2.keepMounted,
          modalManagerProp = _props2.modalManager,
          onBackdropClick = _props2.onBackdropClick,
          onEscapeKeyUp = _props2.onEscapeKeyUp,
          onRequestClose = _props2.onRequestClose,
          onEnter = _props2.onEnter,
          onEntering = _props2.onEntering,
          onEntered = _props2.onEntered,
          onExit = _props2.onExit,
          onExiting = _props2.onExiting,
          onExited = _props2.onExited,
          show = _props2.show,
          other = (0, _objectWithoutProperties3.default)(_props2, ['disableBackdrop', 'backdropComponent', 'backdropClassName', 'backdropTransitionDuration', 'backdropInvisible', 'ignoreBackdropClick', 'ignoreEscapeKeyUp', 'children', 'classes', 'className', 'keepMounted', 'modalManager', 'onBackdropClick', 'onEscapeKeyUp', 'onRequestClose', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited', 'show']);


      if (!keepMounted && !show && this.state.exited) {
        return null;
      }

      var transitionCallbacks = {
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: this.handleTransitionExited
      };

      var modalChild = _react2.default.Children.only(children);
      var _modalChild$props = modalChild.props,
          role = _modalChild$props.role,
          tabIndex = _modalChild$props.tabIndex;

      var childProps = {};

      if (role === undefined) {
        childProps.role = role === undefined ? 'document' : role;
      }

      if (tabIndex === undefined) {
        childProps.tabIndex = tabIndex == null ? -1 : tabIndex;
      }

      var backdropProps = void 0;

      // It's a Transition like component
      if (modalChild.props.hasOwnProperty('in')) {
        (0, _keys2.default)(transitionCallbacks).forEach(function (key) {
          childProps[key] = (0, _helpers.createChainedFunction)(transitionCallbacks[key], modalChild.props[key]);
        });
      } else {
        backdropProps = transitionCallbacks;
      }

      if ((0, _keys2.default)(childProps).length) {
        modalChild = _react2.default.cloneElement(modalChild, childProps);
      }

      return _react2.default.createElement(
        _Portal2.default,
        {
          open: true,
          ref: function ref(node) {
            _this2.mountNode = node ? node.getLayer() : null;
          }
        },
        _react2.default.createElement(
          'div',
          (0, _extends3.default)({
            className: (0, _classnames2.default)(classes.root, className, (0, _defineProperty3.default)({}, classes.hidden, this.state.exited)),
            ref: function ref(node) {
              _this2.modal = node;
            }
          }, other),
          !disableBackdrop && (!keepMounted || show || !this.state.exited) && this.renderBackdrop(backdropProps),
          modalChild
        )
      );
    }
  }]);
  return Modal;
}(_react2.default.Component);

Modal.defaultProps = {
  backdropComponent: _Backdrop2.default,
  backdropTransitionDuration: 300,
  backdropInvisible: false,
  keepMounted: false,
  disableBackdrop: false,
  ignoreBackdropClick: false,
  ignoreEscapeKeyUp: false,
  modalManager: modalManager,
  show: false
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.state = {
    exited: false
  };
  this.mounted = false;
  this.lastFocus = undefined;
  this.modal = null;
  this.mountNode = null;
  this.onDocumentKeyUpListener = null;
  this.onFocusListener = null;

  this.handleFocusListener = function () {
    if (!_this3.mounted || !_this3.props.modalManager.isTopModal(_this3)) {
      return;
    }

    var currentFocus = (0, _activeElement2.default)((0, _ownerDocument2.default)(_reactDom2.default.findDOMNode(_this3)));
    var modalContent = _this3.modal && _this3.modal.lastChild;

    if (modalContent && modalContent !== currentFocus && !(0, _contains2.default)(modalContent, currentFocus)) {
      modalContent.focus();
    }
  };

  this.handleDocumentKeyUp = function (event) {
    if (!_this3.mounted || !_this3.props.modalManager.isTopModal(_this3)) {
      return;
    }

    if ((0, _keycode2.default)(event) !== 'esc') {
      return;
    }

    var _props3 = _this3.props,
        onEscapeKeyUp = _props3.onEscapeKeyUp,
        onRequestClose = _props3.onRequestClose,
        ignoreEscapeKeyUp = _props3.ignoreEscapeKeyUp;


    if (onEscapeKeyUp) {
      onEscapeKeyUp(event);
    }

    if (onRequestClose && !ignoreEscapeKeyUp) {
      onRequestClose(event);
    }
  };

  this.handleBackdropClick = function (event) {
    if (event.target !== event.currentTarget) {
      return;
    }

    var _props4 = _this3.props,
        onBackdropClick = _props4.onBackdropClick,
        onRequestClose = _props4.onRequestClose,
        ignoreBackdropClick = _props4.ignoreBackdropClick;


    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (onRequestClose && !ignoreBackdropClick) {
      onRequestClose(event);
    }
  };

  this.handleTransitionExited = function () {
    if (_this3.props.onExited) {
      var _props5;

      (_props5 = _this3.props).onExited.apply(_props5, arguments);
    }

    _this3.setState({ exited: true });
    _this3.handleHide();
  };
};

Modal.propTypes = process.env.NODE_ENV !== "production" ? (_ref2 = {
  backdropComponent: require('prop-types').func.isRequired,
  classes: require('prop-types').object.isRequired,
  modalManager: require('prop-types').object.isRequired,
  backdropClassName: require('prop-types').string
}, (0, _defineProperty3.default)(_ref2, 'backdropComponent', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'backdropInvisible', require('prop-types').bool), (0, _defineProperty3.default)(_ref2, 'backdropTransitionDuration', require('prop-types').number), (0, _defineProperty3.default)(_ref2, 'children', typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)), (0, _defineProperty3.default)(_ref2, 'classes', require('prop-types').object), (0, _defineProperty3.default)(_ref2, 'className', require('prop-types').string), (0, _defineProperty3.default)(_ref2, 'keepMounted', require('prop-types').bool), (0, _defineProperty3.default)(_ref2, 'disableBackdrop', require('prop-types').bool), (0, _defineProperty3.default)(_ref2, 'ignoreBackdropClick', require('prop-types').bool), (0, _defineProperty3.default)(_ref2, 'ignoreEscapeKeyUp', require('prop-types').bool), (0, _defineProperty3.default)(_ref2, 'modalManager', require('prop-types').object), (0, _defineProperty3.default)(_ref2, 'onBackdropClick', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'onEnter', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref2, 'onEntering', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref2, 'onEntered', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref2, 'onEscapeKeyUp', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'onExit', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref2, 'onExiting', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref2, 'onExited', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref2, 'onRequestClose', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'show', require('prop-types').bool), _ref2) : {};
Modal.propTypes = process.env.NODE_ENV !== "production" ? (_ref3 = {
  backdropComponent: require('prop-types').func.isRequired,
  classes: require('prop-types').object.isRequired,
  modalManager: require('prop-types').object.isRequired,
  backdropClassName: require('prop-types').string
}, (0, _defineProperty3.default)(_ref3, 'backdropComponent', require('prop-types').func), (0, _defineProperty3.default)(_ref3, 'backdropInvisible', require('prop-types').bool), (0, _defineProperty3.default)(_ref3, 'backdropTransitionDuration', require('prop-types').number), (0, _defineProperty3.default)(_ref3, 'children', typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)), (0, _defineProperty3.default)(_ref3, 'classes', require('prop-types').object), (0, _defineProperty3.default)(_ref3, 'className', require('prop-types').string), (0, _defineProperty3.default)(_ref3, 'keepMounted', require('prop-types').bool), (0, _defineProperty3.default)(_ref3, 'disableBackdrop', require('prop-types').bool), (0, _defineProperty3.default)(_ref3, 'ignoreBackdropClick', require('prop-types').bool), (0, _defineProperty3.default)(_ref3, 'ignoreEscapeKeyUp', require('prop-types').bool), (0, _defineProperty3.default)(_ref3, 'modalManager', require('prop-types').object), (0, _defineProperty3.default)(_ref3, 'onBackdropClick', require('prop-types').func), (0, _defineProperty3.default)(_ref3, 'onEnter', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref3, 'onEntering', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref3, 'onEntered', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref3, 'onEscapeKeyUp', require('prop-types').func), (0, _defineProperty3.default)(_ref3, 'onExit', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref3, 'onExiting', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref3, 'onExited', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref3, 'onRequestClose', require('prop-types').func), (0, _defineProperty3.default)(_ref3, 'show', require('prop-types').bool), _ref3) : {};
exports.default = (0, _withStyles2.default)(styles, { name: 'MuiModal' })(Modal);