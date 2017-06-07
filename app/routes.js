
var _ = require('underscore');
var Users = require('./models/users');


module.exports = function (app) {


    app.get('/getUsers/:page', function (req, res) {
        var page = req.param('page');

        Users.paginate({}, { page: page, limit: 10 }, function(err, result) {
            if (!err) {
                res.send(result);
            }
        });
    });
};
