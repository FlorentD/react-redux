(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{723:function(e,t,a){"use strict";a.r(t);a(419);var n=a(1),c=a.n(n),r=a(6),l=a.n(r),i=a(23),s=a.n(i),o=a(24),d=a.n(o),u=a(25),m=a.n(u),p=a(26),b=a.n(p),h=a(12),f=a.n(h),j=a(27),O=a.n(j),N=a(2),E=a.n(N),k=a(8),v=a.n(k),g=(a(0),a(33)),x=a(181),y=a(180),C=a(9),w=a(389),A=(a(56),a(301));function P(e){var t=e.children,a=e.className,n=e.content,r=e.textAlign,i=v()(Object(g.c)(r),"description",a),s=Object(x.a)(P,e),o=Object(y.a)(P,e);return c.a.createElement(o,l()({},s,{className:i}),C.a.isNil(t)?n:t)}P.handledProps=["as","children","className","content","textAlign"],P.propTypes={};var G=P;function T(e){var t=e.children,a=e.className,n=e.content,r=e.textAlign,i=v()(Object(g.c)(r),"header",a),s=Object(x.a)(T,e),o=Object(y.a)(T,e);return c.a.createElement(o,l()({},s,{className:i}),C.a.isNil(t)?n:t)}T.handledProps=["as","children","className","content","textAlign"],T.propTypes={};var K=T;function H(e){var t=e.children,a=e.className,n=e.content,r=e.textAlign,i=v()(Object(g.c)(r),"meta",a),s=Object(x.a)(H,e),o=Object(y.a)(H,e);return c.a.createElement(o,l()({},s,{className:i}),C.a.isNil(t)?n:t)}H.handledProps=["as","children","className","content","textAlign"],H.propTypes={};var J=H;function M(e){var t=e.children,a=e.className,n=e.content,r=e.description,i=e.extra,s=e.header,o=e.meta,d=e.textAlign,u=v()(Object(g.a)(i,"extra"),Object(g.c)(d),"content",a),m=Object(x.a)(M,e),p=Object(y.a)(M,e);return C.a.isNil(t)?C.a.isNil(n)?c.a.createElement(p,l()({},m,{className:u}),Object(A.b)(K,(function(e){return{content:e}}),s,{autoGenerateKey:!1}),Object(A.b)(J,(function(e){return{content:e}}),o,{autoGenerateKey:!1}),Object(A.b)(G,(function(e){return{content:e}}),r,{autoGenerateKey:!1})):c.a.createElement(p,l()({},m,{className:u}),n):c.a.createElement(p,l()({},m,{className:u}),t)}M.handledProps=["as","children","className","content","description","extra","header","meta","textAlign"],M.propTypes={};var R=M,D=a(111),F=a.n(D);function S(e){var t=e.centered,a=e.children,n=e.className,r=e.content,i=e.doubling,s=e.items,o=e.itemsPerRow,d=e.stackable,u=e.textAlign,m=v()("ui",Object(g.a)(t,"centered"),Object(g.a)(i,"doubling"),Object(g.a)(d,"stackable"),Object(g.c)(u),Object(g.f)(o),"cards",n),p=Object(x.a)(S,e),b=Object(y.a)(S,e);if(!C.a.isNil(a))return c.a.createElement(b,l()({},p,{className:m}),a);if(!C.a.isNil(r))return c.a.createElement(b,l()({},p,{className:m}),r);var h=F()(s,(function(e){var t=e.key||[e.header,e.description].join("-");return c.a.createElement(z,l()({key:t},e))}));return c.a.createElement(b,l()({},p,{className:m}),h)}S.handledProps=["as","centered","children","className","content","doubling","items","itemsPerRow","stackable","textAlign"],S.propTypes={};var q=S,z=function(e){function t(){var e,a;s()(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return a=m()(this,(e=b()(t)).call.apply(e,[this].concat(c))),E()(f()(a),"handleClick",(function(e){var t=a.props.onClick;t&&t(e,a.props)})),a}return O()(t,e),d()(t,[{key:"render",value:function(){var e=this.props,a=e.centered,n=e.children,r=e.className,i=e.color,s=e.content,o=e.description,d=e.extra,u=e.fluid,m=e.header,p=e.href,b=e.image,h=e.link,f=e.meta,j=e.onClick,O=e.raised,N=v()("ui",i,Object(g.a)(a,"centered"),Object(g.a)(u,"fluid"),Object(g.a)(h,"link"),Object(g.a)(O,"raised"),"card",r),E=Object(x.a)(t,this.props),k=Object(y.a)(t,this.props,(function(){if(j)return"a"}));return C.a.isNil(n)?C.a.isNil(s)?c.a.createElement(k,l()({},E,{className:N,href:p,onClick:this.handleClick}),w.a.create(b,{autoGenerateKey:!1,defaultProps:{ui:!1,wrapped:!0}}),(o||m||f)&&c.a.createElement(R,{description:o,header:m,meta:f}),d&&c.a.createElement(R,{extra:!0},d)):c.a.createElement(k,l()({},E,{className:N,href:p,onClick:this.handleClick}),s):c.a.createElement(k,l()({},E,{className:N,href:p,onClick:this.handleClick}),n)}}]),t}(n.Component);E()(z,"Content",R),E()(z,"Description",G),E()(z,"Group",q),E()(z,"Header",K),E()(z,"Meta",J),E()(z,"handledProps",["as","centered","children","className","color","content","description","extra","fluid","header","href","image","link","meta","onClick","raised"]),z.propTypes={};var B=a(179),I=a(28),L=a(364),Q=Object(I.f)((function(e){var t=e.children,a=e.staticContext,c=Object(B.b)();return Object(n.useEffect)((function(){a&&a.fromServer||c(Object(L.b)())}),[]),t(Object(B.c)(L.c))}));t.default=function(){return c.a.createElement(Q,null,(function(e){return c.a.createElement(z.Group,null,e.map((function(e){return c.a.createElement(z,{key:e.id},c.a.createElement(w.a,{src:e.image,wrapped:!0}),c.a.createElement(z.Content,null,c.a.createElement(z.Header,null,e.title),c.a.createElement(z.Meta,null,"Film.")))})))}))}}}]);