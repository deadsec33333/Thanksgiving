(function(a,d,p){if(!p){__$PP=p=function(k,v){p.e(k,v)};p.w=[];p.q=[];p.e=function(k,v){p.q.push([k,v,0])};__$PP.e=function(){var e,n,t=0;function i(){return e||((e=document.createElement("div")).style.position="absolute",e.style.width=e.style.height=e.style.border=e.style.padding=e.style.margin=0,e.style.overflow="hidden",document.body.appendChild(e)),n&&clearTimeout(n),t++,e}function r(){--t<=0&&(n=setTimeout(function(){e&&(document.body.removeChild(e),e=null)}))}function o(e){return"Error: "+e.name+": "+e.message}function a(e){try{return e()}catch(e){return o(e)}}function c(){if(!location.ancestorOrigins)return"n/a";for(var e=0,n=[];e<location.ancestorOrigins.length;e++)n[e]=location.ancestorOrigins[e];return n.join(" ")}__$PP.h=function(e){var n,t,o=2166136261;for(n=0,t=e.length;n<t;n++)o^=e.charCodeAt(n),o+=(o<<1)+(o<<4)+(o<<7)+(o<<8)+(o<<24);return("0000000"+(o>>>0).toString(16)).substr(-8)};var f=__$PP.h,u=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||window.setTimeout,l=window.performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return+new Date},g=l(),p=175e3;function d(e){return Math.round(1e3*e)/1e3}function m(e){var n=l();return e(),d(l()-n)}function s(){}if(document.addEventListener){var v=!1;try{addEventListener("",null,Object.defineProperty({},"passive",{get:function(){v={passive:!0,capture:!1}}}))}catch(e){}s=function(t,o,i){t.addEventListener(o,function e(n){i(n)||t.removeEventListener(o,e,v)},v)}}else document.attachEvent&&(s=function(t,o,i){o="on"+o,t.attachEvent(o,function e(n){i(n)||t.detachEvent(o,e)})});var h,w=s;function y(e){var n;return h||((h=document.createElement("iframe")).width=h.height=h.frameBorder=0),document.body.appendChild(h),n=e(h),document.body.removeChild(h),n}function b(e){var n,t=[];for(n in e)t.push(n);return t.join(" ")}var x=100;function E(e){return Math.round(10*e)/10}function S(e){var n=e&&e.outerHTML||"";return n.substr(0,Math.min(x,n.indexOf(">")+1))}function C(r,a){var c,u,d={};function e(o,i){w(r,o,function(e){if(o in d||(d[o]=1,i&&(e=e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0]||e),a(o,"pageX"in e?E(e.pageX)+"x"+E(e.pageY):"clientX"in e?E(e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft)+"x"+E(e.clientY+document.body.scrollTop+document.documentElement.scrollTop):1)),"function"==typeof r.getSelection&&("select"===o||"mouseup"===o||"keyup"===o||"touchend"===o)){var n=r.getSelection(),t=n.toString().substr(0,x);!c&&t&&(c=1,a("selected-text",t),n.rangeCount&&a("selected-html",S(n.getRangeAt(0).commonAncestorContainer)))}return!u&&"click"===o&&e.target&&(a("clicked",S(function(e){for(var n=e;n&&"A"!==n.nodeName&&"BUTTON"!==n.nodeName&&"INPUT"!==n.nodeName;){if("BODY"===n.nodeName)return e;n=n.parentNode}return n}(e.target))),u=1),!("scroll"===o||u&&c)})}e("click"),e("mouseup"),e("mousedown"),e("mousemove"),e("keydown"),e("keyup"),e("keypress"),e("touchstart",1),e("touchend",1),e("touchmove",1),e("touchenter",1),e("touchleave",1),e("touchcancel",1),e("scroll"),e("select"),e("paste"),e("focus"),e("blur")}function P(){return"https:"===location.protocol.toLowerCase()}function T(e){return"number"==typeof e?Math.round(1e4*e)/1e4:e}var k=["appCodeName","appName","appVersion","cookieEnabled","deviceMemory","doNotTrack","hardwareConcurrency","language","maxTouchPoints","platform","product","productSub","userAgent","vendor","vendorSub","webdriver"];function O(){return document.documentElement.clientWidth+"x"+document.documentElement.clientHeight}var _=[function(i){navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices&&navigator.mediaDevices.enumerateDevices().then(function(e){for(var n=0,t={videoinput:0,audioinput:0,audiooutput:0};n<e.length;n++){var o=e[n].kind;t[o]=(t[o]||0)+1}for(n in t)i("media-"+n,t[n])})},function(e){e("url",a(function(){return location.href}))},function(e){e("referrer",a(function(){return document.referrer}))},function(e){e("ancestorOrigins",a(c))},function(e){e("video",a(function(){return screen.width+"x"+screen.height+"x"+screen.colorDepth}))},function(e){e("frame",a(function(){return window.top===window.self?0:1}))},function(e){var n="";void 0===document.hidden&&(document.mozHidden?n="moz":document.msHidden?n="ms":document.webkitHidden&&(n="webkit"));var t=(n?n+"H":"h")+"idden";e("hidden",void 0===document[t]?"n/a":document[t]?1:0),e("visibilityState",void 0===document.visibilityState?"n/a":document.visibilityState),w(document,n+"visibilitychange",function(){return e("visibilitychange",document[t]?1:0),!0})},function(e){e("hasFocus","hasFocus"in document?document.hasFocus()?1:0:"n/a")},function(n){var t=a(O);n("window",t),n("pixelratio",T(window.devicePixelRatio)||"n/a"),n("inner",a(function(){return window.innerWidth+"x"+window.innerHeight})),n("outer",a(function(){return window.outerWidth+"x"+window.outerHeight})),n("pagesize",a(function(){return document.documentElement.scrollWidth+"x"+document.documentElement.scrollHeight}));try{window.top!==window&&(n("top-inner",window.top.innerWidth+"x"+window.top.innerHeight),n("top-pagesize",window.top.document.documentElement.scrollWidth+"x"+window.top.document.documentElement.scrollHeight))}catch(e){}window.addEventListener("resize",function(e){e=a(O),t!==e&&n("resize",t=e)})},function(e){var n=Math.floor(1e3*Math.random()),t="_P$"+n,o=""+n;function i(e){if(e in window){window[e].setItem(t,o);var n=window[e].getItem(t)===o;return window[e].removeItem(t),n?1:0}return"N/A"}e("localStorage",a(function(){return i("localStorage")})),e("sessionStorage",a(function(){return i("sessionStorage")}))},function(r){for(var n,e=0;e<k.length;e++){n=k[e];try{n in navigator&&r(n,navigator[n])}catch(e){r(n,o(e))}}r("navigator-time",m(function(){for(var e,n=navigator,t=[],o=[],i=0;Object.getOwnPropertyNames(n).forEach(function(e){t.push(e)}),n=Object.getPrototypeOf(n););for(;i<t.length;i++)e=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(navigator),t[i]),o.push(t[i],e?e.value?e.value.toString():e.get&&e.get.toString():"");r("navigator-hash",f(o.join(" ")))})),r("sendBeacon",navigator.sendBeacon?1:0)},function(e){var n,t=1,o=i();try{(n=document.createElement("canvas")).width=n.height=10,o.appendChild(n),n.getContext("2d").strokeText("t",0,0)}catch(e){t=0}return r(),e("fontrender",t)},function(e){e("time",a(function(){return(new Date).getTime()})),e("timezone",a(function(){return(new Date).getTimezoneOffset()}))},function(e){var n="N/A";if(window.navigator&&navigator.plugins){for(var t=navigator.plugins,o=[],i=0;i<t.length;i++){o[i]=t[i].name+";"+t[i].description+";"+t[i].filename;for(var r=0;r<t[i].length;r++)o[i]+=" ("+t[i][r].description+";"+t[i][r].type+";"+t[i][r].suffixes+")"}o.length?(o.sort(),n=o.join(" "),e("plugins-time",m(function(){n=f(n)}))):n="None"}e("plugins",n)},function(e){if(window.performance){var n,t=performance.timing.navigationStart||performance.timing.connectStart;for(n in performance.memory)e("mem-"+n,performance.memory[n]/1e6);for(n in performance.timing)performance.timing[n]>t&&e("time-"+n,performance.timing[n]-t);e("navigation-redirectCount",a(function(){return performance.navigation.redirectCount})),e("navigation-type",a(function(e){if(performance.getEntriesByType){var n=performance.getEntriesByType("navigation");if(n[0])return"back_forward"===(e=n[0].type)?"back-forward":e}return 0===(e=performance.navigation.type)?"navigate":1===e?"reload":2===e?"back-forward":e}))}},function(t,o){t("globals",a(function(){return y(function(e){var n=b(o||e.contentWindow);return t("globals-time",m(function(){n=f(n)})),n})}))},function(e){var n=window.history;e("history",void 0===n?"n/a":n.length)},function(t,o){t("document",a(function(){return y(function(e){var n=b(o||e.contentDocument||e.contentWindow.document);return t("document-time",m(function(){n=f(n)})),n})}))},function(n){function e(e){e?(n("battery",[e.charging?1:0,e.level,e.chargingTime,e.dischargingTime].join(" ")),w(e,"chargingchange",function(){n("chargingchange",e.charging?1:0)})):n("battery","n/a")}navigator.getBattery?navigator.getBattery().then(e,function(){n("battery","error")}):e(navigator.battery||navigator.webkitBattery||navigator.mozBattery)},function(e){navigator&&navigator.connection&&(e("connection",navigator.connection.type),e("downlinkMax",navigator.connection.downlinkMax))},function(e){e("getUserMedia",a(function(){return navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?2:navigator.getUserMedia?1:0}))},function(o){["geolocation","notifications","camera","microphone","persistent-storage"].forEach(function(e){var t="permission-"+e;try{navigator.permissions.query({name:e}).then(function(e){function n(){o(t,e.status||e.state)}(e.onchange=n)()},n)}catch(e){n()}function n(){o(t,"error")}})},function(n){if(window.ApplePaySession)try{var e;n("applepay",ApplePaySession.canMakePayments()?1:0);for(var t=1;t<100;t++)if(ApplePaySession.supportsVersion(t))e=t;else if(e)break;e&&n("applepay-version",e)}catch(e){n("applepay",o(e))}},function(e){try{for(var n,t=window.top.document,o=t.getElementsByTagName("iframe"),i=[],r=0;r<o.length;r++){var a=o[r],c=a.src&&(s=a.src,"URL"in window?new URL(s).hostname:s)||(/google/.test(a.id)?"google":a.id),u=a.getBoundingClientRect(),d=Math.round(u.width)+"x"+Math.round(u.height)+"@"+Math.round(u.x)+"x"+Math.round(u.y)+"#"+c;i.push(d),a.contentWindow===window&&e("page-frame-self",d)}e("page-frame-count",o.length),0<i.length&&e("page-frame-list",i.slice(0,100).join(" ")),e("page-hash-time",m(function(){n=f(t.documentElement.outerHTML)})),e("page-hash",n)}catch(e){}var s},function(o){window.getComputedStyle&&o("style-time",m(function(){for(var e=getComputedStyle(document.body),n=[],t=0;t<e.length;t++)n.push(e[t]);o("style-hash",f(n.join(" ")))}))},function(e){var n=document.createElement("audio"),t=document.createElement("video");function o(e,n){switch(e.canPlayType(n)){case"probably":return 2;case"maybe":return 1}return 0}e("audio-codec",n.canPlayType?[o(n,'audio/ogg; codecs="vorbis"'),o(n,"audio/mpeg;"),o(n,'audio/wav; codecs="1"'),o(n,"audio/x-m4a;"),o(n,"audio/aac;")].join(""):"n/a"),e("video-codec",t.canPlayType?[o(t,'video/ogg; codecs="theora"'),o(t,'video/mp4; codecs="avc1.42E01E"'),o(t,'video/webm; codecs="vp8, vorbis"'),o(t,'video/mp4; codecs="mp4v.20.8, mp4a.40.2"'),o(t,'video/mp4; codecs="mp4v.20.240, mp4a.40.2"'),o(t,'video/x-matroska; codecs="theora, vorbis"')].join(""):"n/a")},function(e){e("speechSynthesis",window.speechSynthesis&&window.speechSynthesis.getVoices?speechSynthesis.getVoices().length:"n/a")},function(e){var n=window.matchMedia&&window.matchMedia("any-pointer");e("any-pointer",n?n.matches?1:0:"n/a")},function(e){e("chrome",window.chrome?1:0)},function(e){e("webrtc",window.RTCPeerConnection&&window.RTCDataChannel?1:0)},function(n){var e=document.createElement("div"),t="ad-"+ +new Date;e.id=t,e.className="ads ad ad-placement doubleclick-ad carbon-ad",i().appendChild(e),"none"==getComputedStyle(e).display?(r(),n("adblock",1)):setTimeout(function(){var e=document.getElementById(t);n("adblock",e&&"none"!=getComputedStyle(e).display?0:1),r()},100)},function(a){u(function(){var i=l(),e=window.OfflineAudioContext||window.webkitOfflineAudioContext;if(!e)return a("audiocontext","n/a");try{var n=new e(1,44100,44100),r=n.createDynamicsCompressor(),t=n.createOscillator();t.type="triangle",t.frequency.value=1e4,n.oncomplete=function(e){for(var n=e.renderedBuffer.getChannelData(0),t=0,o=4500;o<5e3;o++)t+=Math.abs(n[o]);a("audiocontext",f(""+t)),r.disconnect(),a("audiocontext-time",d(l()-i))},t.connect(r),r.connect(n.destination),t.start(0),n.startRendering()}catch(e){a("audiocontext","error")}})},function(t){(window.callPhantom||window._phantom||window.phantom)&&t("phantom",1),window.__nightmare&&t("nightmare",1),-1!==(""+window.external).indexOf("Sequentum")&&t("sequentum",1),document.cdc_asdjflasutopfhvcZLmcfl_&&t("selenium",1),y(function(e){var n=e.contentWindow.self.get;n&&n.toString()&&t("puppeteer",1)})},function(e){requestAnimationFrame(function(){e("clock",a(function(){for(var e=1,n=l(),t=n+2;n===l(););for(;l()<t;e++);return e}))})},function(n){var t=1,o=l()+100;!function e(){u(function(){l()<o?(t++,e()):n("framerate",10*t)})}()},function(e){u(function(){e("sort",m(function(){for(var e=[],n=131072;0<n;n--)e[n]=n;return e.sort()}))})},function(t){u(function(){t("stack-time",m(function(){var n=0;try{!function e(){n++,e()}()}catch(e){t("stack",n),t("stack-error",e.name+": "+e.message)}}))})},function(a){u(function(){var e,n,t,o,i=0,r=l();if(window.WebGLRenderingContext){i=1;try{(n=(e=document.createElement("canvas")).getContext("webgl")||e.getContext("experimental-webgl"))?o=n.getSupportedExtensions():i="n/a"}catch(e){i="error"}}if(a("webgl",i),1===i){a("webgl2",window.WebGL2RenderingContext?1:0);try{t=n.getExtension("WEBGL_debug_renderer_info"),a("webgl-vendor",t?n.getParameter(t.UNMASKED_VENDOR_WEBGL):"n/a"),a("webgl-renderer",t?n.getParameter(t.UNMASKED_RENDERER_WEBGL):"n/a")}catch(e){a("webgl-vendor","n/a"),a("webgl-renderer","n/a")}a("webgl-extensions",o&&o.length?f(o.join(" ")):"n/a"),a("webgl-time",d(l()-r))}})},function(t){C(window,t);for(var e=window,n=1;e!==window.top;)try{var o=(e=e.parent).location.href;t("parent-url-"+n++,o),C(e,function(e,n){t("parent-"+e,n)})}catch(e){break}},function(e){window.addEventListener("onpagehide"in window?"pagehide":"unload",function(){e("unload",1)},!1)},function(n){"ondevicelight"in window&&w(window,"devicelight",function(e){n("devicelight",e.value)})},function(o){var i;P()&&w(window,"devicemotion",function(e){var n=e.acceleration,t=n&&(n.x||n.y||n.z)&&[n.x,n.y,n.z].join(" ");if(i==t)return i=t,!0;o("motion",T(t))})},function(t){var o;P()&&w(window,"deviceorientation",function(e){var n=(e.alpha||e.beta||e.gamma)&&[e.alpha,e.beta,e.gamma].join(" ");if(o==n)return o=n,!0;t("orientation",T(n))})},function(n){"ondeviceproximity"in window&&w(window,"deviceproximity",function(e){n("deviceproximity",e.value)}),"onuserproximity"in window&&w(window,"userproximity",function(e){n("userproximity",e.near?"near":"far")})},function(r){if(window.IntersectionObserver){var a,c=0,u=-1,e="left";function n(e,n,t){var o=document.createElement("div");o.style.position="fixed",o.style.width=o.style.height="1px",o.style.pointerEvents="none",o.style.zIndex=-1,o.style.opacity=0,o.style[n]=o.style[e]=t,document.body.appendChild(o);var i=!1;new IntersectionObserver(function(e){for(var n=0;n<e.length;n++){var t=!!e[n].isIntersecting;t!==i&&(c+=t?1:-1,i=t,clearTimeout(a),a=setTimeout(function(){var e=4<c?100:2<c?50:c?25:0;e!==u&&r("intersection-px",u=e)}))}}).observe(o)}window.top!==window&&(n("top",e,"50%"),n("top",e,0),n("top","right",0),n("bottom",e,0),n("bottom","right",0))}else r("intersection-px","n/a")},function(n,e,t,o){try{if(e=window.parent.OmidVerificationClient){function i(e){n("om-event-"+(e&&e.type),JSON.stringify(e))}for(var r in e)"function"==typeof e[r]&&(t=new e[r]).isSupported()&&"function"==typeof t.registerSessionObserver&&"function"==typeof t.addEventListener&&(o=1,t.registerSessionObserver(i),t.addEventListener("geometryChange",i),t.addEventListener("impression",i),t.addEventListener("media",i));o&&n("om-support",1)}}catch(e){n("om-error",e.message||"unknown")}}];var M=document.createElement("div"),L=!1;var N="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_~";function A(e){for(var n="",t=0;t<e.length;t++){var o=e.charCodeAt(t);(o<8||126<o)&&(o=63),n+=("000"+o.toString(4)).slice(-4)}n+="000".slice(n.length%3||3);for(var i="",r=0;r<n.length;)i+=N.charAt(parseInt(n.slice(r,r+=3),4));return i+"~~~~".slice(i.length%4||4)}function D(e,n,t,o){var i=new XMLHttpRequest;i.responseType="text",t&&(i.onload=function(){t(i.responseText)}),i.onerror=o,i.open("POST",e,!0),i.send(n)}function j(e){"i"===e[0]?(new Image).src=e.slice(1):B(e)}function B(e){var n=document.createElement("script");n.src=e,n.async=!0,document.body.appendChild(n)}function R(e){for(var n=[],t=0;t<e.length;t++)n[t]=JSON.stringify([e[t][0],e[t][2],e[t][1]].join("$"));return(n=n.join()).substr(1,n.length-2)}return function(t,e,o,i){var r,a=100,c=[];function u(){for(var e,n=0;n<i.length;n++)e=c[n]||0,c[n]=e+t(o.slice(e),i[n]);a=1e3}function n(e,n){var t=l()-g;t<p&&(o.push([e,n,Math.floor(t)]),clearTimeout(r),"unload"===e||p<t+a?u():r=setTimeout(u,a))}return i.push=function(e){var n=i.length;i[n]=e,c[n]=t(o,e)},function e(n){if(L)return n();try{if(document.body)return document.body.appendChild(M),document.body.removeChild(M),L=!0,n()}catch(e){}setTimeout(function(){e(n)},11)}(function(){!function(e,t){for(var n=0;n<e.length;n++)try{e[n](function(e,n){t(e,n)})}catch(e){t("error_"+n,e.name+": "+e.message)}}(e,n)}),n}(function t(o,i){var n,r,e,a=o.length;if(a&&l()<g+p){var c=i[0],u=i[1]+"api/x";if(i[0]){n=c+"$"+A(R(o));try{navigator.sendBeacon(u,n)}catch(e){D(u,n,null,function(){(new Image).src=u+"?"+n})}return a}if(!i[1]){var d,s,f=i[2],m=document.getElementsByTagName("script");for(i.length=2,r=0;r<m.length;r++)if((d=m[r].src)&&-1<(e=d.indexOf("api/init-"+f))){i[1]=d.slice(0,e).replace(".b2c.com/eu","2.b2c.com"),s=-1===(s=d.indexOf("?"))?"":d.slice(s);break}return i[1]&&D(u=i[1]+"api/v/"+f+s,A(R(o)),function(e,n){for(n=e.split("\n"),r=1;r<n.length;r++)j(n[r]);i[0]=n[0]},function(){__$PP["v"+f]=function(e,n){if(i[0]=e,t(o,i),n)for(r=0;r<n.length;r++)j(n[r])},B(u)}),a}}return 0},_,__$PP.q,__$PP.w)}();
}p.w.push([0,0,a])})("45808jk6rt2xpkn3y7j9",document,window.__$PP)
