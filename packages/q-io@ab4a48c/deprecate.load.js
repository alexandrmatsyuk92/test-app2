montageDefine("ab4a48c","deprecate",{dependencies:[],factory:function(e,t){t.deprecationWarning=function n(e,t,n){if(n){var r=Error.stackTraceLimit;Error.stackTraceLimit=n}if("undefined"!=typeof console&&"function"==typeof console.warn){var i=n?Error("").stack:"";t?console.warn(e+" is deprecated, use "+t+" instead.",i):console.warn(e,i)}n&&(Error.stackTraceLimit=r)},t.deprecateMethod=function(e,t,r,i){var a=function(){return n(r,i,3),t.apply(e?e:this,arguments)};return a.deprecatedFunction=t,a}}});