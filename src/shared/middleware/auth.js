let arc = require('@architect/functions');
let url = arc.http.helpers.url;

module.exports = function auth (req, res, next) {
  // if the current session is logged in just continue to the next function
    if (req.session.account) {
        next();
    } else {
    // otherwise boot them back to the home page
        res({
            location: url('/')
        });
    }
};
