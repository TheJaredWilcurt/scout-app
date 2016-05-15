// /repos/:owner/:repo/releases/latest
var latestRelease = 'http://github.com/TheJaredWilcurt/scout-app/releases';
$.get(latestRelease, function (data) {
    console.log(data);
});

//$.ajax({
//    type: 'GET',
//    url: latestRelease,
//    data: data,
//    async: false,
//    beforeSend: function (xhr) {
//        if (xhr && xhr.overrideMimeType) {
//          xhr.overrideMimeType('application/json;charset=utf-8');
//        }
//    },
//    dataType: 'json',
//    success: function (data) {
//        //Do stuff with the JSON data
//        console.log(data);
//    }
//});
