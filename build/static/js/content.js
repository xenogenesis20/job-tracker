!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s=13)}({13:function(e,r){chrome.runtime.onMessage.addListener((function(e,r,t){if(console.log("[content.js]. request received",{request:e,sender:r}),r.id===chrome.runtime.id&&"React"===e.from&&"Hello from React"===e.message&&t("Hello from content.js"),r.id===chrome.runtime.id&&"React"===e.from&&"copy job"===e.message){var n=document.querySelector("#job-details");console.log("jobDetails",n.innerHTML);var o={title:n.querySelector("h1").innerText,company:n.querySelector("h2").innerText,description:n.querySelector("#job-description").innerText,location:n.querySelector("#job-location").innerText,date:n.querySelector("#job-date").innerText,url:n.querySelector("#job-url").innerText};chrome.runtime.sendMessage({from:"content",message:"job",job:o})}}))}});
//# sourceMappingURL=content.js.map