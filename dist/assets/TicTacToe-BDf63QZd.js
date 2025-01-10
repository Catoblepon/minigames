import{_ as V,g as S,o as v,c as s,n as h,t as c,h as k,b as r,w as x,v as z,r as o,i as B,d as T,j as A,a as I,u as D,F as M,p as N,f as $}from"./index--AkE-SBE.js";const F={class:"toggle-switch"},L={__name:"toggle",props:{modelValue:{type:Boolean,required:!0},labelBefore:{type:String,default:""},labelAfter:{type:String,default:""},size:{type:String,default:"small"}},emits:["update:modelValue"],setup(a,{emit:e}){const i=a,d=e,t=S({get(){return i.modelValue},set(u){d("update:modelValue",u)}}),f=()=>{d("update:modelValue",t.value)};return(u,m)=>(v(),s("div",F,[a.labelBefore?(v(),s("span",{key:0,class:h(["toggle-label textLeft",a.size])},c(a.labelBefore),3)):k("",!0),r("label",{class:h(["switch",a.size])},[x(r("input",{type:"checkbox","onUpdate:modelValue":m[0]||(m[0]=p=>t.value=p),onChange:f},null,544),[[z,t.value]]),r("span",{class:h(["slider round",a.size])},null,2)],2),a.labelAfter?(v(),s("span",{key:1,class:h(["toggle-label textRight",a.size])},c(a.labelAfter),3)):k("",!0)]))}},E=V(L,[["__scopeId","data-v-6e33bc83"]]),O=a=>(N("data-v-972bbbe2"),a=a(),$(),a),R=O(()=>r("h1",null,"Tic Tac Toe",-1)),U={class:"grid"},W=["onClick"],j={key:0},q={key:1},G={class:"row"},H={class:"textLeft"},P={class:"textRight"},X={__name:"TicTacToe",setup(a){const e=o(["","","","","","","","",""]),i=o(localStorage.getItem("ticTacToe_Difficulty")),d=o(i.value==="easy"),t=o("X"),f=o("O"),u=o("");B(d,l=>{i.value=l?"easy":"hard",localStorage.setItem("ticTacToe_Difficulty",i.value)});function m(l){e.value[l]===""&&u.value===""&&(e.value[l]=t.value,b(t.value),u.value===""&&e.value.filter(n=>n==="").length>1?(d.value?p():w(),b(f.value)):u.value===""&&(u.value="It's a tie!"))}function p(){let l;do l=Math.floor(Math.random()*9);while(e.value[l]!=="");e.value[l]=f.value}function w(){const l=o(y(f.value));l.value===null&&(l.value=y(t.value)),l.value===null&&p(),e.value[l.value]=f.value}function y(l){return(e.value[1]===l&&e.value[2]===l||e.value[3]===l&&e.value[6]===l||e.value[4]===l&&e.value[8]===l)&&e.value[0]===""?0:(e.value[0]===l&&e.value[2]===l||e.value[4]===l&&e.value[7]===l)&&e.value[1]===""?1:(e.value[0]===l&&e.value[1]===l||e.value[5]===l&&e.value[8]===l||e.value[4]===l&&e.value[6]===l)&&e.value[2]===""?2:(e.value[4]===l&&e.value[5]===l||e.value[0]===l&&e.value[6]===l)&&e.value[3]===""?3:(e.value[3]===l&&e.value[5]===l||e.value[1]===l&&e.value[7]===l||e.value[0]===l&&e.value[8]===l)&&e.value[4]===""?4:(e.value[3]===l&&e.value[4]===l||e.value[2]===l&&e.value[8]===l)&&e.value[5]===""?5:(e.value[7]===l&&e.value[8]===l||e.value[0]===l&&e.value[3]===l||e.value[4]===l&&e.value[2]===l)&&e.value[6]===""?6:(e.value[6]===l&&e.value[8]===l||e.value[1]===l&&e.value[4]===l)&&e.value[7]===""?7:(e.value[6]===l&&e.value[7]===l||e.value[2]===l&&e.value[5]===l||e.value[1]===l&&e.value[4]===l)&&e.value[8]===""?8:null}function b(l){(e.value[0]===l&&e.value[1]===l&&e.value[2]===l||e.value[3]===l&&e.value[4]===l&&e.value[5]===l||e.value[6]===l&&e.value[7]===l&&e.value[8]===l||e.value[0]===l&&e.value[3]===l&&e.value[6]===l||e.value[1]===l&&e.value[4]===l&&e.value[7]===l||e.value[2]===l&&e.value[5]===l&&e.value[8]===l||e.value[0]===l&&e.value[4]===l&&e.value[8]===l||e.value[2]===l&&e.value[4]===l&&e.value[6]===l)&&(l===t.value?u.value="Congratulations, you won!":u.value="Sorry, you lost!")}function C(){e.value=e.value.map(()=>""),u.value=""}return(l,n)=>(v(),s(T,null,[R,r("div",U,[(v(!0),s(T,null,A(e.value,(g,_)=>(v(),s("div",{class:"cell",key:_,onClick:J=>m(_)},c(g),9,W))),128))]),u.value?(v(),s("h2",q,c(u.value),1)):(v(),s("h2",j,"Select a cell!")),r("div",G,[r("div",H,[I(E,{modelValue:d.value,"onUpdate:modelValue":n[0]||(n[0]=g=>d.value=g),labelBefore:"Hard",labelAfter:"Easy",size:"big"},null,8,["modelValue"])]),r("div",P,[I(D(M),{class:"hover-spin",icon:"rotate-left",spin:"","spin-reverse":"",size:"xl",onClick:n[1]||(n[1]=g=>C())})])])],64))}},Q=V(X,[["__scopeId","data-v-972bbbe2"]]);export{Q as default};
