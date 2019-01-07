let arc = require('@architect/functions');
let url = arc.http.helpers.url;

module.exports = function _header (req) {
    let body = ``;
    if (req.session && req.session.account && req.session.account.accountID) {
        body = `
  <div class=card-body>
    <a href=${url('/')}>Home</a>
    <form action=${url('/logout')} method=post>
      <button type=submit class="btn btn-primary float-right m-4">Logout</button>
    </form>
  </div>`;
    } else if (!req.path.includes('/signup')) {
        body = `
  <div class=card-body>

    <form action=${url('/login')} method=post>
      <div class=form-group>
        <label for=email>Email address</label>
        <input type=email class=form-control name=email placeholder="Enter email">
      </div>
      <div class=form-group>
        <label for=password>Password</label>
        <input type=password class=form-control name=password placeholder="Password">
      </div>
      <button type=submit class="btn btn-primary float-left">Login</button>
    </form>
    <p class=float-right>or <a href=${url('/signup')}>Sign Up</a></p>
  </div>`;
    }
    return `<div class="card mt-5 mr-auto ml-auto mb-1 w-25">${body}</div>`;
};
