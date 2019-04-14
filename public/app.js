document.addEventListener("DOMContentLoaded", function(event) {
    console.out("Clicked");
    let signin = document.getElementById('signin-button');
    console.out("Clicked");
    signin.addEventListener('click', function(event) {
        event.preventDefault();
        const origin = window.location.origin;
        console.out("Clicked");
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
        putdata();
        alert("put data");
    })
    gets.addEventListener('click', function(events) {
        fetchdata();
        alert("fetch data");
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

    function putdata(){
        let thing = JSON.parse(document.getElementById(sdata));
        blockstack.putFile(thing.url, {sign: false});
    }

    function fetchdata() {
        let thing = JSON.parse(document.getElementById(sdata));
        blockstack.getFile(thing.url, {decrypt: true, verify: false});
    }
    
    
    
});
