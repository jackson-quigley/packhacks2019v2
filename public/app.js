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

    let puts = document.getElementById('puts');
    let gets = document.getElementById('gets');
    puts.addEventListener('click', function(events) {
        // code to put on Gaia here
    })
    gets.addEventListener('click', function(events) {
        // code to get from Gaia here
    })

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
    
        
    // These functions assume that the data file in this directory
    // is updated with the most recent request.

    var fs = require('fs');

    putdata(){
        let thing = JSON.parse(document.getElementById(sdata));
        blockstack.putFile('https://hub.blockstack.org/' + thing.url, {sign: false});
        };
    }

    fetchdata() {
        let thing = JSON.parse(document.getElementById(sdata));
        blockstack.getFile('https://hub.blockstack.org/' + thing.url, {decrypt: true, verify: false});
        };
    }
    
    
    
});