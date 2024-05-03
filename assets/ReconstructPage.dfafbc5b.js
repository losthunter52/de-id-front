import{Q as T,P as k,a as Q}from"./papaparse.min.0cc7f589.js";import{_ as C,a3 as V,r as d,a4 as _,K as v,a5 as q,N as m,M as p,R as B,L as w,Q as F,a8 as M,a6 as P,P as A,I as E,J as I}from"./index.ac53a0ac.js";import{Q as y}from"./QCard.6ac09fa6.js";import{Q as N,e as $}from"./export-file.5a432e7b.js";import{u as O}from"./use-quasar.b4aa5328.js";import{r as L}from"./routers.4230d415.js";import"./QCheckbox.6a822b03.js";import"./use-key-composition.68ad8c4b.js";import"./use-dark.8e8f74ff.js";import"./format.2e9e377a.js";import"./selection.3b14088c.js";import"./QSeparator.46040585.js";import"./QList.7a899dbc.js";const U={setup(){const i=O();V();const c=d(null),h=_(),a=d(h.isAuthenticated),o=d({shares:null}),f=d(!1),u=d(null),n=d(null);function S(){const r=[n.value.map(s=>x(s.label))].concat(u.value.map(s=>n.value.map(e=>x(typeof e.field=="function"?e.field(s):s[e.field===void 0?e.name:e.field])).join(","))).join(`\r
`);$("doc.csv",r,"text/csv")!==!0&&i.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}function x(r,t,s){let e=t!==void 0?t(r,s):r;return e=e==null?"":String(e),e=e.split('"').join('""'),`"${e}"`}async function b(){try{const r=_();let t=null;!1 in n.value?t="Missing Algorithm Column":!1 in n.value?t="Missing X Column":!1 in n.value&&(t="Missing Y Column");let s="";if(o.value.shares[0].algorithm=="split.pvss"?(!1 in n.value?t="Missing encrypted_text Column":!1 in n.value&&(t="Missing modulus Column"),o.value.encrypted_text=o.value.shares[0].encrypted_text,o.value.modulus=o.value.shares[0].modulus,s="reconstruct.pvss"):o.value.shares[0].algorithm!="split.shamir"?t="Algorithm not Found":s="reconstruct.shamir",t){i.notify({color:"red",textColor:"white",icon:"error",message:t});return}o.value.shares.forEach(function(l){l.x=parseInt(l.x),l.y=l.y,delete l.algorithm,delete l.modulus,delete l.encrypted_text});const e=await fetch(L.RECONSCTRUCT,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Token ${r.token}`},body:JSON.stringify({data:o.value,execution_parameters:{algorithm:s,n:o.value.shares.length,k:o.value.shares.length}})});if(e.ok){const l=await e.json();n.value=Object.keys(l[0]).map(g=>({name:g,label:g,field:g,sortable:!0})),u.value=l,f.value=!0}else i.notify({color:"red",textColor:"white",icon:"error",message:"Bad Request ".concat(e.status)})}catch(r){i.notify({color:"red",textColor:"white",icon:"error",message:" ".concat(r)})}}function R(){try{if(c.value){const r=c.value[0],t=new FileReader;t.onload=s=>{k.parse(s.target.result,{header:!0,complete:e=>{n.value=Object.keys(e.data[0]),o.value.shares=e.data,b()},error:e=>{i.notify({color:"red",textColor:"white",icon:"error",message:`Error parsing CSV: '${e.message}'`})}})},t.readAsText(r)}}catch(r){i.notify({color:"red",textColor:"white",icon:"error",message:`Error reading file: '${r}'`})}}return{files:c,userLoggedIn:a,fileContent:o,showTable:f,columns:n,uploadFile:R,rows:u,exportTable:S}}},J=A("div",{class:"text-h6 q-pb-md q-pl-sm"},"Reconstruct",-1);function j(i,c,h,a,o,f){return v(),q(P,null,[m(y,{class:"q-pa-md q-ma-md"},{default:p(()=>[J,m(T,{modelValue:a.files,"onUpdate:modelValue":[c[0]||(c[0]=u=>a.files=u),a.uploadFile],label:"Drop or Select a File...",filled:"","max-files":"1",multiple:"",class:"custom-file-input",disable:!a.userLoggedIn,readonly:a.showTable,accept:".csv"},{prepend:p(()=>[m(B,{name:"attach_file",class:"file-icon"})]),_:1},8,["modelValue","disable","readonly","onUpdate:modelValue"])]),_:1}),a.showTable?(v(),w(y,{key:0,class:"q-pa-md q-ma-md"},{default:p(()=>[m(N,{flat:"",bordered:"",dense:"",title:"title",rows:a.rows,columns:a.columns,"row-key":"x"},{"top-right":p(()=>[m(F,{color:"primary","icon-right":"archive",label:"Export to CSV","no-caps":"",onClick:a.exportTable},null,8,["onClick"])]),_:1},8,["rows","columns"])]),_:1})):M("",!0)],64)}var z=C(U,[["render",j]]);const D=E({name:"IndexPage",components:{ReconstructShare:z}});function K(i,c,h,a,o,f){const u=I("ReconstructShare");return v(),w(Q,null,{default:p(()=>[m(u)]),_:1})}var le=C(D,[["render",K]]);export{le as default};
