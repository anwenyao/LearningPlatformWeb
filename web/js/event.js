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
	for(var i = 0;i < texts.length;++i){
		eventUtil.addHandler(texts[i],'focus',function(){
			this.style.borderColor = "red";
		});
		eventUtil.addHandler(texts[i],'blur',function(){
			this.style.borderColor = "#ccc";
		});
	}
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


//experience.html
function experience_event(){
	alert(true);
	var subjects = document.getElementsByClassName('subject');

	for(var i = 0;i<subjects.length;++i){
			(function(i){
					eventUtil.addHandler(subjects[i],'click',function(){
					alert(true);
					// experience_selected(subjects[i],true);
					// ifHide(subjects[i],true);
					// var j = 0;
					// while(j < subjects.length){
					// 	if(j != i){
					// 		experience_selected(subjects[i],false);
					// 		ifHide(subjects[i],false);
					// 	}
					// 	++j;
					// }

				})
			})(i)
			
		}
		
}// experience.html end


function experience_selected(node,bool){
	if(bool){
		node.style.background = "white";
		node.style.color = "#666";
	}else{
		node.style.background = "#666";
		node.style.color = "white";
	}
}//end

// //元素是否隐藏
// function ifHide(node,bool){
//   if(bool){
//     node.style.display = "block";
//   }else{
//     node.style.display = "none";
//   }
// }//end
// //元素是否隐藏
// function ifHide(node,bool){
// 	if(bool){
// 		node.style.display = "block";
// 	}else{
// 		node.style.display = "none";
// 	}
// }//end

	
	
	
