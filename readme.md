# arc-example-auth

Example app with signup, login, logout and user-specific data (notes).

Demonstrates:

- `200` with an html payload
- `302` Location redirects
- middleware auth pattern
- `arc.http.helpers.url`
- session storage
- storing user credentials with `bcrypt`

## Usage

    npm i
    npx sandbox

Then for Unix:

    NODE_ENV=testing
    ARC_LOCAL=1 

Or for Windows using powershell:

    $env:NODE_ENV = 'testing'
    $env:ARC_LOCAL = '1'

Then visit the URL presented, signup, add some notes, view/edit your notes, logout, log back in, you still have your notes!
