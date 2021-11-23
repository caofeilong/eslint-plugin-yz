/**
 * @fileoverview yz test
 * @author caofeilong
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "yz 测试专用",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    return {
      CallExpression:(node)=>{
        if(node.callee.name!=='setTimeout')return
        const arg1= node.arguments && node.arguments[1]
        if(!arg1) return
        if(arg1.type==='Literal' && typeof(arg1.value)==='number'){
          context.report({
            node,
            message: 'setTimeout第二个参数禁止是数字'
        })
        }
      }
    };
  },
};
