(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();/**
 * @license
 * Copyright 2021 Google LLC.
 * SPDX-License-Identifier: Apache-2.0
 */const a=deck.ArcLayer,l=deck.GoogleMapsOverlay,c="https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson";function d(){const i=new google.maps.Map(document.getElementById("map"),{center:{lat:50,lng:14},tilt:30,mapId:"90f87356969d889c",zoom:3}),r=new a({id:"flights",data:c,dataTransform:o=>o.features.filter(e=>e.properties.scalerank<4),getSourcePosition:()=>[14.42076,50.08804],getTargetPosition:o=>o.geometry.coordinates,getSourceColor:[0,128,200],getTargetColor:[0,0,80],getWidth:1});new l({layers:[r]}).setMap(i)}window.initMap=d;
