document.addEventListener("DOMContentLoaded", function(event) {
    let signin = document.getElementById('signin-button');
    signin.addEventListener('click', function(event) {
        event.preventDefault();
        const origin = window.location.origin;
        blockstack.redirectToSignIn(origin, origin + '/manifest.json', ['store_write', 'publish_data']);
    });

    let signout = document.getElementById('signout-button');
    signout.addEventListener('click', function(event) {
        event.preventDefault();
        blockstack.signUserOut(window.location.href);
    });

    let submit = document.getElementById('submit');
    submit.addEventListener('click', function(event) {
        // put code to interface with Gaia here
        alert("pushed submit");
    })

    // Let's try to do everything with the submit button
    // event listener if we can.

    // let puts = document.getElementById('puts');
    // let gets = document.getElementById('gets');
    // puts.addEventListener('click', function(events) {
    //     // code to put on Gaia here
    //     alert("add to Gaia");
    // })
    // gets.addEventListener('click', function(events) {
    //     // code to get from Gaia here
    //     alert("get from Gaia");
    // })

    let request = document.getElementById('request');

    if (blockstack.isSignInPending()) {
        blockstack.handlePendingSignIn().then(function(userData) {
            window.location = window.location.origin
        })
    }
    console.log(blockstack.isUserSignedIn)
    if (!blockstack.isUserSignedIn()) {
        request.style.display = "none";
        signin.style.display = "block";
        signout.style.display = "none";
    } else {
        request.style.display = "block";
        signin.style.display = "none";
        signout.style.display = "block";
    }
});