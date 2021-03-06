'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keys = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = createBreakpoints;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Breakpoint = require('prop-types').oneOf(['xs', 'sm', 'md', 'lg', 'xl']);

// Sorted ASC by size. That's important.
var keys = exports.keys = ['xs', 'sm', 'md', 'lg', 'xl'];

var defaultBreakpointsMap = {
  xs: 360,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};

// Keep in mind that @media is inclusive by the CSS specification.
function createBreakpoints(breakpoints) {
  var _breakpoints$breakpoi = breakpoints.breakpointsMap,
      breakpointsMap = _breakpoints$breakpoi === undefined ? defaultBreakpointsMap : _breakpoints$breakpoi,
      _breakpoints$unit = breakpoints.unit,
      unit = _breakpoints$unit === undefined ? 'px' : _breakpoints$unit,
      _breakpoints$step = breakpoints.step,
      step = _breakpoints$step === undefined ? 1 : _breakpoints$step,
      other = (0, _objectWithoutProperties3.default)(breakpoints, ['breakpointsMap', 'unit', 'step']);


  var values = keys.map(function (key) {
    return breakpointsMap[key];
  });

  function up(key) {
    var value = void 0;
    // min-width of xs starts at 0
    if (key === 'xs') {
      value = 0;
    } else {
      value = breakpointsMap[key] || key;
    }
    return '@media (min-width:' + value + unit + ')';
  }

  function down(key) {
    var value = breakpointsMap[key] || key;
    return '@media (max-width:' + (value - step / 100) + unit + ')';
  }

  function between(start, end) {
    var startIndex = keys.indexOf(start);
    var endIndex = keys.indexOf(end);
    return '@media (min-width:' + values[startIndex] + unit + ') and ' + ('(max-width:' + (values[endIndex + 1] - step / 100) + unit + ')');
  }

  function only(key) {
    var keyIndex = keys.indexOf(key);
    if (keyIndex === keys.length - 1) {
      return up(key);
    }
    return between(key, key);
  }

  function getWidth(key) {
    return breakpointsMap[key];
  }

  return (0, _extends3.default)({
    keys: keys,
    values: values,
    up: up,
    down: down,
    between: between,
    only: only,
    getWidth: getWidth
  }, other);
}