@app
arcauth

@http
get /
get /signup
post /signup
post /login
post /logout

post /notes
get /notes/:noteID
post /notes/:noteID
post /notes/:noteID/del

@tables
accounts
  accountID *String

notes
  accountID *String
  noteID **String
