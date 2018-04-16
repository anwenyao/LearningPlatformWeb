window.onload =function(){
	index_event();
}



//index.html
function index_event(){
	var texts = document.getElementsByClassName("text");
	var buttons = document.getElementsByClassName("button");
	var close = document.getElementById("close");
	var mask = document.getElementsByClassName("mask")[0];
	var login = document.getElementById("login");
	//设置input的红边框
	highlightBorder(texts);
	//end********************************

	//取消登录模拟button的a标签的默认行为
	for(var i = 0;i < buttons.length;++i){
		buttons[i].addEventListener('click',function(event){
			if(event.preventDefault){
            	event.preventDefault();
            }else{
            	event.returnValue=false;
            }
		});
	}

	//end********************************

	//点击关闭登录界面
	eventUtil.addHandler(close,'click',function(){
			ifHide(mask,false);
		});
	//end********************************


	//点击显示登录界面
	eventUtil.addHandler(login,'click',function(){
			ifHide(mask,true);
		});
	//end********************************
}// index.html end







	
	
	
