(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{205:function(e,t,r){"use strict";var n=r(21),a=r(6),o=r(8),i=r(0),c=r.n(i),l=r(17),s=r(9),u=r(25),f=r(62),h=r(28),p=r(27),m=r(31),d=r(1),v=r(61),y=function(e){var t=Object(d.n)(),r=e.item,n=Object(f.a)({triggerOnce:!0,threshold:.1}),a=n.ref,o=n.inView;return c.a.createElement("div",{ref:a,className:o?"animated-section":"hidden-section"},c.a.createElement(s.C,{className:"pe-5 pe-md-0"},r.skillImage&&c.a.createElement(s.f,{className:"col-3 col-md-1"},r.skillImage?c.a.createElement(v.a,{fileSrc:r.skillImage,fileClass:"mx-1 mw-100 p-1 border border-warning",alt:r.skillName}):""),c.a.createElement(s.f,{className:"flex-grow-1"},c.a.createElement("h3",{className:"t-color f-size-20"},r.skillName," ",c.a.createElement("span",{className:"cursor-pointer f-size-15 p-color",onClick:function(e){return n=r._id,void t("/skillsQnA/".concat(n));var n}},"(Add Q n A)")),c.a.createElement("h3",{className:"mb-1 f-size-15 f-bold t-color-e5"},r.skillHeading),c.a.createElement("div",{className:"f-size-15 t-color-c5"},Object(m.a)("".concat(r.skillDesc))))),c.a.createElement("div",{className:"edit-delete d-flex flex-column flex-md-row",style:{right:"0px"}},c.a.createElement(s.n,{switch:!0,className:"align-self-center"},c.a.createElement(s.o,{role:"switch",type:"switch",checked:r.active,onChange:function(t){return e.updateStatus(r._id,!r.active)}}),c.a.createElement("span",{className:"d-none d-md-inline"},r.active?"Active":"Inactive")),c.a.createElement(h.a,{icon:p.c,onClick:function(t){return e.editSkills(r.skillName,r.skillHeading,r.skillImage,r.skillDesc,r._id)},className:"mt-1",style:{padding:"7px 7px"}}),c.a.createElement(h.a,{icon:p.h,onClick:function(t){return e.deleteSkills(r._id)},className:"mt-1",style:{padding:"7px 7px"}})))},g=r(40);function b(){b=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,r){return e[t]=r}}function s(e,t,r,a){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),c=new L(a||[]);return n(i,"_invoke",{value:x(e,r,c)}),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=s;var f={};function h(){}function p(){}function m(){}var d={};l(d,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(O([])));y&&y!==t&&r.call(y,o)&&(d=y);var g=m.prototype=h.prototype=Object.create(d);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(a,i){!function n(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(f).then(function(e){s.value=e,i(s)},function(e){return n("throw",e,i,c)})}c(l.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function x(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return _()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function k(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=u(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function O(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=m,n(g,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:p,configurable:!0}),p.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(w.prototype),l(w.prototype,i,function(){return this}),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new w(s(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},E(g),l(g,c,"Generator"),l(g,o,function(){return this}),l(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=O,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;N(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}t.a=function(e){var t=Object(l.c)(function(e){return e.user}).userdetails,r=e.displayType,f=Object(i.useState)(null),h=Object(o.a)(f,2),p=h[0],m=h[1],v=Object(l.b)(),E=Object(d.n)(),w=function(){var e=Object(a.a)(b().mark(function e(){var r;return b().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(Object(u.g)({token:t.token}));case 2:if((r=e.sent).payload.error){e.next=8;break}return e.next=6,m(r.payload);case 6:e.next=10;break;case 8:return e.next=10,m(null);case 10:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)(function(){e.updateSkill&&w()},[e.updateSkill]);var x=function(){var e=Object(a.a)(b().mark(function e(r,a){var o,i;return b().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(Object(u.b)({id:r,active:a,token:t.token}));case 2:if(!(o=e.sent)){e.next=8;break}return i=Object(n.a)(p),e.next=7,p.forEach(function(e,t){e._id===o.payload._id&&(i[t]=o.payload)});case 7:m(i);case 8:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}(),k=function(t,r,n,a,o){e.editSkills(t,r,n,a,o)},j=function(){var e=Object(a.a)(b().mark(function e(r){return b().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(Object(u.d)({id:r,token:t.token}));case 2:e.sent,w();case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(s.C,null,p&&p.map(function(e,t){return r&&"block"===r?c.a.createElement(s.f,{className:"col-12 col-sm-6 col-md-3 my-2",key:e._id},c.a.createElement(g.a,null,c.a.createElement("div",{className:"s-back text-center p-2",onClick:function(t){return E("/skills/".concat(e._id))}},c.a.createElement("p",{className:"f-size-15 m-0 p-0"},e.skillName," ")))):r&&"column"===r?c.a.createElement(s.f,{className:"col-6 col-md-4",key:e._id},c.a.createElement(g.a,null,c.a.createElement("div",{className:"text-start p-2"},c.a.createElement("p",{className:"f-size-20 m-0 p-0 t-color cursor-pointer",onClick:function(t){return E("/skills/".concat(e._id))}},e.skillName)))):c.a.createElement(s.f,{className:"col-12 skill-item position-relative px-0 px-md-4",style:{overflowX:"hidden"},key:e._id},c.a.createElement(y,{item:e,updateStatus:x,editSkills:k,deleteSkills:j}))}))}},206:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(9),i=r(210);t.a=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.h,{className:"t-color service-category"},a.a.createElement(i.a,{displayType:"block",updateService:!0})))}},223:function(e,t,r){"use strict";r.r(t);var n=r(6),a=r(8),o=r(0),i=r.n(o),c=r(41),l=r(9),s=r(31),u=r(40),f=r(61),h=function(e){var t=e.aboutme;return i.a.createElement(i.a.Fragment,null,t&&i.a.createElement(l.h,{className:"text-center "},i.a.createElement(u.a,null,i.a.createElement("h1",{className:"p-color f-size-20 py-4 mt-5"},Object(s.a)("".concat(t.contentTitle)),i.a.createElement("hr",{className:"w-200px my-4 mx-auto"})),i.a.createElement("h3",{className:"t-color f-size-36 py-3"},Object(s.a)("".concat(t.contentHeading))),i.a.createElement("div",{className:"t-color f-size-20 pb-5"},Object(s.a)("".concat(t.contentData)))),i.a.createElement("div",{className:"py-3 mb-5"},t.attachment&&i.a.createElement(f.a,{fileSrc:t.attachment,alt:t.contentHeading,fileClass:["jpg","jpeg","png","gif"].includes(t.attachment.split(".").splice(-1)[0])?"rounded-0 px-5 text-decoration-none":"sp-btn-secondary rounded-0 px-5 text-decoration-none"}))))},p=function(e){return i.a.createElement(i.a.Fragment,null,e.content.active&&i.a.createElement(l.h,{className:"text-center"},i.a.createElement(u.a,null,i.a.createElement("h1",{className:"p-color f-size-20 py-4 mt-5"},Object(s.a)("".concat(e.content.contentTitle)),i.a.createElement("hr",{className:"w-200px my-4 mx-auto"})),i.a.createElement("h3",{className:"t-color f-size-36 py-3"},Object(s.a)("".concat(e.content.contentHeading))),i.a.createElement("div",{className:"t-color f-size-20 pb-5"},Object(s.a)("".concat(e.content.contentData))),i.a.createElement("div",{className:"py-3 mb-5"},i.a.createElement(f.a,{fileSrc:e.content.attachment,alt:e.content.contentHeading,fileClass:["jpg","jpeg","png","gif"].includes(e.content.attachment.split(".").splice(-1)[0])?"rounded-0 px-5 text-decoration-none":"sp-btn-secondary rounded-0 px-5 text-decoration-none"})))))},m=r(33),d=r(17);function v(){v=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,r){return e[t]=r}}function s(e,t,r,a){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),c=new L(a||[]);return n(i,"_invoke",{value:x(e,r,c)}),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=s;var f={};function h(){}function p(){}function m(){}var d={};l(d,o,function(){return this});var y=Object.getPrototypeOf,g=y&&y(y(O([])));g&&g!==t&&r.call(g,o)&&(d=g);var b=m.prototype=h.prototype=Object.create(d);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(a,i){!function n(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(f).then(function(e){s.value=e,i(s)},function(e){return n("throw",e,i,c)})}c(l.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function x(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return _()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function k(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=u(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function O(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=m,n(b,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:p,configurable:!0}),p.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},E(w.prototype),l(w.prototype,i,function(){return this}),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new w(s(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},E(b),l(b,c,"Generator"),l(b,o,function(){return this}),l(b,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=O,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;N(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}var y=function(e){var t=e.banner,r=e.userProfile,c=Object(o.useState)(""),u=Object(a.a)(c,2),f=u[0],h=u[1],p=Object(d.b)(),y=function(){var e=Object(n.a)(v().mark(function e(t){var r,n;return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""===(r=t.bannerImage)||null===r){e.next=6;break}return e.next=4,p(Object(m.d)({fileName:r}));case 4:(n=e.sent).payload&&n.payload.fileBase64?h("data:image/jpeg;base64,".concat(n.payload.fileBase64)):h("/uploads/".concat(t.bannerImage));case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return Object(o.useEffect)(function(){y(t)},[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(l.h,{fluid:!0,className:"m-0 p-0"},i.a.createElement("div",{className:"homebanner-image",style:{backgroundImage:"url(".concat(f,")")}},i.a.createElement("div",{className:"d-md-flex justify-content-md-between position-relative homebanner-content",style:{height:"100%"}},i.a.createElement("div",{className:"banner-left mx-auto pt-5 d-flex flex-column justify-content-around"},i.a.createElement("h2",{className:"text-start f-size-42 pt-5"},r.name,i.a.createElement("span",{className:"name-dot"},"."),i.a.createElement("hr",{className:"w-25 ms-5"})),i.a.createElement("p",{className:"text-start py-md-4"},"Email Id: ",r.email,i.a.createElement("br",null),"Contact No: ",r.mobile,r.mobile2?" / "+r.mobile2:"",i.a.createElement("br",null),"Skype ID: ",r.skypeId),i.a.createElement(l.e,{className:"sp-btn-secondary w-200px rounded-0"},"CONTACT ME")),i.a.createElement("div",{className:"banner-right mx-auto mt-md-5 pt-5 d-none d-md-flex flex-column justify-content-around position-absolute"},i.a.createElement("div",{className:"text-center f-size-20 py-2"},"Introduction",i.a.createElement("hr",{className:"w-50 m-auto"})),i.a.createElement("h2",null,i.a.createElement("span",{className:"f-size-50 p-4 d-block text-center"},Object(s.a)("".concat(t.introductionL1))),i.a.createElement("span",{className:"f-size-36 mt-2 d-block text-center"},Object(s.a)("".concat(t.introductionL2.split(" ").join("&nbsp;")),{trim:!1})))))),i.a.createElement("div",{className:"banner-right mx-auto mt-md-5 pt-5 d-flex flex-column justify-content-around d-md-none"},i.a.createElement("div",{className:"text-center f-size-20 py-2"},"Introduction",i.a.createElement("hr",{className:"w-50 m-auto"})),i.a.createElement("h2",null,i.a.createElement("span",{className:"f-size-50 p-4 d-block text-center"},Object(s.a)("".concat(t.introductionL1))),i.a.createElement("span",{className:"f-size-36 mt-2 d-block text-center"},Object(s.a)("".concat(t.introductionL2.split(" ").join("&nbsp;")),{trim:!1}))))))},g=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.h,{fluid:!0,className:"m-0 p-0"},i.a.createElement("div",{className:"home-middle-banner position-relative my-5"},i.a.createElement(u.a,null,i.a.createElement(f.a,{fileSrc:e.middleBanner.bannerImage,alt:"I am delivering beautiful digital products for my clients",fileClass:"w-100"})))))},b=r(206),E=r(63),w=r(220),x=r(205),k=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.h,{className:"t-color skill-category"},i.a.createElement(x.a,{displayType:"block",updateSkill:!0})))},j=r(1);function N(){N=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,r){return e[t]=r}}function s(e,t,r,a){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),c=new L(a||[]);return n(i,"_invoke",{value:w(e,r,c)}),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=s;var f={};function h(){}function p(){}function m(){}var d={};l(d,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(O([])));y&&y!==t&&r.call(y,o)&&(d=y);var g=m.prototype=h.prototype=Object.create(d);function b(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(a,i){!function n(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(f).then(function(e){s.value=e,i(s)},function(e){return n("throw",e,i,c)})}c(l.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function w(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return _()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=u(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function O(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=m,n(g,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:p,configurable:!0}),p.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(E.prototype),l(E.prototype,i,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new E(s(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},b(g),l(g,c,"Generator"),l(g,o,function(){return this}),l(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=O,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}var L=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_API_URL?Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_API_URL:"";t.default=function(){var e=Object(j.n)(),t=Object(d.b)(),r=Object(d.c)(function(e){return e.user}).userdetails,s=Object(o.useState)({}),u=Object(a.a)(s,2),f=u[0],m=u[1],v=Object(o.useState)({}),x=Object(a.a)(v,2),O=x[0],_=x[1],S=function(){var e=Object(n.a)(N().mark(function e(){var n;return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Object(E.b)({token:r.token?r.token:null}));case 2:if((n=e.sent).error){e.next=8;break}return e.next=6,m(n.payload);case 6:e.next=10;break;case 8:return e.next=10,m({});case 10:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)(function(){(function(){var e=Object(n.a)(N().mark(function e(){var t,n;return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.token){e.next=6;break}return e.next=3,w.a.get("".concat(L,"/api/user/info/").concat(r.token));case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,w.a.get("".concat(L,"/api/user/info"));case 8:e.t0=e.sent;case 9:if(t=e.t0,(n=t.data).error){e.next=16;break}return e.next=14,_(n);case 14:e.next=18;break;case 16:return e.next=18,_({});case 18:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()(),S()},[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null,f.banner&&f.pageContent1&&f.services&&f.middleBanner&&f.pageContent2&&f.skills&&!f.banner.active&&!f.pageContent1.active&&!f.services.active&&!f.middleBanner.active&&!f.pageContent2.active&&!f.skills.active&&i.a.createElement("div",{className:"container-fluid px-0"},i.a.createElement(l.C,null,i.a.createElement(l.f,{className:"text-center p-4"},i.a.createElement(l.e,{className:"sp-btn-secondary rounded-0 px-5",onClick:function(){return e("/profile")}},"Please Update Profile")))),i.a.createElement("div",{className:"container-fluid px-0"},f.banner&&f.banner.active?i.a.createElement(y,{banner:f.banner,userProfile:O}):"",f.pageContent1&&f.pageContent1.active?i.a.createElement(h,{aboutme:f.pageContent1}):"",f.services&&f.services.active?i.a.createElement(b.a,{services:f.services}):"",f.middleBanner&&f.middleBanner.active?i.a.createElement(g,{middleBanner:f.middleBanner}):"",f.pageContent2&&f.pageContent2.active?i.a.createElement(p,{content:f.pageContent2}):"",f.skills&&f.skills.active?i.a.createElement(k,{skills:f.skills}):"")))}}}]);
//# sourceMappingURL=3.c79ae99e.chunk.js.map