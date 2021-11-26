/**
 * @fileoverview yz  eslint plugin
 * @author caofeilong
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

// const yzBaseCOnfig = require('./configs/yz-base-config')
//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports={
    rules:  requireIndex(__dirname + "/rules"),
    configs: requireIndex(__dirname + "/configs"),
}

// }
// module.exports.configs ={
//     "yz-base-config":{
//         plugins:['yz']
//     }
// }
//  requireIndex(__dirname + "/configs")


