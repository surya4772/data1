CodeMirror.defineMIME("text/x-erlang","erlang");
CodeMirror.defineMode("erlang",function(t){function c(a,b,d){a.in_record="record"==d;switch(d){case "atom":return"atom";case "attribute":return"attribute";case "boolean":return"special";case "builtin":return"builtin";case "comment":return"comment";case "fun":return"meta";case "function":return"tag";case "guard":return"property";case "keyword":return"keyword";case "macro":return"variable-2";case "number":return"number";case "operator":return"operator";case "record":return"bracket";case "string":return"string";
case "type":return"def";case "variable":return"variable";case "error":return"error";case "separator":return null;case "open_paren":return null;case "close_paren":return null;default:return null}}function u(a,b){if(b.in_string)return b.in_string=!l(a,'"',"\\"),c(b,a,"string");if(b.in_atom)return b.in_atom=!l(a,"'","\\"),c(b,a,"atom");if(a.eatSpace())return c(b,a,"whitespace");if(""==e(b).token&&a.match(/-\s*[a-z\u00df-\u00f6\u00f8-\u00ff][\w\u00d8-\u00de\u00c0-\u00d6\u00df-\u00f6\u00f8-\u00ff]*/))return f(a.current(),
v)?c(b,a,"type"):c(b,a,"attribute");var d=a.next();if("%"==d)return a.skipToEnd(),c(b,a,"comment");if("?"==d)return a.eatWhile(m),c(b,a,"macro");if("#"==d)return a.eatWhile(m),c(b,a,"record");if("$"==d)return"\\"!=a.next()||a.match(w)?c(b,a,"number"):c(b,a,"error");if("'"==d){if(!(b.in_atom=!l(a,"'","\\"))){if(a.match(/\s*\/\s*[0-9]/,!1))return a.match(/\s*\/\s*[0-9]/,!0),b.tokenStack.pop(),c(b,a,"fun");if(a.match(/\s*\(/,!1)||a.match(/\s*:/,!1))return c(b,a,"function")}return c(b,a,"atom")}if('"'==
d)return b.in_string=!l(a,'"',"\\"),c(b,a,"string");if(/[A-Z_\u00d8-\u00de\u00c0-\u00d6]/.test(d))return a.eatWhile(m),c(b,a,"variable");if(/[a-z_\u00df-\u00f6\u00f8-\u00ff]/.test(d)){a.eatWhile(m);if(a.match(/\s*\/\s*[0-9]/,!1))return a.match(/\s*\/\s*[0-9]/,!0),b.tokenStack.pop(),c(b,a,"fun");d=a.current();return f(d,x)?(k(b,a),c(b,a,"keyword")):a.match(/\s*\(/,!1)?!f(d,y)||n(a,":")&&!n(a,"erlang:")?f(d,z)?c(b,a,"guard"):c(b,a,"function"):c(b,a,"builtin"):f(d,A)?c(b,a,"operator"):a.match(/\s*:/,
!1)?"erlang"==d?c(b,a,"builtin"):c(b,a,"function"):f(d,["true","false"])?c(b,a,"boolean"):c(b,a,"atom")}var g=/[0-9]/,h=/[0-9a-zA-Z]/;return g.test(d)?(a.eatWhile(g),a.eat("#")?a.eatWhile(h):(a.eat(".")&&a.eatWhile(g),a.eat(/[eE]/)&&(a.eat(/[-+]/),a.eatWhile(g))),c(b,a,"number")):p(a,B,q)?(k(b,a),c(b,a,"open_paren")):p(a,C,D)?(k(b,a),c(b,a,"close_paren")):r(a,E,F)?(b.in_record||k(b,a),c(b,a,"separator")):r(a,G,H)?c(b,a,"operator"):c(b,a,null)}function n(a,b){var d=a.start,c=b.length;return c<=d?a.string.slice(d-
c,d)==b:!1}function p(a,b,d){if(1==a.current().length&&b.test(a.current())){for(a.backUp(1);b.test(a.peek());)if(a.next(),f(a.current(),d))return!0;a.backUp(a.current().length-1)}return!1}function r(a,b,d){if(1==a.current().length&&b.test(a.current())){for(;b.test(a.peek());)a.next();for(;0<a.current().length;){if(f(a.current(),d))return!0;a.backUp(1)}a.next()}return!1}function l(a,b,d){for(;!a.eol();){var c=a.next();if(c==b)return!0;c==d&&a.next()}return!1}function f(a,b){return-1<b.indexOf(a)}function s(a){this.token=
a?a.current():"";this.column=a?a.column():0;this.indent=a?a.indentation():0}function e(a,b){var d=a.tokenStack.length,c=b?b:1;return d<c?new s:a.tokenStack[d-c]}function k(a,b){var d=b.current(),c=e(a).token;if("."==d)return a.tokenStack=[],!1;if(f(d,", : of cond let query".split(" ")))return!1;var h;a:switch(c+" "+d){case "when ;":h=!0;break a;default:h=!1}if(h)return!1;if(I(c,d))return a.tokenStack.pop(),!1;a:switch(c+" "+d){case "when ->":c=!0;break a;case "-> end":c=!0;break a;default:c=!1}if(c)return a.tokenStack.pop(),
k(a,b);if(f(d,["after","catch"]))return!1;a.tokenStack.push(new s(b));return!0}function I(a,b){switch(a+" "+b){case "( )":return!0;case "[ ]":return!0;case "{ }":return!0;case "<< >>":return!0;case "begin end":return!0;case "case end":return!0;case "fun end":return!0;case "if end":return!0;case "receive end":return!0;case "try end":return!0;case "-> catch":return!0;case "-> after":return!0;case "-> ;":return!0;default:return!1}}var v=["-type","-spec","-export_type","-opaque"],x="after begin catch case cond end fun if let of query receive try when".split(" "),
E=/[\->\.,:;]/,F=["->",";",":",".",","],A="and andalso band bnot bor bsl bsr bxor div not or orelse rem xor".split(" "),G=/[\+\-\*\/<>=\|:!]/,H="+ - * / > >= < =< =:= == =/= /= || <- !".split(" "),B=/[<\(\[\{]/,q=["<<","(","[","{"],C=/[>\)\]\}]/,D=["}","]",")",">>"],z="is_atom is_binary is_bitstring is_boolean is_float is_function is_integer is_list is_number is_pid is_port is_record is_reference is_tuple atom binary bitstring boolean function integer list number pid port record reference tuple".split(" "),
y="abs adler32 adler32_combine alive apply atom_to_binary atom_to_list binary_to_atom binary_to_existing_atom binary_to_list binary_to_term bit_size bitstring_to_list byte_size check_process_code contact_binary crc32 crc32_combine date decode_packet delete_module disconnect_node element erase exit float float_to_list garbage_collect get get_keys group_leader halt hd integer_to_list internal_bif iolist_size iolist_to_binary is_alive is_atom is_binary is_bitstring is_boolean is_float is_function is_integer is_list is_number is_pid is_port is_process_alive is_record is_reference is_tuple length link list_to_atom list_to_binary list_to_bitstring list_to_existing_atom list_to_float list_to_integer list_to_pid list_to_tuple load_module make_ref module_loaded monitor_node node node_link node_unlink nodes notalive now open_port pid_to_list port_close port_command port_connect port_control pre_loaded process_flag process_info processes purge_module put register registered round self setelement size spawn spawn_link spawn_monitor spawn_opt split_binary statistics term_to_binary time throw tl trunc tuple_size tuple_to_list unlink unregister whereis".split(" "),
m=/[\w@\u00d8-\u00de\u00c0-\u00d6\u00df-\u00f6\u00f8-\u00ff]/,w=/[0-7]{1,3}|[bdefnrstv\\"']|\^[a-zA-Z]|x[0-9a-zA-Z]{2}|x{[0-9a-zA-Z]+}/;return{startState:function(){return{tokenStack:[],in_record:!1,in_string:!1,in_atom:!1}},token:function(a,b){return u(a,b)},indent:function(a,b){var c=t.indentUnit,g=e(a).token,h;h=(h=b.match(/[^a-z]/))?b.slice(0,h.index):b;return a.in_string||a.in_atom?CodeMirror.Pass:""==g?0:f(g,q)?e(a).column+g.length:"when"==g?e(a).column+g.length+1:"fun"==g&&""==h?e(a).column+
g.length:"->"==g?f(h,["end","after","catch"])?e(a,2).column:"fun"==e(a,2).token?e(a,2).column+c:""==e(a,2).token?c:e(a).indent+c:f(h,["after","catch","of"])?e(a).indent:e(a).column+c},lineComment:"%"}});
