/**
 * @fileoverview yz test
 * @author caofeilong
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/settimeout-no-number"),
  RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 7, // 默认支持语法为es5 
  },
});
ruleTester.run("settimeout-no-number", rule, {
  valid: [
    {
      code: 'let someNumber = 1000; setTimeout(()=>{ console.log(11) },someNumber)'
  }
  // ,
  // {
  //     code: 'setTimeout(()=>{ console.log(11) },someNumber)'
  // }
  ],
  invalid: [
    {
      code: 'setTimeout(()=>{ console.log(11) },1000)',
      errors: [{
          message: "setTimeout第二个参数禁止是数字", // 与rule抛出的错误保持一致
          // type: "CallExpression" // rule监听的对应钩子
      }]
  }
  ],
});
