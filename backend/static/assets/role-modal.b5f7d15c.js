import"./default.76e08716.js";import{M as F}from"./index.cef07818.js";import"./index.0857d90f.js";import{I as T,_ as S,F as U}from"./index.0e96b1ad.js";import"./index.b2c65497.js";import"./index.5ec54e89.js";import{_ as N}from"./index.ced49a81.js";import{a as O,p as q}from"./role.efebb491.js";import{a as D,r as c,H as $,o as j,b as B,e as l,w as m,f as k,a$ as P,cI as z,u as E,c$ as H}from"./index.ab0d47a4.js";import{g as V}from"./menu.5caae388.js";import{u as A}from"./useModal.67c34fed.js";const oe=[{title:"ID",dataIndex:"id",key:"id"},{title:"\u540D\u79F0",dataIndex:"name",key:"name"},{title:"\u63CF\u8FF0",dataIndex:"remark",key:"remark"},{title:"\u72B6\u6001",dataIndex:"status",key:"status"},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"created",key:"created"},{title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"modified",key:"modified"},{title:"\u64CD\u4F5C",key:"action"}],G={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:"blur"},{min:3,max:12,message:"3-12",trigger:"blur"}],remark:[{required:!0,message:"\u8BF7\u8F93\u5165\u63CF\u8FF0",trigger:"blur"},{min:1,max:20,message:"1~20",trigger:"blur"}],menus:[{required:!0,message:"\u8BF7\u9009\u62E9\u83DC\u5355",trigger:"blur"}]},J={key:"id",title:"name",children:"children"},L={class:"modal"},Q={__name:"role-modal",props:{modalTitle:{type:String},modalType:{type:String,default:"create"}},setup(v,{expose:b}){const h=v,{showModal:s,updateId:y,formRef:p}=A(),t=D({name:"",remark:"",menus:[]}),g=c(),M=c();$(s,async a=>{if(a){const e=await V();g.value=e.data}});const d=c([]),f=c([]),I=(a,e)=>{t.menus=[...e.halfCheckedKeys,...a]},K=a=>{let e=[],r=[];return H(a.id).then(u=>{function i(_){for(const o of _)e.push(o.id),o.children?i(o.children):r.push(o.id)}i(u.data)}),{allMenus:e,checkMenus:r}},w=a=>{s.value=!0;const{allMenus:e,checkMenus:r}=K(a);y.value=a.id,t.name=a.name,t.remark=a.remark,d.value=r,t.menus=e},x=()=>{p.value.resetFields(),d.value=[],f.value=[]},R=()=>{p.value.validateFields().then(async()=>{let a;h.modalType==="create"?a=await O(t):a=await q(y.value,t),z(a),x(),s.value=!s.value,E().isPush=!0})},C=()=>{x()};return b({showModal:s,openModal:w}),(a,e)=>{const r=T,u=S,i=N,_=U,o=F;return j(),B("div",L,[l(o,{visible:k(s),"onUpdate:visible":e[4]||(e[4]=n=>P(s)?s.value=n:null),title:v.modalTitle,"ok-text":"\u786E\u8BA4","cancel-text":"\u53D6\u6D88",onOk:R,onCancel:C},{default:m(()=>[l(_,{ref_key:"formRef",ref:p,model:t,rules:k(G)},{default:m(()=>[l(u,{name:"name",label:"\u540D\u79F0"},{default:m(()=>[l(r,{value:t.name,"onUpdate:value":e[0]||(e[0]=n=>t.name=n)},null,8,["value"])]),_:1}),l(u,{name:"remark",label:"\u63CF\u8FF0"},{default:m(()=>[l(r,{value:t.remark,"onUpdate:value":e[1]||(e[1]=n=>t.remark=n)},null,8,["value"])]),_:1}),l(u,{name:"menus",label:"\u83DC\u5355"},{default:m(()=>[l(i,{ref_key:"treeRef",ref:M,checkable:"","tree-data":g.value,fieldNames:k(J),onCheck:I,checkedKeys:d.value,"onUpdate:checkedKeys":e[2]||(e[2]=n=>d.value=n),expandedKeys:f.value,"onUpdate:expandedKeys":e[3]||(e[3]=n=>f.value=n)},null,8,["tree-data","fieldNames","checkedKeys","expandedKeys"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["visible","title"])])}}},ue=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"}));export{Q as _,oe as c,ue as r};
