(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */function l(){const o=new google.maps.DirectionsRenderer,n=new google.maps.DirectionsService,r=new google.maps.Map(document.getElementById("map"),{zoom:7,center:{lat:41.85,lng:-87.65},disableDefaultUI:!0});o.setMap(r),o.setPanel(document.getElementById("sidebar"));const i=document.getElementById("floating-panel");r.controls[google.maps.ControlPosition.TOP_CENTER].push(i);const e=function(){c(n,o)};document.getElementById("start").addEventListener("change",e),document.getElementById("end").addEventListener("change",e)}function c(o,n){const r=document.getElementById("start").value,i=document.getElementById("end").value;o.route({origin:r,destination:i,travelMode:google.maps.TravelMode.DRIVING}).then(e=>{n.setDirections(e)}).catch(e=>window.alert("Directions request failed due to "+status))}window.initMap=l;
