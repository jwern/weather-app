(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.p;const e=()=>"332ebb7116d0fe9b568f1a1caf967157";!async function(t){try{const t=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Torl Aviv&appid=${e()}`,{mode:"cors"});!function(t){console.log("Weather",t),console.log(function(t,e="Kelvin"){const r={Celsius:Number(t)-273.15,Fahrenheit:9*Number(t)/5-459.67,Kelvin:Number(t)};return Math.round(r[e])}(t.main.temp,"Fahrenheit"))}(await t.json())}catch(t){console.log("There was an error")}}()})();