import{i as Pe,I as z,t as Ce,f as Ee,C as Re,a as Be,r as ne}from"./index.6e8bd907.js";import{H as te,I as ue,c as J,z as I,e as O,n as T,C as de,Y as Fe,r as R,aj as Me,D as se,G as N,V as Ne,a3 as Oe,J as _e,$ as Q,a4 as Ve,a5 as je,a6 as Te,R as ke,m as ee,q as ce}from"./index.851d8163.js";import"./index.338b79aa.js";import{x as De,w as ve}from"./useFlexGapSupport.66243b53.js";import{j as Ge}from"./index.fa696f9c.js";import{B as He}from"./index.47c5c8b2.js";import{R as $e}from"./index.e60ac993.js";import{w as U}from"./default.76e08716.js";import{b as Ue,u as Ze}from"./index.5fedb982.js";import{_ as Ye}from"./Password.063f365c.js";const Ke=te({name:"AInputGroup",props:{prefixCls:String,size:{type:String},compact:{type:Boolean,default:void 0},onMouseenter:{type:Function},onMouseleave:{type:Function},onFocus:{type:Function},onBlur:{type:Function}},setup:function(e,o){var a=o.slots,v=ue("input-group",e),m=v.prefixCls,g=v.direction,r=J(function(){var l,d=m.value;return l={},I(l,"".concat(d),!0),I(l,"".concat(d,"-lg"),e.size==="large"),I(l,"".concat(d,"-sm"),e.size==="small"),I(l,"".concat(d,"-compact"),e.compact),I(l,"".concat(d,"-rtl"),g.value==="rtl"),l});return function(){var l;return O("span",{class:r.value,onMouseenter:e.onMouseenter,onMouseleave:e.onMouseleave,onFocus:e.onFocus,onBlur:e.onBlur},[(l=a.default)===null||l===void 0?void 0:l.call(a)])}}});var re=/iPhone/i,fe=/iPod/i,me=/iPad/i,oe=/\bAndroid(?:.+)Mobile\b/i,ge=/Android/i,Y=/\bAndroid(?:.+)SD4930UR\b/i,q=/\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i,M=/Windows Phone/i,he=/\bWindows(?:.+)ARM\b/i,be=/BlackBerry/i,pe=/BB10/i,xe=/Opera Mini/i,ye=/\b(CriOS|Chrome)(?:.+)Mobile/i,Se=/Mobile(?:.+)Firefox\b/i;function n(i,e){return i.test(e)}function ze(i){var e=i||(typeof navigator<"u"?navigator.userAgent:""),o=e.split("[FBAN");if(typeof o[1]<"u"){var a=o,v=de(a,1);e=v[0]}if(o=e.split("Twitter"),typeof o[1]<"u"){var m=o,g=de(m,1);e=g[0]}var r={apple:{phone:n(re,e)&&!n(M,e),ipod:n(fe,e),tablet:!n(re,e)&&n(me,e)&&!n(M,e),device:(n(re,e)||n(fe,e)||n(me,e))&&!n(M,e)},amazon:{phone:n(Y,e),tablet:!n(Y,e)&&n(q,e),device:n(Y,e)||n(q,e)},android:{phone:!n(M,e)&&n(Y,e)||!n(M,e)&&n(oe,e),tablet:!n(M,e)&&!n(Y,e)&&!n(oe,e)&&(n(q,e)||n(ge,e)),device:!n(M,e)&&(n(Y,e)||n(q,e)||n(oe,e)||n(ge,e))||n(/\bokhttp\b/i,e)},windows:{phone:n(M,e),tablet:n(he,e),device:n(M,e)||n(he,e)},other:{blackberry:n(be,e),blackberry10:n(pe,e),opera:n(xe,e),firefox:n(Se,e),chrome:n(ye,e),device:n(be,e)||n(pe,e)||n(xe,e)||n(Se,e)||n(ye,e)},any:null,phone:null,tablet:null};return r.any=r.apple.device||r.android.device||r.windows.device||r.other.device,r.phone=r.apple.phone||r.android.phone||r.windows.phone,r.tablet=r.apple.tablet||r.android.tablet||r.windows.tablet,r}var Le=T(T({},ze()),{isMobile:ze});const Xe=Le;var We=globalThis&&globalThis.__rest||function(i,e){var o={};for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&e.indexOf(a)<0&&(o[a]=i[a]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,a=Object.getOwnPropertySymbols(i);v<a.length;v++)e.indexOf(a[v])<0&&Object.prototype.propertyIsEnumerable.call(i,a[v])&&(o[a[v]]=i[a[v]]);return o};const qe=te({name:"AInputSearch",inheritAttrs:!1,props:T(T({},Pe()),{inputPrefixCls:String,enterButton:Fe.any,onSearch:{type:Function}}),setup:function(e,o){var a=o.slots,v=o.attrs,m=o.expose,g=o.emit,r=R(),l=function(){var u;(u=r.value)===null||u===void 0||u.focus()},d=function(){var u;(u=r.value)===null||u===void 0||u.blur()};m({focus:l,blur:d});var x=function(u){g("update:value",u.target.value),u&&u.target&&u.type==="click"&&g("search",u.target.value,u),g("change",u)},h=function(u){var w;document.activeElement===((w=r.value)===null||w===void 0?void 0:w.input)&&u.preventDefault()},A=function(u){var w;g("search",(w=r.value)===null||w===void 0?void 0:w.stateValue,u),Xe.tablet||r.value.focus()},P=ue("input-search",e),C=P.prefixCls,V=P.getPrefixCls,B=P.direction,_=P.size,y=J(function(){return V("input",e.inputPrefixCls)});return function(){var b,u,w,j,H,k=e.disabled,F=e.loading,K=e.addonAfter,Z=K===void 0?(u=a.addonAfter)===null||u===void 0?void 0:u.call(a):K,X=e.suffix,W=X===void 0?(w=a.suffix)===null||w===void 0?void 0:w.call(a):X,ae=We(e,["disabled","loading","addonAfter","suffix"]),f=e.enterButton,t=f===void 0?(H=(j=a.enterButton)===null||j===void 0?void 0:j.call(a))!==null&&H!==void 0?H:!1:f;t=t||t==="";var s=typeof t=="boolean"?O(Me,null,null):null,c="".concat(C.value,"-button"),p=Array.isArray(t)?t[0]:t,S,$=p.type&&Ge(p.type)&&p.type.__ANT_BUTTON;if($||p.tagName==="button")S=De(p,T({onMousedown:h,onClick:A,key:"enterButton"},$?{class:c,size:_.value}:{}),!1);else{var D=s&&!t;S=O(He,{class:c,type:t?"primary":void 0,size:_.value,disabled:k,key:"enterButton",onMousedown:h,onClick:A,loading:F,icon:D?s:null},{default:function(){return[D?null:s||t]}})}Z&&(S=[S,Z]);var G=se(C.value,(b={},I(b,"".concat(C.value,"-rtl"),B.value==="rtl"),I(b,"".concat(C.value,"-").concat(_.value),!!_.value),I(b,"".concat(C.value,"-with-button"),!!t),b),v.class);return O(z,N(N(N({ref:r},ve(ae,["onUpdate:value","onSearch","enterButton"])),v),{},{onPressEnter:A,size:_.value,prefixCls:y.value,addonAfter:S,suffix:W,onChange:x,class:G,disabled:k}),a)}}});var Je=`
 min-height:0 !important;
 max-height:none !important;
 height:0 !important;
 visibility:hidden !important;
 overflow:hidden !important;
 position:absolute !important;
 z-index:-1000 !important;
 top:0 !important;
 right:0 !important
`,Qe=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break"],ie={},E;function et(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=i.getAttribute("id")||i.getAttribute("data-reactid")||i.getAttribute("name");if(e&&ie[o])return ie[o];var a=window.getComputedStyle(i),v=a.getPropertyValue("box-sizing")||a.getPropertyValue("-moz-box-sizing")||a.getPropertyValue("-webkit-box-sizing"),m=parseFloat(a.getPropertyValue("padding-bottom"))+parseFloat(a.getPropertyValue("padding-top")),g=parseFloat(a.getPropertyValue("border-bottom-width"))+parseFloat(a.getPropertyValue("border-top-width")),r=Qe.map(function(d){return"".concat(d,":").concat(a.getPropertyValue(d))}).join(";"),l={sizingStyle:r,paddingSize:m,borderSize:g,boxSizing:v};return e&&o&&(ie[o]=l),l}function tt(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;E||(E=document.createElement("textarea"),E.setAttribute("tab-index","-1"),E.setAttribute("aria-hidden","true"),document.body.appendChild(E)),i.getAttribute("wrap")?E.setAttribute("wrap",i.getAttribute("wrap")):E.removeAttribute("wrap");var v=et(i,e),m=v.paddingSize,g=v.borderSize,r=v.boxSizing,l=v.sizingStyle;E.setAttribute("style","".concat(l,";").concat(Je)),E.value=i.value||i.placeholder||"";var d=Number.MIN_SAFE_INTEGER,x=Number.MAX_SAFE_INTEGER,h=E.scrollHeight,A;if(r==="border-box"?h+=g:r==="content-box"&&(h-=m),o!==null||a!==null){E.value=" ";var P=E.scrollHeight-m;o!==null&&(d=P*o,r==="border-box"&&(d=d+m+g),h=Math.max(d,h)),a!==null&&(x=P*a,r==="border-box"&&(x=x+m+g),A=h>x?"":"hidden",h=Math.min(x,h))}return{height:"".concat(h,"px"),minHeight:"".concat(d,"px"),maxHeight:"".concat(x,"px"),overflowY:A,resize:"none"}}var le=0,we=1,at=2,nt=te({name:"ResizableTextArea",inheritAttrs:!1,props:Ce(),setup:function(e,o){var a=o.attrs,v=o.emit,m=o.expose,g,r,l=R(),d=R({}),x=R(le);Ne(function(){U.cancel(g),U.cancel(r)});var h=function(){try{if(document.activeElement===l.value){var y=l.value.selectionStart,b=l.value.selectionEnd;l.value.setSelectionRange(y,b)}}catch{}},A=function(){var y=e.autoSize||e.autosize;if(!(!y||!l.value)){var b=y.minRows,u=y.maxRows;d.value=tt(l.value,!1,b,u),x.value=we,U.cancel(r),r=U(function(){x.value=at,r=U(function(){x.value=le,h()})})}},P=function(){U.cancel(g),g=U(A)},C=function(y){if(x.value===le){v("resize",y);var b=e.autoSize||e.autosize;b&&P()}};Oe(e.autosize===void 0,"Input.TextArea","autosize is deprecated, please use autoSize instead.");var V=function(){var y=e.prefixCls,b=e.autoSize,u=e.autosize,w=e.disabled,j=ve(e,["prefixCls","onPressEnter","autoSize","autosize","defaultValue","allowClear","type","lazy","maxlength","valueModifiers"]),H=se(y,a.class,I({},"".concat(y,"-disabled"),w)),k=[a.style,d.value,x.value===we?{overflowX:"hidden",overflowY:"hidden"}:null],F=T(T(T({},j),a),{style:k,class:H});return F.autofocus||delete F.autofocus,F.rows===0&&delete F.rows,O($e,{onResize:C,disabled:!(b||u)},{default:function(){return[je(O("textarea",N(N({},F),{},{ref:l}),null),[[Ue]])]}})};_e(function(){return e.value},function(){Q(function(){A()})}),Ve(function(){Q(function(){A()})});var B=Te();return m({resizeTextarea:A,textArea:l,instance:B}),function(){return V()}}});const rt=nt;function Ie(i,e){return ee(i||"").slice(0,e).join("")}function Ae(i,e,o,a){var v=o;return i?v=Ie(o,a):ee(e||"").length<o.length&&ee(o||"").length>a&&(v=e),v}const ot=te({name:"ATextarea",inheritAttrs:!1,props:Ce(),setup:function(e,o){var a=o.attrs,v=o.expose,m=o.emit,g=Ze(),r=R(e.value===void 0?e.defaultValue:e.value),l=R(),d=R(""),x=ue("input",e),h=x.prefixCls,A=x.size,P=x.direction,C=J(function(){return e.showCount===""||e.showCount||!1}),V=J(function(){return Number(e.maxlength)>0}),B=R(!1),_=R(),y=R(0),b=function(t){B.value=!0,_.value=d.value,y.value=t.currentTarget.selectionStart,m("compositionstart",t)},u=function(t){var s;B.value=!1;var c=t.currentTarget.value;if(V.value){var p=y.value>=e.maxlength+1||y.value===((s=_.value)===null||s===void 0?void 0:s.length);c=Ae(p,_.value,c,e.maxlength)}c!==d.value&&(k(c),ne(t.currentTarget,t,Z,c)),m("compositionend",t)},w=Te();_e(function(){return e.value},function(){var f;"value"in w.vnode.props,r.value=(f=e.value)!==null&&f!==void 0?f:""});var j=function(t){var s;Be((s=l.value)===null||s===void 0?void 0:s.textArea,t)},H=function(){var t,s;(s=(t=l.value)===null||t===void 0?void 0:t.textArea)===null||s===void 0||s.blur()},k=function(t,s){r.value!==t&&(e.value===void 0?r.value=t:Q(function(){var c,p,S;l.value.textArea.value!==d.value&&((S=(c=l.value)===null||c===void 0?void 0:(p=c.instance).update)===null||S===void 0||S.call(p))}),Q(function(){s&&s()}))},F=function(t){t.keyCode===13&&m("pressEnter",t),m("keydown",t)},K=function(t){var s=e.onBlur;s==null||s(t),g.onFieldBlur()},Z=function(t){m("update:value",t.target.value),m("change",t),m("input",t),g.onFieldChange()},X=function(t){ne(l.value.textArea,t,Z),k("",function(){j()})},W=function(t){var s=t.target.composing,c=t.target.value;if(B.value=!!(t.isComposing||s),!(B.value&&e.lazy||r.value===c)){if(V.value){var p=t.target,S=p.selectionStart>=e.maxlength+1||p.selectionStart===c.length||!p.selectionStart;c=Ae(S,d.value,c,e.maxlength)}ne(t.currentTarget,t,Z,c),k(c)}},ae=function(){var t,s,c,p=a.style,S=a.class,$=e.bordered,D=$===void 0?!0:$,G=T(T(T({},ve(e,["allowClear"])),a),{style:C.value?{}:p,class:(t={},I(t,"".concat(h.value,"-borderless"),!D),I(t,"".concat(S),S&&!C.value),I(t,"".concat(h.value,"-sm"),A.value==="small"),I(t,"".concat(h.value,"-lg"),A.value==="large"),t),showCount:null,prefixCls:h.value,onInput:W,onChange:W,onBlur:K,onKeydown:F,onCompositionstart:b,onCompositionend:u});return!((s=e.valueModifiers)===null||s===void 0)&&s.lazy&&delete G.onInput,O(rt,N(N({},G),{},{id:(c=G.id)!==null&&c!==void 0?c:g.id.value,ref:l,maxlength:e.maxlength}),null)};return v({focus:j,blur:H,resizableTextArea:l}),ke(function(){var f=Ee(r.value);!B.value&&V.value&&(e.value===null||e.value===void 0)&&(f=Ie(f,e.maxlength)),d.value=f}),function(){var f=e.maxlength,t=e.bordered,s=t===void 0?!0:t,c=e.hidden,p=a.style,S=a.class,$=T(T(T({},e),a),{prefixCls:h.value,inputType:"text",handleReset:X,direction:P.value,bordered:s,style:C.value?void 0:p}),D=O(Re,N(N({},$),{},{value:d.value}),{element:ae});if(C.value){var G=ee(d.value).length,L="";ce(C.value)==="object"?L=C.value.formatter({count:G,maxlength:f}):L="".concat(G).concat(V.value?" / ".concat(f):""),D=O("div",{hidden:c,class:se("".concat(h.value,"-textarea"),I({},"".concat(h.value,"-textarea-rtl"),P.value==="rtl"),"".concat(h.value,"-textarea-show-count"),S),style:p,"data-count":ce(L)!=="object"?L:void 0},[D])}return D}}});z.Group=Ke;z.Search=qe;z.TextArea=ot;z.Password=Ye;z.install=function(i){return i.component(z.name,z),i.component(z.Group.name,z.Group),i.component(z.Search.name,z.Search),i.component(z.TextArea.name,z.TextArea),i.component(z.Password.name,z.Password),i};export{ot as _};
