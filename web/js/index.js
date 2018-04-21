window.onload =function(){

	//点击登录验证用户名和密码
	var warnning = document.getElementById('warnning');
	var signin = document.getElementById('signin');
	var user = document.getElementById('user');
	var psw = document.getElementById('psw');
	var texts = document.getElementsByClassName("text");
	var buttons = document.getElementsByClassName("button");
	var close = document.getElementById("close");
	var mask = document.getElementsByClassName("mask")[0];
	var login = document.getElementById("login");
	eventUtil.addHandler(signin,'click',function(){
		
		if (user.value == 'admin' && psw.value == '123') {
			window.location = "./homepage.html";
			console.log(1);
			warnning.innerHTML = "";
		}else{
			warnning.innerHTML = "<span class='warnning cr'>!</span>用户名或者密码错误";
		}
	});

	
	//设置input的红边框
	highlightBorder(texts);
	//end********************************


	//点击关闭登录界面
	eventUtil.addHandler(close,'click',function(){
			ifHide(mask,false);
			warnning.innerHTML = '';
		});
	//end********************************


	//点击显示登录界面
	eventUtil.addHandler(login,'click',function(){
			ifHide(mask,true);
			alert('用户名：admin，密码：123');
		});
	//end********************************
}








	
	
	
