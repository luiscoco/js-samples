(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */let l;const s={lat:41.85,lng:-87.65};function a(n){const e=document.createElement("button");return e.style.backgroundColor="#fff",e.style.border="2px solid #fff",e.style.borderRadius="3px",e.style.boxShadow="0 2px 6px rgba(0,0,0,.3)",e.style.color="rgb(25,25,25)",e.style.cursor="pointer",e.style.fontFamily="Roboto,Arial,sans-serif",e.style.fontSize="16px",e.style.lineHeight="38px",e.style.margin="8px 0 22px",e.style.padding="0 5px",e.style.textAlign="center",e.textContent="Center Map",e.title="Click to recenter the map",e.type="button",e.addEventListener("click",()=>{n.setCenter(s)}),e}function d(){l=new google.maps.Map(document.getElementById("map"),{zoom:12,center:s});const n=document.createElement("div"),e=a(l);n.appendChild(e),l.controls[google.maps.ControlPosition.TOP_CENTER].push(n)}window.initMap=d;
