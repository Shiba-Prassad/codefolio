(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{226:function(e,t,n){"use strict";n.r(t);var r=n(8),a=n(0),o=n.n(a),c=n(88),i=n(7),l=n(29),u=n(39),s=n(87),f=n(86),m=n(35),p=n(1),h=n(38);function d(){d=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(q){l=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var o=t&&t.prototype instanceof m?t:m,c=Object.create(o.prototype),i=new k(a||[]);return r(c,"_invoke",{value:x(e,n,i)}),c}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(q){return{type:"throw",arg:q}}}e.wrap=u;var f={};function m(){}function p(){}function h(){}var v={};l(v,o,function(){return this});var y=Object.getPrototypeOf,g=y&&y(y(L([])));g&&g!==t&&n.call(g,o)&&(v=g);var b=h.prototype=m.prototype=Object.create(v);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var a;r(this,"_invoke",{value:function(r,o){function c(){return new t(function(a,c){!function r(a,o,c,i){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then(function(e){r("next",e,c,i)},function(e){r("throw",e,c,i)}):t.resolve(f).then(function(e){u.value=e,c(u)},function(e){return r("throw",e,c,i)})}i(l.arg)}(r,o,a,c)})}return a=a?a.then(c,c):c()}})}function x(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return _()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=N(c,n);if(i){if(i===f)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function N(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var a=s(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=h,r(b,"constructor",{value:h,configurable:!0}),r(h,"constructor",{value:p,configurable:!0}),p.displayName=l(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,l(e,i,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},E(w.prototype),l(w.prototype,c,function(){return this}),e.AsyncIterator=w,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var c=new w(u(t,n,r,a),o);return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},E(b),l(b,i,"Generator"),l(b,o,function(){return this}),l(b,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=L,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return c.type="throw",c.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;j(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}var v=function(e){var t=Object(m.b)(),n=Object(p.n)(),c=Object(m.c)(function(e){return e.user}).userdetails,v=Object(a.useState)(),y=Object(r.a)(v,2),g=y[0],b=y[1],E=Object(a.useState)(null),w=Object(r.a)(E,2),x=w[0],N=w[1],O=Object(a.useState)(null),j=Object(r.a)(O,2),k=j[0],L=j[1],_=Object(a.useState)(!1),q=Object(r.a)(_,2),C=q[0],S=q[1],T=Object(a.useState)(""),F=Object(r.a)(T,2),G=F[0],I=F[1],B=function(){var e=Object(i.a)(d().mark(function e(){var n;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(h.f)(!0)),e.next=3,t(Object(u.a)({componentTitle:G,token:c.token}));case 3:(n=e.sent).payload.data.error&&(t(Object(h.e)(n.payload.data.error)),setTimeout(function(){t(Object(h.a)(n.payload.data.error))},2500)),n.payload.data.success&&(P(),t(Object(h.g)(n.payload.data.success)),setTimeout(function(){t(Object(h.b)(n.payload.data.success))},2500));case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(i.a)(d().mark(function e(){var n;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Object(u.f)({token:c.token}));case 2:n=e.sent,b(n.payload);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(i.a)(d().mark(function e(t){return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:N(x===t?"null":t);case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(i.a)(d().mark(function e(t){return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:L(k===t?"null":t);case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)(function(){P()},[e]),o.a.createElement(o.a.Fragment,null,o.a.createElement(l.r,{flush:!0,className:"f-size-15"},g&&g.map(function(t,r){return o.a.createElement(l.s,{key:t._id},o.a.createElement("h4",{className:"f-size-15 d-flex justify-content-between secondary-link ".concat(e.level1===t.componentUrl?"active":"")},o.a.createElement("span",{className:"flex-grow-1",onClick:function(){return e=t.componentUrl,r=t._id,n("/components/".concat(e,"/")),void N(r);var e,r}},t.componentTitle),t.componentlevel2s&&t.componentlevel2s[0]._id&&o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{icon:f.a,onClick:function(e){return D(t._id)},className:"mt-1"}))),t._id===x&&t.componentlevel2s&&t.componentlevel2s[0]._id&&o.a.createElement(l.r,{flush:!0,className:"f-size-15"},t.componentlevel2s.map(function(r,a){return o.a.createElement(l.s,{key:r._id},o.a.createElement("h4",{className:"f-size-15 d-flex justify-content-between secondary-link ".concat(e.level2===r.componentUrl?"active":"")},o.a.createElement("span",{onClick:function(){return e=t.componentUrl,a=r._id,o=r.componentUrl,n("/components/".concat(e,"/").concat(o)),void L(a);var e,a,o},className:"flex-grow-1"},r.componentTitle),r.componentlevel3s&&r.componentlevel3s.length>0&&o.a.createElement(s.a,{icon:f.a,onClick:function(e){return H(r._id)},className:"mt-1"})),r._id===k&&r.componentlevel3s&&r.componentlevel3s.length>0&&o.a.createElement(l.r,{flush:!0,className:"f-size-15"},r.componentlevel3s.map(function(a,c){return o.a.createElement(l.s,{key:a._id},o.a.createElement("h4",{className:"f-size-15 d-flex justify-content-between secondary-link ".concat(e.level3===a.componentUrl?"active":"")},o.a.createElement("span",{onClick:function(){return e=t.componentUrl,o=r.componentUrl,r._id,c=a.componentUrl,void n("/components/".concat(e,"/").concat(o,"/").concat(c));var e,o,c},className:"flex-grow-1"},a.componentTitle)))})))})))})),c.token&&o.a.createElement("div",{className:"p-3 text-center"},!1===C?o.a.createElement(l.e,{className:"primary-button btn-link",onClick:function(){return S(!0)}},"Add Component"):o.a.createElement(o.a.Fragment,null,o.a.createElement(l.C,null,o.a.createElement(l.f,null,o.a.createElement(l.o,{type:"text",id:"newComponentName",placeholder:"Enter Component Name",value:G,onChange:function(e){return I(e.target.value)}}))),o.a.createElement(l.C,{className:"pt-3"},o.a.createElement(l.f,{className:"col-6"},o.a.createElement(l.e,{className:"primary-button w-100",onClick:function(){return S(!1)}},"Cancel")),o.a.createElement(l.f,{className:"col-6"},o.a.createElement(l.e,{className:"primary-button w-100",disabled:""===G,onClick:function(){return B()}},"Add"))))))},y=n(82),g=n(95);function b(){b=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(q){l=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var o=t&&t.prototype instanceof m?t:m,c=Object.create(o.prototype),i=new k(a||[]);return r(c,"_invoke",{value:x(e,n,i)}),c}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(q){return{type:"throw",arg:q}}}e.wrap=u;var f={};function m(){}function p(){}function h(){}var d={};l(d,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(L([])));y&&y!==t&&n.call(y,o)&&(d=y);var g=h.prototype=m.prototype=Object.create(d);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var a;r(this,"_invoke",{value:function(r,o){function c(){return new t(function(a,c){!function r(a,o,c,i){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then(function(e){r("next",e,c,i)},function(e){r("throw",e,c,i)}):t.resolve(f).then(function(e){u.value=e,c(u)},function(e){return r("throw",e,c,i)})}i(l.arg)}(r,o,a,c)})}return a=a?a.then(c,c):c()}})}function x(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return _()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=N(c,n);if(i){if(i===f)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function N(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var a=s(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=h,r(g,"constructor",{value:h,configurable:!0}),r(h,"constructor",{value:p,configurable:!0}),p.displayName=l(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,l(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(w.prototype),l(w.prototype,c,function(){return this}),e.AsyncIterator=w,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var c=new w(u(t,n,r,a),o);return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},E(g),l(g,i,"Generator"),l(g,o,function(){return this}),l(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=L,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return c.type="throw",c.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;j(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}var E=function(e){var t=Object(m.b)(),n=Object(m.c)(function(e){return e.user}).userdetails,c=e.level1,s=e.level2,f=e.level3,p=Object(a.useState)(e.componentBasic&&e.componentBasic.componentTitle?e.componentBasic.componentTitle:""),d=Object(r.a)(p,2),v=d[0],y=d[1],E=Object(a.useState)(e.componentBasic&&e.componentBasic.componentHeading?e.componentBasic.componentHeading:""),w=Object(r.a)(E,2),x=w[0],N=w[1],O=Object(a.useState)(e.componentBasic&&e.componentBasic.componentDescription?e.componentBasic.componentDescription:""),j=Object(r.a)(O,2),k=j[0],L=j[1],_=function(){var r=Object(i.a)(b().mark(function r(){var a;return b().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t(Object(h.f)(!0)),r.next=3,t(Object(u.a)({componentTitle:v,token:n.token,componentHeading:x,componentDescription:k,level2:s?e.componentId:null,level1:c?e.componentId:null}));case 3:(a=r.sent).payload.data.error&&(t(Object(h.e)(a.payload.data.error)),setTimeout(function(){t(Object(h.a)(a.payload.data.error))},2500)),a.payload.data.success&&(t(Object(h.g)(a.payload.data.success)),setTimeout(function(){t(Object(h.b)(a.payload.data.success))},2500));case 6:case"end":return r.stop()}},r)}));return function(){return r.apply(this,arguments)}}(),q=function(){var r=Object(i.a)(b().mark(function r(){return b().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!(c||s||f)){r.next=7;break}return r.next=3,t(Object(u.g)({_id:e.componentBasic._id,componentTitle:v,componentHeading:x,componentDescription:k,token:n.token,level1:c,level2:s,level3:f}));case 3:r.sent.payload&&e.updateData(v!==e.componentBasic.componentTitle?v.trim().replace(" ","-").toLowerCase():null),r.next=11;break;case 7:return r.next=9,t(Object(u.c)({componentHeading:x,componentDescription:k,token:n.token}));case 9:r.sent.payload&&e.updateData();case 11:case"end":return r.stop()}},r)}));return function(){return r.apply(this,arguments)}}();return o.a.createElement(l.h,null,o.a.createElement(l.C,null,o.a.createElement(l.f,{className:"pt-3"},(c||s||f)&&o.a.createElement("div",{className:"px-3 pb-3"},o.a.createElement(l.p,{for:"categoryTitle"},"Component Title"),o.a.createElement(l.o,{type:"text",id:"categoryTitle",placeholder:"Enter Component Title",defaultValue:v,onChange:function(e){return function(e){y(e.target.value)}(e)}})),o.a.createElement("div",{className:"px-3 pb-3"},o.a.createElement(l.p,{for:"componentName"},"Component Heading"),o.a.createElement(l.o,{type:"text",id:"componentName",placeholder:"Enter Component Name",defaultValue:x,onChange:function(e){return function(e){N(e.target.value)}(e)}})),o.a.createElement(g.a,{description:function(e,t){L(e)},descriptionData:k,fieldname:"description",title:"Component Description"}),o.a.createElement("div",{className:"p-3 text-end"},o.a.createElement(l.e,{className:"primary-button me-1",onClick:function(){return e.cancelEdit()}},"Cancel"),"create"===e.formType?o.a.createElement(l.e,{className:"primary-button",disabled:void 0===x||void 0===k||void 0===v||""===x||""===v||""===k,onClick:function(){return _()}},"Add Child Category"):o.a.createElement(l.e,{className:"primary-button",disabled:void 0===x||void 0===k||""===x||""===k,onClick:function(){return q()}},"Update Category")))))},w=n(85);function x(){x=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(q){l=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var o=t&&t.prototype instanceof m?t:m,c=Object.create(o.prototype),i=new k(a||[]);return r(c,"_invoke",{value:w(e,n,i)}),c}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(q){return{type:"throw",arg:q}}}e.wrap=u;var f={};function m(){}function p(){}function h(){}var d={};l(d,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(L([])));y&&y!==t&&n.call(y,o)&&(d=y);var g=h.prototype=m.prototype=Object.create(d);function b(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var a;r(this,"_invoke",{value:function(r,o){function c(){return new t(function(a,c){!function r(a,o,c,i){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then(function(e){r("next",e,c,i)},function(e){r("throw",e,c,i)}):t.resolve(f).then(function(e){u.value=e,c(u)},function(e){return r("throw",e,c,i)})}i(l.arg)}(r,o,a,c)})}return a=a?a.then(c,c):c()}})}function w(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return _()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=N(c,n);if(i){if(i===f)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function N(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var a=s(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=h,r(g,"constructor",{value:h,configurable:!0}),r(h,"constructor",{value:p,configurable:!0}),p.displayName=l(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,l(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(E.prototype),l(E.prototype,c,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var c=new E(u(t,n,r,a),o);return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},b(g),l(g,i,"Generator"),l(g,o,function(){return this}),l(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=L,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return c.type="throw",c.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;j(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}var N=function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),c=n[0],s=n[1],f=Object(a.useState)(!1),h=Object(r.a)(f,2),d=h[0],v=h[1],y=Object(p.p)(),g=y.level1,b=y.level2,N=y.level3,O=Object(a.useState)({}),j=Object(r.a)(O,2),k=j[0],L=j[1],_=Object(m.c)(function(e){return e.user}).userdetails,q=Object(m.b)(),C=Object(p.n)(),S=function(){s(!1),v(!1)},T=function(){var e=Object(i.a)(x().mark(function e(){var t;return x().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==g||void 0!==b||void 0!==N){e.next=6;break}return e.next=3,q(Object(u.d)({token:_.token}));case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,q(Object(u.e)({token:_.token,level1:g,level2:b,level3:N}));case 8:e.t0=e.sent;case 9:(t=e.t0).error?console.log(t.error):L(t.payload);case 11:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),F=function(e){e&&C(N?"/components/".concat(g,"/").concat(b,"/").concat(e):b?"/components/".concat(g,"/").concat(e):g?"/components/".concat(e):"/components"),T(),s(!1),v(!1)};return Object(a.useEffect)(function(){T(),s(!1),v(!1)},[_,g,b,N]),o.a.createElement(o.a.Fragment,null,!c&&!d&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"p-4 t-color ql-editor-contents"},o.a.createElement("h3",null,k&&k.componentHeading?k.componentHeading:"Valuable Components for Building Web and Mobile Applications using MERN Stack"),k&&k.componentDescription?Object(w.a)("".concat(k.componentDescription)):o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"When it comes to developing robust and efficient web and"),o.a.createElement("p",null,"By incorporating these valuable components into your MERN stack development workflow, you can enhance your productivity,")),_.token&&o.a.createElement("div",{className:"p-3 d-flex flex-column flex-md-row flex-column-reverse justify-content-between gap-2"},!N&&(g||b)&&o.a.createElement(l.e,{className:"primary-button mt-2 ms-md-auto",onClick:function(){v(!0)}},"Add Child Component"),o.a.createElement(l.e,{className:"primary-button mt-2",onClick:function(){return T(),s(!1),void v(!1)}},"Delete Content"),o.a.createElement(l.e,{className:"primary-button mt-2",onClick:function(){s(!0)}},"Edit Content")))),c&&o.a.createElement("div",{className:"p-4 t-color"},o.a.createElement(E,{cancelEdit:S,componentBasic:k,updateData:F,level1:g,level2:b,level3:N,formType:"update"})),d&&o.a.createElement("div",{className:"p-4 t-color"},o.a.createElement(E,{cancelEdit:S,updateData:F,level1:g,level2:b,level3:N,componentId:k._id,formType:"create"})))};t.default=function(){var e=Object(p.p)(),t=e.level1,n=e.level2,i=e.level3,l=Object(a.useState)(!1),u=Object(r.a)(l,2),m=u[0],h=u[1];return Object(a.useEffect)(function(){h(!1)},[t,n,i]),o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,null,o.a.createElement("div",{className:"component-container"},o.a.createElement("div",{className:"component-left py-4 px-2 t-color s-back ".concat(!1===m?"d-none":"d-block"," d-md-block")},o.a.createElement(y.a,null,o.a.createElement(v,{level1:t,level2:n,level3:i}))),o.a.createElement("div",{className:"component-right px-2"},o.a.createElement(N,null)),o.a.createElement("div",{className:"component-left-drawer",onClick:function(){h(!m)}},o.a.createElement("span",{className:"s-color px-5 d-inline-block text-center"},o.a.createElement(s.a,{icon:f.d,className:"mt-1 cursor-pointer",style:{padding:"7px 7px"}}))))))}},82:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(83);t.a=function(e){var t=e.children,n=Object(o.a)({triggerOnce:!0,threshold:.1}),r=n.ref,c=n.inView;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:c?"animated-element":"hidden-element",ref:r},t))}},95:function(e,t,n){"use strict";var r=n(8),a=n(0),o=n.n(a),c=n(94),i=n.n(c),l=function(){return o.a.createElement("svg",{viewBox:"0 0 18 18"},o.a.createElement("polygon",{className:"ql-fill ql-stroke",points:"6 10 4 12 2 10 6 10"}),o.a.createElement("path",{className:"ql-stroke",d:"M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"}))},u=function(){return o.a.createElement("svg",{viewBox:"0 0 18 18"},o.a.createElement("polygon",{className:"ql-fill ql-stroke",points:"12 10 14 12 16 10 12 10"}),o.a.createElement("path",{className:"ql-stroke",d:"M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"}))};function s(){this.quill.history.undo()}function f(){this.quill.history.redo()}var m=c.Quill.import("formats/size");m.whitelist=["extra-small","small","medium","large"],c.Quill.register(m,!0);var p=c.Quill.import("formats/font");p.whitelist=["arial","comic-sans","courier-new","georgia","helvetica","Inter","lucida"],c.Quill.register(p,!0);var h=function(e){return{toolbar:{container:"#"+e,handlers:{undo:s,redo:f}},history:{delay:500,maxStack:100,userOnly:!0}}},d=["header","font","size","bold","italic","underline","align","strike","script","blockquote","background","list","bullet","indent","link","image","video","color","code-block"],v=function(e){return o.a.createElement(o.a.Fragment,null,void 0!==e.toolbarId&&o.a.createElement("div",{id:e.toolbarId},o.a.createElement("span",{className:"ql-formats"},o.a.createElement("button",{className:"ql-bold",title:"Bold"}),o.a.createElement("button",{className:"ql-italic",title:"Italic"}),o.a.createElement("button",{className:"ql-underline",title:"Underline"}),o.a.createElement("button",{className:"ql-strike",title:"Strike-Through"})),o.a.createElement("span",{className:"ql-formats"},o.a.createElement("select",{className:"ql-font",title:"Font",defaultValue:"Inter"},o.a.createElement("option",{value:"arial"}," Arial "),o.a.createElement("option",{value:"comic-sans"},"Comic Sans"),o.a.createElement("option",{value:"courier-new"},"Courier New"),o.a.createElement("option",{value:"georgia"},"Georgia"),o.a.createElement("option",{value:"helvetica"},"Helvetica"),o.a.createElement("option",{value:"Inter"},"Inter"),o.a.createElement("option",{value:"lucida"},"Lucida")),o.a.createElement("select",{className:"ql-size",title:"Font-size",defaultValue:"medium"},o.a.createElement("option",{value:"extra-small"},"Extra Small"),o.a.createElement("option",{value:"small"},"Small"),o.a.createElement("option",{value:"medium"},"Medium"),o.a.createElement("option",{value:"large"},"Large")),o.a.createElement("select",{className:"ql-header",title:"Heading",defaultValue:""},o.a.createElement("option",{value:"1"},"Heading 1"),o.a.createElement("option",{value:"2"},"Heading 2"),o.a.createElement("option",{value:"3"},"Heading 3"),o.a.createElement("option",{value:"4"},"Heading 4"),o.a.createElement("option",{value:"5"},"Heading 5"),o.a.createElement("option",{value:"6"},"Heading 6"),o.a.createElement("option",{value:""},"Normal"))),o.a.createElement("span",{className:"ql-formats"},o.a.createElement("button",{className:"ql-list",value:"ordered",title:"Ordered List"}),o.a.createElement("button",{className:"ql-list",value:"bullet",title:"Bullet List"}),o.a.createElement("button",{className:"ql-indent",value:"-1",title:"Indent Decrease"}),o.a.createElement("button",{className:"ql-indent",value:"+1",title:"Indent Increase"})),o.a.createElement("span",{className:"ql-formats"},o.a.createElement("button",{className:"ql-script",value:"super",title:"Sup-Script"}),o.a.createElement("button",{className:"ql-script",value:"sub",title:"Sub-Script"}),o.a.createElement("button",{className:"ql-blockquote",title:"Blockquote"}),o.a.createElement("button",{className:"ql-direction",title:"Direction"})),o.a.createElement("span",{className:"ql-formats"},o.a.createElement("select",{className:"ql-align",title:"Align"}),o.a.createElement("select",{className:"ql-color",title:"Color"}),o.a.createElement("select",{className:"ql-background",title:"Background"})),o.a.createElement("span",{className:"ql-formats"},o.a.createElement("button",{className:"ql-link",title:"Link"}),o.a.createElement("button",{className:"ql-image",title:"Image"}),o.a.createElement("button",{className:"ql-video",title:"Video"})),o.a.createElement("span",{className:"ql-formats",title:"Formula"},o.a.createElement("button",{className:"ql-formula",title:"Formula"}),o.a.createElement("button",{className:"ql-code-block",title:"Code-Block"}),o.a.createElement("button",{className:"ql-clean",title:"Clean"})),o.a.createElement("span",{className:"ql-formats"},o.a.createElement("button",{className:"ql-undo",title:"Undo"},o.a.createElement(l,null)),o.a.createElement("button",{className:"ql-redo",title:"Redo"},o.a.createElement(u,null)))))};n(92);t.a=function(e){var t=Object(a.useState)(e.descriptionData),n=Object(r.a)(t,2),c=n[0],l=n[1],u=e.fieldname;return o.a.createElement("div",{className:"col-md-12 editor px-3"},e.title?o.a.createElement("label",{className:"font-weight-bold t-color"},e.title):o.a.createElement("label",{className:"font-weight-bold s-color"},"Description"),o.a.createElement("span",{className:"s-color"},o.a.createElement(v,{toolbarId:u}),o.a.createElement(i.a,{theme:"snow",defaultValue:c,onChange:function(t){l(t),e.description(t,u)},placeholder:"Write something awesome...",modules:h(u),formats:d})))}}}]);
//# sourceMappingURL=9.00da6fa3.chunk.js.map