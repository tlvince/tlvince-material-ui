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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Modal = require('../internal/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Slide = require('../transitions/Slide');

var _Slide2 = _interopRequireDefault(_Slide);

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _helpers = require('../utils/helpers');

var _transitions = require('../styles/transitions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Node = require('react').babelPluginFlowReactPropTypes_proptype_Node || require('prop-types').any;

function getSlideDirection(anchor) {
  if (anchor === 'left') {
    return 'right';
  } else if (anchor === 'right') {
    return 'left';
  } else if (anchor === 'top') {
    return 'down';
  }

  // (anchor === 'bottom')
  return 'up';
}

var styles = exports.styles = function styles(theme) {
  return {
    paper: {
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      flex: '1 0 auto',
      position: 'fixed',
      top: 0,
      zIndex: theme.zIndex.navDrawer,
      willChange: 'transform',
      '&:focus': {
        outline: 'none'
      },
      WebkitOverflowScrolling: 'touch' // Add iOS momentum scrolling.
    },
    anchorLeft: {
      left: 0,
      right: 'auto'
    },
    anchorRight: {
      left: 'auto',
      right: 0
    },
    anchorTop: {
      top: 0,
      left: 0,
      bottom: 'auto',
      right: 0,
      height: 'auto',
      maxHeight: '100vh'
    },
    anchorBottom: {
      top: 'auto',
      left: 0,
      bottom: 0,
      right: 0,
      height: 'auto',
      maxHeight: '100vh'
    },
    docked: {
      flex: '0 0 auto',
      '& $paper': {
        borderRight: '1px solid ' + theme.palette.text.divider
      }
    },
    modal: {}
  };
};

var babelPluginFlowReactPropTypes_proptype_Props = {
  anchor: require('prop-types').oneOf(['left', 'top', 'right', 'bottom']),
  children: typeof babelPluginFlowReactPropTypes_proptype_Node === 'function' ? babelPluginFlowReactPropTypes_proptype_Node.isRequired ? babelPluginFlowReactPropTypes_proptype_Node.isRequired : babelPluginFlowReactPropTypes_proptype_Node : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Node).isRequired,
  classes: require('prop-types').object,
  className: require('prop-types').string,
  enterTransitionDuration: require('prop-types').number,
  elevation: require('prop-types').number,
  leaveTransitionDuration: require('prop-types').number,
  ModalProps: require('prop-types').object,
  onRequestClose: require('prop-types').func,
  open: require('prop-types').bool,
  SlideProps: require('prop-types').object,
  theme: require('prop-types').object.isRequired,
  type: require('prop-types').oneOf(['permanent', 'persistent', 'temporary']).isRequired
};

var Drawer = function (_React$Component) {
  (0, _inherits3.default)(Drawer, _React$Component);

  function Drawer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Drawer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Drawer.__proto__ || (0, _getPrototypeOf2.default)(Drawer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      // Let's assume that the Drawer will always be rendered on user space.
      // We use that state is order to skip the appear transition during the
      // initial mount of the component.
      firstMount: true
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Drawer, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.setState({
        firstMount: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          anchorProp = _props.anchor,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          elevation = _props.elevation,
          enterTransitionDuration = _props.enterTransitionDuration,
          leaveTransitionDuration = _props.leaveTransitionDuration,
          ModalProps = _props.ModalProps,
          onRequestClose = _props.onRequestClose,
          open = _props.open,
          SlideProps = _props.SlideProps,
          theme = _props.theme,
          type = _props.type,
          other = (0, _objectWithoutProperties3.default)(_props, ['anchor', 'children', 'classes', 'className', 'elevation', 'enterTransitionDuration', 'leaveTransitionDuration', 'ModalProps', 'onRequestClose', 'open', 'SlideProps', 'theme', 'type']);


      var rtl = theme.dir === 'rtl';
      var anchor = anchorProp;
      if (rtl && ['left', 'right'].includes(anchor)) {
        anchor = anchor === 'left' ? 'right' : 'left';
      }

      var drawer = _react2.default.createElement(
        _Paper2.default,
        {
          elevation: type === 'temporary' ? elevation : 0,
          square: true,
          className: (0, _classnames2.default)(classes.paper, classes['anchor' + (0, _helpers.capitalizeFirstLetter)(anchor)])
        },
        children
      );

      if (type === 'permanent') {
        return _react2.default.createElement(
          'div',
          (0, _extends3.default)({ className: (0, _classnames2.default)(classes.docked, className) }, other),
          drawer
        );
      }

      var slidingDrawer = _react2.default.createElement(
        _Slide2.default,
        (0, _extends3.default)({
          'in': open,
          direction: getSlideDirection(anchor),
          enterTransitionDuration: enterTransitionDuration,
          leaveTransitionDuration: leaveTransitionDuration,
          transitionAppear: !this.state.firstMount
        }, SlideProps),
        drawer
      );

      if (type === 'persistent') {
        return _react2.default.createElement(
          'div',
          (0, _extends3.default)({ className: (0, _classnames2.default)(classes.docked, className) }, other),
          slidingDrawer
        );
      }

      // type === temporary
      return _react2.default.createElement(
        _Modal2.default,
        (0, _extends3.default)({
          backdropTransitionDuration: open ? enterTransitionDuration : leaveTransitionDuration,
          className: (0, _classnames2.default)(classes.modal, className),
          show: open,
          onRequestClose: onRequestClose
        }, other, ModalProps),
        slidingDrawer
      );
    }
  }]);
  return Drawer;
}(_react2.default.Component);

Drawer.defaultProps = {
  anchor: 'left',
  elevation: 16,
  enterTransitionDuration: _transitions.duration.enteringScreen,
  leaveTransitionDuration: _transitions.duration.leavingScreen,
  open: false,
  type: 'temporary' // Mobile first.
};
Drawer.propTypes = process.env.NODE_ENV !== "production" ? (_ref2 = {
  anchor: require('prop-types').oneOf(['left']).isRequired,
  classes: require('prop-types').object.isRequired,
  elevation: require('prop-types').number.isRequired,
  enterTransitionDuration: require('prop-types').number.isRequired,
  leaveTransitionDuration: require('prop-types').number.isRequired,
  open: require('prop-types').bool.isRequired
}, (0, _defineProperty3.default)(_ref2, 'anchor', require('prop-types').oneOf(['left', 'top', 'right', 'bottom'])), (0, _defineProperty3.default)(_ref2, 'children', typeof babelPluginFlowReactPropTypes_proptype_Node === 'function' ? babelPluginFlowReactPropTypes_proptype_Node.isRequired ? babelPluginFlowReactPropTypes_proptype_Node.isRequired : babelPluginFlowReactPropTypes_proptype_Node : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Node).isRequired), (0, _defineProperty3.default)(_ref2, 'classes', require('prop-types').object), (0, _defineProperty3.default)(_ref2, 'className', require('prop-types').string), (0, _defineProperty3.default)(_ref2, 'enterTransitionDuration', require('prop-types').number), (0, _defineProperty3.default)(_ref2, 'elevation', require('prop-types').number), (0, _defineProperty3.default)(_ref2, 'leaveTransitionDuration', require('prop-types').number), (0, _defineProperty3.default)(_ref2, 'ModalProps', require('prop-types').object), (0, _defineProperty3.default)(_ref2, 'onRequestClose', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'open', require('prop-types').bool), (0, _defineProperty3.default)(_ref2, 'SlideProps', require('prop-types').object), (0, _defineProperty3.default)(_ref2, 'theme', require('prop-types').object.isRequired), (0, _defineProperty3.default)(_ref2, 'type', require('prop-types').oneOf(['permanent', 'persistent', 'temporary']).isRequired), _ref2) : {};
Drawer.propTypes = process.env.NODE_ENV !== "production" ? (_ref3 = {
  anchor: require('prop-types').oneOf(['left']).isRequired,
  classes: require('prop-types').object.isRequired,
  elevation: require('prop-types').number.isRequired,
  enterTransitionDuration: require('prop-types').number.isRequired,
  leaveTransitionDuration: require('prop-types').number.isRequired,
  open: require('prop-types').bool.isRequired
}, (0, _defineProperty3.default)(_ref3, 'anchor', require('prop-types').oneOf(['left', 'top', 'right', 'bottom'])), (0, _defineProperty3.default)(_ref3, 'children', typeof babelPluginFlowReactPropTypes_proptype_Node === 'function' ? babelPluginFlowReactPropTypes_proptype_Node.isRequired ? babelPluginFlowReactPropTypes_proptype_Node.isRequired : babelPluginFlowReactPropTypes_proptype_Node : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Node).isRequired), (0, _defineProperty3.default)(_ref3, 'classes', require('prop-types').object), (0, _defineProperty3.default)(_ref3, 'className', require('prop-types').string), (0, _defineProperty3.default)(_ref3, 'enterTransitionDuration', require('prop-types').number), (0, _defineProperty3.default)(_ref3, 'elevation', require('prop-types').number), (0, _defineProperty3.default)(_ref3, 'leaveTransitionDuration', require('prop-types').number), (0, _defineProperty3.default)(_ref3, 'ModalProps', require('prop-types').object), (0, _defineProperty3.default)(_ref3, 'onRequestClose', require('prop-types').func), (0, _defineProperty3.default)(_ref3, 'open', require('prop-types').bool), (0, _defineProperty3.default)(_ref3, 'SlideProps', require('prop-types').object), (0, _defineProperty3.default)(_ref3, 'theme', require('prop-types').object.isRequired), (0, _defineProperty3.default)(_ref3, 'type', require('prop-types').oneOf(['permanent', 'persistent', 'temporary']).isRequired), _ref3) : {};
exports.default = (0, _withStyles2.default)(styles, { withTheme: true, name: 'MuiDrawer' })(Drawer);