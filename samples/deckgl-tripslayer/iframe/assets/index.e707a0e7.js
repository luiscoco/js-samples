(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();/**
 * @license
 * Copyright 2021 Google LLC.
 * SPDX-License-Identifier: Apache-2.0
 */const a=deck.GoogleMapsOverlay,l=deck.TripsLayer,c="https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/trips/trips-v7.json",d=1800,p=[[255,0,0],[0,0,255]];function u(){const i=new google.maps.Map(document.getElementById("map"),{center:{lat:40.72,lng:-74},mapId:"fae05836df2dc8bb",tilt:45,zoom:15});let o=0;const n={id:"trips",data:c,getPath:e=>e.path,getTimestamps:e=>e.timestamps,getColor:e=>p[e.vendor],opacity:1,widthMinPixels:2,trailLength:180,currentTime:o,shadowEnabled:!1},r=new a({}),t=()=>{o=(o+1)%d;const e=new l({...n,currentTime:o});r.setProps({layers:[e]}),window.requestAnimationFrame(t)};window.requestAnimationFrame(t),r.setMap(i)}window.initMap=u;
