(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */function a(){const r=new google.maps.Map(document.getElementById("map"),{zoom:10,center:{lat:-33.9,lng:151.2}});c(r)}const l=[["Bondi Beach",-33.890542,151.274856,4],["Coogee Beach",-33.923036,151.259052,5],["Cronulla Beach",-34.028249,151.157507,3],["Manly Beach",-33.80010128657071,151.28747820854187,2],["Maroubra Beach",-33.950198,151.259302,1]];function c(r){const n={url:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",size:new google.maps.Size(20,32),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(0,32)},i={coords:[1,1,1,20,18,20,18,1],type:"poly"};for(let t=0;t<l.length;t++){const e=l[t];new google.maps.Marker({position:{lat:e[1],lng:e[2]},map:r,icon:n,shape:i,title:e[0],zIndex:e[3]})}}window.initMap=a;
