CodeMirror.defineMode("diff",function(){var c={"+":"positive","-":"negative","@":"meta"};return{token:function(a){var b=a.string.search(/[\t ]+?$/);if(!a.sol()||0===b)return a.skipToEnd(),("error "+(c[a.string.charAt(0)]||"")).replace(/ $/,"");var d=c[a.peek()]||a.skipToEnd();-1===b?a.skipToEnd():a.pos=b;return d}}});CodeMirror.defineMIME("text/x-diff","diff");
