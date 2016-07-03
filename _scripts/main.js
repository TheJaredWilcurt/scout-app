function slickInit(e){$(e).slick({lazyLoad:"ondemand",slidesToShow:1,slidesToScroll:1,dots:!0,centerMode:!0,focusOnSelect:!0,fade:!0})}function slideMaker(e,a,i){return'<div><img data-lazy="_img/screenshots/'+e+"/"+a+'.png" alt="'+i+'" /><p>'+i+"</p></div>"}function updateScreenshots(e){for(var a="",i=siteData.screenshots,t=siteData.os[e].name,s=siteData.os[e].legacy,n="",l="",m="",o=0;o<i.length;o++)n=i[o].image,l=i[o].text+" ("+t+")",m=slideMaker(e,n,l),a=a+"\n"+m;for(var c=0;c<s.length;c++)n=s[c].image,l=s[c].name,m=slideMaker(e,n,l),a=a+"\n"+m;var r="#screenshots .slick";$(r).html(a).removeClass("slick-initialized slick-slider slick-dotted"),slickInit(r)}function updateCultures(e){for(var a=siteData.cultures,i=siteData.os[e].name,t="",s="",n="",l="",m=0;m<a.length;m++)s=a[m].image,n=a[m].language+" ("+i+")",l=slideMaker(e,s,n),t=t+"\n"+l;var o="#cultures .slick";$(o).html(t).removeClass("slick-initialized slick-slider slick-dotted"),slickInit(o)}var latestRelease="https://api.github.com/repos/TheJaredWilcurt/scout-app/releases";$.get(latestRelease,function(e){console.log(e)}),$("#minreqs th").click(function(){$("#minreqs th").removeClass("selected"),$(this).addClass("selected");var e=$(this).data("os");$("#minreqs td div").hide(),$("#minreqs ."+e).show()}),$("#translation_instructions").hide(),$(".showtranslations").click(function(){$("#translation_instructions").slideToggle()}),window.siteData={os:{win:{name:"Windows 7",legacy:[{name:"XP",image:"xp"},{name:"Windows Vista",image:"vista"},{name:"Windows 10",image:"win10"}]},ubuntu:{name:"Ubuntu",legacy:[{name:"Ubuntu 12 LTS",image:"ubuntu12"}]},zorin:{name:"Zorin",legacy:[{name:"Debian",image:"debian"}]},osx:{name:"OSX",legacy:[{name:"OSX 10.6",image:"osx106"}]}},cultures:[{language:"English",code:"en",image:"02"},{language:"Dutch",code:"nl",image:"03"},{language:"French",code:"fr",image:"04"},{language:"Russian",code:"ru",image:"05"}],themes:[{theme:"Simplex",image:"02"},{theme:"Cerulean",image:"06"},{theme:"Classic",image:"07"},{theme:"Cosmo",image:"08"},{theme:"Cyborg",image:"09"},{theme:"Darkly",image:"10"},{theme:"Flatly",image:"11"},{theme:"Journal",image:"12"},{theme:"Lumen",image:"13"},{theme:"Paper",image:"14"},{theme:"Readable",image:"15"},{theme:"Sandstone",image:"16"},{theme:"Slate",image:"17"},{theme:"Spacelab",image:"18"},{theme:"Superhero",image:"19"},{theme:"United",image:"20"},{theme:"Yeti",image:"21"}],screenshots:[{text:"First Time User Experience",image:"01"},{text:"Project view",image:"02"},{text:"Status of All Projects",image:"22"},{text:"Dev Tools are always accessible",image:"23"}]},$("#screenshots img").click(function(){var e=$(this).data("os");updateScreenshots(e)}),$("#cultures img").click(function(){var e=$(this).data("os");updateCultures(e)}),$("#screenshots .win").click(),$("#cultures .win").click(),$("#minreqs [data-os='win']").click();