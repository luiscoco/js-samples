(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */function c(){const i=new google.maps.DirectionsService,n=new google.maps.DirectionsRenderer,o=new google.maps.Map(document.getElementById("map"),{zoom:7,center:{lat:41.85,lng:-87.65}});n.setMap(o);const r=function(){l(i,n)};document.getElementById("start").addEventListener("change",r),document.getElementById("end").addEventListener("change",r)}function l(i,n){i.route({origin:{query:document.getElementById("start").value},destination:{query:document.getElementById("end").value},travelMode:google.maps.TravelMode.DRIVING}).then(o=>{n.setDirections(o)}).catch(o=>window.alert("Directions request failed due to "+status))}window.initMap=c;
