import{_ as p,s as m,p as t,a as r,l as u,b as f,D as d,g as s}from"./index.34f81475.js";import"./vue.17dc9343.js";import{ba as c}from"./@vue.f39bd477.js";/* empty css                    */import"./nanoevents.1080beb7.js";import"./lz-string.dccec454.js";import"./vue-next-select.3f210d97.js";import"./vuedraggable.3138c559.js";import"./amator.662264f3.js";import"./bezier-easing.a990b400.js";import"./sortablejs.d2aaca1a.js";import"./vue-textarea-autosize.35804eaf.js";import"./vue-panzoom.db51701d.js";import"./panzoom.f5ccc6c8.js";import"./wheel.c9cad283.js";import"./ngraph.events.083734c6.js";import"./vue-toastification.277609fd.js";let a=null,n=null;function o(){const i=Date.now();let e=(i-t.time)/1e3;t.time=i;const l=e;r.lastTenTicks.push(l),r.lastTenTicks.length>10&&(r.lastTenTicks=r.lastTenTicks.slice(1)),!((n==null?void 0:n.value)&&!t.keepGoing)&&(r.hasNaN||(e=Math.max(e,0),t.devSpeed!==0&&(u.value=!1,e=Math.min(e,f.maxTickLength),t.devSpeed!=null&&(e*=t.devSpeed),Number.isFinite(e)||(e=1e308),!d.eq(e,0)&&(t.timePlayed+=e,Number.isFinite(t.timePlayed)||(t.timePlayed=1e308),s.emit("update",e,l),m.unthrottled?(requestAnimationFrame(o),a!=null&&(clearInterval(a),a=null)):a==null&&(a=setInterval(o,50))))))}async function A(){n=(await p(()=>import("./index.34f81475.js").then(function(i){return i.c}),["assets/index.34f81475.js","assets/index.20cb04d5.css","assets/@fontsource.f583a260.css","assets/vue.17dc9343.js","assets/amator.662264f3.js","assets/bezier-easing.a990b400.js","assets/@vue.f39bd477.js","assets/nanoevents.1080beb7.js","assets/lz-string.dccec454.js","assets/vue-next-select.3f210d97.js","assets/vue-next-select.9e6f4164.css","assets/vuedraggable.3138c559.js","assets/sortablejs.d2aaca1a.js","assets/vue-textarea-autosize.35804eaf.js","assets/vue-panzoom.db51701d.js","assets/panzoom.f5ccc6c8.js","assets/wheel.c9cad283.js","assets/ngraph.events.083734c6.js","assets/vue-toastification.277609fd.js","assets/vue-toastification.4b5f8ac8.css"])).hasWon,c(n,i=>{i&&s.emit("gameWon")}),m.unthrottled?requestAnimationFrame(o):a=setInterval(o,50)}export{A as startGameLoop};