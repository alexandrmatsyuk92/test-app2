montageDefine("9021793","ui/main.reel/main",{dependencies:["montage/ui/component"],factory:function(e,t){var n=e("montage/ui/component").Component;t.Main=n.specialize({constructor:{value:function(){this.super()}},updatePath:{value:function(e){this.templateObjects.router.updatePath(e)}},templateDidLoad:{value:function(){this.updatePath()}},handleRegisterSignup:{value:function(){this.updatePath("/login")}},handleLoginSignin:{value:function(){this.updatePath("/landing")}},handleLandingLoginpage:{value:function(){this.updatePath("/login")}},handleLandingRegisterpage:{value:function(){this.updatePath("/register")}}})}});