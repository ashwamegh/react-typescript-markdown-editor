(this.webpackJsonpgournal=this.webpackJsonpgournal||[]).push([[0],{25:function(n,e,t){n.exports=t(33)},30:function(n,e,t){},33:function(n,e,t){"use strict";t.r(e);var r=t(1),o=t.n(r),c=t(19),a=t.n(c),i=(t(30),t(3)),u=t(22),l=t(21),d=t(2);function b(){var n=Object(i.a)(["\n          cursor: pointer;\n        "]);return b=function(){return n},n}function f(){var n=Object(i.a)(["\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        background-color: #f8f541;\n        padding: 24px 32px;\n        box-shadow: 0px -2px 8px #000;\n        font-size: 16px;\n    "]);return f=function(){return n},n}function s(){var n=Object(i.a)(["\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        background-color: #f89541;\n        padding: 24px 32px;\n        font-size: 16px;\n      "]);return s=function(){return n},n}var p=function(n){var e=n.theme,t=n.toggleTheme;return Object(d.c)("header",{css:"dark"===e?Object(d.b)(s()):Object(d.b)(f())},Object(d.c)("div",{className:"header-title"},"Markdown Editor"),Object(d.c)("div",{css:Object(d.b)(b()),onClick:t},"dark"===e?Object(d.c)(l.a,null):Object(d.c)(u.a,null)))},h=t(11),g=t(13);function x(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return x=function(){return n},n}function j(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return j=function(){return n},n}var v=g.a.div(j()),O=g.a.div(x());function m(){var n=Object(i.a)(["\n            height: 100%;\n            border-radius: 4px;\n            border: none;\n            box-shadow: 2px 2px 10px #999;\n            font-size: 100%;\n            line-height: inherit;\n            padding: 8px 16px;\n            resize: none;\n            overflow: auto;\n            &:focus {\n              outline: none;\n            }\n          "]);return m=function(){return n},n}function w(){var n=Object(i.a)(["\n            height: 100%;\n            border-radius: 4px;\n            border: none;\n            box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);\n            background: #000;\n            color: #fff;\n            font-size: 100%;\n            line-height: inherit;\n            padding: 8px 16px;\n            resize: none;\n            overflow: auto;\n            &:focus {\n              outline: none;\n            }\n          "]);return w=function(){return n},n}function k(){var n=Object(i.a)(["\n            flex: 1;\n            padding: 16px;\n          "]);return k=function(){return n},n}var y=function(n){var e=n.markdownContent,t=n.setMarkdownContent,r=n.theme;return Object(d.c)(v,{id:"editor",css:Object(d.b)(k())},Object(d.c)("h2",null,"Editor"),Object(d.c)("textarea",{onChange:function(n){return t(n.target.value)},css:"dark"===r?Object(d.b)(w()):Object(d.b)(m()),rows:9,value:e}))},C=t(24),_=t.n(C);function E(){var n=Object(i.a)(["\n                height: 100%;\n                border-radius: 4px;\n                border: none;\n                box-shadow: 2px 2px 10px #999;\n                font-size: 100%;\n                line-height: inherit;\n                overflow: auto;\n                background: #fff;\n                padding: 8px 16px;\n                color: #000;\n            "]);return E=function(){return n},n}function z(){var n=Object(i.a)(["\n                height: 100%;\n                border-radius: 4px;\n                border: none;\n                box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);\n                font-size: 100%;\n                line-height: inherit;\n                overflow: auto;\n                background: #000;\n                padding: 8px 16px;\n                color: #fff;\n                "]);return z=function(){return n},n}function H(){var n=Object(i.a)(["\n            flex: 1;\n            padding: 16px;\n            "]);return H=function(){return n},n}var T=function(n){var e=n.markdownContent,t=n.theme,r=_()(e);return Object(d.c)(v,{id:"preview",css:Object(d.b)(H())},Object(d.c)("h2",null,"Preview"),Object(d.c)("div",{css:"dark"===t?Object(d.b)(z()):Object(d.b)(E()),dangerouslySetInnerHTML:{__html:r}}))};function S(){var n=Object(i.a)(["\n        padding: 32px;\n        padding-top: 0px;\n        height: calc(100vh - 170px);\n        "]);return S=function(){return n},n}var M=function(n){var e=n.theme,t=Object(r.useState)("\n# H1\n## H2\n### H3\n#### H4\n##### H5\n\n__bold__\n**bold**\n_italic_\n"),o=Object(h.a)(t,2),c=o[0],a=o[1];return Object(d.c)(O,{css:Object(d.b)(S())},Object(d.c)(y,{theme:e,markdownContent:c,setMarkdownContent:a}),Object(d.c)(T,{theme:e,markdownContent:c}))};function I(){var n=Object(i.a)(["\n                padding: 16px 0px;\n                overflow: hidden;\n                position: absolute;\n                width: 100%;\n                text-align: center;\n                bottom: 0px;\n                color: #f89541;\n                background: #000;\n            "]);return I=function(){return n},n}var N=function(){return Object(d.c)("footer",null,Object(d.c)("div",{className:"footer-description",css:Object(d.b)(I())},Object(d.c)("span",null,"</>"),Object(d.c)("span",null," with ",Object(d.c)("a",{href:"https://reactjs.org",target:"_blank"},"React.js")," & ",Object(d.c)("a",{href:"https://www.typescriptlang.org/",target:"_blank"},"TypeScript"))))};var B=function(){var n=function(){var n=Object(r.useState)("light"),e=Object(h.a)(n,2),t=e[0],o=e[1];return Object(r.useEffect)((function(){var n=localStorage.getItem("theme");n&&o(n)}),[]),{theme:t,toggleTheme:function(){o("dark"===t?"light":"dark")}}}(),e=n.theme,t=n.toggleTheme,c="light"===e?{backgroundColor:"#eee",color:"#000"}:{backgroundColor:"#171616",color:"#fff"};return o.a.createElement("div",{className:"App",style:c},o.a.createElement(p,{theme:e,toggleTheme:t}),o.a.createElement(M,{theme:e}),o.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.928fcc3b.chunk.js.map