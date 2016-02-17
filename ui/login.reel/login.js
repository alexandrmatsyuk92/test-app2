/**
 * @module ui/login.reel
 */
var Component = require("montage/ui/component").Component;
var sharedAuthService = require("core/auth-service").shared;


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

        }
    }

});
