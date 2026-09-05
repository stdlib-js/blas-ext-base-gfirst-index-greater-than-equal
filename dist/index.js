"use strict";var y=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var g=y(function(z,d){
function T(a,r,e,u,t,v,f){var s,n,o,c,i,x,q;for(s=r.data,n=t.data,o=r.accessors[0],c=t.accessors[0],i=u,x=f,q=0;q<a;q++){if(o(s,i)>=c(n,x))return q;i+=e,x+=v}return-1}d.exports=T
});var l=y(function(A,b){
var p=require('@stdlib/array-base-arraylike2object/dist'),P=g();function j(a,r,e,u,t,v,f){var s,n,o,c,i;if(a<=0)return-1;if(o=p(r),c=p(t),o.accessorProtocol||c.accessorProtocol)return P(a,o,e,u,c,v,f);for(s=u,n=f,i=0;i<a;i++){if(r[s]>=t[n])return i;s+=e,n+=v}return-1}b.exports=j
});var G=y(function(B,E){
var h=require('@stdlib/strided-base-stride2offset/dist'),k=l();function m(a,r,e,u,t){return k(a,r,e,h(a,e),u,t,h(a,t))}E.exports=m
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),I=G(),R=l();O(I,"ndarray",R);module.exports=I;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
