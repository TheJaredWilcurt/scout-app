/////////////////////////////////////////
// DOWNLOAD BUTTONS AND VERSION NUMBERS
/////////////////////////////////////////

var latestRelease = 'https://api.github.com/repos/TheJaredWilcurt/scout-app/releases';

$.get(latestRelease, function (data) {

    //terminology
    //data = releases
    //assets = downloads

    // Loop through all releases
    for (var i = 0; i < data.length; i++) {
        //number of downloads in this release
        var numDownloads = data[i].assets.length;
        
        //verify this release has more than three downloads
        if (numDownloads > 3) {

           //loop through all the downloads
           //check each download to see if it is for win/osx/lin32/lin64
           //update the stuff on the page if that download relates to it
           //comment every line



            var a = data[i].assets[0].browser_download_url.toLowerCase();
            var b = data[i].assets[1].browser_download_url.toLowerCase();
            var c = data[i].assets[2].browser_download_url.toLowerCase();
            var d = data[i].assets[3].browser_download_url.toLowerCase();

            //var versionArray = a.split('/'); //I'll use this aaray to locate the version number
            //var versionNum = versionArray[7]; //Only 2.0.1-beta2

            var updateLIN32;
            var updateLIN64;
            var updateOSX;
            var updateWIN;

            //version number update work
            var dataString = a.split('/');
            var vNum = dataString[7];
            var versionNum = vNum.replace("v", "");


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

        // JQuery for changing version number    
            
            $(".currentVersion").replaceWith(versionNum);
            return;
        }

    }
    
    // test
    // bonus: in the title tag for the download button, denote the file size of the download in MB, Similar to target but it's title = 
    // bonus: in the title tag for the download button, denote the actual filename
});




/////////////////////////////////////////
// SUPPORTED MIXINS
/////////////////////////////////////////

$('.showmore').click(function () {
    $('.limited').slideUp('slow');
    $('.complete').slideDown('slow');
});

$('.showless').click(function () {
    $('.complete').slideUp();
    $('.limited').slideDown();
});

$('.showless').click();



/////////////////////////////////////////
// MINIMUM REQUIREMENTS
/////////////////////////////////////////

$("#minreqs th").click(function () {
    $("#minreqs th").removeClass('selected');
    $(this).addClass('selected');
    var os = $(this).data('os');
    $("#minreqs td div").hide();
    $("#minreqs ." + os).show();
});



/////////////////////////////////////////
// CULTURES SECTION
/////////////////////////////////////////

$("#translation_instructions").hide();
$(".showtranslations").click(function () {
    $("#translation_instructions").slideToggle();
});



/////////////////////////////////////////
// SCREENSHOTS
/////////////////////////////////////////


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

function slickInit (target) {
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

function updateCultures (os) {
    var languages = siteData.cultures;
    var osName = siteData.os[os].name;
    var slideshowDOM = '';
    var img = '';
    var text = '';
    var el = '';
    for (var i = 0; i < languages.length; i++) {
        img = languages[i].image;
        text = languages[i].language + ' (' + osName + ')';
        el = slideMaker(os, img, text);
        slideshowDOM = slideshowDOM + '\n' + el;
    }
    var target = "#cultures .slick";
    $(target).html(slideshowDOM).removeClass("slick-initialized slick-slider slick-dotted");
    slickInit(target);
}

function updateThemes (os) {
    var themes = siteData.themes;
    var osName = siteData.os[os].name;
    var slideshowDOM = '';
    var img = '';
    var text = '';
    var el = '';
    for (var i = 0; i < themes.length; i++) {
        img = themes[i].image;
        text = themes[i].theme + ' (' + osName + ')';
        el = slideMaker(os, img, text);
        slideshowDOM = slideshowDOM + '\n' + el;
    }
    var target = "#themes .slick";
    $(target).html(slideshowDOM).removeClass("slick-initialized slick-slider slick-dotted");
    slickInit(target);
}

$("#screenshots img").click(function () {
    var os = $(this).data('os');
    updateScreenshots(os);
});

$("#cultures img").click(function () {
    var os = $(this).data('os');
    updateCultures(os);
});

$("#themes img").click(function () {
    var os = $(this).data('os');
    updateThemes(os);
});



/////////////////////////////////////////
// Replace this after crossbrowser
// and 64or32 are implmented
/////////////////////////////////////////

// On page load, crossbrowser.js will add in classes to the <html> tag like: "webkit chrome chrome51 win win7 js orientation_landscape maxw_1440"
// From that we can know what OS the user is on and click on specific items on the page so they will auto-show the correct stuff

// Here are all of the classes we can check for:
// Firefox, IE, Opera, Safari, Chrome, Konqueror, Iron, ie6, ie7, ie8, ie9
// Webkit, Mozilla, Gecko
// Mac, Win, Win8, Win7, Vista, WinXP, Win2k, WinNT, FreeBSD, Linux, x11
// Ipod, Ipad, Iphone, WebTV, Blackberry, Android, J2me, RIM Playbook, mobile


// On page load 64or32-jquery.min.js will add in one of the following classes to the <html> tag: unknown, mobile, arch32, arch64
// From that we can know if someone is on 32 or 64 bit OS. This is really only useful for the linux downloads.

// We should be updating the following:
//
// * Add a class of "selected" to the correct download button
// * Which screenshots are being shown by default in the Screenshots section
// * Which screenshots are being shown in the Cultures/languages section
// * Which screenshots are being shown in the Themes section
// * Which minimum system reqirements are shown by default

$("#screenshots .win").click();
$("#cultures .win").click();
$("#themes .win").click();
$("#minreqs [data-os='win']").click();
