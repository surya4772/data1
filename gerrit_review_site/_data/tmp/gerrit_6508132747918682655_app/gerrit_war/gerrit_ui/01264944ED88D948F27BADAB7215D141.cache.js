CodeMirror.defineMode("scheme",function(){function k(a){var c={};a=a.split(" ");for(var b=0;b<a.length;++b)c[a[b]]=!0;return c}function g(a,c,b){this.indent=a;this.type=c;this.prev=b}function m(a){return a.match(n)}function p(a){return a.match(q)}function h(a,c){!0===c&&a.backUp(1);return a.match(r)}function s(a){return a.match(t)}var l=k("\u03bb case-lambda call/cc class define-class exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt #f floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? #t tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?"),
u=k("define let letrec let* lambda"),n=new RegExp(/^(?:[-+]i|[-+][01]+#*(?:\/[01]+#*)?i|[-+]?[01]+#*(?:\/[01]+#*)?@[-+]?[01]+#*(?:\/[01]+#*)?|[-+]?[01]+#*(?:\/[01]+#*)?[-+](?:[01]+#*(?:\/[01]+#*)?)?i|[-+]?[01]+#*(?:\/[01]+#*)?)(?=[()\s;"]|$)/i),q=new RegExp(/^(?:[-+]i|[-+][0-7]+#*(?:\/[0-7]+#*)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?@[-+]?[0-7]+#*(?:\/[0-7]+#*)?|[-+]?[0-7]+#*(?:\/[0-7]+#*)?[-+](?:[0-7]+#*(?:\/[0-7]+#*)?)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?)(?=[()\s;"]|$)/i),t=new RegExp(/^(?:[-+]i|[-+][\da-f]+#*(?:\/[\da-f]+#*)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?@[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?[-+](?:[\da-f]+#*(?:\/[\da-f]+#*)?)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?)(?=[()\s;"]|$)/i),
r=new RegExp(/^(?:[-+]i|[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)i|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)@[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)?i|(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*))(?=[()\s;"]|$)/i);
return{startState:function(){return{indentStack:null,indentation:0,mode:!1,sExprComment:!1}},token:function(a,c){null==c.indentStack&&a.sol()&&(c.indentation=a.indentation());if(a.eatSpace())return null;var b=null;switch(c.mode){case "string":for(var d,b=!1;null!=(d=a.next());){if('"'==d&&!b){c.mode=!1;break}b=!b&&"\\"==d}b="string";break;case "comment":for(b=!1;null!=(d=a.next());){if("#"==d&&b){c.mode=!1;break}b="|"==d}b="comment";break;case "s-expr-comment":if(c.mode=!1,"("==a.peek()||"["==a.peek())c.sExprComment=
0;else{a.eatWhile(/[^/s]/);b="comment";break}default:if(d=a.next(),'"'==d)b=c.mode="string";else if("'"==d)b="atom";else if("#"==d)if(a.eat("|"))b=c.mode="comment";else if(a.eat(/[tf]/i))b="atom";else if(a.eat(";"))c.mode="s-expr-comment",b="comment";else{d=null;var e=!1,f=!0;a.eat(/[ei]/i)?e=!0:a.backUp(1);a.match(/^#b/i)?d=m:a.match(/^#o/i)?d=p:a.match(/^#x/i)?d=s:a.match(/^#d/i)?d=h:a.match(/^[-+0-9.]/,!1)?(f=!1,d=h):e||a.eat("#");null!=d&&(f&&!e&&a.match(/^#[ei]/i),d(a)&&(b="number"))}else if(/^[-+0-9.]/.test(d)&&
h(a,!0))b="number";else if(";"==d)a.skipToEnd(),b="comment";else if("("==d||"["==d){b="";for(e=a.column();null!=(f=a.eat(/[^\s\(\[\;\)\]]/));)b+=f;0<b.length&&u.propertyIsEnumerable(b)?c.indentStack=new g(e+2,d,c.indentStack):(a.eatSpace(),a.eol()||";"==a.peek()?c.indentStack=new g(e+1,d,c.indentStack):(b=e+a.current().length,c.indentStack=new g(b,d,c.indentStack)));a.backUp(a.current().length-1);"number"==typeof c.sExprComment&&c.sExprComment++;b="bracket"}else")"==d||"]"==d?(b="bracket",null!=c.indentStack&&
c.indentStack.type==(")"==d?"(":"[")&&(c.indentStack=c.indentStack.prev,"number"==typeof c.sExprComment&&0==--c.sExprComment&&(b="comment",c.sExprComment=!1))):(a.eatWhile(/[\w\$_\-!$%&*+\.\/:<=>?@\^~]/),b=l&&l.propertyIsEnumerable(a.current())?"builtin":"variable")}return"number"==typeof c.sExprComment?"comment":b},indent:function(a){return null==a.indentStack?a.indentation:a.indentStack.indent},lineComment:";;"}});CodeMirror.defineMIME("text/x-scheme","scheme");
