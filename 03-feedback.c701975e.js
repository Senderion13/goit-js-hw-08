function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},r=t.parcelRequire4c75;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},t.parcelRequire4c75=r);var l=r("kEUo3");let n=document.querySelector(".feedback-form"),d=document.querySelector("input"),f=document.querySelector("textarea");n.addEventListener("input",e(l).throttle((e=>{localStorage.setItem("feedback-form-state",JSON.stringify({email:`${d.value}`,message:`${f.value}`}))}),500)),document.addEventListener("DOMContentLoaded",(()=>{null!=localStorage.getItem("feedback-form-state")&&(d.value=JSON.parse(localStorage.getItem("feedback-form-state")).email,f.value=JSON.parse(localStorage.getItem("feedback-form-state")).message)})),n.addEventListener("submit",(e=>{console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),n.reset(),localStorage.removeItem("feedback-form-state"),e.preventDefault()}));
//# sourceMappingURL=03-feedback.c701975e.js.map