'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _ref;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _helpers = require('../utils/helpers');

var _Modal = require('../internal/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Fade = require('../transitions/Fade');

var _Fade2 = _interopRequireDefault(_Fade);

var _transitions = require('../styles/transitions');

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Node = require('react').babelPluginFlowReactPropTypes_proptype_Node || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_TransitionCallback = require('../internal/Transition').babelPluginFlowReactPropTypes_proptype_TransitionCallback || require('prop-types').any;

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    paper: {
      display: 'flex',
      margin: theme.spacing.unit * 4,
      flexDirection: 'column',
      flex: '0 1 auto',
      position: 'relative',
      maxHeight: '90vh',
      '&:focus': {
        outline: 'none'
      }
    },
    paperWidthXs: {
      maxWidth: theme.breakpoints.getWidth('xs')
    },
    paperWidthSm: {
      maxWidth: theme.breakpoints.getWidth('sm')
    },
    paperWidthMd: {
      maxWidth: theme.breakpoints.getWidth('md')
    },
    fullScreen: {
      margin: 0,
      width: '100%',
      maxWidth: '100%',
      height: '100%',
      maxHeight: '100%',
      borderRadius: 0
    }
  };
};

var babelPluginFlowReactPropTypes_proptype_Props = {
  children: typeof babelPluginFlowReactPropTypes_proptype_Node === 'function' ? babelPluginFlowReactPropTypes_proptype_Node : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Node),
  classes: require('prop-types').object,
  className: require('prop-types').string,
  fullScreen: require('prop-types').bool,
  ignoreBackdropClick: require('prop-types').bool,
  ignoreEscapeKeyUp: require('prop-types').bool,
  enterTransitionDuration: require('prop-types').number,
  leaveTransitionDuration: require('prop-types').number,
  maxWidth: require('prop-types').oneOf(['xs', 'sm', 'md']),
  onBackdropClick: require('prop-types').func,
  onEnter: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onEntering: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onEntered: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onEscapeKeyUp: require('prop-types').func,
  onExit: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExiting: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExited: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onRequestClose: require('prop-types').func,
  open: require('prop-types').bool,
  transition: typeof babelPluginFlowReactPropTypes_proptype_Node === 'function' ? babelPluginFlowReactPropTypes_proptype_Node : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Node)
};


/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 */
function Dialog(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      fullScreen = props.fullScreen,
      ignoreBackdropClick = props.ignoreBackdropClick,
      ignoreEscapeKeyUp = props.ignoreEscapeKeyUp,
      enterTransitionDuration = props.enterTransitionDuration,
      leaveTransitionDuration = props.leaveTransitionDuration,
      maxWidth = props.maxWidth,
      open = props.open,
      onBackdropClick = props.onBackdropClick,
      onEscapeKeyUp = props.onEscapeKeyUp,
      onEnter = props.onEnter,
      onEntering = props.onEntering,
      onEntered = props.onEntered,
      onExit = props.onExit,
      onExiting = props.onExiting,
      onExited = props.onExited,
      onRequestClose = props.onRequestClose,
      transition = props.transition,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'classes', 'className', 'fullScreen', 'ignoreBackdropClick', 'ignoreEscapeKeyUp', 'enterTransitionDuration', 'leaveTransitionDuration', 'maxWidth', 'open', 'onBackdropClick', 'onEscapeKeyUp', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited', 'onRequestClose', 'transition']);


  var createTransitionFn = typeof transition === 'function' ? _react2.default.createElement : _react2.default.cloneElement;

  return _react2.default.createElement(
    _Modal2.default,
    (0, _extends3.default)({
      className: (0, _classnames2.default)(classes.root, className),
      backdropTransitionDuration: open ? enterTransitionDuration : leaveTransitionDuration,
      ignoreBackdropClick: ignoreBackdropClick,
      ignoreEscapeKeyUp: ignoreEscapeKeyUp,
      onBackdropClick: onBackdropClick,
      onEscapeKeyUp: onEscapeKeyUp,
      onRequestClose: onRequestClose,
      show: open
    }, other),
    createTransitionFn(
    /* $FlowFixMe - FIXME See Snackbar for similar create vs clone example */
    transition, {
      in: open,
      transitionAppear: true,
      enterTransitionDuration: enterTransitionDuration,
      leaveTransitionDuration: leaveTransitionDuration,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered,
      onExit: onExit,
      onExiting: onExiting,
      onExited: onExited
    }, _react2.default.createElement(
      _Paper2.default,
      {
        elevation: 24,
        className: (0, _classnames2.default)(classes.paper, classes['paperWidth' + (0, _helpers.capitalizeFirstLetter)(maxWidth)], (0, _defineProperty3.default)({}, classes.fullScreen, fullScreen))
      },
      children
    ))
  );
}

Dialog.propTypes = process.env.NODE_ENV !== "production" ? (_ref = {
  classes: require('prop-types').object.isRequired,
  children: typeof babelPluginFlowReactPropTypes_proptype_Node === 'function' ? babelPluginFlowReactPropTypes_proptype_Node : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Node)
}, (0, _defineProperty3.default)(_ref, 'classes', require('prop-types').object), (0, _defineProperty3.default)(_ref, 'className', require('prop-types').string), (0, _defineProperty3.default)(_ref, 'fullScreen', require('prop-types').bool), (0, _defineProperty3.default)(_ref, 'ignoreBackdropClick', require('prop-types').bool), (0, _defineProperty3.default)(_ref, 'ignoreEscapeKeyUp', require('prop-types').bool), (0, _defineProperty3.default)(_ref, 'enterTransitionDuration', require('prop-types').number), (0, _defineProperty3.default)(_ref, 'leaveTransitionDuration', require('prop-types').number), (0, _defineProperty3.default)(_ref, 'maxWidth', require('prop-types').oneOf(['xs', 'sm', 'md'])), (0, _defineProperty3.default)(_ref, 'onBackdropClick', require('prop-types').func), (0, _defineProperty3.default)(_ref, 'onEnter', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref, 'onEntering', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref, 'onEntered', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref, 'onEscapeKeyUp', require('prop-types').func), (0, _defineProperty3.default)(_ref, 'onExit', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref, 'onExiting', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref, 'onExited', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref, 'onRequestClose', require('prop-types').func), (0, _defineProperty3.default)(_ref, 'open', require('prop-types').bool), (0, _defineProperty3.default)(_ref, 'transition', typeof babelPluginFlowReactPropTypes_proptype_Node === 'function' ? babelPluginFlowReactPropTypes_proptype_Node : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Node)), _ref) : {};
Dialog.defaultProps = {
  fullScreen: false,
  ignoreBackdropClick: false,
  ignoreEscapeKeyUp: false,
  enterTransitionDuration: _transitions.duration.enteringScreen,
  leaveTransitionDuration: _transitions.duration.leavingScreen,
  maxWidth: 'sm',
  open: false,
  transition: _Fade2.default
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiDialog' })(Dialog);