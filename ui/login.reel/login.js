/**
 * @module ui/login.reel
 */
var Component = require("montage/ui/component").Component;
var sharedAuthService = require("core/auth-service").shared;
var $ = require('jquery-latest');

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
            $.ajax({
                url: "mydomain.com/url",
                type: "POST",
                /*contentType: "application/json",*/
                data: {email: _this.email, password: _this.password},


                success: function(data) {
                    cosole.log(data);
                    //called when successful
                },

                error: function(err) {
                    console.log(err);
                    //called when there is an error
                },
            });
                    /*sharedAuthService.setToken(resp.token);
                    //_this.templateObjects.router.updatePath('landing');
                    var event = document.createEvent("CustomEvent");
                    event.initCustomEvent('signin', true, true, null);
                    _this.dispatchEvent(event);*/
            
        }
    }

});
