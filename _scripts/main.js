function slickInit(e){$(e).slick({lazyLoad:"ondemand",slidesToShow:1,slidesToScroll:1,dots:!0,centerMode:!0,focusOnSelect:!0,fade:!0})}function slideMaker(e,a,s){return'<div><img data-lazy="_img/screenshots/'+e+"/"+a+'.png" alt="'+s+'" /><p>'+s+"</p></div>"}function updateScreenshots(e){for(var a="",s=siteData.screenshots,t=siteData.os[e].name,i=siteData.os[e].legacy,o="",n="",l="",r=0;r<s.length;r++)o=s[r].image,n=s[r].text+" ("+t+")",l=slideMaker(e,o,n),a=a+"\n"+l;for(var m=0;m<i.length;m++)o=i[m].image,n=i[m].name,l=slideMaker(e,o,n),a=a+"\n"+l;var d="#screenshots .slick";$(d).html(a).removeClass("slick-initialized slick-slider slick-dotted"),slickInit(d)}var latestRelease="https://api.github.com/repos/TheJaredWilcurt/scout-app/releases";$.get(latestRelease,function(e){for(var a=0;a<e.length;a++){var s=e[a].assets.length,t=e[a].assets[0].browser_download_url,i=e[a].assets[1].browser_download_url,o=e[a].assets[2].browser_download_url,n=e[a].assets[3].browser_download_url;t.toLowerCase().split("/"),i.toLowerCase().split("/"),o.toLowerCase().split("/"),n.toLowerCase().split("/");s>3&&($("#downloads .lin32").attr("href",e[a].assets[0].browser_download_url),$("#downloads .Lin64").attr("href",e[a].assets[1].browser_download_url),$("#downloads .OSXupdate").attr("href",e[a].assets[2].browser_download_url),$("#downloads .WindowUpdate").attr("href",e[a].assets[3].browser_download_url))}console.log(e)}),window.siteData={os:{win:{name:"Windows 7",legacy:[{name:"XP",image:"xp"},{name:"Windows Vista",image:"vista"},{name:"Windows 10",image:"win10"}]},ubuntu:{name:"Ubuntu",legacy:[{name:"Ubuntu 12 LTS",image:"ubuntu12"}]},zorin:{name:"Zorin",legacy:[{name:"Debian",image:"debian"}]},osx:{name:"OSX",legacy:[{name:"OSX 10.6",image:"osx106"}]}},cultures:[{language:"English",code:"en",image:"02"},{language:"Dutch",code:"nl",image:"03"},{language:"French",code:"fr",image:"04"},{language:"Russian",code:"ru",image:"05"}],themes:[{theme:"Simplex",image:"02"},{theme:"Cerulean",image:"06"},{theme:"Classic",image:"07"},{theme:"Cosmo",image:"08"},{theme:"Cyborg",image:"09"},{theme:"Darkly",image:"10"},{theme:"Flatly",image:"11"},{theme:"Journal",image:"12"},{theme:"Lumen",image:"13"},{theme:"Paper",image:"14"},{theme:"Readable",image:"15"},{theme:"Sandstone",image:"16"},{theme:"Slate",image:"17"},{theme:"Spacelab",image:"18"},{theme:"Superhero",image:"19"},{theme:"United",image:"20"},{theme:"Yeti",image:"21"}],screenshots:[{text:"First Time User Experience",image:"01"},{text:"Project view",image:"02"},{text:"Status of All Projects",image:"22"},{text:"Dev Tools are always accessible",image:"23"}]},$("#screenshots img").click(function(){var e=$(this).data("os");updateScreenshots(e)}),$("#screenshots .win").click();