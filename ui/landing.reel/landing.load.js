montageDefine("9021793","ui/landing.reel/landing",{dependencies:["montage/ui/component"],factory:function(e,t){var n=e("montage/ui/component").Component;t.Landing=n.specialize({constructor:{value:function(){this.super()}},handleButtonLoginAction:{value:function(e){var e=document.createEvent("CustomEvent");e.initCustomEvent("loginpage",!0,!0,null),this.dispatchEvent(e)}},handleButtonRegisterAction:{value:function(e){var e=document.createEvent("CustomEvent");e.initCustomEvent("registerpage",!0,!0,null),this.dispatchEvent(e)}}})}});