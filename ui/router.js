var Montage = require("montage").Montage;
var Map = require("collections/map").Map;
var sharedAuthService = require("core/auth-service").shared;

exports.Router = Montage.specialize({
    routes: { value: [] },

    parts: { value: null },

    path: { value: null },

    default: { value: null },

                                    constructor: {
                                    value: function() {
    var _this = this;
    window.onpopstate = function(e) { _this.updatePath(); };
}
},

    updatePath: {
        value: function(path) {
            this.path = path /*&& ("#/" + path)*/ || window.location.hash.slice(1);

            if(this.path != "/landing" && this.path != "/login" && this.path != "/register" && !sharedAuthService.isUserLoggedIn()) {
                this.path = "/landing";
            }
            else if((this.path == "/landing" || this.path == "/login" || this.path == "/register") && sharedAuthService.isUserLoggedIn()) {
                this.path = "/home";
            }
            else if(sharedAuthService.isUserLoggedIn() /*need to add another routes*/) {
                this.path = "/home";
            }
            window.location.hash = "#" + this.path;
            /*if (path)
                history.pushState(this.path, this.path, this.path);*/

            this.parts = this.compare(this.path);
        }
    },

        compare: {
            value: function(target) {
                var items = (target.replace(/^#?\//, "") || this["default"]).split("/");

                for (var i = 0; i < this.routes.length; i++) {
                    var path = this.routes[i];
                    var route = path.split("/");

                    if (route.length >= items.length) {
                        matches = [];
                        for (var iter = 0; iter < route.length; iter++) {
                            var item = items[iter] || "";
                            var el = route[iter].split(":");
                            var test = RegExp("^" + el[1] + "$").test(item);
                            matches.push([el[0], test ? item : false]);
                        }

                        if (matches.every(function(x) { return x[1] !== false; }))
                            return Map(matches);
                    }
                }
                return Map();
            }
        }
});
