var SvelteCalendar=function(){"use strict";function e(e,t){var n=arguments;if(null==e)throw new TypeError("Cannot convert first argument to object");for(var r=Object(e),o=1;o<arguments.length;o++){var i=n[o];if(null!=i)for(var a=Object.keys(Object(i)),c=0,d=a.length;c<d;c++){var l=a[c],s=Object.getOwnPropertyDescriptor(i,l);void 0!==s&&s.enumerable&&(r[l]=i[l])}}return r}var t=function(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:e})};function n(){}var r=function(e){return e};function o(e,t){for(var n in t)e[n]=t[n];return e}function i(e){return e()}function a(){return Object.create(null)}function c(e){e.forEach(i)}function d(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function s(e,t,n){if(e){var r=u(e,t,n);return e[0](r)}}function u(e,t,n){return e[1]?o({},o(t.$$scope.ctx,e[1](n?n(t):{}))):t.$$scope.ctx}function h(e,t,n,r){return e[1]?o({},o(t.$$scope.changed||{},e[1](r?r(n):{}))):t.$$scope.changed||{}}var f,v="undefined"!=typeof window?function(){return window.performance.now()}:function(){return Date.now()},g=function(e){return requestAnimationFrame(e)},p=new Set,m=!1;function b(){p.forEach(function(e){e[0](v())||(p.delete(e),e[1]())}),(m=p.size>0)&&g(b)}function y(e){var t;return m||(m=!0,g(b)),{promise:new Promise(function(n){p.add(t=[e,n])}),abort:function(){p.delete(t)}}}function $(e,t){e.appendChild(t)}function k(e,t,n){e.insertBefore(t,n||null)}function M(e){e.parentNode.removeChild(e)}function D(e,t){for(var n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function S(e){return document.createTextNode(e)}function w(){return S(" ")}function O(e,t,n,r){return e.addEventListener(t,n,r),function(){return e.removeEventListener(t,n,r)}}function x(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function C(e,t){t=""+t,e.data!==t&&(e.data=t)}function j(e,t,n){e.style.setProperty(t,n)}function I(e,t,n){e.classList[n?"add":"remove"](t)}function E(e,t){var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}var F,Y=0,T={};function H(e,t,n,r,o,i,a,c){void 0===c&&(c=0);for(var d=16.666/r,l="{\n",s=0;s<=1;s+=d){var u=t+(n-t)*i(s);l+=100*s+"%{"+a(u,1-u)+"}\n"}var h=l+"100% {"+a(n,1-n)+"}\n}",v="__svelte_"+function(e){for(var t=5381,n=e.length;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(h)+"_"+c;if(!T[v]){if(!f){var g=_("style");document.head.appendChild(g),f=g.sheet}T[v]=!0,f.insertRule("@keyframes "+v+" "+h,f.cssRules.length)}var p=e.style.animation||"";return e.style.animation=(p?p+", ":"")+v+" "+r+"ms linear "+o+"ms 1 both",Y+=1,v}function A(e,t){e.style.animation=(e.style.animation||"").split(", ").filter(t?function(e){return e.indexOf(t)<0}:function(e){return-1===e.indexOf("__svelte")}).join(", "),t&&!--Y&&g(function(){if(!Y){for(var e=f.cssRules.length;e--;)f.deleteRule(e);T={}}})}function q(e){F=e}function L(e){(function(){if(!F)throw new Error("Function called outside component initialization");return F})().$$.on_mount.push(e)}function W(){var e=F;return function(t,n){var r=e.$$.callbacks[t];if(r){var o=E(t,n);r.slice().forEach(function(t){t.call(e,o)})}}}var J,P=[],N=[],z=[],R=[],B=Promise.resolve(),G=!1;function X(e){z.push(e)}function K(e){R.push(e)}function Q(){var e=new Set;do{for(;P.length;){var t=P.shift();q(t),U(t.$$)}for(;N.length;)N.pop()();for(var n=0;n<z.length;n+=1){var r=z[n];e.has(r)||(r(),e.add(r))}z.length=0}while(P.length);for(;R.length;)R.pop()();G=!1}function U(e){e.fragment&&(e.update(e.dirty),c(e.before_update),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_update.forEach(X))}function V(){return J||(J=Promise.resolve()).then(function(){J=null}),J}function Z(e,t,n){e.dispatchEvent(E((t?"intro":"outro")+n))}var ee,te=new Set;function ne(e,t){e&&e.i&&(te.delete(e),e.i(t))}function re(e,t,n,r){if(e&&e.o){if(te.has(e))return;te.add(e),ee.c.push(function(){te.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}var oe="undefined"!=typeof window?window:global;function ie(e,t){re(e,1,1,function(){t.delete(e.key)})}function ae(e,t,n){-1!==e.$$.props.indexOf(t)&&(e.$$.bound[t]=n,n(e.$$.ctx[t]))}function ce(e,t,n){var r=e.$$,o=r.fragment,a=r.on_mount,l=r.on_destroy,s=r.after_update;o.m(t,n),X(function(){var t=a.map(i).filter(d);l?l.push.apply(l,t):c(t),e.$$.on_mount=[]}),s.forEach(X)}function de(e,t){e.$$.fragment&&(c(e.$$.on_destroy),e.$$.fragment.d(t),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={})}function le(e,t){e.$$.dirty||(P.push(e),G||(G=!0,B.then(Q)),e.$$.dirty=a()),e.$$.dirty[t]=!0}function se(e,t,r,o,i,d){var l=F;q(e);var s=t.props||{},u=e.$$={fragment:null,ctx:null,props:d,update:n,not_equal:i,bound:a(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:a(),dirty:null},h=!1;u.ctx=r?r(e,s,function(t,n){u.ctx&&i(u.ctx[t],u.ctx[t]=n)&&(u.bound[t]&&u.bound[t](n),h&&le(e,t))}):s,u.update(),h=!0,c(u.before_update),u.fragment=o(u.ctx),t.target&&(t.hydrate?u.fragment.l(function(e){return Array.from(e.childNodes)}(t.target)):u.fragment.c(),t.intro&&ne(e.$$.fragment),ce(e,t.target,t.anchor),Q()),q(l)}var ue=function(){};ue.prototype.$destroy=function(){de(this,1),this.$destroy=n},ue.prototype.$on=function(e,t){var n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),function(){var e=n.indexOf(t);-1!==e&&n.splice(e,1)}},ue.prototype.$set=function(){};var he=function(e,t,n){var r=new Date(t,e,1);r.setDate(r.getDate()-r.getDay());for(var o=11==e?0:e+1,i=[];r.getMonth()!=o||0!=r.getDay()||6!=i.length;)0==r.getDay()&&i.unshift({days:[],id:""+t+e+t+i.length}),i[0].days.push(Object.assign({},{partOfMonth:r.getMonth()==e,date:new Date(r)},n(r))),r.setDate(r.getDate()+1);return i.reverse(),{month:e,year:t,weeks:i}},fe=function(e,t,n){var r=new Date;return r.setHours(0,0,0,0),function(o){return{selectable:o>=e&&o<=t&&(!n||n(o)),isToday:o.getTime()==r.getTime()}}};var ve=function(e,t){return e.getDate()==t.getDate()&&e.getMonth()==t.getMonth()&&e.getFullYear()==t.getFullYear()};function ge(e){var t=e-1;return t*t*t+1}function pe(e,t){var n=t.delay;void 0===n&&(n=0);var r=t.duration;void 0===r&&(r=400);var o=+getComputedStyle(e).opacity;return{delay:n,duration:r,css:function(e){return"opacity: "+e*o}}}function me(e,t){var n=t.delay;void 0===n&&(n=0);var r=t.duration;void 0===r&&(r=400);var o=t.easing;void 0===o&&(o=ge);var i=t.x;void 0===i&&(i=0);var a=t.y;void 0===a&&(a=0);var c=t.opacity;void 0===c&&(c=0);var d=getComputedStyle(e),l=+d.opacity,s="none"===d.transform?"":d.transform,u=l*(1-c);return{delay:n,duration:r,easing:o,css:function(e,t){return"\n\t\t\ttransform: "+s+" translate("+(1-e)*i+"px, "+(1-e)*a+"px);\n\t\t\topacity: "+(l-u*t)}}}function be(e,t,n){var r=Object.create(e);return r.day=t[n],r}function ye(e){var t,n,r,o,i,a=e.day.date.getDate();function c(){return e.click_handler(e)}return{c:function(){t=_("div"),n=_("button"),r=S(a),o=w(),x(n,"class","day--label svelte-7mtl66"),I(n,"selected",ve(e.day.date,e.selected)),I(n,"highlighted",ve(e.day.date,e.highlighted)),I(n,"shake-date",e.shouldShakeDate&&ve(e.day.date,e.shouldShakeDate)),I(n,"disabled",!e.day.selectable),x(t,"class","day svelte-7mtl66"),I(t,"outside-month",!e.day.partOfMonth),I(t,"is-today",e.day.isToday),I(t,"is-disabled",!e.day.selectable),i=O(n,"click",c)},m:function(e,i){k(e,t,i),$(t,n),$(n,r),$(t,o)},p:function(o,i){e=i,o.days&&a!==(a=e.day.date.getDate())&&C(r,a),(o.areDatesEquivalent||o.days||o.selected)&&I(n,"selected",ve(e.day.date,e.selected)),(o.areDatesEquivalent||o.days||o.highlighted)&&I(n,"highlighted",ve(e.day.date,e.highlighted)),(o.shouldShakeDate||o.areDatesEquivalent||o.days)&&I(n,"shake-date",e.shouldShakeDate&&ve(e.day.date,e.shouldShakeDate)),o.days&&(I(n,"disabled",!e.day.selectable),I(t,"outside-month",!e.day.partOfMonth),I(t,"is-today",e.day.isToday),I(t,"is-disabled",!e.day.selectable))},d:function(e){e&&M(t),i()}}}function $e(e){for(var t,o,i,a,l=e.days,s=[],u=0;u<l.length;u+=1)s[u]=ye(be(e,l,u));return{c:function(){t=_("div");for(var e=0;e<s.length;e+=1)s[e].c();x(t,"class","week svelte-7mtl66")},m:function(e,n){k(e,t,n);for(var r=0;r<s.length;r+=1)s[r].m(t,null);a=!0},p:function(e,n){if(e.days||e.areDatesEquivalent||e.selected||e.highlighted||e.shouldShakeDate){l=n.days;for(var r=0;r<l.length;r+=1){var o=be(n,l,r);s[r]?s[r].p(e,o):(s[r]=ye(o),s[r].c(),s[r].m(t,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=l.length}},i:function(c){a||(X(function(){i&&i.end(1),o||(o=function(e,t,o){var i,a,c=t(e,o),l=!1,s=0;function u(){i&&A(e,i)}function h(){var t=c.delay;void 0===t&&(t=0);var o=c.duration;void 0===o&&(o=300);var d=c.easing;void 0===d&&(d=r);var h=c.tick;void 0===h&&(h=n);var f=c.css;f&&(i=H(e,0,1,o,t,d,f,s++)),h(0,1);var g=v()+t,p=g+o;a&&a.abort(),l=!0,X(function(){return Z(e,!0,"start")}),a=y(function(t){if(l){if(t>=p)return h(1,0),Z(e,!0,"end"),u(),l=!1;if(t>=g){var n=d((t-g)/o);h(n,1-n)}}return l})}var f=!1;return{start:function(){f||(A(e),d(c)?(c=c(),V().then(h)):h())},invalidate:function(){f=!1},end:function(){l&&(u(),l=!1)}}}(t,me,{x:50*e.direction,duration:180,delay:90})),o.start()}),a=!0)},o:function(e){o&&o.invalidate(),i=function(e,t,o){var i,a=t(e,o),l=!0,s=ee;function u(){var t=a.delay;void 0===t&&(t=0);var o=a.duration;void 0===o&&(o=300);var d=a.easing;void 0===d&&(d=r);var u=a.tick;void 0===u&&(u=n);var h=a.css;h&&(i=H(e,1,0,o,t,d,h));var f=v()+t,g=f+o;X(function(){return Z(e,!1,"start")}),y(function(t){if(l){if(t>=g)return u(0,1),Z(e,!1,"end"),--s.r||c(s.c),!1;if(t>=f){var n=d((t-f)/o);u(1-n,n)}}return l})}return s.r+=1,d(a)?V().then(function(){a=a(),u()}):u(),{end:function(t){t&&a.tick&&a.tick(1,0),l&&(i&&A(e,i),l=!1)}}}(t,pe,{duration:180}),a=!1},d:function(e){e&&M(t),D(s,e),e&&i&&i.end()}}}function ke(e,t,n){var r=W(),o=t.days,i=t.selected,a=t.start,c=t.end,d=t.highlighted,l=t.shouldShakeDate,s=t.direction;return e.$set=function(e){"days"in e&&n("days",o=e.days),"selected"in e&&n("selected",i=e.selected),"start"in e&&n("start",a=e.start),"end"in e&&n("end",c=e.end),"highlighted"in e&&n("highlighted",d=e.highlighted),"shouldShakeDate"in e&&n("shouldShakeDate",l=e.shouldShakeDate),"direction"in e&&n("direction",s=e.direction)},{dispatch:r,days:o,selected:i,start:a,end:c,highlighted:d,shouldShakeDate:l,direction:s,click_handler:function(e){var t=e.day;return r("dateSelected",t.date)}}}var Me=function(e){function t(t){e.call(this),se(this,t,ke,$e,l,["days","selected","start","end","highlighted","shouldShakeDate","direction"])}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(ue),De=[{name:"January",abbrev:"Jan"},{name:"February",abbrev:"Feb"},{name:"March",abbrev:"Mar"},{name:"April",abbrev:"Apr"},{name:"May",abbrev:"May"},{name:"June",abbrev:"Jun"},{name:"July",abbrev:"Jul"},{name:"August",abbrev:"Aug"},{name:"September",abbrev:"Sep"},{name:"October",abbrev:"Oct"},{name:"November",abbrev:"Nov"},{name:"December",abbrev:"Dec"}],_e=[{name:"Sunday",abbrev:"Sun"},{name:"Monday",abbrev:"Mon"},{name:"Tuesday",abbrev:"Tue"},{name:"Wednesday",abbrev:"Wed"},{name:"Thursday",abbrev:"Thu"},{name:"Friday",abbrev:"Fri"},{name:"Saturday",abbrev:"Sat"}];function Se(e,t,n){var r=Object.create(e);return r.week=t[n],r}function we(e,t){var n,r,o=new Me({props:{days:t.week.days,selected:t.selected,start:t.start,end:t.end,highlighted:t.highlighted,shouldShakeDate:t.shouldShakeDate,direction:t.direction}});return o.$on("dateSelected",t.dateSelected_handler),{key:e,first:null,c:function(){n=S(""),o.$$.fragment.c(),this.first=n},m:function(e,t){k(e,n,t),ce(o,e,t),r=!0},p:function(e,t){var n={};e.visibleMonth&&(n.days=t.week.days),e.selected&&(n.selected=t.selected),e.start&&(n.start=t.start),e.end&&(n.end=t.end),e.highlighted&&(n.highlighted=t.highlighted),e.shouldShakeDate&&(n.shouldShakeDate=t.shouldShakeDate),e.direction&&(n.direction=t.direction),o.$set(n)},i:function(e){r||(ne(o.$$.fragment,e),r=!0)},o:function(e){re(o.$$.fragment,e),r=!1},d:function(e){e&&M(n),de(o,e)}}}function Oe(e){for(var t,n,r=[],o=new Map,i=e.visibleMonth.weeks,a=function(e){return e.week.id},d=0;d<i.length;d+=1){var l=Se(e,i,d),s=a(l);o.set(s,r[d]=we(s,l))}return{c:function(){for(t=_("div"),d=0;d<r.length;d+=1)r[d].c();x(t,"class","month-container svelte-ny3kda")},m:function(e,o){for(k(e,t,o),d=0;d<r.length;d+=1)r[d].m(t,null);n=!0},p:function(e,n){var i=n.visibleMonth.weeks;ee={r:0,c:[],p:ee},r=function(e,t,n,r,o,i,a,c,d,l,s,u){for(var h=e.length,f=i.length,v=h,g={};v--;)g[e[v].key]=v;var p=[],m=new Map,b=new Map;for(v=f;v--;){var y=u(o,i,v),$=n(y),k=a.get($);k?r&&k.p(t,y):(k=l($,y)).c(),m.set($,p[v]=k),$ in g&&b.set($,Math.abs(v-g[$]))}var M=new Set,D=new Set;function _(e){ne(e,1),e.m(c,s),a.set(e.key,e),s=e.first,f--}for(;h&&f;){var S=p[f-1],w=e[h-1],O=S.key,x=w.key;S===w?(s=S.first,h--,f--):m.has(x)?!a.has(O)||M.has(O)?_(S):D.has(x)?h--:b.get(O)>b.get(x)?(D.add(O),_(S)):(M.add(x),h--):(d(w,a),h--)}for(;h--;){var C=e[h];m.has(C.key)||d(C,a)}for(;f;)_(p[f-1]);return p}(r,e,a,1,n,i,o,t,ie,we,null,Se),ee.r||c(ee.c),ee=ee.p},i:function(e){if(!n){for(var t=0;t<i.length;t+=1)ne(r[t]);n=!0}},o:function(e){for(d=0;d<r.length;d+=1)re(r[d]);n=!1},d:function(e){for(e&&M(t),d=0;d<r.length;d+=1)r[d].d()}}}function xe(e,t,n){var r,o=t.id,i=t.visibleMonth,a=t.selected,c=t.start,d=t.end,l=t.highlighted,s=t.shouldShakeDate,u=o;return e.$set=function(e){"id"in e&&n("id",o=e.id),"visibleMonth"in e&&n("visibleMonth",i=e.visibleMonth),"selected"in e&&n("selected",a=e.selected),"start"in e&&n("start",c=e.start),"end"in e&&n("end",d=e.end),"highlighted"in e&&n("highlighted",l=e.highlighted),"shouldShakeDate"in e&&n("shouldShakeDate",s=e.shouldShakeDate)},e.$$.update=function(e){void 0===e&&(e={lastId:1,id:1}),(e.lastId||e.id)&&(n("direction",r=u<o?1:-1),n("lastId",u=o))},{id:o,visibleMonth:i,selected:a,start:c,end:d,highlighted:l,shouldShakeDate:s,direction:r,dateSelected_handler:function(t){!function(e,t){var n=e.$$.callbacks[t.type];n&&n.slice().forEach(function(e){return e(t)})}(e,t)}}}var Ce=function(e){function t(t){e.call(this),se(this,t,xe,Oe,l,["id","visibleMonth","selected","start","end","highlighted","shouldShakeDate"])}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(ue);function je(e,t,n){var r=Object.create(e);return r.monthDefinition=t[n],r.index=n,r}function Ie(e){var t,n,r,o,i,a=e.monthDefinition.abbrev;function c(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return e.click_handler_2.apply(e,[e].concat(t))}return{c:function(){t=_("div"),n=_("span"),r=S(a),o=w(),x(n,"class","svelte-gfrd1b"),x(t,"class","month-selector--month svelte-gfrd1b"),I(t,"selected",e.index==e.month),I(t,"selectable",e.monthDefinition.selectable),i=O(t,"click",c)},m:function(e,i){k(e,t,i),$(t,n),$(n,r),$(t,o)},p:function(n,o){e=o,n.availableMonths&&a!==(a=e.monthDefinition.abbrev)&&C(r,a),n.month&&I(t,"selected",e.index==e.month),n.availableMonths&&I(t,"selectable",e.monthDefinition.selectable)},d:function(e){e&&M(t),i()}}}function Ee(e){for(var t,r,o,i,a,d,l,s,u,h,f,v,g,p=De[e.month].name,m=e.availableMonths,b=[],y=0;y<m.length;y+=1)b[y]=Ie(je(e,m,y));return{c:function(){t=_("div"),r=_("div"),(o=_("div")).innerHTML='<i class="arrow left svelte-gfrd1b"></i>',i=w(),a=_("div"),d=S(p),l=w(),s=S(e.year),u=w(),(h=_("div")).innerHTML='<i class="arrow right svelte-gfrd1b"></i>',f=w(),v=_("div");for(var n=0;n<b.length;n+=1)b[n].c();x(o,"class","control svelte-gfrd1b"),I(o,"enabled",e.canDecrementMonth),x(a,"class","label svelte-gfrd1b"),x(h,"class","control svelte-gfrd1b"),I(h,"enabled",e.canIncrementMonth),x(r,"class","heading-section svelte-gfrd1b"),x(v,"class","month-selector svelte-gfrd1b"),I(v,"open",e.monthSelectorOpen),x(t,"class","title"),g=[O(o,"click",e.click_handler),O(a,"click",e.toggleMonthSelectorOpen),O(h,"click",e.click_handler_1)]},m:function(e,n){k(e,t,n),$(t,r),$(r,o),$(r,i),$(r,a),$(a,d),$(a,l),$(a,s),$(r,u),$(r,h),$(t,f),$(t,v);for(var c=0;c<b.length;c+=1)b[c].m(v,null)},p:function(e,t){if(e.canDecrementMonth&&I(o,"enabled",t.canDecrementMonth),e.month&&p!==(p=De[t.month].name)&&C(d,p),e.year&&C(s,t.year),e.canIncrementMonth&&I(h,"enabled",t.canIncrementMonth),e.month||e.availableMonths){m=t.availableMonths;for(var n=0;n<m.length;n+=1){var r=je(t,m,n);b[n]?b[n].p(e,r):(b[n]=Ie(r),b[n].c(),b[n].m(v,null))}for(;n<b.length;n+=1)b[n].d(1);b.length=m.length}e.monthSelectorOpen&&I(v,"open",t.monthSelectorOpen)},i:n,o:n,d:function(e){e&&M(t),D(b,e),c(g)}}}function Fe(e,t,n){var r,o=W(),i=t.month,a=t.start,c=t.end,d=t.year,l=t.canIncrementMonth,s=t.canDecrementMonth,u=!1;function h(){n("monthSelectorOpen",u=!u)}function f(e,t){e.stopPropagation(),o("monthSelected",t),h()}return e.$set=function(e){"month"in e&&n("month",i=e.month),"start"in e&&n("start",a=e.start),"end"in e&&n("end",c=e.end),"year"in e&&n("year",d=e.year),"canIncrementMonth"in e&&n("canIncrementMonth",l=e.canIncrementMonth),"canDecrementMonth"in e&&n("canDecrementMonth",s=e.canDecrementMonth)},e.$$.update=function(e){if(void 0===e&&(e={start:1,year:1,end:1}),e.start||e.year||e.end){var t=a.getFullYear()==d,o=c.getFullYear()==d;n("availableMonths",r=De.map(function(e,n){return Object.assign({},e,{selectable:!t&&!o||(!t||n>=a.getMonth())&&(!o||n<=c.getMonth())})}))}},{dispatch:o,month:i,start:a,end:c,year:d,canIncrementMonth:l,canDecrementMonth:s,monthSelectorOpen:u,availableMonths:r,toggleMonthSelectorOpen:h,monthSelected:f,click_handler:function(){return o("incrementMonth",-1)},click_handler_1:function(){return o("incrementMonth",1)},click_handler_2:function(e,t){return f(t,e.index)}}}var Ye=function(e){function t(t){e.call(this),se(this,t,Fe,Ee,l,["month","start","end","year","canIncrementMonth","canDecrementMonth"])}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(ue),Te=oe.window,He=function(){return{}},Ae=function(){return{}},qe=function(){return{}},Le=function(){return{}};function We(e){var t,n,r,o,i,a,d,l;X(e.onwindowresize);var f=e.$$slots.trigger,v=s(f,e,Le),g=e.$$slots.contents,p=s(g,e,Ae);return{c:function(){t=_("div"),n=_("div"),v&&v.c(),r=w(),o=_("div"),i=_("div"),a=_("div"),p&&p.c(),x(n,"class","trigger"),x(a,"class","contents-inner svelte-kce3l1"),x(i,"class","contents svelte-kce3l1"),x(o,"class","contents-wrapper svelte-kce3l1"),j(o,"transform","translate(-50%,-50%) translate("+Pe+"px, "+Je+"px)"),I(o,"visible",e.open),I(o,"shrink",e.shrink),x(t,"class","popover svelte-kce3l1"),l=[O(Te,"resize",e.onwindowresize),O(n,"click",e.doOpen)]},l:function(e){v&&v.l(div0_nodes),p&&p.l(div1_nodes)},m:function(c,l){k(c,t,l),$(t,n),v&&v.m(n,null),e.div0_binding(n),$(t,r),$(t,o),$(o,i),$(i,a),p&&p.m(a,null),e.div2_binding(i),e.div3_binding(o),e.div4_binding(t),d=!0},p:function(e,t){v&&v.p&&e.$$scope&&v.p(h(f,t,e,qe),u(f,t,Le)),p&&p.p&&e.$$scope&&p.p(h(g,t,e,He),u(g,t,Ae)),(!d||e.translateX||e.translateY)&&j(o,"transform","translate(-50%,-50%) translate("+Pe+"px, "+Je+"px)"),e.open&&I(o,"visible",t.open),e.shrink&&I(o,"shrink",t.shrink)},i:function(e){d||(ne(v,e),ne(p,e),d=!0)},o:function(e){re(v,e),re(p,e),d=!1},d:function(n){n&&M(t),v&&v.d(n),e.div0_binding(null),p&&p.d(n),e.div2_binding(null),e.div3_binding(null),e.div4_binding(null),c(l)}}}var Je=0,Pe=0;function Ne(e,t,n){var r=this,o=W(),i=t.open;void 0===i&&(i=!1);var a,c,d,l,s,u=t.shrink,h=t.trigger;function f(e){if(i){var t=e.target;do{if(t==a)return}while(t=t.parentNode);p()}}var v=function(e,t,n){e.addEventListener(t,function r(){n.apply(this,arguments),e.removeEventListener(t,r)})};function g(){i||n("open",i=!0);s.offsetWidth,s.offsetHeight;var e=s.getBoundingClientRect();return{top:e.top+-1*Je,bottom:window.innerHeight-e.bottom+Je,left:e.left+-1*Pe,right:document.body.clientWidth-e.right+Pe}}function p(){n("shrink",u=!0),v(l,"animationend",function(){n("shrink",u=!1),n("open",i=!1),o("closed")})}L(function(){if(document.addEventListener("click",f.bind(r)),h)return d.appendChild(h.parentNode.removeChild(h)),function(){document.removeEventListener("click",f)}});var m=t.$$slots;void 0===m&&(m={});var b=t.$$scope;return e.$set=function(e){"open"in e&&n("open",i=e.open),"shrink"in e&&n("shrink",u=e.shrink),"trigger"in e&&n("trigger",h=e.trigger),"$$scope"in e&&n("$$scope",b=e.$$scope)},{open:i,shrink:u,trigger:h,popover:a,w:c,triggerContainer:d,contentsAnimated:l,contentsWrapper:s,doOpen:function(){e=g(),c<480?e.bottom:e.top<0?Math.abs(e.top):e.bottom<0&&e.bottom,e.left<0?Math.abs(e.left):e.right<0&&e.right,n("open",i=!0),o("opened");var e},close:p,onwindowresize:function(){c=Te.innerWidth,n("w",c)},div0_binding:function(e){N[e?"unshift":"push"](function(){n("triggerContainer",d=e)})},div2_binding:function(e){N[e?"unshift":"push"](function(){n("contentsAnimated",l=e)})},div3_binding:function(e){N[e?"unshift":"push"](function(){n("contentsWrapper",s=e)})},div4_binding:function(e){N[e?"unshift":"push"](function(){n("popover",a=e)})},$$slots:m,$$scope:b}}var ze=function(e){function t(t){e.call(this),se(this,t,Ne,We,l,["open","shrink","trigger","close"])}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={close:{configurable:!0}};return n.close.get=function(){return this.$$.ctx.close},Object.defineProperties(t.prototype,n),t}(ue),Re=function(e,t,n){return e.replace(new RegExp("#{"+t+"}","g"),n)},Be=function(e,t,n){if(e=e.toString(),void 0===t)return e;if(e.length==t)return e;if(n=void 0!==n&&n,e.length<t)for(;t-e.length>0;)e="0"+e;else e.length>t&&(e=n?e.substring(e.length-t):e.substring(0,t));return e},Ge={daysOfWeek:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthsOfYear:["January","February","March","April","May","June","July","August","September","October","November","December"]},Xe=[{key:"d",method:function(e){return Be(e.getDate(),2)}},{key:"D",method:function(e){return Be(Ge.daysOfWeek[e.getDay()],3)}},{key:"j",method:function(e){return e.getDate()}},{key:"l",method:function(e){return Ge.daysOfWeek[e.getDay()]}},{key:"F",method:function(e){return Ge.monthsOfYear[e.getMonth()]}},{key:"m",method:function(e){return Be(e.getMonth()+1,2)}},{key:"M",method:function(e){return Be(Ge.monthsOfYear[e.getMonth()],3)}},{key:"n",method:function(e){return e.getMonth()+1}},{key:"Y",method:function(e){return e.getFullYear()}},{key:"y",method:function(e){return Be(e.getFullYear(),2,!0)}}],Ke=[{key:"a",method:function(e){return e.getHours()>11?"pm":"am"}},{key:"A",method:function(e){return e.getHours()>11?"PM":"AM"}},{key:"g",method:function(e){return e.getHours()%12||12}},{key:"G",method:function(e){return e.getHours()}},{key:"h",method:function(e){return Be(e.getHours()%12||12,2)}},{key:"H",method:function(e){return Be(e.getHours(),2)}},{key:"i",method:function(e){return Be(e.getMinutes(),2)}},{key:"s",method:function(e){return Be(e.getSeconds(),2)}}],Qe=function(e,t){return void 0===t&&(t="#{m}/#{d}/#{Y}"),Xe.forEach(function(n){-1!=t.indexOf("#{"+n.key+"}")&&(t=Re(t,n.key,n.method(e)))}),Ke.forEach(function(n){-1!=t.indexOf("#{"+n.key+"}")&&(t=Re(t,n.key,n.method(e)))}),t},Ue={left:37,up:38,right:39,down:40,pgup:33,pgdown:34,enter:13,escape:27,tab:9},Ve=Object.keys(Ue).map(function(e){return Ue[e]});function Ze(e,t,n){var r=Object.create(e);return r.day=t[n],r}function et(e){var t,n;return{c:function(){t=_("button"),n=S(e.formattedSelected),x(t,"class","calendar-button svelte-1qljrro")},m:function(e,r){k(e,t,r),$(t,n)},p:function(e,t){e.formattedSelected&&C(n,t.formattedSelected)},d:function(e){e&&M(t)}}}function tt(e){var t,n,r=e.$$slots.default,o=s(r,e,null),i=!e.trigger&&et(e);return{c:function(){t=_("div"),o||i&&i.c(),o&&o.c(),x(t,"slot","trigger"),x(t,"class","svelte-1qljrro")},l:function(e){o&&o.l(div_nodes)},m:function(e,r){k(e,t,r),o?o.m(t,null):i&&i.m(t,null),n=!0},p:function(e,n){o||(n.trigger?i&&(i.d(1),i=null):i?i.p(e,n):((i=et(n)).c(),i.m(t,null))),o&&o.p&&e.$$scope&&o.p(h(r,n,e,null),u(r,n,null))},i:function(e){n||(ne(o,e),n=!0)},o:function(e){re(o,e),n=!1},d:function(e){e&&M(t),o||i&&i.d(),o&&o.d(e)}}}function nt(e){var t,r,o=e.day.abbrev;return{c:function(){t=_("span"),r=S(o),x(t,"class","svelte-1qljrro")},m:function(e,n){k(e,t,n),$(t,r)},p:n,d:function(e){e&&M(t)}}}function rt(e){var t,n,r,o,i,a,c=new Ye({props:{month:e.month,year:e.year,start:e.start,end:e.end,canIncrementMonth:e.canIncrementMonth,canDecrementMonth:e.canDecrementMonth}});c.$on("monthSelected",e.monthSelected_handler),c.$on("incrementMonth",e.incrementMonth_handler);for(var d=_e,l=[],s=0;s<d.length;s+=1)l[s]=nt(Ze(e,d,s));var u=new Ce({props:{visibleMonth:e.visibleMonth,selected:e.selected,highlighted:e.highlighted,shouldShakeDate:e.shouldShakeDate,start:e.start,end:e.end,id:e.visibleMonthId}});return u.$on("dateSelected",e.dateSelected_handler),{c:function(){t=_("div"),n=_("div"),c.$$.fragment.c(),r=w(),o=_("div");for(var e=0;e<l.length;e+=1)l[e].c();i=w(),u.$$.fragment.c(),x(o,"class","legend svelte-1qljrro"),x(n,"class","calendar svelte-1qljrro"),x(t,"slot","contents"),x(t,"class","svelte-1qljrro")},m:function(e,d){k(e,t,d),$(t,n),ce(c,n,null),$(n,r),$(n,o);for(var s=0;s<l.length;s+=1)l[s].m(o,null);$(n,i),ce(u,n,null),a=!0},p:function(e,t){var n={};if(e.month&&(n.month=t.month),e.year&&(n.year=t.year),e.start&&(n.start=t.start),e.end&&(n.end=t.end),e.canIncrementMonth&&(n.canIncrementMonth=t.canIncrementMonth),e.canDecrementMonth&&(n.canDecrementMonth=t.canDecrementMonth),c.$set(n),e.dayDict){d=_e;for(var r=0;r<d.length;r+=1){var i=Ze(t,d,r);l[r]?l[r].p(e,i):(l[r]=nt(i),l[r].c(),l[r].m(o,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=d.length}var a={};e.visibleMonth&&(a.visibleMonth=t.visibleMonth),e.selected&&(a.selected=t.selected),e.highlighted&&(a.highlighted=t.highlighted),e.shouldShakeDate&&(a.shouldShakeDate=t.shouldShakeDate),e.start&&(a.start=t.start),e.end&&(a.end=t.end),e.visibleMonthId&&(a.id=t.visibleMonthId),u.$set(a)},i:function(e){a||(ne(c.$$.fragment,e),ne(u.$$.fragment,e),a=!0)},o:function(e){re(c.$$.fragment,e),re(u.$$.fragment,e),a=!1},d:function(e){e&&M(t),de(c),D(l,e),de(u)}}}function ot(e){var t;return{c:function(){t=w()},m:function(e,n){k(e,t,n)},p:n,i:n,o:n,d:function(e){e&&M(t)}}}function it(e){var t,n,r,o;function i(t){e.popover_1_open_binding.call(null,t),n=!0,K(function(){return n=!1})}function a(t){e.popover_1_shrink_binding.call(null,t),r=!0,K(function(){return r=!1})}var c={trigger:e.trigger,$$slots:{default:[ot],contents:[rt],trigger:[tt]},$$scope:{ctx:e}};void 0!==e.isOpen&&(c.open=e.isOpen),void 0!==e.isClosing&&(c.shrink=e.isClosing);var d=new ze({props:c});return e.popover_1_binding(d),N.push(function(){return ae(d,"open",i)}),N.push(function(){return ae(d,"shrink",a)}),d.$on("opened",e.registerOpen),d.$on("closed",e.registerClose),{c:function(){t=_("div"),d.$$.fragment.c(),x(t,"class","datepicker svelte-1qljrro"),I(t,"open",e.isOpen),I(t,"closing",e.isClosing)},m:function(e,n){k(e,t,n),ce(d,t,null),o=!0},p:function(e,o){var i={};e.trigger&&(i.trigger=o.trigger),(e.$$scope||e.visibleMonth||e.selected||e.highlighted||e.shouldShakeDate||e.start||e.end||e.visibleMonthId||e.month||e.year||e.canIncrementMonth||e.canDecrementMonth||e.trigger||e.formattedSelected)&&(i.$$scope={changed:e,ctx:o}),!n&&e.isOpen&&(i.open=o.isOpen),!r&&e.isClosing&&(i.shrink=o.isClosing),d.$set(i),e.isOpen&&I(t,"open",o.isOpen),e.isClosing&&I(t,"closing",o.isClosing)},i:function(e){o||(ne(d.$$.fragment,e),o=!0)},o:function(e){re(d.$$.fragment,e),o=!1},d:function(n){n&&M(t),e.popover_1_binding(null),de(d)}}}function at(e,t,n){var r,o=W(),i=new Date,a=t.format;void 0===a&&(a="#{m}/#{d}/#{Y}");var c=t.start;void 0===c&&(c=new Date(1987,9,29));var d=t.end;void 0===d&&(d=new Date(2020,9,29));var l=t.selected;void 0===l&&(l=i);var s,u=i,h=!1,f=t.dateChosen;void 0===f&&(f=!1);var v=i.getMonth(),g=i.getFullYear(),p=t.trigger;void 0===p&&(p=null);var m=t.selectableCallback;void 0===m&&(m=null);var b=!1,y=!1;i.setHours(0,0,0,0);var $=0,k=t.formattedSelected;function M(e){n("month",v=e)}function D(e,t){if((1!=e||H)&&(-1!=e||A)){var r=new Date(g,v,1);r.setMonth(r.getMonth()+e),n("month",v=r.getMonth()),n("year",g=r.getFullYear()),n("highlighted",u=new Date(g,v,t||1))}}function _(e){return n("highlighted",u=new Date(u)),u.setDate(u.getDate()+e),e>0&&u>Y?D(1,u.getDate()):e<0&&u<T?D(-1,u.getDate()):void 0}function S(e){if(-1!=Ve.indexOf(e.keyCode))switch(e.preventDefault(),e.keyCode){case Ue.left:_(-1);break;case Ue.up:_(-7);break;case Ue.right:_(1);break;case Ue.down:_(7);break;case Ue.pgup:D(-1);break;case Ue.pgdown:D(1);break;case Ue.escape:w();break;case Ue.enter:x(u)}}function w(){r.close(),C()}function O(e){var t=function(e,t){for(var n=0;n<e.weeks.length;++n)for(var r=0;r<e.weeks[n].days.length;++r)if(ve(e.weeks[n].days[r].date,t))return e.weeks[n].days[r];return null}(E,e);return!!t&&t.selectable}function x(e){if(!O(e))return t=e,clearTimeout(s),n("shouldShakeDate",h=t),void(s=setTimeout(function(){var e=h=!1;return n("shouldShakeDate",h),e},700));var t;w(),n("selected",l=e),n("dateChosen",f=!0),function(e,t){e&&function(e,t){e.innerHTML=t}(e,t)}(p,k),o("dateSelected",{date:e})}function C(){document.removeEventListener("keydown",S),o("close")}L(function(){n("month",v=l.getMonth()),n("year",g=l.getYear())});var j=t.$$slots;void 0===j&&(j={});var I,E,F,Y,T,H,A,q=t.$$scope;return e.$set=function(e){"format"in e&&n("format",a=e.format),"start"in e&&n("start",c=e.start),"end"in e&&n("end",d=e.end),"selected"in e&&n("selected",l=e.selected),"dateChosen"in e&&n("dateChosen",f=e.dateChosen),"trigger"in e&&n("trigger",p=e.trigger),"selectableCallback"in e&&n("selectableCallback",m=e.selectableCallback),"formattedSelected"in e&&n("formattedSelected",k=e.formattedSelected),"$$scope"in e&&n("$$scope",q=e.$$scope)},e.$$.update=function(e){if(void 0===e&&(e={start:1,end:1,selectableCallback:1,months:1,month:1,year:1,monthIndex:1,visibleMonth:1,selected:1,format:1}),(e.start||e.end||e.selectableCallback)&&n("months",I=function(e,t,n){void 0===n&&(n=null),e.setHours(0,0,0,0),t.setHours(0,0,0,0);for(var r=new Date(t.getFullYear(),t.getMonth()+1,1),o=[],i=new Date(e.getFullYear(),e.getMonth(),1),a=fe(e,t,n);i<r;)o.push(he(i.getMonth(),i.getFullYear(),a)),i.setMonth(i.getMonth()+1);return o}(c,d,m)),e.months||e.month||e.year){n("monthIndex",$=0);for(var t=0;t<I.length;++t)I[t].month==v&&I[t].year==g&&n("monthIndex",$=t)}(e.months||e.monthIndex)&&n("visibleMonth",E=I[$]),(e.year||e.month)&&n("visibleMonthId",F=g+v/100),e.visibleMonth&&(Y=E.weeks[E.weeks.length-1].days[6].date),e.visibleMonth&&(T=E.weeks[0].days[0].date),(e.monthIndex||e.months)&&n("canIncrementMonth",H=$<I.length-1),e.monthIndex&&n("canDecrementMonth",A=$>0),(e.selected||e.format)&&n("formattedSelected",k=Qe(l,a))},{popover:r,format:a,start:c,end:d,selected:l,highlighted:u,shouldShakeDate:h,dateChosen:f,month:v,year:g,trigger:p,selectableCallback:m,isOpen:b,isClosing:y,formattedSelected:k,changeMonth:M,incrementMonth:D,registerSelection:x,registerOpen:function(){n("highlighted",u=new Date(l)),n("month",v=l.getMonth()),n("year",g=l.getFullYear()),document.addEventListener("keydown",S),o("open")},registerClose:C,visibleMonth:E,visibleMonthId:F,canIncrementMonth:H,canDecrementMonth:A,monthSelected_handler:function(e){return M(e.detail)},incrementMonth_handler:function(e){return D(e.detail)},dateSelected_handler:function(e){return x(e.detail)},popover_1_binding:function(e){N[e?"unshift":"push"](function(){n("popover",r=e)})},popover_1_open_binding:function(e){n("isOpen",b=e)},popover_1_shrink_binding:function(e){n("isClosing",y=e)},$$slots:j,$$scope:q}}var ct=function(e){function t(t){e.call(this),se(this,t,at,it,l,["format","start","end","selected","dateChosen","trigger","selectableCallback","formattedSelected"])}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(ue);return t(),ct}();
//# sourceMappingURL=bundle.js.map
