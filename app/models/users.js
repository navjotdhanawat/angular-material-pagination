var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var UsersSchema = mongoose.Schema({
    id: { type: Number },
    firstname: { type: String },
    lastname: { type: String },
    mobile: { type: String }
});

UsersSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Users', UsersSchema);