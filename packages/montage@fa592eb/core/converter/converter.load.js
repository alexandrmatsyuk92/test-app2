montageDefine("fa592eb","core/converter/converter",{dependencies:["../core"],factory:function(e,t){var n=e("../core").Montage,i="[object Number]",s=Object.prototype.toString,o=function(e){return s.call(e)===i};t.isNumber=o;var a=function(e){return e&&e!==void 0};t.isDef=a,t.Validator=n.specialize({validate:{value:null}}),t.Converter=n.specialize({allowPartialConversion:{value:!0},convert:{enumerable:!1,value:null},revert:{enumerable:!1,value:null}},{blueprintModuleId:e("../core")._blueprintModuleIdDescriptor,blueprint:e("../core")._blueprintDescriptor})}});