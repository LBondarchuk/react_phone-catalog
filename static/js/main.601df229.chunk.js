(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{39:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var s,i=c(13),a=c.n(i),r=c(6),n=c(8),l=c(31),o=c(4),j=(c(39),c(1)),u=c.n(j),d=c(3),b=c(9),h=c.n(b),m=c(0),O=function(e){var t=e.type,c=e.onChangePosition,s=e.stop;return Object(m.jsx)("button",{type:"submit",className:"arrow__button arrow__button--".concat(t),onClick:c,disabled:s,children:Object(m.jsx)("img",{src:"assests/images/Arrow-right".concat(s?"-gray":"",".svg"),alt:"arrow button"})})},x=Object(j.memo)((function(e){var t=e.subtitle,c=e.title;return Object(m.jsxs)("div",{className:"title",children:[Object(m.jsx)("h1",{className:"title__title",children:c}),(t>0||"Favourites"===c)&&Object(m.jsx)("div",{className:"title__subtitle",children:"".concat(t," items")})]})}));!function(e){e.Phones="phones",e.Tablets="tablets",e.Accessories="accessories"}(s||(s={}));var f=Object(j.memo)((function(e){var t=e.itemsLength;return Object(m.jsx)("section",{className:"categories","data-cy":"categoryLinksContainer",children:Object(m.jsxs)("div",{className:"categories__content",children:[Object(m.jsx)("h1",{className:"categories__title",children:"Shop by category"}),Object(m.jsx)("article",{className:"categories__items",children:Object.values(s).map((function(e){return Object(m.jsxs)(r.b,{to:e.toLowerCase(),className:"categories__item",children:[Object(m.jsx)("img",{src:"_new/img/".concat(e,".png"),alt:""}),Object(m.jsx)("div",{className:"categories__item--title",children:e}),Object(m.jsx)("div",{className:"categories__item--total-amount",children:"".concat(e===s.Phones?t:0," models")})]},e)}))})]})})})),p=function(){return Object(m.jsx)("footer",{className:"footer",children:Object(m.jsxs)("div",{className:"footer__container",children:[Object(m.jsx)(S,{}),Object(m.jsx)(E,{items:["github","contacts","rights"]}),Object(m.jsxs)("button",{type:"button",onClick:function(){return window.scrollTo({top:0})},className:"footer__action link",children:[Object(m.jsx)("div",{className:"footer__action--description",children:"Go to top"}),Object(m.jsx)(O,{type:"up"})]})]})})},g=Object(j.memo)((function(){var e=Object(d.m)().pathname,t=["home"].concat(Object(n.a)(Object.values(s))),c="/favourites"===e||"/phones"===e;return Object(j.useEffect)((function(){window.scrollTo({top:0})}),[e]),Object(m.jsxs)("header",{className:"header",children:[Object(m.jsxs)("div",{className:"header__wrap--left",children:[Object(m.jsx)(S,{}),Object(m.jsx)(E,{items:t})]}),Object(m.jsxs)("div",{className:"header__wrap--right",children:[c&&Object(m.jsx)(_,{pathName:e.slice(1)}),Object(m.jsx)($,{})]})]})})),_=Object(j.memo)((function(e){var t=e.pathName,c=Object(r.c)(),s=Object(o.a)(c,2),i=s[0],a=s[1],n=i.get("query")||"",l=function(e){e?i.set("query",e):i.delete("query"),a(i)};return Object(m.jsxs)("div",{className:"search",children:[Object(m.jsx)("input",{type:"search",placeholder:"search in ".concat(t,"..."),value:n,onChange:function(e){return l(e.target.value)}}),n&&Object(m.jsx)("button",{type:"button",onClick:function(){return l("")},className:"cart__item--remove",children:Object(m.jsx)("img",{src:"assests/images/Close.svg",alt:"icon-minus"})}),Object(m.jsx)("img",{src:"assests/images/Search.svg",alt:"search icon"})]})})),v=c(18),N={tab:{size:700,gap:20},desktop:{size:1136,gap:16}},y={tab:{step:N.tab.size+N.tab.gap,items:3},desktop:{step:N.desktop.size+N.desktop.gap,items:4}},w={tab:Math.ceil((N.tab.size-2*(32+N.tab.gap))/40),desktop:0},C={tab:["15","6","3","all"],desktop:["16","8","4","all"]};function L(){var e=Object(j.useState)(window.innerWidth),t=Object(o.a)(e,2),c=t[0],s=t[1];Object(j.useEffect)((function(){function e(){s(window.innerWidth)}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]);var i=c<1024?"tab":"desktop";return{buttonWidth:32,main:N[i],productSliderData:y[i],itemsOnPage:C[i],paginationLimit:w[i]}}var k,P=function(){var e=L().main;return Object(m.jsx)("div",{className:"card",children:e.size>700?Object(m.jsxs)(v.a,{speed:2,width:245,height:507,viewBox:"0 0 273 507",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(m.jsx)("rect",{x:"0",y:"-1",rx:"18",ry:"18",width:"230",height:"323"}),Object(m.jsx)("rect",{x:"0",y:"334",rx:"18",ry:"18",width:"230",height:"108"}),Object(m.jsx)("rect",{x:"0",y:"453",rx:"16",ry:"16",width:"230",height:"53"})]}):Object(m.jsxs)(v.a,{speed:2,width:245,height:450,viewBox:"0 0 273 507",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(m.jsx)("rect",{x:"10",y:"-1",rx:"18",ry:"18",width:"165",height:"250"}),Object(m.jsx)("rect",{x:"0",y:"280",rx:"18",ry:"18",width:"180",height:"120"}),Object(m.jsx)("rect",{x:"0",y:"420",rx:"16",ry:"16",width:"180",height:"60"})]})})},S=function(){return Object(m.jsx)(r.b,{to:"/",className:"logo",children:"LOGO"})},E=function(e){var t=e.items,c=Object(d.m)().pathname,s=function(e){return"github"===e?"https://github.com/LBondarchuk":"home"===e?"/":e};return Object(m.jsx)("nav",{className:"nav",children:Object(m.jsx)("ul",{className:"nav__list",children:t.map((function(e){return Object(m.jsx)("li",{className:h()("nav__item",{"nav__item--active":e===c.slice(1)||"home"===e&&"/"===c}),children:Object(m.jsx)(r.b,{to:"".concat(s(e)),children:e})},e)}))})})},F=function(){var e=Object(d.m)(),t=e.pathname.split("/").slice(1),c=e.pathname.lastIndexOf("/"),s=e.pathname.slice(0,c);return Object(m.jsxs)("nav",{className:"page__navigation",children:[Object(m.jsxs)("div",{className:"page__navigation--path","data-cy":"breadCrumbs",children:[Object(m.jsx)(r.b,{to:"/",className:"page__navigation--icon",children:Object(m.jsx)("img",{src:"/assests/images/Home.svg",alt:"icon-home"})}),t.map((function(e,c){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"page__navigation--arrow-left",children:Object(m.jsx)("img",{src:"/assests/images/Arrow-right-gray.svg",alt:"icon-rigth"})},e+e[c+1]),e===t[t.length-1]?Object(m.jsx)("span",{children:e},e):Object(m.jsx)(r.b,{to:"/".concat(t.slice(0,t.indexOf(e)+1).join("/")),children:e})]})}))]}),Object(m.jsxs)(r.b,{to:s||"/",className:"page__navigation--go-back",children:[Object(m.jsx)("img",{src:"/assests/images/Arrow-left.svg",alt:"icon-left"}),Object(m.jsx)("span",{"data-cy":"backButton",children:"back"})]})]})},A=function(e){var t=e.paginationLength,c=L(),s=c.buttonWidth,i=c.paginationLimit,a=Object(r.c)(),n=Object(o.a)(a,2),l=n[0],u=n[1],d=l.get("page")||1,b=Object(j.useState)(0),x=Object(o.a)(b,2),f=x[0],p=x[1],g=Object(j.useRef)(+d),_=Object(j.useRef)(0),v=s+8;Object(j.useEffect)((function(){i&&(+d>i&&+d>g.current&&(p((function(e){return e+v})),g.current=+d,_.current=g.current-i+1),+d<_.current&&(p((function(e){return e-v})),g.current-=1,_.current-=1))}),[d]);var N=function(e){l.set("page","".concat(e)),u(l)};Object(j.useEffect)((function(){return p(0)}),[i]);var y=function(){if(!t)return Object(m.jsx)("li",{className:"pagination__item is-active",children:"1"});for(var e=[],c=function(t){e.push(Object(m.jsx)("li",{className:h()("pagination__item",{"is-active":+d===t+1}),onClick:function(){return N(t+1)},style:{left:-f},children:t+1},t+1))},s=0;s<t;s+=1)c(s);return e}();return Object(m.jsxs)("section",{className:"pagination",children:[Object(m.jsx)(O,{type:"left",stop:1===+d,onChangePosition:function(){return N(+d-1)}}),Object(m.jsx)("ul",{className:"pagination__list",children:y}),Object(m.jsx)(O,{type:"right",stop:+d===t,onChangePosition:function(){return N(+d+1)}})]})},I=u.a.createContext({editCartItem:function(){},addFavourite:function(){},cartList:[],favourites:[],isLoading:!1}),q=Object(j.memo)((function(e){var t=e.product,c=Object(j.useContext)(I),s=c.editCartItem,i=c.cartList,a=c.favourites,r=c.addFavourite,n={id:t.id,name:t.name,price:t.price,image:t.image,quantity:1},l=function(e){return e.some((function(e){return e.id===t.id}))};return Object(m.jsxs)("div",{className:"actions",children:[Object(m.jsx)("button",{className:h()("actions--button",{"actions--button--disabled":l(i)}),onClick:function(){return s(n,null)},type:"submit",children:"Add to cart"}),Object(m.jsx)("button",{"data-cy":"addToFavorite",className:"actions--add-favorite",type:"submit",onClick:function(){return r(t)},children:Object(m.jsx)("img",{src:"/assests/images/".concat(l(a)?"Favourites Filled.svg":"Favourites.svg"),alt:"heart-icon"})})]})})),B=function(e){var t=e.product;return Object(m.jsxs)("article",{className:"card","data-cy":"cardsContainer",children:[Object(m.jsxs)(r.b,{to:"/phones/".concat(t.itemId),className:"link",children:[Object(m.jsx)("div",{className:"card__image",children:Object(m.jsx)("img",{src:"../_new/".concat(t.image),alt:""})}),Object(m.jsx)("div",{className:"card__title",children:t.name}),Object(m.jsxs)("div",{className:"card__price",children:[Object(m.jsxs)("span",{className:"card__price--with-discont",children:["$",t.name.includes("11")&&t.fullPrice||t.price]}),Object(m.jsx)("span",{className:"card__price--without-discont",children:!t.name.includes("11")&&"$".concat(t.fullPrice)})]})]}),Object(m.jsxs)("div",{className:"card__characteristics",children:[Object(m.jsxs)("div",{className:"card__characteristics--item",children:[Object(m.jsx)("div",{className:"card__characteristics--title",children:"Screen"}),Object(m.jsx)("div",{className:"card__characteristics--characteristic",children:t.screen})]}),Object(m.jsxs)("div",{className:"card__characteristics--item",children:[Object(m.jsx)("div",{className:"card__characteristics--title",children:"Capacity"}),Object(m.jsx)("div",{className:"card__characteristics--characteristic",children:t.capacity})]}),Object(m.jsxs)("div",{className:"card__characteristics--item",children:[Object(m.jsx)("div",{className:"card__characteristics--title",children:"Ram"}),Object(m.jsx)("div",{className:"card__characteristics--characteristic",children:t.ram})]}),Object(m.jsx)(q,{product:t})]})]})},M=function(e){return".".repeat(e).split("")},T=Object(j.memo)((function(e){var t=e.products,c=e.title,s=L().productSliderData,i=s.step,a=s.items,r=Object(j.useContext)(I).isLoading,n=Object(j.useState)(0),l=Object(o.a)(n,2),u=l[0],d=l[1],b=-i*(t.length/a)+i,h=function(e){d(u+e<b?b:u+e>0&&e>0?0:function(t){return t+e})};Object(j.useEffect)((function(){return d(0)}),[s]);var x=Object(j.useMemo)((function(){return M(4).map((function(){return Object(m.jsx)(P,{})}))}),[]);return Object(m.jsxs)("section",{className:"product-slider",children:[Object(m.jsxs)("div",{className:"product-slider__description",children:[Object(m.jsx)("h1",{className:"product-slider__title",children:c}),Object(m.jsxs)("nav",{className:"product-slider__navigation",children:[Object(m.jsx)(O,{type:"left",stop:0===u,onChangePosition:function(){return h(i)}}),Object(m.jsx)(O,{type:"right",stop:u===b,onChangePosition:function(){return h(-i)}})]})]}),Object(m.jsx)("div",{className:"product-slider__content",style:{marginLeft:u},children:r?x:t.map((function(e){return Object(m.jsx)(B,{product:e},e.id)}))})]})}));!function(e){e.Newest="Newest",e.Alphabetically="Alphabetically",e.Cheapest="Cheapest"}(k||(k={}));var z,D=function(){var e=L().itemsOnPage,t=Object(j.useRef)(null),c=Object(j.useRef)(null),s=Object(r.c)(),i=Object(o.a)(s,2),a=i[0],n=i[1],l=Object(j.useState)(!1),u=Object(o.a)(l,2),d=u[0],b=u[1],O=Object(j.useState)(!1),x=Object(o.a)(O,2),f=x[0],p=x[1],g=a.get("sort"),_=a.get("perPage"),v=function(e,t){a.set(t,e),"perPage"===t&&a.delete("page"),n(a),b(!1),p(!1)};return window.addEventListener("click",(function(e){var s,i;e.target instanceof Node&&(null===(s=c.current)||void 0===s||!s.contains(e.target))&&p(!1),e.target instanceof Node&&(null===(i=t.current)||void 0===i||!i.contains(e.target))&&b(!1)})),Object(j.useEffect)((function(){return n("")}),[e]),Object(m.jsxs)("div",{className:"filter",children:[Object(m.jsxs)("div",{className:"filter__wrap",ref:t,children:[Object(m.jsx)("div",{className:"filter__description",children:"Sort by"}),Object(m.jsxs)("div",{className:"filter__select filter__select--left",onClick:function(){return b(!d)},children:[Object(m.jsx)("span",{children:(null===g||void 0===g?void 0:g.replace(g[0],g[0].toLocaleUpperCase()))||k.Newest}),Object(m.jsx)("img",{className:"".concat(d&&"filter__arrow--up"),src:"assests/images/Arrow-select.svg",alt:"select-icon"})]}),d&&Object(m.jsx)("ul",{className:"filter__options",children:Object.values(k).map((function(e){return Object(m.jsx)("li",{onClick:function(){return v(e.toLocaleLowerCase(),"sort")},className:h()("filter__item",{"is-active":g===e}),children:e},e)}))})]}),Object(m.jsxs)("div",{className:"filter__wrap",ref:c,children:[Object(m.jsx)("div",{className:"filter__description",children:"Items on page 16"}),Object(m.jsxs)("div",{className:"filter__select filter__select--right",onClick:function(){return p(!f)},children:[Object(m.jsx)("span",{children:e[0]}),Object(m.jsx)("img",{className:"".concat(f&&"filter__arrow--up"),src:"assests/images/Arrow-select.svg",alt:""})]}),f&&Object(m.jsx)("ul",{className:"filter__options",children:e.map((function(e){return Object(m.jsx)("li",{onClick:function(){return v(e,"perPage")},className:h()("filter__item",{"is-active":_===e}),children:e},e)}))})]})]})},R=["accessories","phones","tablets","accessories","phones"],J=Object(j.memo)((function(){var e=L(),t=e.main,c=e.buttonWidth,s=t.size,i=t.gap,a=s-2*c-i,r=Object(j.useState)(R),n=Object(o.a)(r,2),l=n[0],u=n[1],d=Object(j.useState)(-a),b=Object(o.a)(d,2),h=b[0],x=b[1],f=Object(j.useState)("all 1s ease"),p=Object(o.a)(f,2),g=p[0],_=p[1],v=Object(j.useState)(!1),N=Object(o.a)(v,2),y=N[0],w=N[1];Object(j.useEffect)((function(){return x(-a)}),[a]);var C=function(e){w(!0),_("all 1s ease"),x((function(t){return t+e})),u(R),setTimeout((function(){h===-a&&e>0&&(x(3*-a),_("none")),h===3*-a&&e<0&&(x(-a),_("none")),w(!1)}),1e3)},k=function(){for(var e=[],t=1;t<l.length-1;t+=1)e.push(Object(m.jsx)("li",{className:"slider__range--item ".concat(-t===h/a&&"is-active")},l[t]));return e}();return Object(m.jsxs)("div",{children:[Object(m.jsxs)("section",{className:"slider",children:[Object(m.jsx)(O,{type:"left",stop:y,onChangePosition:function(){return C(a)}}),Object(m.jsx)("ul",{className:"slider__list",style:{marginLeft:h,transition:g},children:l.map((function(e,t){return Object(m.jsx)("li",{className:"slider__item",children:Object(m.jsx)("img",{src:"../_new/img/banner-".concat(e,".png"),alt:e})},e+e[t-1])}))}),Object(m.jsx)(O,{type:"right",stop:y,onChangePosition:function(){return C(-a)}})]}),Object(m.jsx)("ul",{className:"slider__range",children:k})]})})),$=function(){var e=Object(j.useContext)(I),t=e.cartList,c=e.favourites;return Object(m.jsxs)("div",{className:"top-actions",children:[Object(m.jsxs)("div",{className:"icon icon-info",children:[c.length>0&&Object(m.jsx)("div",{className:"icon-info__info",children:c.length}),Object(m.jsx)(r.b,{to:"/favourites",children:Object(m.jsx)("img",{src:"assests/images/Favourites.svg",alt:"heart icon"})})]}),Object(m.jsxs)("div",{className:"icon icon-info",children:[t.length>0&&Object(m.jsx)("div",{className:"icon-info__info",children:t.length}),Object(m.jsx)(r.b,{to:"/cart",children:Object(m.jsx)("img",{src:"assests/images/Cart.svg",alt:"cart icon"})})]})]})},W=function(e){var t=e.details;return Object(m.jsxs)("section",{className:"details__about","data-cy":"productDescription",children:[Object(m.jsx)("div",{className:"details__about--title",children:"About"}),t.description.map((function(e){return Object(m.jsxs)("div",{className:"details__about--content",children:[Object(m.jsx)("div",{className:"details__about--content--title",children:e.title}),Object(m.jsx)("div",{className:"details__about--content--description",children:e.text})]})}))]})},G=["Screen","Resolution","Processor","RAM","Built in memory","Camera","Zoom","Cell"],H=function(e){var t=e.details,c=[null===t||void 0===t?void 0:t.cell.join(",")];return Object(m.jsxs)("section",{className:"details__Tech-specs",children:[Object(m.jsx)("div",{className:"details__about--title",children:"Tech specs"}),t&&G.map((function(e){return Object(m.jsxs)("div",{className:"card__characteristics--item",children:[Object(m.jsx)("div",{className:"card__characteristics--title",children:e}),Object(m.jsx)("div",{className:"card__characteristics--characteristic",children:"Cell"===e?c:t[e.toLocaleLowerCase()]})]},e)}))]})},U=function(e){var t=e.images,c=Object(j.useState)(t[0]),s=Object(o.a)(c,2),i=s[0],a=s[1];return Object(j.useEffect)((function(){return a(t[0])}),[t]),Object(m.jsxs)("section",{className:"details__galery",children:[Object(m.jsx)("ul",{className:"details__galery--small",children:t.map((function(e){return Object(m.jsx)("li",{className:"details__galery--small--item ".concat(i===e&&"active-border"),onClick:function(){return a(e)},children:Object(m.jsx)("img",{src:"/_new/".concat(e),alt:"foto"})})}))}),Object(m.jsx)("div",{className:"details__galery--large",children:Object(m.jsx)("img",{src:"/_new/".concat(i),alt:"main-foto"})})]})};!function(e){e.black="#1F2020",e.rosegold="#FAD7BD",e.gold="#F5DDC5",e.silver="#E4E4E2",e.spacegray="#25282A",e.green="#AEE1CD",e.yellow="#FFE681",e.white="#FBF7F4",e.purple="#B8AFE6",e.re="#E23636",e.midnightgreen="#4E5851",e.coral="#EE7762",e.grey="#535150"}(z||(z={}));var Y=["Screen","Resolution","Processor","Ram"],Z=function(e){var t=e.details,c=e.currentProduct,s=t.colorsAvailable,i=t.capacityAvailable,a=t.name,n=t.priceDiscount,l=t.priceRegular;return Object(m.jsxs)("section",{className:"details__characteristics",children:[Object(m.jsxs)("div",{className:"details__characteristics--select",children:[Object(m.jsx)("p",{className:"details__characteristics--select--title",children:"Aviliable colors"}),Object(m.jsx)("ul",{className:"details__characteristics--select--list",children:s.map((function(e){var s,i;return Object(m.jsx)("div",{className:h()("details__characteristics--color-border",{"active-border":null===(s=t.id)||void 0===s?void 0:s.includes(e)}),children:Object(m.jsx)("li",{children:Object(m.jsx)(r.b,{to:"/phones/".concat((null===(i=c.itemId)||void 0===i?void 0:i.slice(0,t.id.lastIndexOf("-")+1))+e),className:"details__characteristics--color-item",style:{background:z[e]}})})})}))})]}),Object(m.jsxs)("div",{className:"details__characteristics--select",children:[Object(m.jsx)("p",{className:"details__characteristics--select--title",children:"Select capacity"}),Object(m.jsx)("ul",{className:"details__characteristics--select--list",children:i.map((function(e){var t;return Object(m.jsx)("li",{children:Object(m.jsx)(r.b,{to:"/phones/".concat(null===(t=c.itemId)||void 0===t?void 0:t.split("-").map((function(t){return t.includes("gb")?e.toLocaleLowerCase():t})).join("-")),className:h()("details__characteristics--capacity-item",{"is-active":a.includes(e)}),children:e})})}))})]}),Object(m.jsxs)("div",{className:"details__characteristics--price",children:[Object(m.jsx)("div",{className:"details__characteristics--price--without-discont",children:"$".concat(n)}),Object(m.jsx)("div",{className:"details__characteristics--price--with-discont",children:"$".concat(l)})]}),Object(m.jsxs)("div",{className:"card__characteristics",children:[c&&Object(m.jsx)(q,{product:c}),t&&Y.map((function(e){return Object(m.jsxs)("div",{className:"card__characteristics--item",children:[Object(m.jsx)("div",{className:"card__characteristics--title",children:e}),Object(m.jsx)("div",{className:"card__characteristics--characteristic",children:t[e.toLocaleLowerCase()]})]})}))]})]})};function K(e){return new Promise((function(t){return setTimeout(t,e)}))}var Q=function(){return L().main.size>1e3?Object(m.jsxs)(v.a,{speed:2,width:1042,height:1300,viewBox:"0 0 1042 1300",backgroundColor:"#f2f2f2",foregroundColor:"#ecebeb",children:[Object(m.jsx)("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"1070",height:"184"}),Object(m.jsx)("rect",{x:"0",y:"200",rx:"0",ry:"0",width:"80",height:"80"}),Object(m.jsx)("rect",{x:"0",y:"288",rx:"0",ry:"0",width:"80",height:"80"}),Object(m.jsx)("rect",{x:"0",y:"376",rx:"0",ry:"0",width:"80",height:"80"}),Object(m.jsx)("rect",{x:"0",y:"464",rx:"0",ry:"0",width:"80",height:"80"}),Object(m.jsx)("rect",{x:"0",y:"555",rx:"0",ry:"0",width:"80",height:"83"}),Object(m.jsx)("rect",{x:"170",y:"220",rx:"15",ry:"15",width:"300",height:"422"}),Object(m.jsx)("rect",{x:"650",y:"200",rx:"0",ry:"0",width:"300",height:"442"}),Object(m.jsx)("rect",{x:"0",y:"660",rx:"0",ry:"0",width:"532",height:"442"}),Object(m.jsx)("rect",{x:"550",y:"660",rx:"0",ry:"0",width:"532",height:"442"})]}):Object(m.jsxs)(v.a,{speed:2,width:1042,height:1300,viewBox:"0 0 1042 1300",backgroundColor:"#f2f2f2",foregroundColor:"#ecebeb",children:[Object(m.jsx)("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"1070",height:"184"}),Object(m.jsx)("rect",{x:"0",y:"200",rx:"0",ry:"0",width:"80",height:"80"}),Object(m.jsx)("rect",{x:"0",y:"288",rx:"0",ry:"0",width:"80",height:"80"}),Object(m.jsx)("rect",{x:"0",y:"376",rx:"0",ry:"0",width:"80",height:"80"}),Object(m.jsx)("rect",{x:"0",y:"464",rx:"0",ry:"0",width:"80",height:"80"}),Object(m.jsx)("rect",{x:"0",y:"555",rx:"0",ry:"0",width:"80",height:"83"}),Object(m.jsx)("rect",{x:"170",y:"220",rx:"15",ry:"15",width:"300",height:"422"}),Object(m.jsx)("rect",{x:"0",y:"690",rx:"0",ry:"0",width:"300",height:"442"}),Object(m.jsx)("rect",{x:"0",y:"1200",rx:"0",ry:"0",width:"532",height:"442"}),Object(m.jsx)("rect",{x:"0",y:"1860",rx:"0",ry:"0",width:"532",height:"442"})]})},V=function(e){var t=e.products,c=Object(j.useState)(),s=Object(o.a)(c,2),i=s[0],a=s[1],r=Object(d.q)().id,n=Object(j.useState)(!1),l=Object(o.a)(n,2),u=l[0],b=l[1],O=Object(j.useMemo)((function(){return t.find((function(e){return e.itemId===r}))}),[r,t]);return Object(j.useEffect)((function(){var e=setTimeout((function(){b(!0)}),100);(function(e){return K(0).then((function(){return fetch("../_new/products/".concat(e,".json"))})).then((function(e){return e.json()}))})(r).then((function(e){return a(e)})).finally((function(){clearInterval(e),b(!1)}))}),[r]),Object(m.jsxs)("main",{children:[Object(m.jsx)("div",{className:h()("block",{none:!u}),children:Object(m.jsx)(Q,{})}),Object(m.jsxs)("div",{className:"details ".concat(i&&!u?"block":"none"),children:[Object(m.jsx)(F,{}),Object(m.jsx)(x,{title:null===O||void 0===O?void 0:O.name,subtitle:0}),Object(m.jsx)("div",{className:"details__blocks",children:i&&O&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(U,{images:null===i||void 0===i?void 0:i.images}),Object(m.jsx)(Z,{details:i,currentProduct:O}),Object(m.jsx)(W,{details:i}),Object(m.jsx)(H,{details:i})]})}),Object(m.jsx)(T,{products:t,title:"You mau also like"})]})]})},X=c(44),ee=c(43),te=function(){var e=Object(j.useContext)(I),t=e.cartList,c=e.editCartItem,s=Object(j.useMemo)((function(){return t.reduce((function(e,t){return e+t.price*t.quantity}),0)}),[t]);return Object(m.jsxs)("main",{className:"cart",children:[Object(m.jsx)(x,{title:"Cart",subtitle:t.length}),Object(m.jsxs)("div",{className:"cart__total",children:[Object(m.jsxs)("div",{className:"cart__total--amount",children:[Object(m.jsx)("h1",{children:"$".concat(s)}),Object(m.jsx)("p",{children:"Total for ".concat(t.length," items")})]}),t.length>0&&Object(m.jsx)("button",{type:"submit",children:"Checkout"})]}),Object(m.jsx)("ul",{className:"cart__list",children:Object(m.jsx)(X.a,{className:"cart__list",children:t.map((function(e){return Object(m.jsx)(ee.a,{timeout:500,classNames:"cart__item",children:Object(m.jsxs)("li",{className:"cart__item",children:[Object(m.jsx)("button",{type:"submit",onClick:function(t){return function(e,t){e.preventDefault(),c(t,null)}(t,e)},className:"cart__item--remove",children:Object(m.jsx)("img",{src:"../assests/images/Close.svg",alt:"icon-minus"})}),Object(m.jsx)("img",{src:"../_new/".concat(e.image),alt:"",className:"cart__item--img"}),Object(m.jsx)("span",{className:"cart__item--name",children:e.name}),Object(m.jsxs)("div",{className:"cart__item--panel",children:[Object(m.jsx)("button",{disabled:1===e.quantity,onClick:function(){return c(e,-1)},className:"cart__item--action",type:"submit",children:Object(m.jsx)("img",{src:"../assests/images/Minus.svg",alt:"icon-minus"})}),Object(m.jsx)("span",{className:"cart__item--name",children:e.quantity}),Object(m.jsx)("button",{onClick:function(){return c(e,1)},className:"cart__item--action",type:"submit",children:Object(m.jsx)("img",{src:"../assests/images/Plus.svg",alt:"icon-plus"})}),Object(m.jsx)("span",{className:"cart__item--price",children:"$".concat(e.price)})]})]},e.id)},e.name)}))})})]})},ce=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(F,{}),Object(m.jsx)(x,{title:"Page under development...",subtitle:0})]})},se=function(){var e=Object(j.useContext)(I).favourites,t=Object(r.c)(),c=Object(o.a)(t,1)[0].get("query")||"",s=Object(j.useMemo)((function(){return e.filter((function(e){return e.name.toLocaleLowerCase().replaceAll(" ","").includes(c.toLocaleLowerCase())}))}),[c,e]);return Object(m.jsxs)("main",{className:"favourites",children:[Object(m.jsx)(F,{}),Object(m.jsx)(x,{title:"Favourites",subtitle:e.length}),Object(m.jsx)("section",{className:"favourites__list",children:Object(m.jsx)(X.a,{className:"favourites__list","data-cy":"addToFavorite",children:s.map((function(e){return Object(m.jsx)(ee.a,{timeout:500,classNames:"favourites__item",children:Object(m.jsx)("div",{className:"favourites__item",children:Object(m.jsx)(B,{product:e})})},e.name)}))})}),!s.length&&c&&Object(m.jsx)(x,{subtitle:0,title:"No matches found"})]})},ie=function(e){var t=e.products,c=Object(j.useMemo)((function(){return{hotPriceList:t.filter((function(e){return e.fullPrice&&!e.name.includes("11")})).sort((function(e,t){return t.fullPrice-t.price-(e.fullPrice-e.price)})),brandList:t.filter((function(e){return e.name.includes("11")})).sort((function(e,t){return t.price-e.price}))}}),[t]);return Object(m.jsxs)("main",{children:[Object(m.jsx)(J,{}),Object(m.jsx)(T,{products:c.hotPriceList,title:"Hot Price Slider"}),Object(m.jsx)(f,{itemsLength:t.length}),Object(m.jsx)(T,{products:c.brandList,title:"Brand new models"})]})},ae=function(e){var t=e.products,c=L().itemsOnPage,i=Object(j.useContext)(I).isLoading,a=Object(r.c)(),n=Object(o.a)(a,2),l=n[0],u=n[1],b=l.get("sort")||"",h=l.get("query")||"",O=l.get("page")||"1",f=l.get("perPage")||c[0],p=Object(d.m)().pathname.slice(1),g=t.filter((function(e){return e.category===p})),_=Object.values(s).slice(0,1),v={sort:b,query:h,page:O,perPage:f},N=Object(j.useMemo)((function(){return M(+f).map((function(e,t){return Object(m.jsx)(P,{},e+t)}))}),[]),y=Object(j.useMemo)((function(){return function(e,t){var c=t.query,s=t.sort,i=t.page,a=void 0===i?"1":i,r=t.perPage,n=void 0===r?"16":r,l=e;return null!==s&&(l=function(e,t){switch(t){case"alphabetically":return e.sort((function(e,t){return e.name.localeCompare(t.name)}));case"cheapest":return e.sort((function(e,t){return e.price-t.price}));default:return e.sort((function(e,t){return t.year-e.year}))}}(e,s)),c&&(l=function(e,t){return e.filter((function(e){return e.name.toLocaleLowerCase().replaceAll(" ","").includes(t.toLocaleLowerCase())}))}(e,c)),a&&(l=function(e,t,c){if("all"===c)return e;var s=+t*+c-+c,i=s+ +c;return e.slice(s,i)}(l,a,n)),l}(g,v)}),[v]),w=Math.ceil(g.length/+f);return Object(j.useEffect)((function(){h?l.set("perPage",h?"all":c[0]):l.delete("perPage"),u(l)}),[h]),Object(m.jsxs)("main",{className:"products",children:[Object(m.jsx)(F,{}),_[0]===p&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x,{subtitle:g.length,title:p.replace(p[0],p[0].toUpperCase())}),Object(m.jsx)(D,{})]}),(y.length>0||i)&&Object(m.jsx)("div",{className:"products__list","data-cy":"productList",children:i?N:y.map((function(e){return Object(m.jsx)(B,{product:e},e.id)}))})||Object(m.jsx)(x,{subtitle:0,title:_[0]===p?"No matches found":"Page under development..."}),0!==y.length&&Object(m.jsx)(A,{paginationLength:w})]})},re=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(F,{}),Object(m.jsx)(x,{title:"Page under development...",subtitle:0})]})},ne=function(){return Object(m.jsx)(x,{title:"Page not found",subtitle:0})},le=function(){var e=Object(j.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],i=Object(j.useState)([]),a=Object(o.a)(i,2),r=a[0],u=a[1],b=Object(j.useState)([]),h=Object(o.a)(b,2),O=h[0],x=h[1],f=Object(j.useState)(!0),_=Object(o.a)(f,2),v=_[0],N=_[1],y=Object(j.useState)(!1),w=Object(o.a)(y,2),C=w[0],L=w[1],k=Object(d.m)().pathname;Object(j.useEffect)((function(){var e=localStorage.getItem("favourites"),t=localStorage.getItem("cart");t&&u(JSON.parse(t)),e&&x(JSON.parse(e)),K(0).then((function(){return fetch("https://mate-academy.github.io/react_phone-catalog/_new/products.json")})).then((function(e){return e.json()})).then((function(e){return s(e)})).catch((function(){return L(!0)})).finally((function(){return N(!1)}))}),[]),Object(j.useEffect)((function(){return localStorage.setItem("favourites",JSON.stringify(O))}),[O]),Object(j.useEffect)((function(){return localStorage.setItem("cart",JSON.stringify(r))}),[r]);var P=["phones","tablets","accessories"].find((function(e){return k.includes(e)}))||"phones";return Object(m.jsx)(I.Provider,{value:{editCartItem:function(e,t){u(t?r.map((function(c){return c.id===e.id?Object(l.a)(Object(l.a)({},c),{},{quantity:c.quantity+t}):c})):function(t){return t.some((function(t){return t.id===e.id}))?t.filter((function(t){return t.id!==e.id})):[].concat(Object(n.a)(t),[e])})},cartList:r,addFavourite:function(e){x((function(t){return t.includes(e)?t.filter((function(t){return t.id!==e.id})):[].concat(Object(n.a)(t),[e])}))},favourites:O,isLoading:v},children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(g,{}),Object(m.jsxs)("div",{className:"container",children:[C&&Object(m.jsx)("div",{className:"error",children:"Failed to download Product list"}),Object(m.jsxs)(d.d,{children:[Object(m.jsx)(d.b,{path:"/",element:Object(m.jsx)(ie,{products:c})}),Object(m.jsx)(d.b,{path:"home",element:Object(m.jsx)(d.a,{to:"/",replace:!0})}),Object(m.jsx)(d.b,{children:Object(m.jsxs)(d.b,{path:P,children:[Object(m.jsx)(d.b,{index:!0,element:Object(m.jsx)(ae,{products:c})}),Object(m.jsx)(d.b,{path:":id",element:Object(m.jsx)(V,{products:c})})]})}),Object(m.jsx)(d.b,{path:"cart",element:Object(m.jsx)(te,{})}),Object(m.jsx)(d.b,{path:"favourites",element:Object(m.jsx)(se,{})}),Object(m.jsx)(d.b,{path:"contacts",element:Object(m.jsx)(ce,{})}),Object(m.jsx)(d.b,{path:"rights",element:Object(m.jsx)(re,{})}),Object(m.jsx)(d.b,{path:"*",element:Object(m.jsx)(ne,{})})]})]}),Object(m.jsx)(p,{})]})})};a.a.render(Object(m.jsx)(r.a,{children:Object(m.jsx)(le,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.601df229.chunk.js.map