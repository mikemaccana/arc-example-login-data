let arc = require('@architect/functions');
let data = require('@architect/data');
let layout = require('@architect/shared/views/layout');
let auth = require('@architect/shared/middleware/auth');
let url = arc.http.helpers.url;
let form = require('./_form');

async function route (req, res) {
    let title = 'welcome home';
  // wrangle the data
    let noteID = req.params.noteID;
    let session = req.session;
    let accountID = session.account.accountID;
    let note = await data.notes.get({noteID, accountID});
    note.href = url(`/notes/${noteID}`);
  // build out the templates
    let body = form(note);
    let html = layout({body, title, req});
  // send the response
    res({html});
}

exports.handler = arc.http(auth, route);
