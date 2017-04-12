var functions = require('firebase-functions');
var admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase)

exports.createEmptyUserObject = functions.auth.user().onCreate(event => {
  const user = event.data
  const uid = user.uid

  admin.database().ref('users/' + uid).set({
    hubs: ["127.0.0.1:8000"]
  })

  // add the uid to the subscriber (right now it's only one: localhost)
  // admin.database().ref('centrals/127.0.0.1:800').update({
  //
  // })
})
