import{E as S,m as l,r as C,G as k,c as z,B as V,x as s,e as d,D as A,s as D,aj as N,ak as B}from"./index.ab0d47a4.js";import{w as F,x as G}from"./useFlexGapSupport.f5eec5c4.js";import{i as $,I as q}from"./index.0e96b1ad.js";var H=globalThis&&globalThis.__rest||function(r,n){var a={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&n.indexOf(o)<0&&(a[o]=r[o]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,o=Object.getOwnPropertySymbols(r);t<o.length;t++)n.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(r,o[t])&&(a[o[t]]=r[o[t]]);return a},J={click:"onClick",hover:"onMouseover"},K=function(n){return n?d(N,null,null):d(B,null,null)};const W=S({name:"AInputPassword",inheritAttrs:!1,props:l(l({},$()),{prefixCls:String,inputPrefixCls:String,action:{type:String,default:"click"},visibilityToggle:{type:Boolean,default:!0},iconRender:Function}),setup:function(n,a){var o=a.slots,t=a.attrs,_=a.expose,u=C(!1),I=function(){var e=n.disabled;e||(u.value=!u.value)},p=C(),w=function(){var e;(e=p.value)===null||e===void 0||e.focus()},O=function(){var e;(e=p.value)===null||e===void 0||e.blur()};_({focus:w,blur:O});var R=function(e){var i,b=n.action,f=n.iconRender,x=f===void 0?o.iconRender||K:f,v=J[b]||"",m=x(u.value),E=(i={},s(i,v,I),s(i,"class","".concat(e,"-icon")),s(i,"key","passwordIcon"),s(i,"onMousedown",function(y){y.preventDefault()}),s(i,"onMouseup",function(y){y.preventDefault()}),i);return G(D(m)?m:d("span",null,[m]),E)},P=k("input-password",n),g=P.prefixCls,h=P.getPrefixCls,j=z(function(){return h("input",n.inputPrefixCls)}),T=function(){var e=n.size,i=n.visibilityToggle,b=H(n,["size","visibilityToggle"]),f=i&&R(g.value),x=V(g.value,t.class,s({},"".concat(g.value,"-").concat(e),!!e)),v=l(l(l({},F(b,["suffix","iconRender","action"])),t),{type:u.value?"text":"password",class:x,prefixCls:j.value,suffix:f});return e&&(v.size=e),d(q,A({ref:p},v),o)};return function(){return T()}}});export{W as _};