CodeMirror.defineMode("dtd",function(k){function e(c,b){d=b;return c}function f(c,b){var a=c.next();if("<"==a&&c.eat("!")){if(c.eatWhile(/[\-]/))return b.tokenize=h,h(c,b);if(c.eatWhile(/[\w]/))return e("keyword","doindent")}else{if("<"==a&&c.eat("?"))return b.tokenize=l("meta","?>"),e("meta",a);if("#"==a&&c.eatWhile(/[\w]/))return e("atom","tag");if("|"==a)return e("keyword","seperator");if(a.match(/[\(\)\[\]\-\.,\+\?>]/))return e(null,a);if(a.match(/[\[\]]/))return e("rule",a);if('"'==a||"'"==a)return b.tokenize=
m(a),b.tokenize(c,b);if(c.eatWhile(/[a-zA-Z\?\+\d]/))return a=c.current(),null!==a.substr(a.length-1,a.length).match(/\?|\+/)&&c.backUp(1),e("tag","tag");if("%"==a||"*"==a)return e("number","number");c.eatWhile(/[\w\\\-_%.{,]/);return e(null,null)}}function h(c,b){for(var a=0,d;null!=(d=c.next());){if(2<=a&&">"==d){b.tokenize=f;break}a="-"==d?a+1:0}return e("comment","comment")}function m(c){return function(b,a){for(var d=!1,g;null!=(g=b.next());){if(g==c&&!d){a.tokenize=f;break}d=!d&&"\\"==g}return e("string",
"tag")}}function l(c,b){return function(a,d){for(;!a.eol();){if(a.match(b)){d.tokenize=f;break}a.next()}return c}}var n=k.indentUnit,d;return{startState:function(c){return{tokenize:f,baseIndent:c||0,stack:[]}},token:function(c,b){if(c.eatSpace())return null;var a=b.tokenize(c,b),e=b.stack[b.stack.length-1];"["==c.current()||"doindent"===d||"["==d?b.stack.push("rule"):"endtag"===d?b.stack[b.stack.length-1]="endtag":"]"==c.current()||"]"==d||">"==d&&"rule"==e?b.stack.pop():"["==d&&b.stack.push("[");
return a},indent:function(c,b){var a=c.stack.length;b.match(/\]\s+|\]/)?a-=1:">"===b.substr(b.length-1,b.length)&&("<"===b.substr(0,1)?a:"doindent"==d&&1<b.length?a:"doindent"==d?a--:">"==d&&1<b.length?a:"tag"==d&&">"!==b?a:"tag"==d&&"rule"==c.stack[c.stack.length-1]?a--:"tag"==d?a++:">"===b&&"rule"==c.stack[c.stack.length-1]&&">"===d?a--:">"===b&&"rule"==c.stack[c.stack.length-1]?a:"<"!==b.substr(0,1)&&">"===b.substr(0,1)?a-=1:">"===b?a:a-=1,null!=d&&"]"!=d||a--);return c.baseIndent+a*n},electricChars:"]>"}});
CodeMirror.defineMIME("application/xml-dtd","dtd");
