(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */function l(){const i={lat:30.064742,lng:31.249509},t=new google.maps.Map(document.getElementById("map"),{scaleControl:!0,center:i,zoom:10}),r=new google.maps.InfoWindow;r.setContent("<b>\u0627\u0644\u0642\u0627\u0647\u0631\u0629</b>");const n=new google.maps.Marker({map:t,position:i});n.addListener("click",()=>{r.open(t,n)})}window.initMap=l;
