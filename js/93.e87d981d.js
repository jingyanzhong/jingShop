"use strict";(self["webpackChunkjing_shop_main"]=self["webpackChunkjing_shop_main"]||[]).push([[93],{3714:function(e,t,o){function l(e){const t=parseInt(e,10);return`${t.toFixed(0).replace(/./g,((e,t,o)=>t&&"."!==e&&(o.length-t)%3===0?`, ${e}`.replace(/\s/g,""):e))}`}o.d(t,{A:function(){return l}})},9093:function(e,t,o){o.r(t),o.d(t,{default:function(){return le}});var l=o(6252),a=o(3577),i=o(9963);const n={class:"product"},r={class:"container"},s={class:"productMain"},d={class:"productImg"},p=["src","alt"],u={key:0,class:"otherImg"},c=["src","alt"],v={class:"productInfo"},f={class:"price"},g={class:"origin_price"},h=(0,l._)("hr",null,null,-1),y=(0,l._)("p",{class:"size"},[(0,l._)("span",null,"F")],-1),w={class:"color"},b=["onClick"],m={class:"num"},S=(0,l.uE)('<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option>',10),_=[S],E=["disabled"],C=(0,l._)("hr",null,null,-1),B={class:"description"},x=(0,l._)("br",null,null,-1),P=(0,l._)("hr",null,null,-1),O={class:"description"},k={class:"swiper otherSwiper otherProducts"},j=(0,l._)("h4",null,"相關商品",-1),N=["onClick"],T=["src","alt"];function z(e,t,o,S,z,I){const H=(0,l.up)("LoadingComponent"),A=(0,l.up)("swiper-slide"),M=(0,l.up)("swiper");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(H,{active:z.isLoading},null,8,["active"]),(0,l._)("div",n,[(0,l._)("div",r,[(0,l._)("div",s,[(0,l._)("div",d,[(0,l._)("img",{src:z.product.imgUrl,alt:z.product.title},null,8,p),z.product.images?((0,l.wg)(),(0,l.iD)("div",u,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(z.product.images,((e,t)=>((0,l.wg)(),(0,l.iD)("img",{src:e,alt:`${z.product.title}${t}`,key:t},null,8,c)))),128))])):(0,l.kq)("",!0)]),(0,l._)("div",v,[(0,l._)("h3",null,(0,a.zw)(z.product.title),1),(0,l._)("p",f,[(0,l._)("span",null,"NTD "+(0,a.zw)(I.currency(z.product.price)),1),(0,l._)("span",g,"NTD "+(0,a.zw)(I.currency(z.product.origin_price)),1)]),h,y,(0,l._)("p",w,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(z.colorArr,(e=>((0,l.wg)(),(0,l.iD)("a",{href:"#",class:(0,a.C_)({active:z.color===e}),onClick:(0,i.iM)((t=>z.color=e),["prevent"]),key:e},(0,a.zw)(e),11,b)))),128))]),(0,l._)("p",m,[(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>z.qty=e)},_,512),[[i.bM,z.qty]])]),(0,l._)("button",{class:"addCart",type:"button",onClick:t[1]||(t[1]=(...e)=>I.addToCart&&I.addToCart(...e)),disabled:z.loading},"加入購物車",8,E),C,(0,l._)("p",B,[(0,l.Uk)(" 詳細介紹 | "),x,(0,l.Uk)(" "+(0,a.zw)(z.product.description),1)]),P,(0,l._)("p",O,(0,a.zw)(z.product.content),1)])]),(0,l._)("div",k,[j,(0,l.Wm)(M,{"slides-per-view":2,"space-between":24,navigation:!0,loop:!1,breakpoints:{768:{slidesPerView:4,spaceBetween:24}},class:"pdlikeSlide"},{default:(0,l.w5)((()=>[z.products?((0,l.wg)(!0),(0,l.iD)(l.HY,{key:0},(0,l.Ko)(I.otherProducts,((e,t)=>((0,l.wg)(),(0,l.j4)(A,{key:e.id},{default:(0,l.w5)((()=>[t<10?((0,l.wg)(),(0,l.iD)("a",{key:0,href:"#",class:"otherProductItem",onClick:(0,i.iM)((t=>I.getOtherProduct(e.id)),["prevent"])},[(0,l._)("img",{src:e.imgUrl,alt:e.title},null,8,T)],8,N)):(0,l.kq)("",!0)])),_:2},1024)))),128)):(0,l.kq)("",!0)])),_:1})])])])],64)}o(7658);var I=o(6523),H=o(2262);function A(e){return"object"===typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function M(e,t){const o=["__proto__","constructor","prototype"];Object.keys(t).filter((e=>o.indexOf(e)<0)).forEach((o=>{"undefined"===typeof e[o]?e[o]=t[o]:A(t[o])&&A(e[o])&&Object.keys(t[o]).length>0?t[o].__swiper__?e[o]=t[o]:M(e[o],t[o]):e[o]=t[o]}))}function D(e={}){return e.navigation&&"undefined"===typeof e.navigation.nextEl&&"undefined"===typeof e.navigation.prevEl}function L(e={}){return e.pagination&&"undefined"===typeof e.pagination.el}function R(e={}){return e.scrollbar&&"undefined"===typeof e.scrollbar.el}function $(e=""){const t=e.split(" ").map((e=>e.trim())).filter((e=>!!e)),o=[];return t.forEach((e=>{o.indexOf(e)<0&&o.push(e)})),o.join(" ")}function q(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}const F=["modules","init","_direction","oneWayMovement","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopedSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideNextClass","slidePrevClass","wrapperClass","lazyPreloaderClass","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control","injectStyles","injectStylesUrls"];function U(e={},t=!0){const o={on:{}},l={},a={};M(o,I.ZP.defaults),M(o,I.ZP.extendedDefaults),o._emitClasses=!0,o.init=!1;const i={},n=F.map((e=>e.replace(/_/,""))),r=Object.assign({},e);return Object.keys(r).forEach((r=>{"undefined"!==typeof e[r]&&(n.indexOf(r)>=0?A(e[r])?(o[r]={},a[r]={},M(o[r],e[r]),M(a[r],e[r])):(o[r]=e[r],a[r]=e[r]):0===r.search(/on[A-Z]/)&&"function"===typeof e[r]?t?l[`${r[2].toLowerCase()}${r.substr(3)}`]=e[r]:o.on[`${r[2].toLowerCase()}${r.substr(3)}`]=e[r]:i[r]=e[r])})),["navigation","pagination","scrollbar"].forEach((e=>{!0===o[e]&&(o[e]={}),!1===o[e]&&delete o[e]})),{params:o,passedParams:a,rest:i,events:l}}function W({el:e,nextEl:t,prevEl:o,paginationEl:l,scrollbarEl:a,swiper:i},n){D(n)&&t&&o&&(i.params.navigation.nextEl=t,i.originalParams.navigation.nextEl=t,i.params.navigation.prevEl=o,i.originalParams.navigation.prevEl=o),L(n)&&l&&(i.params.pagination.el=l,i.originalParams.pagination.el=l),R(n)&&a&&(i.params.scrollbar.el=a,i.originalParams.scrollbar.el=a),i.init(e)}function G(e,t,o,l,a){const i=[];if(!t)return i;const n=e=>{i.indexOf(e)<0&&i.push(e)};if(o&&l){const e=l.map(a),t=o.map(a);e.join("")!==t.join("")&&n("children"),l.length!==o.length&&n("children")}const r=F.filter((e=>"_"===e[0])).map((e=>e.replace(/_/,"")));return r.forEach((o=>{if(o in e&&o in t)if(A(e[o])&&A(t[o])){const l=Object.keys(e[o]),a=Object.keys(t[o]);l.length!==a.length?n(o):(l.forEach((l=>{e[o][l]!==t[o][l]&&n(o)})),a.forEach((l=>{e[o][l]!==t[o][l]&&n(o)})))}else e[o]!==t[o]&&n(o)})),i}function V(e,t,o){void 0===e&&(e={});const l=[],a={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]},i=(e,t)=>{Array.isArray(e)&&e.forEach((e=>{const o="symbol"===typeof e.type;"default"===t&&(t="container-end"),o&&e.children?i(e.children,"default"):!e.type||"SwiperSlide"!==e.type.name&&"AsyncComponentWrapper"!==e.type.name?a[t]&&a[t].push(e):l.push(e)}))};return Object.keys(e).forEach((t=>{if("function"!==typeof e[t])return;const o=e[t]();i(o,t)})),o.value=t.value,t.value=l,{slides:l,slots:a}}function J({swiper:e,slides:t,passedParams:o,changedParams:l,nextEl:a,prevEl:i,scrollbarEl:n,paginationEl:r}){const s=l.filter((e=>"children"!==e&&"direction"!==e&&"wrapperClass"!==e)),{params:d,pagination:p,navigation:u,scrollbar:c,virtual:v,thumbs:f}=e;let g,h,y,w,b,m,S,_;l.includes("thumbs")&&o.thumbs&&o.thumbs.swiper&&d.thumbs&&!d.thumbs.swiper&&(g=!0),l.includes("controller")&&o.controller&&o.controller.control&&d.controller&&!d.controller.control&&(h=!0),l.includes("pagination")&&o.pagination&&(o.pagination.el||r)&&(d.pagination||!1===d.pagination)&&p&&!p.el&&(y=!0),l.includes("scrollbar")&&o.scrollbar&&(o.scrollbar.el||n)&&(d.scrollbar||!1===d.scrollbar)&&c&&!c.el&&(w=!0),l.includes("navigation")&&o.navigation&&(o.navigation.prevEl||i)&&(o.navigation.nextEl||a)&&(d.navigation||!1===d.navigation)&&u&&!u.prevEl&&!u.nextEl&&(b=!0);const E=t=>{e[t]&&(e[t].destroy(),"navigation"===t?(e.isElement&&(e[t].prevEl.remove(),e[t].nextEl.remove()),d[t].prevEl=void 0,d[t].nextEl=void 0,e[t].prevEl=void 0,e[t].nextEl=void 0):(e.isElement&&e[t].el.remove(),d[t].el=void 0,e[t].el=void 0))};if(l.includes("loop")&&e.isElement&&(d.loop&&!o.loop?m=!0:!d.loop&&o.loop?S=!0:_=!0),s.forEach((e=>{if(A(d[e])&&A(o[e]))M(d[e],o[e]);else{const t=o[e];!0!==t&&!1!==t||"navigation"!==e&&"pagination"!==e&&"scrollbar"!==e?d[e]=o[e]:!1===t&&E(e)}})),s.includes("controller")&&!h&&e.controller&&e.controller.control&&d.controller&&d.controller.control&&(e.controller.control=d.controller.control),l.includes("children")&&t&&v&&d.virtual.enabled&&(v.slides=t,v.update(!0)),l.includes("children")&&t&&d.loop&&(_=!0),g){const e=f.init();e&&f.update(!0)}h&&(e.controller.control=d.controller.control),y&&(!e.isElement||r&&"string"!==typeof r||(r=document.createElement("div"),r.classList.add("swiper-pagination"),e.el.shadowEl.appendChild(r)),r&&(d.pagination.el=r),p.init(),p.render(),p.update()),w&&(!e.isElement||n&&"string"!==typeof n||(n=document.createElement("div"),n.classList.add("swiper-scrollbar"),e.el.shadowEl.appendChild(n)),n&&(d.scrollbar.el=n),c.init(),c.updateSize(),c.setTranslate()),b&&(e.isElement&&(a&&"string"!==typeof a||(a=document.createElement("div"),a.classList.add("swiper-button-next"),e.el.shadowEl.appendChild(a)),i&&"string"!==typeof i||(i=document.createElement("div"),i.classList.add("swiper-button-prev"),e.el.shadowEl.appendChild(i))),a&&(d.navigation.nextEl=a),i&&(d.navigation.prevEl=i),u.init(),u.update()),l.includes("allowSlideNext")&&(e.allowSlideNext=o.allowSlideNext),l.includes("allowSlidePrev")&&(e.allowSlidePrev=o.allowSlidePrev),l.includes("direction")&&e.changeDirection(o.direction,!1),(m||_)&&e.loopDestroy(),(S||_)&&e.loopCreate(),e.update()}function Y(e,t,o){if(!o)return null;const a=e=>{let o=e;return e<0?o=t.length+e:o>=t.length&&(o-=t.length),o},i=e.value.isHorizontal()?{[e.value.rtlTranslate?"right":"left"]:`${o.offset}px`}:{top:`${o.offset}px`},{from:n,to:r}=o,s=e.value.params.loop?-t.length:0,d=e.value.params.loop?2*t.length:t.length,p=[];for(let l=s;l<d;l+=1)l>=n&&l<=r&&p.push(t[a(l)]);return p.map((t=>(t.props||(t.props={}),t.props.style||(t.props.style={}),t.props.swiperRef=e,t.props.style=i,(0,l.h)(t.type,{...t.props},t.children))))}const Z=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())},K={name:"Swiper",props:{tag:{type:String,default:"div"},wrapperTag:{type:String,default:"div"},modules:{type:Array,default:void 0},init:{type:Boolean,default:void 0},direction:{type:String,default:void 0},oneWayMovement:{type:Boolean,default:void 0},touchEventsTarget:{type:String,default:void 0},initialSlide:{type:Number,default:void 0},speed:{type:Number,default:void 0},cssMode:{type:Boolean,default:void 0},updateOnWindowResize:{type:Boolean,default:void 0},resizeObserver:{type:Boolean,default:void 0},nested:{type:Boolean,default:void 0},focusableElements:{type:String,default:void 0},width:{type:Number,default:void 0},height:{type:Number,default:void 0},preventInteractionOnTransition:{type:Boolean,default:void 0},userAgent:{type:String,default:void 0},url:{type:String,default:void 0},edgeSwipeDetection:{type:[Boolean,String],default:void 0},edgeSwipeThreshold:{type:Number,default:void 0},autoHeight:{type:Boolean,default:void 0},setWrapperSize:{type:Boolean,default:void 0},virtualTranslate:{type:Boolean,default:void 0},effect:{type:String,default:void 0},breakpoints:{type:Object,default:void 0},spaceBetween:{type:[Number,String],default:void 0},slidesPerView:{type:[Number,String],default:void 0},maxBackfaceHiddenSlides:{type:Number,default:void 0},slidesPerGroup:{type:Number,default:void 0},slidesPerGroupSkip:{type:Number,default:void 0},slidesPerGroupAuto:{type:Boolean,default:void 0},centeredSlides:{type:Boolean,default:void 0},centeredSlidesBounds:{type:Boolean,default:void 0},slidesOffsetBefore:{type:Number,default:void 0},slidesOffsetAfter:{type:Number,default:void 0},normalizeSlideIndex:{type:Boolean,default:void 0},centerInsufficientSlides:{type:Boolean,default:void 0},watchOverflow:{type:Boolean,default:void 0},roundLengths:{type:Boolean,default:void 0},touchRatio:{type:Number,default:void 0},touchAngle:{type:Number,default:void 0},simulateTouch:{type:Boolean,default:void 0},shortSwipes:{type:Boolean,default:void 0},longSwipes:{type:Boolean,default:void 0},longSwipesRatio:{type:Number,default:void 0},longSwipesMs:{type:Number,default:void 0},followFinger:{type:Boolean,default:void 0},allowTouchMove:{type:Boolean,default:void 0},threshold:{type:Number,default:void 0},touchMoveStopPropagation:{type:Boolean,default:void 0},touchStartPreventDefault:{type:Boolean,default:void 0},touchStartForcePreventDefault:{type:Boolean,default:void 0},touchReleaseOnEdges:{type:Boolean,default:void 0},uniqueNavElements:{type:Boolean,default:void 0},resistance:{type:Boolean,default:void 0},resistanceRatio:{type:Number,default:void 0},watchSlidesProgress:{type:Boolean,default:void 0},grabCursor:{type:Boolean,default:void 0},preventClicks:{type:Boolean,default:void 0},preventClicksPropagation:{type:Boolean,default:void 0},slideToClickedSlide:{type:Boolean,default:void 0},loop:{type:Boolean,default:void 0},loopedSlides:{type:Number,default:void 0},loopPreventsSliding:{type:Boolean,default:void 0},rewind:{type:Boolean,default:void 0},allowSlidePrev:{type:Boolean,default:void 0},allowSlideNext:{type:Boolean,default:void 0},swipeHandler:{type:Boolean,default:void 0},noSwiping:{type:Boolean,default:void 0},noSwipingClass:{type:String,default:void 0},noSwipingSelector:{type:String,default:void 0},passiveListeners:{type:Boolean,default:void 0},containerModifierClass:{type:String,default:void 0},slideClass:{type:String,default:void 0},slideActiveClass:{type:String,default:void 0},slideVisibleClass:{type:String,default:void 0},slideNextClass:{type:String,default:void 0},slidePrevClass:{type:String,default:void 0},wrapperClass:{type:String,default:void 0},lazyPreloaderClass:{type:String,default:void 0},runCallbacksOnInit:{type:Boolean,default:void 0},observer:{type:Boolean,default:void 0},observeParents:{type:Boolean,default:void 0},observeSlideChildren:{type:Boolean,default:void 0},a11y:{type:[Boolean,Object],default:void 0},autoplay:{type:[Boolean,Object],default:void 0},controller:{type:Object,default:void 0},coverflowEffect:{type:Object,default:void 0},cubeEffect:{type:Object,default:void 0},fadeEffect:{type:Object,default:void 0},flipEffect:{type:Object,default:void 0},creativeEffect:{type:Object,default:void 0},cardsEffect:{type:Object,default:void 0},hashNavigation:{type:[Boolean,Object],default:void 0},history:{type:[Boolean,Object],default:void 0},keyboard:{type:[Boolean,Object],default:void 0},mousewheel:{type:[Boolean,Object],default:void 0},navigation:{type:[Boolean,Object],default:void 0},pagination:{type:[Boolean,Object],default:void 0},parallax:{type:[Boolean,Object],default:void 0},scrollbar:{type:[Boolean,Object],default:void 0},thumbs:{type:Object,default:void 0},virtual:{type:[Boolean,Object],default:void 0},zoom:{type:[Boolean,Object],default:void 0},grid:{type:[Object],default:void 0},freeMode:{type:[Boolean,Object],default:void 0},enabled:{type:Boolean,default:void 0}},emits:["_beforeBreakpoint","_containerClasses","_slideClass","_slideClasses","_swiper","_freeModeNoMomentumRelease","activeIndexChange","afterInit","autoplay","autoplayStart","autoplayStop","autoplayPause","autoplayResume","autoplayTimeLeft","beforeDestroy","beforeInit","beforeLoopFix","beforeResize","beforeSlideChangeStart","beforeTransitionStart","breakpoint","changeDirection","click","disable","doubleTap","doubleClick","destroy","enable","fromEdge","hashChange","hashSet","init","keyPress","lock","loopFix","momentumBounce","navigationHide","navigationShow","navigationPrev","navigationNext","observerUpdate","orientationchange","paginationHide","paginationRender","paginationShow","paginationUpdate","progress","reachBeginning","reachEnd","realIndexChange","resize","scroll","scrollbarDragEnd","scrollbarDragMove","scrollbarDragStart","setTransition","setTranslate","slideChange","slideChangeTransitionEnd","slideChangeTransitionStart","slideNextTransitionEnd","slideNextTransitionStart","slidePrevTransitionEnd","slidePrevTransitionStart","slideResetTransitionStart","slideResetTransitionEnd","sliderMove","sliderFirstMove","slidesLengthChange","slidesGridLengthChange","snapGridLengthChange","snapIndexChange","swiper","tap","toEdge","touchEnd","touchMove","touchMoveOpposite","touchStart","transitionEnd","transitionStart","unlock","update","virtualUpdate","zoomChange"],setup(e,t){let{slots:o,emit:a}=t;const{tag:i,wrapperTag:n}=e,r=(0,H.iH)("swiper"),s=(0,H.iH)(null),d=(0,H.iH)(!1),p=(0,H.iH)(!1),u=(0,H.iH)(null),c=(0,H.iH)(null),v=(0,H.iH)(null),f={value:[]},g={value:[]},h=(0,H.iH)(null),y=(0,H.iH)(null),w=(0,H.iH)(null),b=(0,H.iH)(null),{params:m,passedParams:S}=U(e,!1);V(o,f,g),v.value=S,g.value=f.value;const _=()=>{V(o,f,g),d.value=!0};m.onAny=function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),l=1;l<t;l++)o[l-1]=arguments[l];a(e,...o)},Object.assign(m.on,{_beforeBreakpoint:_,_containerClasses(e,t){r.value=t}});const E={...m};if(delete E.wrapperClass,c.value=new I.ZP(E),c.value.virtual&&c.value.params.virtual.enabled){c.value.virtual.slides=f.value;const e={cache:!1,slides:f.value,renderExternal:e=>{s.value=e},renderExternalUpdate:!1};M(c.value.params.virtual,e),M(c.value.originalParams.virtual,e)}function C(e){return m.virtual?Y(c,e,s.value):(e.forEach(((e,t)=>{e.props||(e.props={}),e.props.swiperRef=c,e.props.swiperSlideIndex=t})),e)}return(0,l.ic)((()=>{!p.value&&c.value&&(c.value.emitSlidesClasses(),p.value=!0);const{passedParams:t}=U(e,!1),o=G(t,v.value,f.value,g.value,(e=>e.props&&e.props.key));v.value=t,(o.length||d.value)&&c.value&&!c.value.destroyed&&J({swiper:c.value,slides:f.value,passedParams:t,changedParams:o,nextEl:h.value,prevEl:y.value,scrollbarEl:b.value,paginationEl:w.value}),d.value=!1})),(0,l.JJ)("swiper",c),(0,l.YP)(s,(()=>{(0,l.Y3)((()=>{Z(c.value)}))})),(0,l.bv)((()=>{u.value&&(W({el:u.value,nextEl:h.value,prevEl:y.value,paginationEl:w.value,scrollbarEl:b.value,swiper:c.value},m),a("swiper",c.value))})),(0,l.Jd)((()=>{c.value&&!c.value.destroyed&&c.value.destroy(!0,!1)})),()=>{const{slides:t,slots:a}=V(o,f,g);return(0,l.h)(i,{ref:u,class:$(r.value)},[a["container-start"],(0,l.h)(n,{class:q(m.wrapperClass)},[a["wrapper-start"],C(t),a["wrapper-end"]]),D(e)&&[(0,l.h)("div",{ref:y,class:"swiper-button-prev"}),(0,l.h)("div",{ref:h,class:"swiper-button-next"})],R(e)&&(0,l.h)("div",{ref:b,class:"swiper-scrollbar"}),L(e)&&(0,l.h)("div",{ref:w,class:"swiper-pagination"}),a["container-end"]])}}},X={name:"SwiperSlide",props:{tag:{type:String,default:"div"},swiperRef:{type:Object,required:!1},swiperSlideIndex:{type:Number,default:void 0,required:!1},zoom:{type:Boolean,default:void 0,required:!1},lazy:{type:Boolean,default:!1,required:!1},virtualIndex:{type:[String,Number],default:void 0}},setup(e,t){let{slots:o}=t,a=!1;const{swiperRef:i}=e,n=(0,H.iH)(null),r=(0,H.iH)("swiper-slide"),s=(0,H.iH)(!1);function d(e,t,o){t===n.value&&(r.value=o)}(0,l.bv)((()=>{i&&i.value&&(i.value.on("_slideClass",d),a=!0)})),(0,l.Xn)((()=>{!a&&i&&i.value&&(i.value.on("_slideClass",d),a=!0)})),(0,l.ic)((()=>{n.value&&i&&i.value&&("undefined"!==typeof e.swiperSlideIndex&&(n.value.swiperSlideIndex=e.swiperSlideIndex),i.value.destroyed&&"swiper-slide"!==r.value&&(r.value="swiper-slide"))})),(0,l.Jd)((()=>{i&&i.value&&i.value.off("_slideClass",d)}));const p=(0,l.Fl)((()=>({isActive:r.value.indexOf("swiper-slide-active")>=0,isVisible:r.value.indexOf("swiper-slide-visible")>=0,isPrev:r.value.indexOf("swiper-slide-prev")>=0,isNext:r.value.indexOf("swiper-slide-next")>=0})));(0,l.JJ)("swiperSlide",p);const u=()=>{s.value=!0};return()=>(0,l.h)(e.tag,{class:$(`${r.value}`),ref:n,"data-swiper-slide-index":"undefined"===typeof e.virtualIndex&&i&&i.value&&i.value.params.loop?e.swiperSlideIndex:e.virtualIndex,onLoadCapture:u},e.zoom?(0,l.h)("div",{class:"swiper-zoom-container","data-swiper-zoom":"number"===typeof e.zoom?e.zoom:void 0},[o.default&&o.default(p.value),e.lazy&&!s.value&&(0,l.h)("div",{class:"swiper-lazy-preloader"})]):[o.default&&o.default(p.value),e.lazy&&!s.value&&(0,l.h)("div",{class:"swiper-lazy-preloader"})])}};var Q=o(3714);I.ZP.use([I.W_,I.tl,I.o3]);var ee={data(){return{id:"",qty:1,products:null,product:{},addCart:{},loading:!1,colorArr:"",color:null,swiper:{},isLoading:!1}},components:{Swiper:K,SwiperSlide:X},inject:["emitter"],computed:{otherProducts(){return this.products.filter((e=>e.category===this.product.category))}},methods:{currency:Q.A,getAllProducts(){const e="https://vue3-course-api.hexschool.io/api/jingyan/products/all";this.$http.get(e).then((e=>{this.products=e.data.products,console.log(this.products)}))},getProduct(){this.isLoading=!0;let e="";const t=`https://vue3-course-api.hexschool.io/api/jingyan/product/${this.id}`;this.$http.get(t).then((t=>{this.product=t.data.product,e=t.data.product.description2,this.colorArr=e.split(" "),this.isLoading=!1,console.log(this.product)}))},addToCart(){if(this.addCart.product_id=this.id,this.addCart.qty=parseInt(this.qty,10),this.addCart.color=this.color,this.loading=!0,null===this.color)alert("尚未選擇顏色，請點選"),this.loading=!1;else{const e="https://vue3-course-api.hexschool.io/api/jingyan/cart";this.$http.post(e,{data:this.addCart}).then((e=>{e.data.success&&this.emitter.emit("push-message",{style:"success",title:"已加入購物車"}),this.loading=!1,console.log(e)}))}},getOtherProduct(e){this.$router.push(`/products/${e}`),this.id=e,this.getProduct()}},created(){this.id=this.$route.params.productId,this.getProduct(),this.getAllProducts()}},te=o(3744);const oe=(0,te.Z)(ee,[["render",z]]);var le=oe}}]);
//# sourceMappingURL=93.e87d981d.js.map