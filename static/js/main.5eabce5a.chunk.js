(this["webpackJsonppumm-website"]=this["webpackJsonppumm-website"]||[]).push([[0],{105:function(e,n,a){"use strict";a.r(n);var t=a(0),l=a.n(t),o=a(32),i=a.n(o),_=a(61),r=a(31),m=a(20),p=a(18),s=a(12),y=(a(95),a(96),a(11)),c=a(54),u=a(50),T=localStorage.getItem("locale"),d={locale:"pl",saveLocale:function(){}},E=Object(t.createContext)(d),b=function(e){var n=e.children,a=e.locale,o=Object(t.useState)(a||"pl"),i=Object(u.a)(o,2),_=i[0],r=i[1];return l.a.createElement(E.Provider,{value:{locale:_,saveLocale:function(e){return r(e)}}},n)},g=(E.Consumer,E),k=function(){return Object(t.useContext)(g)},C=a(110),O=a(109);function B(){var e=Object(y.a)(["\n  position: absolute;\n  top: 50%;\n  left: calc(50% - 200px);\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  align-items: center;\n\n  img {\n    display: block;\n    max-width: 400px;\n  }\n\n  .spinner-border {\n    width: 4rem;\n    height: 4rem;\n  }\n"]);return B=function(){return e},e}var f=s.b.div(B()),v=function(e){return l.a.createElement(f,null,l.a.createElement("img",{src:"Logo.png",alt:"logo"}),l.a.createElement(O.a,{variant:"primary",animation:"border"}))},h=function(e){var n=e.response,a=e.isLoading,t=e.children;return a||(null===n||void 0===n?void 0:n.loading)?l.a.createElement(v,null):n.error?l.a.createElement(C.a,{variant:"danger"},n.error):t},J=a(118),N=a(120);function x(){var e=Object(y.a)(["\n  position: sticky;\n  top: 0;\n  z-index: 1040;\n  box-shadow: ",";\n"]);return x=function(){return e},e}var L=s.b.div(x(),(function(e){return e.theme.BOX_SHADOW})),S=function(e){var n=e.data,a=k(),t=a.locale,o=a.saveLocale;return l.a.createElement(L,null,l.a.createElement(N.a,{collapseOnSelect:!0,expand:"sm",bg:"dark",variant:"dark",sticky:"top"},l.a.createElement(N.a.Brand,{href:"#logo"},"PUMM"),l.a.createElement(N.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(N.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(J.a,{className:"mr-auto"},n.map((function(e){var n=e.primary,a=n.link_name,t=n.content_relationship._meta.uid;return l.a.createElement(J.a.Link,{href:"#".concat(t),key:t},a)}))),l.a.createElement(J.a,null,l.a.createElement(J.a.Link,{onClick:function(){var e="pl"===t?"en-gb":"pl";o(e)}},"pl"===t?"English":"Polski")))))},A=function(e){var n=e.children,a=e.data.data.allNavigations.edges[0].node.body;return l.a.createElement(l.a.Fragment,null,l.a.createElement(S,{data:a}),n)},I=a(111),R=a(112),P=function(e){var n=e.data,a=n.logo,t=n._meta;return l.a.createElement(I.a,{id:t.uid},l.a.createElement(R.a,{className:"d-block mx-auto mw-100",src:a.url,alt:a.alt}))},w=a(119),U=a(113),D=a(14);function j(){var e=Object(y.a)(["\n  box-shadow: ",";\n"]);return j=function(){return e},e}var F=s.b.div(j(),(function(e){return e.theme.BOX_SHADOW})),H=function(e){var n=e.data.slides;return l.a.createElement(F,null,l.a.createElement(U.a,{fluid:!0},l.a.createElement(w.a,{interval:null,fade:!0},n.map((function(e,n){var a=e.image,t=e.title,o=e.description;return l.a.createElement(w.a.Item,{key:n},l.a.createElement("img",{className:"w-100",src:a.url,alt:a.alt}),l.a.createElement(w.a.Caption,null,t&&l.a.createElement(D.RichText,{render:t}),o&&l.a.createElement(D.RichText,{render:o})))})))))},M=function(e){var n=e.data,a=n.title,t=n.content;return l.a.createElement(I.a,null,a&&l.a.createElement(D.RichText,{render:a}),t&&l.a.createElement(D.RichText,{render:t}))},W=a(114),X=a(115);function G(){var e=Object(y.a)([""]);return G=function(){return e},e}function $(){var e=Object(y.a)(["\n  img {\n    display: block;\n    margin: 0 auto;\n    width: 170px;\n  }\n"]);return $=function(){return e},e}function K(){var e=Object(y.a)(["\n  margin: 20px 0;\n"]);return K=function(){return e},e}var Q=s.b.div(K()),Y=s.b.div($()),q=s.b.div(G()),z=function(e){var n=e.memberData,a=n.image,t=n.name,o=n.description;return l.a.createElement(Q,null,l.a.createElement(I.a,null,l.a.createElement(W.a,null,l.a.createElement(X.a,{sm:12,md:3,xl:2},l.a.createElement(Y,null,l.a.createElement("img",{src:a.url,alt:a.alt}))),l.a.createElement(X.a,{sm:12,md:9,xl:10},l.a.createElement(q,null,l.a.createElement(D.RichText,{render:t}),l.a.createElement(D.RichText,{render:o}))))))};function V(){var e=Object(y.a)(["\n  background-color: ",";\n  box-shadow: ",";\n"]);return V=function(){return e},e}var Z=s.b.div(V(),(function(e){return e.theme.SECONDARY}),(function(e){return e.theme.BOX_SHADOW})),ee=function(e){var n=e.data,a=n.title,t=n.body,o=n._meta;return l.a.createElement(Z,null,l.a.createElement(I.a,{id:o.uid},l.a.createElement(D.RichText,{render:a}),t.map((function(e,n){return l.a.createElement(z,{memberData:e.primary,key:n})}))))},ne=a(121),ae=a(116),te=a(117);function le(){var e=Object(y.a)(["\n  /* .card {\n    background-color: ",";\n  } */\n"]);return le=function(){return e},e}var oe=s.b.div(le(),(function(e){return e.theme.THIRD})),ie=function(e){var n=e.data,a=k().locale,o=Object(t.useState)(null),i=Object(u.a)(o,2),_=i[0],r=i[1],m=n.title,p=n.body,s=n._meta;return l.a.createElement(I.a,{id:s.uid},l.a.createElement(D.RichText,{render:m}),l.a.createElement(W.a,null,p.map((function(e,n){var t=e.primary,o=t.image,i=t.name,_=t.description;return l.a.createElement(X.a,{sm:12,md:6,lg:3,className:"mb-3",key:n},l.a.createElement(oe,null,l.a.createElement(ne.a,null,o&&l.a.createElement(ne.a.Img,{src:o.url}),l.a.createElement(ne.a.Body,null,l.a.createElement(D.RichText,{render:i}),l.a.createElement(ae.a,{onClick:function(){return r({name:i,description:_})}},"pl"===a?"Wi\u0119cej":"Show Details")))))}))),l.a.createElement(te.a,{show:_,onHide:function(){return r(null)}},l.a.createElement(te.a.Header,{closeButton:!0},_&&l.a.createElement(D.RichText,{render:_.name})),l.a.createElement(te.a.Body,null,_&&l.a.createElement(D.RichText,{render:_.description}))))};function _e(){var e=Object(y.a)(["\n  background-color: ",";\n  box-shadow: ",";\n"]);return _e=function(){return e},e}var re=s.b.div(_e(),(function(e){return e.theme.SECONDARY}),(function(e){return e.theme.BOX_SHADOW})),me=function(e){var n=e.data,a=n.title,t=n.contact_details,o=n.business_register_info,i=n._meta;return l.a.createElement(re,null,l.a.createElement(I.a,{id:i.uid},l.a.createElement(D.RichText,{render:a}),l.a.createElement(W.a,null,l.a.createElement(X.a,{sm:12,md:6},t&&l.a.createElement(D.RichText,{render:t})),l.a.createElement(X.a,{sm:12,md:6},o&&l.a.createElement(D.RichText,{render:o})))))},pe=function(e){var n=e.data.data.allHomepages.edges[0].node,a=n.logo,t=n.slider,o=n.about,i=n.team,_=n.portfolio,r=n.contact;return l.a.createElement(l.a.Fragment,null,l.a.createElement(P,{data:a}),l.a.createElement(H,{data:t}),l.a.createElement(M,{data:o}),l.a.createElement(ee,{data:i}),l.a.createElement(ie,{data:_}),l.a.createElement(me,{data:r}))},se=a(76);function ye(){var e=Object(y.a)(["\n  query HeaderQuery($locale: String) {\n    allNavigations(lang: $locale) {\n      edges {\n        node {\n          body {\n            ... on NavigationBodyLink {\n              primary {\n                content_relationship {\n                  ... on Portfolio {\n                    _meta {\n                      uid\n                    }\n                  }\n                  ... on Contact {\n                    _meta {\n                      uid\n                    }\n                  }\n                  ... on Team {\n                    _meta {\n                      uid\n                    }\n                  }\n                }\n                link_name\n              }\n            }\n          }\n        }\n      }\n    }\n    allHomepages(lang: $locale) {\n      edges {\n        node {\n          logo {\n            ... on Logo {\n              _meta {\n                uid\n              }\n              logo\n            }\n          }\n          slider {\n            ... on Image_slider {\n              slides {\n                image\n                title\n                description\n              }\n              _meta {\n                uid\n              }\n            }\n          }\n          about {\n            ... on About {\n              title\n              content\n              _meta {\n                uid\n              }\n            }\n          }\n          team {\n            ... on Team {\n              title\n              _meta {\n                uid\n              }\n              body {\n                ... on TeamBodyTeam_member {\n                  type\n                  label\n                  primary {\n                    description\n                    image\n                    name\n                  }\n                }\n              }\n            }\n          }\n          portfolio {\n            ... on Portfolio {\n              title\n              _meta {\n                uid\n              }\n              body {\n                ... on PortfolioBodyBuilding {\n                  type\n                  label\n                  primary {\n                    description\n                    image\n                    name\n                  }\n                }\n              }\n            }\n          }\n          contact {\n            ... on Contact {\n              title\n              contact_details\n              _meta {\n                uid\n              }\n              business_register_info\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return ye=function(){return e},e}var ce=Object(se.a)(ye());function ue(){var e=Object(y.a)(["\n  min-height: 100vh;\n  background-color: ",';\n  background-image: url("concrete2.jpg");\n  background-size: contain;\n  color: ',";\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: ",";\n  }\n\n  .jumbotron {\n    padding: 0;\n  }\n  .container {\n    padding-top: 20px;\n  }\n"]);return ue=function(){return e},e}var Te=s.b.div(ue(),(function(e){return e.theme.BACKGROUND}),(function(e){return e.theme.FONT}),(function(e){return e.theme.LOGO_BLUE}));var de=function(){var e=k().locale,n=Object(c.a)(ce,{variables:{locale:e}});return l.a.createElement(Te,null,l.a.createElement(h,{response:n},l.a.createElement(A,{data:n},l.a.createElement(pe,{data:n}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ee={data:{__schema:{types:[{kind:"OBJECT",name:"About",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"AboutConnectionConnection",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"AboutConnectionEdge",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"Contact",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"ContactConnectionConnection",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"ContactConnectionEdge",possibleTypes:null,__typename:"__Type"},{kind:"SCALAR",name:"DateTime",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"Footer",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"FooterConnectionConnection",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"FooterConnectionEdge",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"Homepage",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"HomepageConnectionConnection",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"HomepageConnectionEdge",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"Image_slider",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"Image_sliderConnectionConnection",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"Image_sliderConnectionEdge",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"Image_sliderSlides",possibleTypes:null,__typename:"__Type"},{kind:"SCALAR",name:"Json",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"Logo",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"LogoConnectionConnection",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"LogoConnectionEdge",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"Meta",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"Navigation",possibleTypes:null,__typename:"__Type"},{kind:"UNION",name:"NavigationBody",possibleTypes:[{name:"NavigationBodyLink",__typename:"__Type"}],__typename:"__Type"},{kind:"OBJECT",name:"NavigationBodyLink",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"NavigationBodyLinkPrimary",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"NavigationConnectionConnection",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"NavigationConnectionEdge",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"PageInfo",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"Portfolio",possibleTypes:null,__typename:"__Type"},{kind:"UNION",name:"PortfolioBody",possibleTypes:[{name:"PortfolioBodyBuilding",__typename:"__Type"}],__typename:"__Type"},{kind:"OBJECT",name:"PortfolioBodyBuilding",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"PortfolioBodyBuildingPrimary",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"PortfolioConnectionConnection",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"PortfolioConnectionEdge",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"Query",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"RelatedDocument",possibleTypes:null,__typename:"__Type"},{kind:"ENUM",name:"SortAbouty",possibleTypes:null,__typename:"__Type"},{kind:"ENUM",name:"SortContacty",possibleTypes:null,__typename:"__Type"},{kind:"ENUM",name:"SortDocumentsBy",possibleTypes:null,__typename:"__Type"},{kind:"ENUM",name:"SortFootery",possibleTypes:null,__typename:"__Type"},{kind:"ENUM",name:"SortHomepagey",possibleTypes:null,__typename:"__Type"},{kind:"ENUM",name:"SortImage_slidery",possibleTypes:null,__typename:"__Type"},{kind:"ENUM",name:"SortLogoy",possibleTypes:null,__typename:"__Type"},{kind:"ENUM",name:"SortNavigationy",possibleTypes:null,__typename:"__Type"},{kind:"ENUM",name:"SortPortfolioy",possibleTypes:null,__typename:"__Type"},{kind:"ENUM",name:"SortTeamy",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"Team",possibleTypes:null,__typename:"__Type"},{kind:"UNION",name:"TeamBody",possibleTypes:[{name:"TeamBodyTeam_member",__typename:"__Type"}],__typename:"__Type"},{kind:"OBJECT",name:"TeamBodyTeam_member",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"TeamBodyTeam_memberPrimary",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"TeamConnectionConnection",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"TeamConnectionEdge",possibleTypes:null,__typename:"__Type"},{kind:"INPUT_OBJECT",name:"WhereAbout",possibleTypes:null,__typename:"__Type"},{kind:"INPUT_OBJECT",name:"WhereContact",possibleTypes:null,__typename:"__Type"},{kind:"INPUT_OBJECT",name:"WhereFooter",possibleTypes:null,__typename:"__Type"},{kind:"INPUT_OBJECT",name:"WhereHomepage",possibleTypes:null,__typename:"__Type"},{kind:"INPUT_OBJECT",name:"WherePortfolio",possibleTypes:null,__typename:"__Type"},{kind:"INPUT_OBJECT",name:"WhereTeam",possibleTypes:null,__typename:"__Type"},{kind:"INTERFACE",name:"_Document",possibleTypes:[{name:"About",__typename:"__Type"},{name:"Contact",__typename:"__Type"},{name:"Footer",__typename:"__Type"},{name:"Homepage",__typename:"__Type"},{name:"Image_slider",__typename:"__Type"},{name:"Logo",__typename:"__Type"},{name:"Navigation",__typename:"__Type"},{name:"Portfolio",__typename:"__Type"},{name:"Team",__typename:"__Type"}],__typename:"__Type"},{kind:"OBJECT",name:"_DocumentConnection",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"_DocumentEdge",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"_ExternalLink",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"_FileLink",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"_ImageLink",possibleTypes:null,__typename:"__Type"},{kind:"INTERFACE",name:"_Linkable",possibleTypes:[{name:"About",__typename:"__Type"},{name:"Contact",__typename:"__Type"},{name:"Footer",__typename:"__Type"},{name:"Homepage",__typename:"__Type"},{name:"Image_slider",__typename:"__Type"},{name:"Logo",__typename:"__Type"},{name:"Navigation",__typename:"__Type"},{name:"Portfolio",__typename:"__Type"},{name:"Team",__typename:"__Type"},{name:"_ExternalLink",__typename:"__Type"},{name:"_FileLink",__typename:"__Type"},{name:"_ImageLink",__typename:"__Type"}],__typename:"__Type"},{kind:"INPUT_OBJECT",name:"similar",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"__Directive",possibleTypes:null,__typename:"__Type"},{kind:"ENUM",name:"__DirectiveLocation",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"__EnumValue",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"__Field",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"__InputValue",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"__Schema",possibleTypes:null,__typename:"__Type"},{kind:"OBJECT",name:"__Type",possibleTypes:null,__typename:"__Type"},{kind:"ENUM",name:"__TypeKind",possibleTypes:null,__typename:"__Type"},{kind:"SCALAR",name:"Boolean",possibleTypes:null,__typename:"__Type"},{kind:"SCALAR",name:"Int",possibleTypes:null,__typename:"__Type"},{kind:"SCALAR",name:"Long",possibleTypes:null,__typename:"__Type"},{kind:"SCALAR",name:"String",possibleTypes:null,__typename:"__Type"}],__typename:"__Schema"}}},be=Ee.data.__schema.types.filter((function(e){return null!==e.possibleTypes}));Ee.data.__schema.types=be;var ge=Object.assign({},Ee.data),ke=new r.b({introspectionQueryResultData:ge}),Ce=new m.c({link:Object(_.PrismicLink)({uri:"https://pummwebsite.prismic.io/graphql"}),cache:new r.a({fragmentMatcher:ke})});i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p.a,{client:Ce},l.a.createElement(s.a,{theme:{LOGO_BLUE:"#3D8FFF",BACKGROUND:"#202020",FONT:"#EBEBEB",SECONDARY:"#343A40",THIRD:"#A8763E",BOX_SHADOW:"0px 10px 25px 10px rgba(0,0,0,0.75)"}},l.a.createElement(b,{locale:T||"pl"},l.a.createElement(de,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},77:function(e,n,a){e.exports=a(105)},95:function(e,n,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.5eabce5a.chunk.js.map