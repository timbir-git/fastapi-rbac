import{_ as h,u as R,r as p,a as d,a4 as b,b0 as S,o as w,b as x,aF as z,e as c,f as m,bi as M}from"./index.851d8163.js";import{T as Q}from"./table.ac36eeac.js";import{g as T,q as D,d as P}from"./role.88369262.js";import{c as q,R as B}from"./role-modal.5309ae50.js";import F from"./role-search.3cadac36.js";import"./default.76e08716.js";import"./index.0af4fdf5.js";import"./KeyCode.59783313.js";import"./index.ef75ced5.js";import"./useState.ea7c1088.js";import"./useFlexGapSupport.66243b53.js";import"./index.e60ac993.js";import"./index.fa696f9c.js";import"./index.47c5c8b2.js";import"./index.8ab58dcd.js";import"./index.5fedb982.js";import"./index.647ff16d.js";import"./index.338b79aa.js";import"./List.994b17ce.js";import"./index.0c753e44.js";import"./index.6e8bd907.js";import"./index.4ab42408.js";import"./iconUtil.8455fcc7.js";import"./index.e69fb0f0.js";import"./conf.f5df1cf4.js";import"./index.1cfbeee5.js";import"./Password.063f365c.js";import"./menu.967b72d4.js";import"./useModal.960570e2.js";import"./useSearch.7236db79.js";const N={class:"role"},V={__name:"role",setup($){R().$subscribe((e,t)=>{t.isPush&&(a(),t.isPush=!1)});const r=p(!1),l=p([]),o=d({current:1,pageSize:5,total:0,pageSizeOptions:["5","10","50"],showTotal:e=>`\u5171 ${e} \u6761\u6570\u636E`,onChange:(e,t)=>{o.current=e,o.pageSize=t,a()}});b(()=>{a()});const a=(e=null)=>{let t=o.current,u=o.pageSize;r.value?D({offset:t,limit:u,name:e==null?void 0:e.name}).then(i=>{l.value=i.data.items,o.total=i.data.total}):T({offset:t,limit:u}).then(i=>{l.value=i.data.items,o.total=i.data.total})},_=e=>{r.value=!0,a(e)},f=()=>{r.value=!1,a()},y=async e=>{const t=await P(e.id);M(t),a()},n=p(),s=d({title:"",type:""}),g=()=>{s.title="\u65B0\u589E\u89D2\u8272",s.type="create",n.value.showModal=!0},v=e=>{s.title="\u7F16\u8F91\u89D2\u8272",s.type="update",n.value.openModal(e)},{title:C,type:k}=S(s);return(e,t)=>(w(),x("div",N,[z(" \u67E5\u8BE2 "),c(F,{onQueryClick:_,onResetClick:f}),c(Q,{columns:m(q),"data-source":l.value,pagination:o,"page-name":"role","list-title":"\u89D2\u8272\u5217\u8868",onCreateClick:g,onUpdateClick:v,onDeleteClick:y},null,8,["columns","data-source","pagination"]),c(B,{ref_key:"modalRef",ref:n,"modal-title":m(C),"modal-type":m(k)},null,8,["modal-title","modal-type"])]))}},ye=h(V,[["__scopeId","data-v-90e540db"],["__file","D:/Code/fastapi_rbac/frontend/src/views/main/system/role/role.vue"]]);export{ye as default};
