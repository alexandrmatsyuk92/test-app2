montageDefine("fa592eb","core/event/mutable-event",{dependencies:["../core"],factory:function(e,t){var n=e("../core").Montage;if("undefined"!=typeof window){var i={},r=function(e,t){var i="_"+t;n.defineProperty(e,i,{value:void 0}),n.defineProperty(e,t,{get:function(e,t){return function(){return this.hasOwnProperty(t)?this[t]:this._event?this._event[e]:void 0}}(t,i),set:function(e){return function(t){this[e]=t}}(i)})};t.MutableEvent=n.specialize({_initPrototypeWithEvent:{value:function(e){var t;for(t in e)this[t]||r(this,t);return r(this,"replayed"),this}},_initWithEvent:{value:function(e){return this._event=e,this}},preventDefault:{value:function(){this._event.preventDefault()}},getPreventDefault:{value:function(){return this._event.getPreventDefault?this._event.getPreventDefault():this._event.defaultPrevented}},stopImmediatePropagation:{value:function(){this._event.stopImmediatePropagation(),this.propagationStopped=!0,this.immediatePropagationStopped=!0}},propagationStopped:{value:!1},immediatePropagationStopped:{value:!1},mutable:{value:!0},target:{value:null},stopPropagation:{value:function(){this._event.stopPropagation(),this.propagationStopped=!0}},stop:{value:function(){this.preventDefault(),this.stopPropagation()}}},{fromEvent:{value:function(e){var n,r=e.type,o=i[r];return o||(o=function(){},o.prototype=(new t.MutableEvent)._initPrototypeWithEvent(e),i[r]=o),n=new o,n._initWithEvent(e),n}},fromType:{value:function(e,t,n,i){var r=document.createEvent("CustomEvent");return r.initCustomEvent(e,t,n,i),this.fromEvent(r)}}})}}});