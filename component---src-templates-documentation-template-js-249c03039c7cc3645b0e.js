(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{235:function(u,e,D){"use strict";D.r(e);D(88);var t=D(0),n=D.n(t),r=D(33),o=D.n(r),a=D(40),i=(D(32),D(132),D(62)),c=D.n(i),s=(D(135),D(10)),l=D.n(s),F=D(2),p=D.n(F),E=D(246),f=D.n(E),m=function(u){function e(){for(var e,D=arguments.length,t=new Array(D),n=0;n<D;n++)t[n]=arguments[n];return(e=u.call.apply(u,[this].concat(t))||this).capitalize=function(u){return!u||u.length<1?u:u.slice(0,1).toUpperCase()+u.slice(1)},e.nextPath=function(u,e){var D=u.split(e);return D.length>0?D[0]+e:u},e}return l()(e,u),e.prototype.render=function(){var u=this,e=this.props,D=e.path,t=e.renderLink,r=c()(e,["path","renderLink"]),o=D.split("/").filter(function(u){return u&&u.length>0&&-1===u.search("#")}).map(function(e,r){return n.a.createElement("li",{key:r,className:f.a.breadcrumbsItem},r>0&&n.a.createElement("span",null,"/"),t({href:u.nextPath(D,e),name:u.capitalize(e)}))});return n.a.createElement("nav",Object.assign({"aria-label":"breadcrumb"},r),n.a.createElement("ol",{className:f.a.breadcrumbs},o.slice(0,o.length-1)))},e}(n.a.PureComponent);m.propTypes={path:p.a.string.isRequired,renderLink:p.a.func},m.defaultProps={renderLink:function(u){var e=u.href,D=u.name;return n.a.createElement("a",{href:e},D)}};var d=m,C=D(247),b=D.n(C),g=D(249),y=D.n(g),h=D(244),v=D.n(h),A=D(250),_=D.n(A),P=new b.a;function O(u,e){return u+"#"+P.slug(e)}var B=function(u){var e=u.headings,D=u.slug,t=u.minHeaders,r=void 0===t?8:t;return P.reset(),!(e.length<=r)&&n.a.createElement("nav",{className:_.a.toc},n.a.createElement("ul",null,e.map(function(u,e){return n.a.createElement("li",{key:u+"-"+e,className:v()(_.a.tocLevel,_.a["tocLevel"+u.depth])},n.a.createElement(y.a,{iconName:"down"}),n.a.createElement(a.Link,{to:O(D,u.value)},u.value))})))};B.propTypes={slug:p.a.string.isRequired,minHeaders:p.a.number,headings:p.a.arrayOf(p.a.shape({value:p.a.string.isRequired,depth:p.a.number.isRequired})).isRequired};var j=B,w=D(251),N=D.n(w);D.d(e,"default",function(){return L}),D.d(e,"pageQuery",function(){return x});var I={sm:10,smPush:1,md:10,mdPush:1,lg:8,lgPush:2,xl:6,xlPush:3,xxl:6};function L(u){var e=u.data.markdownRemark,D=e.frontmatter,t=e.fields,r=e.html,i=e.headings;return n.a.createElement(o.a,null,n.a.createElement(o.a.Row,null,n.a.createElement(o.a.Col,I,n.a.createElement(d,{className:N.a.breadcrumb,path:t.slug,renderLink:function(u){var e=u.href,D=u.name;return n.a.createElement(a.Link,{to:e},D)}}),n.a.createElement("h1",null,D.title),i&&n.a.createElement(j,{headings:i,slug:t.slug}),n.a.createElement("div",{className:N.a.documentationContainer,dangerouslySetInnerHTML:{__html:r}}))))}var x="3010027495"},237:function(u,e,D){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=D(1),n=D(0),r=D(238),o=D(133),a=D(89),i=D(43),c=D(87),s=i.classNamesFunction(),l=function(u){function e(e){var D=u.call(this,e)||this;return D.onImageLoadingStateChange=function(u){D.props.imageProps&&D.props.imageProps.onLoadingStateChange&&D.props.imageProps.onLoadingStateChange(u),u===a.ImageLoadState.error&&D.setState({imageLoadError:!0})},D.state={imageLoadError:!1},D}return t.__extends(e,u),e.prototype.render=function(){var u=this.props,e=u.ariaLabel,D=u.className,a=u.styles,c=u.iconName,l=u.imageErrorAs,F="string"==typeof c&&0===c.length,p=this.props.iconType===r.IconType.image||this.props.iconType===r.IconType.Image,E=this._getIconContent(c),f=E.iconClassName,m=E.children,d=s(a,{className:D,iconClassName:f,isImage:p,isPlaceholder:F}),C=e?{"aria-label":e}:{role:"presentation","aria-hidden":!0},b=p?"div":"i",g=i.getNativeProps(this.props,i.htmlElementProperties),y=this.state.imageLoadError,h=t.__assign({},this.props.imageProps,{onLoadingStateChange:this.onImageLoadingStateChange}),v=y&&l||o.Image;return n.createElement(b,t.__assign({"data-icon-name":c},g,C,{className:d.root}),p?n.createElement(v,t.__assign({},h)):m)},e.prototype._getIconContent=function(u){var e=c.getIcon(u)||{subset:{className:void 0},code:void 0};return{children:e.code,iconClassName:e.subset.className}},e}(i.BaseComponent);e.IconBase=l},238:function(u,e,D){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(u){u[u.default=0]="default",u[u.image=1]="image",u[u.Default=1e5]="Default",u[u.Image=100001]="Image"}(e.IconType||(e.IconType={}))},239:function(u,e,D){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t,n=function(u){if(u&&u.__esModule)return u;var e={};if(null!=u)for(var D in u)if(Object.prototype.hasOwnProperty.call(u,D)){var t=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(u,D):{};t.get||t.set?Object.defineProperty(e,D,t):e[D]=u[D]}return e.default=u,e}(D(0)),r=(t=D(2))&&t.__esModule?t:{default:t},o=D(240);function a(u){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(u){return typeof u}:function(u){return u&&"function"==typeof Symbol&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u})(u)}function i(){return(i=Object.assign||function(u){for(var e=1;e<arguments.length;e++){var D=arguments[e];for(var t in D)Object.prototype.hasOwnProperty.call(D,t)&&(u[t]=D[t])}return u}).apply(this,arguments)}function c(u,e){for(var D=0;D<e.length;D++){var t=e[D];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(u,t.key,t)}}function s(u,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(u){if(void 0===u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u}(u):e}function l(u){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(u){return u.__proto__||Object.getPrototypeOf(u)})(u)}function F(u,e){return(F=Object.setPrototypeOf||function(u,e){return u.__proto__=e,u})(u,e)}function p(u,e,D){return e in u?Object.defineProperty(u,e,{value:D,enumerable:!0,configurable:!0,writable:!0}):u[e]=D,u}var E=function(u){function e(){return function(u,e){if(!(u instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,l(e).apply(this,arguments))}var D,t,r;return function(u,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");u.prototype=Object.create(e&&e.prototype,{constructor:{value:u,writable:!0,configurable:!0}}),e&&F(u,e)}(e,n.PureComponent),D=e,(t=[{key:"render",value:function(){var u=this.props,e=u.iconName,D=u.className,t=u.style,r=function(u,e){if(null==u)return{};var D,t,n={},r=Object.keys(u);for(t=0;t<r.length;t++)D=r[t],e.indexOf(D)>=0||(n[D]=u[D]);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(u);for(t=0;t<o.length;t++)D=o[t],e.indexOf(D)>=0||Object.prototype.propertyIsEnumerable.call(u,D)&&(n[D]=u[D])}return n}(u,["iconName","className","style"]);return n.createElement(o.Icon,i({},r,{iconName:e,className:D,style:t}))}}])&&c(D.prototype,t),r&&c(D,r),e}();e.default=E,p(E,"propTypes",{iconName:r.default.string,imageProps:r.default.object,className:r.default.string}),p(E,"defaultProps",{iconName:void 0,imageProps:void 0})},240:function(u,e,D){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),D(1).__exportStar(D(241),e)},241:function(u,e,D){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=D(1);t.__exportStar(D(242),e),t.__exportStar(D(237),e),t.__exportStar(D(238),e)},242:function(u,e,D){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=D(43),n=D(237),r=D(243);e.Icon=t.styled(n.IconBase,r.getStyles,void 0,{scope:"Icon"})},243:function(u,e,D){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getStyles=function(u){var e=u.className,D=u.iconClassName,t=u.isPlaceholder,n=u.isImage,r=u.styles;return{root:[n&&"ms-Icon-imageContainer",t&&"ms-Icon-placeHolder",{display:"inline-block"},t&&{width:"1em"},n&&{overflow:"hidden"},D,e,r&&r.root,r&&r.imageContainer]}}},244:function(u,e,D){var t;!function(){"use strict";var D={}.hasOwnProperty;function n(){for(var u=[],e=0;e<arguments.length;e++){var t=arguments[e];if(t){var r=typeof t;if("string"===r||"number"===r)u.push(t);else if(Array.isArray(t)&&t.length){var o=n.apply(null,t);o&&u.push(o)}else if("object"===r)for(var a in t)D.call(t,a)&&t[a]&&u.push(a)}}return u.join(" ")}u.exports?(n.default=n,u.exports=n):void 0===(t=function(){return n}.apply(e,[]))||(u.exports=t)}()},246:function(u,e,D){u.exports={breadcrumbs:"breadcrumb-module--breadcrumbs--37RD5",breadcrumbsItem:"breadcrumb-module--breadcrumbs-item--11u8m"}},247:function(u,e,D){var t=D(248);function n(){if(!(this instanceof n))return new n;this.reset()}u.exports=n,n.prototype.slug=function(u,e){var D=function(u,e){if("string"!=typeof u)return"";e||(u=u.replace(/[A-Z]+/g,o));return u.trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,.\/:;<=>?@[\]^`{|}~]/g,"").replace(t(),"").replace(r,"-")}(u,e=!0===e),n=this.occurrences[D];return this.occurrences.hasOwnProperty(D)?n++:n=0,this.occurrences[D]=n,n&&(D=D+"-"+n),D},n.prototype.reset=function(){this.occurrences={}};var r=/\s/g;function o(u){return u.toLowerCase()}},248:function(u,e){u.exports=function(){return/[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]|\uD83C\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uD83C\uDDFE\uD83C[\uDDEA\uDDF9]|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDFC\uD83C[\uDDEB\uDDF8]|\uD83C\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uD83C\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF8\uDDFE\uDDFF]|\uD83C\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uD83C\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uD83C\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uD83C\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uD83C\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uD83C\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uD83C\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uD83C\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uD83C\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uD83C\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uD83C\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uD83C\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uD83C\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uD83C\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uD83C\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uD83C\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|[#\*0-9]\u20E3/g}},249:function(u,e,D){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}});var t,n=(t=D(239))&&t.__esModule?t:{default:t}},250:function(u,e,D){u.exports={toc:"table-of-contents-module--toc--bptuj",tocLevel:"table-of-contents-module--toc-level--BRHM6",tocLevel2:"table-of-contents-module--toc-level-2--sO0PN",tocLevel3:"table-of-contents-module--toc-level-3--f8SE5",tocLevel4:"table-of-contents-module--toc-level-4--1ghIJ",tocLevel5:"table-of-contents-module--toc-level-5--32egW",tocLevel6:"table-of-contents-module--toc-level-6--3nbd4"}},251:function(u,e,D){u.exports={breadcrumb:"documentation-template-module--breadcrumb--36CqB",documentationContainer:"documentation-template-module--documentation-container--3kpwN"}}}]);
//# sourceMappingURL=component---src-templates-documentation-template-js-249c03039c7cc3645b0e.js.map