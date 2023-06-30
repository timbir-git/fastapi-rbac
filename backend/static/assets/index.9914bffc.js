import{X as z,m as g,E as W,a0 as X,G as Y,e as m,aR as se,D as k,B as I,c as H,ah as U,x as F,n as de,s as G,ar as ue}from"./index.ab0d47a4.js";import{g as ce,D as pe}from"./index.58d81b67.js";import"./index.8c51b797.js";import{b as ve,B as V}from"./index.0857d90f.js";import{x as M,w as ye}from"./useFlexGapSupport.f5eec5c4.js";var q=function(){return{arrow:{type:[Boolean,Object],default:void 0},trigger:{type:[Array,String]},overlay:z.any,visible:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},align:{type:Object},getPopupContainer:Function,prefixCls:String,transitionName:String,placement:String,overlayClassName:String,overlayStyle:{type:Object,default:void 0},forceRender:{type:Boolean,default:void 0},mouseEnterDelay:Number,mouseLeaveDelay:Number,openClassName:String,minOverlayWidthMatchTrigger:{type:Boolean,default:void 0},destroyPopupOnHide:{type:Boolean,default:void 0},onVisibleChange:{type:Function},"onUpdate:visible":{type:Function}}},E=ve(),fe=function(){return g(g({},q()),{type:E.type,size:String,htmlType:E.htmlType,href:String,disabled:{type:Boolean,default:void 0},prefixCls:String,icon:z.any,title:String,loading:E.loading,onClick:{type:Function}})},me=globalThis&&globalThis.__rest||function(r,a){var s={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&a.indexOf(e)<0&&(s[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,e=Object.getOwnPropertySymbols(r);d<e.length;d++)a.indexOf(e[d])<0&&Object.prototype.propertyIsEnumerable.call(r,e[d])&&(s[e[d]]=r[e[d]]);return s},ge=V.Group;const T=W({name:"ADropdownButton",inheritAttrs:!1,__ANT_BUTTON:!0,props:X(fe(),{trigger:"hover",placement:"bottomRight",type:"default"}),slots:["icon","leftButton","rightButton","overlay"],setup:function(a,s){var e=s.slots,d=s.attrs,_=s.emit,C=function(v){_("update:visible",v),_("visibleChange",v)},u=Y("dropdown-button",a),N=u.prefixCls,x=u.direction,j=u.getPopupContainer;return function(){var h,v,t=g(g({},a),d),S=t.type,n=S===void 0?"default":S,o=t.disabled,l=t.loading,b=t.htmlType,c=t.class,p=c===void 0?"":c,i=t.overlay,P=i===void 0?(h=e.overlay)===null||h===void 0?void 0:h.call(e):i,O=t.trigger,y=t.align,f=t.visible;t.onVisibleChange;var w=t.placement,B=w===void 0?x.value==="rtl"?"bottomLeft":"bottomRight":w,A=t.href,K=t.title,$=t.icon,Q=$===void 0?((v=e.icon)===null||v===void 0?void 0:v.call(e))||m(se,null,null):$,Z=t.mouseEnterDelay,ee=t.mouseLeaveDelay,te=t.overlayClassName,ne=t.overlayStyle,oe=t.destroyPopupOnHide,ae=t.onClick;t["onUpdate:visible"];var re=me(t,["type","disabled","loading","htmlType","class","overlay","trigger","align","visible","onVisibleChange","placement","href","title","icon","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle","destroyPopupOnHide","onClick","onUpdate:visible"]),le={align:y,disabled:o,trigger:o?[]:O,placement:B,getPopupContainer:j.value,onVisibleChange:C,mouseEnterDelay:Z,mouseLeaveDelay:ee,visible:f,overlayClassName:te,overlayStyle:ne,destroyPopupOnHide:oe},L=m(V,{type:n,disabled:o,loading:l,onClick:ae,htmlType:b,href:A,title:K},{default:e.default}),R=m(V,{type:n,icon:Q},null);return m(ge,k(k({},re),{},{class:I(N.value,p)}),{default:function(){return[e.leftButton?e.leftButton({button:L}):L,m(D,le,{default:function(){return[e.rightButton?e.rightButton({button:R}):R]},overlay:function(){return P}})]}})}}});var J=W({name:"ADropdown",inheritAttrs:!1,props:X(q(),{mouseEnterDelay:.15,mouseLeaveDelay:.1,placement:"bottomLeft",trigger:"hover"}),slots:["overlay"],setup:function(a,s){var e=s.slots,d=s.attrs,_=s.emit,C=Y("dropdown",a),u=C.prefixCls,N=C.rootPrefixCls,x=C.direction,j=C.getPopupContainer,h=H(function(){var n=a.placement,o=n===void 0?"":n,l=a.transitionName;return l!==void 0?l:o.indexOf("top")>=0?"".concat(N.value,"-slide-down"):"".concat(N.value,"-slide-up")}),v=function(){var o,l,b,c=a.overlay||((o=e.overlay)===null||o===void 0?void 0:o.call(e)),p=Array.isArray(c)?c[0]:c;if(!p)return null;var i=p.props||{};U(!i.mode||i.mode==="vertical","Dropdown",'mode="'.concat(i.mode,`" is not supported for Dropdown's Menu.`));var P=i.selectable,O=P===void 0?!1:P,y=i.expandIcon,f=y===void 0?(b=(l=p.children)===null||l===void 0?void 0:l.expandIcon)===null||b===void 0?void 0:b.call(l):y,w=typeof f<"u"&&G(f)?f:m("span",{class:"".concat(u.value,"-menu-submenu-arrow")},[m(ue,{class:"".concat(u.value,"-menu-submenu-arrow-icon")},null)]),B=G(p)?M(p,{mode:"vertical",selectable:O,expandIcon:function(){return w}}):p;return B},t=H(function(){var n=a.placement;if(!n)return x.value==="rtl"?"bottomRight":"bottomLeft";if(n.includes("Center")){var o=n.slice(0,n.indexOf("Center"));return U(!n.includes("Center"),"Dropdown","You are using '".concat(n,"' placement in Dropdown, which is deprecated. Try to use '").concat(o,"' instead.")),o}return n}),S=function(o){_("update:visible",o),_("visibleChange",o)};return function(){var n,o,l=a.arrow,b=a.trigger,c=a.disabled,p=a.overlayClassName,i=(n=e.default)===null||n===void 0?void 0:n.call(e)[0],P=M(i,g({class:I((o=i==null?void 0:i.props)===null||o===void 0?void 0:o.class,F({},"".concat(u.value,"-rtl"),x.value==="rtl"),"".concat(u.value,"-trigger"))},c?{disabled:c}:{})),O=I(p,F({},"".concat(u.value,"-rtl"),x.value==="rtl")),y=c?[]:b,f;y&&y.indexOf("contextmenu")!==-1&&(f=!0);var w=ce({arrowPointAtCenter:de(l)==="object"&&l.pointAtCenter,autoAdjustOverflow:!0}),B=ye(g(g(g({},a),d),{builtinPlacements:w,overlayClassName:O,arrow:l,alignPoint:f,prefixCls:u.value,getPopupContainer:j.value,transitionName:h.value,trigger:y,onVisibleChange:S,placement:t.value}),["overlay","onUpdate:visible"]);return m(pe,B,{default:function(){return[P]},overlay:v})}}});J.Button=T;const D=J;D.Button=T;D.install=function(r){return r.component(D.name,D),r.component(T.name,T),r};export{D};