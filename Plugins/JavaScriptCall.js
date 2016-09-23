//JavaScriptを呼び出し

/*:ja
 * @plugindesc ツクール以外のJavascriptを呼び出します。
 * @author マネーコイコイさん　https://twitter.com/ren_tacka
 *
 * @param jsSrc
 * @desc urlとかjsのパス
 * @default js/plugins/jquery-3.1.0.min.js
 *
 *
 * @help
 *
 * 複数のJavascriptを読み込むときはこのプラグインを読み込んだようにエディターに複数読み込ませてください。
 *
 */


(function(){	
    var parameters = PluginManager.parameters('JavaScriptCall');
    var jsSrc = String(parameters['jsSrc']);
    
    var script = document.createElement( 'script' );

    script.type = 'text/javascript';
    script.src = jsSrc;

    var firstScript = document.getElementsByTagName( 'script' )[ 0 ];
    firstScript.parentNode.insertBefore( script, firstScript );
}());