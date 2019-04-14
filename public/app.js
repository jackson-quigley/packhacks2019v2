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
        blockstack.signUserOut(window.location.href)
    });

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