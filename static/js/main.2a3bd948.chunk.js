(this["webpackJsonpw-a-p"]=this["webpackJsonpw-a-p"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(4),o=n.n(c),r=(n(9),n(2)),s=(n(10),n.p+"static/media/marea.17e395d8.png"),l=n(0);var d=function(e){var t=e.setShowPresentation,n=Object(a.useState)(),i=Object(r.a)(n,2),c=i[0],o=i[1],d=Object(a.useState)(0),u=Object(r.a)(d,2),m=u[0],b=u[1];Object(a.useEffect)((function(){var e,t=null===(e=document.querySelector("#car"))||void 0===e?void 0:e.animate([{left:"calc(0vw - 300px)"},{left:"calc(100vw + 300px)"}],{duration:5e3,fill:"none"});t&&(t.pause(),t.onfinish=function(){t.play(),b((function(e){return e+(t.playbackRate<0?-1:1)}))},o(t))}),[]);var p=function(e){null===c||void 0===c||c.updatePlaybackRate(e)};return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("div",{className:"",children:[Object(l.jsx)("img",{id:"car",src:s}),Object(l.jsx)("img",{id:"road",src:"https://img.favpng.com/13/7/23/road-asphalt-png-favpng-1NyacQEjRn6aYfyXGhpJzRHNK.jpg",width:"100vw"}),Object(l.jsxs)("div",{className:"commands",children:[Object(l.jsxs)("h5",{children:["Voltas completas ",m]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{id:"break",onClick:function(){null===c||void 0===c||c.pause()},children:"FREIO"}),Object(l.jsx)("button",{id:"throttle",onClick:function(){null===c||void 0===c||c.play()},children:"ACELERADOR"})]}),Object(l.jsxs)("div",{className:"gearbox",children:[Object(l.jsx)("button",{onClick:function(){return p(1)},children:"1"}),Object(l.jsx)("button",{onClick:function(){return p(2)},children:"2"}),Object(l.jsx)("button",{onClick:function(){return p(3)},children:"3"}),Object(l.jsx)("button",{onClick:function(){return p(4)},children:"4"}),Object(l.jsx)("button",{onClick:function(){return p(5)},children:"5"}),Object(l.jsx)("button",{onClick:function(){return p(-1)},children:"R"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{onClick:function(){t(!0)},children:"Voltar para a apresenta\xe7\xe3o"})," - ",Object(l.jsx)("a",{href:"https://drafts.csswg.org/web-animations-1/",children:"W3C DRAFT"})," - ",Object(l.jsx)("a",{href:"https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API",children:"Tutorial Mozilla!"})]})]})]})})},u=(n(12),function(e){var t=e.id,n=e.style,a=e.content;return Object(l.jsxs)("div",{id:"slide-".concat(t),className:"slide true-center",style:n,children:[(null===a||void 0===a?void 0:a.cover)&&Object(l.jsx)("h1",{style:{fontFamily:"monospace",fontSize:"50px"},children:a.cover.text}),(null===a||void 0===a?void 0:a.columns)&&Object(l.jsx)("div",{className:"true-center",style:{width:"75%",gap:"15px"},children:a.columns.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:e.header}),Object(l.jsx)("p",{dangerouslySetInnerHTML:{__html:e.text}})]},e.header)}))})]})}),m=[{id:1,style:{backgroundImage:"url(https://www.serasaconsumidor.com.br/ecred/og/banner.png)",backgroundColor:"white",zIndex:0,backgroundRepeat:"no-repeat",backgroundPosition:"98% 98%"},content:{cover:{text:"Web Animations \ud83d\ude0e"}}},{id:2,style:{backgroundColor:"#dcdcdc",zIndex:-1},content:{columns:[{header:"D\xc1 PRA ANIMAR QUALQUER ELEMENTO!",text:"A ideia principal por tras dessa API toda \xe9 que seja totalmente poss\xedvel manipular os elementos de maneira mais espec\xedfica(ou n\xe3o), cadenciada e independente.\n            "},{text:'<img src="https://media1.giphy.com/media/l2SpVTUhrAV8WP9Dy/giphy.gif" />'}]}},{id:3,style:{backgroundColor:"#e9e9e9",zIndex:-2},content:{columns:[{header:"O QUE DA PRA FAZER?",text:"<ul>\n            <li>Rodar a anima\xe7\xe3o; .play()</li>\n            <li>Pausar; .pause()</li>\n            <li>Inverter a anima\xe7\xe3o; .revert()</li>\n            <li>Listener ao terminar uma anima\xe7\xe3o; .onfinish = ()=> ...</li>\n            <li>Listener ao cancelar uma anima\xe7\xe3o; .oncancel = ()=> ...</li>\n            <li>Alterar o momento da anima\xe7\xe3o .currentTime = 3000</li>\n            <li>Consultar a velocidade da anima\xe7\xe3o .playbackRate</li>\n            <li>Alterar a velocidade da anima\xe7\xe3o .updatePlaybackRate(3000)</li>\n          </ul>\n          <p><b>A ideia \xe9 muito semelhante aos famosos LottieFiles (mas aqui quem anima \xe9 voc\xea)</b></p>"},{text:'<img src="https://static.wikia.nocookie.net/45b63111-ae30-411e-b318-dadfab7bbc79" />'}]}},{id:4,style:{backgroundColor:"#262626",color:"white",zIndex:-3},content:{columns:[{header:"QUANDO USAR?",text:"<ul>\n            <li>Ap\xf3s uma request, como resposta visual</li>\n            <li>Ap\xf3s completar um fluxo estenuante, como recompensa visual</li>\n            <li>Quando quiser dar ao usu\xe1rio uma experi\xeancia mais e rica e responsiva</li>\n            <li>\xc9 semelhante a inserir uma classe na tag, por\xe9m tem-se mais op\xe7\xf5es de execu\xe7\xe3o</li>\n            <li>Precisar manipular os par\xe2metros de execu\xe7\xe3o</li>\n          </ul>\n          <h1>QUANDO N\xc3O USAR?</h1>\n          <ul>\n            <li>Quando precisar de uma anima\xe7\xe3o simples</li>\n            <li>Quando n\xe3o precisar encadear outras anima\xe7\xf5es em paralelo ou em s\xe9rie</li>\n          </ul>\n          "},{text:'<img src="https://media0.giphy.com/media/SCt3Miv6ugvSg/200.gif" />\n          '}]}},{id:5,style:{backgroundColor:"#262626",color:"white",zIndex:-4},content:{columns:[{text:'<img src="https://media1.tenor.com/images/9e5b3dce0022e950bde3c859475d43e5/tenor.gif?itemid=18164907" width="100%" /><p>Cliquem no \xedcone abaixo e acelerem o marea da Serasa, mas cuidado pra n\xe3o explodir.</p>'}]}}];var b=function(e){var t=e.setShowPresentation,n=Object(a.useState)(),i=Object(r.a)(n,2),c=i[0],o=i[1],s=Object(a.useState)(),d=Object(r.a)(s,2),b=d[0],p=d[1],j=Object(a.useState)("down"),h=Object(r.a)(j,2),v=h[0],x=h[1],f=Object(a.useState)(0),O=Object(r.a)(f,2),g=O[0],w=O[1];Object(a.useEffect)((function(){var e,t=null===(e=document.querySelector("#slide-".concat(g+("down"===v?0:1))))||void 0===e?void 0:e.animate([{top:"0vh"},{top:"100vh"}],{duration:1e3,iterations:1,fill:"both"});null===t||void 0===t||t.pause(),"up"!==v?null===t||void 0===t||t.play():null===t||void 0===t||t.reverse()}),[g]),Object(a.useEffect)((function(){var e,t,n=[{backgroundColor:"black"},{backgroundColor:"#2b2b2b"},{backgroundColor:"black"}],a={duration:200,iterations:1},i=null===(e=document.querySelector("#backward"))||void 0===e?void 0:e.animate(n,a);null===i||void 0===i||i.pause(),o(i);var c=null===(t=document.querySelector("#forward"))||void 0===t?void 0:t.animate(n,a);null===c||void 0===c||c.pause(),p(c)}),[]);var k=function(e){var t,n={forward:{state:b,action:function(e){return e+1}},backward:{state:c,action:function(e){return e-1}}};null===(t=n[e].state)||void 0===t||t.play(),n[e].action(g)>g?(x("up"),w(g-1)):(x("down"),w(g+1))};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("div",{className:"true-center bottom-controls",children:[Object(l.jsx)("div",{id:"forward",className:(0===g?"block":"")+" true-center",onClick:function(){return k("forward")},children:"<"}),Object(l.jsx)("div",{id:"backward",className:(g===m.length-1?"block":"")+" true-center",onClick:function(){return k("backward")},children:">"}),Object(l.jsx)("div",{className:"true-center",children:Object(l.jsx)("span",{onClick:function(){t(!1)},children:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(l.jsx)("path",{fill:"white",d:"M23.5 7c.276 0 .5.224.5.5v.511c0 .793-.926.989-1.616.989l-1.086-2h2.202zm-1.441 3.506c.639 1.186.946 2.252.946 3.666 0 1.37-.397 2.533-1.005 3.981v1.847c0 .552-.448 1-1 1h-1.5c-.552 0-1-.448-1-1v-1h-13v1c0 .552-.448 1-1 1h-1.5c-.552 0-1-.448-1-1v-1.847c-.608-1.448-1.005-2.611-1.005-3.981 0-1.414.307-2.48.946-3.666.829-1.537 1.851-3.453 2.93-5.252.828-1.382 1.262-1.707 2.278-1.889 1.532-.275 2.918-.365 4.851-.365s3.319.09 4.851.365c1.016.182 1.45.507 2.278 1.889 1.079 1.799 2.101 3.715 2.93 5.252zm-16.059 2.994c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm10 1c0-.276-.224-.5-.5-.5h-7c-.276 0-.5.224-.5.5s.224.5.5.5h7c.276 0 .5-.224.5-.5zm2.941-5.527s-.74-1.826-1.631-3.142c-.202-.298-.515-.502-.869-.566-1.511-.272-2.835-.359-4.441-.359s-2.93.087-4.441.359c-.354.063-.667.267-.869.566-.891 1.315-1.631 3.142-1.631 3.142 1.64.313 4.309.497 6.941.497s5.301-.184 6.941-.497zm2.059 4.527c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm-18.298-6.5h-2.202c-.276 0-.5.224-.5.5v.511c0 .793.926.989 1.616.989l1.086-2z"})})})})]}),m.map((function(e){return Object(l.jsx)(u,{id:e.id,style:e.style,content:e.content},e.id)}))]})};var p=function(){var e=Object(a.useState)(!0),t=Object(r.a)(e,2),n=t[0],i=t[1];return n?Object(l.jsx)(b,{setShowPresentation:i}):Object(l.jsx)(d,{setShowPresentation:i})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),c(e),o(e)}))};o.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),j()}],[[13,1,2]]]);
//# sourceMappingURL=main.2a3bd948.chunk.js.map