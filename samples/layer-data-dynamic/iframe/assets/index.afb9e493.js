(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */let o;function a(){o=new google.maps.Map(document.getElementById("map"),{zoom:4,center:{lat:-28,lng:137}}),o.data.loadGeoJson("https://storage.googleapis.com/mapsdevsite/json/google.json"),o.data.setStyle(r=>{let n="gray";return r.getProperty("isColorful")&&(n=r.getProperty("color")),{fillColor:n,strokeColor:n,strokeWeight:2}}),o.data.addListener("click",r=>{r.feature.setProperty("isColorful",!0)}),o.data.addListener("mouseover",r=>{o.data.revertStyle(),o.data.overrideStyle(r.feature,{strokeWeight:8})}),o.data.addListener("mouseout",r=>{o.data.revertStyle()})}window.initMap=a;
