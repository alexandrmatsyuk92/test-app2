/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    
    updatePath: {
        value: function(path) {
            this.templateObjects.router.updatePath(path);
        }
    },
    
    templateDidLoad: {
        value: function() {
            this.updatePath();
        }
    },

    handleRegisterSignup: {
        value: function (event) {
            this.updatePath("/login");
        }
    },

    handleLoginSignin: {
        value: function (event) {
            this.updatePath("/landing");
        }
    },

    handleLandingLoginpage: {
        value: function (event) {
            this.updatePath("/login");
        }
    },

    handleLandingRegisterpage: {
        value: function (event) {
            this.updatePath("/register");
        }
    }

});
