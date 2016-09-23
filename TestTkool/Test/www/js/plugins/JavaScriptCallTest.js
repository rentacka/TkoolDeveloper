//JavaScriptを呼び出し

/*:ja
 * @plugindesc JavascriptTest
 * @author マネーコイコイさん　https://twitter.com/ren_tacka
 *
 *
 * @help
 *
 * 複数のJavascriptを読み込むときはこのプラグインを読み込んだようにエディターに複数読み込ませてください。
 *
 */

(function(){	
      
    $(function(){
        var str = "    foo     ";
        var src = jQuery.trim(str); // "foo" を返す
        alert("'" + src + "' - no longer");
    });

    
    $(function(){        
        alert('Hello World!');
    });
}());