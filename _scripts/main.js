function slickInit(e){$(e).slick({lazyLoad:"ondemand",slidesToShow:1,slidesToScroll:1,dots:!0,centerMode:!0,focusOnSelect:!0,fade:!0})}function slideMaker(e,t,a){return'<div><img data-lazy="_img/screenshots/'+e+"/"+t+'.png" alt="'+a+'" /><p>'+a+"</p></div>"}function updateScreenshots(e){for(var t="",a=siteData.screenshots,s=siteData.os[e].name,i=siteData.os[e].legacy,o="",n="",l="",g=0;g<a.length;g++)o=a[g].image,n=a[g].text+" ("+s+")",l=slideMaker(e,o,n),t=t+"\n"+l;for(var r=0;r<i.length;r++)o=i[r].image,n=i[r].name,l=slideMaker(e,o,n),t=t+"\n"+l;var m="#screenshots .slick";$(m).html(t).removeClass("slick-initialized slick-slider slick-dotted"),slickInit(m)}var latestRelease="https://api.github.com/repos/TheJaredWilcurt/scout-app/releases";$.get(latestRelease,function(e){for(var t=0;t<e.length;t++){var a=e[t].assets.length;if(a>3){var s=e[t].assets[0].browser_download_url.toLowerCase(),i=e[t].assets[1].browser_download_url.toLowerCase(),o=e[t].assets[2].browser_download_url.toLowerCase(),n=e[t].assets[3].browser_download_url.toLowerCase();console.log(s),console.log(i),console.log(o),console.log(n);var l,g,r,m;return/lin32/gi.test(s)?l=s:/lin32/gi.test(i)?l=i:/lin32/gi.test(o)?l=o:/lin32/gi.test(n)&&(l=n),/lin64/gi.test(s)?g=s:/lin64/gi.test(i)?g=i:/lin64/gi.test(o)?g=o:/lin64/gi.test(n)&&(g=n),/osx/gi.test(s)?r=s:/osx/gi.test(i)?r=i:/osx/gi.test(o)?r=o:/osx/gi.test(n)&&(r=n),/win/gi.test(s)?m=s:/win/gi.test(i)?m=i:/win/gi.test(o)?m=o:/win/gi.test(n)&&(m=n),$("#downloads .lin32").attr("href",l),$("#downloads .lin64").attr("href",g),$("#downloads .osxupdate").attr("href",r),void $("#downloads .windowsupdate").attr("href",m)}}console.log(e)}),window.siteData={os:{win:{name:"Windows 7",legacy:[{name:"XP",image:"xp"},{name:"Windows Vista",image:"vista"},{name:"Windows 10",image:"win10"}]},ubuntu:{name:"Ubuntu",legacy:[{name:"Ubuntu 12 LTS",image:"ubuntu12"}]},zorin:{name:"Zorin",legacy:[{name:"Debian",image:"debian"}]},osx:{name:"OSX",legacy:[{name:"OSX 10.6",image:"osx106"}]}},cultures:[{language:"English",code:"en",image:"02"},{language:"Dutch",code:"nl",image:"03"},{language:"French",code:"fr",image:"04"},{language:"Russian",code:"ru",image:"05"}],themes:[{theme:"Simplex",image:"02"},{theme:"Cerulean",image:"06"},{theme:"Classic",image:"07"},{theme:"Cosmo",image:"08"},{theme:"Cyborg",image:"09"},{theme:"Darkly",image:"10"},{theme:"Flatly",image:"11"},{theme:"Journal",image:"12"},{theme:"Lumen",image:"13"},{theme:"Paper",image:"14"},{theme:"Readable",image:"15"},{theme:"Sandstone",image:"16"},{theme:"Slate",image:"17"},{theme:"Spacelab",image:"18"},{theme:"Superhero",image:"19"},{theme:"United",image:"20"},{theme:"Yeti",image:"21"}],screenshots:[{text:"First Time User Experience",image:"01"},{text:"Project view",image:"02"},{text:"Status of All Projects",image:"22"},{text:"Dev Tools are always accessible",image:"23"}]},$("#screenshots img").click(function(){var e=$(this).data("os");updateScreenshots(e)}),$("#screenshots .win").click();