(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{213:function(t,e,r){"use strict";r.r(e);var n=r(7),o=r(5),a=r(23),i=r(8),c=r(0),l=r.n(c),u=r(1),s=r(24),f=r(19),h=r(9),p=r(40),d=r(41),v=r(54);function m(){m=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(P){l=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),c=new k(o||[]);return n(i,"_invoke",{value:x(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=u;var f={};function h(){}function p(){}function d(){}var v={};l(v,a,function(){return this});var y=Object.getPrototypeOf,g=y&&y(y(_([])));g&&g!==e&&r.call(g,a)&&(v=g);var w=d.prototype=h.prototype=Object.create(v);function b(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,c){var l=s(t[o],t,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){u.value=t,i(u)},function(t){return n("throw",t,i,c)})}c(l.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function x(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=O(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function O(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return p.prototype=d,n(w,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=l(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(E.prototype),l(E.prototype,i,function(){return this}),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(w),l(w,c,"Generator"),l(w,a,function(){return this}),l(w,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}e.default=function(){var t=Object(f.b)(),e=Object(u.n)(),r=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,y=Object(f.c)(function(t){return t.user}),g=y.error,w=y.loading,b=y.success,E=y.userdetails,x=Object(c.useState)({email:"",password:""}),O=Object(i.a)(x,2),j=O[0],L=O[1],k=Object(c.useState)({email:"",mobile:""}),_=Object(i.a)(k,2),N=_[0],P=_[1],S=Object(c.useState)(null),F=Object(i.a)(S,2),G=F[0],A=F[1],z=function(t){if("mobile"===t.target.id&&isNaN(t.target.value))return t.preventDefault(),!1;L(Object(a.a)({},j,Object(o.a)({},t.target.id,t.target.value)))},I=E?E.token:null;Object(c.useEffect)(function(){I&&e("/")},[I]);var T=function(){var e=Object(n.a)(m().mark(function e(){return m().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Object(d.e)(j));case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{isFooter:"hideFooter"},l.a.createElement(h.h,null,l.a.createElement(h.t,Object.assign({isOpen:!0,style:{pointerEvents:"none"}},{backdrop:!1,centered:!0,size:"sm",fade:!1}),l.a.createElement(h.v,null,"Login"),l.a.createElement(h.u,null,l.a.createElement(h.l,null,l.a.createElement(h.n,null,l.a.createElement(h.o,{type:"text",id:"email",placeholder:"Enter User Id",valid:G&&"valid"===G,invalid:"invalid"===G,value:j.email,onChange:function(t){return z(t)},onBlur:function(t){""===j.email?(P(Object(a.a)({},N,{email:""})),A(null)):""!==j.email&&!1===r.test(j.email)?(P(Object(a.a)({},N,{email:"Email is not valid"})),A("invalid")):(P(Object(a.a)({},N,{email:""})),A("valid"))}}),l.a.createElement(h.m,{valid:G&&"valid"===G,invalid:"invalid"===G?"invalid":""},N.email)),l.a.createElement(h.n,null,l.a.createElement(h.o,{type:"password",id:"password",placeholder:"Enter Password",onChange:function(t){return z(t)}}),l.a.createElement(h.m,null,"Incorrect Password"))),l.a.createElement("div",{className:"d-grid py-2"},l.a.createElement(h.e,{className:"primary-button",disabled:""===j.email||""===j.password||!1===r.test(j.email),onClick:T},"Login"),l.a.createElement(s.b,{to:"/security",className:"small text-decoration-none text-center primary-link p-3"},"Forgot Password?"),l.a.createElement(s.b,{to:"/signup",className:"small text-decoration-none text-center primary-link"},"Create Account"," "))),w&&l.a.createElement("span",{className:"position-absolute top-50 start-50 translate-middle"},l.a.createElement(h.D,{size:"sm",color:"primary"},"Loading...")))),g&&l.a.createElement(v.a,{message:g}),b&&l.a.createElement(v.b,{message:b})))}}}]);
//# sourceMappingURL=8.fbba9a6f.chunk.js.map