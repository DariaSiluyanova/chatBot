import{p as P,i as N,c as v,r as se,a as z,g as le,s as Z,o as D,b as ue,d as L,f as ie,e as re,h as F,j as b,k as ce,l as K,m as X,w as U,n as ve,q as pe,u as de}from"./index-edb76509.js";import{u as me,m as W,a as fe,b as Y}from"./tag-99ee5fe4.js";const B=Symbol.for("vuetify:layout"),ye=Symbol.for("vuetify:layout-item"),q=1e3,ge=P({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout");function he(){const e=N(B);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}const be=(e,u,n,s)=>{let l={top:0,left:0,right:0,bottom:0};const i=[{id:"",layer:{...l}}];for(const r of e){const m=u.get(r),y=n.get(r),g=s.get(r);if(!m||!y||!g)continue;const _={...l,[m.value]:parseInt(l[m.value],10)+(g.value?parseInt(y.value,10):0)};i.push({id:r,layer:_}),l=_}return i};function _e(e){const u=N(B,null),n=v(()=>u?u.rootZIndex.value-100:q),s=se([]),l=z(new Map),i=z(new Map),r=z(new Map),m=z(new Map),y=z(new Map),{resizeRef:g,contentRect:_}=me(),G=v(()=>{const o=new Map,p=e.overlaps??[];for(const t of p.filter(c=>c.includes(":"))){const[c,a]=t.split(":");if(!s.value.includes(c)||!s.value.includes(a))continue;const f=l.get(c),h=l.get(a),S=i.get(c),V=i.get(a);!f||!h||!S||!V||(o.set(a,{position:f.value,amount:parseInt(S.value,10)}),o.set(c,{position:h.value,amount:-parseInt(V.value,10)}))}return o}),x=v(()=>{const o=[...new Set([...r.values()].map(t=>t.value))].sort((t,c)=>t-c),p=[];for(const t of o){const c=s.value.filter(a=>{var f;return((f=r.get(a))==null?void 0:f.value)===t});p.push(...c)}return be(p,l,i,m)}),k=v(()=>!Array.from(y.values()).some(o=>o.value)),w=v(()=>x.value[x.value.length-1].layer),J=v(()=>({"--v-layout-left":L(w.value.left),"--v-layout-right":L(w.value.right),"--v-layout-top":L(w.value.top),"--v-layout-bottom":L(w.value.bottom),...k.value?void 0:{transition:"none"}})),I=v(()=>x.value.slice(1).map((o,p)=>{let{id:t}=o;const{layer:c}=x.value[p],a=i.get(t),f=l.get(t);return{id:t,...c,size:Number(a.value),position:f.value}})),O=o=>I.value.find(p=>p.id===o),M=le("createLayout"),T=Z(!1);D(()=>{T.value=!0}),ue(B,{register:(o,p)=>{let{id:t,order:c,position:a,layoutSize:f,elementSize:h,active:S,disableTransitions:V,absolute:te}=p;r.set(t,c),l.set(t,a),i.set(t,f),m.set(t,S),V&&y.set(t,V);const H=ie(ye,M==null?void 0:M.vnode).indexOf(o);H>-1?s.value.splice(H,0,t):s.value.push(t);const E=v(()=>I.value.findIndex($=>$.id===t)),R=v(()=>n.value+x.value.length*2-E.value*2),oe=v(()=>{const $=a.value==="left"||a.value==="right",C=a.value==="right",ae=a.value==="bottom",j={[a.value]:0,zIndex:R.value,transform:`translate${$?"X":"Y"}(${(S.value?0:-110)*(C||ae?-1:1)}%)`,position:te.value||n.value!==q?"absolute":"fixed",...k.value?void 0:{transition:"none"}};if(!T.value)return j;const d=I.value[E.value];if(!d)throw new Error(`[Vuetify] Could not find layout item "${t}"`);const A=G.value.get(t);return A&&(d[A.position]+=A.amount),{...j,height:$?`calc(100% - ${d.top}px - ${d.bottom}px)`:h.value?`${h.value}px`:void 0,left:C?void 0:`${d.left}px`,right:C?`${d.right}px`:void 0,top:a.value!=="bottom"?`${d.top}px`:void 0,bottom:a.value!=="top"?`${d.bottom}px`:void 0,width:$?h.value?`${h.value}px`:void 0:`calc(100% - ${d.left}px - ${d.right}px)`}}),ne=v(()=>({zIndex:R.value-1}));return{layoutItemStyles:oe,layoutItemScrimStyles:ne,zIndex:R}},unregister:o=>{r.delete(o),l.delete(o),i.delete(o),m.delete(o),y.delete(o),s.value=s.value.filter(p=>p!==o)},mainRect:w,mainStyles:J,getLayoutItem:O,items:I,layoutRect:_,rootZIndex:n});const Q=v(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),ee=v(()=>({zIndex:u?n.value:void 0,position:u?"relative":void 0,overflow:u?"hidden":void 0}));return{layoutClasses:Q,layoutStyles:ee,getLayoutItem:O,items:I,layoutRect:_,layoutRef:g}}function xe(){const e=Z(!1);return D(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:v(()=>e.value?void 0:{transition:"none !important"}),isBooted:re(e)}}const we=P({scrollable:Boolean,...W(),...fe({tag:"main"})},"VMain"),Ie=F()({name:"VMain",props:we(),setup(e,u){let{slots:n}=u;const{mainStyles:s}=he(),{ssrBootStyles:l}=xe();return Y(()=>b(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[s.value,l.value,e.style]},{default:()=>{var i,r;return[e.scrollable?b("div",{class:"v-main__scroller"},[(i=n.default)==null?void 0:i.call(n)]):(r=n.default)==null?void 0:r.call(n)]}})),{}}}),Se={__name:"View",setup(e){return(u,n)=>{const s=ce("router-view");return K(),X(Ie,{class:"pa-8 pa-sm-12"},{default:U(()=>[b(s)]),_:1})}}};const Ve=P({...W(),...ge({fullHeight:!0}),...ve()},"VApp"),$e=F()({name:"VApp",props:Ve(),setup(e,u){let{slots:n}=u;const s=pe(e),{layoutClasses:l,getLayoutItem:i,items:r,layoutRef:m}=_e(e),{rtlClasses:y}=de();return Y(()=>{var g;return b("div",{ref:m,class:["v-application",s.themeClasses.value,l.value,y.value,e.class],style:[e.style]},[b("div",{class:"v-application__wrap"},[(g=n.default)==null?void 0:g.call(n)])])}),{getLayoutItem:i,items:r,theme:s}}}),Re={__name:"Default",setup(e){return(u,n)=>(K(),X($e,null,{default:U(()=>[b(Se)]),_:1}))}};export{Re as default};
