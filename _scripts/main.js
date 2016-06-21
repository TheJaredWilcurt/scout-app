var latestRelease="https://api.github.com/repos/TheJaredWilcurt/scout-app/releases";
$.get(latestRelease, function (data) {
	// Loop through all releases
	// find the latest release with downloads
	// update the 4 OS download buttons to have correct links
	// update the version number in the version comparison table
	console.log(data);
	// bonus: in the title tag for the download button, denote the file size of the download in MB
	// bonus: in the title tag for the download button, denote the actual filename
});


// ignore this, temporary storage for site data
window.siteData = {
    "os": [
        { "folder": "win7",   "name": "Windows", "legacy": [ { "name": "XP",            "image": "xp"       },
                                                             { "name": "Windows Vista", "image": "vista"    },
                                                             { "name": "Windows 10",    "image": "win10"    } ] },
        { "folder": "ubuntu", "name": "Ubuntu",  "legacy": [ { "name": "Ubuntu 12 LTS", "image": "ubuntu12" } ] },
        { "folder": "zorin",  "name": "Zorin",   "legacy": [ { "name": "Debian",        "image": "debian"   } ] },
        { "folder": "osx",    "name": "OSX",     "legacy": [ { "name": "OSX 10.6",      "image": "osx106"   } ] }
    ],
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
