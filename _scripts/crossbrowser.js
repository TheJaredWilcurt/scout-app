function log(e){window.console&&showLog&&console.log(e)}function css_browser_selector(e){function i(){var e=window.outerWidth||m.clientWidth,i=window.outerHeight||m.clientHeight;o.orientation=i>e?"portrait":"landscape",m.className=m.className.replace(/ ?orientation_\w+/g,"").replace(/ [min|max|cl]+[w|h]_\d+/g,"");for(var r=a-1;r>=0;r--)if(e>=n[r]){o.maxw=n[r];break}widthClasses="";for(var t in o)widthClasses+=" "+t+"_"+o[t];return m.className=m.className+widthClasses,widthClasses}var o={},n=[320,480,640,768,1024,1152,1280,1440,1680,1920,2560],a=n.length,r=e.toLowerCase(),t=function(e){return RegExp(e,"i").test(r)},s=function(e,i){i=i.replace(".","_");for(var o=i.indexOf("_"),n="";o>0;)n+=" "+e+i.substring(0,o),o=i.indexOf("_",o+1);return n+=" "+e+i},p="gecko",d="webkit",g="chrome",l="firefox",x="safari",c="opera",w="mobile",E="android",R="blackberry",$="lang_",_="device_",m=document.documentElement,b=[!/opera|webtv/i.test(r)&&/msie\s(\d+)/.test(r)?"ie ie"+(/trident\/4\.0/.test(r)?"8":RegExp.$1):t("firefox/")?p+" "+l+(/firefox\/((\d+)(\.(\d+))(\.\d+)*)/.test(r)?" "+l+RegExp.$2+" "+l+RegExp.$2+"_"+RegExp.$4:""):t("gecko/")?p:t("opera")?c+(/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(r)?" "+c+RegExp.$2+" "+c+RegExp.$2+"_"+RegExp.$4:/opera(\s|\/)(\d+)\.(\d+)/.test(r)?" "+c+RegExp.$2+" "+c+RegExp.$2+"_"+RegExp.$3:""):t("konqueror")?"konqueror":t("blackberry")?R+(/Version\/(\d+)(\.(\d+)+)/i.test(r)?" "+R+RegExp.$1+" "+R+RegExp.$1+RegExp.$2.replace(".","_"):/Blackberry ?(([0-9]+)([a-z]?))[\/|;]/gi.test(r)?" "+R+RegExp.$2+(RegExp.$3?" "+R+RegExp.$2+RegExp.$3:""):""):t("android")?E+(/Version\/(\d+)(\.(\d+))+/i.test(r)?" "+E+RegExp.$1+" "+E+RegExp.$1+RegExp.$2.replace(".","_"):"")+(/Android (.+); (.+) Build/i.test(r)?" "+_+RegExp.$2.replace(/ /g,"_").replace(/-/g,"_"):""):t("chrome")?d+" "+g+(/chrome\/((\d+)(\.(\d+))(\.\d+)*)/.test(r)?" "+g+RegExp.$2+(RegExp.$4>0?" "+g+RegExp.$2+"_"+RegExp.$4:""):""):t("iron")?d+" iron":t("applewebkit/")?d+" "+x+(/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(r)?" "+x+RegExp.$2+" "+x+RegExp.$2+RegExp.$3.replace(".","_"):/ Safari\/(\d+)/i.test(r)?"419"==RegExp.$1||"417"==RegExp.$1||"416"==RegExp.$1||"412"==RegExp.$1?" "+x+"2_0":"312"==RegExp.$1?" "+x+"1_3":"125"==RegExp.$1?" "+x+"1_2":"85"==RegExp.$1?" "+x+"1_0":"":""):t("mozilla/")?p:"",t("android|mobi|mobile|j2me|iphone|ipod|ipad|blackberry|playbook|kindle|silk")?w:"",t("j2me")?"j2me":t("ipad|ipod|iphone")?(/CPU( iPhone)? OS (\d+[_|\.]\d+([_|\.]\d+)*)/i.test(r)?"ios"+s("ios",RegExp.$2):"")+" "+(/(ip(ad|od|hone))/gi.test(r)?RegExp.$1:""):t("playbook")?"playbook":t("kindle|silk")?"kindle":t("playbook")?"playbook":t("mac")?"mac"+(/mac os x ((\d+)[.|_](\d+))/.test(r)?" mac"+RegExp.$2+" mac"+RegExp.$1.replace(".","_"):""):t("win")?"win"+(t("windows nt 6.2")?" win8":t("windows nt 6.1")?" win7":t("windows nt 6.0")?" vista":t("windows nt 5.2")||t("windows nt 5.1")?" win_xp":t("windows nt 5.0")?" win_2k":t("windows nt 4.0")||t("WinNT4.0")?" win_nt":""):t("freebsd")?"freebsd":t("x11|linux")?"linux":"",/[; |\[](([a-z]{2})(\-[a-z]{2})?)[)|;|\]]/i.test(r)?($+RegExp.$2).replace("-","_")+(""!=RegExp.$3?(" "+$+RegExp.$1).replace("-","_"):""):"",t("ipad|iphone|ipod")&&!t("safari")?"ipad_app":""];window.onresize=i,i();var f=b.join(" ")+" js ";return m.className=(f+m.className.replace(/\b(no[-|_]?)?js\b/g,"")).replace(/^ /,"").replace(/ +/g," "),f}showLog=!0,css_browser_selector(navigator.userAgent);
