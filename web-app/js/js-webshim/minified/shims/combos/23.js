(function(a,b,p){var l=b.audio&&b.video,q=!1;if(l)a=document.createElement("video"),b.videoBuffered="buffered"in a,q="loop"in a,p.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(",")),b.videoBuffered||(p.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:b.videoBuffered,d:["dom-support"]}),p.reTest("mediaelement-native-fix"));jQuery.webshims.register("mediaelement-core",function(a,b,j,t,s){var g=b.mediaelement,r=b.cfg.mediaelement,
m=function(c,v){var c=a(c),i={src:c.attr("src")||"",elem:c,srcProp:c.prop("src")};if(!i.src)return i;var k=c.attr("type");if(k)i.type=k,i.container=a.trim(k.split(";")[0]);else if(v||(v=c[0].nodeName.toLowerCase(),"source"==v&&(v=(c.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),k=g.getTypeForSrc(i.src,v))i.type=k,i.container=k,b.warn("you should always provide a proper mime-type using the source element. "+i.src+" detected as: "+k),a.nodeName(c[0],"source")&&c.attr("type",
k);if(k=c.attr("media"))i.media=k;return i},w=swfobject.hasFlashPlayerVersion("9.0.115"),n=function(){b.ready("mediaelement-swf",function(){if(!g.createSWF)b.modules["mediaelement-swf"].test=a.noop,b.reTest(["mediaelement-swf"],l)})};g.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],"audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8",
"m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};g.mimeTypes.source=a.extend({},g.mimeTypes.audio,g.mimeTypes.video);g.getTypeForSrc=function(c,b){if(-1!=c.indexOf("youtube.com/watch?")||-1!=c.indexOf("youtube.com/v/"))return"video/youtube";
var c=c.split("?")[0].split("."),c=c[c.length-1],i;a.each(g.mimeTypes[b],function(a,b){if(-1!==b.indexOf(c))return i=a,!1});return i};g.srces=function(c,b){c=a(c);if(b)c.removeAttr("src").removeAttr("type").find("source").remove(),a.isArray(b)||(b=[b]),b.forEach(function(a){var i=t.createElement("source");"string"==typeof a&&(a={src:a});i.setAttribute("src",a.src);a.type&&i.setAttribute("type",a.type);a.media&&i.setAttribute("media",a.media);c.append(i)});else{var b=[],i=c[0].nodeName.toLowerCase(),
k=m(c,i);k.src?b.push(k):a("source",c).each(function(){k=m(this,i);k.src&&b.push(k)});return b}};a.fn.loadMediaSrc=function(c,b){return this.each(function(){b!==s&&(a(this).removeAttr("poster"),b&&a.attr(this,"poster",b));g.srces(this,c);a(this).mediaLoad()})};g.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");
g.canSwfPlaySrces=function(c,b){var i="";w&&(c=a(c),b=b||g.srces(c),a.each(b,function(a,c){if(c.container&&c.src&&-1!=g.swfMimeTypes.indexOf(c.container))return i=c,!1}));return i};var c={};g.canNativePlaySrces=function(b,d){var i="";if(l){var b=a(b),k=(b[0].nodeName||"").toLowerCase();if(!c[k])return i;d=d||g.srces(b);a.each(d,function(a,d){if(d.type&&c[k].prop._supvalue.call(b[0],d.type))return i=d,!1})}return i};g.setError=function(c,d){d||(d="can't play sources");a(c).pause().data("mediaerror",
d);b.warn("mediaelementError: "+d);setTimeout(function(){a(c).data("mediaerror")&&a(c).trigger("mediaerror")},1)};var o=function(){var a;return function(c,i,k){b.ready("mediaelement-swf",function(){g.createSWF?g.createSWF(c,i,k):a||(a=!0,n(),o(c,i,k))})}}(),d=function(a,c,i,b,u){i||!1!==i&&c&&"flash"==c.isActive?(i=g.canSwfPlaySrces(a,b))?o(a,i,c):u?g.setError(a,!1):d(a,c,!1,b,!0):(i=g.canNativePlaySrces(a,b))?c&&"flash"==c.isActive&&g.setActive(a,"html5",c):u?(g.setError(a,!1),c&&"flash"==c.isActive&&
g.setActive(a,"html5",c)):d(a,c,!0,b,!0)},y=/^(?:embed|object|datalist)$/i,x=function(c,o){var i=b.data(c,"mediaelementBase")||b.data(c,"mediaelementBase",{}),k=g.srces(c),u=c.parentNode;clearTimeout(i.loadTimer);a.data(c,"mediaerror",!1);if(k.length&&u&&!(1!=u.nodeType||y.test(u.nodeName||"")))o=o||b.data(c,"mediaelement"),d(c,o,r.preferFlash||s,k)};a(t).bind("ended",function(c){var d=b.data(c.target,"mediaelement");(!q||d&&"html5"!=d.isActive||a.prop(c.target,"loop"))&&setTimeout(function(){!a.prop(c.target,
"paused")&&a.prop(c.target,"loop")&&a(c.target).prop("currentTime",0).play()},1)});q||b.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(d){var o=b.defineNodeNameProperty(d,"load",{prop:{value:function(){var c=b.data(this,"mediaelement");x(this,c);l&&(!c||"html5"==c.isActive)&&o.prop._supvalue&&o.prop._supvalue.apply(this,arguments)}}});c[d]=b.defineNodeNameProperty(d,"canPlayType",{prop:{value:function(i){var b="";l&&c[d].prop._supvalue&&(b=c[d].prop._supvalue.call(this,
i),"no"==b&&(b=""));!b&&w&&(i=a.trim((i||"").split(";")[0]),-1!=g.swfMimeTypes.indexOf(i)&&(b="maybe"));return b}}})});b.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var c=this,a=b.data(c,"mediaelementBase")||b.data(c,"mediaelementBase",{});clearTimeout(a.loadTimer);a.loadTimer=setTimeout(function(){x(c);c=null},9)}});l&&b.isReady("mediaelement-core",!0);b.addReady(function(c,d){a("video, audio",c).add(d.filter("video, audio")).each(function(){a.browser.msie&&8<b.browserVersion&&
a.prop(this,"paused")&&!a.prop(this,"readyState")&&a(this).is('audio[preload="none"][controls]:not([autoplay])')?a(this).prop("preload","metadata").mediaLoad():x(this);if(l){var c,d,o=this,g=function(){var c=a.prop(o,"buffered");if(c){for(var i="",b=0,d=c.length;b<d;b++)i+=c.end(b);return i}},t=function(){var c=g();c!=d&&(d=c,a(o).triggerHandler("progress"))};a(this).bind("play loadstart progress",function(a){"progress"==a.type&&(d=g());clearTimeout(c);c=setTimeout(t,999)}).bind("emptied stalled mediaerror abort suspend",
function(a){"emptied"==a.type&&(d=!1);clearTimeout(c)})}})});l&&w&&b.ready("WINDOWLOAD mediaelement",n)})})(jQuery,Modernizr,jQuery.webshims);
jQuery.webshims.register("form-message",function(a,b,p,l,q,h){var f=b.validityMessages,p=h.overrideMessages||h.customMessages?["customValidationMessage"]:[];f.en=f.en||f["en-US"]||{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}};["select","radio"].forEach(function(a){f.en.valueMissing[a]="Please select an option."});["date","time","datetime-local"].forEach(function(a){f.en.rangeUnderflow[a]="Value must be at or after {%min}."});["date","time","datetime-local"].forEach(function(a){f.en.rangeOverflow[a]=
"Value must be at or before {%max}."});f["en-US"]=f["en-US"]||f.en;f[""]=f[""]||f["en-US"];f.de=f.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}};["select","radio"].forEach(function(a){f.de.valueMissing[a]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(a){f.de.rangeUnderflow[a]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(a){f.de.rangeOverflow[a]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});var j=
f[""];b.createValidationMessage=function(b,f){var g=j[f];g&&"string"!==typeof g&&(g=g[a.prop(b,"type")]||g[(b.nodeName||"").toLowerCase()]||g.defaultMessage);g&&"value,min,max,title,maxlength,label".split(",").forEach(function(f){if(-1!==g.indexOf("{%"+f)){var m=("label"==f?a.trim(a('label[for="'+b.id+'"]',b.form).text()).replace(/\*$|:$/,""):a.attr(b,f))||"";g=g.replace("{%"+f+"}",m);"value"==f&&(g=g.replace("{%valueLen}",m.length))}});return g||""};(b.bugs.validationMessage||!Modernizr.formvalidation)&&
p.push("validationMessage");b.activeLang({langObj:f,module:"form-core",callback:function(a){j=a}});Modernizr.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&b.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=this.options||[];if(!b.length){var f=a("select",this);if(f[0]&&f[0].options&&f[0].options.length)b=f[0].options}return b}}});p.forEach(function(f){b.defineNodeNamesProperty(["fieldset","output","button"],
f,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(h){var g=b.defineNodeNameProperty(h,f,{prop:{get:function(){var f=this,h="";if(!a.prop(f,"willValidate"))return h;var j=a.prop(f,"validity")||{valid:1};if(j.valid||(h=b.getContentValidationMessage(f,j)))return h;if(j.customError&&f.nodeName&&(h=Modernizr.formvalidation&&g.prop._supget?g.prop._supget.call(f):b.data(f,"customvalidationMessage")))return h;a.each(j,function(a,c){if("valid"!=a&&c&&(h=b.createValidationMessage(f,
a)))return!1});return h||""},writeable:!1}})})})});
Modernizr.formvalidation||jQuery.webshims.register("form-extend",function(a,b,p,l){b.inputTypes=b.inputTypes||{};var q=b.cfg.forms,h,f=b.inputTypes,j={radio:1,checkbox:1};b.addInputType=function(c,a){f[c]=a};var t={customError:!1,typeMismatch:!1,rangeUnderflow:!1,rangeOverflow:!1,stepMismatch:!1,tooLong:!1,patternMismatch:!1,valueMissing:!1,valid:!0},s={valueMissing:function(c,b,d){if(!c.attr("required"))return!1;var f=!1;if(!("type"in d))d.type=(c[0].getAttribute("type")||c[0].type||"").toLowerCase();
if("select"==d.nodeName){if(b=!b)if(!(b=0>c[0].selectedIndex))c=c[0],b="select-one"==c.type&&2>c.size?!!a("> option:first-child",c).prop("selected"):!1;c=b}else c=j[d.type]?"checkbox"==d.type?!c.is(":checked"):!a(c[0].form&&c[0].name?c[0].form[c[0].name]:[]).filter(":checked")[0]:!b;return c},tooLong:function(){return!1},typeMismatch:function(a,b,d){if(""===b||"select"==d.nodeName)return!1;var g=!1;if(!("type"in d))d.type=(a[0].getAttribute("type")||a[0].type||"").toLowerCase();f[d.type]&&f[d.type].mismatch&&
(g=f[d.type].mismatch(b,a));return g},patternMismatch:function(a,o,d){if(""===o||"select"==d.nodeName)return!1;a=a.attr("pattern");if(!a)return!1;try{a=RegExp("^(?:"+a+")$")}catch(f){b.error('invalid pattern value: "'+a+'" | '+f),a=!1}return!a?!1:!a.test(o)}};b.addValidityRule=function(a,b){s[a]=b};a.event.special.invalid={add:function(){a.event.special.invalid.setup.call(this.form||this)},setup:function(){var c=this.form||this;a.data(c,"invalidEventShim")||(a(c).data("invalidEventShim",!0).bind("submit",
a.event.special.invalid.handler),b.moveToFirstEvent(c,"submit"))},teardown:a.noop,handler:function(c){if(!("submit"!=c.type||c.testedValidity||!c.originalEvent||!a.nodeName(c.target,"form")||a.prop(c.target,"noValidate"))){h=!0;c.testedValidity=!0;if(!a(c.target).checkValidity())return c.stopImmediatePropagation(),h=!1;h=!1}}};a(l).bind("invalid",a.noop);a.event.special.submit=a.event.special.submit||{setup:function(){return!1}};var g=a.event.special.submit.setup;a.extend(a.event.special.submit,{setup:function(){a.nodeName(this,
"form")?a(this).bind("invalid",a.noop):a("form",this).bind("invalid",a.noop);return g.apply(this,arguments)}});b.addInputType("email",{mismatch:function(){var a=q.emailReg||/^[a-zA-Z0-9.!#$%&'*+-\/=?\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;return function(b){return!a.test(b)}}()});b.addInputType("url",{mismatch:function(){var a=q.urlReg||/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(b){return!a.test(b)}}()});b.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return b.inputTypes[a]?a:this.type}}});b.defineNodeNamesProperties(["button","fieldset","output"],{checkValidity:{value:function(){return!0}},willValidate:{value:!1},setCustomValidity:{value:a.noop},validity:{writeable:!1,get:function(){return a.extend({},t)}}},"prop");var r=function(c){var f,d=a.prop(c,"validity");if(d)a.data(c,"cachedValidity",
d);else return!0;if(!d.valid){f=a.Event("invalid");var g=a(c).trigger(f);if(h&&!r.unhandledInvalids&&!f.isDefaultPrevented())b.validityAlert.showFor(g),r.unhandledInvalids=!0}a.removeData(c,"cachedValidity");return d.valid};b.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){var c=!0,f=a("input,textarea,select",this).filter(function(){var a=b.data(this,"shadowData");return!a||!a.nativeElement||a.nativeElement===this});r.unhandledInvalids=!1;for(var d=0,g=f.length;d<g;d++)r(f[d])||
(c=!1);return c}}});b.defineNodeNamesProperties(["input","textarea","select"],{checkValidity:{value:function(){r.unhandledInvalids=!1;return r(a(this).getNativeElement()[0])}},setCustomValidity:{value:function(c){a.removeData(this,"cachedValidity");b.data(this,"customvalidationMessage",""+c)}},willValidate:{set:a.noop,get:function(){var c={button:1,reset:1,hidden:1,image:1};return function(){var b=a(this).getNativeElement()[0];return!(b.disabled||b.readOnly||c[b.type]||b.form&&a.prop(b.form,"noValidate"))}}()},
validity:{set:a.noop,get:function(){var c=a(this).getNativeElement(),f=c[0],d=a.data(f,"cachedValidity");if(d)return d;d=a.extend({},t);if(!a.prop(f,"willValidate")||"submit"==f.type)return d;var g=c.val(),h={nodeName:f.nodeName.toLowerCase()};d.customError=!!b.data(f,"customvalidationMessage");if(d.customError)d.valid=!1;a.each(s,function(a,b){if(b(c,g,h))d[a]=!0,d.valid=!1});a(this).getShadowFocusElement().attr("aria-invalid",d.valid?"false":"true");f=c=null;return d}}},"prop");b.defineNodeNamesBooleanProperty(["input",
"textarea","select"],"required",{set:function(c){a(this).getShadowFocusElement().attr("aria-required",!!c+"")},initAttr:!a.browser.msie||7<b.browserVersion});b.reflectProperties(["input"],["pattern"]);var m=function(){var c,b=0,d=a([]),f=1E9,g=function(){var a=d.prop("value"),c=a.length;c>b&&c>f&&(c=Math.max(b,f),d.prop("value",a.substr(0,c)));b=c},h=function(){clearTimeout(c);d.unbind(".maxlengthconstraint")};return function(j,i){h();if(-1<i)f=i,b=a.prop(j,"value").length,d=a(j),d.bind("keydown.maxlengthconstraint keypress.maxlengthconstraint paste.maxlengthconstraint cut.maxlengthconstraint",
function(){setTimeout(g,0)}),d.bind("keyup.maxlengthconstraint",g),d.bind("blur.maxlengthconstraint",h),c=setInterval(g,200)}}();m.update=function(c,b){c===l.activeElement&&(null==b&&(b=a.prop(c,"maxlength")),m(e.target,b))};a(l).bind("focusin",function(c){var b;"TEXTAREA"==c.target.nodeName&&-1<(b=a.prop(c.target,"maxlength"))&&m(c.target,b)});b.defineNodeNameProperty("textarea","maxlength",{attr:{set:function(a){this.setAttribute("maxlength",""+a);m.update(this)},get:function(){var a=this.getAttribute("maxlength");
return null==a?void 0:a}},prop:{set:function(a){if("number"==typeof a||a&&a==1*a){if(0>a)throw"INDEX_SIZE_ERR";a=parseInt(a,10);this.setAttribute("maxlength",a);m.update(this,a)}else this.setAttribute("maxlength","0"),m.update(this,0)},get:function(){var a=this.getAttribute("maxlength");return("number"==typeof a||a&&a==1*a)&&0<=a?parseInt(a,10):-1}}});b.defineNodeNameProperty("textarea","maxLength",{prop:{set:function(c){a.prop(this,"maxlength",c)},get:function(){return a.prop(this,"maxlength")}}});
var w={submit:1,button:1,image:1},n={};[{name:"enctype",limitedTo:{"application/x-www-form-urlencoded":1,"multipart/form-data":1,"text/plain":1},defaultProp:"application/x-www-form-urlencoded",proptype:"enum"},{name:"method",limitedTo:{get:1,post:1},defaultProp:"get",proptype:"enum"},{name:"action",proptype:"url"},{name:"target"},{name:"novalidate",propName:"noValidate",proptype:"boolean"}].forEach(function(c){var b="form"+(c.propName||c.name).replace(/^[a-z]/,function(a){return a.toUpperCase()}),
d="form"+c.name,f=c.name,g="click.webshimssubmittermutate"+f,h=function(){if("form"in this&&w[this.type]){var i=a.prop(this,"form");if(i){var k=a.attr(this,d);if(null!=k&&(!c.limitedTo||k.toLowerCase()===a.prop(this,b))){var g=a.attr(i,f);a.attr(i,f,k);setTimeout(function(){if(null!=g)a.attr(i,f,g);else try{a(i).removeAttr(f)}catch(c){i.removeAttribute(f)}},9)}}}};switch(c.proptype){case "url":var j=l.createElement("form");n[b]={prop:{set:function(c){a.attr(this,d,c)},get:function(){var c=a.attr(this,
d);if(null==c)return"";j.setAttribute("action",c);return j.action}}};break;case "boolean":n[b]={prop:{set:function(c){c?a.attr(this,"formnovalidate","formnovalidate"):a(this).removeAttr("formnovalidate")},get:function(){return null!=a.attr(this,"formnovalidate")}}};break;case "enum":n[b]={prop:{set:function(c){a.attr(this,d,c)},get:function(){var b=a.attr(this,d);return!b||(b=b.toLowerCase())&&!c.limitedTo[b]?c.defaultProp:b}}};break;default:n[b]={prop:{set:function(c){a.attr(this,d,c)},get:function(){var c=
a.attr(this,d);return null!=c?c:""}}}}n[d]||(n[d]={});n[d].attr={set:function(c){n[d].attr._supset.call(this,c);a(this).unbind(g).bind(g,h)},get:function(){return n[d].attr._supget.call(this)}};n[d].initAttr=!0;n[d].removeAttr={value:function(){a(this).unbind(g);n[d].removeAttr._supvalue.call(this)}}});b.defineNodeNamesProperties(["input","button"],n);!a.support.getSetAttribute&&null==a("<form novalidate></form>").attr("novalidate")&&b.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){this.setAttribute("novalidate",
""+a)},get:function(){var a=this.getAttribute("novalidate");return null==a?void 0:a}}});b.defineNodeNameProperty("form","noValidate",{prop:{set:function(c){c?a.attr(this,"novalidate","novalidate"):a(this).removeAttr("novalidate")},get:function(){return null!=a.attr(this,"novalidate")}}});b.addReady(function(c,b){var d;a("form",c).add(b.filter("form")).bind("invalid",a.noop);try{if(c==l&&!("form"in(l.activeElement||{})))(d=a("input[autofocus], select[autofocus], textarea[autofocus]",c).eq(0).getShadowFocusElement()[0])&&
d.offsetHeight&&d.offsetWidth&&d.focus()}catch(f){}});(function(){Modernizr.textareaPlaceholder=!!("placeholder"in a("<textarea />")[0]);if(!Modernizr.input.placeholder||!Modernizr.textareaPlaceholder){var c="over"==b.cfg.forms.placeholderType,f=["textarea"];Modernizr.input.placeholder||f.push("input");var d=function(a){if(a.setSelectionRange)return a.setSelectionRange(0,0),!0;if(a)return a=a.createTextRange(),a.collapse(!0),a.moveEnd("character",0),a.moveStart("character",0),a.select(),!0},g=function(b,
f,g,h){!1===g&&(g=a.prop(b,"value"));if(!c&&"password"!=b.type){if(!g&&h&&d(b)){var j;a(b).bind("keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove",function(){b.value=a.prop(b,"value");f.box.removeClass("placeholder-visible");clearTimeout(j);a(b).unbind(".placeholderremove")}).bind("mousedown.placeholderremove drag.placeholderremove select.placeholderremove",function(){d(b);clearTimeout(j);j=setTimeout(function(){d(b)},9)}).bind("blur.placeholderremove",
function(){clearTimeout(j);a(b).unbind(".placeholderremove")});return}b.value=g}else if(!g&&h){a(b).bind("keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove",function(){f.box.removeClass("placeholder-visible");a(b).unbind(".placeholderremove")}).bind("blur.placeholderremove",function(){a(b).unbind(".placeholderremove")});return}f.box.removeClass("placeholder-visible")},h=function(b,d,f,h,j){if(!h&&(h=a.data(b,"placeHolder"),!h))return;a(b).unbind(".placeholderremove");
if("focus"==j||!j&&b===l.activeElement)("password"==b.type||c||a(b).hasClass("placeholder-visible"))&&g(b,h,"",!0);else if(!1===d&&(d=a.prop(b,"value")),d)g(b,h,d);else if(!1===f&&(f=a.attr(b,"placeholder")||""),f&&!d){d=h;!1===f&&(f=a.prop(b,"placeholder"));if(!c&&"password"!=b.type)b.value=f;d.box.addClass("placeholder-visible")}else g(b,h,d)},j=function(b){var b=a(b),c=b.prop("id"),d=!(!b.prop("title")&&!b.attr("aria-labeledby"));!d&&c&&(d=!!a('label[for="'+c+'"]',b[0].form)[0]);d||(c||(c=a.webshims.getID(b)),
d=!!a("label #"+c)[0]);return a(d?'<span class="placeholder-text"></span>':'<label for="'+c+'" class="placeholder-text"></label>')},m=function(){var b={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(b){var d=a.data(b,"placeHolder");if(d)return d;d=a.data(b,"placeHolder",{text:j(b)});a(b).bind("focus.placeholder blur.placeholder",function(a){h(this,!1,!1,d,a.type);d.box["focus"==a.type?"addClass":"removeClass"]("placeholder-focused")});b.form&&a(b.form).bind("reset.placeholder",
function(a){setTimeout(function(){h(b,!1,!1,d,a.type)},0)});if("password"==b.type||c){d.box=a(b).wrap('<span class="placeholder-box placeholder-box-'+(b.nodeName||"").toLowerCase()+'" />').parent();d.text.insertAfter(b).bind("mousedown.placeholder",function(){h(this,!1,!1,d,"focus");try{setTimeout(function(){b.focus()},0)}catch(a){}return!1});a.each(["Left","Top"],function(c,f){var g=(parseInt(a.curCSS(b,"padding"+f),10)||0)+Math.max(parseInt(a.curCSS(b,"margin"+f),10)||0,0)+(parseInt(a.curCSS(b,
"border"+f+"Width"),10)||0);d.text.css("padding"+f,g)});a.curCSS(b,"lineHeight");var f={width:a(b).width(),height:a(b).height()},i=a.curCSS(b,"float");a.each(["lineHeight","fontSize","fontFamily","fontWeight"],function(c,f){var g=a.curCSS(b,f);d.text.css(f)!=g&&d.text.css(f,g)});f.width&&f.height&&d.text.css(f);"none"!==i&&d.box.addClass("placeholder-box-"+i)}else f=function(c){a(b).hasClass("placeholder-visible")&&(g(b,d,""),c&&"submit"==c.type&&setTimeout(function(){c.isDefaultPrevented()&&h(b,
!1,!1,d)},9))},a.nodeName(d.text[0],"label")&&setTimeout(function(){d.text.hide()[a.browser.msie?"insertBefore":"insertAfter"](b)},9),a(p).bind("beforeunload",f),d.box=a(b),b.form&&a(b.form).submit(f);return d},update:function(c,d){if(b[a.prop(c,"type")]||a.nodeName(c,"textarea")){var f=m.create(c);f.text.text(d);h(c,!1,d,f)}}}}();a.webshims.publicMethods={pHolder:m};f.forEach(function(a){b.defineNodeNameProperty(a,"placeholder",{attr:{set:function(a){b.contentAttr(this,"placeholder",a);m.update(this,
a)},get:function(){return b.contentAttr(this,"placeholder")}},reflect:!0,initAttr:!0})});f.forEach(function(c){var d={},f;["attr","prop"].forEach(function(c){d[c]={set:function(d){var g=b.contentAttr(this,"placeholder");a.removeData(this,"cachedValidity");var i=f[c]._supset.call(this,d);g&&"value"in this&&h(this,d,g);return i},get:function(){return a(this).hasClass("placeholder-visible")?"":f[c]._supget.call(this)}}});f=b.defineNodeNameProperty(c,"value",d)})}})()});
jQuery.webshims.ready("dom-support",function(a,b,p,l){(function(){if(!("value"in l.createElement("output"))){b.defineNodeNameProperty("output","value",{prop:{set:function(b){var f=a.data(this,"outputShim");f||(f=q(this));f(b)},get:function(){return b.contentAttr(this,"value")||a(this).text()||""}}});b.onNodeNamesPropertyModify("input","value",function(b,f,j){"removeAttr"!=j&&(f=a.data(this,"outputShim"))&&f(b)});var q=function(h){if(!h.getAttribute("aria-live")){var h=a(h),f=(h.text()||"").trim(),
j=h.attr("id"),t=h.attr("for"),s=a('<input class="output-shim" type="text" disabled name="'+(h.attr("name")||"")+'" value="'+f+'" style="display: none !important;" />').insertAfter(h),g=s[0].form||l,r=function(a){s[0].value=a;a=s[0].value;h.text(a);b.contentAttr(h[0],"value",a)};h[0].defaultValue=f;b.contentAttr(h[0],"value",f);h.attr({"aria-live":"polite"});j&&(s.attr("id",j),h.attr("aria-labeldby",b.getID(a('label[for="'+j+'"]',g))));t&&(j=b.getID(h),t.split(" ").forEach(function(a){(a=l.getElementById(a))&&
a.setAttribute("aria-controls",j)}));h.data("outputShim",r);s.data("outputShim",r);return r}};b.addReady(function(b,f){a("output",b).add(f.filter("output")).each(function(){q(this)})})}})();(function(){var q={updateInput:1,input:1},h={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,file:1,color:1},f=function(a){var f,h=a.prop("value"),g=function(f){if(a){var c=a.prop("value");c!==h&&(h=c,(!f||!q[f.type])&&b.triggerInlineForm&&b.triggerInlineForm(a[0],"input"))}},l,m=function(){clearTimeout(l);
l=setTimeout(g,9)},p=function(){a.unbind("focusout",p).unbind("keyup keypress keydown paste cut",m).unbind("input change updateInput",g);clearInterval(f);setTimeout(function(){g();a=null},1)};clearInterval(f);f=setInterval(g,99);m();a.bind("keyup keypress keydown paste cut",m).bind("focusout",p).bind("input updateInput change",g)};if(a.event.customEvent)a.event.customEvent.updateInput=!0;a(l).bind("focusin",function(b){b.target&&b.target.type&&!b.target.readOnly&&!b.target.disabled&&"input"==(b.target.nodeName||
"").toLowerCase()&&!h[b.target.type]&&f(a(b.target))})})();b.isReady("form-output",!0)});
