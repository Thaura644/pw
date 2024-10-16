odoo.define('pos_salesperson.models', function(require) {
    'use strict';
    
    var models = require('point_of_sale.models');
    var core = require('web.core');
    var _t = core._t;

    var _super_Orderline = models.Orderline.prototype;
    models.Orderline = models.Orderline.extend({
        // Initialize the order line with a salesperson if present in the JSON
        init_from_JSON: function (json) {
            var self = this;
            if (json.user_id) {
                var user = this.get_user_by_id(json.user_id);
                if (user) {
                    this.set_line_user(user);
                }
            }
            return _super_Orderline.init_from_JSON.apply(this, arguments);
        },
        
        // Export the order line with the associated user ID
        export_as_JSON: function () {
            var json = _super_Orderline.export_as_JSON.apply(this, arguments);
            if (this.user_id) {
                json.user_id = this.user_id.id;
            }
            return json;
        },
        
        // Get user image URL for displaying the salesperson's image
        get_user_image_url: function () {
            if (this.user_id && this.user_id.id !== undefined) {
                return window.location.origin + '/web/image?model=res.users&field=image_128&id=' + this.user_id.id;
            }
            return null;
        },
        
        // Retrieve the user object by ID
        get_user_by_id: function (user_id) {
            var user = null;
            for (var i = 0; i < this.pos.users.length; i++) {
                if (this.pos.users[i].id == user_id) {
                    user = this.pos.users[i];
                }
            }
            return user;
        },
        
        // Get the user assigned to the order line
        get_line_user: function () {
            if (this.user_id && this.user_id.id !== undefined) {
                return this.user_id;
            }
            return null;
        },
        
        // Set a user for the order line
        set_line_user: function (user) {
            this.user_id = user;
            this.trigger('change', this);
        },
        
        // Remove the salesperson from the order line
        remove_sale_person: function () {
            this.user_id = null;
            this.trigger('change', this);
        },
    });
});
