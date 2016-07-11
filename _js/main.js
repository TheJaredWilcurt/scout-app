var latestRelease = 'https://api.github.com/repos/TheJaredWilcurt/scout-app/releases';

$.get(latestRelease, function (data) {
    // Loop through all releases
    for(var i = 0; i < data.length; i++){
        var numDownloads = data[i].assets.length;
        if (numDownloads > 3) {
            var a = data[i].assets[0].browser_download_url.toLowerCase();
            var b = data[i].assets[1].browser_download_url.toLowerCase();
            var c = data[i].assets[2].browser_download_url.toLowerCase();
            var d = data[i].assets[3].browser_download_url.toLowerCase();
            console.log(a);
            console.log(b);
            console.log(c);
            console.log(d);

            //var versionArray = a.split('/'); //I'll use this aaray to locate the version number
            //var versionNum = versionArray[7]; //Only 2.0.1-beta2

            var updateLIN32;
            var updateLIN64;
            var updateOSX;
            var updateWIN;

            //Make a loop that goes through each
            if (/lin32/gi.test(a)){
                updateLIN32 = a;
            } else if (/lin32/gi.test(b)){
                updateLIN32 = b;
            } else if (/lin32/gi.test(c)){
                updateLIN32 = c;  
            } else if (/lin32/gi.test(d)){
                updateLIN32 = d;
            }

            if (/lin64/gi.test(a)){
                updateLIN64 = a;
            } else if (/lin64/gi.test(b)){
                updateLIN64 = b;
            } else if (/lin64/gi.test(c)){
                updateLIN64 = c;  
            } else if (/lin64/gi.test(d)){
                updateLIN64 = d;
            }

            if (/osx/gi.test(a)){
                updateOSX = a;
            } else if (/osx/gi.test(b)){
                updateOSX = b;
            } else if (/osx/gi.test(c)){
                updateOSX = c;  
            } else if (/osx/gi.test(d)){
                updateOSX = d;
            }

            if (/win/gi.test(a)){
                updateWIN = a;
            } else if (/win/gi.test(b)){
                updateWIN = b;
            } else if (/win/gi.test(c)){
                updateWIN = c;  
            } else if (/win/gi.test(d)){
                updateWIN = d;
            }

        // Below I'll need to assign the right url to the button using /OS/gi.test()
            $("#downloads .lin32").attr('href', updateLIN32);
            $("#downloads .lin64").attr('href', updateLIN64);
            $("#downloads .osxupdate").attr('href', updateOSX);
            $("#downloads .windowsupdate").attr('href', updateWIN);
            return;
        }

    };
    //turn link into string, use split to turn into array, find correct OS and assign it to lines 8-11
    // find the latest release with downloads
    // update the 4 OS download buttons to have correct links
    // update the version number in the version comparison table
    console.log(data);
    // test
    // bonus: in the title tag for the download button, denote the file size of the download in MB, Similar to target but it's title = 
    // bonus: in the title tag for the download button, denote the actual filename
});


// ignore this, temporary storage for site data
window.siteData = {
    "os": {
        "win":    { "name": "Windows 7", "legacy": [ { "name": "XP",            "image": "xp"       },
                                                     { "name": "Windows Vista", "image": "vista"    },
                                                     { "name": "Windows 10",    "image": "win10"    } ] },
        "ubuntu": { "name": "Ubuntu",    "legacy": [ { "name": "Ubuntu 12 LTS", "image": "ubuntu12" } ] },
        "zorin":  { "name": "Zorin",     "legacy": [ { "name": "Debian",        "image": "debian"   } ] },
        "osx":    { "name": "OSX",       "legacy": [ { "name": "OSX 10.6",      "image": "osx106"   } ] }
    },
    "cultures": [
        { "language": "English", "code": "en", "image": "02" },
        { "language": "Dutch",   "code": "nl", "image": "03" },
        { "language": "French",  "code": "fr", "image": "04" },
        { "language": "Russian", "code": "ru", "image": "05" }
    ],
    "themes": [
        { "theme": "Simplex",   "image": "02" },
        { "theme": "Cerulean",  "image": "06" },
        { "theme": "Classic",   "image": "07" },
        { "theme": "Cosmo",     "image": "08" },
        { "theme": "Cyborg",    "image": "09" },
        { "theme": "Darkly",    "image": "10" },
        { "theme": "Flatly",    "image": "11" },
        { "theme": "Journal",   "image": "12" },
        { "theme": "Lumen",     "image": "13" },
        { "theme": "Paper",     "image": "14" },
        { "theme": "Readable",  "image": "15" },
        { "theme": "Sandstone", "image": "16" },
        { "theme": "Slate",     "image": "17" },
        { "theme": "Spacelab",  "image": "18" },
        { "theme": "Superhero", "image": "19" },
        { "theme": "United",    "image": "20" },
        { "theme": "Yeti",      "image": "21" }
    ],
    "screenshots": [
        { "text": "First Time User Experience",      "image": "01" },
        { "text": "Project view",                    "image": "02" },
        { "text": "Status of All Projects",          "image": "22" },
        { "text": "Dev Tools are always accessible", "image": "23" }
    ]
};

function slickInit(target) {
    $(target).slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        fade: true
    });
}

function slideMaker (os, img, text) {
    return '<div><img data-lazy="_img/screenshots/'+ os + '/' + img + '.png" alt="' + text + '" /><p>' + text + '</p></div>';
}

function updateScreenshots (os) {
    var slideshowDOM = '';
    var screenshots = siteData.screenshots;
    var osName = siteData.os[os].name;
    var legacy = siteData.os[os].legacy;
    var img = '';
    var text = '';
    var el = '';
    for (var i = 0; i < screenshots.length; i++) {
        img = screenshots[i].image;
        text = screenshots[i].text + ' (' + osName + ')';
        el = slideMaker(os, img, text);
        slideshowDOM = slideshowDOM + '\n' + el;
    }
    for (var j = 0; j < legacy.length; j++) {
        img = legacy[j].image;
        text = legacy[j].name;
        el = slideMaker(os, img, text);
        slideshowDOM = slideshowDOM + '\n' + el;
    }
    var target = "#screenshots .slick";
    $(target).html(slideshowDOM).removeClass("slick-initialized slick-slider slick-dotted");
    slickInit(target);
}

$("#screenshots img").click(function () {
    var os = $(this).data('os');
    updateScreenshots(os);
});

$("#screenshots .win").click();
