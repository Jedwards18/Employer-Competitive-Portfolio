$(document).ready(function() {

  var config = {
    apiKey: "AIzaSyCM_4Z_dRS1bCqV_DvaPNHJZ4wAtX-w9Pk",
    authDomain: "employer-competitive-portfolio.firebaseapp.com",
    databaseURL: "https://employer-competitive-portfolio.firebaseio.com",
    projectId: "employer-competitive-portfolio",
    storageBucket: "employer-competitive-portfolio.appspot.com",
    messagingSenderId: "76562156198"
  };
  firebase.initializeApp(config);

  var dataRef = firebase.database();

  var name = "";
  var email = "";
  var message = "";

  $("#submit").on("click", function() {
    event.preventDefault();

    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var message = $("#message").val().trim();

    dataRef.ref().push( {
      name: name,
      email: email,
      message: message,
      dateAdded: firebase.database.ServerValue.TIMESTAMP,
    });
  $("#contact-form").each(function() {
    this.reset();
  });  
  });
});