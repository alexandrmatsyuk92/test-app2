/**
 * @module ui/landing.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Landing
 * @extends Component
 */
exports.Landing = Component.specialize(/** @lends Landing# */ {
    constructor: {
        value: function Landing() {
            this.super();
        }
    },

    handleButtonLoginAction: {
        value: function (event) {
            var event = document.createEvent("CustomEvent");
            event.initCustomEvent('loginpage', true, true, null);
            this.dispatchEvent(event);
        }
    },

    handleButtonRegisterAction: {
        value: function (event) {
            var event = document.createEvent("CustomEvent");
            event.initCustomEvent('registerpage', true, true, null);
            this.dispatchEvent(event);
        }
    }

});
