'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createGenerateClassName;

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_StyleSheet = require('jss/lib/StyleSheet').babelPluginFlowReactPropTypes_proptype_StyleSheet || require('prop-types').any;

// Returns a function which generates unique class names based on counters.
// When new generator function is created, rule counter is reset.
// We need to reset the rule counter for SSR for each request.
//
// It's an improved version of
// https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js
var babelPluginFlowReactPropTypes_proptype_generateClassName = require('jss/lib/types').babelPluginFlowReactPropTypes_proptype_generateClassName || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_Rule = require('jss/lib/types').babelPluginFlowReactPropTypes_proptype_Rule || require('prop-types').any;

function createGenerateClassName() {
  var ruleCounter = 0;

  return function (rule, sheet) {
    ruleCounter += 1;
    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(ruleCounter < 1e10, ['Material-UI: you might have a memory leak.', 'The ruleCounter is not supposed to grow that much.'].join('')) : void 0;

    // See: https://github.com/callemall/material-ui/issues/8223#issuecomment-331507061
    // if (process.env.NODE_ENV === 'production') {
    //   return 'c' + ruleCounter;
    // }

    if (sheet && sheet.options.meta) {
      return sheet.options.meta + '-' + rule.key + '-' + ruleCounter;
    }

    return rule.key + '-' + ruleCounter;
  };
}
