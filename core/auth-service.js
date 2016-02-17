var Montage = require("montage").Montage;
var RangeController = require("montage/core/range-controller").RangeController;

exports.AuthService = Montage.specialize({

    constructor: {
        value: function AuthService() {
            this.super();
        }
    },

    isUserLoggedIn: {
        value: function() {
            if(localStorage.getItem('token')) return true;
            else return false;
        }
    },

    setToken: {
        value: function(token) {
            localStorage.setItem('token', token);
        }
    },

    removeToken: {
        value: function() {
            localStorage.removeItem('token');
        }
    }
});

exports.shared = new exports.AuthService();