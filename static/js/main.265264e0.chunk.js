(this["webpackJsonpmovies-explorer-frontend"]=this["webpackJsonpmovies-explorer-frontend"]||[]).push([[0],{29:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(21),i=n.n(s),o=(n(29),n(24)),r=n(4),l=n(2),j=n(5),u=n(3),h=n(0);var d=function(e){return Object(h.jsxs)(j.b,{children:[" ",Object(h.jsx)("nav",{className:!0===e.handlerBurgerMenu?"header__nav header__nav_active":!0===e.loggedIn?"header__nav header__nav_space-between":"header__nav",children:Object(h.jsx)(j.b,{children:function(){return!0===e.loggedIn?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("ul",{className:"header__list ",children:[!0===e.handlerBurgerMenu?Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{to:"/",onClick:e.clickLink,className:"header__link link",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}):"",Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{to:"movies",onClick:e.clickLink,className:"header__link link",children:"\u0424\u0438\u043b\u044c\u043c\u044b"})}),Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{to:"saved-movies",onClick:e.clickLink,className:"header__link link",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"})})]}),Object(h.jsxs)(u.b,{to:"profile",onClick:e.clickLink,className:"header__link link",children:["\u0410\u043a\u043a\u0430\u0443\u043d\u0442 ",Object(h.jsx)("div",{className:"header__human-logo"})]})]}):Object(h.jsx)("ul",{className:"header__list",children:Object(h.jsxs)(j.b,{path:"/",children:[" ",Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{to:"signup",onClick:e.clickLink,className:"header__link link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(h.jsxs)("li",{children:[Object(h.jsx)("div",{children:Object(h.jsx)(u.b,{to:"signin",onClick:e.clickLink,className:"header__link link header__link_style-button",children:"\u0412\u043e\u0439\u0442\u0438"})})," "]})]})})}})})]})},m=n.p+"static/media/logo.4091d06f.svg";var b=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{onClick:e.onClick,className:!0===e.toggle?"burger__button burger__button_active":"burger__button "})})};var _=function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),a=n[0],s=n[1],i=Object(j.h)();return Object(h.jsxs)("header",{className:"/"!==i.pathname?"header header_style_white":"header",children:[Object(h.jsxs)(u.b,{to:"/",className:"header__logo logo",children:[Object(h.jsx)("img",{src:m,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})," "]}),Object(h.jsx)(b,{onClick:function(){s(!1===a)},toggle:a}),Object(h.jsx)(d,{loggedIn:e.loggedIn,handlerBurgerMenu:a,clickLink:function(){s(!1)}})]})},O=n.p+"static/media/landing-logo.b2a32c1a.svg";var g=function(){return Object(h.jsxs)("section",{className:"promo",children:[Object(h.jsxs)("div",{className:"promo__container",children:[" ",Object(h.jsx)("h1",{className:"promo__title",children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430 \u0444\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442\u0430 \u0412\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438."}),Object(h.jsx)("h3",{className:"promo__subtitle",children:"\u041b\u0438\u0441\u0442\u0430\u0439\u0442\u0435 \u043d\u0438\u0436\u0435, \u0447\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u043f\u0440\u043e \u044d\u0442\u043e\u0442 \u043f\u0440\u043e\u0435\u043a\u0442 \u0438 \u0435\u0433\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u044f."})," ",Object(h.jsx)("a",{href:" ",className:"promo__link link",children:"\u0423\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435"})]}),Object(h.jsx)("img",{className:"promo-image",src:O,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})]})};var p=function(){return Object(h.jsxs)("section",{className:"techs",children:[Object(h.jsx)("h2",{className:"section__title",children:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"}),Object(h.jsxs)("div",{className:"techs__container",children:[" ",Object(h.jsx)("h3",{className:"techs__title",children:"7 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439"}),Object(h.jsx)("p",{className:"techs__subtitle",children:"\u041d\u0430 \u043a\u0443\u0440\u0441\u0435 \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043c\u044b \u043e\u0441\u0432\u043e\u0438\u043b\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043b\u0438 \u0432 \u0434\u0438\u043f\u043b\u043e\u043c\u043d\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435."})]})," ",Object(h.jsxs)("ul",{className:"techs__list",children:[Object(h.jsxs)("li",{children:[" ",Object(h.jsx)("p",{to:" ",className:"  techs__link link",children:"HTML"})]}),Object(h.jsxs)("li",{children:[" ",Object(h.jsx)("p",{to:" ",className:" link techs__link",children:"CSS"})]}),Object(h.jsxs)("li",{children:[" ",Object(h.jsx)("p",{to:" ",className:" link techs__link",children:"JS"})]}),Object(h.jsxs)("li",{children:[" ",Object(h.jsx)("p",{to:" ",className:" link techs__link",children:"React"})]}),Object(h.jsxs)("li",{children:[" ",Object(h.jsx)("p",{to:" ",className:" link techs__link",children:"Git"})]}),Object(h.jsxs)("li",{children:[" ",Object(h.jsx)("p",{to:" ",className:" link techs__link",children:"Express.js"})]}),Object(h.jsxs)("li",{children:[" ",Object(h.jsx)("p",{to:" ",className:" link techs__link",children:"mongoDB"})]})]})," "]})},f=n.p+"static/media/IMG-20210129-WA0004 .0c0fe01e.jpeg";var x=function(){return Object(h.jsxs)("section",{className:"about-me",children:[Object(h.jsx)("h2",{className:"section__title",children:"\u041e\u0431\u043e \u043c\u043d\u0435"}),Object(h.jsxs)("div",{className:"about-me__container-author",children:[Object(h.jsxs)("div",{className:"about-me__container-about",children:[" ",Object(h.jsx)("h2",{className:"about-me__author",children:"\u0421\u0435\u0440\u0433\u0435\u0439"}),Object(h.jsx)("p",{className:"about-me__subline",children:"\u0424\u0440\u043e\u043d\u0442\u0435\u043d\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a, 31 \u0433\u043e\u0434"}),Object(h.jsx)("p",{className:"about-me__title",children:"\u042f \u043d\u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u0431\u044b\u043b \u0441\u0432\u044f\u0437\u0430\u043d \u0441 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435\u043c, \u043d\u043e \u0432\u0441\u0435\u0433\u0434\u0430 \u0443\u0432\u043b\u0435\u043a\u0430\u043b\u0441\u044f \u043e\u043d\u043b\u0430\u0439\u043d \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f\u043c\u0438 \u0438 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u043c\u0438 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438. \u0417\u0430\u043a\u043e\u043d\u0447\u0438\u043b \u0442\u0435\u0445\u043d\u0438\u043a\u0443\u043c \u043d\u0430 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u0430 \u043f\u043e \u0430\u0432\u0442\u043e\u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u044b\u043c \u043f\u0435\u0440\u0435\u0432\u043e\u0437\u043a\u0430\u043c. \u0412 \u043d\u0430\u0447\u0430\u043b\u0435 2020 \u0433\u043e\u0434\u0430 \u043d\u0430\u0447\u0430\u043b \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e \u0438\u0437\u0443\u0447\u0430\u0442\u044c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u0447\u0435\u0440\u0435\u0437 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043c\u0435\u0441\u044f\u0446\u0435\u0432 \u0437\u0430\u043f\u0438\u0441\u0430\u043b\u0441\u044f \u043d\u0430 \u043a\u0443\u0440\u0441 \u043f\u043e \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435. \u041f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e \u043a\u0430\u043a \u043f\u0440\u043e\u0448\u0451\u043b \u043a\u0443\u0440\u0441 \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u043b \u0434\u0438\u043f\u043b\u043e\u043c, \u043f\u0440\u0438\u0441\u0442\u0443\u043f\u0438\u043b \u043a \u043f\u043e\u0438\u0441\u043a\u0430\u043c \u043d\u043e\u0432\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b."})," ",Object(h.jsxs)("ul",{className:"about-me__list",children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"https://vk.com/id4269316",target:"_blank",className:"link about-me__link",children:"Vkontakte"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"https://github.com/Smirnov772",target:"_blank",className:"link about-me__link",children:"Github"})})]})]})," ",Object(h.jsx)("img",{className:"about-me__pic",src:f,alt:"\u0424\u043e\u0442\u043e"})]})]})},v=n.p+"static/media/font-main.093d837f.svg";var N=function(){return Object(h.jsxs)("section",{className:"portfolio",children:[Object(h.jsx)("h3",{className:"portfolio__title",children:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e"}),Object(h.jsxs)("ul",{className:"portfolio__list",children:[Object(h.jsx)("li",{children:Object(h.jsxs)("a",{href:"https://smirnov772.github.io/how-to-learn/",target:"_blank",className:"portfolio__link link",children:["\u0421\u0442\u0430\u0442\u0438\u0447\u043d\u044b\u0439 \u0441\u0430\u0439\u0442",Object(h.jsx)("img",{src:v,alt:""})," "]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("a",{href:"https://smirnov772.github.io/russian-travel",target:"_blank",className:" link portfolio__link",children:["\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0439 \u0441\u0430\u0439\u0442",Object(h.jsx)("img",{src:v,alt:""})," "]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("a",{href:" ",target:"_blank",className:" link portfolio__link",children:["\u041e\u0434\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435",Object(h.jsx)("img",{src:v,alt:""})," "]})})]})," "]})};var k=function(){return Object(h.jsxs)("section",{className:"about-project",children:[Object(h.jsx)("h2",{className:"section__title",children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"}),Object(h.jsxs)("ul",{className:"about-project__list",children:[Object(h.jsxs)("li",{className:"about-project__item",children:[Object(h.jsx)("h3",{className:"about-project__title",children:"\u0414\u0438\u043f\u043b\u043e\u043c\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0432\u043a\u043b\u044e\u0447\u0430\u043b 5 \u044d\u0442\u0430\u043f\u043e\u0432"}),Object(h.jsx)("p",{className:"about-project__subtitle",children:"\u0421\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043b\u0430\u043d\u0430, \u0440\u0430\u0431\u043e\u0442\u0443 \u043d\u0430\u0434 \u0431\u044d\u043a\u0435\u043d\u0434\u043e\u043c, \u0432\u0451\u0440\u0441\u0442\u043a\u0443, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438 \u0444\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u043e\u0440\u0430\u0431\u043e\u0442\u043a\u0438."})]}),Object(h.jsxs)("li",{className:"about-project__item",children:[Object(h.jsx)("h3",{className:"about-project__title",children:"\u041d\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0434\u0438\u043f\u043b\u043e\u043c\u0430 \u0443\u0448\u043b\u043e 5 \u043d\u0435\u0434\u0435\u043b\u044c"}),Object(h.jsx)("p",{className:"about-project__subtitle",children:"\u0423 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u044d\u0442\u0430\u043f\u0430 \u0431\u044b\u043b \u043c\u044f\u0433\u043a\u0438\u0439 \u0438 \u0436\u0451\u0441\u0442\u043a\u0438\u0439 \u0434\u0435\u0434\u043b\u0430\u0439\u043d, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0441\u043e\u0431\u043b\u044e\u0434\u0430\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c\u0441\u044f."})]})]}),Object(h.jsxs)("ul",{className:"line-tech",children:[Object(h.jsxs)("li",{className:"line-tech__text line-tech__text_style-blue",children:["1 \u043d\u0435\u0434\u0435\u043b\u044f",Object(h.jsx)("span",{children:" Back-end"})]}),Object(h.jsxs)("li",{className:"line-tech__text line-tech__text_style-grey",children:["4 \u043d\u0435\u0434\u0435\u043b\u0438",Object(h.jsx)("span",{children:" Front-end"})]})]})]})};var C=function(){return Object(h.jsxs)("main",{className:"content",children:[Object(h.jsx)(g,{}),Object(h.jsx)(k,{}),Object(h.jsx)(p,{}),Object(h.jsx)(x,{}),Object(h.jsx)(N,{})]})};var S=function(e){var t=e.savedMovie.some((function(t){return t.movieId===e.movieId}))?"":"movies-card__check_disable";return Object(h.jsxs)("div",{className:"movies-card",children:[" ",Object(h.jsx)("img",{className:"movies-card__image",src:e.image,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",onClick:function(){e.clickImage(e.trailer)}})," ",Object(h.jsxs)("div",{className:"movies-card__discription",children:[" ",Object(h.jsx)("p",{className:"movies-card__paragraph",children:e.nameRU}),Object(h.jsx)("p",{className:"movies-card__time",children:function(e){var t=e,n=Math.floor(t/60),c=t%60;return c=c<10?"0"+c:c,"".concat(n,"\u0447 ").concat(c,"\u043c")}(e.duration)})]}),Object(h.jsx)("button",{className:"movies-card__check ".concat(t),onClick:function(){e.clickChange(e)},type:"button"})]})},y=(n(39),function(e){return e.change?Object(h.jsx)("div",{className:"preloader",children:Object(h.jsx)("div",{className:"preloader__container",children:Object(h.jsx)("span",{className:"preloader__round"})})}):""});var I=function(e){function t(e){window.open(e)}return Object(h.jsx)(h.Fragment,{children:e.movieCard.length>0?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("section",{className:"movies-card-list",children:e.movieCard.map((function(n){return Object(h.jsx)(S,{country:n.country,director:n.director,duration:n.duration,year:n.year,description:n.description,image:"https://api.nomoreparties.co".concat(n.image.url),trailer:n.trailerLink,thumbnail:"https://api.nomoreparties.co".concat(n.image.formats.thumbnail.url),movieId:n.id,nameRU:n.nameRU,nameEN:n.nameEN,clickImage:t,savedMovie:e.savedMovie,clickChange:e.clickChange,onCardDelete:e.onCardDelete},n.id)}))}),Object(h.jsx)("section",{className:"more",children:Object(h.jsx)("button",{onClick:e.handleClickMore,className:e.\u0441hangeMoreButton?"more__button":"more__button more_active_none",children:"\u0415\u0449\u0435"})})]}):Object(h.jsx)("p",{className:e.movieCard&&e.\u0441hangeNotMovie?"movies__not-movies ":"movies__not-movies movies__not-movies_active",children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})})},M=n.p+"static/media/icon-search.99b6633d.svg";var w=function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),a=n[0],s=n[1];return Object(h.jsxs)("section",{className:"search-form",children:[Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onSubmit(a)},className:"search-form__items",children:[" ",Object(h.jsx)("img",{className:"search-form__icon",src:M,alt:"\u0418\u043a\u043e\u043d\u043a\u0430"})," ",Object(h.jsx)("input",{onChange:function(e){s(e.target.value)},placeholder:"\u0424\u0438\u043b\u044c\u043c",type:"search",className:"search-form__input"}),Object(h.jsx)("button",{className:"search-form__button",type:"submit",children:"\u041d\u0430\u0439\u0442\u0438"})]}),Object(h.jsxs)("label",{className:"checkbox",children:[Object(h.jsx)("input",{type:"checkbox",onChange:e.onChange}),Object(h.jsx)("span",{className:"checkbox__switch"}),Object(h.jsx)("p",{className:"checkbox__name",children:"\u041a\u043e\u0440\u043e\u0442\u043a\u043e\u043c\u0435\u0442\u0440\u0430\u0436\u043a\u0438"})," "]})]})};var T=function(e){return Object(h.jsxs)("section",{className:"movies",children:[Object(h.jsx)(w,{onSubmit:function(t){e.onSubmit(t)},onChange:e.onChange}),Object(h.jsx)(I,{"\u0441hangeMoreButton":e.\u0441hangeMoreButton,handleClickMore:function(){e.handleClickMore("dataCard")},"\u0441hangeNotMovie":e.\u0441hangeNotMovie,savedMovie:e.savedMovie,onCardDelete:e.handleCardDelete,movieCard:e.movies,clickChange:e.clickChange})]})};var J=function(){return Object(h.jsxs)("footer",{className:"footer",children:[Object(h.jsx)("h3",{className:"footer__header",children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c \u0445 BeatFilm."}),Object(h.jsxs)("div",{className:"footer__container",children:[Object(h.jsx)("p",{className:"footer__copyright",children:"\xa9 2020"}),Object(h.jsxs)("ul",{className:"footer__list",children:[Object(h.jsxs)("li",{children:[" ",Object(h.jsx)("a",{href:"https://praktikum.yandex.ru/",target:"_blank",className:"footer__link  link",children:"\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c"})," "]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("a",{href:"https://github.com/Smirnov772",target:"_blank",className:"footer__link link",children:"Github"})," "]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("a",{href:"https://vk.com/id4269316",target:"_blank",className:"footer__link link",children:"Vkontakte"})," "]})]})]})]})};var B=function(e){var t=a.a.useState(""),n=Object(l.a)(t,2),c=n[0],s=n[1],i=a.a.useState(""),o=Object(l.a)(i,2),r=o[0],j=o[1];return Object(h.jsxs)("div",{className:"user-auth",children:[Object(h.jsxs)(u.b,{to:"/",className:"header__logo logo",children:[Object(h.jsx)("img",{src:m,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})," "]}),Object(h.jsx)("p",{className:"user-auth__paragraph",children:"\u0420\u0430\u0434\u044b \u0432\u0438\u0434\u0435\u0442\u044c!"}),Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onSubmit({password:r,email:c})},className:"user-auth__form",children:[Object(h.jsx)("p",{className:"user-auth__input-name",children:"E-mail"}),Object(h.jsx)("input",{required:!0,onChange:function(e){s(e.target.value)},value:c,type:"email",placeholder:"Email",className:"user-auth__input"}),Object(h.jsx)("p",{className:"user-auth__input-name",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(h.jsx)("input",{required:!0,onChange:function(e){j(e.target.value)},value:r,type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"user-auth__input"}),Object(h.jsx)("button",{type:"submit",className:"user-auth__button",children:"\u0412\u043e\u0439\u0442\u0438"})]}),Object(h.jsxs)(u.b,{className:"user-auth__link link",to:"/signup",children:["\u0415\u0449\u0451 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",Object(h.jsx)("span",{className:"user-auth__link-span",children:" \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})]})};var E=function(e){var t=a.a.useState(""),n=Object(l.a)(t,2),c=n[0],s=n[1],i=a.a.useState(""),o=Object(l.a)(i,2),r=o[0],j=o[1],d=a.a.useState(""),b=Object(l.a)(d,2),_=b[0],O=b[1];return Object(h.jsxs)("div",{className:"user-auth",children:[Object(h.jsxs)(u.b,{to:"/",className:"header__logo logo",children:[Object(h.jsx)("img",{src:m,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})," "]}),Object(h.jsx)("p",{className:"user-auth__paragraph",children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!"}),Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onSubmit({name:c,email:r,password:_})},className:"user-auth__form",children:[Object(h.jsx)("p",{className:"user-auth__input-name",children:"\u0418\u043c\u044f"}),Object(h.jsx)("input",{required:!0,value:c,onChange:function(e){s(e.target.value)},className:"user-auth__input",type:"name"}),Object(h.jsx)("p",{className:"user-auth__input-name",children:"E-mail"}),Object(h.jsx)("input",{required:!0,onChange:function(e){j(e.target.value)},value:r,type:"email",className:"user-auth__input"}),Object(h.jsx)("p",{className:"user-auth__input-name",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(h.jsx)("input",{required:!0,type:"password",onChange:function(e){O(e.target.value)},value:_,className:"user-auth__input"}),Object(h.jsx)("button",{type:"submit",className:"user-auth__button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(h.jsxs)(u.b,{className:"user-auth__link link",to:"/signin",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",Object(h.jsx)("span",{className:"user-auth__link-span",children:" \u0412\u043e\u0439\u0442\u0438"})]})]})},L=n(10),W=a.a.createContext();var U=function(e){var t=a.a.useContext(W),n=function(){var e=a.a.useState({}),t=Object(l.a)(e,2),n=t[0],s=t[1],i=a.a.useState({}),o=Object(l.a)(i,2),j=o[0],u=o[1],h=a.a.useState(!1),d=Object(l.a)(h,2),m=d[0],b=d[1],_=Object(c.useCallback)((function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];s(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),u(e),b(t)}),[s,u,b]);return{values:n,handleChange:function(e){var t=e.target,c=t.name,a=t.value;s(Object(r.a)(Object(r.a)({},n),{},Object(L.a)({},c,a))),u(Object(r.a)(Object(r.a)({},j),{},Object(L.a)({},c,t.validationMessage))),b(t.closest("form").checkValidity())},errors:j,isValid:m,resetForm:_}}(),s=n.values,i=n.handleChange,o=n.resetForm,j=n.errors,u=n.isValid,d=a.a.useState(""),m=Object(l.a)(d,2),b=m[0],_=m[1],O=a.a.useState(""),g=Object(l.a)(O,2),p=g[0],f=g[1],x=a.a.useState(!1),v=Object(l.a)(x,2),N=v[0],k=v[1];function C(){k(!N)}a.a.useEffect((function(){t&&(_(t.name),f(t.email),o(t,{},!0))}),[t,o]),console.log(N);var S=N?"block":"none",y=N?"none":"block";return Object(h.jsxs)("section",{className:"profile",children:[Object(h.jsxs)("h3",{className:"profile__user",children:["\u041f\u0440\u0438\u0432\u0435\u0442, ",b," "]}),Object(h.jsxs)("form",{onSubmit:function(t){console.log(t),t.preventDefault(),e.onUpdateUser({name:b,email:p})},className:"profile__form",children:[Object(h.jsxs)("div",{className:"profile__input-container",children:[" ",Object(h.jsx)("p",{className:"profile__user-name profile__text",children:"\u0418\u043c\u044f"}),Object(h.jsx)("span",{style:{display:"".concat(y)},children:b}),Object(h.jsx)("input",Object(L.a)({style:{display:"".concat(S)},className:"profile__input profile__text",required:!0,value:s.name,onChange:function(e){_(e.target.values)},minLength:"2",maxLength:"40",type:"text",id:"userName",name:"name"},"onChange",i))]}),Object(h.jsx)("span",{class:"profile__errorValid",children:j.name}),Object(h.jsxs)("div",{className:"profile__input-container",children:[Object(h.jsx)("p",{className:"profile__user-email profile__text",children:"E-mail"}),Object(h.jsx)("span",{style:{display:"".concat(y)},children:p}),Object(h.jsx)("input",Object(L.a)({style:{display:"".concat(S)},className:"profile__input profile__text",required:!0,value:s.email,onChange:function(e){f(e.target.values)},minLength:"2",maxLength:"50",type:"email",id:"email",name:"email"},"onChange",i))]}),Object(h.jsx)("span",{class:"profile__errorValid",children:j.email}),Object(h.jsx)("button",{style:u&&N?{display:"block",color:"green"}:{},className:"profile__button profile__button_submit",type:"submit",onClick:C,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(h.jsx)("button",{style:{display:"".concat(y)},className:"profile__button ",type:"button",onClick:C,children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]}),Object(h.jsx)("button",{onClick:e.loggedOut,className:"profile__button profile__button_text-red",children:"\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"})]})};var D=function(e){return Object(h.jsxs)("div",{className:"movies-card",children:[" ",Object(h.jsx)("img",{className:"movies-card__image",src:e.image,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",onClick:function(){e.clickImage(e.trailer)}})," ",Object(h.jsxs)("div",{className:"movies-card__discription",children:[" ",Object(h.jsx)("p",{className:"movies-card__paragraph",children:e.nameRU}),Object(h.jsx)("p",{className:"movies-card__time",children:function(e){var t=e,n=Math.floor(t/60),c=t%60;return c=c<10?"0"+c:c,"".concat(n,"\u0447 ").concat(c,"\u043c")}(e.duration)})]}),Object(h.jsx)("button",{className:"movies-card__check movies-card__check_delete",onClick:function(){e.onCardDelete(e)},type:"button"})]})};var R=function(e){function t(e){window.open(e)}return Object(h.jsx)(h.Fragment,{children:e.movieCard.length>0?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("section",{className:"movies-card-list",children:e.movieCard.map((function(n){return Object(h.jsx)(D,{_id:n._id,movieId:n.movieId,image:n.image,trailer:n.trailer,duration:n.duration,nameRU:n.nameRU,ownerId:n.owner,clickImage:t,onCardDelete:e.onCardDelete},n._id)}))})," ",Object(h.jsx)("section",{className:"more",children:Object(h.jsx)("button",{onClick:e.handleClickMore,className:e.\u0441hangeMoreButton?"more__button":"more__button more_active_none",children:"\u0415\u0449\u0435"})})," "]}):Object(h.jsx)("p",{className:e.movieCard&&e.\u0441hangeNotMovie?"movies__not-movies ":"movies__not-movies movies__not-movies_active",children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})})};var F=function(e){return Object(h.jsxs)("section",{className:"movies",children:[Object(h.jsx)(w,{onSubmit:function(t){e.onSubmit(t)},onChange:e.onChange}),Object(h.jsx)(R,{"\u0441hangeMoreButton":e.\u0441hangeMoreButton,handleClickMore:function(){e.handleClickMore("dataSaveMovie")},"\u0441hangeNotMovie":e.\u0441hangeNotMovie,delete:e.delete,onCardDelete:e.handleCardDelete,movieCard:e.movies})]})};var V=function(){var e=Object(j.g)();return Object(h.jsxs)("din",{className:"not-found-page",children:[Object(h.jsx)("h3",{className:"not-found-page__404",children:"404"}),Object(h.jsx)("p",{className:"not-found-page__text",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"}),Object(h.jsx)(u.b,{onClick:e.goBack,className:"not-found-page__back link",children:"\u043d\u0430\u0437\u0430\u0434"})]})},z=n(12),A=n(13),G=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.statusText))},P=new(function(){function e(t){var n=t.url,c=t.headers;Object(z.a)(this,e),this._url=n,this._headers=c}return Object(A.a)(e,[{key:"register",value:function(e,t,n){return fetch("".concat(this._url,"/signup"),{method:"POST",headers:this._headers,credentials:"include",body:JSON.stringify({name:"".concat(e),email:"".concat(t),password:"".concat(n)})}).then(G)}},{key:"authorize",value:function(e,t){return fetch("".concat(this._url,"/signin"),{method:"POST",headers:this._headers,credentials:"include",body:JSON.stringify({password:"".concat(e),email:"".concat(t)})}).then(G)}},{key:"JWTValid",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(G)}}]),e}())({url:"https://api.smistav.nomoredomains.icu",headers:{"Content-Type":"application/json"}}),q=function(e){return e.ok?e.json():Promise.reject("\u0421\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d")},H=new(function(){function e(t){var n=t.url,c=t.headers;Object(z.a)(this,e),this._url=n,this._headers=c}return Object(A.a)(e,[{key:"getMeMovies",value:function(){return fetch("".concat(this._url,"/movies"),{method:"GET",headers:Object(r.a)(Object(r.a)({},this._headers),{},{Authorization:"Bearer ".concat(localStorage.getItem("JWT"))}),credentials:"include"}).then(q)}},{key:"addMovie",value:function(e){return fetch("".concat(this._url,"/movies"),{method:"POST",headers:Object(r.a)(Object(r.a)({},this._headers),{},{Authorization:"Bearer ".concat(localStorage.getItem("JWT"))}),credentials:"include",body:JSON.stringify({country:"".concat(e.country),director:"".concat(e.director),duration:"".concat(e.duration),year:"".concat(e.year),description:"".concat(e.description),image:"".concat(e.image),trailer:"".concat(e.trailer),thumbnail:"".concat(e.thumbnail),movieId:"".concat(e.movieId),nameRU:"".concat(e.nameRU),nameEN:"".concat(e.nameEN)})}).then(q)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:Object(r.a)(Object(r.a)({},this._headers),{},{Authorization:"Bearer ".concat(localStorage.getItem("JWT"))}),credentials:"include"}).then(q)}},{key:"renameUser",value:function(e,t){return console.log(e,t),fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:Object(r.a)(Object(r.a)({},this._headers),{},{Authorization:"Bearer ".concat(localStorage.getItem("JWT"))}),credentials:"include",body:JSON.stringify({name:"".concat(e),email:"".concat(t)})}).then(q)}},{key:"removeCard",value:function(e){return console.log(e),fetch("".concat(this._url,"/movies/").concat(e),{method:"DELETE",headers:Object(r.a)(Object(r.a)({},this._headers),{},{Authorization:"Bearer ".concat(localStorage.getItem("JWT"))}),credentials:"include"}).then(q)}}]),e}())({url:"https://api.smistav.nomoredomains.icu",headers:{"Content-Type":"application/json"}}),K=function(e){return e.ok?e.json():Promise.reject("\u0421\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d")},Q=new(function(){function e(t){var n=t.url,c=t.headers;Object(z.a)(this,e),this._url=n,this._headers=c}return Object(A.a)(e,[{key:"getMovies",value:function(){return fetch("".concat(this._url,"/beatfilm-movies"),{method:"GET",headers:this._headers}).then(K)}}]),e}())({url:"https://api.nomoreparties.co",headers:{"Content-Type":"application/json"}}),X=n(23),Y=["component"],Z=function(e){var t=e.component,n=Object(X.a)(e,Y);return console.log(n.loggedIn),Object(h.jsx)(j.b,{children:function(){return!0===n.loggedIn?Object(h.jsx)(t,Object(r.a)({},n)):Object(h.jsx)(j.a,{to:"/"})}})},$=n.p+"static/media/authLogoOk.a9eb6caf.svg",ee=n.p+"static/media/authLogoError.d4ce2a26.svg";n(40);var te=function(e){return Object(h.jsx)("div",{className:"popup ".concat(e.isOpen&&"popup_active"),children:Object(h.jsxs)("div",{className:"popup__container",children:[Object(h.jsx)("img",{className:"info-tooltip__logo",src:e.loggedIn?$:ee,alt:"\u0423\u0434\u0430\u0447\u043d\u043e"}),Object(h.jsx)("p",{className:"info-tooltip__paragraph ",children:e.loggedIn?"\u0423\u0441\u043f\u0435\u0448\u043d\u043e!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})})};n(41);var ne=function(){var e=Object(j.g)(),t=Object(c.useState)({}),n=Object(l.a)(t,2),s=n[0],i=n[1],u=Object(c.useState)(!1),d=Object(l.a)(u,2),m=d[0],b=d[1],O=Object(c.useState)([]),g=Object(l.a)(O,2),p=g[0],f=g[1],x=Object(c.useState)([]),v=Object(l.a)(x,2),N=v[0],k=v[1],S=Object(c.useState)([]),I=Object(l.a)(S,2),M=I[0],w=I[1],L=Object(c.useState)([]),D=Object(l.a)(L,2),R=D[0],z=D[1],A=Object(c.useState)([]),G=Object(l.a)(A,2),q=G[0],K=G[1],X=JSON.parse(localStorage.getItem("dataCard")),Y=JSON.parse(localStorage.getItem("dataSaveMovie"));Object(c.useEffect)((function(){!function(){var e=localStorage.getItem("JWT");e&&P.JWTValid(e).then((function(t){b(!0),console.log("true ".concat(e))})).catch((function(){localStorage.removeItem("JWT")}))}()}),[m]),Object(c.useEffect)((function(){m&&H.getUserInfo().then((function(e){i(e)})).catch((function(e){return console.log(e)}))}),[e,m]);var $=Object(c.useState)(!1),ee=Object(l.a)($,2),ne=ee[0],ce=ee[1],ae=Object(c.useState)(!1),se=Object(l.a)(ae,2),ie=se[0],oe=se[1];function re(e){var t=window.innerWidth<1200?2:3;localStorage.setItem("".concat(e),JSON.stringify(p.slice(0,M.length+t))),w(p.slice(0,M.length+t)),le(p.length+t,M.length+t)}function le(e,t){ce(e-2>=t)}function je(t){Ne(!0),P.authorize(t.password,t.email).then((function(n){Ne(!1),i(Object(r.a)(Object(r.a)({},s),{},{email:t.email})),localStorage.setItem("JWT",n.token),b(!0),pe(!0),be(!0),setTimeout((function(){be(!1)}),1e3),e.push("/movies"),console.log(n)})).catch((function(e){console.log(e),pe(!1),be(!0),setTimeout((function(){be(!1)}),1e3)}))}function ue(e){var t=R.filter((function(t){return t.movieId===e.movieId})),n=Object(l.a)(t,1)[0];Ne(!0),console.log(R),console.log(n),H.removeCard(n._id).then((function(e){localStorage.setItem("dataSaveMovie",JSON.stringify(Y.filter((function(t){return t._id!==e._id})))),z(R.filter((function(t){return t._id!==e._id}))),Ne(!1),console.log("removeCard")})).catch((function(e){return console.log(e)}))}var he=a.a.useState(!1),de=Object(l.a)(he,2),me=de[0],be=de[1],_e=a.a.useState(!1),Oe=Object(l.a)(_e,2),ge=Oe[0],pe=Oe[1],fe=Object(c.useState)(!1),xe=Object(l.a)(fe,2),ve=xe[0],Ne=xe[1];return Object(h.jsxs)(W.Provider,{value:s,children:[Object(h.jsxs)(j.d,{children:[Object(h.jsx)(j.b,{path:"/signup",children:Object(h.jsx)(E,{onSubmit:function(e){Ne(!0),P.register(e.name,e.email,e.password).then((function(t){Ne(!1),je(e)})).catch((function(e){console.log(e),pe(!1),be(!0),setTimeout((function(){be(!1)}),1e3)}))},children:" "})}),Object(h.jsx)(j.b,{path:"/signin",children:Object(h.jsx)(B,{onSubmit:je,children:" "})}),Object(h.jsxs)(j.b,{path:"/movies",children:[Object(h.jsx)(_,{loggedIn:m}),Object(h.jsx)(Z,{"\u0441hangeNotMovie":ie,"\u0441hangeMoreButton":ne,handleClickMore:re,loggedIn:m,path:"/movies",onChange:function(e){e.target.checked?(k(p),w(p.filter((function(e){return e.duration<40}))),localStorage.setItem("dataCard",JSON.stringify(X.filter((function(e){return e.duration<40})))),oe(!0),setTimeout((function(){return oe(!0)}),3e3)):(w(N),localStorage.setItem("dataCard",JSON.stringify(N)))},component:T,onSubmit:function(e){m&&(Ne(!0),Q.getMovies().then((function(t){Ne(!1),K(t);var n=t.filter((function(t){return""===e?"":t.nameRU.toLowerCase().includes(e.toLowerCase())?t:void 0}));var c=window.innerWidth<=480?5:window.innerWidth>480&&window.innerWidth<1200?8:12;localStorage.setItem("dataCard",JSON.stringify(n.slice(0,c))),w(n.slice(0,c)),f(n),le(n.length,c),oe(!0),console.log(n),setTimeout((function(){return oe(!0)}),3e3)})).catch((function(e){return console.log(e)})))},movies:0==M?X:M,savedMovie:R,preloaderChange:ve,clickChange:function(e){R.some((function(t){return t.movieId===e.movieId}))?ue(e):function(e){Ne(!0),console.log(e),H.addMovie(e).then((function(e){z([e].concat(Object(o.a)(R))),Ne(!1),console.log("saveCard")})).catch((function(e){return console.log(e)}))}(e)}}),Object(h.jsx)(J,{})]}),Object(h.jsxs)(j.b,{path:"/saved-movies",children:[Object(h.jsx)(_,{loggedIn:m}),Object(h.jsx)(Z,{"\u0441hangeNotMovie":ie,"\u0441hangeMoreButton":ne,handleClickMore:re,onChange:function(e){e.target.checked?(k(p),w(p.filter((function(e){return e.duration<40}))),localStorage.setItem("dataSaveMovie",JSON.stringify(Y.filter((function(e){return e.duration<40})))),oe(!0),setTimeout((function(){return oe(!0)}),3e3)):(w(N),localStorage.setItem("dataSaveMovie",JSON.stringify(N)))},onSubmit:function(e){m&&(Ne(!0),H.getMeMovies().then((function(t){var n=t.filter((function(e){return e.owner===s._id}));Ne(!1),localStorage.setItem("dataSaveMovie",JSON.stringify(n)),z(n);var c=n.filter((function(t){return""===e?"":t.nameRU.toLowerCase().includes(e.toLowerCase())?t:void 0}));var a=window.innerWidth<=480?5:window.innerWidth>480&&window.innerWidth<1200?8:12;localStorage.setItem("dataSaveMovie",JSON.stringify(c.slice(0,a))),w(c.slice(0,a)),f(c),le(c.length,a),oe(!0),console.log(c.length),setTimeout((function(){return oe(!0)}),3e3)})).catch((function(e){return console.log(e)})))},preloaderChange:ve,handleCardDelete:ue,movies:0==q?Y:q,loggedIn:m,path:"/saved-movies",component:F}),Object(h.jsx)(J,{})]}),Object(h.jsxs)(j.b,{path:"/profile",children:[Object(h.jsx)(_,{loggedIn:m}),Object(h.jsx)(Z,{onUpdateUser:function(e){console.log(e),Ne(!0),H.renameUser(e.name,e.email).then((function(e){Ne(!1),pe(!0),be(!0),i(e),setTimeout((function(){be(!1)}),1e3)})).catch((function(e){return console.log(e)})),pe(!1),i(e),setTimeout((function(){be(!1)}),1e3)},loggedOut:function(){localStorage.removeItem("JWT"),e.push("/"),b(!1),i(""),z(""),f("")},loggedIn:m,path:"/profile",component:U})]}),Object(h.jsxs)(j.b,{exact:!0,path:"/",children:[Object(h.jsx)(_,{loggedIn:m}),Object(h.jsx)(C,{}),Object(h.jsx)(J,{})]}),Object(h.jsx)(j.b,{path:"*",children:Object(h.jsx)(V,{children:" "})})]}),Object(h.jsx)(y,{change:ve}),Object(h.jsx)(te,{loggedIn:ge,isOpen:me})]})};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(u.a,{basename:"/movies-explorer-frontend",children:Object(h.jsx)(ne,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.265264e0.chunk.js.map