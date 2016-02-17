/**
 * @module ui/register.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Register
 * @extends Component
 */
exports.Register = Component.specialize(/** @lends Register# */ {
    constructor: {
        value: function Register() {
            this.super();
        }
    },
    
    handleButtonRegisterAction: {
        value: function (event) {
            if(this.email == '' || this.password == '' || this.passwordConf == '') {
                alert("Please, fill all fields");
            }
            if(!this.email|| !this.password || !this.passwordConf) {
                alert("Please, fill all fields");
            }
            else if(this.password != this.passwordConf) {
                alert("Password and password confirmation are not same");
            }
            //register query and event for redirection
        }
    }
});
