(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-iconfontxingxing" viewBox="0 0 1024 1024">'+""+'<path d="M510.364 188.323 578.278 407.062l16.092 40.232 43.331 0 191.571 0-157.451 119.294-34.331 26.011 13.169 42.598 55.84 192.321-160.369-120.373-34.7-23.381-35.336 22.408-161.906 125.448 56.987-194.391 13.927-43.22-36.193-27.422-157.454-119.293 191.567 0 43.329 0 16.093-40.23L510.364 188.323M510.367 0l-127.346 383.293-382.02 0 309.258 234.306-119.734 405.401 319.843-262.781 317.625 262.781-117.523-405.401 309.252-234.306-382.02 0L510.367 0 510.367 0z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-iconfontphone" viewBox="0 0 1024 1024">'+""+'<path d="M233.778 129.618c4.719 4.22 11.714 11.174 21.099 22.284 13.874 16.423 29.387 37.656 44.861 61.405 30.009 46.055 48.741 84.212 54.135 98.747-1.27 5.075-4.854 11.448-11.496 22.598-12.505 20.992-29.63 49.741-29.63 90.518 0 25.987 12.096 54.066 39.219 91.043 17.721 24.158 41.286 51.342 68.149 78.612 26.119 26.515 53.359 50.935 76.702 68.762 36.802 28.105 63.451 40.097 89.108 40.097 36.072 0 64.861-15.349 87.993-27.682 12.694-6.768 24.768-13.205 33.596-14.651 12.498 4.425 48.54 22.768 102.228 61.148 45.318 32.397 73.236 57.52 85.817 70.75-4.181 22.79-17.587 46.155-38.186 65.94-12.037 11.562-25.795 21.099-39.787 27.582-12.117 5.614-24.097 8.706-33.731 8.706-55.427 0-124.538-23.315-199.861-67.426-73.589-43.095-149.913-104.029-220.721-176.215-69.597-70.951-128.733-147.415-171.016-221.124-21.044-36.685-37.238-71.619-48.132-103.833-10.554-31.207-15.906-59.109-15.906-82.931 0-7.975 3.646-18.727 10.266-30.276 7.857-13.708 19.619-28.202 34.012-41.913 13.543-12.901 29.149-24.766 43.943-33.408C223.528 134.211 229.364 131.429 233.778 129.618M241.316 62.744c-52.088 0-177.097 94.596-177.097 181.205 0 253.175 435.762 715.528 719.636 715.528 78.135 0 177.102-83.939 177.102-181.222 0-33.301-203.143-181.205-250.023-181.205-48.18 0-83.343 42.634-125.009 42.634-41.671 0-209.179-167.886-209.179-214.513 0-46.645 41.666-69.288 41.666-117.256C418.413 273.267 293.399 62.744 241.316 62.744L241.316 62.744z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)