/**
 * Created by xiaoPu on 2014/8/14.
 */
//改写<a>标签的链接
function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return false;
    //获取当前<a>标签的href值
    var source = whichpic.href;
    /*获取当前图片占位的对象，并将<a>标签的href传给图片占位的src，展现图片*/
    var placeholder = document.getElementById("placeholder");
    placeholder.src = source;
    if (document.getElementById("description")) {
        var text = whichpic.title ? whichpic.title:"";

        var description = document.getElementById("description");
        //将description的文本改成当前链接的title值
//    description.innerHTML = text;
       if(description.firstChild.nodeType == 3){ //如果是文本结点
           description.firstChild.nodeValue = text;
       }
    }
    return true;
}


//分离javscript，将onclick函数也放到外部的javascript文件当中
/*window.onload = prepareLinks;//文档加载完成时，执行prepareLinks()事件
 function prepareLinks(){
 if(!document.getElementsByTagName) return false; //向后兼容：检测当前浏览器支不支持getElementsByTagName方法，不支持就返回
 var links = document.getElementsByTagName("a");//搜索当前文档中所有的<a>标签，返回link数组
 for(var i = 0;i<links.length;i++){   //遍历links，当搜索到class为imglink的<a>标签时，给其添加onclick事件
 if(links[i].getAttribute("class") =="imglink"){
 links[i].onclick = function(){
 showPic(this);
 return false;
 }
 }

 }
 }*/

addLoadEvent(prepareGallery);

function prepareGallery() {
    //检查点
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    //声明变量
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    //遍历
    for (var i = 0; i < links.length; i++) {
        //改变行为
        links[i].onclick = function () {
            return showPic(this)?false:true;
        }
    }
}


function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != "function") {
        window.onload = func;
    }
    else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

