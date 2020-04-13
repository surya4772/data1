CodeMirror.defineMode("shell",function(){function g(a,c){for(var d=c.split(" "),b=0;b<d.length;b++)h[d[b]]=a}function e(a,c){var d=a.sol(),b=a.next();if("'"===b||'"'===b||"`"===b)return c.tokens.unshift(k(b)),(c.tokens[0]||e)(a,c);if("#"===b){if(d&&a.eat("!"))return a.skipToEnd(),"meta";a.skipToEnd();return"comment"}if("$"===b)return c.tokens.unshift(l),(c.tokens[0]||e)(a,c);if("+"===b||"="===b)return"operator";if("-"===b)return a.eat("-"),a.eatWhile(/\w/),"attribute";if(/\d/.test(b)&&(a.eatWhile(/\d/),
!/\w/.test(a.peek())))return"number";a.eatWhile(/[\w-]/);d=a.current();return"="===a.peek()&&/\w+/.test(d)?"def":h.hasOwnProperty(d)?h[d]:null}function k(a){return function(c,d){for(var b,e=!1,f=!1;null!=(b=c.next());){if(b===a&&!f){e=!0;break}if("$"===b&&!f&&"'"!==a){f=!0;c.backUp(1);d.tokens.unshift(l);break}f=!f&&"\\"===b}!e&&f||d.tokens.shift();return"`"===a||")"===a?"quote":"string"}}var h={};g("atom","true false");g("keyword","if then do else elif while until for in esac fi fin fil done exit set unset export function");
g("builtin","ab awk bash beep cat cc cd chown chmod chroot clear cp curl cut diff echo find gawk gcc get git grep kill killall ln ls make mkdir openssl mv nc node npm ping ps restart rm rmdir sed service sh shopt shred source sort sleep ssh start stop su sudo tee telnet top touch vi vim wall wc wget who write yes zsh");var l=function(a,c){1<c.tokens.length&&a.eat("$");var d=a.next(),b=/\w/;"{"===d&&(b=/[^}]/);if("("===d)return c.tokens[0]=k(")"),(c.tokens[0]||e)(a,c);/\d/.test(d)||(a.eatWhile(b),
a.eat("}"));c.tokens.shift();return"def"};return{startState:function(){return{tokens:[]}},token:function(a,c){return a.eatSpace()?null:(c.tokens[0]||e)(a,c)}}});CodeMirror.defineMIME("text/x-sh","shell");
