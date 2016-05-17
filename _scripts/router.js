
//Get the URL the user typed
var desiredURL = window.location.pathname;

//The second item in each array is what the user could have typed
//The first item in each array is a known good URL to forward them to
//The comment after some of these shows other words it would also catch
var set = [
    ["/download", "download"], //downloads
    ["/download", "dl"], //dls
    ["/download", "archive"], //archives
    ["/download", "binaries"],
    ["/api", "api"],
    ["/docs", "doc"], //documentation
    ["/docs/latest", "anotated"],
    ["/docs/latest", "annotated"],
    ["/docs/latest", "source"], //sourcecode
    ["/docs/latest", "latest"],
    ["/docs/packagejson.html", "package"] //packagejson
];

function forward(arr) {
    //RegExp to match any URL (after the domain) with "downloads" in it
    var regex = new RegExp ( "^(?:\/)(?:[^\ ]*)(?:" + arr[1] + ")(?:.*)$", "gm" );

    //If the typed URL has "downloads" anywhere in it
    if (regex.test(desiredURL)) {
        //go to /download
        window.location.replace(arr[0]);
        return
    }
}

for (var i = 0; i < set.length; i++) {
    forward(set[i]);
}
