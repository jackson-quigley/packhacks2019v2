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

    if (blockstack.isSignInPending()) {
        blockstack.handlePendingSignIn().then(function(userData) {
            window.location = window.location.origin
        })
    }

    if (!blockstack.isUserSignedIn()) {
        signin.style.display = "block";
        signout.style.display = "none";
    } else {
        signin.style.display = "none";
        signout.style.display = "block";
    }
});