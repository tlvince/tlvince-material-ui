'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _ref;
// A grid component using the following libs as inspiration.
//
// For the implementation:
// - http://v4-alpha.getbootstrap.com/layout/flexbox-grid/
// - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
// - https://github.com/roylee0704/react-flexbox-grid
// - https://material.angularjs.org/latest/layout/introduction
//
// Follow this flexbox Guide to better understand the underlying model:
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _requirePropFactory = require('../utils/requirePropFactory');

var _requirePropFactory2 = _interopRequireDefault(_requirePropFactory);

var _Hidden = require('../Hidden');

var _Hidden2 = _interopRequireDefault(_Hidden);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Node = require('react').babelPluginFlowReactPropTypes_proptype_Node || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_ComponentType = require('prop-types').func;

var babelPluginFlowReactPropTypes_proptype_HiddenProps = require('../Hidden/types').babelPluginFlowReactPropTypes_proptype_HiddenProps || require('prop-types').any;

var GUTTERS = [0, 8, 16, 24, 40];
var GRID_SIZES = [true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function generateGrid(globalStyles, theme, breakpoint) {
  // For the auto layouting
  var styles = (0, _defineProperty3.default)({}, 'grid-' + breakpoint, {
    flexBasis: 0,
    flexGrow: 1,
    maxWidth: '100%'
  });

  GRID_SIZES.forEach(function (size) {
    if (typeof size === 'boolean') {
      // Skip the first one as handle above.
      return;
    }

    // Only keep 6 significant numbers.
    var width = Math.round(size / 12 * Math.pow(10, 6)) / Math.pow(10, 4) + '%';

    /* eslint-disable max-len */
    // Close to the bootstrap implementation:
    // https://github.com/twbs/bootstrap/blob/b0508a975d711d6b24c01f57dd5445c22699fac4/scss/mixins/_grid.scss#L69
    /* eslint-enable max-len */
    styles['grid-' + breakpoint + '-' + size] = {
      flexBasis: width,
      maxWidth: width
    };
  });

  // No need for a media query for the first size.
  if (breakpoint === 'xs') {
    (0, _extends3.default)(globalStyles, styles);
  } else {
    globalStyles[theme.breakpoints.up(breakpoint)] = styles;
  }
}

function generateGutter(theme, breakpoint) {
  var styles = {};

  GUTTERS.forEach(function (spacing, index) {
    if (index === 0) {
      // Skip the default style.
      return;
    }

    styles['spacing-' + breakpoint + '-' + spacing] = {
      margin: -spacing / 2,
      width: 'calc(100% + ' + spacing + 'px)',
      '& > $typeItem': {
        padding: spacing / 2
      }
    };
  });

  return styles;
}

// Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',
var styles = exports.styles = function styles(theme) {
  return (0, _extends3.default)({
    typeContainer: {
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%'
    },
    typeItem: {
      boxSizing: 'border-box',
      flex: '0 0 auto',
      margin: '0' // For instance, it's useful when used with a `figure` element.
    },
    'direction-xs-column': {
      flexDirection: 'column'
    },
    'direction-xs-column-reverse': {
      flexDirection: 'column-reverse'
    },
    'direction-xs-row-reverse': {
      flexDirection: 'row-reverse'
    },
    'wrap-xs-nowrap': {
      flexWrap: 'nowrap'
    },
    'align-xs-center': {
      alignItems: 'center'
    },
    'align-xs-flex-start': {
      alignItems: 'flex-start'
    },
    'align-xs-flex-end': {
      alignItems: 'flex-end'
    },
    'align-xs-baseline': {
      alignItems: 'baseline'
    },
    'justify-xs-center': {
      justifyContent: 'center'
    },
    'justify-xs-flex-end': {
      justifyContent: 'flex-end'
    },
    'justify-xs-space-between': {
      justifyContent: 'space-between'
    },
    'justify-xs-space-around': {
      justifyContent: 'space-around'
    }
  }, generateGutter(theme, 'xs'), theme.breakpoints.keys.reduce(function (accumulator, key) {
    // Use side effect over immutability for better performance.
    generateGrid(accumulator, theme, key);
    return accumulator;
  }, {}));
};

var babelPluginFlowReactPropTypes_proptype_Props = {
  children: typeof babelPluginFlowReactPropTypes_proptype_Node === 'function' ? babelPluginFlowReactPropTypes_proptype_Node : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Node),
  classes: require('prop-types').object,
  className: require('prop-types').string,
  component: require('prop-types').oneOfType([require('prop-types').string, typeof babelPluginFlowReactPropTypes_proptype_ComponentType === 'function' ? babelPluginFlowReactPropTypes_proptype_ComponentType : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_ComponentType)]),
  container: require('prop-types').bool,
  item: require('prop-types').bool,
  align: require('prop-types').oneOf(['flex-start', 'center', 'flex-end', 'stretch', 'baseline']),
  direction: require('prop-types').oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  spacing: require('prop-types').oneOf([0, 8, 16, 24, 40]),
  hidden: typeof babelPluginFlowReactPropTypes_proptype_HiddenProps === 'function' ? babelPluginFlowReactPropTypes_proptype_HiddenProps : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_HiddenProps),
  justify: require('prop-types').oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around']),
  wrap: require('prop-types').oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  xs: require('prop-types').oneOfType([require('prop-types').bool, require('prop-types').oneOf([1]), require('prop-types').oneOf([2]), require('prop-types').oneOf([3]), require('prop-types').oneOf([4]), require('prop-types').oneOf([5]), require('prop-types').oneOf([6]), require('prop-types').oneOf([7]), require('prop-types').oneOf([8]), require('prop-types').oneOf([9]), require('prop-types').oneOf([10]), require('prop-types').oneOf([11]), require('prop-types').oneOf([12])]),
  sm: require('prop-types').oneOfType([require('prop-types').bool, require('prop-types').oneOf([1]), require('prop-types').oneOf([2]), require('prop-types').oneOf([3]), require('prop-types').oneOf([4]), require('prop-types').oneOf([5]), require('prop-types').oneOf([6]), require('prop-types').oneOf([7]), require('prop-types').oneOf([8]), require('prop-types').oneOf([9]), require('prop-types').oneOf([10]), require('prop-types').oneOf([11]), require('prop-types').oneOf([12])]),
  md: require('prop-types').oneOfType([require('prop-types').bool, require('prop-types').oneOf([1]), require('prop-types').oneOf([2]), require('prop-types').oneOf([3]), require('prop-types').oneOf([4]), require('prop-types').oneOf([5]), require('prop-types').oneOf([6]), require('prop-types').oneOf([7]), require('prop-types').oneOf([8]), require('prop-types').oneOf([9]), require('prop-types').oneOf([10]), require('prop-types').oneOf([11]), require('prop-types').oneOf([12])]),
  lg: require('prop-types').oneOfType([require('prop-types').bool, require('prop-types').oneOf([1]), require('prop-types').oneOf([2]), require('prop-types').oneOf([3]), require('prop-types').oneOf([4]), require('prop-types').oneOf([5]), require('prop-types').oneOf([6]), require('prop-types').oneOf([7]), require('prop-types').oneOf([8]), require('prop-types').oneOf([9]), require('prop-types').oneOf([10]), require('prop-types').oneOf([11]), require('prop-types').oneOf([12])]),
  xl: require('prop-types').oneOfType([require('prop-types').bool, require('prop-types').oneOf([1]), require('prop-types').oneOf([2]), require('prop-types').oneOf([3]), require('prop-types').oneOf([4]), require('prop-types').oneOf([5]), require('prop-types').oneOf([6]), require('prop-types').oneOf([7]), require('prop-types').oneOf([8]), require('prop-types').oneOf([9]), require('prop-types').oneOf([10]), require('prop-types').oneOf([11]), require('prop-types').oneOf([12])])
};


function Grid(props) {
  var _classNames;

  var classes = props.classes,
      classNameProp = props.className,
      ComponentProp = props.component,
      container = props.container,
      item = props.item,
      align = props.align,
      direction = props.direction,
      spacing = props.spacing,
      hidden = props.hidden,
      justify = props.justify,
      wrap = props.wrap,
      xs = props.xs,
      sm = props.sm,
      md = props.md,
      lg = props.lg,
      xl = props.xl,
      other = (0, _objectWithoutProperties3.default)(props, ['classes', 'className', 'component', 'container', 'item', 'align', 'direction', 'spacing', 'hidden', 'justify', 'wrap', 'xs', 'sm', 'md', 'lg', 'xl']);


  var className = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.typeContainer, container), (0, _defineProperty3.default)(_classNames, classes.typeItem, item), (0, _defineProperty3.default)(_classNames, classes['spacing-xs-' + String(spacing)], container && spacing !== 0), (0, _defineProperty3.default)(_classNames, classes['direction-xs-' + String(direction)], direction !== Grid.defaultProps.direction), (0, _defineProperty3.default)(_classNames, classes['wrap-xs-' + String(wrap)], wrap !== Grid.defaultProps.wrap), (0, _defineProperty3.default)(_classNames, classes['align-xs-' + String(align)], align !== Grid.defaultProps.align), (0, _defineProperty3.default)(_classNames, classes['justify-xs-' + String(justify)], justify !== Grid.defaultProps.justify), (0, _defineProperty3.default)(_classNames, classes['grid-xs'], xs === true), (0, _defineProperty3.default)(_classNames, classes['grid-xs-' + String(xs)], xs && xs !== true), (0, _defineProperty3.default)(_classNames, classes['grid-sm'], sm === true), (0, _defineProperty3.default)(_classNames, classes['grid-sm-' + String(sm)], sm && sm !== true), (0, _defineProperty3.default)(_classNames, classes['grid-md'], md === true), (0, _defineProperty3.default)(_classNames, classes['grid-md-' + String(md)], md && md !== true), (0, _defineProperty3.default)(_classNames, classes['grid-lg'], lg === true), (0, _defineProperty3.default)(_classNames, classes['grid-lg-' + String(lg)], lg && lg !== true), (0, _defineProperty3.default)(_classNames, classes['grid-xl'], xl === true), (0, _defineProperty3.default)(_classNames, classes['grid-xl-' + String(xl)], xl && xl !== true), _classNames), classNameProp);
  var gridProps = (0, _extends3.default)({ className: className }, other);

  if (hidden) {
    return _react2.default.createElement(
      _Hidden2.default,
      hidden,
      _react2.default.createElement(ComponentProp, gridProps)
    );
  }

  return _react2.default.createElement(ComponentProp, gridProps);
}

Grid.propTypes = process.env.NODE_ENV !== "production" ? (_ref = {
  classes: require('prop-types').object.isRequired,
  component: typeof babelPluginFlowReactPropTypes_proptype_ComponentType === 'function' ? babelPluginFlowReactPropTypes_proptype_ComponentType.isRequired ? babelPluginFlowReactPropTypes_proptype_ComponentType.isRequired : babelPluginFlowReactPropTypes_proptype_ComponentType : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_ComponentType).isRequired,
  children: typeof babelPluginFlowReactPropTypes_proptype_Node === 'function' ? babelPluginFlowReactPropTypes_proptype_Node : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Node)
}, (0, _defineProperty3.default)(_ref, 'classes', require('prop-types').object), (0, _defineProperty3.default)(_ref, 'className', require('prop-types').string), (0, _defineProperty3.default)(_ref, 'component', require('prop-types').oneOfType([require('prop-types').string, typeof babelPluginFlowReactPropTypes_proptype_ComponentType === 'function' ? babelPluginFlowReactPropTypes_proptype_ComponentType : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_ComponentType)])), (0, _defineProperty3.default)(_ref, 'container', require('prop-types').bool), (0, _defineProperty3.default)(_ref, 'item', require('prop-types').bool), (0, _defineProperty3.default)(_ref, 'align', require('prop-types').oneOf(['flex-start', 'center', 'flex-end', 'stretch', 'baseline'])), (0, _defineProperty3.default)(_ref, 'direction', require('prop-types').oneOf(['row', 'row-reverse', 'column', 'column-reverse'])), (0, _defineProperty3.default)(_ref, 'spacing', require('prop-types').oneOf([0, 8, 16, 24, 40])), (0, _defineProperty3.default)(_ref, 'hidden', typeof babelPluginFlowReactPropTypes_proptype_HiddenProps === 'function' ? babelPluginFlowReactPropTypes_proptype_HiddenProps : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_HiddenProps)), (0, _defineProperty3.default)(_ref, 'justify', require('prop-types').oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around'])), (0, _defineProperty3.default)(_ref, 'wrap', require('prop-types').oneOf(['nowrap', 'wrap', 'wrap-reverse'])), (0, _defineProperty3.default)(_ref, 'xs', require('prop-types').oneOfType([require('prop-types').bool, require('prop-types').oneOf([1]), require('prop-types').oneOf([2]), require('prop-types').oneOf([3]), require('prop-types').oneOf([4]), require('prop-types').oneOf([5]), require('prop-types').oneOf([6]), require('prop-types').oneOf([7]), require('prop-types').oneOf([8]), require('prop-types').oneOf([9]), require('prop-types').oneOf([10]), require('prop-types').oneOf([11]), require('prop-types').oneOf([12])])), (0, _defineProperty3.default)(_ref, 'sm', require('prop-types').oneOfType([require('prop-types').bool, require('prop-types').oneOf([1]), require('prop-types').oneOf([2]), require('prop-types').oneOf([3]), require('prop-types').oneOf([4]), require('prop-types').oneOf([5]), require('prop-types').oneOf([6]), require('prop-types').oneOf([7]), require('prop-types').oneOf([8]), require('prop-types').oneOf([9]), require('prop-types').oneOf([10]), require('prop-types').oneOf([11]), require('prop-types').oneOf([12])])), (0, _defineProperty3.default)(_ref, 'md', require('prop-types').oneOfType([require('prop-types').bool, require('prop-types').oneOf([1]), require('prop-types').oneOf([2]), require('prop-types').oneOf([3]), require('prop-types').oneOf([4]), require('prop-types').oneOf([5]), require('prop-types').oneOf([6]), require('prop-types').oneOf([7]), require('prop-types').oneOf([8]), require('prop-types').oneOf([9]), require('prop-types').oneOf([10]), require('prop-types').oneOf([11]), require('prop-types').oneOf([12])])), (0, _defineProperty3.default)(_ref, 'lg', require('prop-types').oneOfType([require('prop-types').bool, require('prop-types').oneOf([1]), require('prop-types').oneOf([2]), require('prop-types').oneOf([3]), require('prop-types').oneOf([4]), require('prop-types').oneOf([5]), require('prop-types').oneOf([6]), require('prop-types').oneOf([7]), require('prop-types').oneOf([8]), require('prop-types').oneOf([9]), require('prop-types').oneOf([10]), require('prop-types').oneOf([11]), require('prop-types').oneOf([12])])), (0, _defineProperty3.default)(_ref, 'xl', require('prop-types').oneOfType([require('prop-types').bool, require('prop-types').oneOf([1]), require('prop-types').oneOf([2]), require('prop-types').oneOf([3]), require('prop-types').oneOf([4]), require('prop-types').oneOf([5]), require('prop-types').oneOf([6]), require('prop-types').oneOf([7]), require('prop-types').oneOf([8]), require('prop-types').oneOf([9]), require('prop-types').oneOf([10]), require('prop-types').oneOf([11]), require('prop-types').oneOf([12])])), _ref) : {};
Grid.defaultProps = {
  align: 'stretch',
  component: 'div',
  container: false,
  direction: 'row',
  hidden: undefined,
  item: false,
  justify: 'flex-start',
  spacing: 16,
  wrap: 'wrap'
};

// Add a wrapper component to generate some helper messages in the development
// environment.
var GridWrapper = Grid; // eslint-disable-line import/no-mutable-exports

if (process.env.NODE_ENV !== 'production') {
  var requireProp = (0, _requirePropFactory2.default)('Grid');

  GridWrapper = function GridWrapper(props) {
    return _react2.default.createElement(Grid, props);
  };

  GridWrapper.propTypes = {
    align: requireProp('container'),
    direction: requireProp('container'),
    justify: requireProp('container'),
    lg: requireProp('item'),
    md: requireProp('item'),
    sm: requireProp('item'),
    spacing: requireProp('container'),
    wrap: requireProp('container'),
    xs: requireProp('item')
  };
}

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiGrid' })(GridWrapper);