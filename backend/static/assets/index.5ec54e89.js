import{a8 as C,a9 as g,aa as y,ab as x,E,c as F,r as _,H as b,i as c,R as h,y as r,a5 as w}from"./index.ab0d47a4.js";function R(e){return C(e)||g(e)||y(e)||x()}function A(e){e.target.composing=!0}function v(e){!e.target.composing||(e.target.composing=!1,K(e.target,"input"))}function K(e,o){var t=document.createEvent("HTMLEvents");t.initEvent(o,!0,!0),e.dispatchEvent(t)}function d(e,o,t,n){e.addEventListener(o,t,n)}var M={created:function(o,t){(!t.modifiers||!t.modifiers.lazy)&&(d(o,"compositionstart",A),d(o,"compositionend",v),d(o,"change",v))}};const S=M;var i=Symbol("ContextProps"),m=Symbol("InternalContextProps"),j=function(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:F(function(){return!0}),n=_(new Map),a=function(u,p){n.value.set(u,p),n.value=new Map(n.value)},f=function(u){n.value.delete(u),n.value=new Map(n.value)};b([t,n],function(){}),r(i,o),r(m,{addFormItemField:a,removeFormItemField:f})},s={id:F(function(){}),onFieldBlur:function(){},onFieldChange:function(){},clearValidate:function(){}},l={addFormItemField:function(){},removeFormItemField:function(){}},B=function(){var o=c(m,l),t=Symbol("FormItemFieldKey"),n=w();return o.addFormItemField(t,n.type),h(function(){o.removeFormItemField(t)}),r(m,l),r(i,s),c(i,s)};const H=E({name:"AFormItemRest",setup:function(o,t){var n=t.slots;return r(m,l),r(i,s),function(){var a;return(a=n.default)===null||a===void 0?void 0:a.call(n)}}});export{H as F,R as _,j as a,S as b,B as u};