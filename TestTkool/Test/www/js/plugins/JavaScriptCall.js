//JavaScriptを呼び出し
/*:

@plugindesc
ツクール以外のJavascriptを呼び出します。

@author
*/

(function(){	
    var script = document.createElement( 'script' );

    script.type = 'text/javascript';
    script.src = 'js/plugins/jquery-3.1.0.min.js';

    var firstScript = document.getElementsByTagName( 'script' )[ 0 ];
    firstScript.parentNode.insertBefore( script, firstScript );
}());