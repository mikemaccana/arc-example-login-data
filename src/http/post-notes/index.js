let arc = require('@architect/functions');
let data = require('@architect/data');
let auth = require('@architect/shared/middleware/auth');
let url = arc.http.helpers.url;
let Hashids = require('hashids');
let hashids = new Hashids();

async function route (req, res) {
    try {
    // get the note.title and note.body from the form post
        let note = req.body;
    // create the partition and sort keys
        note.accountID = req.session.account.accountID;
        note.noteID = hashids.encode(Date.now());
    // save the note
        let result = await data.notes.put(note);
    // log it to stdout
        console.log(result);
    } catch (e) {
        console.log(e);
    }
    res({
        location: url('/')
    });
}

exports.handler = arc.http(auth, route);
