
var config = { "serverUrl": "http://192.168.0.91",
	};
	

var toWeb = function(obj, inner){
    var url = $api.attr(obj,'data-url') ||'';
    var title = $api.attr(obj,'data-title');
    var frameName = $api.attr(obj,'data-frameName');
    var options = {
            title: title,
            url: url,
            frameName: frameName
        };
    options = JSON.stringify(options);
    
    var str;
    if ( inner)
    	str = 'openInnerFrame('+options+')';
    else
    	str = 'indexToWeb('+options+')';
    api.execScript({
        name: 'root',
        script: str
    });
};
var toNativeSearch = function(obj){
    var title = $api.attr(obj,'data-title');
    var pageParam = {
            title: title
        };
    pageParam = JSON.stringify(pageParam);
    var str = 'indexToNativeSearch('+pageParam+')';
    api.execScript({
        name: 'root',
        script: str
    });
};


var frameArr = [];

//frame whether open
function isOpened(frmName){
    var i = 0, len = frameArr.length;
    var mark = false;
    for(i; i<len; i++){
        if(frameArr[i] === frmName){
            mark = true;
            return mark;
        }
    }
    return mark;
}

var toPage = function(obj)
{
	var frameName = $api.attr(obj,'data-frameName') ||'';
    var title = $api.attr(obj,'data-title');
    var winName = $api.attr(obj,'data-winName');
    var options = {
            title: title,
            frameName: frameName,
            winName: winName
        };
    options = JSON.stringify(options);
    
   //	if ( winName == api.winName)
   	
  // 	else
   	//openWin();
   	var str;
   	//alert("data-winName:" + winName)
   	//alert("api.winName:" + api.winName)
// 	if ( api.winName == winName)
// 	{
// 		str = 'openInnerFrame(' + options + ')';
// 	}
//  else
	//openWin(options);
	str = 'openWin(' + options + ')';
    
    api.execScript({
        name: 'root',
        script: str
    });
}

var toMuseumIndex = function(obj)
{
	var frameName = $api.attr(obj,'data-frameName') ||'';
    var title = $api.attr(obj,'data-title');
    var winName = $api.attr(obj,'data-winName');
    var id = $api.attr(obj,'data-id');
    var imageUrl = $api.attr(obj,'data-imageUrl');
    var options = {
    		id: id,
            title: title,
            frameName: frameName,
            winName: winName,
            imageUrl: imageUrl
        };
    options = JSON.stringify(options);
    
   	var str;

	str = 'openWin(' + options + ')';
    
    api.execScript({
        name: 'root',
        script: str
    });
}

var openWin = function(options)
{
	//alert('openWin');
	api.openWin({
            name: options['frameName'],
            url: './html/' + options['winName'] + '.html',
            pageParam: options,
            bounces: true,
            rect: {
                x: 0,
                y: 0,
                w: 'auto',
                h: 'auto'
            },
            reload: true,
            showProgress: true
        });
}

var openInnerFrame = function(options)
    {
    	alert('openInnerFrame');
    	alert(options['winName']);
    	api.openFrame({
            name: options['winName'],
            url: './html/'+ options['frameName'] +'.html',
            bounces: false,
            rect: {
                x: 0,
                y: headerPos.h,
                w: 'auto',
                h: mainPos.h
            }
        });
    }
