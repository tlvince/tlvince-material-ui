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

var _ref, _ref2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Node = require('react').babelPluginFlowReactPropTypes_proptype_Node || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_ComponentType = require('prop-types').func;

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      fontFamily: theme.typography.fontFamily,
      width: '100%',
      borderCollapse: 'collapse',
      borderSpacing: 0,
      overflow: 'hidden'
    }
  };
};

var babelPluginFlowReactPropTypes_proptype_Props = {
  children: typeof babelPluginFlowReactPropTypes_proptype_Node === 'function' ? babelPluginFlowReactPropTypes_proptype_Node : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Node),
  classes: require('prop-types').object,
  className: require('prop-types').string,
  component: require('prop-types').oneOfType([require('prop-types').string, typeof babelPluginFlowReactPropTypes_proptype_ComponentType === 'function' ? babelPluginFlowReactPropTypes_proptype_ComponentType : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_ComponentType)])
};

var Table = function (_React$Component) {
  (0, _inherits3.default)(Table, _React$Component);

  function Table() {
    (0, _classCallCheck3.default)(this, Table);
    return (0, _possibleConstructorReturn3.default)(this, (Table.__proto__ || (0, _getPrototypeOf2.default)(Table)).apply(this, arguments));
  }

  (0, _createClass3.default)(Table, [{
    key: 'getChildContext',
    value: function getChildContext() {
      // eslint-disable-line class-methods-use-this
      return {
        table: {}
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          classNameProp = _props.className,
          children = _props.children,
          ComponentProp = _props.component,
          other = (0, _objectWithoutProperties3.default)(_props, ['classes', 'className', 'children', 'component']);

      var className = (0, _classnames2.default)(classes.root, classNameProp);

      return _react2.default.createElement(
        ComponentProp,
        (0, _extends3.default)({ className: className }, other),
        children
      );
    }
  }]);
  return Table;
}(_react2.default.Component);

Table.defaultProps = {
  component: 'table'
};
Table.propTypes = process.env.NODE_ENV !== "production" ? (_ref = {
  classes: require('prop-types').object.isRequired,
  component: require('prop-types').string.isRequired,
  children: typeof babelPluginFlowReactPropTypes_proptype_Node === 'function' ? babelPluginFlowReactPropTypes_proptype_Node : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Node)
}, (0, _defineProperty3.default)(_ref, 'classes', require('prop-types').object), (0, _defineProperty3.default)(_ref, 'className', require('prop-types').string), (0, _defineProperty3.default)(_ref, 'component', require('prop-types').oneOfType([require('prop-types').string, typeof babelPluginFlowReactPropTypes_proptype_ComponentType === 'function' ? babelPluginFlowReactPropTypes_proptype_ComponentType : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_ComponentType)])), _ref) : {};
Table.propTypes = process.env.NODE_ENV !== "production" ? (_ref2 = {
  classes: require('prop-types').object.isRequired,
  component: require('prop-types').string.isRequired,
  children: typeof babelPluginFlowReactPropTypes_proptype_Node === 'function' ? babelPluginFlowReactPropTypes_proptype_Node : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Node)
}, (0, _defineProperty3.default)(_ref2, 'classes', require('prop-types').object), (0, _defineProperty3.default)(_ref2, 'className', require('prop-types').string), (0, _defineProperty3.default)(_ref2, 'component', require('prop-types').oneOfType([require('prop-types').string, typeof babelPluginFlowReactPropTypes_proptype_ComponentType === 'function' ? babelPluginFlowReactPropTypes_proptype_ComponentType : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_ComponentType)])), _ref2) : {};


Table.childContextTypes = {
  table: _propTypes2.default.object
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTable' })(Table);