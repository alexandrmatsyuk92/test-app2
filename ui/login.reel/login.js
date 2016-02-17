/**
 * @module ui/login.reel
 */
var Component = require("montage/ui/component").Component;
var sharedAuthService = require("core/auth-service").shared;
var reqwest = require('reqwest');

/**
 * @class Login
 * @extends Component
 */
exports.Login = Component.specialize(/** @lends Login# */ {
    constructor: {
        value: function Login() {
            this.super();
        }
    },

    handleButtonLoginAction: {
        value: function (ev) {
            var _this = this;
            reqwest({
                url: 'http://test-login-server.herokuapp.com/login',
                method: 'post',
                crossOrigin: true,
                /*contentType: 'application/json',
                type: 'json',*/
                data: { email: _this.email, password: _this.password },
                success: function (resp) {
                    if(resp.success) {
                        sharedAuthService.setToken(resp.token);
                        //_this.templateObjects.router.updatePath('landing');
                        var event = document.createEvent("CustomEvent");
                        event.initCustomEvent('signin', true, true, null);
                        _this.dispatchEvent(event);
                    }
                    else {
                        alert(resp.message);
                    }
                },
                error: function(error) {
                    alert("Error !");
                }
            });
        }
    }

});
